import React, { useState, useEffect } from 'react';
import { Database, FileText, ArrowUpRight, Menu, X } from 'lucide-react';

interface HeaderProps {
  onScrollToSection: (id: string) => void;
}

export default function Header({ onScrollToSection }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Section tracking for active tab highlights
      const sections = ['hero', 'journey', 'skills', 'projects', 'certifications', 'recruiter', 'contact'];
      let currentSection = 'hero';
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Adjust threshold depending on nav height
          if (rect.top <= 120 && rect.bottom >= 120) {
            currentSection = section;
            break;
          }
        }
      }
      setActiveTab(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', id: 'hero' },
    { label: 'Journey', id: 'journey' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Credentials', id: 'certifications' },
    { label: 'Recruiter Fit', id: 'recruiter' },
    { label: 'Contact', id: 'contact' }
  ];

  const handleNavClick = (id: string) => {
    onScrollToSection(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-55 transition-all duration-300 ${
      scrolled 
        ? 'py-4 bg-[#080b11]/85 backdrop-blur-md border-b border-slate-900/80 shadow-[0_4px_30px_rgba(0,0,0,0.4)]' 
        : 'py-6 bg-transparent border-b border-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-4 md:px-8 flex items-center justify-between">
        
        {/* Brand identity symbol */}
        <button 
          onClick={() => handleNavClick('hero')}
          className="flex items-center gap-2.5 group cursor-pointer text-left"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-amber-400 to-amber-500 flex items-center justify-center text-slate-950 font-bold font-mono text-sm shadow-[0_0_15px_rgba(242,200,17,0.2)] group-hover:scale-105 transition-transform">
            M
          </div>
          <div>
            <span className="font-extrabold text-sm text-white tracking-wider block font-sans">MOHAN KUMAR</span>
            <span className="text-[9px] font-mono text-amber-500 font-bold block leading-none">POWER BI ARCHITECT</span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1.5 bg-slate-900/40 p-1 border border-slate-900 rounded-xl">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wide transition-all duration-200 cursor-pointer ${
                activeTab === item.id 
                  ? 'bg-amber-400 text-slate-950 font-bold' 
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Action Button: Simulated Resume Download */}
        <div className="hidden lg:block">
          <a
            href="mailto:mohan.pbi123@gmail.com?subject=Inquiry regarding Power BI Developer (Mohan Kumar)"
            className="px-4 py-2 rounded-xl bg-slate-950 border border-slate-800 hover:border-amber-400/50 text-xs font-bold text-slate-300 hover:text-white transition-all duration-300 flex items-center gap-1.5"
          >
            <FileText className="w-3.5 h-3.5 text-amber-500" />
            <span>Request Resume</span>
            <ArrowUpRight className="w-3 h-3 text-slate-500" />
          </a>
        </div>

        {/* Mobile menu trigger */}
        <div className="lg:hidden flex items-center gap-3">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 bg-slate-900 border border-slate-800 rounded-xl text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-[#080b11] border-b border-slate-900 shadow-2xl p-6 flex flex-col gap-4 animate-fadeIn">
          <div className="flex flex-col gap-2">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full py-3 px-4 rounded-xl text-left text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  activeTab === item.id
                    ? 'bg-amber-400 text-slate-950 font-extrabold'
                    : 'bg-slate-900/40 border border-slate-900 text-slate-400'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <a
            href="mailto:mohan.pbi123@gmail.com?subject=Inquiry regarding Power BI Developer (Mohan Kumar)"
            className="w-full py-3.5 rounded-xl bg-slate-950 border border-slate-800 text-center text-xs font-bold text-slate-300 flex items-center justify-center gap-2"
          >
            <FileText className="w-4 h-4 text-amber-500" />
            <span>Request Resume (via Email)</span>
          </a>
        </div>
      )}

    </header>
  );
}
