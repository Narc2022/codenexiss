"use client";

const diagnostics = [
  { label: "Automation Efficiency", value: "92%", percent: 92, color: "bg-primary", textColor: "text-primary" },
  { label: "Latency Index", value: "12ms", percent: 15, color: "bg-secondary", textColor: "text-secondary" },
  { label: "System Health", value: "100%", percent: 100, color: "bg-tertiary", textColor: "text-tertiary" },
];

export default function AIAutomationHero() {
  return (
    <section className="max-w-[1920px] mx-auto px-6 lg:px-10 pt-8 pb-16 relative overflow-hidden">
      {/* Prismatic bloom */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
        <div className="w-full h-full prismatic-gradient filter blur-3xl rounded-full translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="max-w-[1920px] mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">

          {/* ── Left copy ── */}
          <div className="w-full lg:w-3/5">
            {/* Status badge */}
            <div className="inline-block px-3 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed text-[10px] font-headline uppercase tracking-[0.2em] mb-6">
              System Integration Active
            </div>

            <h1 className="text-5xl lg:text-7xl font-headline font-bold text-on-surface tracking-tight leading-[1.1] mb-8">
              Intelligent <br />
              <span className="text-transparent bg-clip-text prismatic-gradient">
                Systems Engineering
              </span>
            </h1>

            <p className="text-xl text-on-surface-variant max-w-xl mb-10 leading-relaxed">
              AI automation is transforming the way modern businesses operate. Our AI Automation Services help you streamline workflows, reduce manual work, and improve efficiency using smart, AI-powered systems that save time and increase productivity.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="prismatic-gradient text-white px-8 py-4 rounded-lg font-headline font-bold uppercase tracking-widest text-sm shadow-xl shadow-secondary/20 hover:scale-[1.02] transition-transform">
                Initiate System Integration
              </button>
              <button className="bg-surface-container-highest text-primary px-8 py-4 rounded-lg font-headline font-bold uppercase tracking-widest text-sm hover:bg-surface-container-high transition-colors">
                View Documentation
              </button>
            </div>
          </div>

          {/* ── Right diagnostics panel ── */}
          <div className="w-full lg:w-2/5">
            <div className="relative p-1 bg-gradient-to-br from-outline-variant/20 to-transparent rounded-xl">
              <div className="bg-surface-container-lowest p-8 rounded-lg shadow-2xl border border-white/50">
                {/* Panel header */}
                <div className="flex justify-between items-center mb-8">
                  <span className="font-headline text-[10px] uppercase tracking-widest text-outline">
                    Real-time Diagnostics
                  </span>
                  <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    <div className="w-2 h-2 rounded-full bg-secondary opacity-50" />
                  </div>
                </div>

                {/* Metric rows */}
                <div className="space-y-6">
                  {diagnostics.map((d) => (
                    <div key={d.label}>
                      <div className="flex justify-between text-xs font-mono mb-2 text-on-surface-variant">
                        <span>{d.label}</span>
                        <span className={`${d.textColor} font-bold`}>{d.value}</span>
                      </div>
                      <div className="h-1.5 bg-surface-container rounded-full overflow-hidden">
                        <div
                          className={`h-full ${d.color} rounded-full transition-all duration-1000`}
                          style={{ width: `${d.percent}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating core uptime badge */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 glass-panel border border-white/40 rounded-xl p-4 shadow-lg flex flex-col justify-center items-center">
                {/* Memory icon */}
                <svg className="w-8 h-8 text-primary mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" />
                </svg>
                <span className="font-mono text-[10px] text-outline">CORE_UPTIME</span>
                <span className="font-mono text-xs font-bold">99.998%</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
