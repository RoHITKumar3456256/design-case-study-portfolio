import React from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { TiltCard } from './TiltCard';
import { Code, Cpu, Sparkles, Database, Cloud, Palette, CheckCircle2 } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI and agents': return <Cpu className="w-5 h-5 text-indigo-400" />;
      case 'Vibe coding': return <Sparkles className="w-5 h-5 text-[#ff5388]" />;
      case 'Product and UI design': return <Palette className="w-5 h-5 text-purple-400" />;
      case 'Frontend and backend': return <Code className="w-5 h-5 text-cyan-400" />;
      case 'Data': return <Database className="w-5 h-5 text-emerald-400" />;
      case 'Cloud and DevOps': return <Cloud className="w-5 h-5 text-sky-400" />;
      default: return <CheckCircle2 className="w-5 h-5 text-neutral-400" />;
    }
  };

  return (
    <section id="about" className="py-20 border-t border-[#26213d] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#ff5388]">Background & Arsenal</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#f3effa] tracking-tight mt-2">
            Skills & Technical Stack
          </h2>
          <p className="mt-3 text-base text-[#a9a3bd] leading-relaxed">
            What I use to take an idea from initial sketch to live production. Hover over any card to feel the 3D tilt.
          </p>
        </div>

        {/* 6 Skill Cards with 3D Tilt */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <TiltCard
              key={idx}
              maxTilt={4}
              className="tactile-card-dark rounded-3xl p-6 flex flex-col justify-between shadow-xl hover:border-[#8b5cf6]/60 transition-all"
            >
              <div>
                <div className="w-10 h-10 rounded-2xl bg-[#1d1733] border border-[#322754] flex items-center justify-center font-bold mb-4 shadow-sm">
                  {getCategoryIcon(cat.category)}
                </div>
                <h3 className="text-base font-bold text-[#f3effa] tracking-tight mb-3">
                  {cat.category}
                </h3>

                <div className="flex flex-wrap gap-1.5">
                  {cat.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 rounded-full text-xs font-medium bg-[#1e1736] text-[#d8d2ea] border border-[#35295c] hover:border-[#ff5388]/40 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-[#26203d] text-[10px] font-mono text-[#746d8c] flex items-center justify-between">
                <span>Verified in Production</span>
                <span className="text-emerald-400 font-semibold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> Active
                </span>
              </div>
            </TiltCard>
          ))}
        </div>

        {/* Engineering Philosophy Banner */}
        <TiltCard maxTilt={2} className="tactile-card-dark rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-1 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <h4 className="font-bold text-sm text-[#f3effa]">Design × Engineering Synthesis</h4>
            </div>
            <p className="text-xs text-[#a9a3bd] max-w-xl leading-relaxed">
              "I am an engineer who designs. That means I know what is easy to build, and I care how it feels to use. Whether it's LangGraph agents, real-time WebSocket state, or 60fps micro-interactions."
            </p>
          </div>
          <div className="flex items-center gap-3 text-xs font-mono text-[#a9a3bd] bg-[#1a142c] px-4 py-2.5 rounded-2xl border border-[#2e244d] whitespace-nowrap shadow-md">
            <span>📍 Delhi, India</span>
            <span>•</span>
            <span className="text-[#ff5388] font-semibold">NSUT B.Tech CSE '27</span>
          </div>
        </TiltCard>
      </div>
    </section>
  );
};
