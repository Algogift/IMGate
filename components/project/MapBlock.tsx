'use client';

import React, { useState, useEffect } from 'react';
import { Project } from '@/lib/types';
import { MapProject } from '@/lib/mapService';
import EnhancedMap from '@/components/map/EnhancedMap';
import { MapPin, AlertCircle } from 'lucide-react';
import '@/styles/map-animations.css';

type Props = {
  project?: Project;
  projects?: Project[];
  lat?: number;
  lon?: number;
  zoom?: number;
  showFilters?: boolean;
  locale?: 'ar' | 'en';
  className?: string;
  height?: string;
};

export default function MapBlock({ 
  project,
  projects = [],
  lat, 
  lon, 
  zoom = 14, 
  showFilters = false,
  locale = 'en',
  className = '',
  height = '500px'
}: Props) {
  const [selectedProject, setSelectedProject] = useState<string | undefined>();
  const [mapProjects, setMapProjects] = useState<Project[]>([]);

  // تحضير بيانات المشاريع للخريطة
  useEffect(() => {
    if (project) {
      // إذا كان مشروع واحد، استخدمه
      setMapProjects([project]);
      setSelectedProject(project.id || project.projectID || project.slug);
    } else if (projects.length > 0) {
      // إذا كانت قائمة مشاريع، استخدمها
      setMapProjects(projects);
    } else if (lat && lon) {
      // إذا كانت إحداثيات فقط، أنشئ مشروع وهمي
      const dummyProject: Project = {
        slug: 'location',
        projectName: { ar: 'الموقع', en: 'Location' },
        latitude: lat,
        longitude: lon,
        location: { ar: 'دبي', en: 'Dubai' },
        developer: 'Unknown'
      };
      setMapProjects([dummyProject]);
    }
  }, [project, projects, lat, lon]);

  // التحقق من صحة الإحداثيات
  const isValidCoordinate = (coord: number | undefined): coord is number => {
    return typeof coord === 'number' && !isNaN(coord) && isFinite(coord) && coord !== 0;
  };

  // التحقق من وجود إحداثيات صالحة في أي من المشاريع
  const hasValidCoordinates = mapProjects.some(p => 
    isValidCoordinate(p.latitude) && isValidCoordinate(p.longitude)
  ) || (isValidCoordinate(lat) && isValidCoordinate(lon));

  // معالجة تحديد المشروع
  const handleProjectSelect = (mapProject: MapProject) => {
    setSelectedProject(mapProject.id);
    
    // التنقل إلى صفحة المشروع
    if (mapProject.slug && mapProject.developer) {
      const url = `/projects/${mapProject.developer.toLowerCase()}/${mapProject.slug}`;
      window.location.href = url;
    }
  };

  // عرض رسالة عدم وجود إحداثيات
  if (!hasValidCoordinates) {
    return (
      <div className={`w-full ${className}`} style={{ height }}>
        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg border border-gray-200">
          <div className="text-center p-8">
            <div className="mb-4">
              <MapPin className="w-16 h-16 mx-auto text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-700 mb-2">
              📍 الموقع غير محدد
            </h3>
            <p className="text-gray-500 text-sm max-w-md">
              {locale === 'ar' 
                ? 'لا توجد بيانات موقع متاحة لهذا المشروع حالياً. سيتم تحديث المعلومات قريباً.'
                : 'Location data is not available for this project currently. Information will be updated soon.'
              }
            </p>
            
            {/* صورة خريطة رمزية */}
            <div className="mt-6 w-full max-w-sm mx-auto h-32 bg-gradient-to-r from-blue-100 to-blue-200 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl mb-2">🗺️</div>
                <div className="text-sm text-blue-600 font-medium">
                  {locale === 'ar' ? 'خريطة تفاعلية قريباً' : 'Interactive Map Coming Soon'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`w-full ${className}`}>
      {/* عنوان القسم */}
      <div className="mb-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          {locale === 'ar' ? '📍 الموقع والخريطة' : '📍 Location & Map'}
        </h2>
        <p className="text-gray-600 text-sm">
          {locale === 'ar' 
            ? 'استكشف موقع المشروع ونقاط الاهتمام المحيطة'
            : 'Explore the project location and surrounding points of interest'
          }
        </p>
      </div>

      {/* الخريطة المحسنة */}
      <div className="rounded-lg overflow-hidden shadow-lg border border-gray-200">
        <EnhancedMap
          projects={mapProjects}
          selectedProjectId={selectedProject}
          onProjectSelect={handleProjectSelect}
          className="w-full"
          height={height}
          locale={locale}
          showControls={showFilters}
        />
      </div>

      {/* معلومات إضافية */}
      {project && (
        <div className="mt-4 p-4 bg-gray-50 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            {/* معلومات الموقع */}
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">
                {locale === 'ar' ? 'معلومات الموقع' : 'Location Information'}
              </h4>
              <div className="space-y-1 text-gray-600">
                {project.city && (
                  <div>
                    <span className="font-medium">
                      {locale === 'ar' ? 'المدينة: ' : 'City: '}
                    </span>
                    {typeof project.city === 'string' ? project.city : project.city[locale]}
                  </div>
                )}
                {project.area && (
                  <div>
                    <span className="font-medium">
                      {locale === 'ar' ? 'المنطقة: ' : 'Area: '}
                    </span>
                    {typeof project.area === 'string' ? project.area : project.area[locale]}
                  </div>
                )}
                {project.location && (
                  <div>
                    <span className="font-medium">
                      {locale === 'ar' ? 'الموقع: ' : 'Location: '}
                    </span>
                    {typeof project.location === 'string' ? project.location : project.location[locale]}
                  </div>
                )}
              </div>
            </div>

            {/* نقاط الاهتمام */}
            {project.mapPointsOfInterest && Object.keys(project.mapPointsOfInterest).length > 0 && (
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">
                  {locale === 'ar' ? 'نقاط الاهتمام القريبة' : 'Nearby Points of Interest'}
                </h4>
                <div className="space-y-1 text-gray-600 max-h-32 overflow-y-auto">
                  {Object.entries(project.mapPointsOfInterest).map(([category, items]) => (
                    Array.isArray(items) && items.length > 0 && (
                      <div key={category}>
                        <span className="font-medium capitalize">{category}: </span>
                        <span className="text-sm">{items.length} {locale === 'ar' ? 'موقع' : 'locations'}</span>
                      </div>
                    )
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}