import React from 'react';

export const Logo: React.FC<{ size?: 'sm' | 'md' | 'lg' }> = ({ size = 'md' }) => {
  const dim = size === 'sm' ? 'w-8 h-8' : size === 'lg' ? 'w-12 h-12' : 'w-10 h-10';

  return (
    <div className={`relative ${dim} group cursor-pointer select-none`}>
      {/* Outer ambient glow */}
      <div className="absolute -inset-1 bg-gradient-to-tr from-[#ff5388] via-[#8b5cf6] to-[#06b6d4] rounded-2xl opacity-60 blur-xs group-hover:opacity-100 transition-opacity duration-300 animate-pulse-slow"></div>

      {/* Main 3D Faceted Logo Base */}
      <div className="relative w-full h-full rounded-xl bg-[#141024] border border-white/20 flex items-center justify-center overflow-hidden shadow-lg group-hover:scale-105 transition-transform duration-200">
        {/* Futuristic 3D Cyber Emblem */}
        <svg viewBox="0 0 40 40" className="w-6 h-6 transform group-hover:rotate-6 transition-transform duration-300">
          <defs>
            <linearGradient id="cyberGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ff5388" />
              <stop offset="50%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#06b6d4" />
            </linearGradient>
            <linearGradient id="cyberGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#ff5388" />
            </linearGradient>
          </defs>

          {/* Isometric Diamond Grid */}
          <polygon points="20,4 34,12 34,28 20,36 6,28 6,12" fill="none" stroke="url(#cyberGrad)" strokeWidth="2.2" strokeLinejoin="round" />
          {/* Inner 3D Axis */}
          <line x1="20" y1="4" x2="20" y2="20" stroke="url(#cyberGrad)" strokeWidth="1.6" opacity="0.8" />
          <line x1="6" y1="12" x2="20" y2="20" stroke="url(#cyberGrad)" strokeWidth="1.6" opacity="0.8" />
          <line x1="34" y1="12" x2="20" y2="20" stroke="url(#cyberGrad)" strokeWidth="1.6" opacity="0.8" />

          {/* Stylized R / K Monogram Path */}
          <path
            d="M15 15v10M15 15h5a3 3 0 013 3v0a3 3 0 01-3 3h-5M20 21l4 4"
            fill="none"
            stroke="#ffffff"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        {/* Shimmer light sweep */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none"></div>
      </div>
    </div>
  );
};
