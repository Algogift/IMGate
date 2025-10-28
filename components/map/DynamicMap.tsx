'use client';

import React, { useState, useEffect, useMemo, useCallback } from 'react';
import dynamic from 'next/dynamic';
import { MapProject, processProjectsForMap } from '@/lib/mapService';
import { Project } from '@/lib/types';
import { Loader2, MapPin, AlertCircle } from 'lucide-react';

// تحميل ديناميكي لمكونات الخريطة لتجنب مشاكل SSR
const MapContainer = dynamic(() => import('react-leaflet').then(mod => mod.MapContainer), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center bg-gray-100 rounded-lg">
      <div className="text-center">
        <Loader2 className="w-8 h-8 animate-spin mx-auto mb-2 text-blue-600" />
        <p className="text-gray-600">جاري تحميل الخريطة...</p>
      </div>
    </div>
  )
});

const TileLayer = dynamic(() => import('react-leaflet').then(mod => mod.TileLayer), { ssr: false });
const Marker = dynamic(() => import('react-leaflet').then(mod => mod.Marker), { ssr: false });
const Popup = dynamic(() => import('react-leaflet').then(mod => mod.Popup), { ssr: false });
const Circle = dynamic(() => import('react-leaflet').then(mod => mod.Circle), { ssr: false });

// تحميل ديناميكي لـ Leaflet
let L: any = null;
if (typeof window !== 'undefined') {
  import('leaflet').then((leaflet) => {
    L = leaflet.default;
    
    // إصلاح أيقونات Leaflet الافتراضية
    delete (L.Icon.Default.prototype as any)._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: '/leaflet/marker-icon-2x.png',
      iconUrl: '/leaflet/marker-icon.png',
      shadowUrl: '/leaflet/marker-shadow.png',
    });
  });
}

interface DynamicMapProps {
  projects: Project[];
  selectedProjectId?: string;
  onProjectSelect?: (project: MapProject) => void;
  showHeatmap?: boolean;
  showMiniMap?: boolean;
  showPOIs?: boolean;
  className?: string;
  height?: string;
  locale?: 'ar' | 'en';
}

interface MapStats {
  totalProjects: number;
  validCoordinates: number;
  missingCoordinates: number;
  statusBreakdown: {
    ready: number;
    underConstruction: number;
    offPlan: number;
    newLaunch: number;
  };
}

const DynamicMap: React.FC<DynamicMapProps> = ({
  projects,
  selectedProjectId,
  onProjectSelect,
  showHeatmap = false,
  showMiniMap = true,
  showPOIs = true,
  className = '',
  height = '500px',
  locale = 'en'
}) => {
  const [mapProjects, setMapProjects] = useState<MapProject[]>([]);
  const [stats, setStats] = useState<MapStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  // معالجة البيانات
  useEffect(() => {
    const processData = async () => {
      try {
        setLoading(true);
        setError(null);

        const result = await processProjectsForMap(projects);
        setMapProjects(result.mapProjects);
        setStats(result.stats);

        // حفظ تقرير الأخطاء إذا كانت موجودة
        if (result.errors.length > 0) {
          console.warn(`تم العثور على ${result.errors.length} خطأ في بيانات الخرائط`);
        }
      } catch (err) {
        console.error('خطأ في معالجة بيانات الخرائط:', err);
        setError('فشل في تحميل بيانات الخرائط');
      } finally {
        setLoading(false);
      }
    };

    if (projects.length > 0) {
      processData();
    }
  }, [projects]);

  // إنشاء أيقونات مخصصة للمشاريع
  const createCustomIcon = useCallback((project: MapProject, isSelected: boolean = false) => {
    if (!L) return null;

    const size = isSelected ? 35 : 25;
    const iconHtml = `
      <div style="
        width: ${size}px;
        height: ${size}px;
        background-color: ${project.statusColor};
        border: 3px solid white;
        border-radius: 50%;
        box-shadow: 0 2px 8px rgba(0,0,0,0.3);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: ${size * 0.6}px;
        color: white;
        font-weight: bold;
        ${isSelected ? 'transform: scale(1.2); z-index: 1000;' : ''}
        transition: all 0.3s ease;
      ">
        ${getStatusIcon(project.status)}
      </div>
    `;

    return L.divIcon({
      html: iconHtml,
      className: 'custom-marker',
      iconSize: [size, size],
      iconAnchor: [size / 2, size / 2],
      popupAnchor: [0, -size / 2]
    });
  }, []);

  // الحصول على أيقونة حالة المشروع
  const getStatusIcon = (status: string): string => {
    const icons = {
      'ready': '🏠',
      'under-construction': '🏗️',
      'off-plan': '📋',
      'new-launch': '✨'
    };
    return icons[status as keyof typeof icons] || '📍';
  };



  // حساب مركز الخريطة
  const mapCenter = useMemo(() => {
    const validProjects = mapProjects.filter(p => p.coordinates.isValid);
    if (validProjects.length === 0) {
      return [25.2048, 55.2708]; // مركز دبي الافتراضي
    }

    const avgLat = validProjects.reduce((sum, p) => sum + p.coordinates.lat, 0) / validProjects.length;
    const avgLng = validProjects.reduce((sum, p) => sum + p.coordinates.lng, 0) / validProjects.length;
    
    return [avgLat, avgLng];
  }, [mapProjects]);

  // معالجة النقر على المشروع
  const handleProjectClick = useCallback((project: MapProject) => {
    if (onProjectSelect) {
      onProjectSelect(project);
    }
  }, [onProjectSelect]);

  // عرض حالة التحميل
  if (loading) {
    return (
      <div className={`w-full ${className}`} style={{ height }}>
        <div className="w-full h-full flex items-center justify-center bg-gray-100 rounded-lg">
          <div className="text-center">
            <Loader2 className="w-8 h-8 animate-spin mx-auto mb-2 text-blue-600" />
            <p className="text-gray-600">جاري معالجة بيانات الخرائط...</p>
            {stats && (
              <p className="text-sm text-gray-500 mt-1">
                {stats.validCoordinates} من {stats.totalProjects} مشروع
              </p>
            )}
          </div>
        </div>
      </div>
    );
  }

  // عرض حالة الخطأ
  if (error) {
    return (
      <div className={`w-full ${className}`} style={{ height }}>
        <div className="w-full h-full flex items-center justify-center bg-red-50 rounded-lg border border-red-200">
          <div className="text-center">
            <AlertCircle className="w-8 h-8 mx-auto mb-2 text-red-600" />
            <p className="text-red-700 font-medium">خطأ في تحميل الخريطة</p>
            <p className="text-red-600 text-sm mt-1">{error}</p>
          </div>
        </div>
      </div>
    );
  }

  // عرض رسالة عدم وجود بيانات
  if (mapProjects.length === 0) {
    return (
      <div className={`w-full ${className}`} style={{ height }}>
        <div className="w-full h-full flex items-center justify-center bg-gray-50 rounded-lg border border-gray-200">
          <div className="text-center">
            <MapPin className="w-8 h-8 mx-auto mb-2 text-gray-400" />
            <p className="text-gray-600 font-medium">📍 الموقع غير محدد</p>
            <p className="text-gray-500 text-sm mt-1">لا توجد بيانات خرائط متاحة</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`w-full relative ${className}`} style={{ height }}>
      {/* إحصائيات الخريطة */}
      {stats && (
        <div className="absolute top-4 left-4 z-[1000] bg-white rounded-lg shadow-lg p-3 text-sm">
          <div className="flex items-center gap-2 mb-2">
            <MapPin className="w-4 h-4 text-blue-600" />
            <span className="font-medium">إحصائيات الخريطة</span>
          </div>
          <div className="space-y-1 text-xs">
            <div>✅ {stats.validCoordinates} خريطة محملة</div>
            <div>⚠️ {stats.missingCoordinates} خريطة مفقودة</div>
          </div>
        </div>
      )}

      {/* وسيلة الإيضاح */}
      <div className="absolute bottom-4 left-4 z-[1000] bg-white rounded-lg shadow-lg p-3">
        <div className="text-sm font-medium mb-2">حالة المشاريع</div>
        <div className="space-y-1 text-xs">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span>🟢 جاهز للسكن ({stats?.statusBreakdown.ready || 0})</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <span>🟡 قيد الإنشاء ({stats?.statusBreakdown.underConstruction || 0})</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-blue-500"></div>
            <span>🔵 على الخارطة ({stats?.statusBreakdown.offPlan || 0})</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-purple-500"></div>
            <span>🟣 إطلاق جديد ({stats?.statusBreakdown.newLaunch || 0})</span>
          </div>
        </div>
      </div>

      {/* الخريطة */}
      <div className="w-full h-full rounded-lg overflow-hidden animate-fade-in">
        <MapContainer
          center={mapCenter as [number, number]}
          zoom={11}
          style={{ height: '100%', width: '100%' }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {/* عرض المشاريع */}
          {mapProjects
            .filter(project => project.coordinates.isValid)
            .map((project) => {
              const isSelected = project.id === selectedProjectId;
              const icon = createCustomIcon(project, isSelected);

              return (
                <Marker
                  key={project.id}
                  position={[project.coordinates.lat, project.coordinates.lng]}
                  icon={icon}
                  eventHandlers={{
                    click: () => handleProjectClick(project)
                  }}
                >
                  <Popup>
                    <div className="p-2 min-w-[250px]">
                      {/* صورة المشروع */}
                      {project.image && (
                        <img
                          src={project.image}
                          alt={project.title[locale]}
                          className="w-full h-32 object-cover rounded-lg mb-3"
                        />
                      )}

                      {/* معلومات المشروع */}
                      <div className="space-y-2">
                        <h3 className="font-bold text-lg text-gray-800">
                          {project.title[locale]}
                        </h3>
                        
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <span className="font-medium">{project.developer}</span>
                          <span>•</span>
                          <span>{project.location[locale]}</span>
                        </div>

                        <div className="flex items-center gap-2">
                          <div 
                            className="w-3 h-3 rounded-full"
                            style={{ backgroundColor: project.statusColor }}
                          ></div>
                          <span className="text-sm capitalize">
                            {project.status.replace('-', ' ')}
                          </span>
                        </div>

                        {project.price && project.price.min > 0 && (
                          <div className="text-sm text-gray-600">
                            السعر: {project.price.min.toLocaleString()} {project.price.currency}
                            {project.price.max && ` - ${project.price.max.toLocaleString()}`}
                          </div>
                        )}

                        {/* زر عرض المزيد */}
                        <button
                          onClick={() => {
                            window.location.href = `/projects/${project.developer.toLowerCase()}/${project.slug}`;
                          }}
                          className="w-full mt-3 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                        >
                          عرض المزيد
                        </button>
                      </div>
                    </div>
                  </Popup>
                </Marker>
              );
            })}
        </MapContainer>
      </div>
    </div>
  );
};

export default DynamicMap;