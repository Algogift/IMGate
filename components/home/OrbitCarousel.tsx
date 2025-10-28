'use client';

import { useEffect, useState, useRef, useCallback, useMemo } from 'react';
import { proxify } from '@/lib/format';

type Slide = {
  videoLink: string;
  developer?: string;
  title?: string;
  fallbackImage?: string;
};

export default function OrbitCarousel({ slides }: { slides: Slide[] }) {
  const [active, setActive] = useState(0);
  const [loadedVideos, setLoadedVideos] = useState<Set<number>>(new Set());
  const videoRefs = useRef<HTMLVideoElement[]>([]);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Memoize slides to prevent unnecessary re-renders
  const memoizedSlides = useMemo(() => slides || [], [slides]);

  // Preload next video for smoother transitions
  const preloadNextVideo = useCallback((currentIndex: number) => {
    const nextIndex = (currentIndex + 1) % memoizedSlides.length;
    const nextVideo = videoRefs.current[nextIndex];
    if (nextVideo && !loadedVideos.has(nextIndex)) {
      nextVideo.load();
      setLoadedVideos(prev => new Set(prev).add(nextIndex));
    }
  }, [memoizedSlides.length, loadedVideos]);

  // Auto-advance carousel with cleanup
  useEffect(() => {
    if (!memoizedSlides.length) return;
    
    intervalRef.current = setInterval(() => {
      setActive((prevActive) => {
        const nextActive = (prevActive + 1) % memoizedSlides.length;
        preloadNextVideo(nextActive);
        return nextActive;
      });
    }, 8000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [memoizedSlides.length, preloadNextVideo]);

  // Optimized video management
  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (!video) return;
      
      if (index === active) {
        // Play active video
        video.play().catch(() => {
          console.warn(`Failed to play video ${index}`);
        });
      } else {
        // Pause and reset non-active videos to save memory
        video.pause();
        video.currentTime = 0;
      }
    });

    // Preload next video
    preloadNextVideo(active);
  }, [active, preloadNextVideo]);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {memoizedSlides.map((slide, index) => (
        <div
          key={`slide-${index}`}
          className={`absolute inset-0 transition-opacity duration-1000 will-change-[opacity] ${
            index === active ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <video
            ref={(el) => {
              if (el) videoRefs.current[index] = el;
            }}
            src={proxify(slide.videoLink)}
            className="w-full h-full object-cover"
            muted
            loop
            playsInline
            preload={index === active || index === (active + 1) % memoizedSlides.length ? 'auto' : 'none'}
            onLoadedData={() => {
              setLoadedVideos(prev => new Set(prev).add(index));
            }}
            onError={(e) => {
              console.warn('Failed to load slide video', slide.videoLink, e);
              const target = e.currentTarget;
              const container = target.parentElement;
              if (container) {
                target.style.display = 'none';
                const fallbackImg = document.createElement('img');
                fallbackImg.src = slide.fallbackImage || '/media/hero-fallback.jpg';
                fallbackImg.className = 'w-full h-full object-cover';
                fallbackImg.alt = slide.title || 'Project video fallback';
                container.appendChild(fallbackImg);
              }
            }}
          />
        </div>
      ))}

      {/* Content overlay with improved animations */}
      <div className="absolute bottom-24 left-16 text-amber-100 max-w-lg">
        <div 
          key={`content-${active}`}
          className="animate-fadeInUp"
        >
          <p className="text-sm mb-2 opacity-80 transition-all duration-500">
            {memoizedSlides[active]?.developer}
          </p>
          <h2 className="text-5xl font-amiri font-bold leading-tight transition-all duration-500">
            {memoizedSlides[active]?.title}
          </h2>
        </div>
      </div>

      {/* Navigation dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {memoizedSlides.map((_, index) => (
          <button
            key={`dot-${index}`}
            onClick={() => setActive(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === active 
                ? 'bg-amber-400 scale-125' 
                : 'bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent pointer-events-none" />
    </div>
  );
}
