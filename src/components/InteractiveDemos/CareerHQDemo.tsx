import React, { useState } from 'react';
import { CheckCircle2, AlertTriangle, Sparkles, RefreshCw, ArrowRight, ShieldCheck, FileText } from 'lucide-react';

export const CareerHQDemo: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'audit' | 'rewrite' | 'checkout'>('audit');
  const [atsScore, setAtsScore] = useState(84);
  const [analyzing, setAnalyzing] = useState(false);
  const selectedRole = 'Product Design / AI Intern';

  const handleReanalyze = () => {
    setAnalyzing(true);
    setTimeout(() => {
      setAtsScore(prev => (prev === 84 ? 94 : 84));
      setAnalyzing(false);
    }, 600);
  };

  return (
    <div className="bg-[#151124] border border-[#2b2247] rounded-2xl p-4 sm:p-6 shadow-xl overflow-hidden">
      {/* Top Header of the Interactive Demo */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#26203d] pb-4 mb-5">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#ff5388] to-[#8b5cf6] flex items-center justify-center text-white font-bold text-sm shadow-md">
            HQ
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h4 className="font-semibold text-sm sm:text-base text-[#f3effa]">CareerHQ Interactive Simulator</h4>
              <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                Live Engine
              </span>
            </div>
            <p className="text-xs text-[#a9a3bd]">ATS evaluation engine & Gemini AI bullet re-writer</p>
          </div>
        </div>

        {/* Tab Controls */}
        <div className="flex items-center bg-[#1c162e] p-1 rounded-xl text-xs font-medium border border-[#2d2448]">
          <button
            onClick={() => setActiveTab('audit')}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              activeTab === 'audit' ? 'bg-[#291f42] text-white shadow-xs font-semibold' : 'text-[#a9a3bd] hover:text-white'
            }`}
          >
            1. ATS Audit
          </button>
          <button
            onClick={() => setActiveTab('rewrite')}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              activeTab === 'rewrite' ? 'bg-[#291f42] text-white shadow-xs font-semibold' : 'text-[#a9a3bd] hover:text-white'
            }`}
          >
            2. AI Re-write
          </button>
          <button
            onClick={() => setActiveTab('checkout')}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              activeTab === 'checkout' ? 'bg-[#291f42] text-white shadow-xs font-semibold' : 'text-[#a9a3bd] hover:text-white'
            }`}
          >
            3. LaTeX & Stripe
          </button>
        </div>
      </div>

      {/* Tab 1: ATS Audit Screen */}
      {activeTab === 'audit' && (
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-xl bg-[#1b152d] border border-[#2c2444]">
            <div className="flex items-center gap-4">
              <div className="relative w-16 h-16 flex items-center justify-center">
                <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 36 36">
                  <path
                    className="text-[#2c2444]"
                    strokeWidth="3.5"
                    stroke="currentColor"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <path
                    className={`${atsScore > 90 ? 'text-emerald-400' : 'text-[#ff5388]'} transition-all duration-700`}
                    strokeDasharray={`${atsScore}, 100`}
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                </svg>
                <span className="absolute font-bold text-sm text-[#f3effa] font-mono">{atsScore}%</span>
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-[#a9a3bd]">ATS Compatibility Score</div>
                <div className="text-base font-bold text-[#f3effa]">
                  {atsScore > 90 ? 'Rank Top 5% — Ready for Big Tech' : 'Strong — 2 Optimization Gaps Detected'}
                </div>
                <div className="text-xs text-[#a9a3bd] mt-0.5">Matched against: <span className="text-[#ff5388] font-semibold">{selectedRole}</span></div>
              </div>
            </div>

            <button
              onClick={handleReanalyze}
              disabled={analyzing}
              className="flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-xl bg-gradient-to-r from-[#ff5388] to-[#8b5cf6] text-white hover:opacity-90 transition shadow-md cursor-pointer"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${analyzing ? 'animate-spin' : ''}`} />
              {analyzing ? 'Optimizing...' : 'Apply AI Fixes'}
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
            <div className="p-3.5 rounded-xl border border-emerald-500/30 bg-emerald-500/10 space-y-2">
              <div className="flex items-center gap-1.5 font-semibold text-emerald-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Passed Criteria (5 / 6)</span>
              </div>
              <ul className="space-y-1.5 text-emerald-200/80 text-[11px]">
                <li className="flex items-center gap-1.5">✓ Single-column ATS parsable schema</li>
                <li className="flex items-center gap-1.5">✓ Experience headings detected</li>
                <li className="flex items-center gap-1.5">✓ Quantified metrics in 80% bullets</li>
              </ul>
            </div>

            <div className="p-3.5 rounded-xl border border-amber-500/30 bg-amber-500/10 space-y-2">
              <div className="flex items-center gap-1.5 font-semibold text-amber-300">
                <AlertTriangle className="w-4 h-4 text-amber-400" />
                <span>Identified Keyword Gaps</span>
              </div>
              <div className="flex flex-wrap gap-1.5 pt-0.5">
                <span className="px-2 py-0.5 rounded-md bg-[#231b38] border border-amber-500/40 text-amber-200 text-[11px] font-medium">
                  + LangGraph Workflows
                </span>
                <span className="px-2 py-0.5 rounded-md bg-[#231b38] border border-amber-500/40 text-amber-200 text-[11px] font-medium">
                  + RAG Telemetry
                </span>
                <span className="px-2 py-0.5 rounded-md bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-[11px] font-medium">
                  ✓ React Components (Matched)
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: AI Re-write Comparison Screen */}
      {activeTab === 'rewrite' && (
        <div className="space-y-3">
          <div className="p-3.5 rounded-xl bg-purple-500/15 border border-purple-500/30 text-xs">
            <div className="flex items-center gap-1.5 font-semibold text-purple-300 mb-1">
              <Sparkles className="w-3.5 h-3.5 text-[#ff5388]" />
              <span>Gemini AI Contextual Enhancement</span>
            </div>
            <p className="text-purple-200/80 text-[11px]">
              Transforms passive descriptions into outcome-driven, quantified impact bullets for recruiters.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
            <div className="p-3.5 rounded-xl border border-red-500/30 bg-red-500/10">
              <span className="font-semibold text-red-400 uppercase tracking-wider text-[10px] block mb-1">Original Draft</span>
              <p className="text-[#a9a3bd] leading-relaxed font-mono text-[11px]">
                "Worked on designing dashboard screens in React and helped developers with components and layouts."
              </p>
              <div className="mt-3 text-[10px] text-red-400 flex items-center gap-1">
                ⚠️ Vague impact • Missing action verbs • No measurement
              </div>
            </div>

            <div className="p-3.5 rounded-xl border border-emerald-500/40 bg-emerald-500/10">
              <span className="font-semibold text-emerald-300 uppercase tracking-wider text-[10px] block mb-1">AI Optimized (CareerHQ)</span>
              <p className="text-[#f3effa] leading-relaxed font-mono text-[11px] font-medium">
                "Architected a real-time financial telemetry dashboard in React, reducing decision turnaround by 64% and standardizing 24+ reusable design tokens across teams."
              </p>
              <div className="mt-3 text-[10px] text-emerald-300 flex items-center gap-1">
                ✅ Quantified outcome • Clear ownership • ATS aligned
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: LaTeX & Stripe Screen */}
      {activeTab === 'checkout' && (
        <div className="p-4 rounded-xl bg-[#1b152d] border border-[#2c2444] space-y-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pb-3 border-b border-[#2a2245]">
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4 text-[#ff5388]" />
              <span className="text-xs font-semibold text-[#f3effa]">LaTeX Single-Page Compile Engine</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] text-[#a9a3bd] font-mono">resume_rohit_kumar.tex</span>
              <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[10px] font-semibold font-mono">Compiled in 0.8s</span>
            </div>
          </div>

          <div className="bg-[#120e20] p-3 rounded-lg border border-[#2b2247] font-mono text-[10px] text-[#a9a3bd] overflow-x-auto leading-relaxed">
            <span className="text-purple-400">\documentclass</span>[10pt, letterpaper]{'{{article}}'}<br />
            <span className="text-purple-400">\usepackage</span>{'{{hyperref, enumitem, geometry}}'}<br />
            <span className="text-blue-400">\begin{'{{document}}'}</span><br />
            &nbsp;&nbsp;<span className="text-white font-bold">\section{'{{EXPERIENCE}}'}</span><br />
            &nbsp;&nbsp;\textbf{'{{Paytm}}'} \hfill Software Engineering Intern — AI Initiative \hfill \textit{'{{2026 -- Present}}'}
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
            <div className="flex items-center gap-2 text-xs text-[#a9a3bd]">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Stripe Checkout Verified (Monthly & One-time Pass)</span>
            </div>
            <a
              href="https://careerhq.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-[#ff5388] to-[#8b5cf6] text-white hover:opacity-90 transition"
            >
              Open Live CareerHQ <ArrowRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      )}
    </div>
  );
};
