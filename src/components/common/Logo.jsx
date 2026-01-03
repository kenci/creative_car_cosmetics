import React from 'react';

export default function Logo({ variant = 'default', className = '', size = 'md' }) {
  const sizes = {
    sm: { container: 'h-8', text: 'text-xs', badge: 'w-8 h-8', subtitle: 'text-[9px]' },
    md: { container: 'h-12', text: 'text-sm', badge: 'w-12 h-12', subtitle: 'text-[10px]' },
    lg: { container: 'h-16', text: 'text-lg', badge: 'w-16 h-16', subtitle: 'text-xs' },
    xl: { container: 'h-24', text: 'text-2xl', badge: 'w-24 h-24', subtitle: 'text-base' }
  };

  const currentSize = sizes[size];

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* CC Badge Logo */}
      <div className={`${currentSize.badge} relative flex-shrink-0`}>
        <svg
          viewBox="0 0 120 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* Outer hexagon border with gradient */}
          <defs>
            <linearGradient id="redGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#d97706" />
              <stop offset="100%" stopColor="#9a3412" />
            </linearGradient>
          </defs>
          
          {/* Hexagonal background */}
          <path
            d="M60 5 L105 32.5 L105 87.5 L60 115 L15 87.5 L15 32.5 Z"
            fill="url(#redGradient)"
            stroke={variant === 'white' ? '#ffffff' : variant === 'dark' ? '#0d0d0d' : 'none'}
            strokeWidth="2"
          />
          
          {/* Inner hexagon highlight */}
          <path
            d="M60 12 L98 34 L98 86 L60 108 L22 86 L22 34 Z"
            fill="none"
            stroke="white"
            strokeOpacity="0.15"
            strokeWidth="1"
          />

          {/* CCC Monogram */}
          <path
            d="M42 38 C30 38 24 48 24 60 C24 72 30 82 42 82"
            fill="none"
            stroke="white"
            strokeWidth="7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M62 38 C50 38 44 48 44 60 C44 72 50 82 62 82"
            fill="none"
            stroke="white"
            strokeWidth="7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M82 38 C70 38 64 48 64 60 C64 72 70 82 82 82"
            fill="none"
            stroke="white"
            strokeWidth="7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Logo Text */}
      <div className={`flex flex-col justify-center leading-none ${currentSize.container}`}>
        <div 
          className={`font-bold tracking-[0.2em] ${currentSize.text} ${
            variant === 'white' ? 'text-white' : variant === 'dark' ? 'text-[#0d0d0d]' : 'text-white'
          }`}
        >
          CREATIVE
        </div>
        <div 
          className={`font-light tracking-[0.15em] -mt-0.5 ${currentSize.text} ${
            variant === 'white' ? 'text-gray-300' : variant === 'dark' ? 'text-gray-600' : 'text-gray-300'
          }`}
        >
          CAR COSMETICS
        </div>
        <div 
          className={`font-light tracking-[0.25em] mt-0.5 ${currentSize.subtitle} ${
            variant === 'white' ? 'text-[#d97706]' : variant === 'dark' ? 'text-[#d97706]' : 'text-[#d97706]'
          }`}
        >
          HARD · VORARLBERG
        </div>
      </div>
    </div>
  );
}

// Compact version for mobile/smaller spaces
export function LogoCompact({ variant = 'default', className = '' }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="w-9 h-9 relative flex-shrink-0">
        <svg
          viewBox="0 0 120 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <defs>
            <linearGradient id="redGradientCompact" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#d97706" />
              <stop offset="100%" stopColor="#9a3412" />
            </linearGradient>
          </defs>
          
          <path
            d="M60 5 L105 32.5 L105 87.5 L60 115 L15 87.5 L15 32.5 Z"
            fill="url(#redGradientCompact)"
          />

          <path
            d="M42 38 C30 38 24 48 24 60 C24 72 30 82 42 82"
            fill="none"
            stroke="white"
            strokeWidth="7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M62 38 C50 38 44 48 44 60 C44 72 50 82 62 82"
            fill="none"
            stroke="white"
            strokeWidth="7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M82 38 C70 38 64 48 64 60 C64 72 70 82 82 82"
            fill="none"
            stroke="white"
            strokeWidth="7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div className="flex flex-col leading-none">
        <span 
          className={`text-[11px] font-bold tracking-[0.15em] ${
            variant === 'white' ? 'text-white' : variant === 'dark' ? 'text-[#0d0d0d]' : 'text-white'
          }`}
        >
          CREATIVE
        </span>
        <span 
          className={`text-[10px] font-light tracking-wider -mt-0.5 ${
            variant === 'white' ? 'text-gray-300' : variant === 'dark' ? 'text-gray-600' : 'text-gray-300'
          }`}
        >
          CAR COSMETICS
        </span>
      </div>
    </div>
  );
}

// Icon only version - CC Badge
export function LogoIcon({ variant = 'default', className = '', size = 'md' }) {
  const sizes = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-20 h-20',
    xl: 'w-32 h-32'
  };

  return (
    <div className={`${sizes[size]} ${className}`}>
      <svg
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <defs>
          <linearGradient id={`redGradientIcon-${size}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#d97706" />
            <stop offset="100%" stopColor="#9a3412" />
          </linearGradient>
        </defs>
        
        <path
          d="M60 5 L105 32.5 L105 87.5 L60 115 L15 87.5 L15 32.5 Z"
          fill={`url(#redGradientIcon-${size})`}
          stroke={variant === 'white' ? '#ffffff' : variant === 'dark' ? '#0d0d0d' : 'none'}
          strokeWidth="2"
        />
        
        <path
          d="M60 12 L98 34 L98 86 L60 108 L22 86 L22 34 Z"
          fill="none"
          stroke="white"
          strokeOpacity="0.15"
          strokeWidth="1"
        />

        <path
          d="M42 38 C30 38 24 48 24 60 C24 72 30 82 42 82"
          fill="none"
          stroke="white"
          strokeWidth="7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M62 38 C50 38 44 48 44 60 C44 72 50 82 62 82"
          fill="none"
          stroke="white"
          strokeWidth="7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M82 38 C70 38 64 48 64 60 C64 72 70 82 82 82"
          fill="none"
          stroke="white"
          strokeWidth="7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
