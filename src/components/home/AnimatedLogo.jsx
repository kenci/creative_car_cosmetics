import React from 'react';
import { motion } from 'framer-motion';

/**
 * Animated version of the CC Logo for special effects (loading, hero, etc.)
 */
export default function AnimatedLogo({ className = '', size = 'lg' }) {
  const sizes = {
    md: 'w-20 h-20',
    lg: 'w-32 h-32',
    xl: 'w-48 h-48'
  };

  return (
    <motion.div 
      className={`${sizes[size]} ${className}`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <svg
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <defs>
          <linearGradient id="redGradientAnimated" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#d97706" />
            <stop offset="100%" stopColor="#9a3412" />
          </linearGradient>
        </defs>
        
        {/* Hexagonal background with animation */}
        <motion.path
          d="M60 5 L105 32.5 L105 87.5 L60 115 L15 87.5 L15 32.5 Z"
          fill="url(#redGradientAnimated)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />
        
        {/* Inner hexagon highlight */}
        <motion.path
          d="M60 12 L98 34 L98 86 L60 108 L22 86 L22 34 Z"
          fill="none"
          stroke="white"
          strokeOpacity="0.15"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        />

        {/* CCC Monogram with animation */}
        <motion.path
          d="M42 38 C30 38 24 48 24 60 C24 72 30 82 42 82"
          fill="none"
          stroke="white"
          strokeWidth="7"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        />
        <motion.path
          d="M62 38 C50 38 44 48 44 60 C44 72 50 82 62 82"
          fill="none"
          stroke="white"
          strokeWidth="7"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.55 }}
        />
        <motion.path
          d="M82 38 C70 38 64 48 64 60 C64 72 70 82 82 82"
          fill="none"
          stroke="white"
          strokeWidth="7"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        />
      </svg>
    </motion.div>
  );
}
