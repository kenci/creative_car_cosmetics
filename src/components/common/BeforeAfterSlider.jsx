import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  alt = "Vergleich",
  beforeClassName = "",
  afterClassName = ""
}) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMove = (clientX) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    
    setSliderPosition(Math.min(Math.max(percentage, 0), 100));
  };

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e) => {
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging]);

  // Optimized image URL generator
  const getOptimizedImageUrl = (url, width = 1200) => {
    return `${url}?auto=format&fit=crop&q=85&w=${width}&fm=webp`;
  };

  const generateSrcSet = (url) => {
    const widths = [640, 828, 1200, 1920];
    return widths.map(w => `${getOptimizedImageUrl(url, w)} ${w}w`).join(', ');
  };

  return (
    <div
      ref={containerRef}
      className="relative aspect-[4/3] overflow-hidden bg-black select-none cursor-ew-resize"
      onMouseDown={handleMouseDown}
      onTouchStart={() => setIsDragging(true)}
      onTouchEnd={() => setIsDragging(false)}
      onTouchMove={handleTouchMove}
    >
      {/* After Image (Full) */}
      <picture className="absolute inset-0">
        <source
          type="image/webp"
          srcSet={generateSrcSet(afterImage)}
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <img
          src={getOptimizedImageUrl(afterImage)}
          alt={`${alt} - Nachher`}
          className={`absolute inset-0 w-full h-full object-cover ${afterClassName}`}
          loading="lazy"
          decoding="async"
          draggable="false"
        />
      </picture>

      {/* Before Image (Clipped) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <picture className="absolute inset-0">
          <source
            type="image/webp"
            srcSet={generateSrcSet(beforeImage)}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <img
            src={getOptimizedImageUrl(beforeImage)}
            alt={`${alt} - Vorher`}
            className={`absolute inset-0 w-full h-full object-cover ${beforeClassName}`}
            loading="lazy"
            decoding="async"
            draggable="false"
          />
        </picture>
      </div>

      {/* Slider Line & Handle */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white shadow-lg"
        style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
      >
        {/* Handle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center cursor-ew-resize">
          <div className="flex gap-1">
            <div className="w-0.5 h-4 bg-gray-400"></div>
            <div className="w-0.5 h-4 bg-gray-400"></div>
          </div>
        </div>
      </div>

      {/* Labels */}
      <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-sm px-3 py-1.5 text-white text-sm font-medium pointer-events-none">
        Vorher
      </div>
      <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm px-3 py-1.5 text-white text-sm font-medium pointer-events-none">
        Nachher
      </div>

      {/* Touch/Drag Hint */}
      {sliderPosition === 50 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-[#d97706]/90 backdrop-blur-sm px-4 py-2 text-white text-xs font-medium rounded-full pointer-events-none"
        >
          ← Ziehen zum Vergleichen →
        </motion.div>
      )}
    </div>
  );
}
