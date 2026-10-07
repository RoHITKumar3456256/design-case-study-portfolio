import React, { useState, useEffect } from 'react';
import { Activity, PhoneCall, Users, Zap, TrendingUp, AlertCircle } from 'lucide-react';

export const SmartDialerDemo: React.FC = () => {
  const [dialMultiplier, setDialMultiplier] = useState(1.6);
  const [activeCalls, setActiveCalls] = useState(24);
  const [ewmaRate, setEwmaRate] = useState(38); // percent
  const [abandonRate, setAbandonRate] = useState(1.8); // percent
  const [isConnected, setIsConnected] = useState(true);

  // Live WebSocket simulation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCalls(prev => {
        const delta = Math.floor(Math.random() * 5) - 2;
        return Math.min(Math.max(prev + delta, 18), 35);
      });
      setEwmaRate(prev => {
        const delta = (Math.random() * 2 - 1).toFixed(1);
        return Math.min(Math.max(Number((prev + Number(delta)).toFixed(1)), 32), 44);
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const handleMultiplierChange = (val: number) => {
    setDialMultiplier(val);
    if (val > 2.2) {
      setAbandonRate(3.4);
    } else if (val < 1.4) {
      setAbandonRate(0.8);
    } else {
      setAbandonRate(1.8);
    }
  };

  return (
    <div className="bg-[#121316] text-white border border-neutral-800 rounded-2xl p-4 sm:p-6 shadow-md overflow-hidden font-sans">
      {/* Top Console Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-neutral-800/80 pb-4 mb-5">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold text-sm shadow-sm">
            SD
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h4 className="font-semibold text-sm sm:text-base text-neutral-100">SmartDialer Supervisor Telemetry</h4>
              <span className="flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-950/80 text-emerald-400 border border-emerald-800">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                WS Connected (12ms)
              </span>
            </div>
            <p className="text-xs text-neutral-400">High-frequency real-time pacing console & EWMA forecast</p>
          </div>
        </div>

        {/* Live Pacing Multiplier Widget */}
        <div className="flex items-center gap-2 bg-neutral-900 border border-neutral-800 px-3 py-1.5 rounded-xl text-xs">
          <span className="text-neutral-400 text-[11px]">Dial Pacing:</span>
          <span className="font-mono font-bold text-blue-400">{dialMultiplier}x</span>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5">
        <div className="p-3 rounded-xl bg-neutral-900/80 border border-neutral-800/60">
          <div className="text-[11px] text-neutral-400 flex items-center gap-1">
            <PhoneCall className="w-3.5 h-3.5 text-blue-400" /> Active Calls
          </div>
          <div className="text-lg font-mono font-bold text-white mt-1">{activeCalls}</div>
          <div className="text-[10px] text-neutral-500 font-mono">Stream updates / 2s</div>
        </div>

        <div className="p-3 rounded-xl bg-neutral-900/80 border border-neutral-800/60">
          <div className="text-[11px] text-neutral-400 flex items-center gap-1">
            <TrendingUp className="w-3.5 h-3.5 text-emerald-400" /> EWMA Answer Rate
          </div>
          <div className="text-lg font-mono font-bold text-emerald-400 mt-1">{ewmaRate}%</div>
          <div className="text-[10px] text-neutral-500 font-mono">Adaptive forecast</div>
        </div>

        <div className="p-3 rounded-xl bg-neutral-900/80 border border-neutral-800/60">
          <div className="text-[11px] text-neutral-400 flex items-center gap-1">
            <Users className="w-3.5 h-3.5 text-purple-400" /> Agents On Floor
          </div>
          <div className="text-lg font-mono font-bold text-white mt-1">16 / 18</div>
          <div className="text-[10px] text-neutral-500 font-mono">88.8% Occupancy</div>
        </div>

        <div className={`p-3 rounded-xl border ${abandonRate > 3 ? 'bg-red-950/40 border-red-800/80 text-red-200' : 'bg-neutral-900/80 border-neutral-800/60 text-neutral-400'}`}>
          <div className="text-[11px] flex items-center gap-1">
            <AlertCircle className={`w-3.5 h-3.5 ${abandonRate > 3 ? 'text-red-400' : 'text-neutral-400'}`} /> Abandon Rate
          </div>
          <div className={`text-lg font-mono font-bold mt-1 ${abandonRate > 3 ? 'text-red-400' : 'text-white'}`}>{abandonRate}%</div>
          <div className="text-[10px] text-neutral-500 font-mono">&lt; 3.0% SLA Target</div>
        </div>
      </div>

      {/* Interactive Supervisor Controls */}
      <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800 space-y-3">
        <div className="flex justify-between items-center text-xs">
          <span className="font-medium text-neutral-200 flex items-center gap-1.5">
            <Zap className="w-3.5 h-3.5 text-amber-400" />
            Adjust Algorithmic Pacing Multiplier
          </span>
          <span className="font-mono text-neutral-400 text-[11px]">
            {dialMultiplier < 1.5 ? 'Conservative' : dialMultiplier > 2.0 ? 'Aggressive' : 'Balanced (Optimal)'}
          </span>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-[11px] font-mono text-neutral-500">1.0x</span>
          <input
            type="range"
            min="1.0"
            max="2.6"
            step="0.1"
            value={dialMultiplier}
            onChange={e => handleMultiplierChange(Number(e.target.value))}
            className="w-full accent-blue-500 cursor-pointer"
          />
          <span className="text-[11px] font-mono text-neutral-500">2.6x</span>
        </div>

        <p className="text-[11px] text-neutral-400">
          The EWMA filter weights recent 60-second connection velocities to predict upcoming answer probabilities, preventing call starvation without exceeding abandonment limits.
        </p>
      </div>

      {/* Live Agent Floor Mini-Matrix */}
      <div className="mt-4 pt-3 border-t border-neutral-800/80 flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2">
          <span className="text-neutral-400 text-[11px]">Floor Status:</span>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span className="text-neutral-300 text-[11px]">12 Talking</span>
            <span className="w-2 h-2 rounded-full bg-amber-400 ml-2"></span>
            <span className="text-neutral-300 text-[11px]">4 Waiting</span>
            <span className="w-2 h-2 rounded-full bg-blue-400 ml-2"></span>
            <span className="text-neutral-300 text-[11px]">2 Wrap-Up</span>
          </div>
        </div>
        <div className="text-[11px] text-neutral-500 font-mono">
          FastAPI Backend + React WebSocket Client
        </div>
      </div>
    </div>
  );
};
