import { Project, MaybeLocalized } from './types';

// دالة مساعدة لتحويل MaybeLocalized إلى LocalizedString
function normalizeLocalized(value: MaybeLocalized | undefined): { ar: string; en: string } {
  if (!value) return { ar: '', en: '' };
  if (typeof value === 'string') return { ar: value, en: value };
  return { ar: value.ar || '', en: value.en || '' };
}

// نوع البيانات للخريطة
export interface MapProject {
  id: string;
  slug: string;
  title: { ar: string; en: string };
  developer: string;
  coordinates: {
    lat: number;
    lng: number;
    isValid: boolean;
  };
  status: 'ready' | 'under-construction' | 'off-plan' | 'new-launch';
  statusColor: string;
  price?: {
    min: number;
    max?: number;
    currency: string;
  };
  image?: string;
  location: { ar: string; en: string };
  pois: POI[];
  category: string;
}

export interface POI {
  id: string;
  name: { ar: string; en: string };
  category: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  distance?: string;
  icon?: string;
}

export interface MapStats {
  totalProjects: number;
  validCoordinates: number;
  missingCoordinates: number;
  statusBreakdown: {
    ready: number;
    underConstruction: number;
    offPlan: number;
    newLaunch: number;
  };
  developerBreakdown: Record<string, number>;
}

export interface MapError {
  id: string;
  projectId: string;
  message: string;
  level: 'warning' | 'error';
  timestamp: string;
}

class MapService {
  private errors: MapError[] = [];
  private stats: MapStats | null = null;

  /**
   * تحويل مشروع إلى بيانات خريطة مع معالجة الأخطاء
   */
  private transformProjectToMapData(project: Project): MapProject | null {
    // إنشاء معرف فريد للمشروع
    const projectId = project.id || project.projectID || project.slug || `project-${Date.now()}`;
    
    try {
      // التحقق من صحة الإحداثيات
      const coordinates = this.validateCoordinates(
        project.latitude,
        project.longitude,
        projectId
      );

      // تحديد حالة المشروع ولونه
      const status = this.determineProjectStatus(project.projectStatus);
      const statusColor = this.getStatusColor(status);

      // معالجة نقاط الاهتمام
      const pois = this.processPOIs(project.mapPointsOfInterest, projectId);

      // تحديد فئة المشروع
      const category = this.determineProjectCategory(project.propertyTypes);

      return {
        id: projectId,
        slug: project.slug,
        title: normalizeLocalized(project.projectName),
        developer: project.developer || 'Unknown Developer',
        coordinates,
        status,
        statusColor,
        price: {
          min: project.minPriceAED || 0,
          max: project.maxPriceAED,
          currency: 'AED'
        },
        image: project.heroImage,
        location: normalizeLocalized(project.location),
        pois,
        category
      };
    } catch (error) {
      this.logError(projectId, `Failed to transform project: ${error}`, 'error');
      return null;
    }
  }

  /**
   * التحقق من صحة الإحداثيات
   */
  private validateCoordinates(
    lat: number | null | undefined,
    lng: number | null | undefined,
    projectId: string
  ): { lat: number; lng: number; isValid: boolean } {
    // الإحداثيات الافتراضية لدبي
    const defaultDubaiCoords = { lat: 25.2048, lng: 55.2708 };

    // التحقق من وجود الإحداثيات
    if (lat === null || lat === undefined || lng === null || lng === undefined) {
      this.logError(projectId, 'Missing coordinates', 'warning');
      return { ...defaultDubaiCoords, isValid: false };
    }

    // التحقق من صحة القيم
    if (typeof lat !== 'number' || typeof lng !== 'number' || 
        isNaN(lat) || isNaN(lng) || !isFinite(lat) || !isFinite(lng)) {
      this.logError(projectId, 'Invalid coordinate values', 'warning');
      return { ...defaultDubaiCoords, isValid: false };
    }

    // التحقق من النطاق المعقول لدبي
    if (lat < 24.5 || lat > 25.5 || lng < 54.5 || lng > 56.0) {
      this.logError(projectId, 'Coordinates outside Dubai range', 'warning');
      return { ...defaultDubaiCoords, isValid: false };
    }

    // التحقق من الإحداثيات الصفرية
    if (lat === 0 || lng === 0) {
      this.logError(projectId, 'Zero coordinates detected', 'warning');
      return { ...defaultDubaiCoords, isValid: false };
    }

    return { lat, lng, isValid: true };
  }

  /**
   * تحديد حالة المشروع
   */
  private determineProjectStatus(
    projectStatus: MaybeLocalized | undefined
  ): 'ready' | 'under-construction' | 'off-plan' | 'new-launch' {
    const normalizedStatus = normalizeLocalized(projectStatus);
    if (!normalizedStatus.en) return 'off-plan';

    const status = normalizedStatus.en.toLowerCase();
    
    if (status.includes('ready') || status.includes('completed') || status.includes('delivered')) {
      return 'ready';
    }
    if (status.includes('construction') || status.includes('building')) {
      return 'under-construction';
    }
    if (status.includes('new') || status.includes('launch') || status.includes('upcoming')) {
      return 'new-launch';
    }
    
    return 'off-plan';
  }

  /**
   * الحصول على لون حالة المشروع
   */
  private getStatusColor(status: string): string {
    const colors = {
      'ready': '#10B981', // أخضر
      'under-construction': '#F59E0B', // أصفر
      'off-plan': '#3B82F6', // أزرق
      'new-launch': '#8B5CF6' // بنفسجي
    };
    return colors[status as keyof typeof colors] || '#6B7280';
  }

  /**
   * معالجة نقاط الاهتمام
   */
  private processPOIs(mapPOIs: any, projectId: string): POI[] {
    if (!mapPOIs || typeof mapPOIs !== 'object') return [];

    const pois: POI[] = [];
    let poiIndex = 0;

    try {
      Object.entries(mapPOIs).forEach(([category, items]) => {
        if (Array.isArray(items)) {
          items.forEach((item: string) => {
            // استخراج المسافة من النص إذا كانت موجودة
            const distanceMatch = item.match(/\(([^)]+)\)$/);
            const distance = distanceMatch ? distanceMatch[1] : undefined;
            const name = item.replace(/\s*\([^)]+\)$/, '').trim();

            pois.push({
              id: `${projectId}-poi-${poiIndex++}`,
              name: { ar: name, en: name },
              category,
              coordinates: { lat: 0, lng: 0 }, // سيتم تحديدها لاحقاً
              distance,
              icon: this.getPOIIcon(category)
            });
          });
        }
      });
    } catch (error) {
      this.logError(projectId, `Failed to process POIs: ${error}`, 'warning');
    }

    return pois;
  }

  /**
   * الحصول على أيقونة نقطة الاهتمام
   */
  private getPOIIcon(category: string): string {
    const icons: Record<string, string> = {
      'schools': '🏫',
      'shopping': '🛍️',
      'hospitals': '🏥',
      'restaurants': '🍽️',
      'parks': '🌳',
      'golf': '⛳',
      'beach': '🏖️',
      'metro': '🚇',
      'airport': '✈️',
      'mall': '🏬',
      'mosque': '🕌'
    };

    const categoryLower = category.toLowerCase();
    for (const [key, icon] of Object.entries(icons)) {
      if (categoryLower.includes(key)) return icon;
    }
    return '📍';
  }

  /**
   * تحديد فئة المشروع
   */
  private determineProjectCategory(propertyTypes: MaybeLocalized[] | undefined): string {
    if (!propertyTypes || !Array.isArray(propertyTypes) || propertyTypes.length === 0) {
      return 'mixed';
    }

    const firstType = propertyTypes[0];
    const normalizedType = normalizeLocalized(firstType);
    const typeText = normalizedType.en.toLowerCase();
    
    if (typeText.includes('villa')) return 'villas';
    if (typeText.includes('apartment')) return 'apartments';
    if (typeText.includes('townhouse')) return 'townhouses';
    if (typeText.includes('penthouse')) return 'penthouses';
    
    return 'mixed';
  }

  /**
   * تسجيل الأخطاء
   */
  private logError(projectId: string, message: string, level: 'error' | 'warning' = 'error'): void {
    const error: MapError = {
      id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      projectId,
      message,
      level,
      timestamp: new Date().toISOString()
    };

    this.errors.push(error);

    // طباعة الخطأ في وحدة التحكم
    if (level === 'error') {
      console.error(`Map Error [${projectId}]:`, message);
    } else {
      console.warn(`Map Warning [${projectId}]:`, message);
    }
  }

  /**
   * معالجة قائمة المشاريع وتحويلها لبيانات خريطة
   */
  public async processProjectsForMap(projects: Project[]): Promise<{
    mapProjects: MapProject[];
    stats: MapStats;
    errors: MapError[];
  }> {
    // إعادة تعيين الأخطاء
    this.errors = [];

    // تحويل المشاريع
    const mapProjects: MapProject[] = [];
    
    for (const project of projects) {
      const mapProject = this.transformProjectToMapData(project);
      if (mapProject) {
        mapProjects.push(mapProject);
      }
    }

    // حساب الإحصائيات
    this.stats = this.calculateStats(mapProjects, projects.length);

    // طباعة تقرير في وحدة التحكم
    this.printConsoleReport();

    return {
      mapProjects,
      stats: this.stats,
      errors: [...this.errors]
    };
  }

  /**
   * حساب الإحصائيات
   */
  private calculateStats(mapProjects: MapProject[], totalProjects: number): MapStats {
    const validCoordinates = mapProjects.filter(p => p.coordinates.isValid).length;
    const missingCoordinates = totalProjects - validCoordinates;

    const statusBreakdown = {
      ready: mapProjects.filter(p => p.status === 'ready').length,
      underConstruction: mapProjects.filter(p => p.status === 'under-construction').length,
      offPlan: mapProjects.filter(p => p.status === 'off-plan').length,
      newLaunch: mapProjects.filter(p => p.status === 'new-launch').length
    };

    const developerBreakdown: Record<string, number> = {};
    mapProjects.forEach(project => {
      const dev = project.developer || 'Unknown';
      developerBreakdown[dev] = (developerBreakdown[dev] || 0) + 1;
    });

    return {
      totalProjects,
      validCoordinates,
      missingCoordinates,
      statusBreakdown,
      developerBreakdown
    };
  }

  /**
   * طباعة تقرير في وحدة التحكم
   */
  private printConsoleReport(): void {
    if (!this.stats) return;

    console.log('\n🗺️ ===== تقرير نظام الخرائط الديناميكي =====');
    console.log(`✅ ${this.stats.validCoordinates} خريطة تم تحميلها بنجاح`);
    console.log(`⚠️ ${this.stats.missingCoordinates} خريطة تم تجاهلها بسبب غياب الإحداثيات`);
    
    console.log('\n📊 توزيع حالات المشاريع:');
    console.log(`🟢 جاهز للسكن: ${this.stats.statusBreakdown.ready}`);
    console.log(`🟡 قيد الإنشاء: ${this.stats.statusBreakdown.underConstruction}`);
    console.log(`🔵 على الخارطة: ${this.stats.statusBreakdown.offPlan}`);
    console.log(`🟣 إطلاق جديد: ${this.stats.statusBreakdown.newLaunch}`);

    console.log('\n🏢 توزيع المطورين:');
    Object.entries(this.stats.developerBreakdown)
      .sort(([,a], [,b]) => b - a)
      .slice(0, 5)
      .forEach(([dev, count]) => {
        console.log(`   ${dev}: ${count} مشروع`);
      });

    if (this.errors.length > 0) {
      const warnings = this.errors.filter(e => e.level === 'warning').length;
      const errors = this.errors.filter(e => e.level === 'error').length;
      console.log(`\n⚠️ ${warnings} تحذير، ${errors} خطأ تم تسجيلها`);
    }

    console.log('===============================================\n');
  }

  /**
   * الحصول على الأخطاء
   */
  public getErrors(): MapError[] {
    return [...this.errors];
  }

  /**
   * الحصول على الإحصائيات
   */
  public getStats(): MapStats | null {
    return this.stats;
  }

  /**
   * طباعة تقرير الأخطاء في وحدة التحكم
   */
  public printErrorReport(): void {
    if (this.errors.length === 0) {
      console.log('✅ لا توجد أخطاء في الخرائط');
      return;
    }

    console.log('\n📊 تقرير أخطاء الخرائط:');
    console.log('===============================================');
    
    const warnings = this.errors.filter(e => e.level === 'warning').length;
    const errors = this.errors.filter(e => e.level === 'error').length;
    
    console.log(`⚠️ التحذيرات: ${warnings}`);
    console.log(`❌ الأخطاء: ${errors}`);
    console.log(`📝 إجمالي المشاكل: ${this.errors.length}`);
    
    if (errors > 0) {
      console.log('\n❌ الأخطاء الحرجة:');
      this.errors
        .filter(e => e.level === 'error')
        .slice(0, 5)
        .forEach(error => {
          console.log(`   - [${error.projectId}]: ${error.message}`);
        });
    }
    
    console.log('===============================================\n');
  }
}

// إنشاء مثيل واحد من الخدمة
export const mapService = new MapService();

// دوال مساعدة للتصدير
export const processProjectsForMap = (projects: Project[]) => 
  mapService.processProjectsForMap(projects);

export const getMapStats = () => mapService.getStats();
export const getMapErrors = () => mapService.getErrors();
export const printMapErrorReport = () => mapService.printErrorReport();