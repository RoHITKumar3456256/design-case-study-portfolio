import React from 'react';
import { Project } from '../types';
import { TiltCard } from './TiltCard';
import { ArrowUpRight, Sparkles, ExternalLink } from 'lucide-react';
import { CareerHQDemo } from './InteractiveDemos/CareerHQDemo';
import { MindSaathiDemo } from './InteractiveDemos/MindSaathiDemo';
import { SmartDialerDemo } from './InteractiveDemos/SmartDialerDemo';

const GithubIcon: React.FC<{ className?: string }> = ({ className = "w-3.5 h-3.5" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

interface CaseStudyCardProps {
  project: Project;
  onOpenModal: (project: Project) => void;
}

export const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ project, onOpenModal }) => {
  return (
    <TiltCard
      maxTilt={3}
      className="tactile-card-dark rounded-3xl p-6 sm:p-10 transition-all duration-300 relative overflow-hidden"
    >
      {/* Top Meta Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
        <div className="flex items-center gap-2.5">
          <span className="px-3.5 py-1 rounded-full text-xs font-semibold bg-[#211a37] text-[#d8d2ea] border border-[#382d5c]">
            {project.tag}
          </span>
          <span className="text-xs text-[#5f577a]">•</span>
          <span className="text-xs font-semibold text-emerald-300 bg-emerald-500/15 px-3 py-0.5 rounded-full border border-emerald-500/30">
            {project.status}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs font-mono text-[#8a829e]">{project.period}</span>
        </div>
      </div>

      {/* Main Title and Subtitle */}
      <div className="max-w-3xl mb-8">
        <h3
          className="text-2xl sm:text-3xl font-extrabold text-[#f3effa] tracking-tight hover:text-[#ff5388] transition-colors cursor-pointer"
          onClick={() => onOpenModal(project)}
        >
          {project.title}: <span className="text-[#a9a3bd] font-medium">{project.subtitle}</span>
        </h3>
        <p className="mt-3 text-sm sm:text-base text-[#a9a3bd] leading-relaxed">
          {project.description}
        </p>
      </div>

      {/* Grid of Key Attributes */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 p-4 sm:p-5 rounded-2xl bg-[#1a142c] border border-[#2b2247] text-xs mb-8">
        <div>
          <span className="text-[#7c7494] block text-[11px] uppercase tracking-wider font-semibold">Role</span>
          <span className="font-semibold text-[#f3effa] mt-0.5 block">{project.role}</span>
        </div>
        <div>
          <span className="text-[#7c7494] block text-[11px] uppercase tracking-wider font-semibold">Built with</span>
          <span className="font-semibold text-[#f3effa] mt-0.5 block truncate" title={project.builtWith.join(', ')}>
            {project.builtWith.slice(0, 3).join(', ')}
          </span>
        </div>
        <div>
          <span className="text-[#7c7494] block text-[11px] uppercase tracking-wider font-semibold">
            {project.focus ? 'Focus' : 'Impact'}
          </span>
          <span className="font-semibold text-[#ff5388] mt-0.5 block">
            {project.focus || project.highlightMetric.value}
          </span>
        </div>
        <div>
          <span className="text-[#7c7494] block text-[11px] uppercase tracking-wider font-semibold">Architecture</span>
          <span className="font-semibold text-emerald-400 mt-0.5 block">0 to 1 Shipped</span>
        </div>
      </div>

      {/* 4-Step User Flow */}
      <div className="mb-8">
        <div className="text-xs font-bold uppercase tracking-wider text-[#8a829e] mb-3.5 flex items-center justify-between">
          <span>The End-to-End User Flow</span>
          <span className="text-[11px] font-mono text-[#6c6482]">4 distinct checkpoints</span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {project.flowSteps.map((step) => (
            <div
              key={step.number}
              className="p-3.5 rounded-xl border border-[#2a2245] bg-[#171227] hover:border-[#8b5cf6]/60 transition-colors"
            >
              <div className="text-xs font-bold text-[#ff5388] font-mono mb-1">0{step.number}</div>
              <div className="font-semibold text-xs text-[#f3effa]">{step.title}</div>
              <div className="text-[11px] text-[#a9a3bd] mt-1 leading-snug line-clamp-2">{step.description}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Simulator */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2.5 px-1">
          <div className="flex items-center gap-1.5 text-xs font-bold text-[#d8d2ea]">
            <Sparkles className="w-3.5 h-3.5 text-[#ff5388]" />
            <span>Interactive Simulator Preview</span>
          </div>
          <span className="text-[11px] font-mono text-[#746d8c]">Click tabs to test prototype</span>
        </div>
        {project.previewType === 'careerhq' && <CareerHQDemo />}
        {project.previewType === 'mindsaathi' && <MindSaathiDemo />}
        {project.previewType === 'smartdialer' && <SmartDialerDemo />}
      </div>

      {/* Card Action Footer with Direct Live & GitHub Links */}
      <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#26203d]">
        <div className="flex flex-wrap items-center gap-2">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-[#ff5388] to-[#8b5cf6] text-white text-xs font-semibold transition shadow-md shadow-pink-500/20 hover:opacity-90"
            >
              <span>Live Site</span> <ExternalLink className="w-3 h-3" />
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#1b152d] border border-[#2f254e] hover:border-[#ff5388]/60 text-[#d8d2ea] hover:text-white text-xs font-semibold transition"
            >
              <GithubIcon className="w-3.5 h-3.5" /> <span>Code</span>
            </a>
          )}
        </div>

        <button
          onClick={() => onOpenModal(project)}
          className="inline-flex items-center gap-1.5 text-xs font-bold px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/10 transition shadow-sm cursor-pointer hover:border-white/20"
        >
          Deep Dive Case Study <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>
    </TiltCard>
  );
};
