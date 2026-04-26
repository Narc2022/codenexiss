// ── Icons ─────────────────────────────────────────────
function ClockIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}
function DocIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  );
}
function ArrowIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5}
        d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  );
}

// ── Component ─────────────────────────────────────────
export default function FeaturedWhitepaper() {
  return (
    <section className="relative overflow-hidden rounded-xl bg-slate-100 min-h-[500px] flex items-center p-8 md:p-16">
      {/* Abstract background grid pattern */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Gradient mesh bg */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-200 via-slate-100 to-slate-50" />

        {/* SVG grid / neural net visual */}
        <svg
          className="absolute right-0 top-0 h-full w-1/2 opacity-25"
          viewBox="0 0 600 500"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Node dots */}
          {[
            [80,60],[200,120],[340,80],[480,150],[560,80],
            [120,220],[260,200],[400,240],[520,200],
            [60,340],[180,300],[320,360],[460,320],[580,360],
            [140,440],[300,420],[440,460],
          ].map(([cx,cy],i) => (
            <circle key={i} cx={cx} cy={cy} r={i % 3 === 0 ? 6 : 4}
              fill={i % 4 === 0 ? "#413de4" : i % 4 === 1 ? "#8025ce" : "#006471"}
              opacity={0.6}
            />
          ))}
          {/* Connecting lines */}
          {[
            "M80,60 L200,120 L340,80 L480,150",
            "M200,120 L260,200 L320,360",
            "M340,80 L400,240 L440,460",
            "M480,150 L520,200 L580,360",
            "M120,220 L260,200 L400,240 L460,320",
            "M60,340 L180,300 L320,360 L460,320",
            "M140,440 L300,420 L440,460",
            "M80,60 L120,220 L60,340 L140,440",
            "M560,80 L520,200 L580,360",
          ].map((d, i) => (
            <path key={i} d={d}
              stroke={i % 3 === 0 ? "#413de4" : i % 3 === 1 ? "#8025ce" : "#006471"}
              strokeWidth="1"
              opacity={0.25}
            />
          ))}
        </svg>

        {/* Fade overlay so text is readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-100 via-slate-100/90 to-transparent" />
      </div>

      {/* FEATURED watermark text (top right, matching screenshot) */}
      <div className="absolute top-8 right-8 select-none pointer-events-none hidden lg:block">
        <p className="font-headline font-black text-7xl text-slate-400/20 tracking-tight leading-none">
          FEATURED
        </p>
        <p className="font-mono text-xs text-slate-400/30 uppercase tracking-[0.3em] mt-1">
          WHITEPAPER
        </p>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-2xl space-y-6">
        {/* Tags row */}
        <div className="flex items-center gap-3">
          <span className="bg-indigo-100 text-indigo-800 text-[10px] font-mono font-bold px-2.5 py-1 rounded-full tracking-widest uppercase">
            Research Phase 4
          </span>
          <span className="text-slate-400 text-[10px] font-mono uppercase tracking-tight">
            REF: CN-2024-WP-08
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-headline font-bold text-slate-900 leading-tight">
          Quantization in Distributed Neural Fabric
        </h1>

        {/* Body */}
        <p className="text-xl text-slate-500 leading-relaxed max-w-xl">
          Exploring the boundaries of model compression and sub-millisecond latency in
          decentralized edge computing environments.
        </p>

        {/* CTA row */}
        <div className="flex flex-wrap items-center gap-6 pt-4">
          <button className="flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-teal-600 to-indigo-600 text-white rounded-lg font-headline font-bold hover:scale-[1.02] active:scale-95 transition-transform shadow-lg">
            Read Whitepaper <ArrowIcon />
          </button>
          <div className="flex items-center gap-4 text-slate-400 font-mono text-xs">
            <span className="flex items-center gap-1.5"><ClockIcon /> 14 min read</span>
            <span className="flex items-center gap-1.5"><DocIcon /> 28 Pages</span>
          </div>
        </div>
      </div>
    </section>
  );
}
