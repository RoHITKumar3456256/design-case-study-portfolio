import React from 'react';
import { Cpu, Code, Database, Sparkles, Layers, Terminal, Zap, Shield, Globe } from 'lucide-react';

interface SkillItem {
  name: string;
  category: string;
  color: string;
  border: string;
  bg: string;
  glow: string;
  icon?: string;
}

const TRACK_1: SkillItem[] = [
  { name: 'LangGraph Multi-Agent', category: 'Agentic AI', color: 'text-rose-300', border: 'border-rose-500/30', bg: 'bg-rose-500/10', glow: 'shadow-[0_0_12px_rgba(244,63,94,0.15)]' },
  { name: 'React 19 & Next.js', category: 'Frontend', color: 'text-cyan-300', border: 'border-cyan-500/30', bg: 'bg-cyan-500/10', glow: 'shadow-[0_0_12px_rgba(6,182,212,0.15)]' },
  { name: 'TypeScript', category: 'Language', color: 'text-blue-300', border: 'border-blue-500/30', bg: 'bg-blue-500/10', glow: 'shadow-[0_0_12px_rgba(59,130,246,0.15)]' },
  { name: 'FastAPI & WebSockets', category: 'Backend', color: 'text-emerald-300', border: 'border-emerald-500/30', bg: 'bg-emerald-500/10', glow: 'shadow-[0_0_12px_rgba(16,185,129,0.15)]' },
  { name: 'Model Context Protocol (MCP)', category: 'Agent Tooling', color: 'text-purple-300', border: 'border-purple-500/30', bg: 'bg-purple-500/10', glow: 'shadow-[0_0_12px_rgba(168,85,247,0.15)]' },
  { name: 'RAG & ChromaDB', category: 'Vector Search', color: 'text-amber-300', border: 'border-amber-500/30', bg: 'bg-amber-500/10', glow: 'shadow-[0_0_12px_rgba(245,158,11,0.15)]' },
  { name: 'Python', category: 'AI Core', color: 'text-yellow-300', border: 'border-yellow-500/30', bg: 'bg-yellow-500/10', glow: 'shadow-[0_0_12px_rgba(234,179,8,0.15)]' },
  { name: 'Stripe Payments', category: 'Monetization', color: 'text-indigo-300', border: 'border-indigo-500/30', bg: 'bg-indigo-500/10', glow: 'shadow-[0_0_12px_rgba(99,102,241,0.15)]' },
  { name: 'Docker & Containerization', category: 'DevOps', color: 'text-sky-300', border: 'border-sky-500/30', bg: 'bg-sky-500/10', glow: 'shadow-[0_0_12px_rgba(14,165,233,0.15)]' },
  { name: 'Gemini & Claude LLM API', category: 'GenAI', color: 'text-pink-300', border: 'border-pink-500/30', bg: 'bg-pink-500/10', glow: 'shadow-[0_0_12px_rgba(236,72,153,0.15)]' },
];

const TRACK_2: SkillItem[] = [
  { name: '300+ LeetCode DSA', category: 'Algorithms', color: 'text-orange-300', border: 'border-orange-500/30', bg: 'bg-orange-500/10', glow: 'shadow-[0_0_12px_rgba(249,115,22,0.15)]' },
  { name: '150+ NeetCode SQL', category: 'Databases', color: 'text-emerald-300', border: 'border-emerald-500/30', bg: 'bg-emerald-500/10', glow: 'shadow-[0_0_12px_rgba(16,185,129,0.15)]' },
  { name: 'Vibe Coding & Rapid Prototyping', category: 'Cursor / Claude', color: 'text-purple-300', border: 'border-purple-500/30', bg: 'bg-purple-500/10', glow: 'shadow-[0_0_12px_rgba(168,85,247,0.15)]' },
  { name: 'Snowflake & ETL Pipelines', category: 'Data Engineering', color: 'text-cyan-300', border: 'border-cyan-500/30', bg: 'bg-cyan-500/10', glow: 'shadow-[0_0_12px_rgba(6,182,212,0.15)]' },
  { name: 'Apache Kafka Streaming', category: 'Distributed Systems', color: 'text-red-300', border: 'border-red-500/30', bg: 'bg-red-500/10', glow: 'shadow-[0_0_12px_rgba(239,68,68,0.15)]' },
  { name: 'Three.js 3D WebGL', category: 'Interactive 3D', color: 'text-lime-300', border: 'border-lime-500/30', bg: 'bg-lime-500/10', glow: 'shadow-[0_0_12px_rgba(132,204,22,0.15)]' },
  { name: 'Figma Design Systems & Tokens', category: 'UI/UX', color: 'text-fuchsia-300', border: 'border-fuchsia-500/30', bg: 'bg-fuchsia-500/10', glow: 'shadow-[0_0_12px_rgba(217,70,239,0.15)]' },
  { name: 'Real-Time Telemetry Dashboards', category: 'Data UX', color: 'text-teal-300', border: 'border-teal-500/30', bg: 'bg-teal-500/10', glow: 'shadow-[0_0_12px_rgba(20,184,166,0.15)]' },
  { name: 'PSS-4 Empirical UX Testing', category: 'Psychometrics', color: 'text-pink-300', border: 'border-pink-500/30', bg: 'bg-pink-500/10', glow: 'shadow-[0_0_12px_rgba(236,72,153,0.15)]' },
  { name: 'AWS & Cloud Deployment', category: 'Cloud', color: 'text-amber-300', border: 'border-amber-500/30', bg: 'bg-amber-500/10', glow: 'shadow-[0_0_12px_rgba(245,158,11,0.15)]' },
];

export const SkillsMarquee: React.FC = () => {
  return (
    <section className="py-14 relative overflow-hidden border-y border-[#26213d]/60 bg-[#120e20]/60">
      {/* Background glow spot */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-36 bg-gradient-to-r from-[#ff5388]/10 via-[#8b5cf6]/10 to-[#06b6d4]/10 rounded-full blur-3xl pointer-events-none"></div>

      {/* Header Label */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 mb-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#ff5388] animate-ping"></span>
          <span className="text-xs font-mono uppercase tracking-widest text-[#a9a3bd] font-bold">
            Live Skills Stream • Continuous Marquee
          </span>
        </div>
        <span className="text-[11px] font-mono text-[#746d8c] hidden sm:inline">
          Hover to pause sliding
        </span>
      </div>

      {/* Left and Right Fade Gradient Masks */}
      <div className="absolute inset-y-0 left-0 w-24 sm:w-40 bg-gradient-to-r from-[#0d0b16] to-transparent z-10 pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-24 sm:w-40 bg-gradient-to-l from-[#0d0b16] to-transparent z-10 pointer-events-none"></div>

      {/* Track 1: Forward Infinite Slide */}
      <div className="marquee-container overflow-hidden w-full mb-3.5">
        <div className="animate-marquee flex items-center gap-3">
          {[...TRACK_1, ...TRACK_1].map((skill, index) => (
            <div
              key={index}
              className={`flex items-center gap-2.5 px-4 py-2 rounded-2xl border ${skill.border} ${skill.bg} ${skill.glow} backdrop-blur-md cursor-default transition-transform hover:scale-105`}
            >
              <div className="w-2 h-2 rounded-full bg-current opacity-70 animate-pulse"></div>
              <span className={`text-xs sm:text-sm font-bold tracking-tight ${skill.color}`}>
                {skill.name}
              </span>
              <span className="text-[10px] font-mono text-[#8a829e] uppercase bg-[#1d1730] px-2 py-0.5 rounded-full border border-white/5">
                {skill.category}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Track 2: Reverse Infinite Slide */}
      <div className="marquee-container overflow-hidden w-full">
        <div className="animate-marquee-reverse flex items-center gap-3">
          {[...TRACK_2, ...TRACK_2].map((skill, index) => (
            <div
              key={index}
              className={`flex items-center gap-2.5 px-4 py-2 rounded-2xl border ${skill.border} ${skill.bg} ${skill.glow} backdrop-blur-md cursor-default transition-transform hover:scale-105`}
            >
              <div className="w-2 h-2 rounded-full bg-current opacity-70"></div>
              <span className={`text-xs sm:text-sm font-bold tracking-tight ${skill.color}`}>
                {skill.name}
              </span>
              <span className="text-[10px] font-mono text-[#8a829e] uppercase bg-[#1d1730] px-2 py-0.5 rounded-full border border-white/5">
                {skill.category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
