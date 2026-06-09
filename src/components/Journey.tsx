import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Database, FileLineChart, Zap, ShieldAlert, Laptop, CheckCircle, ArrowRight, Star, AlertCircle, Calendar } from 'lucide-react';
import { TimelineChapter } from '../types';

export default function Journey() {
  const chapters: TimelineChapter[] = [
    {
      chapterNum: 1,
      title: "Foundations in Enterprise Systems & Databases",
      period: "Nov 2019 - Jul 2021",
      role: "Database & Reporting Intern to Associate",
      companies: ["Logic Mind"],
      skills: ["SQL Server", "Database Schemas", "Queries", "Joins", "Data Cleaning"],
      details: [
        "Started career mastering core data architectures, drafting advanced SQL queries (views, joins, stored procedures) and query optimizations.",
        "Excelled in physical & logical data modeling, building schemas like Star & Snow Flake to lay the groundwork for high-availability reporting.",
        "Supported ETL logic to cleanse, transform, and aggregate dirty unstructured inputs into sanitized, relational database repositories."
      ],
      highlights: [
        "Authored 50+ optimized stored procedures minimizing slow join overheads.",
        "Mastered the core Star and Snowflake Schema dimensional structures."
      ]
    },
    {
      chapterNum: 2,
      title: "Transition to Business Intelligence & BI Development",
      period: "Aug 2021 - Oct 2022",
      role: "BI Developer",
      companies: ["Fluent Grid Limited"],
      skills: ["Power BI", "DAX", "SQL Server", "SSRS", "Data Modeling", "Power Query"],
      details: [
        "Accelerated modeling workflows by transitioning traditional report structures to highly efficient Power BI dashboards.",
        "Wrote complex analytical formulas using DAX (Calculated Columns, Measures, Time Intelligence functions) to solve rigorous finance and operations questions.",
        "Maintained robust SSRS installations, utilizing Parameterized reports, drill-through layouts, and scheduling on SSRS Report Server."
      ],
      highlights: [
        "Integrated SSRS Report Manager for standard recurring subscription reports.",
        "Introduced Power Query parameters, replacing static strings with dynamic parameters for developer elasticity."
      ]
    },
    {
      chapterNum: 3,
      title: "Pivotal Large-Scale Energy & Utilities Analytics",
      period: "Nov 2022 - Feb 2024",
      role: "Independent BI Consultant",
      companies: ["APGENCO", "NTPC"],
      skills: ["Power BI DirectQuery", "Import Mode", "Row Level Security (RLS)", "SSAS OLAP Cubes", "Performance Tuning"],
      details: [
        "Architected large-scale analytical dashboards for state energy enterprises tracking direct power generation, supplies, and real-time load distribution.",
        "Optimized mixed storage modes, configuring DirectQuery for dynamic grid tracking and Import mode for historical aggregation performance.",
        "Enforced rigorous security matrices utilizing static & dynamic Row Level Security (RLS), restricting access based on user region or engineering tier."
      ],
      highlights: [
        "Tracked generation efficiencies across major thermal power stations in real-time.",
        "Created custom OLAP cubes inside SSAS to optimize cross-tabular data queries for executive KPI views."
      ]
    },
    {
      chapterNum: 4,
      title: "Global Enterprise BI & Stakeholder Collaboration",
      period: "Feb 2024 - Aug 2024",
      role: "Freelance Senior Analyst",
      companies: ["Chartered Insurance Institute (UK)"],
      skills: ["Business Analysis", "Splunk Log Analysis", "Jira", "Stakeholder Management", "Azure Boards"],
      details: [
        "Spearheaded international stakeholder support for the UK's leading insurance and financial planning professional institute.",
        "Created secure audit logs integration, analyzing high-volume application telemetry and API gateway logs inside Splunk.",
        "Managed operational milestones via Jira, accelerating BI development ticket resolution rates across multi-regional users."
      ],
      highlights: [
        "Reduced backlog ticket delays through Splunk query analytics identifying frequent Gateway failures.",
        "Co-designed executive KPI charts translating complex insurance premium trends."
      ]
    },
    {
      chapterNum: 5,
      title: "Microsoft Power BI Support Engineer & Cloud Specialist",
      period: "Aug 2024 - Present",
      role: "BI Developer & Customer Support Engineer",
      companies: ["Sonata Software (supporting Microsoft)"],
      skills: ["Power BI Gateways", "Dataset Refresh", "Azure Services", "CRM Troubleshooting", "Enterprise Support"],
      details: [
        "Providing tier-3 technical consultation for global Microsoft clients troubleshooting complex Enterprise Power BI architectures.",
        "Resolving complex dataset refresh bottlenecks, Gateway server node configurations, and OAuth/data connector failures under tight SLAs.",
        "Supporting core Azure Virtual Machine appliances and Azure SQL configurations, ensuring uninterrupted data refresh patterns and high tenant uptime."
      ],
      highlights: [
        "Earned exceptional client satisfaction (CSAT) indices resolving enterprise gateway failures.",
        "Designed diagnostics scripts to pinpoint network bottlenecks between Cloud Tenants and On-Premise Gateways."
      ]
    }
  ];

  const [activeChapter, setActiveChapter] = useState<number>(1);

  useEffect(() => {
    const handleScroll = () => {
      const container = document.getElementById('journey');
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const totalScrollableHeight = rect.height - window.innerHeight;

      if (totalScrollableHeight <= 0) return;

      // distance scrolled past the top of the viewport
      const scrolled = -rect.top;
      
      // Calculate active progress between 0 and 1
      const progress = Math.max(0, Math.min(0.999, scrolled / totalScrollableHeight));
      
      const index = Math.floor(progress * chapters.length);
      const chapterNum = chapters[index].chapterNum;
      setActiveChapter(chapterNum);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [chapters.length]);

  const handleChapterClick = (chapterNum: number) => {
    const container = document.getElementById('journey');
    if (!container) {
      setActiveChapter(chapterNum);
      return;
    }

    const rect = container.getBoundingClientRect();
    const containerTop = window.scrollY + rect.top;
    const totalScrollableHeight = rect.height - window.innerHeight;

    if (totalScrollableHeight > 0) {
      const targetIndex = chapterNum - 1;
      const chapterRange = totalScrollableHeight / chapters.length;
      // Scroll to the comfort threshold of the chapter range to activate it smoothly
      const targetScroll = containerTop + (targetIndex * chapterRange) + (chapterRange * 0.25);
      
      window.scrollTo({
        top: targetScroll,
        behavior: 'smooth'
      });
    } else {
      setActiveChapter(chapterNum);
    }
  };

  const getChapterIcon = (num: number) => {
    switch (num) {
      case 1: return <Database className="w-5 h-5" />;
      case 2: return <FileLineChart className="w-5 h-5" />;
      case 3: return <Zap className="w-5 h-5" />;
      case 4: return <Star className="w-5 h-5" />;
      case 5: return <Laptop className="w-5 h-5" />;
      default: return <Database className="w-5 h-5" />;
    }
  };

  const getChapterCompanyLogo = (company: string) => {
    switch (company) {
      case "Sonata Software":
      case "Microsoft":
        return <span className="px-2.5 py-1 text-[11px] rounded bg-blue-500/10 text-blue-400 border border-blue-500/20 font-bold uppercase tracking-wider">MICROSOFT SYSTEM</span>;
      case "Chartered Insurance Institute (UK)":
        return <span className="px-2.5 py-1 text-[11px] rounded bg-purple-500/10 text-purple-400 border border-purple-500/20 font-bold uppercase tracking-wider">UK INSURANCE</span>;
      case "APGENCO":
      case "NTPC":
        return <span className="px-2.5 py-1 text-[11px] rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-bold uppercase tracking-wider">ENERGY ENTERPRISE</span>;
      default:
        return <span className="px-2.5 py-1 text-[11px] rounded bg-slate-800 text-slate-400 border border-slate-700 font-bold uppercase tracking-wider">BI TECH</span>;
    }
  };

  return (
    <section id="journey" className="relative min-h-[140vh] md:min-h-[260vh] border-t border-slate-900 bg-slate-950/20">
      <div className="max-w-6xl mx-auto py-24 px-4 md:px-8 md:sticky md:top-24">
        
        {/* Section Header */}
        <div className="mb-16 text-center md:text-left">
          <p className="text-xs font-mono text-amber-400 uppercase tracking-widest mb-2">[ CAREER TRANSITION ]</p>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">
            The Interactive Journey
          </h2>
          <p className="text-slate-400 mt-3 max-w-2xl text-sm md:text-base leading-relaxed">
            Trace my career expansion from core SQL database query optimization to engineering enterprise-level dashboards and providing direct technical support inside the Microsoft ecosystem.
          </p>
        </div>

        {/* Layout: Sidebar Timeline Buttons + Main Detailed Card Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT: Mini timelines scroll layout */}
          <div className="lg:col-span-4 flex flex-col gap-3 relative">
            <div className="absolute left-[24px] top-4 bottom-4 w-[2px] bg-slate-900 hidden md:block"></div>
            
            {chapters.map((ch) => {
              const isActive = activeChapter === ch.chapterNum;
              return (
                <button
                  key={ch.chapterNum}
                  onClick={() => handleChapterClick(ch.chapterNum)}
                  className={`flex items-start text-left gap-4 p-4 rounded-xl transition-all duration-300 relative cursor-pointer group ${
                    isActive 
                      ? 'bg-gradient-to-r from-amber-400/10 to-transparent border-l-4 border-l-amber-400 bg-slate-900/60' 
                      : 'hover:bg-slate-950/80 border-l-4 border-l-transparent'
                  }`}
                >
                  {/* Circle number */}
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300 shrink-0 ${
                    isActive 
                      ? 'bg-amber-400 border-amber-400 text-slate-950 shadow-[0_0_15px_rgba(242,200,17,0.4)]' 
                      : 'bg-slate-950 border-slate-800 text-slate-400 group-hover:border-slate-700 group-hover:text-amber-400'
                  }`}>
                    {getChapterIcon(ch.chapterNum)}
                  </div>

                  {/* Minimal metadata text */}
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono text-amber-500 font-bold uppercase">CHAPTER 0{ch.chapterNum}</span>
                      <span className="text-[10px] font-mono text-slate-500">{ch.period}</span>
                    </div>
                    <h3 className={`text-sm font-semibold transition-colors mt-0.5 ${isActive ? 'text-white' : 'text-slate-400 group-hover:text-slate-200'}`}>
                      {ch.companies.join(" & ")}
                    </h3>
                    <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">{ch.role}</p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* RIGHT: Detailed Active Chapter View */}
          <div className="lg:col-span-8 p-1">
            <AnimatePresence mode="wait">
              {chapters.map((ch) => {
                if (ch.chapterNum !== activeChapter) return null;
                return (
                  <motion.div
                    key={ch.chapterNum}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.4 }}
                    className="glass-panel rounded-3xl p-6 md:p-8 relative overflow-hidden border-slate-800/80"
                  >
                    {/* Visual Corner Badge */}
                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-amber-400/5 via-transparent to-transparent pointer-events-none"></div>
                    
                    {/* Chapter Header */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 border-b border-slate-900 pb-6">
                      <div>
                        <div className="flex items-center gap-2.5 mb-1.5 flex-wrap">
                          <span className="px-2 py-0.5 text-[10px] font-mono text-amber-400 bg-amber-400/10 border border-amber-400/20 rounded font-bold uppercase">
                            STORY CHAPTER 0{ch.chapterNum}
                          </span>
                          <span className="text-slate-500 font-mono text-xs flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {ch.period}
                          </span>
                        </div>
                        <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight mt-1">
                          {ch.title}
                        </h2>
                        <p className="text-sm font-medium text-amber-500 font-mono mt-1">
                          {ch.role} 
                          <span className="text-slate-600 font-sans mx-2">@</span> 
                          <span className="text-slate-200">{ch.companies.join(", ")}</span>
                        </p>
                      </div>
                      
                      <div className="shrink-0 flex md:flex-col items-start md:items-end gap-2">
                        {ch.companies.map(comp => (
                          <React.Fragment key={comp}>
                            {getChapterCompanyLogo(comp)}
                          </React.Fragment>
                        ))}
                      </div>
                    </div>

                    {/* Timeline Description Block */}
                    <div className="space-y-4 text-slate-350 text-sm leading-relaxed mb-6">
                      {ch.details.map((detail, index) => (
                        <p key={index}>{detail}</p>
                      ))}
                    </div>

                    {/* Key Technical Tools */}
                    <div className="mb-8">
                      <h4 className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-3">CONQUERED ARTIFACTS</h4>
                      <div className="flex flex-wrap gap-2">
                        {ch.skills.map((skill, index) => (
                          <span 
                            key={index} 
                            className="px-3 py-1 text-xs rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:border-amber-400/30 transition-colors duration-200 font-mono"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Key Professional Achievements highlights */}
                    <div className="bg-slate-950/60 border border-slate-900 rounded-2xl p-5">
                      <h4 className="text-xs font-mono text-amber-500 uppercase tracking-widest mb-3 flex items-center gap-1.5 font-bold">
                        <CheckCircle className="w-3.5 h-3.5 text-amber-400" />
                        COMMERCIAL METRICS & DELIVERABLES
                      </h4>
                      <div className="space-y-3">
                        {ch.highlights.map((item, index) => (
                          <div key={index} className="flex gap-2.5 items-start text-xs text-slate-400 leading-normal">
                            <span className="text-amber-400 font-bold shrink-0 mt-0.5">▪</span>
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Simulated SQL Terminal Log of this chapter */}
                    <div className="mt-6 border border-slate-900 bg-slate-950 rounded-xl p-3 font-mono text-[11px] text-slate-500">
                      <div className="flex items-center gap-1.5 text-slate-600 mb-1.5">
                        <span className="w-2 h-2 rounded-full bg-red-500/40"></span>
                        <span className="w-2 h-2 rounded-full bg-yellow-500/40"></span>
                        <span className="w-2 h-2 rounded-full bg-green-500/40"></span>
                        <span className="ml-1 text-[10px]">DAX_ENGINE_DIAGNOSTICS_SYS</span>
                      </div>
                      <span className="text-emerald-500/80">mohan_kumar_cli&gt;</span> SELECT status, role, impact FROM mohan_career WHERE chapter = {ch.chapterNum};
                      <br />
                      <span className="text-slate-400 font-sans italic mt-1 block">Output: "Enterprise telemetry consolidated successfully (1 row affected)"</span>
                    </div>

                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
