import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Award, ShieldCheck, CheckCircle, ExternalLink, Sparkles, AlertCircle, Copy, Check } from 'lucide-react';

export default function Expertise() {
  const [copied, setCopied] = useState(false);
  const [hologramHovered, setHologramHovered] = useState(false);

  const keySkills = [
    { name: 'Power BI Development', level: 95, icon: '📊', color: 'from-amber-400 to-yellow-500' },
    { name: 'SQL Query Engineering', level: 90, icon: '💾', color: 'from-blue-500 to-sky-400' },
    { name: 'DAX Formulas', level: 90, icon: '🔢', color: 'from-yellow-500 to-amber-600' },
    { name: 'Dimensional Data Modeling', level: 88, icon: '🕸️', color: 'from-indigo-500 to-violet-400' },
    { name: 'Microsoft Azure Stack', level: 80, icon: '☁️', color: 'from-cyan-500 to-blue-400' },
    { name: 'SSRS Paginated Reports', level: 85, icon: '📜', color: 'from-orange-500 to-amber-500' }
  ];

  const handleCopyCredentials = () => {
    navigator.clipboard.writeText('PL-300 Verified Analyst: Mohan Kumar');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="certifications" className="py-24 px-4 md:px-8 border-t border-slate-900 bg-slate-950/20 relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Core Layout: Grid dividing Skills Expertise and Certification Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT: Technical Expertise Progress Stats (Col-6) */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <p className="text-xs font-mono text-amber-400 uppercase tracking-widest mb-2">[ TECHNICAL DENSITY ]</p>
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">
                Technical Expertise
              </h2>
              <p className="text-slate-400 mt-3 text-sm md:text-base leading-relaxed">
                Objective proficiency indicators compiled from over 5 years of commercial production support, automated report configuration, and query speedups.
              </p>
            </div>

            {/* Grid of expertise progress gauges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              {keySkills.map((skill, index) => (
                <div 
                  key={index} 
                  className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800/80 hover:border-slate-700/80 transition-colors group"
                >
                  <div className="flex items-center justify-between mb-3 text-sm">
                    <span className="flex items-center gap-2 font-medium text-slate-350 group-hover:text-white transition-colors">
                      <span className="text-base">{skill.icon}</span>
                      {skill.name}
                    </span>
                    <span className="font-mono text-amber-400 font-bold text-xs">{skill.level}%</span>
                  </div>
                  
                  {/* Progress Line */}
                  <div className="w-full h-1.5 bg-slate-950 rounded-full overflow-hidden border border-slate-900/60 p-[1px]">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: PL-300 Certification Verification Badging (Col-6) */}
          <div className="lg:col-span-6 flex justify-center">
            
            {/* Holographic Digital Badge Card */}
            <motion.div 
              onMouseEnter={() => setHologramHovered(true)}
              onMouseLeave={() => setHologramHovered(false)}
              className="w-full max-w-sm relative group"
            >
              {/* Outer ambient glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-amber-400/20 to-blue-500/20 rounded-3xl filter blur-xl group-hover:blur-2xl transition-all duration-300 opacity-60"></div>

              {/* Front Credential Panel */}
              <div className="relative glass-panel rounded-3xl p-6 border-slate-800 bg-gradient-to-b from-slate-950/80 via-slate-900/70 to-slate-950/90 overflow-hidden shadow-2xl">
                
                {/* Hologram swipe light beam line */}
                <div className={`absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-amber-400 to-transparent transition-transform duration-1000 ${
                  hologramHovered ? 'translate-y-[280px]' : 'translate-y-0'
                }`}></div>
                
                {/* Badge Header logo badge */}
                <div className="flex items-center justify-between border-b border-slate-800/80 pb-5 mb-5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/35 flex items-center justify-center text-amber-400">
                      <Award className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-amber-500 uppercase tracking-widest font-bold block">MICROSOFT CERTIFIED</span>
                      <span className="text-xs font-sans text-slate-400">Security Verified</span>
                    </div>
                  </div>
                  <div className="p-1 px-2.5 rounded bg-blue-500/10 text-blue-400 text-[10px] font-mono border border-blue-500/20 font-bold uppercase tracking-wider">
                    PL-300
                  </div>
                </div>

                {/* Micro Chip graphic */}
                <div className="w-9 h-7 rounded-md bg-gradient-to-br from-amber-400/30 to-slate-800 border border-amber-400/20 mb-4 flex items-center justify-center">
                  <div className="w-4 h-4 border border-amber-400/20 rounded-sm grid grid-cols-2 opacity-50">
                    <span className="border-r border-b border-amber-400/20"></span>
                    <span className="border-b border-amber-400/20"></span>
                    <span className="border-r border-amber-400/20"></span>
                    <span></span>
                  </div>
                </div>

                {/* Certificate info content */}
                <div className="space-y-3.5 mb-6 text-left">
                  <div>
                    <span className="text-[9px] font-mono text-slate-500 block uppercase font-semibold">CERTIFICATION NAME</span>
                    <p className="text-sm font-extrabold text-white leading-snug">Power BI Data Analyst Associate</p>
                  </div>

                  <div>
                    <span className="text-[9px] font-mono text-slate-500 block uppercase font-semibold">CANDIDATE HOLDER</span>
                    <p className="text-sm font-extrabold text-slate-200">Mohan Kumar</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <span className="text-[9px] font-mono text-slate-500 block uppercase font-semibold">VALID_ID</span>
                      <p className="text-xs font-mono font-bold text-slate-350">M-PBI-798115</p>
                    </div>
                    <div>
                      <span className="text-[9px] font-mono text-slate-500 block uppercase font-semibold">STATUS</span>
                      <span className="inline-flex items-center gap-1 text-[11px] font-mono font-bold text-emerald-400 bg-emerald-500/10 px-1.5 py-0.2 rounded-sm border border-emerald-500/20 mt-0.5">
                        <ShieldCheck className="w-3 h-3 text-emerald-400 shrink-0" />
                        ACTIVE
                      </span>
                    </div>
                  </div>
                </div>

                {/* Action panel */}
                <div className="mt-6 border-t border-slate-900 pt-5 flex items-center justify-between text-xs font-mono">
                  <button 
                    onClick={handleCopyCredentials}
                    className="flex items-center gap-1 text-slate-500 hover:text-slate-300 transition-colors cursor-pointer"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400 font-bold">COPIED</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Ref ID</span>
                      </>
                    )}
                  </button>
                  <span className="text-[10px] text-slate-600 font-bold">100% ID AUTHENTIC</span>
                </div>

              </div>
              
              {/* Fake verification link trigger tooltip */}
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-48 bg-slate-900 border border-slate-800 text-[10px] text-center py-1.5 px-3 rounded-lg font-mono text-slate-400 flex items-center justify-center gap-1 shadow-md">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>MICROSOFT REGISTERED</span>
              </div>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}
