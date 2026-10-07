import React, { useState } from 'react';
import { PROCESS_STEPS } from '../data/portfolioData';
import { ArrowRight, Lightbulb, Compass, Code, Eye, RefreshCw } from 'lucide-react';
import { TiltCard } from './TiltCard';

export const ProcessSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState(1);
  const currentStep = PROCESS_STEPS.find(s => s.step === activeStep) || PROCESS_STEPS[0];

  const getStepIcon = (step: number) => {
    switch (step) {
      case 1: return <Lightbulb className="w-5 h-5 text-amber-400" />;
      case 2: return <Compass className="w-5 h-5 text-purple-400" />;
      case 3: return <Code className="w-5 h-5 text-blue-400" />;
      case 4: return <Eye className="w-5 h-5 text-emerald-400" />;
      case 5: return <RefreshCw className="w-5 h-5 text-rose-400" />;
      default: return null;
    }
  };

  return (
    <section id="process" className="py-20 border-t border-[#26213d] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#ff5388]">The Design Methodology</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#f3effa] tracking-tight mt-2">
            How I work
          </h2>
          <p className="mt-3 text-base text-[#a9a3bd] leading-relaxed">
            The same five steps on every project. I do the research, systems architecture, and testing myself.
          </p>
        </div>

        {/* 5-Step Interactive Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3.5 mb-8">
          {PROCESS_STEPS.map((step) => {
            const isSelected = activeStep === step.step;
            return (
              <button
                key={step.step}
                onClick={() => setActiveStep(step.step)}
                className={`text-left p-5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#221a3a] text-white border-[#ff5388] shadow-lg shadow-pink-500/15 -translate-y-1'
                    : 'bg-[#151124] text-[#d8d2ea] border-[#27213c] hover:border-[#3d335c]'
                }`}
              >
                <div>
                  <div className={`text-xs font-mono font-bold mb-3 ${isSelected ? 'text-[#ff5388]' : 'text-[#746d8c]'}`}>
                    0{step.step}.
                  </div>
                  <h3 className={`font-bold text-sm tracking-tight ${isSelected ? 'text-white' : 'text-[#f3effa]'}`}>
                    {step.title}
                  </h3>
                  <p className={`text-[11px] mt-1.5 leading-snug line-clamp-3 ${isSelected ? 'text-[#e2ddf0]' : 'text-[#a9a3bd]'}`}>
                    {step.subtitle}
                  </p>
                </div>

                <div className={`mt-4 pt-3 border-t text-[10px] font-medium flex items-center justify-between ${
                  isSelected ? 'border-[#3a2d5e] text-[#ff5388]' : 'border-[#26203d] text-[#746d8c]'
                }`}>
                  <span>Inspect phase</span>
                  <ArrowRight className="w-3 h-3" />
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Step Deep Dive Card */}
        <TiltCard maxTilt={2} className="tactile-card-dark rounded-3xl p-6 sm:p-10 shadow-2xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#26203d]">
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-2xl bg-[#1f1933] border border-[#342954] flex items-center justify-center font-bold">
                {getStepIcon(currentStep.step)}
              </div>
              <div>
                <span className="text-xs font-mono text-[#ff5388] font-bold uppercase tracking-wider">Phase 0{currentStep.step}</span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#f3effa]">{currentStep.title}</h3>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs text-[#a9a3bd]">Core Deliverable:</span>
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#201936] text-[#e2ddf0] border border-[#352956]">
                {currentStep.deliverable}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
            <div className="space-y-4">
              <h4 className="text-xs font-bold text-[#a9a3bd] uppercase tracking-wider">Mindset & Execution</h4>
              <p className="text-sm text-[#d8d2ea] leading-relaxed">
                {currentStep.description}
              </p>
              <div className="p-4 rounded-xl bg-[#1b152d] border border-[#2c2444] text-xs text-[#c8c2db]">
                <span className="font-semibold text-[#ff5388] block mb-1">Guiding Principle:</span>
                "If it cannot be explained clearly in 2 sentences or demonstrated in live interaction, the concept is too bloated to ship."
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-xs font-bold text-[#a9a3bd] uppercase tracking-wider">Tactical Action Items</h4>
              <ul className="space-y-2.5 text-xs text-[#d8d2ea]">
                {currentStep.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 flex items-center justify-center text-[10px] font-bold flex-shrink-0 mt-0.5">
                      ✓
                    </span>
                    <span className="leading-relaxed">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </TiltCard>
      </div>
    </section>
  );
};
