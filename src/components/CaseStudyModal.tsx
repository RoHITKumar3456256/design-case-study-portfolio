import React from 'react';
import { X, ExternalLink, CheckCircle2, AlertCircle, Target } from 'lucide-react';
import { Project } from '../types';
import { CareerHQDemo } from './InteractiveDemos/CareerHQDemo';
import { MindSaathiDemo } from './InteractiveDemos/MindSaathiDemo';
import { SmartDialerDemo } from './InteractiveDemos/SmartDialerDemo';

const GithubIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

interface CaseStudyModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, isOpen, onClose }) => {
  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-fade-in">
      <div 
        className="bg-[#141024] rounded-3xl max-w-4xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-[#2e264a] flex flex-col text-[#f3effa]"
        onClick={e => e.stopPropagation()}
      >
        {/* Sticky Header */}
        <div className="sticky top-0 bg-[#141024]/95 backdrop-blur-md px-6 py-4 border-b border-[#282142] flex items-center justify-between z-20">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#ff5388]/15 text-[#ff80a6] border border-[#ff5388]/30">
              {project.tag}
            </span>
            <span className="text-xs text-[#5b5177]">•</span>
            <span className="text-xs font-mono text-[#8a829e]">{project.period || 'Case Study'}</span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-xl hover:bg-white/10 text-[#a9a3bd] hover:text-white transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-10 space-y-10">
          {/* Title & Subtitle */}
          <div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              {project.title}: <span className="font-semibold text-[#c8c2db]">{project.subtitle}</span>
            </h2>
            <p className="mt-4 text-base text-[#a9a3bd] leading-relaxed max-w-3xl">
              {project.description}
            </p>

            {/* Meta Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 p-4 rounded-2xl bg-[#1b152d] border border-[#2c2444] text-xs">
              <div>
                <span className="text-[#8a829e] block text-[11px] uppercase tracking-wider font-medium">Role</span>
                <span className="font-semibold text-white mt-0.5 block">{project.role}</span>
              </div>
              <div>
                <span className="text-[#8a829e] block text-[11px] uppercase tracking-wider font-medium">Built With</span>
                <span className="font-semibold text-white mt-0.5 block">{project.builtWith.slice(0, 3).join(', ')}</span>
              </div>
              <div>
                <span className="text-[#8a829e] block text-[11px] uppercase tracking-wider font-medium">Status</span>
                <span className="font-semibold text-emerald-400 mt-0.5 block">{project.status}</span>
              </div>
              <div>
                <span className="text-[#8a829e] block text-[11px] uppercase tracking-wider font-medium">Highlight</span>
                <span className="font-semibold text-[#ff5388] mt-0.5 block">{project.highlightMetric.value}</span>
              </div>
            </div>
          </div>

          {/* User Flow Stepper */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#ff5388]">
              The 4-Step User Journey Flow
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
              {project.flowSteps.map((step) => (
                <div key={step.number} className="p-4 rounded-2xl border border-[#2c2444] bg-[#1b152d] space-y-1.5">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-[#ff5388] to-[#8b5cf6] text-white text-xs font-bold flex items-center justify-center">
                    {step.number}
                  </div>
                  <h4 className="font-bold text-sm text-white pt-1">{step.title}</h4>
                  <p className="text-xs text-[#a9a3bd] leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Prototype Simulation */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#ff5388]">
                Live Interactive Experience
              </h3>
              <span className="text-xs text-[#c084fc] font-medium font-mono">Fully interactive</span>
            </div>
            {project.previewType === 'careerhq' && <CareerHQDemo />}
            {project.previewType === 'mindsaathi' && <MindSaathiDemo />}
            {project.previewType === 'smartdialer' && <SmartDialerDemo />}
          </div>

          {/* Problem vs. What I Designed Breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-[#231728] border border-rose-500/30 space-y-3">
              <div className="flex items-center gap-2 text-rose-300 font-bold text-base">
                <AlertCircle className="w-5 h-5 text-rose-400" />
                <span>The Core Problem</span>
              </div>
              <p className="text-xs text-[#d8d2ea] leading-relaxed font-medium">
                {project.problem.summary}
              </p>
              <ul className="space-y-2 pt-2 text-xs text-[#a9a3bd]">
                {project.problem.points.map((pt, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-rose-400 font-bold">•</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-[#132328] border border-emerald-500/30 space-y-3">
              <div className="flex items-center gap-2 text-emerald-300 font-bold text-base">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                <span>What I Designed & Built</span>
              </div>
              <p className="text-xs text-[#d8d2ea] leading-relaxed font-medium">
                {project.solution.summary}
              </p>
              <ul className="space-y-2 pt-2 text-xs text-[#a9a3bd]">
                {project.solution.points.map((pt, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-emerald-400 font-bold">✓</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Measured Impact */}
          <div className="p-6 rounded-2xl bg-[#1b152d] border border-[#2c2444] space-y-3">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <Target className="w-4 h-4 text-[#ff5388]" />
              <span>Usability Testing & Empirical Results</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              {project.impact.map((imp, idx) => (
                <div key={idx} className="p-3.5 bg-[#140f24] rounded-xl border border-[#2b2247] text-xs text-[#c8c2db] leading-relaxed">
                  <span className="font-bold text-[#ff5388] block text-sm mb-1 font-mono">0{idx + 1}</span>
                  {imp}
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Actions */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#26203d]">
            <div className="text-xs text-[#8a829e]">
              Designed & coded end-to-end by <strong className="text-white">Rohit Kumar</strong>
            </div>

            <div className="flex items-center gap-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl border border-[#2c2444] hover:border-[#ff5388] text-xs font-semibold text-[#d8d2ea] hover:text-white transition bg-[#1b152d]"
                >
                  <GithubIcon className="w-4 h-4" /> View Code
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-[#ff5388] to-[#8b5cf6] text-xs font-semibold text-white transition shadow-md"
                >
                  Open Live Product <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
