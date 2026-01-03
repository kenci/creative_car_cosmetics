import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft } from "lucide-react";
import BeforeAfterSlider from "../common/BeforeAfterSlider";

const galleryItems = [
  {
    before: "https://images.unsplash.com/photo-1555215695-3004980ad54e",
    after: "https://images.unsplash.com/photo-1555215695-3004980ad54e",
    title: "BMW M3",
    service: "Vollaufbereitung & Keramikversiegelung"
  },
  {
    before: "https://images.unsplash.com/photo-1583121274602-3e2820c69888",
    after: "https://images.unsplash.com/photo-1583121274602-3e2820c69888",
    title: "Ferrari",
    service: "Lackkorrektur & Versiegelung"
  },
  {
    before: "https://images.unsplash.com/photo-1617531653332-bd46c24f2068",
    after: "https://images.unsplash.com/photo-1617531653332-bd46c24f2068",
    title: "BMW M4",
    service: "Innen- & Außenaufbereitung"
  }
];

// Optimized image URL generator with WebP support
const getOptimizedImageUrl = (url, width = 1200) => {
  return `${url}?auto=format&fit=crop&q=85&w=${width}&fm=webp`;
};

// Generate srcset for responsive images
const generateSrcSet = (url) => {
  const widths = [640, 828, 1200, 1920];
  return widths.map(w => `${getOptimizedImageUrl(url, w)} ${w}w`).join(', ');
};

export default function GallerySection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % galleryItems.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);
  };

  const currentItem = galleryItems[activeIndex];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#121212] via-[#0e0e0e] to-[#0b0b0b] py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_80%_20%,_rgba(217,119,6,0.12),_transparent_55%)]" />
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 md:mb-16">
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-[#d97706] text-sm font-medium tracking-[0.35em] uppercase"
            >
              Unsere Arbeit
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-light text-white mt-4"
            >
              Vorher & <span className="font-semibold">Nachher</span>
            </motion.h2>
          </div>
          
          {/* Navigation */}
          <div className="flex gap-3 mt-6 md:mt-0">
            <button 
              onClick={prevSlide}
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-[#d97706] hover:border-[#d97706] transition-all duration-300"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={nextSlide}
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-[#d97706] hover:border-[#d97706] transition-all duration-300"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Gallery Display */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Before/After Slider */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
            >
              <BeforeAfterSlider
                beforeImage={currentItem.before}
                afterImage={currentItem.after}
                alt={currentItem.title}
                beforeClassName="grayscale-[0.9] brightness-75 contrast-125 saturate-50 blur-[0.4px]"
                afterClassName="saturate-110 contrast-110"
              />
            </motion.div>
          </AnimatePresence>

          {/* Info */}
          <div className="py-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <span className="text-[#d97706] text-sm font-medium tracking-wider">
                  Projekt {String(activeIndex + 1).padStart(2, '0')}
                </span>
                <h3 className="text-2xl md:text-3xl font-medium text-white mt-2 mb-4">
                  {currentItem.title}
                </h3>
                <p className="text-gray-400 text-lg mb-8">
                  {currentItem.service}
                </p>
                
                {/* Progress */}
                <div className="flex gap-2">
                  {galleryItems.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveIndex(idx)}
                      className={`h-1 transition-all duration-300 ${
                        idx === activeIndex 
                          ? 'w-12 bg-[#d97706]' 
                          : 'w-6 bg-white/20 hover:bg-white/40'
                      }`}
                    />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
