import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Logo } from './Logo';
import { FileText, Mail, Menu, X, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full glass-nav-dark transition-all">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-18 flex items-center justify-between">
        {/* Brand / Logo */}
        <a href="#home" className="flex items-center gap-3.5 group">
          <Logo size="md" />
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-base text-[#f3effa] tracking-tight block group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#ff5388] group-hover:to-[#8b5cf6] transition-all">
                {PERSONAL_INFO.name}
              </span>
              <span className="text-[10px] font-mono text-[#ff5388] bg-[#ff5388]/10 border border-[#ff5388]/30 px-2 py-0.5 rounded-full font-bold">
                PRO
              </span>
            </div>
            <span className="text-[11px] text-[#a9a3bd] font-medium block flex items-center gap-1.5 mt-0.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Open to Work (Delhi / Remote)
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 text-xs font-semibold text-[#a9a3bd]">
          <a href="#home" className="hover:text-white transition hover:scale-105">
            Home
          </a>
          <a href="#projects" className="hover:text-white transition hover:scale-105">
            Projects
          </a>
          <a href="#process" className="hover:text-white transition hover:scale-105">
            Process
          </a>
          <a href="#experience" className="hover:text-white transition hover:scale-105">
            Experience
          </a>
          <a href="#about" className="hover:text-white transition hover:scale-105">
            Skills
          </a>
          <a href="#contact" className="hover:text-white transition hover:scale-105">
            Contact
          </a>
        </nav>

        {/* Action Buttons & Top Quick Social Badges */}
        <div className="hidden sm:flex items-center gap-2.5">
          {/* Quick Social Badges */}
          <a
            href={PERSONAL_INFO.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-xl bg-[#1b172a] border border-[#2c2740] hover:border-[#ff5388] text-xs font-extrabold text-[#a9a3bd] hover:text-[#ff5388] flex items-center justify-center transition shadow-xs"
            title="LinkedIn"
          >
            in
          </a>
          <a
            href={PERSONAL_INFO.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-xl bg-[#1b172a] border border-[#2c2740] hover:border-[#ff5388] text-xs font-extrabold text-[#a9a3bd] hover:text-white flex items-center justify-center transition shadow-xs"
            title="GitHub"
          >
            GH
          </a>

          <button
            onClick={onOpenResume}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#1b172a] border border-[#2c2740] hover:border-[#8b5cf6] text-xs font-semibold text-[#f3effa] transition cursor-pointer shadow-xs ml-1 hover:bg-[#251f3b]"
          >
            <FileText className="w-3.5 h-3.5 text-[#ff5388]" /> Resume
          </button>
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-[#ff5388] to-[#8b5cf6] hover:from-[#ff6b9a] hover:to-[#9a70ff] text-xs font-bold text-white transition shadow-md shadow-pink-500/20 cursor-pointer"
          >
            <Mail className="w-3.5 h-3.5" /> Email
          </a>
        </div>

        {/* Mobile menu hamburger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#a9a3bd] hover:text-white"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#130f22] border-b border-[#2c2740] px-6 py-5 space-y-3.5 text-sm font-semibold text-[#f3effa] animate-fade-in">
          <a href="#home" onClick={() => setMobileMenuOpen(false)} className="block py-1 hover:text-[#ff5388]">
            Home
          </a>
          <a href="#projects" onClick={() => setMobileMenuOpen(false)} className="block py-1 hover:text-[#ff5388]">
            Projects
          </a>
          <a href="#process" onClick={() => setMobileMenuOpen(false)} className="block py-1 hover:text-[#ff5388]">
            Process
          </a>
          <a href="#experience" onClick={() => setMobileMenuOpen(false)} className="block py-1 hover:text-[#ff5388]">
            Experience
          </a>
          <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block py-1 hover:text-[#ff5388]">
            Skills
          </a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block py-1 hover:text-[#ff5388]">
            Contact
          </a>
          <div className="pt-3 border-t border-[#26213d] flex gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="flex-1 py-2.5 text-center rounded-xl bg-[#1b172a] border border-[#2c2740] text-xs font-semibold text-white"
            >
              Resume
            </button>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="flex-1 py-2.5 text-center rounded-xl bg-gradient-to-r from-[#ff5388] to-[#8b5cf6] text-xs font-bold text-white shadow-xs"
            >
              Email me
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
