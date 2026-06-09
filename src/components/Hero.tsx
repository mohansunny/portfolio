import React from 'react';
import { motion } from 'motion/react';
import { Award, Layers, Sparkles, TrendingUp, Cpu, FileText, ArrowDown, Mail } from 'lucide-react';

interface HeroProps {
  onScrollToSection: (id: string) => void;
}

export default function Hero({ onScrollToSection }: HeroProps) {
  // Stats definitions
  const stats = [
    {
      label: 'Professional Experience',
      value: '5.3+',
      unit: 'Years',
      icon: <TrendingUp className="w-5 h-5 text-amber-400" />,
      color: 'border-amber-400/20 hover:border-amber-400/40'
    },
    {
      label: 'Enterprise Projects',
      value: '4',
      unit: 'Commercial',
      icon: <Layers className="w-5 h-5 text-blue-400" />,
      color: 'border-blue-400/20 hover:border-blue-400/40'
    },
    {
      label: 'PL-300 Certified',
      value: 'Microsoft',
      unit: 'Power BI Analyst',
      icon: <Award className="w-5 h-5 text-emerald-400" />,
      color: 'border-emerald-400/20 hover:border-emerald-400/40'
    },
    {
      label: 'Ecosystem Specialist',
      value: 'Microsoft',
      unit: 'Power BI & Azure',
      icon: <Cpu className="w-5 h-5 text-indigo-400" />,
      color: 'border-indigo-400/20 hover:border-indigo-400/40'
    }
  ];

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center items-center px-4 pt-28 pb-16 overflow-hidden md:px-8">
      {/* Visual background guide element matching power BI yellow theme */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-72 h-72 bg-amber-400/5 rounded-full filter blur-[120px] pointer-events-none"></div>

      <div className="max-w-6xl w-full z-10 flex flex-col items-center text-center">
        {/* Upper Micro-Badge */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 text-xs text-amber-400 font-mono mb-6"
        >
          <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
          <span>MICROSOFT ECOSYSTEM COMPANION</span>
        </motion.div>

        {/* Large Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl md:text-8xl font-extrabold tracking-tight bg-gradient-to-b from-white via-slate-100 to-slate-400 bg-clip-text text-transparent"
        >
          MOHAN KUMAR
        </motion.h1>

        {/* Subtitle */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-6 text-lg md:text-2xl font-medium tracking-wide text-amber-400 max-w-3xl"
        >
          Power BI Developer <span className="text-slate-600">|</span> Data Storyteller <span className="text-slate-600">|</span> Business Intelligence Professional
        </motion.h2>

        {/* Tagline */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-5 text-slate-400 text-sm md:text-base max-w-2xl font-sans leading-relaxed"
        >
          Transforming complex data into actionable business insights through Power BI, SQL, DAX, and modern analytics solutions. Delivering critical reports for large-scale energy & UK insurance portfolios.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-10 flex flex-wrap justify-center gap-4 w-full"
        >
          {/* View Journey CTA */}
          <button 
            onClick={() => onScrollToSection('journey')}
            className="px-6 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-semibold shadow-[0_4px_20px_rgba(242,200,17,0.3)] hover:shadow-[0_4px_30px_rgba(242,200,17,0.5)] transition-all durations-300 cursor-pointer flex items-center gap-2 text-sm"
          >
            <span>View Journey</span>
            <ArrowDown className="w-4 h-4" />
          </button>

          {/* Download Resume / Resume Modal CTA */}
          <button 
            onClick={() => onScrollToSection('certifications')}
            className="px-6 py-3.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-amber-400/50 text-slate-300 hover:text-white transition-all duration-300 cursor-pointer flex items-center gap-2 text-sm"
          >
            <FileText className="w-4 h-4 text-amber-400" />
            <span>Verify PL-300</span>
          </button>

          {/* Contact Me CTA */}
          <button 
            onClick={() => onScrollToSection('contact')}
            className="px-6 py-3.5 rounded-xl bg-slate-950 border border-slate-800/80 hover:bg-slate-900/80 text-slate-450 hover:text-white transition-all duration-300 cursor-pointer flex items-center gap-2 text-sm"
          >
            <Mail className="w-4 h-4 text-blue-400" />
            <span>Contact Me</span>
          </button>
        </motion.div>

        {/* Animated Statistics */}
        <div className="mt-20 w-full max-w-5xl">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.15, duration: 0.8 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 text-left"
          >
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 }
                }}
                whileHover={{ y: -6, scale: 1.02, transition: { duration: 0.2 } }}
                className={`p-6 rounded-2xl glass-panel relative group transition-all duration-300 overflow-hidden ${stat.color}`}
              >
                {/* Micro Ambient Line Accent */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-amber-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 rounded-lg bg-slate-950 border border-slate-800/80">
                    {stat.icon}
                  </div>
                  <span className="text-[10px] text-slate-500 font-mono tracking-wider uppercase">VERIFIED</span>
                </div>
                
                <div className="font-sans font-bold text-2xl md:text-3xl text-slate-100 group-hover:text-white flex items-baseline gap-1">
                  <span>{stat.value}</span>
                  <span className="text-xs text-slate-400 font-normal">{stat.unit}</span>
                </div>
                
                <p className="mt-2 text-slate-400 text-xs font-medium uppercase font-sans tracking-wide leading-snug">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Scroll down mouse indicator */}
        <motion.div 
          animate={{ y: [0, 8, 0] }} 
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="mt-16 text-slate-500 flex flex-col items-center gap-2 cursor-pointer group"
          onClick={() => onScrollToSection('journey')}
        >
          <span className="text-[11px] font-mono tracking-widest text-slate-500 group-hover:text-amber-400 transition-colors duration-300">EXPLORE JOURNEY</span>
          <div className="w-5 h-8 rounded-full border-2 border-slate-700 p-1 flex justify-center">
            <div className="w-1.5 h-2 bg-amber-400 rounded-full"></div>
          </div>
        </motion.div>
      </div>

      {/* Decorative side margins indicators */}
      <div className="absolute left-6 bottom-12 hidden xl:flex flex-col gap-3 text-slate-600 font-mono text-[10px]">
        <span>[0.0.0.0:3000]</span>
        <span>LATENCY: ZERO</span>
      </div>
      <div className="absolute right-6 bottom-12 hidden xl:flex flex-col gap-3 text-slate-600 font-mono text-[10px] text-right">
        <span>POWER BI COGNITIVE PORTFOLIO</span>
        <span>MOHAN_KUMAR_V5.3</span>
      </div>
    </section>
  );
}
