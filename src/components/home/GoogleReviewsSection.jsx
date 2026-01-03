import React from 'react';
import { motion } from "framer-motion";
import { Star, ExternalLink } from "lucide-react";

export default function GoogleReviewsSection() {
  // Google Business Rating (Update mit echten Daten)
  const averageRating = 4.7;
  const totalReviews = 28;
  const googlePlaceId = "YOUR_GOOGLE_PLACE_ID"; // TODO: Echte Place ID einfügen
  const displayedRating = Math.round(averageRating * 2) / 2;

  // Top Reviews (können später durch echte Google Reviews API ersetzt werden)
  const reviews = [
    {
      author: "Michael S.",
      rating: 5,
      date: "vor 2 Wochen",
      text: "Absolut professionelle Arbeit! Mein BMW sieht aus wie neu. Die Lackaufbereitung war perfekt und das Team sehr freundlich.",
      avatar: "MS"
    },
    {
      author: "Sandra W.",
      rating: 5,
      date: "vor 1 Monat",
      text: "Beste Autowäsche in Vorarlberg! Die Innenreinigung war makellos und der Preis absolut fair. Komme gerne wieder!",
      avatar: "SW"
    },
    {
      author: "Thomas K.",
      rating: 5,
      date: "vor 1 Monat",
      text: "Top Service! Kratzer am Lack wurden perfekt entfernt. Man sieht den Unterschied sofort. Sehr zu empfehlen!",
      avatar: "TK"
    },
    {
      author: "Julia M.",
      rating: 5,
      date: "vor 2 Monaten",
      text: "Kompetente Beratung und saubere Arbeit. Die Nanoversiegelung funktioniert hervorragend. Danke!",
      avatar: "JM"
    }
  ];

  const googleReviewsUrl = `https://www.google.com/maps/search/?api=1&query=Creative+Car+Cosmetics+Hard&query_place_id=${googlePlaceId}`;

  return (
    <section className="relative overflow-hidden bg-[#0b0b0b] py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 opacity-35 [background-image:radial-gradient(circle_at_70%_10%,_rgba(217,119,6,0.12),_transparent_60%)]" />
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[#d97706] text-sm font-medium tracking-[0.35em] uppercase"
          >
            Kundenmeinungen
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-light text-white mt-4 mb-8"
          >
            Das sagen unsere <span className="font-semibold">Kunden</span>
          </motion.h2>

          {/* Google Rating Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-4 rounded-full bg-[#141414] px-8 py-4 border border-white/10"
          >
            <img 
              src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_92x30dp.png" 
              alt="Google"
              className="h-6"
            />
            <div className="flex items-center gap-2">
              <span className="text-3xl font-semibold text-white">{averageRating}</span>
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => {
                  const starNumber = i + 1;
                  if (displayedRating >= starNumber) {
                    return <Star key={`full-${i}`} className="w-5 h-5 fill-yellow-400 text-yellow-400" />;
                  }
                  if (displayedRating >= starNumber - 0.5) {
                    return (
                      <span key={`half-${i}`} className="relative inline-flex w-5 h-5">
                        <Star className="w-5 h-5 text-gray-600" />
                        <Star
                          className="absolute inset-0 w-5 h-5 fill-yellow-400 text-yellow-400"
                          style={{ clipPath: 'inset(0 50% 0 0)' }}
                        />
                      </span>
                    );
                  }
                  return <Star key={`empty-${i}`} className="w-5 h-5 text-gray-600" />;
                })}
              </div>
            </div>
            <div className="text-gray-400 text-sm">
              {totalReviews} Bewertungen
            </div>
          </motion.div>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="rounded-2xl bg-[#121212]/90 p-6 border border-white/5 hover:border-white/10 transition-colors"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  {/* Avatar */}
                  <div className="w-12 h-12 bg-[#d97706] flex items-center justify-center text-white font-semibold rounded-full">
                    {review.avatar}
                  </div>
                  <div>
                    <div className="text-white font-medium">{review.author}</div>
                    <div className="text-gray-500 text-sm">{review.date}</div>
                  </div>
                </div>
                {/* Google Icon */}
                <div className="text-gray-500">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                </div>
              </div>

              {/* Rating */}
              <div className="flex gap-0.5 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-4 h-4 ${i < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-600'}`}
                  />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-gray-300 leading-relaxed">
                {review.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <a
            href={googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#d97706] text-white px-8 py-4 font-medium hover:bg-[#b45309] transition-colors"
          >
            Alle Bewertungen auf Google ansehen
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
