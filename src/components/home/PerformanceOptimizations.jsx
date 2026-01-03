import { useEffect } from 'react';

/**
 * Component to handle performance optimizations
 * - Intersection Observer for lazy loading
 * - Resource hints
 * - Image optimization
 */
export default function PerformanceOptimizations() {
  useEffect(() => {
    // Add dns-prefetch for Unsplash
    const dnsPrefetch = document.createElement('link');
    dnsPrefetch.rel = 'dns-prefetch';
    dnsPrefetch.href = 'https://images.unsplash.com';
    document.head.appendChild(dnsPrefetch);

    // Add preconnect for faster image loading
    const preconnect = document.createElement('link');
    preconnect.rel = 'preconnect';
    preconnect.href = 'https://images.unsplash.com';
    preconnect.crossOrigin = 'anonymous';
    document.head.appendChild(preconnect);

    // Intersection Observer for lazy-loaded images
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const img = entry.target;
              if (img.dataset.src) {
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
              }
            }
          });
        },
        {
          rootMargin: '50px 0px', // Start loading 50px before element enters viewport
          threshold: 0.01
        }
      );

      // Observe all images with data-src attribute
      document.querySelectorAll('img[data-src]').forEach((img) => {
        imageObserver.observe(img);
      });
    }

    // Enable native lazy loading fallback
    if ('loading' in HTMLImageElement.prototype) {
      const images = document.querySelectorAll('img[loading="lazy"]');
      images.forEach((img) => {
        img.src = img.dataset.src || img.src;
      });
    }

    return () => {
      dnsPrefetch.remove();
      preconnect.remove();
    };
  }, []);

  return null;
}

/**
 * Generate optimized image URLs with proper parameters
 */
export const generateOptimizedImageUrl = (baseUrl, options = {}) => {
  const {
    width = 1200,
    quality = 85,
    format = 'webp',
    fit = 'crop',
    auto = 'format'
  } = options;

  if (!baseUrl) return '';
  
  const url = new URL(baseUrl);
  url.searchParams.set('auto', auto);
  url.searchParams.set('fit', fit);
  url.searchParams.set('q', quality);
  url.searchParams.set('w', width);
  url.searchParams.set('fm', format);

  return url.toString();
};

/**
 * Generate srcset for responsive images
 */
export const generateSrcSet = (baseUrl, sizes = [640, 750, 828, 1080, 1200, 1920, 2048]) => {
  if (!baseUrl) return '';
  
  return sizes
    .map((size) => {
      const url = generateOptimizedImageUrl(baseUrl, { width: size, format: 'webp' });
      return `${url} ${size}w`;
    })
    .join(', ');
};