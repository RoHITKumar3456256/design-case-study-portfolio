import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { SideNav } from './components/SideNav';
import { Hero } from './components/Hero';
import { SkillsMarquee } from './components/SkillsMarquee';
import { CaseStudyCard } from './components/CaseStudyCard';
import { CaseStudyModal } from './components/CaseStudyModal';
import { ProcessSection } from './components/ProcessSection';
import { JourneySection } from './components/JourneySection';
import { AboutSection } from './components/AboutSection';
import { AppreciationsSection } from './components/AppreciationsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { PROJECTS } from './data/portfolioData';
import { Project } from './types';

export function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isCaseStudyModalOpen, setIsCaseStudyModalOpen] = useState(false);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [selectedTag, setSelectedTag] = useState<string>('All');

  const tags = [
    'All',
    'AI / EdTech SaaS',
    'Decision AI & Infrastructure',
    'Agentic AI & LangGraph',
    'HealthTech & Research UX',
    'B2B SaaS & Real-Time Telemetry',
  ];

  const filteredProjects =
    selectedTag === 'All' ? PROJECTS : PROJECTS.filter((p) => p.tag === selectedTag);

  const handleOpenCaseStudy = (project: Project) => {
    setSelectedProject(project);
    setIsCaseStudyModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#0d0b16] text-[#f3effa] flex flex-col font-sans selection:bg-[#ff5388]/30 selection:text-[#ff80a6]">
      {/* Background subtle cosmic grid texture */}
      <div className="fixed inset-0 pointer-events-none bg-subtle-grid-dark opacity-60 z-0"></div>

      {/* Floating Side Dock for fast navigation */}
      <SideNav />

      {/* Main Container */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar onOpenResume={() => setIsResumeModalOpen(true)} />

        <main id="home" className="flex-1">
          <Hero onOpenResume={() => setIsResumeModalOpen(true)} />

          {/* INFINITE SKILLS SLIDER (MARQUEE) */}
          <SkillsMarquee />

          {/* Case Studies & Projects Section */}
          <section id="projects" className="py-20 border-t border-[#26213d] relative">
            <div className="max-w-5xl mx-auto px-4 sm:px-6">
              {/* Section Header */}
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                <div className="max-w-2xl">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#ff5388]">
                    Selected Work
                  </span>
                  <h2 className="text-3xl sm:text-5xl font-extrabold text-[#f3effa] tracking-tight mt-2">
                    Projects & Case Studies
                  </h2>
                  <p className="mt-3 text-base sm:text-lg text-[#a9a3bd] leading-relaxed">
                    Built and shipped by me. Hover a card to tilt in 3D perspective.
                  </p>
                </div>

                {/* Filter Pills with neon gradient active state */}
                <div className="flex flex-wrap items-center gap-2">
                  {tags.map((tag) => (
                    <button
                      key={tag}
                      onClick={() => setSelectedTag(tag)}
                      className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                        selectedTag === tag
                          ? 'bg-gradient-to-r from-[#ff5388] to-[#8b5cf6] text-white shadow-md shadow-pink-500/20'
                          : 'bg-[#181329] border border-[#2c2447] text-[#a9a3bd] hover:text-white hover:border-[#42366b]'
                      }`}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>

              {/* Projects List */}
              <div className="space-y-12">
                {filteredProjects.map((project) => (
                  <CaseStudyCard
                    key={project.id}
                    project={project}
                    onOpenModal={handleOpenCaseStudy}
                  />
                ))}
              </div>
            </div>
          </section>

          {/* Process Section (5 Steps) */}
          <ProcessSection />

          {/* Experience / Journey Section */}
          <JourneySection />

          {/* Skills / About Section */}
          <AboutSection />

          {/* Appreciations & Signals */}
          <AppreciationsSection />

          {/* Contact Section */}
          <ContactSection />
        </main>

        <Footer />
      </div>

      {/* Deep-Dive Case Study Modal */}
      <CaseStudyModal
        project={selectedProject}
        isOpen={isCaseStudyModalOpen}
        onClose={() => setIsCaseStudyModalOpen(false)}
      />

      {/* Interactive Resume View Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </div>
  );
}

export default App;
