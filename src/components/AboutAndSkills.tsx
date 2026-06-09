import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, Code, Database, Eye, BarChart2, Shield, Cloud, CheckSquare, Layers, HelpCircle, Terminal } from 'lucide-react';

interface SkillCategory {
  id: string;
  name: string;
  icon: React.ReactNode;
  skills: { name: string; level: number; info: string }[];
  snippetTitle: string;
  snippetLanguage: string;
  snippetCode: string;
}

export default function AboutAndSkills() {
  const [activeCategory, setActiveCategory] = useState<string>('bi');
  const [selectedStrength, setSelectedStrength] = useState<number | null>(null);

  const strengths = [
    {
      id: 1,
      title: "Power BI Architecture",
      desc: "End-to-end development of custom semantic models, DirectQuery matrices, incremental refreshing mechanisms, and Gateway client nodes.",
      icon: <BarChart2 className="w-5 h-5 text-amber-400" />
    },
    {
      id: 2,
      title: "Advanced DAX & Querying",
      desc: "Writing performant measures, virtual tables, context transition overrides (CALCULATE, ALLSELECTED), and optimizing custom measures.",
      icon: <Code className="w-5 h-5 text-blue-400" />
    },
    {
      id: 3,
      title: "Database Performance",
      desc: "Drafting complex Joins, Stored Procedures, Views, User Defined Functions, and indexing structures on SQL Server databases.",
      icon: <Database className="w-5 h-5 text-emerald-400" />
    },
    {
      id: 4,
      title: "Stakeholder Insights",
      desc: "Translating ambiguous requirements from UK and India corporate leaders into reliable operational KPI trackers and executive drill-downs.",
      icon: <BookOpen className="w-5 h-5 text-indigo-400" />
    }
  ];

  const skillCategories: SkillCategory[] = [
    {
      id: 'bi',
      name: 'Business Intelligence',
      icon: <BarChart2 className="w-4 h-4" />,
      skills: [
        { name: 'Power BI Desktop', level: 95, info: 'Model building, workspace configuration & visual design' },
        { name: 'Power Query / M', level: 90, info: 'Advanced custom columns, query folding & merge performance' },
        { name: 'Power Pivot / Pivot Table', level: 88, info: 'Enterprise relational data modeling' },
        { name: 'DAX (Data Analysis Expressions)', level: 92, info: 'Calculate modifiers, virtual filters & context modifiers' },
        { name: 'Report Builder', level: 85, info: 'Paginated report generation for scheduled subscriptions' }
      ],
      snippetTitle: "Enterprise DAX Metrics: Year-to-Date Performance Matrix",
      snippetLanguage: "DAX Formula",
      snippetCode: `YTD_Premium_Growth = 
VAR CurrentPremiumYTD = TOTALYTD(SUM('Insurance_Policies'[WrittenPremium]), 'Date'[DateKey])
VAR PriorPremiumYTD = CALCULATE(
    SUM('Insurance_Policies'[WrittenPremium]), 
    SAMEPERIODLASTYEAR('Date'[DateKey])
)
RETURN
    IF(
        ISBLANK(PriorPremiumYTD), 
        BLANK(), 
        DIVIDE(CurrentPremiumYTD - PriorPremiumYTD, PriorPremiumYTD)
    )`
    },
    {
      id: 'database',
      name: 'Database Engineering',
      icon: <Database className="w-4 h-4" />,
      skills: [
        { name: 'SQL Server (T-SQL)', level: 90, info: 'Complex joins, subqueries, and table variables' },
        { name: 'Stored Procedures', level: 92, info: 'Highly parameterized procedural blocks for transactional pipelines' },
        { name: 'Views & CTEs', level: 88, info: 'Structured logical layers isolating physical data schemas' },
        { name: 'User Defined Functions', level: 85, info: 'Scalable scalar and inline table-valued queries' },
        { name: 'Performance Tuning', level: 85, info: 'Execution plans, indexes alignments & deadlock diagnostics' }
      ],
      snippetTitle: "T-SQL: Parameterized Analytics Stored Procedure",
      snippetLanguage: "Transact-SQL",
      snippetCode: `CREATE PROCEDURE dbo.GetEnergyStationKPIs
    @StationID INT,
    @ReportStartDate DATE,
    @ReportEndDate DATE
AS
BEGIN
    SET NOCOUNT ON;

    WITH StationDailyAgg AS (
        SELECT 
            GenerationDate,
            SUM(MegawattHours) AS TotalMWh,
            AVG(ReactorTemperature) AS AvgTemp,
            SUM(FuelConsumedMetricTons) AS TotalFuel
        FROM dbo.PowerStationMetrics
        WHERE StationID = @StationID 
          AND GenerationDate BETWEEN @ReportStartDate AND @ReportEndDate
        GROUP BY GenerationDate
    )
    SELECT 
        s.StationName,
        d.GenerationDate,
        d.TotalMWh,
        d.TotalFuel,
        -- Calculate generation efficiency metrics 
        COALESCE(d.TotalMWh / NULLIF(d.TotalFuel, 0), 0) AS MWhPerTon
    FROM StationDailyAgg d
    JOIN dbo.PowerStations s ON s.StationID = @StationID;
END;`
    },
    {
      id: 'reporting',
      name: 'Enterprise Reporting',
      icon: <Layers className="w-4 h-4" />,
      skills: [
        { name: 'SSRS Report Server', level: 85, info: 'Configuring report subscriptions & email delivery tasks' },
        { name: 'KPI Dashboards', level: 92, info: 'Executive-level summary heatmaps & scorecards' },
        { name: 'Drill Through Layouts', level: 90, info: 'Multi-level drill-down reports preserving system filters' },
        { name: 'Paginated Subscriptions', level: 82, info: 'Triggering scheduled cross-tab export tables (PDF/Excel)' }
      ],
      snippetTitle: "SSRS XML: Dynamic Drill-Through Child Parameter Link",
      snippetLanguage: "Report RDL Snippet",
      snippetCode: `<ReportAction>
  <Drillthrough>
    <ReportName>ActivePremiumDetailReport</ReportName>
    <Parameters>
      <Parameter Name="UKInsuranceRegion">
        <Value>=Fields!InsuranceRegion.Value</Value>
      </Parameter>
      <Parameter Name="FiscalYear">
        <Value>=Parameters!ReportYear.Value</Value>
      </Parameter>
    </Parameters>
  </Drillthrough>
</ReportAction>`
    },
    {
      id: 'cloud',
      name: 'Cloud & Diagnostics Tools',
      icon: <Cloud className="w-4 h-4" />,
      skills: [
        { name: 'Azure Virtual Machines', level: 80, info: 'Setup & configure virtual private gateways and firewalls' },
        { name: 'Power BI Gateways', level: 94, info: 'Failover clustering, dataset proxy bridges & scheduled refresh' },
        { name: 'Splunk Log Analysis', level: 82, info: 'Analyzing server gateway logs to isolate network drops' },
        { name: 'Jira / Azure DevOps', level: 88, info: 'Sprint alignments, ticket triage, SLA metric resolution' },
        { name: 'Active Directory / RLS', level: 85, info: 'Synchronizing user AD security groups into dynamic DAX filters' }
      ],
      snippetTitle: "Splunk: Power BI Gateway Diagnostic Query",
      snippetLanguage: "SPL Syntax",
      snippetCode: `index=powerbi_gateways host="uk-prod-gw-*" 
| rex field=_raw "GatewayException: (?<exception_reason>[^\\r\\n]+)"
| stats count BY exception_reason, host
| eval severity=if(count > 10, "Critical", "Warning")
| sort - count`
    }
  ];

  const currentCategory = skillCategories.find(c => c.id === activeCategory) || skillCategories[0];

  return (
    <section id="skills" className="py-24 px-4 md:px-8 border-t border-slate-900 bg-slate-950/40 relative">
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-blue-500/5 rounded-full filter blur-[150px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto">
        
        {/* About Me Section: Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-28">
          
          {/* LEFT: About text and picture placeholder */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <p className="text-xs font-mono text-amber-400 uppercase tracking-widest mb-2">[ DATA STRATEGIST ]</p>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-6">
              About Mohan
            </h2>
            
            <div className="space-y-4 text-slate-350 text-sm md:text-base leading-relaxed">
              <p>
                As an dedicated **Power BI Developer with 5.3+ years of commercial experience**, I bridge the gap between heavy relational database storage systems and business stakeholders trying to maximize operational performance.
              </p>
              <p>
                My professional track record stretches across complex industrial setups (designing analytics on real-time grid generation parameters for India energy power stations APGENCO and NTPC) and global corporate organizations (leading ticket triage, stakeholder reports, and Splunk logging analytics for UK insurance giants CII).
              </p>
              <p>
                Now supporting clients across the Microsoft Ecosystem under Sonata Software, I specialize in resolving high-priority dataset refresh blockers, and orchestrating secure, clustered Power BI Gateway solutions.
              </p>
            </div>

            {/* Micro Badge info */}
            <div className="mt-8 flex items-center gap-4 p-4 rounded-xl bg-slate-900/40 border border-slate-800">
              <Shield className="w-8 h-8 text-amber-400 shrink-0" />
              <div>
                <p className="text-xs font-semibold text-white">Trust, Integrity, and Security</p>
                <p className="text-[11px] text-slate-500 font-mono mt-0.5">Static and dynamic Row-Level Security developer conforming to global data compliance (GDPR).</p>
              </div>
            </div>
          </div>

          {/* RIGHT: Visual Strengths Cards Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4">
            {strengths.map((st, index) => {
              const isSelected = selectedStrength === index;
              return (
                <div 
                  key={index}
                  onClick={() => setSelectedStrength(isSelected ? null : index)}
                  className={`p-6 rounded-2xl glass-panel relative group transition-all duration-300 cursor-pointer border-slate-800/85 hover:border-amber-400/30 ${
                    isSelected ? 'ring-2 ring-amber-400/30 bg-slate-900/60' : ''
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2 rounded-lg bg-slate-950 border border-slate-800/80 text-amber-400">
                      {st.icon}
                    </div>
                    <span className="text-[9px] font-mono text-slate-500 group-hover:text-amber-400 transition-colors">INTERACTIVE</span>
                  </div>
                  
                  <h3 className="text-base font-bold text-slate-200 group-hover:text-white transition-colors">
                    {st.title}
                  </h3>
                  
                  <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                    {st.desc}
                  </p>

                  <div className="mt-4 flex items-center justify-between text-[11px] font-mono text-slate-500 border-t border-slate-900/80 pt-3">
                    <span>SELECTION TETHERED</span>
                    <span className={isSelected ? 'text-amber-400 font-bold' : 'group-hover:text-slate-300'}>
                      {isSelected ? 'ACTIVE' : 'EXPLORE'}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>


        {/* Skills Architecture Interactive Hub */}
        <div className="mt-30">
          <div className="mb-10 text-center">
            <p className="text-xs font-mono text-amber-500 uppercase tracking-widest mb-1">[ MODERN STACK ]</p>
            <h2 className="text-2xl md:text-4xl font-extrabold text-white">Skills Architecture & Snippet sandbox</h2>
            <p className="text-slate-400 text-xs md:text-sm mt-2 max-w-xl mx-auto">
              Click skill categories below to filter Mohan's core metrics and preview production-inspired script structures he deploys daily.
            </p>
          </div>

          {/* Interactive Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {skillCategories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`py-2.5 px-4 rounded-xl flex items-center gap-2.5 font-sans text-xs md:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-amber-400 text-slate-950 shadow-[0_4px_15px_rgba(242,200,17,0.25)]'
                    : 'bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
                }`}
              >
                {cat.icon}
                <span>{cat.name}</span>
              </button>
            ))}
          </div>

          {/* Grid: Category Skills Level progress bars + Interactive Code Code Snippet */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left: Progress lists (Col-5) */}
            <div className="lg:col-span-5 flex flex-col gap-5 glass-panel rounded-2xl p-6 md:p-8 border-slate-800/80 justify-center">
              <h3 className="text-base font-bold text-white mb-2 flex items-center gap-2">
                <span>{currentCategory.name} Levels</span>
              </h3>
              
              <div className="space-y-5">
                {currentCategory.skills.map((skill, index) => (
                  <div key={index} className="group">
                    <div className="flex justify-between items-baseline mb-1.5 text-xs">
                      <span className="font-semibold text-slate-300 group-hover:text-white transition-colors">{skill.name}</span>
                      <span className="font-mono text-amber-400 font-bold">{skill.level}%</span>
                    </div>

                    {/* Progress track */}
                    <div className="w-full h-1.5 bg-slate-950 rounded-full overflow-hidden border border-slate-900">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-amber-500 to-amber-300"
                      />
                    </div>
                    
                    <p className="text-[11px] text-slate-500 mt-1 italic font-sans leading-relaxed group-hover:text-slate-400 transition-colors">
                      {skill.info}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Code block screen (Col-7) */}
            <div className="lg:col-span-7 flex flex-col rounded-2xl border border-slate-800 bg-slate-950 overflow-hidden relative">
              
              {/* Fake Terminal Header */}
              <div className="flex items-center justify-between px-5 py-3 border-b border-slate-900 bg-slate-900/40">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-amber-400" />
                  <span className="text-xs font-mono text-slate-400">{currentCategory.snippetTitle}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="px-2 py-0.5 text-[9px] rounded bg-slate-800 text-slate-400 font-mono font-semibold uppercase">
                    {currentCategory.snippetLanguage}
                  </span>
                  {/* Fake UI window controls */}
                  <div className="flex gap-1.5 ml-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400/30"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/30"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-green-400/30"></span>
                  </div>
                </div>
              </div>

              {/* Code Code Content */}
              <div className="p-5 font-mono text-xs md:text-sm overflow-x-auto text-slate-300 leading-relaxed h-[320px] bg-[#05070a] select-text">
                <pre><code>{currentCategory.snippetCode}</code></pre>
              </div>

              {/* Sandbox controls overlay footer */}
              <div className="mt-auto px-5 py-3 border-t border-slate-900/80 bg-slate-900/10 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  SYNTAX_VALIDATED_OK
                </span>
                <span>CTRL+C to duplicate snippet</span>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
