import { useEffect } from 'react';

/**
 * Preloads critical images for better performance
 */
export default function ImagePreloader({ images = [], priority = false }) {
  useEffect(() => {
    if (!images.length) return;

    // Preload images
    images.forEach((src) => {
      const link = document.createElement('link');
      link.rel = priority ? 'preload' : 'prefetch';
      link.as = 'image';
      link.href = src;
      link.type = 'image/webp';
      document.head.appendChild(link);
    });
  }, [images, priority]);

  return null;
}

/**
 * Hook to preload images dynamically
 */
export function useImagePreloader(images = []) {
  useEffect(() => {
    if (!images.length) return;

    const imageElements = images.map((src) => {
      const img = new Image();
      img.src = src;
      return img;
    });

    return () => {
      imageElements.forEach((img) => {
        img.src = '';
      });
    };
  }, [images]);
}