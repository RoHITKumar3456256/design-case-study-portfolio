import React from 'react';
import { ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-[#26213d] bg-[#0c0a15] text-xs text-[#8a829e]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <Logo size="sm" />
          <div>
            <div className="font-bold text-[#f3effa] text-sm">{PERSONAL_INFO.name}</div>
            <div className="text-[11px] text-[#746d8c] mt-0.5">{PERSONAL_INFO.location} • NSUT Class of 2027</div>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <a
            href={PERSONAL_INFO.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            LinkedIn
          </a>
          <a
            href={PERSONAL_INFO.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            GitHub
          </a>
          <a
            href={PERSONAL_INFO.socials.careerhq}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            CareerHQ
          </a>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#181329] border border-[#2b2247] hover:border-[#ff5388] text-[#d8d2ea] transition cursor-pointer font-medium"
          >
            <ArrowUp className="w-3.5 h-3.5 text-[#ff5388]" /> Back to top
          </button>
        </div>
      </div>
    </footer>
  );
};
