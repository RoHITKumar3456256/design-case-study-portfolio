import React, { useState } from 'react';
import { UserX } from 'lucide-react';

export const MindSaathiDemo: React.FC = () => {
  const [preScore, setPreScore] = useState(13); // out of 16
  const [postScore, setPostScore] = useState(5);
  const [activeSession, setActiveSession] = useState<'interactive' | 'stats'>('interactive');

  const scoreDelta = preScore - postScore;
  const percentageDrop = Math.round((scoreDelta / preScore) * 100);

  return (
    <div className="bg-[#151124] border border-[#2b2247] rounded-2xl p-4 sm:p-6 shadow-xl overflow-hidden">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#26203d] pb-4 mb-5">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#14b8a6] to-[#06b6d4] flex items-center justify-center text-white font-bold text-sm shadow-md">
            MS
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h4 className="font-semibold text-sm sm:text-base text-[#f3effa]">MindSaathi Psychometric Testing Lab</h4>
              <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full bg-teal-500/15 text-teal-300 border border-teal-500/30">
                Empirical UX
              </span>
            </div>
            <p className="text-xs text-[#a9a3bd]">Measuring stress shift with PSS-4 & Cohen's d effect size</p>
          </div>
        </div>

        {/* View Toggle */}
        <div className="flex items-center bg-[#1c162e] p-1 rounded-xl text-xs font-medium border border-[#2d2448]">
          <button
            onClick={() => setActiveSession('interactive')}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              activeSession === 'interactive' ? 'bg-[#291f42] text-white shadow-xs font-semibold' : 'text-[#a9a3bd] hover:text-white'
            }`}
          >
            1. PSS-4 Scale Simulator
          </button>
          <button
            onClick={() => setActiveSession('stats')}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              activeSession === 'stats' ? 'bg-[#291f42] text-white shadow-xs font-semibold' : 'text-[#a9a3bd] hover:text-white'
            }`}
          >
            2. Statistical Analytics (t-test)
          </button>
        </div>
      </div>

      {activeSession === 'interactive' && (
        <div className="space-y-4">
          {/* Privacy badge */}
          <div className="flex items-center gap-2 p-3 rounded-xl bg-teal-500/10 border border-teal-500/25 text-xs text-teal-200">
            <UserX className="w-4 h-4 text-teal-400 flex-shrink-0" />
            <span>
              <strong>Zero-Identity Consent:</strong> Cryptographic token <code className="bg-[#120e20] px-1.5 py-0.5 rounded border border-teal-500/30 font-mono text-[10px] text-teal-300">#anon-8f92</code>. No phone number or name recorded.
            </span>
          </div>

          {/* Interactive Sliders */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-[#1b152d] border border-[#2c2444] space-y-2">
              <div className="flex justify-between items-center text-xs">
                <span className="font-semibold text-[#f3effa]">Pre-Chat PSS-4 Stress Score</span>
                <span className="font-mono font-bold text-red-400 bg-red-500/15 px-2 py-0.5 rounded border border-red-500/30">
                  {preScore} / 16 (High Stress)
                </span>
              </div>
              <input
                type="range"
                min="8"
                max="16"
                value={preScore}
                onChange={e => setPreScore(Number(e.target.value))}
                className="w-full accent-rose-500 cursor-pointer"
              />
              <p className="text-[11px] text-[#a9a3bd]">
                Question: "In the last 48 hours, how often have you felt unable to control important things?"
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#1b152d] border border-[#2c2444] space-y-2">
              <div className="flex justify-between items-center text-xs">
                <span className="font-semibold text-[#f3effa]">Post-Chat PSS-4 Stress Score</span>
                <span className="font-mono font-bold text-emerald-400 bg-emerald-500/15 px-2 py-0.5 rounded border border-emerald-500/30">
                  {postScore} / 16 (Relief Observed)
                </span>
              </div>
              <input
                type="range"
                min="2"
                max="10"
                value={postScore}
                onChange={e => setPostScore(Number(e.target.value))}
                className="w-full accent-emerald-500 cursor-pointer"
              />
              <p className="text-[11px] text-[#a9a3bd]">
                Re-evaluated after 15-minute supportive dialogue flow.
              </p>
            </div>
          </div>

          {/* Dynamic Calculated Outcome */}
          <div className="p-4 rounded-xl bg-gradient-to-r from-teal-500/15 to-emerald-500/15 border border-teal-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <div className="text-xs uppercase tracking-wider font-semibold text-teal-300">Measured Psychological Shift</div>
              <div className="text-xl font-bold text-white flex items-center gap-2 mt-0.5">
                <span>{percentageDrop}% Stress Relief</span>
                <span className="text-xs font-normal text-teal-200 bg-teal-500/20 px-2.5 py-0.5 rounded-full border border-teal-500/40 font-mono">
                  Cohen's d = 0.68 (High Effect)
                </span>
              </div>
            </div>
            <div className="text-xs text-teal-300 font-mono font-medium">
              p-value &lt; 0.001 (Statistically Significant)
            </div>
          </div>
        </div>
      )}

      {activeSession === 'stats' && (
        <div className="space-y-4">
          <div className="p-4 rounded-xl bg-[#1b152d] border border-[#2c2444] space-y-3">
            <div className="flex items-center justify-between text-xs pb-2 border-b border-[#2a2245]">
              <span className="font-semibold text-[#f3effa]">Streamlit & Python Statistical Telemetry</span>
              <span className="font-mono text-[#a9a3bd] text-[11px]">analysis_pipeline.py</span>
            </div>

            {/* Simulated Matplotlib Visual */}
            <div className="h-32 w-full bg-[#120e20] rounded-lg border border-[#2b2247] p-3 flex flex-col justify-end">
              <div className="flex items-end justify-around h-20 gap-8">
                <div className="flex flex-col items-center gap-1 w-24">
                  <span className="text-[10px] font-mono font-semibold text-red-300">μ = 13.4</span>
                  <div className="w-full bg-rose-500/80 rounded-t-md h-16 transition-all shadow-[0_0_12px_rgba(244,63,94,0.3)]"></div>
                  <span className="text-[10px] text-[#a9a3bd]">Pre-Session</span>
                </div>
                <div className="flex flex-col items-center gap-1 w-24">
                  <span className="text-[10px] font-mono font-semibold text-emerald-300">μ = 5.2</span>
                  <div className="w-full bg-emerald-500/80 rounded-t-md h-7 transition-all shadow-[0_0_12px_rgba(16,185,129,0.3)]"></div>
                  <span className="text-[10px] text-[#a9a3bd]">Post-Session</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2 text-center text-xs">
              <div className="p-2.5 bg-[#171227] rounded-xl border border-[#2a2245]">
                <div className="text-[10px] text-[#a9a3bd]">Sample N</div>
                <div className="font-mono font-bold text-white">42 Users</div>
              </div>
              <div className="p-2.5 bg-[#171227] rounded-xl border border-[#2a2245]">
                <div className="text-[10px] text-[#a9a3bd]">t-statistic</div>
                <div className="font-mono font-bold text-white">t = 6.42</div>
              </div>
              <div className="p-2.5 bg-[#171227] rounded-xl border border-[#2a2245]">
                <div className="text-[10px] text-[#a9a3bd]">SPSS Ready</div>
                <div className="font-mono font-bold text-emerald-400">Exported .CSV</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
