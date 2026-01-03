import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { ChevronDown, Phone } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection() {
  const [imageLoaded, setImageLoaded] = useState(false);
  
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Optimized image URLs with WebP and responsive sizes
  const getOptimizedImageUrl = (width) => {
    return `https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=85&w=${width}&fm=webp`;
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Optimized Background Image with WebP and srcset */}
      <picture className="absolute inset-0">
        <source
          type="image/webp"
          srcSet={`
            ${getOptimizedImageUrl(640)} 640w,
            ${getOptimizedImageUrl(1080)} 1080w,
            ${getOptimizedImageUrl(1920)} 1920w,
            ${getOptimizedImageUrl(2560)} 2560w
          `}
          sizes="100vw"
        />
        <img
          src={getOptimizedImageUrl(1920)}
          alt="Premium Fahrzeugaufbereitung"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          loading="eager"
          decoding="async"
          onLoad={() => setImageLoaded(true)}
        />
      </picture>
      
      {/* Low quality placeholder while loading */}
      {!imageLoaded && (
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat blur-sm"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=10&w=100')`
          }}
        />
      )}
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/70 to-[#2a1c12]/70" />
      
      {/* Animated Accent Line */}
      <motion.div 
        initial={{ height: 0 }}
        animate={{ height: '120px' }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute left-8 md:left-16 top-1/2 -translate-y-1/2 w-[2px] bg-gradient-to-b from-transparent via-[#d97706] to-transparent"
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="h-[1px] w-12 bg-[#d97706]" />
            <span className="text-[#d97706] text-sm md:text-base font-medium tracking-[0.35em] uppercase">
              Premium Fahrzeugaufbereitung
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-medium text-white leading-[1.05] mb-6"
          >
            Perfektion
            <span className="block font-semibold">bis ins Detail</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-200 leading-relaxed mb-10 max-w-xl"
          >
            Professionelle Car Cosmetics in Hard, Vorarlberg. 
            Wir verwandeln Ihr Fahrzeug in ein Meisterwerk der Pflege.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button 
              onClick={scrollToContact}
              className="bg-[#d97706] hover:bg-[#b45309] text-white px-8 py-6 text-base font-medium tracking-wide rounded-none transition-all duration-300 hover:translate-x-1"
            >
              Termin anfragen
            </Button>
            <Button 
              variant="outline"
              onClick={() => window.location.href = 'tel:+436641234567'}
              className="border-white/40 bg-transparent text-white hover:text-white hover:bg-white/15 hover:border-white/70 px-8 py-6 text-base font-medium tracking-wide rounded-none backdrop-blur-sm"
            >
              <Phone className="w-4 h-4 mr-2" />
              Jetzt anrufen
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={scrollToServices}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors cursor-pointer"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="w-8 h-8" />
        </motion.div>
      </motion.button>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
    </section>
  );
}
