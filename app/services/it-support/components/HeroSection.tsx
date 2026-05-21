"use client";

export default function HeroSection() {
  return (
    <section className="max-w-[1920px] mx-auto px-6 lg:px-10 pt-8flex items-center overflow-hidden bg-surface">
      {/* Ambient blobs */}
      <div className="absolute top-1/4 -right-32 w-[480px] h-[480px] bg-secondary/8 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-32 w-[480px] h-[480px] bg-primary/8 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1920px] mx-auto px-2 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left copy */}
        <div className="z-10">
          <div className="inline-block px-3 py-1 mb-6 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label text-[10px] uppercase tracking-[0.2em] font-bold">
            Enterprise Infrastructure v2.4
          </div>

          <h1 className="font-display text-5xl md:text-7xl font-bold text-on-background leading-tight mb-6">
            Architecting{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #5D5CFF 0%, #8025ce 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Digital
              <br />
              Infrastructure
            </span>
          </h1>

          <p className="font-body text-on-surface-variant text-base leading-relaxed mb-10 max-w-md">
            Mission-critical IT support and infrastructure management for the
            modern enterprise. We ensure your systems are resilient, secure, and
            optimized for peak performance.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="group flex items-center gap-2 bg-secondary text-white px-7 py-3.5 rounded-lg font-headline font-bold uppercase tracking-widest text-xs shadow-[0_8px_32px_rgba(93,92,255,0.35)] hover:shadow-[0_12px_48px_rgba(93,92,255,0.5)] hover:scale-[1.03] active:scale-95 transition-all">
              Deploy Infrastructure
              <span className="material-symbols-outlined text-base group-hover:translate-x-0.5 transition-transform">
                arrow_forward
              </span>
            </button>
            <button className="px-7 py-3.5 rounded-lg font-headline font-bold uppercase tracking-widest text-xs text-on-surface border border-outline-variant hover:border-secondary hover:text-secondary transition-all">
              Security Audit
            </button>
          </div>
        </div>

        {/* Right — server monitor card */}
        <div className="relative z-10">
          <div
            className="rounded-2xl overflow-hidden shadow-[0_24px_80px_rgba(25,28,30,0.12)] border border-outline-variant/20"
            style={{ background: "rgba(255,255,255,0.7)", backdropFilter: "blur(12px)" }}
          >
            {/* Card chrome bar */}
            <div className="flex items-center justify-between px-5 py-3 border-b border-surface-container bg-surface-container-low">
              <div className="flex gap-1.5">
                {["bg-red-400", "bg-yellow-400", "bg-green-400"].map((c) => (
                  <span key={c} className={`w-2.5 h-2.5 rounded-full ${c}`} />
                ))}
              </div>
              <span className="font-technical text-[9px] text-outline tracking-widest uppercase">
                CORE_SYSTEM_ACTIVE // STABLE
              </span>
            </div>

            {/* Server rack visual */}
            <div className="relative h-64 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center overflow-hidden">
              {/* Grid overlay */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(93,92,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(93,92,255,0.4) 1px, transparent 1px)",
                  backgroundSize: "32px 32px",
                }}
              />
              {/* Rack units */}
              <div className="space-y-2 w-48">
                {[0.9, 0.6, 1, 0.75, 0.5].map((opacity, i) => (
                  <div
                    key={i}
                    className="h-6 rounded bg-slate-700 border border-slate-600 flex items-center px-3 gap-2"
                    style={{ opacity }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    <div className="flex-1 h-1 bg-slate-600 rounded" />
                    <div className="h-1 w-6 bg-secondary/60 rounded" />
                  </div>
                ))}
              </div>

              {/* Floating metric: load */}
              <div className="absolute top-6 left-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-3 py-2">
                <p className="font-technical text-[8px] text-white/50 uppercase tracking-widest">
                  NODE_01
                </p>
                <p className="font-technical text-sm font-bold text-white">
                  89.4% LOAD
                </p>
              </div>

              {/* Floating metric: latency */}
              <div className="absolute bottom-6 right-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-3 py-2">
                <p className="font-technical text-[8px] text-white/50 uppercase tracking-widest">
                  LATENCY
                </p>
                <p className="font-technical text-sm font-bold text-green-400">
                  12ns
                </p>
              </div>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 divide-x divide-surface-container">
              {[
                { label: "Uptime", value: "99.99%", color: "text-primary" },
                { label: "Nodes", value: "48 Active", color: "text-secondary" },
                { label: "Threats", value: "0 Detected", color: "text-green-600" },
              ].map((s) => (
                <div key={s.label} className="py-4 px-5">
                  <p className="font-label text-[8px] uppercase tracking-widest text-on-surface-variant mb-0.5">
                    {s.label}
                  </p>
                  <p className={`font-technical text-sm font-bold ${s.color}`}>
                    {s.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
