import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Thomas M.",
    car: "Mercedes-AMG C63",
    rating: 5,
    text: "Absolute Spitzenklasse! Mein AMG sieht aus wie am ersten Tag. Die Keramikversiegelung hält, was sie verspricht. Sehr professionelle Arbeit!",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
  },
  {
    name: "Sandra K.",
    car: "Audi RS6",
    rating: 5,
    text: "Ich war skeptisch, aber das Ergebnis hat mich überzeugt. Die Innenreinigung war so gründlich, der Wagen riecht wie neu. Absolute Empfehlung!",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
  },
  {
    name: "Michael R.",
    car: "Porsche 718 Cayman",
    rating: 5,
    text: "Die Lackkorrektur hat sämtliche Swirls entfernt. Der Lack glänzt jetzt tiefer als je zuvor. Kompetente Beratung und faire Preise.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
  }
];

// Optimized avatar image URL with WebP
const getOptimizedAvatar = (url) => {
  return `${url}?auto=format&fit=crop&q=85&w=200&h=200&fm=webp`;
};

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#111111] via-[#0e0e0e] to-[#0b0b0b] py-24 md:py-32">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 border border-white rounded-full" />
        <div className="absolute bottom-20 right-20 w-48 h-48 border border-white rounded-full" />
      </div>
      <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_50%_10%,_rgba(217,119,6,0.12),_transparent_60%)]" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[#d97706] text-sm font-medium tracking-[0.35em] uppercase"
          >
            Kundenstimmen
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-light text-white mt-4"
          >
            Was unsere Kunden <span className="font-semibold">sagen</span>
          </motion.h2>
        </div>

        {/* Testimonials */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="text-center"
            >
              {/* Quote Icon */}
              <div className="w-16 h-16 mx-auto mb-8 bg-[#d97706]/10 flex items-center justify-center">
                <Quote className="w-8 h-8 text-[#d97706]" />
              </div>

              {/* Rating */}
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#d97706] text-[#d97706]" />
                ))}
              </div>

              {/* Text */}
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8 italic">
                "{testimonials[activeIndex].text}"
              </p>

              {/* Author with optimized image */}
              <div className="flex items-center justify-center gap-4">
                <picture>
                  <source
                    type="image/webp"
                    srcSet={getOptimizedAvatar(testimonials[activeIndex].image)}
                  />
                  <img
                    src={`${testimonials[activeIndex].image}?auto=format&fit=crop&q=85&w=200&h=200`}
                    alt={testimonials[activeIndex].name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-[#d97706]"
                    loading="lazy"
                    decoding="async"
                    width="56"
                    height="56"
                  />
                </picture>
                <div className="text-left">
                  <div className="text-white font-medium">
                    {testimonials[activeIndex].name}
                  </div>
                  <div className="text-gray-500 text-sm">
                    {testimonials[activeIndex].car}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots */}
          <div className="flex justify-center gap-3 mt-12">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  idx === activeIndex 
                    ? 'bg-[#d97706] w-8' 
                    : 'bg-white/20 hover:bg-white/40'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
