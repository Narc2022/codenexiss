"use client";

export default function ServicesHero() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
      {/* Left Content */}
      <div className="lg:col-span-7">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary-container/10 rounded-full mb-6">
          <span className="w-2 h-2 rounded-full bg-secondary" />
          <span className="text-[10px] font-mono uppercase tracking-widest text-secondary font-bold">
            Protocol // Enterprise_Portal_V4
          </span>
        </div>

        <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tight text-on-surface mb-6 leading-[1.1]">
          Custom Enterprise{" "}
          <span className="bg-gradient-to-r from-[#0E6A8A] via-[#3150D6] to-[#8B3DFF] bg-clip-text text-transparent">Portals.</span>
        </h1>

        <p className="text-on-surface-variant text-lg leading-relaxed mb-10 max-w-xl">
          High-precision architecture designed for massive scale. We engineer
          bespoke operational environments that consolidate fragmented data into
          a unified, high-density command center.
        </p>

        <div className="flex flex-wrap gap-4">
          <button className="px-6 py-3 prismatic-gradient text-white font-headline font-bold text-xs uppercase tracking-widest hover:opacity-90 transition-opacity rounded-lg">
            Initialize Project
          </button>
          <button className="px-6 py-3 border border-outline-variant text-on-surface font-headline font-bold text-xs uppercase tracking-widest hover:bg-surface-container transition-colors rounded-lg">
            Technical Docs
          </button>
        </div>
      </div>

      {/* Right Visual */}
      <div className="lg:col-span-5 relative">
        <div className="relative rounded-xl overflow-hidden aspect-square bg-slate-900 flex items-center justify-center">
          {/* Animated orbital rings */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="w-64 h-64 rounded-full border border-secondary/20 animate-spin"
              style={{ animationDuration: "20s" }}
            />
            <div
              className="absolute w-48 h-48 rounded-full border border-primary/30 animate-spin"
              style={{ animationDuration: "14s", animationDirection: "reverse" }}
            />
            <div
              className="absolute w-32 h-32 rounded-full border border-tertiary/30 animate-spin"
              style={{ animationDuration: "8s" }}
            />
            {/* Core glow */}
            <div className="absolute w-16 h-16 rounded-full prismatic-gradient opacity-80 blur-sm" />
          </div>

          {/* Uptime badge */}
          <div className="absolute bottom-4 right-4 glass-dark p-3 rounded-lg ghost-border">
            <div className="font-mono text-[9px] text-slate-400 uppercase mb-1">
              Uptime_Metric
            </div>
            <div className="font-headline text-2xl font-bold text-white">
              99.998%
            </div>
          </div>

          {/* Label */}
          <div className="absolute top-4 left-4 font-mono text-[9px] text-slate-500 uppercase tracking-widest">
            Enterprise Infrastruc...
          </div>
        </div>
      </div>
    </section>
  );
}
