import React from 'react';

/**
 * OptimizedImage component with WebP support, lazy loading, and responsive sizing
 */
export default function OptimizedImage({
  src,
  alt,
  className = "",
  priority = false,
  objectFit = "cover",
  sizes = "100vw",
  width,
  height,
  onLoad
}) {
  // Generate WebP and optimized URLs from Unsplash
  const getOptimizedUrl = (url, format = 'auto', quality = 80, width) => {
    if (!url) return '';
    
    // If it's an Unsplash URL, optimize it
    if (url.includes('unsplash.com')) {
      const baseUrl = url.split('?')[0];
      let params = `auto=format&fit=crop&q=${quality}`;
      
      if (width) {
        params += `&w=${width}`;
      }
      
      if (format === 'webp') {
        params += '&fm=webp';
      }
      
      return `${baseUrl}?${params}`;
    }
    
    return url;
  };

  // Generate srcset for responsive images
  const generateSrcSet = (url) => {
    if (!url || !url.includes('unsplash.com')) return '';
    
    const widths = [640, 750, 828, 1080, 1200, 1920, 2048, 3840];
    return widths
      .map(w => `${getOptimizedUrl(url, 'webp', 80, w)} ${w}w`)
      .join(', ');
  };

  const webpSrc = getOptimizedUrl(src, 'webp', 85);
  const fallbackSrc = getOptimizedUrl(src, 'auto', 85);
  const srcSet = generateSrcSet(src);

  return (
    <picture>
      {/* WebP source with srcset for responsive */}
      {srcSet && (
        <source
          type="image/webp"
          srcSet={srcSet}
          sizes={sizes}
        />
      )}
      
      {/* Fallback image */}
      <img
        src={fallbackSrc}
        alt={alt}
        className={className}
        loading={priority ? "eager" : "lazy"}
        decoding={priority ? "sync" : "async"}
        style={{ objectFit }}
        width={width}
        height={height}
        onLoad={onLoad}
      />
    </picture>
  );
}

/**
 * OptimizedBackgroundImage component for background images with WebP support
 */
export function OptimizedBackgroundImage({
  src,
  className = "",
  children,
  priority = false,
  overlay = true,
  overlayClassName = "bg-gradient-to-r from-black/90 via-black/70 to-black/50"
}) {
  const getOptimizedUrl = (url, width = 1920) => {
    if (!url || !url.includes('unsplash.com')) return url;
    const baseUrl = url.split('?')[0];
    return `${baseUrl}?auto=format&fit=crop&q=80&w=${width}&fm=webp`;
  };

  const style = {
    backgroundImage: `url('${getOptimizedUrl(src)}')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  };

  return (
    <div className={`relative ${className}`}>
      {/* Background with optimized image */}
      <div 
        className="absolute inset-0"
        style={style}
        {...(!priority && { loading: 'lazy' })}
      />
      
      {/* Overlay */}
      {overlay && (
        <div className={`absolute inset-0 ${overlayClassName}`} />
      )}
      
      {/* Content */}
      {children}
    </div>
  );
}