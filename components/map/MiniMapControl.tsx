'use client';

import React, { useEffect, useRef } from 'react';
import { useMap } from 'react-leaflet';

interface MiniMapControlProps {
  visible: boolean;
  position?: 'topright' | 'topleft' | 'bottomright' | 'bottomleft';
  width?: number;
  height?: number;
  zoomLevelOffset?: number;
}

const MiniMapControl: React.FC<MiniMapControlProps> = ({
  visible,
  position = 'bottomright',
  width = 150,
  height = 150,
  zoomLevelOffset = -5
}) => {
  const map = useMap();
  const miniMapRef = useRef<any>(null);

  useEffect(() => {
    if (typeof window === 'undefined' || !visible) return;

    const loadMiniMap = async () => {
      try {
        const L = (await import('leaflet')).default;
        
        // تحميل مكتبة MiniMap إذا لم تكن محملة
        if (!(L.Control as any).MiniMap) {
          // إنشاء MiniMap مخصص بسيط
          const MiniMapControl = (L as any).Control.extend({
            options: {
              position,
              width,
              height,
              zoomLevelOffset,
              toggleDisplay: true
            },

            onAdd: function(map: any) {
              // إنشاء الحاوية
              const container = L.DomUtil.create('div', 'leaflet-control-minimap');
              container.style.width = width + 'px';
              container.style.height = height + 'px';
              container.style.backgroundColor = 'white';
              container.style.border = '2px solid rgba(0,0,0,0.2)';
              container.style.borderRadius = '8px';
              container.style.overflow = 'hidden';
              container.style.boxShadow = '0 2px 8px rgba(0,0,0,0.3)';

              // إنشاء الخريطة المصغرة
              const miniMap = L.map(container, {
                zoomControl: false,
                attributionControl: false,
                dragging: false,
                scrollWheelZoom: false,
                doubleClickZoom: false,
                touchZoom: false,
                boxZoom: false,
                keyboard: false
              });

              // إضافة طبقة الخريطة
              L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: ''
              }).addTo(miniMap);

              // مربع العرض الحالي
              const viewBox = L.rectangle([[0, 0], [0, 0]], {
                color: '#ff0000',
                weight: 2,
                fillOpacity: 0.1
              }).addTo(miniMap);

              // تحديث الخريطة المصغرة عند تحرك الخريطة الرئيسية
              const updateMiniMap = () => {
                const bounds = map.getBounds();
                const center = map.getCenter();
                const zoom = Math.max(0, map.getZoom() + zoomLevelOffset);

                miniMap.setView(center, zoom);
                viewBox.setBounds(bounds);
              };

              // ربط الأحداث
              map.on('moveend zoomend', updateMiniMap);
              
              // تحديث أولي
              updateMiniMap();

              // حفظ المراجع للتنظيف
              (this as any)._miniMap = miniMap;
              (this as any)._updateHandler = updateMiniMap;

              return container;
            },

            onRemove: function(map: any) {
              if ((this as any)._updateHandler) {
                map.off('moveend zoomend', (this as any)._updateHandler);
              }
              if ((this as any)._miniMap) {
                (this as any)._miniMap.remove();
              }
            }
          });

          // إنشاء وإضافة التحكم
          miniMapRef.current = new MiniMapControl();
          map.addControl(miniMapRef.current);
        }
      } catch (error) {
        console.error('خطأ في تحميل الخريطة المصغرة:', error);
      }
    };

    loadMiniMap();

    // تنظيف عند إلغاء التحميل
    return () => {
      if (miniMapRef.current) {
        map.removeControl(miniMapRef.current);
        miniMapRef.current = null;
      }
    };
  }, [map, visible, position, width, height, zoomLevelOffset]);

  // التحكم في الإظهار/الإخفاء
  useEffect(() => {
    if (miniMapRef.current) {
      const container = miniMapRef.current.getContainer();
      if (container) {
        container.style.display = visible ? 'block' : 'none';
      }
    }
  }, [visible]);

  return null; // هذا المكون لا يعرض شيئاً مرئياً بذاته
};

export default MiniMapControl;