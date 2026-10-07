import React from 'react';
import { TESTIMONIALS } from '../data/portfolioData';
import { Quote } from 'lucide-react';
import { TiltCard } from './TiltCard';

export const AppreciationsSection: React.FC = () => {
  return (
    <section className="py-20 border-t border-[#26213d] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#ff5388]">Collaborator Feedback</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#f3effa] tracking-tight mt-2">
            Appreciations & Signals
          </h2>
          <p className="mt-3 text-base text-[#a9a3bd] leading-relaxed">
            What engineering mentors and product partners say about my design sensibility and technical rigor.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, idx) => (
            <TiltCard
              key={idx}
              maxTilt={4}
              className="tactile-card-dark rounded-3xl p-6 sm:p-7 flex flex-col justify-between shadow-xl"
            >
              <div>
                <Quote className="w-6 h-6 text-[#ff5388] mb-4 opacity-80" />
                <p className="text-xs sm:text-sm text-[#d8d2ea] leading-relaxed italic">
                  "{t.comment}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#26203d] flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#ff5388] to-[#8b5cf6] text-white font-bold text-xs flex items-center justify-center shadow-md">
                  {t.avatarText}
                </div>
                <div>
                  <h4 className="font-bold text-xs text-[#f3effa]">{t.role}</h4>
                  <p className="text-[11px] text-[#a9a3bd]">{t.company}</p>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
};
