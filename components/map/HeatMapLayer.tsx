'use client';

import React, { useEffect, useRef } from 'react';
import { useMap } from 'react-leaflet';
import { MapProject } from '@/lib/mapService';

interface HeatMapLayerProps {
  projects: MapProject[];
  visible: boolean;
  intensity?: number;
  radius?: number;
  blur?: number;
}

const HeatMapLayer: React.FC<HeatMapLayerProps> = ({
  projects,
  visible,
  intensity = 0.6,
  radius = 25,
  blur = 15
}) => {
  const map = useMap();
  const heatLayerRef = useRef<any>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // تحميل ديناميكي لمكتبة الخريطة الحرارية
    const loadHeatMap = async () => {
      try {
        // تحميل Leaflet.heat
        const L = (await import('leaflet')).default;
        
        // تحميل مكتبة الخريطة الحرارية
        if (!(L as any).heatLayer) {
          await import('leaflet.heat');
        }

        // إنشاء بيانات الخريطة الحرارية
        const heatData = projects
          .filter(project => project.coordinates.isValid)
          .map(project => [
            project.coordinates.lat,
            project.coordinates.lng,
            getProjectWeight(project) // وزن النقطة حسب أهمية المشروع
          ]);

        // إزالة الطبقة السابقة إذا كانت موجودة
        if (heatLayerRef.current) {
          map.removeLayer(heatLayerRef.current);
        }

        // إنشاء طبقة الخريطة الحرارية الجديدة
        if (heatData.length > 0) {
          heatLayerRef.current = (L as any).heatLayer(heatData, {
            radius,
            blur,
            maxZoom: 17,
            max: 1.0,
            minOpacity: 0.1,
            gradient: {
              0.0: '#3B82F6', // أزرق
              0.3: '#10B981', // أخضر
              0.6: '#F59E0B', // أصفر
              1.0: '#EF4444'  // أحمر
            }
          });

          // إضافة الطبقة للخريطة إذا كانت مرئية
          if (visible) {
            heatLayerRef.current.addTo(map);
          }
        }
      } catch (error) {
        console.error('خطأ في تحميل الخريطة الحرارية:', error);
      }
    };

    loadHeatMap();

    // تنظيف عند إلغاء التحميل
    return () => {
      if (heatLayerRef.current) {
        map.removeLayer(heatLayerRef.current);
        heatLayerRef.current = null;
      }
    };
  }, [projects, map, radius, blur]);

  // التحكم في إظهار/إخفاء الطبقة
  useEffect(() => {
    if (heatLayerRef.current) {
      if (visible) {
        heatLayerRef.current.addTo(map);
      } else {
        map.removeLayer(heatLayerRef.current);
      }
    }
  }, [visible, map]);

  return null; // هذا المكون لا يعرض شيئاً مرئياً بذاته
};

// دالة لحساب وزن المشروع في الخريطة الحرارية
function getProjectWeight(project: MapProject): number {
  let weight = 0.5; // الوزن الأساسي

  // زيادة الوزن حسب حالة المشروع
  switch (project.status) {
    case 'ready':
      weight += 0.4;
      break;
    case 'under-construction':
      weight += 0.3;
      break;
    case 'new-launch':
      weight += 0.2;
      break;
    case 'off-plan':
      weight += 0.1;
      break;
  }

  // زيادة الوزن حسب السعر (المشاريع الأغلى تحصل على وزن أكبر)
  if (project.price && project.price.min > 0) {
    if (project.price.min > 5000000) weight += 0.3; // أكثر من 5 مليون
    else if (project.price.min > 2000000) weight += 0.2; // أكثر من 2 مليون
    else if (project.price.min > 1000000) weight += 0.1; // أكثر من مليون
  }

  // زيادة الوزن حسب عدد نقاط الاهتمام
  if (project.pois.length > 5) weight += 0.2;
  else if (project.pois.length > 2) weight += 0.1;

  return Math.min(weight, 1.0); // الحد الأقصى 1.0
}

export default HeatMapLayer;