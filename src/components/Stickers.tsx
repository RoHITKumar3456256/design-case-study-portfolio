import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { STICKER_ITEMS } from '../data/portfolioData';
import { Sparkles, Music, Flower, Check } from 'lucide-react';

export const Stickers: React.FC = () => {
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);
  const [flowerBloomed, setFlowerBloomed] = useState(false);
  const [copiedNote, setCopiedNote] = useState<string | null>(null);

  const triggerFlowerConfetti = () => {
    setFlowerBloomed(true);
    confetti({
      particleCount: 60,
      spread: 80,
      origin: { y: 0.7 },
      colors: ['#ff5388', '#8b5cf6', '#06b6d4', '#fef08a']
    });
    setTimeout(() => setFlowerBloomed(false), 3000);
  };

  const handleChipClick = (text: string) => {
    setCopiedNote(text);
    setTimeout(() => setCopiedNote(null), 2000);
  };

  return (
    <div className="w-full my-8">
      {/* Interactive Helper Banner */}
      <div className="flex items-center justify-between gap-3 text-xs text-[#a9a3bd] mb-3 px-1">
        <div className="flex items-center gap-1.5 font-medium">
          <Sparkles className="w-3.5 h-3.5 text-[#ff5388] animate-spin" style={{ animationDuration: '4s' }} />
          <span>Interactive signals & engineering focus</span>
        </div>
        <span className="text-[11px] font-mono text-[#746d8c]">Hover & click elements</span>
      </div>

      {/* Floating Badge Cloud */}
      <div className="flex flex-wrap items-center gap-2.5">
        {STICKER_ITEMS.map((item, idx) => (
          <button
            key={idx}
            onClick={() => handleChipClick(item.text)}
            className="group relative inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#1a142c] border border-[#2f254e] text-[#dcd7ed] shadow-md hover:border-[#ff5388] hover:text-white hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
          >
            <span>{item.text}</span>
            {copiedNote === item.text && (
              <span className="absolute -top-7 left-1/2 -translate-x-1/2 bg-[#ff5388] text-white font-bold text-[10px] py-0.5 px-2.5 rounded-md shadow-lg whitespace-nowrap animate-fade-in flex items-center gap-1">
                <Check className="w-3 h-3 text-white" /> Focus Active
              </span>
            )}
          </button>
        ))}

        {/* Flower blooming easter egg */}
        <button
          onClick={triggerFlowerConfetti}
          className="group inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-rose-500/15 border border-rose-500/40 text-rose-300 shadow-md hover:bg-rose-500/25 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
          title="Click for a celebratory bloom!"
        >
          <Flower className={`w-3.5 h-3.5 ${flowerBloomed ? 'animate-bounce text-rose-400' : 'text-rose-400'}`} />
          <span>{flowerBloomed ? '🌸 Bloomed for you!' : '🌸 A flower for you ;)'}</span>
        </button>

        {/* Lo-Fi Music Widget */}
        <button
          onClick={() => setIsPlayingMusic(!isPlayingMusic)}
          className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium border transition-all duration-200 cursor-pointer ${
            isPlayingMusic
              ? 'bg-emerald-500/15 border-emerald-500/40 text-emerald-300 shadow-md'
              : 'bg-[#1a142c] border-[#2f254e] text-[#a9a3bd] hover:text-white hover:border-[#8b5cf6]'
          }`}
        >
          <Music className={`w-3.5 h-3.5 ${isPlayingMusic ? 'animate-spin text-emerald-400' : 'text-[#746d8c]'}`} style={{ animationDuration: '3s' }} />
          <span>{isPlayingMusic ? '🎧 Coding Lo-Fi (Active)' : '🎧 Design Playlist'}</span>
          {isPlayingMusic && (
            <span className="flex gap-0.5 items-end h-3">
              <span className="w-0.5 h-2 bg-emerald-400 animate-pulse"></span>
              <span className="w-0.5 h-3 bg-emerald-400 animate-pulse" style={{ animationDelay: '0.2s' }}></span>
              <span className="w-0.5 h-1.5 bg-emerald-300 animate-pulse" style={{ animationDelay: '0.4s' }}></span>
            </span>
          )}
        </button>
      </div>
    </div>
  );
};
