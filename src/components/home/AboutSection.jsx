import React from 'react';
import { motion } from "framer-motion";
import { Award, Clock, Users, CheckCircle, Car } from "lucide-react";

const stats = [
  { icon: Award, value: "10+", label: "Jahre Erfahrung" },
  { icon: Car, value: "2.500+", label: "Fahrzeuge aufbereitet" },
  { icon: Users, value: "100%", label: "Zufriedenheit" },
];

const qualities = [
  "Nur Premium-Produkte von Herstellern wie Gtechniq, Koch Chemie & Gyeon",
  "Handarbeit mit höchster Präzision und Sorgfalt",
  "Modernste Techniken und Ausstattung",
  "Individuelle Beratung für Ihr Fahrzeug"
];

export default function AboutSection() {
  return (
    <section className="relative overflow-hidden bg-[#0b0b0b] py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 opacity-35 [background-image:radial-gradient(circle_at_10%_30%,_rgba(217,119,6,0.14),_transparent_60%)]" />
      {/* Optimized Decorative Element with WebP */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-5">
        <picture className="w-full h-full block">
          <source
            type="image/webp"
            srcSet="https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&q=60&w=800&fm=webp"
          />
          <div 
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&q=60&w=800')`
            }}
          />
        </picture>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-[#d97706] text-sm font-medium tracking-[0.35em] uppercase"
            >
              Über uns
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-light text-white mt-4 mb-6"
            >
              Leidenschaft für <span className="font-semibold">Perfektion</span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-400 text-lg leading-relaxed mb-8"
            >
              Bei Creative Car Cosmetics vereinen wir handwerkliche Präzision mit modernster Technologie. 
              Jedes Fahrzeug, das unsere Halle verlässt, ist ein Zeugnis unserer Hingabe an höchste Qualitätsstandards.
            </motion.p>

            {/* Qualities */}
            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="space-y-4"
            >
              {qualities.map((quality, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#d97706] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">{quality}</span>
                </li>
              ))}
            </motion.ul>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-1 gap-6"
          >
            {stats.map((stat, index) => (
              <div 
                key={stat.label}
                className="bg-[#121212] p-8 border-l-2 border-[#d97706] hover:bg-[#161616] transition-colors duration-300"
              >
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-[#d97706]/10 flex items-center justify-center">
                    <stat.icon className="w-7 h-7 text-[#d97706]" />
                  </div>
                  <div>
                    <div className="text-3xl md:text-4xl font-semibold text-white">
                      {stat.value}
                    </div>
                    <div className="text-gray-400 mt-1">
                      {stat.label}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
