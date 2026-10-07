import React, { useState, useEffect } from 'react';
import { Home, Cpu, Briefcase, Mail, Layers, Compass } from 'lucide-react';

export const SideNav: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'projects', 'process', 'experience', 'about', 'contact'];
      const scrollPos = window.scrollY + 250;

      for (const sec of sections) {
        const el = document.getElementById(sec);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sec);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const items = [
    { id: 'home', label: 'Home', icon: <Home className="w-4 h-4" /> },
    { id: 'projects', label: 'Projects', icon: <Layers className="w-4 h-4" /> },
    { id: 'process', label: 'Process', icon: <Compass className="w-4 h-4" /> },
    { id: 'experience', label: 'Experience', icon: <Briefcase className="w-4 h-4" /> },
    { id: 'about', label: 'Skills', icon: <Cpu className="w-4 h-4" /> },
    { id: 'contact', label: 'Contact', icon: <Mail className="w-4 h-4" /> },
  ];

  return (
    <nav className="fixed left-5 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col gap-2 pointer-events-auto">
      {items.map((item) => {
        const isActive = activeSection === item.id;
        return (
          <a
            key={item.id}
            href={`#${item.id}`}
            aria-label={item.label}
            className={`group flex items-center gap-2 p-2.5 rounded-full border transition-all duration-200 backdrop-blur-md shadow-lg ${
              isActive
                ? 'bg-gradient-to-r from-[#ff5388] to-[#8b5cf6] text-white border-transparent pl-3.5 pr-4 shadow-pink-500/25'
                : 'bg-[#151026]/90 text-[#a9a3bd] border-[#2c2447] hover:text-white hover:bg-[#201938] hover:border-[#ff5388]/40'
            }`}
          >
            <span className={isActive ? 'text-white' : ''}>{item.icon}</span>
            <span
              className={`text-xs font-semibold whitespace-nowrap transition-all duration-200 ${
                isActive ? 'inline-block' : 'hidden group-hover:inline-block'
              }`}
            >
              {item.label}
            </span>
          </a>
        );
      })}
    </nav>
  );
};
