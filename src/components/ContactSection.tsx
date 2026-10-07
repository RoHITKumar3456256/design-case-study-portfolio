import React, { useState } from 'react';
import { Copy, Check, Send, ExternalLink, MapPin, Mail, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import confetti from 'canvas-confetti';
import { TiltCard } from './TiltCard';

const GithubIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const LinkedinIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.53 1.53 0 1 0 0-3.05 1.53 1.53 0 0 0 0 3.05m1.39 9.74v-8.37H5.07v8.37h2.78z" />
  </svg>
);

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;
    setSent(true);
    confetti({
      particleCount: 80,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#ff5388', '#8b5cf6', '#06b6d4', '#fef08a']
    });
    setTimeout(() => {
      setName('');
      setEmail('');
      setMessage('');
      setSent(false);
    }, 4000);
  };

  return (
    <section id="contact" className="py-24 border-t border-[#26213d] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#ff5388]">Get in touch</span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-[#f3effa] tracking-tight mt-2">
                Let's talk
              </h2>
              <p className="mt-4 text-base sm:text-lg text-[#a9a3bd] leading-relaxed">
                Open to AI Engineer, SDE, Data, and Product Design roles. Happy to walk through any system architecture or take a design assignment.
              </p>
            </div>

            {/* Email Action Card */}
            <div className="p-5 rounded-2xl bg-[#151124] border border-[#27213c] tactile-card-dark space-y-3">
              <span className="text-xs text-[#a9a3bd] font-medium block">Direct Email</span>
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 bg-[#1c162e] p-3 rounded-xl border border-[#2e254b]">
                <span className="font-mono text-xs sm:text-sm font-semibold text-[#f3effa] select-all truncate">
                  {PERSONAL_INFO.email}
                </span>
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#271f3f] border border-[#3c2f5f] hover:border-[#ff5388] text-xs font-semibold text-[#f3effa] transition cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" /> Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-[#a9a3bd]" /> Copy Email
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center gap-2 text-xs text-[#8a829e] pt-1">
                <MapPin className="w-3.5 h-3.5 text-[#ff5388]" />
                <span>{PERSONAL_INFO.location}</span>
                <span className="text-[#433b5c]">•</span>
                <span className="text-emerald-400 font-medium">IST (UTC+5:30)</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={PERSONAL_INFO.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-[#2c2444] hover:border-[#ff5388] text-xs font-semibold text-[#d8d2ea] hover:text-white transition bg-[#161224]"
              >
                <LinkedinIcon className="w-4 h-4 text-blue-400" /> LinkedIn
              </a>
              <a
                href={PERSONAL_INFO.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-[#2c2444] hover:border-[#ff5388] text-xs font-semibold text-[#d8d2ea] hover:text-white transition bg-[#161224]"
              >
                <GithubIcon className="w-4 h-4 text-white" /> GitHub
              </a>
              <a
                href={PERSONAL_INFO.socials.careerhq}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-[#2c2444] hover:border-[#ff5388] text-xs font-semibold text-[#d8d2ea] hover:text-white transition bg-[#161224]"
              >
                <ExternalLink className="w-4 h-4 text-[#ff5388]" /> CareerHQ
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Quick Note */}
          <TiltCard maxTilt={3} className="lg:col-span-6 tactile-card-dark rounded-3xl p-6 sm:p-8 shadow-2xl">
            <h3 className="font-bold text-lg text-[#f3effa] mb-1">Send a quick note</h3>
            <p className="text-xs text-[#a9a3bd] mb-5">Leave a message and I'll reply within 24 hours.</p>

            {sent ? (
              <div className="p-8 text-center space-y-3 bg-emerald-500/10 rounded-2xl border border-emerald-500/30 animate-fade-in">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-base text-white">Message Sent!</h4>
                <p className="text-xs text-emerald-200 leading-relaxed max-w-sm mx-auto">
                  Thank you! Rohit has received your note and will get back to you shortly at {email}.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-[#a9a3bd] mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Hiring Manager / Recruiter"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#1b152d] border border-[#2e254b] focus:border-[#ff5388] focus:outline-none text-xs text-white placeholder:text-[#6a6182] transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#a9a3bd] mb-1">Your Email</label>
                  <input
                    type="email"
                    required
                    placeholder="sarah@company.com"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#1b152d] border border-[#2e254b] focus:border-[#ff5388] focus:outline-none text-xs text-white placeholder:text-[#6a6182] transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#a9a3bd] mb-1">Message / Opportunity</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Hey Rohit, we loved your projects and would love to chat regarding an AI / SDE role..."
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#1b152d] border border-[#2e254b] focus:border-[#ff5388] focus:outline-none text-xs text-white placeholder:text-[#6a6182] transition resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-[#ff5388] to-[#8b5cf6] hover:from-[#ff6b9a] hover:to-[#9a70ff] text-white text-xs font-bold transition shadow-lg shadow-pink-500/25 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" /> Send Message
                </button>
              </form>
            )}
          </TiltCard>
        </div>
      </div>
    </section>
  );
};
