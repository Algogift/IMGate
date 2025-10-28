'use client';

import React, { useState, useCallback } from 'react';
import { Project } from '@/lib/types';
import { MapProject } from '@/lib/mapService';
import DynamicMap from './DynamicMap';
import HeatMapLayer from './HeatMapLayer';
import MiniMapControl from './MiniMapControl';
import { Layers, Map, BarChart3, Settings } from 'lucide-react';

interface EnhancedMapProps {
  projects: Project[];
  selectedProjectId?: string;
  onProjectSelect?: (project: MapProject) => void;
  className?: string;
  height?: string;
  locale?: 'ar' | 'en';
  showControls?: boolean;
}

const EnhancedMap: React.FC<EnhancedMapProps> = ({
  projects,
  selectedProjectId,
  onProjectSelect,
  className = '',
  height = '600px',
  locale = 'en',
  showControls = true
}) => {
  const [showHeatmap, setShowHeatmap] = useState(false);
  const [showMiniMap, setShowMiniMap] = useState(true);
  const [showPOIs, setShowPOIs] = useState(true);
  const [mapProjects, setMapProjects] = useState<MapProject[]>([]);

  // معالجة تحديد المشروع
  const handleProjectSelect = useCallback((project: MapProject) => {
    if (onProjectSelect) {
      onProjectSelect(project);
    }
  }, [onProjectSelect]);

  // معالجة تحديث بيانات الخريطة
  const handleMapDataUpdate = useCallback((projects: MapProject[]) => {
    setMapProjects(projects);
  }, []);

  return (
    <div className={`relative ${className}`}>
      {/* أدوات التحكم */}
      {showControls && (
        <div className="absolute top-4 right-4 z-[1000] bg-white rounded-lg shadow-lg p-2">
          <div className="flex flex-col gap-2">
            {/* تبديل الخريطة الحرارية */}
            <button
              onClick={() => setShowHeatmap(!showHeatmap)}
              className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                showHeatmap
                  ? 'bg-red-100 text-red-700 hover:bg-red-200'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              title="تبديل الخريطة الحرارية"
            >
              <BarChart3 className="w-4 h-4" />
              <span className="hidden sm:inline">
                {showHeatmap ? 'إخفاء الحرارية' : 'عرض الحرارية'}
              </span>
            </button>

            {/* تبديل الخريطة المصغرة */}
            <button
              onClick={() => setShowMiniMap(!showMiniMap)}
              className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                showMiniMap
                  ? 'bg-blue-100 text-blue-700 hover:bg-blue-200'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              title="تبديل الخريطة المصغرة"
            >
              <Map className="w-4 h-4" />
              <span className="hidden sm:inline">
                {showMiniMap ? 'إخفاء المصغرة' : 'عرض المصغرة'}
              </span>
            </button>

            {/* تبديل نقاط الاهتمام */}
            <button
              onClick={() => setShowPOIs(!showPOIs)}
              className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                showPOIs
                  ? 'bg-green-100 text-green-700 hover:bg-green-200'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              title="تبديل نقاط الاهتمام"
            >
              <Layers className="w-4 h-4" />
              <span className="hidden sm:inline">
                {showPOIs ? 'إخفاء POIs' : 'عرض POIs'}
              </span>
            </button>
          </div>
        </div>
      )}

      {/* الخريطة الرئيسية */}
      <div className="relative" style={{ height }}>
        <DynamicMap
          projects={projects}
          selectedProjectId={selectedProjectId}
          onProjectSelect={handleProjectSelect}
          showHeatmap={showHeatmap}
          showMiniMap={showMiniMap}
          showPOIs={showPOIs}
          className="w-full"
          height={height}
          locale={locale}
        />
      </div>

      {/* معلومات إضافية */}
      <div className="mt-4 text-sm text-gray-600">
        <div className="flex flex-wrap gap-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span>جاهز للسكن</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <span>قيد الإنشاء</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <span>على الخارطة</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
            <span>إطلاق جديد</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedMap;