import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Stickers } from './Stickers';
import { ThreeDeskScene } from './ThreeDeskScene';
import { TiltCard } from './TiltCard';
import { Mail, Check, ArrowRight, Terminal, Sparkles } from 'lucide-react';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="pt-12 pb-16 sm:pt-20 sm:pb-24 relative overflow-hidden text-center sm:text-left">
      {/* Background ambient radial glow spots */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-[#ff5388]/15 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-40 right-1/4 w-[450px] h-[450px] bg-[#8b5cf6]/15 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Availability & Location Pills */}
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mb-6">
          <span className="inline-flex items-center gap-1.5 bg-[#12805c]/15 text-[#34d399] border border-[#10b981]/30 font-bold text-xs px-3.5 py-1.5 rounded-full shadow-[0_0_15px_rgba(16,185,129,0.15)]">
            <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse"></span>
            Open to work
          </span>
          <span className="bg-[#1b162b] border border-[#2c2444] text-[#d8d2ea] font-semibold text-xs px-3.5 py-1.5 rounded-full">
            Delhi, India
          </span>
          <span className="bg-[#1b162b] border border-[#2c2444] text-[#d8d2ea] font-semibold text-xs px-3.5 py-1.5 rounded-full">
            NSUT, B.Tech CSE 2027
          </span>
          <span className="bg-gradient-to-r from-[#ff5388]/15 to-[#8b5cf6]/15 border border-[#ff5388]/30 text-[#ff80a6] font-semibold text-xs px-3.5 py-1.5 rounded-full">
            Paytm AI/LLM intern
          </span>
        </div>

        {/* Big Bold Headline */}
        <div className="text-center sm:text-left max-w-4xl">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-[#f3effa] tracking-tight leading-[1.08]">
            Hi, I'm{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff5388] via-[#c084fc] to-[#60a5fa]">
              Rohit
            </span>
            . <br />
            <span className="text-[#a9a3bd] font-bold">I build products, then design how</span> <br />
            they feel to use.
          </h1>

          <p className="mt-4 text-lg sm:text-2xl font-semibold text-[#c8c2db] flex items-center justify-center sm:justify-start gap-2">
            <Sparkles className="w-5 h-5 text-[#ff5388] inline" />
            <span>{PERSONAL_INFO.tagline}</span>
          </p>

          <p className="mt-4 text-sm sm:text-base text-[#a9a3bd] max-w-3xl leading-relaxed">
            Final-year Computer Science student at <strong className="text-white">NSUT Delhi (2027)</strong>. Software Engineering Intern at <strong className="text-white">Paytm</strong> on an AI & LLM initiative building multi-agent workflows and real-time financial dashboards. I take products from first sketch to live code.
          </p>
        </div>

        {/* 3D INTERACTIVE DESK SCENE CONTAINER (Dark Cyber Pedestal) */}
        <div className="my-8 sm:my-10 bg-gradient-to-b from-[#181329]/90 to-[#120f20]/60 rounded-3xl p-2 sm:p-6 border border-[#2c2544] shadow-2xl relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-[#ff5388]/20 to-[#8b5cf6]/20 rounded-3xl blur-md opacity-40 group-hover:opacity-75 transition duration-500 pointer-events-none"></div>
          <div className="relative">
            <ThreeDeskScene />
          </div>
        </div>

        {/* Action CTAs */}
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3.5 mt-6">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-[#ff5388] to-[#8b5cf6] hover:from-[#ff6b9a] hover:to-[#9a70ff] text-white text-xs sm:text-sm font-bold transition shadow-lg shadow-pink-500/25 cursor-pointer group"
          >
            <span>See case studies & projects (6)</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          <button
            onClick={handleCopyEmail}
            className="inline-flex items-center gap-2 px-5 py-3.5 rounded-2xl bg-[#161224] border border-[#2c2544] hover:border-[#ff5388]/60 text-xs sm:text-sm font-bold text-[#f3effa] transition cursor-pointer shadow-md hover:bg-[#1f1933]"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-400">Email Copied!</span>
              </>
            ) : (
              <>
                <Mail className="w-4 h-4 text-[#ff5388]" />
                <span>rohit.kumar.ug23@nsut.ac.in</span>
              </>
            )}
          </button>

          <button
            onClick={onOpenResume}
            className="inline-flex items-center gap-1.5 px-4 py-3.5 rounded-2xl text-xs sm:text-sm font-semibold text-[#a9a3bd] hover:text-white transition cursor-pointer hover:bg-white/5"
          >
            <Terminal className="w-4 h-4 text-[#8b5cf6]" />
            <span>Curriculum Vitae</span>
          </button>
        </div>

        {/* Stats Strip (Dark 3D Tilt Cards) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-9 text-left">
          {PERSONAL_INFO.stats.map((st, idx) => (
            <TiltCard
              key={idx}
              maxTilt={6}
              className="p-4 rounded-2xl bg-[#161224]/90 border border-[#2c2544] shadow-lg hover:border-[#8b5cf6]/50 transition-all"
            >
              <span className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#f3effa] to-[#c8c2db] font-mono block">
                {st.value}
              </span>
              <span className="text-xs font-semibold text-[#d8d2ea] block mt-0.5">
                {st.label}
              </span>
              <span className="text-[10px] text-[#8a829e] font-mono">
                {st.source}
              </span>
            </TiltCard>
          ))}
        </div>

        {/* Playful Stickers & Easter Eggs */}
        <Stickers />
      </div>
    </section>
  );
};
