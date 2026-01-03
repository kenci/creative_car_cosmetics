import React from 'react';
import { motion } from "framer-motion";
import { Wrench, Sparkles, Shield, Droplets, PaintBucket, Wind, Layers, Zap } from "lucide-react";

const services = [
  {
    icon: Wrench,
    title: "Parkschäden, Kratzer & Dellen",
    description: "Wir beheben Lack- & Parkschäden, Kratzer am Lack oder Kunststoff, Dellen und Hagelschäden mit der Spot Repair Technik in kostengünstiger Originalausrüsterqualität.",
    image: "https://images.unsplash.com/photo-1625047509168-a7026f36de04"
  },
  {
    icon: Sparkles,
    title: "Innen- & Außenreinigung",
    description: "Kratzer + Flecken + Handreinigung + Brandflecken + Tierhaare + Tiefenpflege + Geruchsentfernung + Politur + Wachs + Chromteile + Alufelgen.",
    image: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785"
  },
  {
    icon: Shield,
    title: "Nanoversiegelung",
    description: "Nanoversiegelung wirkt und erhöht die Sicht bei Regenwetter. Insbesondere bei Nacht werden Spiegelungen in der Stadt weitgehend reduziert. Außerdem wirkt Nanoversiegelung vorbeugend gegen Insekten und Vogelkot.",
    image: "https://images.unsplash.com/photo-1619405399517-d7fce0f13302"
  },
  {
    icon: Droplets,
    title: "Kratzer am Kunststoff",
    description: "Kratzer an Kunststoffen, Soft- und Hardlack im Inneren sowie Äußeren des Autos können beseitigt werden. Brandflecken auf Leder- und Vinylsitzen durch Zigaretten können geflickt werden.",
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3"
  },
  {
    icon: PaintBucket,
    title: "Lackierung",
    description: "Durch enge Zusammenarbeit mit den Original Farblieferanten und Farbmischtabellen können wir selbst bei älteren Fahrzeugen den dem Alter entsprechenden Lackzustand einhalten.",
    image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537"
  },
  {
    icon: Wind,
    title: "Steinschlag",
    description: "Spot Repair Technik gegen Steinschläge. Austausch der Windschutzscheibe bei Bedarf.",
    image: "https://images.unsplash.com/photo-1613214149754-4e8e72d67c8c"
  },
  {
    icon: Zap,
    title: "Politur",
    description: "Autohersteller empfehlen regelmäßige Politur, um den Glanz des Lacks über Jahre hinweg zu erhalten. Außerdem steigt der Wiederverkaufswert Ihres Fahrzeugs.",
    image: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f"
  },
  {
    icon: Layers,
    title: "Folien & Beschriftung",
    description: "Folien in verschiedenen Farben und Variationen, wie bspw. Carbon-Look. Beschriftung von Firmenautos.",
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7"
  }
];

// Optimized image URL generator
const getOptimizedBgImage = (url, width = 800) => {
  return `${url}?auto=format&fit=crop&q=75&w=${width}&fm=webp`;
};

export default function ServicesSection() {
  return (
    <section id="services" className="relative overflow-hidden bg-[#0b0b0b] py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:radial-gradient(circle_at_top,_rgba(217,119,6,0.12),_transparent_60%)]" />
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[#d97706] text-sm font-medium tracking-[0.35em] uppercase"
          >
            Unsere Leistungen
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-light text-white mt-4"
          >
            Premium <span className="font-semibold">Car Cosmetics</span>
          </motion.h2>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative h-full overflow-hidden rounded-2xl border border-white/5 bg-[#121212]/80 hover:bg-[#151515] transition-all duration-500"
            >
              {/* Optimized Background Image */}
              <div 
                className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-500 bg-cover bg-center"
                style={{ backgroundImage: `url('${getOptimizedBgImage(service.image, 600)}')` }}
              />
              {/* Preload for hover */}
              <link rel="preload" as="image" href={getOptimizedBgImage(service.image, 600)} />
              
              {/* Content */}
              <div className="relative flex h-full flex-col p-8 md:p-10">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl border border-[#d97706]/20 bg-[#d97706]/10 flex items-center justify-center">
                    <service.icon className="w-7 h-7 text-[#d97706]" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-medium text-white mb-3 group-hover:text-[#d97706] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Hover Line */}
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#d97706] group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
