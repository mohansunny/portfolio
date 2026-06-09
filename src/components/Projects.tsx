import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Layers, Database, Cpu, PhoneCall, CheckCircle, ChevronDown, Sparkles, LayoutGrid, BarChart3, Clock, Lock } from 'lucide-react';
import { ProjectCaseStudy } from '../types';

export default function Projects() {
  const projects: ProjectCaseStudy[] = [
    {
      id: 'apgenco',
      title: 'Power Generation Analytics Platform',
      client: 'Andhra Pradesh Power Generation Corporation Limited (APGENCO)',
      role: 'Power BI / Database Developer',
      category: 'Energy & Utilities',
      challenge: 'Consolidating erratic generation logs, supply dispatch metrics, and daily consumption inputs from multiple isolated power station systems into a single centralized performance tracking command center.',
      solution: 'Designed and engineered dynamic, high-availability Power BI dashboards linked to SQL Server. Standardized report logic with customized grouping, parameter structures, dynamic date tables, and calculated DAX columns.',
      impacts: [
        'Furnished immediate operational oversight of grid outputs across 8+ physical power stations.',
        'Reduced visual latency of daily generation metric calculation from 14 hours down to less than 20 minutes.',
        'Accelerated executive dispatch decision timelines by streamlining KPI trends and operational graphs.'
      ],
      technologies: ['Power BI', 'SQL Server T-SQL', 'M Language', 'DAX', 'Advanced Joins & Views'],
      metrics: [
        { label: 'Uptime Tracking', val: '24/7' },
        { label: 'Power Stations Integrated', val: '8+' },
        { label: 'Dispatch Latency Red.', val: '97%' }
      ]
    },
    {
      id: 'ntpc',
      title: 'Advanced Analytics & Spatial visualization',
      client: 'National Thermal Power Corporation Limited (NTPC)',
      role: 'Business Intelligence Developer (via Fluent Grid)',
      category: 'Enterprise Big Data',
      challenge: 'Structuring subquery loads under massive dataset scales while satisfying corporate user requests for split DirectQuery (real-time temperature checks) and Import (historic fuel inventories) modes.',
      solution: 'Implemented the advanced analytics system utilizing the SQL Server 2019 Big Data and AI Platform. Authored dynamic Row-Level Security (RLS) filters, direct drill-through layouts, and customized OLAP cubes inside SSAS.',
      impacts: [
        'Enforced robust row-level database protection limiting region managers to localized plant outputs.',
        'Structured complex paginated cross-tabs using SSRS with parameterized subscriptions.',
        'Created custom KPI bullet graphs and heatmaps mapping active power load deviations.'
      ],
      technologies: ['Power BI', 'SSRS Report Server', 'SQL Server Big Data', 'SSAS OLAP', 'Row-Level Security'],
      metrics: [
        { label: 'Data Row Capacity', val: '20M+' },
        { label: 'User Security Tiers', val: '4 Categories' },
        { label: 'DirectQuery Lag', val: '< 2 sec' }
      ]
    },
    {
      id: 'cii',
      title: 'Business Intelligence Premium Analytics',
      client: 'Chartered Insurance Institute (CII - UK)',
      role: 'Senior BI Analyst & Ticket Specialist',
      category: 'Fintech & Insurance',
      challenge: 'Assisting a prominent UK insurance training and professional institute in resolving ticket backlogs, analyzing gateway log drops, and providing stable premium collection dashboard enhancements.',
      solution: 'Served as the core technical analyst translating ticket guidelines via Jira. Created custom log-scraping queries within Splunk to isolate system errors, rebuilt problematic visual indices, and supported active Azure integrations.',
      impacts: [
        'Wiped out outstanding user ticket backlogs through efficient service triage.',
        'Leveraged Splunk logs to resolve frequent dataset gateway upload disconnects.',
        'Enhanced visual speed of premium trend dashboards, optimizing user tooltips and bookmark structures.'
      ],
      technologies: ['Power BI', 'Splunk logs', 'Jira', 'T-SQL CTES', 'Azure cloud environments', 'Stakeholder alignment'],
      metrics: [
        { label: 'Ticket SLA Resolved', val: '100%' },
        { label: 'Gateway Log Fault Is.', val: '92%' },
        { label: 'Premium Visual Speedup', val: '40%' }
      ]
    },
    {
      id: 'microsoft',
      title: 'Power BI Enterprise Support & Cloud Ops',
      client: 'Microsoft (via Sonata Software)',
      role: 'Enterprise BI Consultant',
      category: 'Cloud Engineering & Tier-3 Support',
      challenge: 'Resolving global enterprise failures surrounding dataset refresh errors, on-premise gateway network failures, and complex virtual machine cloud-to-local active directory handshakes.',
      solution: 'Providing high-tier technical support and troubleshooting across Microsoft CRM, Azure VM nodes, Gateway cluster architectures, and data connector drivers.',
      impacts: [
        'Diagnosed and solved critical gateway cluster failures preventing global financial reports.',
        'Authored dynamic diagnostic checklists tracking network ports, DNS lookups, and Active Directory authentications.',
        'Optimized client dataset refresh configurations, saving computational cluster assets.'
      ],
      technologies: ['Power BI Gateway', 'Azure Cloud VMs', 'Gateway Clusters', 'AD Security Groups', 'Service Level SLAs', 'Microsoft CRM'],
      metrics: [
        { label: 'CSAT Rating Score', val: '98%' },
        { label: 'Gateway Cluster Audits', val: '500+' },
        { label: 'Dataset Refresh Fixed', val: '120+' }
      ]
    }
  ];

  const [activeProj, setActiveProj] = useState<string>('microsoft');

  const currentProject = projects.find(p => p.id === activeProj) || projects[0];

  // Helper mock dashboards visualizations depending on selection to simulate Power BI report!
  const renderMockDashboard = (projId: string) => {
    switch (projId) {
      case 'apgenco':
        return (
          <div className="space-y-4">
            <div className="grid grid-cols-3 gap-2">
              <div className="bg-slate-900/80 p-2.5 rounded border border-slate-800 text-center">
                <span className="text-[9px] text-slate-500 block uppercase font-mono">GRID STATUS</span>
                <span className="text-xs font-bold text-emerald-400 font-mono">STABLE (50Hz)</span>
              </div>
              <div className="bg-slate-900/80 p-2.5 rounded border border-slate-800 text-center">
                <span className="text-[9px] text-slate-500 block uppercase font-mono">GEN TOTAL_MWH</span>
                <span className="text-xs font-bold text-amber-400 font-mono">14,280 MW</span>
              </div>
              <div className="bg-slate-900/80 p-2.5 rounded border border-slate-800 text-center">
                <span className="text-[9px] text-slate-500 block uppercase font-mono">LOSS MARGIN</span>
                <span className="text-xs font-bold text-red-400 font-mono">1.21%</span>
              </div>
            </div>
            
            {/* Custom SVG line graph mapping grid generation over time */}
            <div className="bg-slate-950 p-3 rounded border border-slate-900">
              <div className="flex justify-between items-center mb-2">
                <span className="text-[10px] text-slate-400 font-mono flex items-center gap-1">
                  <BarChart3 className="w-3 h-3 text-amber-500" />
                  MWh Generation Trend Line (APGENCO Grid)
                </span>
                <span className="text-[9px] text-emerald-400 font-mono">AUTO_REFRESH_PASS</span>
              </div>
              <svg className="w-full h-16" viewBox="0 0 100 20" preserveAspectRatio="none">
                <path d="M 0 16 Q 15 12, 30 14 T 60 4 T 90 8 T 100 2" fill="none" stroke="#F2C811" strokeWidth="1.5" />
                <path d="M 0 16 Q 15 12, 30 14 T 60 4 T 90 8 T 100 2 L 100 20 L 0 20 Z" fill="rgba(242, 200, 17, 0.05)" />
              </svg>
              <div className="flex justify-between text-[8px] text-slate-550 font-mono mt-1 pr-1">
                <span>00:00 H</span>
                <span>08:00 H</span>
                <span>16:00 H</span>
                <span>24:00 H</span>
              </div>
            </div>
          </div>
        );
      case 'ntpc':
        return (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-slate-900/80 p-2.5 rounded border border-slate-800 flex items-center gap-2">
                <Lock className="w-3.5 h-3.5 text-blue-400" />
                <div className="text-left">
                  <span className="text-[8px] text-slate-500 block font-mono">RLS LEVEL</span>
                  <span className="text-xs font-bold text-white font-mono">DYNAMIC_AD_DEPT</span>
                </div>
              </div>
              <div className="bg-slate-900/80 p-2.5 rounded border border-slate-800 flex items-center gap-2">
                <Database className="w-3.5 h-3.5 text-cyan-400" />
                <div className="text-left">
                  <span className="text-[8px] text-slate-500 block font-mono">SSAS ENGINE</span>
                  <span className="text-xs font-bold text-white font-mono">OLAP_CUBE_OK</span>
                </div>
              </div>
            </div>
            
            {/* Custom Bar Chart simulating drill-down fuel levels */}
            <div className="bg-slate-950 p-3 rounded border border-slate-900">
              <span className="text-[10px] text-slate-400 font-mono block mb-2 font-semibold">Fuel Reserves by plant (Thermal Index)</span>
              <div className="space-y-2">
                <div>
                  <div className="flex justify-between text-[9px] text-slate-500 mb-0.5">
                    <span>Singrauli Super Thermal</span>
                    <span className="text-amber-400 font-mono">88%</span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-900 rounded-full overflow-hidden">
                    <div className="h-full bg-amber-400" style={{ width: '88%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-[9px] text-slate-500 mb-0.5">
                    <span>Korba Thermal Station</span>
                    <span className="text-amber-400 font-mono">75%</span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-900 rounded-full overflow-hidden">
                    <div className="h-full bg-amber-400" style={{ width: '75%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case 'cii':
        return (
          <div className="space-y-4">
            <div className="bg-slate-900/80 p-3 rounded border border-slate-800">
              <div className="flex justify-between items-center mb-1.5">
                <span className="text-[9px] font-mono text-slate-550 uppercase">GATEWAY RELIABILITY AUDIT</span>
                <span className="px-1.5 py-0.5 text-[8px] font-mono text-emerald-400 bg-emerald-500/10 rounded">LIVE</span>
              </div>
              <p className="text-xs text-slate-350 leading-relaxed">
                Log diagnostic: SPL Query executed on index="powerbi_gateways". Discovered 5 dataset connection faults linked to local UK firewall gateway server proxy setups. Resolved via manual port maps configuration.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-2 text-center text-xs font-mono">
              <div className="bg-slate-950 p-2 rounded border border-slate-900">
                <span className="text-[8px] text-slate-500 block">SUPPORT TICKETS SOLVED</span>
                <span className="text-emerald-400 font-bold">140+ (100% SLA)</span>
              </div>
              <div className="bg-slate-950 p-2 rounded border border-slate-900">
                <span className="text-[8px] text-slate-500 block">SPLUNK LOG PARSES</span>
                <span className="text-blue-400 font-bold">2.4 Mil Rows</span>
              </div>
            </div>
          </div>
        );
      case 'microsoft':
        return (
          <div className="space-y-3">
            <div className="bg-slate-950 p-3 rounded border border-slate-900">
              <div className="flex justify-between items-center mb-1.5">
                <span className="text-[10px] text-slate-400 font-mono font-semibold">Gateway Failover Ring Monitoring</span>
                <span className="text-xs text-amber-400 font-mono animate-pulse">● CLUSTER_ONLINE</span>
              </div>
              <div className="flex items-center gap-1.5 mb-2">
                <div className="w-2.5 h-2.5 rounded bg-amber-400"></div>
                <span className="text-[9px] text-slate-500 font-mono">Cluster Gateways Primary Node (Active)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded bg-blue-500"></div>
                <span className="text-[9px] text-slate-500 font-mono">Cluster Gateways Backup Node (Failover Standby)</span>
              </div>
            </div>
            
            <div className="bg-slate-900/60 p-2.5 rounded border border-slate-805 text-[10px] font-mono text-slate-450 leading-snug">
              <Clock className="w-3.5 h-3.5 inline text-amber-500 mr-1" />
              SLA Compliance Level: <span className="text-emerald-400 font-bold">99.85%</span> (Enterprise contract parameters)
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section id="projects" className="py-24 px-4 md:px-8 border-t border-slate-900 relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-16 text-center lg:text-left">
          <p className="text-xs font-mono text-amber-400 uppercase tracking-widest mb-2">[ REAL-WORLD IMPACT ]</p>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">
            Commercial Case Studies
          </h2>
          <p className="text-slate-400 mt-3 max-w-2xl text-sm md:text-base leading-relaxed">
            Explore Mohan's key projects mapping his precise contributions. Select a case study to investigate client challenges, engineering outcomes, and view a simulated diagnostic visual interface.
          </p>
        </div>

        {/* Project Selector Hub */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* List of Projects Selection Panel (Col-5) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {projects.map(p => {
              const isActive = p.id === activeProj;
              return (
                <button
                  key={p.id}
                  onClick={() => setActiveProj(p.id)}
                  className={`p-5 rounded-2xl text-left border relative transition-all duration-300 cursor-pointer overflow-hidden group ${
                    isActive 
                      ? 'bg-slate-900/80 border-amber-400/30 shadow-[0_5px_22px_-5px_rgba(242,200,17,0.06)]' 
                      : 'bg-slate-950/40 border-slate-900 hover:border-slate-800'
                  }`}
                >
                  {/* Subtle hover gradient indicator */}
                  <div className="absolute top-0 left-0 w-[3px] h-full bg-amber-400 scale-y-0 group-hover:scale-y-100 transition-transform origin-bottom duration-300"></div>
                  
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono text-slate-500 font-bold tracking-wider uppercase">{p.category}</span>
                    <span className={`text-[10px] font-mono font-bold ${isActive ? 'text-amber-400' : 'text-slate-600'}`}>0{projects.indexOf(p)+1}</span>
                  </div>
                  
                  <h3 className={`text-base font-bold transition-colors ${isActive ? 'text-white' : 'text-slate-300 group-hover:text-slate-100'}`}>
                    {p.client}
                  </h3>
                  
                  <p className="text-xs text-slate-400 line-clamp-1 mt-1 font-mono text-amber-500/80">{p.role}</p>
                </button>
              );
            })}
          </div>

          {/* Expanded Project Board (Col-7) */}
          <div className="lg:col-span-7 flex">
            <AnimatePresence mode="wait">
              {projects.map(p => {
                if (p.id !== activeProj) return null;
                return (
                  <motion.div
                    key={p.id}
                    initial={{ opacity: 0, scale: 0.98, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.98, y: -10 }}
                    transition={{ duration: 0.35 }}
                    className="glass-panel border-slate-800/80 rounded-3xl p-6 md:p-8 flex flex-col justify-between w-full"
                  >
                    <div>
                      {/* Grid category and verified flag */}
                      <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                        <span className="px-3 py-1 rounded bg-slate-900 border border-slate-800 text-[10px] font-mono font-bold text-amber-400 uppercase tracking-wider">
                          {p.category}
                        </span>
                        <div className="flex items-center gap-1.5 text-[9px] font-mono text-slate-500">
                          <CheckCircle className="w-3 h-3 text-amber-500" />
                          <span>PRODUCTION COMPLETED</span>
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-1 leading-snug">{p.title}</h3>
                      <p className="text-xs font-mono text-slate-400 font-medium mb-6">Client: {p.client}</p>

                      {/* Tabs Details */}
                      <div className="space-y-5">
                        
                        {/* Challenge block */}
                        <div>
                          <h4 className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-1 font-bold">CLIENT CHALLENGE</h4>
                          <p className="text-xs md:text-sm text-slate-350 leading-relaxed">{p.challenge}</p>
                        </div>

                        {/* Solutions block */}
                        <div>
                          <h4 className="text-xs font-mono text-amber-500 uppercase tracking-widest mb-1 font-bold">MOHAN'S ENGINEERING SOLUTION</h4>
                          <p className="text-xs md:text-sm text-slate-300 leading-relaxed">{p.solution}</p>
                        </div>

                        {/* Impact points */}
                        <div>
                          <h4 className="text-xs font-mono text-emerald-400 uppercase tracking-widest mb-2 font-bold">MEASURED SYSTEM IMPACT</h4>
                          <div className="space-y-2">
                            {p.impacts.map((imp, idx) => (
                              <div key={idx} className="flex gap-2 items-start text-xs text-slate-400 leading-relaxed">
                                <span className="text-emerald-400 font-bold shrink-0">✔</span>
                                <span>{imp}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                      </div>
                    </div>

                    {/* Interactive Telemetry Box representing visual layout */}
                    <div className="mt-8 border-t border-slate-900 pt-6">
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-[10px] font-mono text-slate-500 uppercase font-bold">SIMULATED POWER BI METRICS</span>
                        <span className="text-[9px] text-amber-400 font-mono">TETHERED ENGINE</span>
                      </div>
                      
                      {renderMockDashboard(p.id)}
                    </div>

                    {/* Integrated Technologies */}
                    <div className="mt-6 pt-4 border-t border-slate-900 flex flex-wrap gap-1.5">
                      {p.technologies.map((tech, idx) => (
                        <span key={idx} className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-950 border border-slate-900 text-slate-400">
                          {tech}
                        </span>
                      ))}
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
