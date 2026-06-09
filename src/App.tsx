import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Journey from './components/Journey';
import AboutAndSkills from './components/AboutAndSkills';
import Projects from './components/Projects';
import Expertise from './components/Expertise';
import RecruiterModule from './components/RecruiterModule';
import Contact from './components/Contact';
import GlowBackground from './components/GlowBackground';

export default function App() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 85; // navbar offset compensation
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative min-h-screen selection:bg-amber-400 selection:text-slate-950">
      {/* Dynamic particles & orbs background */}
      <GlowBackground />

      {/* Main Glass Header Navigation */}
      <Header onScrollToSection={scrollToSection} />

      {/* Main Scrollable Modules */}
      <main className="relative z-10">
        <Hero onScrollToSection={scrollToSection} />
        <Journey />
        <AboutAndSkills />
        <Projects />
        <Expertise />
        <RecruiterModule />
        <Contact />
      </main>

      {/* Minimal Footer */}
      <footer className="relative z-10 border-t border-slate-900 bg-slate-950/80 py-10 px-4 md:px-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-slate-500 font-mono">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded bg-amber-400 text-slate-950 font-bold flex items-center justify-center font-mono">
              M
            </div>
            <span>MOHAN KUMAR | Power BI Developer</span>
          </div>

          <div className="flex gap-4 flex-wrap justify-center">
            <span className="text-[10px]">T-SQL ENGINEER</span>
            <span className="text-slate-700">|</span>
            <span className="text-[10px]">DAX MODELER</span>
            <span className="text-slate-700">|</span>
            <span className="text-[10px]">PL-300 COMPLETE</span>
          </div>

          <p className="text-slate-600 text-center md:text-right">
            Designed for recruiter visibility. Build: Production_Ready_v5.3
          </p>
        </div>
      </footer>
    </div>
  );
}

