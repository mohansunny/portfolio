import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, UserCheck, CheckSquare, Zap, Landmark, HelpCircle, Briefcase, RefreshCw, Layers } from 'lucide-react';

export default function RecruiterModule() {
  const [selectedAlignment, setSelectedAlignment] = useState<number | null>(null);

  // Impact key numbers
  const metrics = [
    { value: '5+', label: 'Years Experience', desc: 'Commercial database & reporting track record' },
    { value: '4+', label: 'Enterprise Engines', desc: 'Critical corporate systems implemented' },
    { value: '500+', label: 'SLA Tickets Solved', desc: '100% client ticket SLA conformance' },
    { value: '2', label: 'Global Regions Served', desc: 'Deep experience working with UK & India corporate portfolios' }
  ];

  const coreStrengths = [
    {
      id: 1,
      title: 'Power BI Dominance',
      subtitle: 'Expert Visuals & Data Modeling',
      bullets: [
        'Advanced DAX calculated columns and optimized virtual measures.',
        'High-density dashboard layouts maximizing screen estate.',
        'Configurating bookmarks, tooltips, drill-throughs, and dynamic parameters.'
      ],
      icon: <Layers className="w-5 h-5 text-amber-400" />
    },
    {
      id: 2,
      title: 'End-to-End BI Delivery',
      subtitle: 'Database to Dashboard Integration',
      bullets: [
        'Constructing complex stored procedures, query CTEs, and views on Microsoft SQL Server.',
        'SSRS administration and scheduled subscriptions configuration.',
        'Incremental loading logic optimization, saving pipeline resources.'
      ],
      icon: <ShieldCheck className="w-5 h-5 text-blue-400" />
    },
    {
      id: 3,
      title: 'Client-Facing Stature',
      subtitle: 'UK and India Collaborations',
      bullets: [
        'Translating ambiguous goals from foreign stakeholders into explicit technical blueprints.',
        'Documenting case outcomes to enable corporate knowledge transfer.',
        'Managing priorities transparently inside Jira sprint frameworks.'
      ],
      icon: <UserCheck className="w-5 h-5 text-indigo-400" />
    },
    {
      id: 4,
      title: 'Enterprise Support Stature',
      subtitle: 'Gateway and Cluster Maintenance',
      bullets: [
        'Isolating complex dataset sync roadblocks and connection timeouts.',
        'Clustering on-premise Gateways for dynamic failover resiliency.',
        'Active CRM ticket resolution tracking under strict business SLAs.'
      ],
      icon: <Zap className="w-5 h-5 text-emerald-400" />
    },
    {
      id: 5,
      title: 'Physical Data Modeling',
      subtitle: 'Star and Snowflake Schema Alignments',
      bullets: [
        'Structuring normalized database objects to guard transactional tables.',
        'Designing star and snowflake schema dimensions mapping business entities.',
        'Maintaining dynamic calendar table variables optimizing calculation matrices.'
      ],
      icon: <Briefcase className="w-5 h-5 text-violet-400" />
    },
    {
      id: 6,
      title: 'Microsoft Cloud Ecosystem',
      subtitle: 'Azure and Tenant Synchronizations',
      bullets: [
        'Setting up virtual networks and firewalls for Azure Virtual Machines.',
        'Synchronizing local Active Directory directory profiles with BI dynamic security roles (RLS).',
        'Configuring workspace security permissions for external stakeholders.'
      ],
      icon: <RefreshCw className="w-5 h-5 text-sky-400" />
    }
  ];

  return (
    <section id="recruiter" className="py-24 px-4 md:px-8 border-t border-slate-900 bg-slate-950/40 relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Core Impact Indicators */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-24 text-center md:text-left">
          {metrics.map((m, idx) => (
            <div 
              key={idx}
              className="p-6 rounded-2xl bg-gradient-to-b from-slate-900/50 to-slate-950/50 border border-slate-900 relative group overflow-hidden hover:border-slate-800 transition-colors duration-300"
            >
              {/* Corner abstract decoration */}
              <div className="absolute top-0 right-0 w-12 h-12 bg-amber-400/5 rounded-bl-3xl"></div>
              
              <span className="text-4xl md:text-5xl font-extrabold text-white font-sans tracking-tight block group-hover:text-amber-400 transition-colors">
                {m.value}
              </span>
              <span className="text-xs font-mono text-amber-500 uppercase tracking-widest block mt-2 font-bold select-none">
                {m.label}
              </span>
              <p className="text-xs text-slate-500 mt-1 lines-clamp-2 leading-relaxed">
                {m.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Alignment header */}
        <div className="mb-14 text-center">
          <p className="text-xs font-mono text-amber-400 uppercase tracking-widest mb-1.5">[ MATCH CHECKER ]</p>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-3">
            Why Hire Mohan Kumar?
          </h2>
          <p className="text-slate-400 text-xs md:text-sm max-w-xl mx-auto">
            Review the six core operational matrices explaining how Mohan aligns perfectly with modern Power BI, Database, and customer support organizations. Click on any card below to expand bullet points.
          </p>
        </div>

        {/* Dynamic Match Grid (6 cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreStrengths.map((str, index) => {
            const isSelected = selectedAlignment === index;
            return (
              <div
                key={str.id}
                onClick={() => setSelectedAlignment(isSelected ? null : index)}
                className={`p-6 rounded-2xl glass-panel relative group transition-all duration-300 cursor-pointer border-slate-800/80 hover:border-amber-400/20 ${
                  isSelected ? 'shadow-[0_4px_22px_rgba(242,200,17,0.06)] ring-1 ring-amber-400/30 bg-slate-900/40' : ''
                }`}
              >
                
                {/* Header card info */}
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 rounded-xl bg-slate-950 border border-slate-900 text-slate-350">
                    {str.icon}
                  </div>
                  <span className="text-[9px] font-mono text-slate-500">{isSelected ? 'COLLAPSE' : 'EXPAND INFO'}</span>
                </div>

                <h3 className="text-base font-bold text-slate-200 group-hover:text-white transition-colors">
                  {str.title}
                </h3>
                <p className="text-xs text-amber-500/80 font-mono mt-0.5 leading-snug">{str.subtitle}</p>

                {/* Collapsible bullet checklist details */}
                <div className={`mt-4 pt-4 border-t border-slate-900/80 space-y-3 overflow-hidden transition-all duration-300 ${
                  isSelected ? 'opacity-100 max-h-[300px]' : 'opacity-40 max-h-[80px]'
                }`}>
                  {str.bullets.map((bullet, idx) => (
                    <div key={idx} className="flex gap-2 items-start text-[11px] text-slate-400 leading-normal">
                      <span className="text-amber-400 font-bold shrink-0 mt-0.5">▪</span>
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-4 pt-3 border-t border-slate-900/60 flex items-center justify-between text-[10px] font-mono text-slate-550 select-none">
                  <span>ALIGNMENT MATRIX</span>
                  <span className={isSelected ? 'text-amber-400 font-bold' : 'group-hover:text-slate-400'}>
                    {isSelected ? 'LOADED_OK' : 'TAP_TO_REVEAL'}
                  </span>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
