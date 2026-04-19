"use client";

const metrics = [
  { value: "34%", label: "Efficiency Gain" },
  { value: "1.2M", label: "Daily RW/S" },
  { value: "99%", label: "Data Accuracy" },
];

export default function OperationalBand() {
  return (
    <section className="mb-24 rounded-2xl overflow-hidden bg-slate-950 relative">
      {/* Background noise texture */}
      <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml,%3Csvg viewBox%3D%220 0 200 200%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cfilter id%3D%22n%22%3E%3CfeTurbulence type%3D%22fractalNoise%22 baseFrequency%3D%220.9%22 numOctaves%3D%224%22 stitchTiles%3D%22stitch%22%2F%3E%3C%2Ffilter%3E%3Crect width%3D%22100%25%22 height%3D%22100%25%22 filter%3D%22url(%23n)%22%2F%3E%3C%2Fsvg%3E')]" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-0">
        {/* Left: Text Content */}
        <div className="p-12 lg:p-16 flex flex-col justify-between">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary mb-8">
              Success // Global_Logistics
            </div>
            <h2 className="font-headline text-4xl md:text-5xl font-bold text-white leading-tight mb-8">
              Optimizing supply chains across{" "}
              <span className="text-primary">4 continents.</span>
            </h2>
            <p className="text-slate-400 text-base leading-relaxed mb-10 max-w-md">
              For &apos;Nexus Global&apos;, we deployed a prismatic command portal that
              reduced logistics bottlenecking by 34% through AI-driven predictive
              rerouting and automated port integration.
            </p>
          </div>

          {/* Metrics */}
          <div>
            <div className="flex flex-wrap gap-10 mb-10">
              {metrics.map((m) => (
                <div key={m.label}>
                  <div className="font-headline text-4xl font-bold text-primary mb-1">
                    {m.value}
                  </div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-slate-500">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>

            <button className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-white hover:text-primary transition-colors">
              Read Full Archive
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>

        {/* Right: Logo / Visual */}
        <div className="relative flex items-center justify-center p-12 lg:p-16 border-l border-white/5">
          {/* Avatar illustration placeholder */}
          <div className="relative">
            <div className="w-48 h-48 rounded-full bg-gradient-to-b from-slate-700 to-slate-900 flex items-center justify-center overflow-hidden">
              {/* Abstract face silhouette */}
              <svg viewBox="0 0 200 220" className="w-full h-full" fill="none">
                <ellipse cx="100" cy="90" rx="55" ry="65" fill="#c8a96e" />
                <ellipse cx="100" cy="200" rx="90" ry="60" fill="#8B7355" />
                <ellipse cx="100" cy="85" rx="45" ry="55" fill="#d4af7a" />
                {/* hat */}
                <ellipse cx="100" cy="35" rx="58" ry="12" fill="#c8a028" />
                <rect x="42" y="10" width="116" height="30" fill="#c8a028" rx="2" />
                {/* eyes */}
                <ellipse cx="82" cy="85" rx="8" ry="5" fill="#2d1a0e" />
                <ellipse cx="118" cy="85" rx="8" ry="5" fill="#2d1a0e" />
              </svg>
            </div>

            {/* Logo badge */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-slate-900 border border-white/10 px-6 py-3 rounded-lg flex items-center gap-3 whitespace-nowrap">
              <div className="w-5 h-5 rounded bg-slate-700 flex items-center justify-center">
                <div className="w-2 h-2 bg-slate-400 rounded-sm" />
              </div>
              <span className="font-headline text-xl font-bold text-yellow-400 tracking-widest">
                Logisstiics
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
