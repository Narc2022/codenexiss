"use client";

export default function DigitalMarketingHero() {
  return (
    <section className="relative px-8 py-24 md:py-6 overflow-hidden bg-surface">
      <div className="max-w-[1920px] mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-12">

        {/* ── Left copy ── */}
        <div className="flex-1 z-10 lg:mt-[31px]">
          {/* Protocol badge */}
          <div className="inline-flex items-center px-3 py-1 bg-secondary-fixed rounded-full mb-6 gap-2">
            <svg className="w-4 h-4 text-on-secondary-fixed" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.955 11.955 0 003 12c0 6.627 5.373 12 12 12s12-5.373 12-12c0-2.117-.549-4.107-1.514-5.838A11.955 11.955 0 0012 2.964z" />
            </svg>
            <span className="font-headline text-[10px] uppercase tracking-[0.1em] text-on-secondary-fixed font-bold">
              Protocol v4.0 Active
            </span>
          </div>

          <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tight text-on-surface mb-6 leading-[1.05]">
            Digital Marketing{" "}
            <span className="text-prism">Systems</span>
          </h1>

          <p className="text-xl text-on-surface-variant max-w-xl leading-relaxed mb-10">
            Synthesize high-velocity growth through our neural-integrated
            marketing protocols. We engineer data-driven visibility using
            proprietary AI modeling for peak market dominance.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="px-8 py-4 prismatic-gradient text-white font-headline font-bold uppercase tracking-widest rounded-lg flex items-center gap-3 hover:opacity-90 transition-all shadow-xl shadow-secondary/20">
              Initiate Protocol
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
              </svg>
            </button>
            <button className="px-8 py-4 bg-surface-container-highest text-primary font-headline font-bold uppercase tracking-widest rounded-lg transition-all hover:bg-surface-container-high">
              View Lab Reports
            </button>
          </div>
        </div>

        {/* ── Right visual ── */}
        <div className="flex-1 relative w-full aspect-square max-w-lg">
          {/* Glow bloom */}
          <div className="absolute inset-0 bg-secondary/10 blur-[100px] rounded-full pointer-events-none" />

          {/* Neural network illustration */}
          <div className="relative z-10 w-full h-full rounded-xl overflow-hidden border border-outline-variant/20 shadow-2xl bg-slate-900">
            <svg viewBox="0 0 500 500" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="500" height="500" fill="#0f172a" />
              {/* Connection lines */}
              {[
                [80,120,220,200],[80,120,180,350],[80,120,350,80],[220,200,380,280],[220,200,350,80],
                [180,350,380,280],[180,350,420,420],[350,80,420,420],[380,280,420,420],
                [120,250,220,200],[120,250,180,350],[260,150,350,80],[260,150,220,200],
              ].map(([x1,y1,x2,y2],i) => (
                <line key={i} x1={x1} y1={y1} x2={x2} y2={y2}
                  stroke="url(#lg)" strokeWidth="0.8" opacity="0.4" />
              ))}
              <defs>
                <linearGradient id="lg" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#006471" />
                  <stop offset="50%" stopColor="#413de4" />
                  <stop offset="100%" stopColor="#8025ce" />
                </linearGradient>
              </defs>
              {/* Nodes */}
              {[
                [80,120,6,"#006471"],[220,200,8,"#413de4"],[180,350,6,"#8025ce"],
                [350,80,5,"#006471"],[380,280,7,"#413de4"],[420,420,6,"#8025ce"],
                [120,250,5,"#413de4"],[260,150,5,"#006471"],
              ].map(([cx,cy,r,fill],i) => (
                <g key={i}>
                  <circle cx={cx} cy={cy} r={Number(r)+8} fill={String(fill)} opacity="0.12" />
                  <circle cx={cx} cy={cy} r={r} fill={String(fill)} opacity="0.9" />
                </g>
              ))}
            </svg>
          </div>

          {/* Network traffic mini-chart badge */}
          <div className="absolute -bottom-5 -left-5 glass-panel p-5 rounded-lg shadow-xl z-20 border border-white/40">
            <div className="font-mono text-[10px] text-secondary mb-2 uppercase tracking-widest">
              Network_Traffic_Monitor
            </div>
            <div className="h-12 w-32 flex items-end gap-1">
              {[40, 70, 50, 90, 60].map((h, i) => (
                <div
                  key={i}
                  className="bg-secondary rounded-t-sm flex-1"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
