import React from 'react';
import { EXPERIENCES } from '../data/portfolioData';
import { TiltCard } from './TiltCard';
import { Calendar, MapPin } from 'lucide-react';

export const JourneySection: React.FC = () => {
  return (
    <section id="experience" className="py-20 border-t border-[#26213d] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#ff5388]">Experience & Track Record</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#f3effa] tracking-tight mt-2">
            Experience & Journey
          </h2>
          <p className="mt-3 text-base text-[#a9a3bd] leading-relaxed">
            Three internships across AI, full-stack, and data engineering. Hover to feel the 3D depth.
          </p>
        </div>

        {/* Timeline Stack */}
        <div className="space-y-6">
          {EXPERIENCES.map((item, idx) => (
            <TiltCard
              key={idx}
              maxTilt={2.5}
              className="tactile-card-dark rounded-3xl p-6 sm:p-8 hover:border-[#8b5cf6]/60 transition-all shadow-xl"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#26203d]">
                <div className="space-y-1">
                  <div className="flex items-center gap-2.5">
                    <h3 className="text-lg sm:text-xl font-bold text-[#f3effa]">{item.role}</h3>
                    {item.badge && (
                      <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-[#ff5388]/15 text-[#ff80a6] border border-[#ff5388]/30">
                        {item.badge}
                      </span>
                    )}
                  </div>
                  <div className="text-sm font-semibold text-[#c084fc] flex items-center gap-2">
                    <span>{item.company}</span>
                    <span className="text-[#5b5177]">•</span>
                    <span className="text-xs text-[#a9a3bd] font-normal">{item.type}</span>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-xs font-mono text-[#8a829e]">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#ff5388]" />
                    {item.period}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#8b5cf6]" />
                    {item.location}
                  </span>
                </div>
              </div>

              <div className="pt-4 space-y-4">
                <p className="text-xs sm:text-sm text-[#c8c2db] leading-relaxed">
                  {item.description}
                </p>

                <div className="space-y-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#8a829e] block">Key Engineering Highlights:</span>
                  <ul className="space-y-1.5 text-xs text-[#d8d2ea]">
                    {item.achievements.map((ach, aIdx) => (
                      <li key={aIdx} className="flex items-start gap-2">
                        <span className="text-[#ff5388] font-bold mt-0.5">•</span>
                        <span className="leading-relaxed">{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {item.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-[#1e1736] border border-[#35295c] text-[#d8d2ea]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
};
