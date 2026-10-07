import React from 'react';
import { X, Download, Mail, MapPin, GraduationCap } from 'lucide-react';
import { PERSONAL_INFO, EXPERIENCES, SKILL_CATEGORIES } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div 
        className="bg-[#141024] rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-[#2e264a] flex flex-col text-[#f3effa]"
        onClick={e => e.stopPropagation()}
      >
        {/* Modal Toolbar */}
        <div className="sticky top-0 bg-[#141024]/95 backdrop-blur-md px-6 py-4 border-b border-[#282142] flex items-center justify-between z-10">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
            <span className="font-semibold text-sm text-[#f3effa]">Curriculum Vitae — Rohit Kumar</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-[#ff5388] to-[#8b5cf6] text-white text-xs font-semibold transition cursor-pointer shadow-sm"
            >
              <Download className="w-3.5 h-3.5" /> Print / Save PDF
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-xl hover:bg-white/10 text-[#a9a3bd] hover:text-white transition cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Content Sheet */}
        <div className="p-6 sm:p-10 space-y-8 font-sans">
          {/* Header */}
          <div className="border-b border-[#282142] pb-6">
            <h1 className="text-3xl font-extrabold text-white tracking-tight">{PERSONAL_INFO.name}</h1>
            <p className="text-base font-semibold text-[#ff5388] mt-1">{PERSONAL_INFO.title}</p>
            <p className="text-sm text-[#a9a3bd] mt-2 max-w-2xl leading-relaxed">
              Final-year Computer Science student at Netaji Subhas University of Technology (NSUT Delhi, 2027). Software Engineering Intern at Paytm on an AI & LLM initiative building multi-agent workflows and real-time dashboards.
            </p>

            <div className="flex flex-wrap gap-4 mt-4 text-xs text-[#a9a3bd]">
              <span className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-[#ff5388]" /> {PERSONAL_INFO.email}
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#8b5cf6]" /> {PERSONAL_INFO.location}
              </span>
              <span className="flex items-center gap-1.5">
                <GraduationCap className="w-3.5 h-3.5 text-[#06b6d4]" /> NSUT Delhi (Class of 2027)
              </span>
            </div>
          </div>

          {/* Experience Section */}
          <section className="space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#ff5388] border-b border-[#282142] pb-1.5">
              Work Experience & Products
            </h2>

            <div className="space-y-5">
              {EXPERIENCES.map((exp, idx) => (
                <div key={idx} className="space-y-1.5 p-4 rounded-2xl bg-[#1b152d] border border-[#2b2247]">
                  <div className="flex flex-wrap justify-between items-baseline gap-2">
                    <div className="font-bold text-sm text-white">
                      {exp.role} <span className="text-[#a9a3bd] font-normal">at</span> <span className="text-[#ff5388] font-semibold">{exp.company}</span>
                    </div>
                    <div className="text-xs text-[#8a829e] font-mono">{exp.period}</div>
                  </div>
                  <p className="text-xs text-[#a9a3bd] leading-relaxed">{exp.description}</p>
                  <ul className="list-disc list-inside text-xs text-[#d8d2ea] space-y-1 pl-1 pt-1">
                    {exp.achievements.map((ach, aIdx) => (
                      <li key={aIdx} className="leading-relaxed">{ach}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Education Section */}
          <section className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#ff5388] border-b border-[#282142] pb-1.5">
              Education
            </h2>
            <div className="flex justify-between items-baseline p-4 rounded-2xl bg-[#1b152d] border border-[#2b2247]">
              <div>
                <h3 className="text-sm font-bold text-white">Netaji Subhas University of Technology (NSUT Delhi)</h3>
                <p className="text-xs text-[#a9a3bd]">Bachelor of Technology (B.Tech) in Computer Science & Engineering</p>
              </div>
              <span className="text-xs font-mono text-[#ff80a6]">2023 — 2027</span>
            </div>
          </section>

          {/* Core Competencies */}
          <section className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#ff5388] border-b border-[#282142] pb-1.5">
              Skills & Methodologies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {SKILL_CATEGORIES.map((cat, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-[#1b152d] border border-[#2b2247]">
                  <span className="font-semibold text-white block mb-1">{cat.category}</span>
                  <p className="text-[#a9a3bd] leading-relaxed">{cat.skills.join(', ')}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
