"use client";

export default function GraphicDesignHero() {
  return (
    <section className="max-w-[1920px] mx-auto px-6 lg:px-10 pt-8">
      {/* Soft radial background bloom */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-gradient-to-b from-secondary/5 via-tertiary/5 to-transparent blur-3xl" />
      </div>

      <div className="max-w-[1920px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* ── Left copy ── */}
        <div className="z-10">
          {/* Version badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-container rounded-full mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
            <span className="font-mono text-[11px] text-secondary font-bold uppercase tracking-widest">
              Aura Synthetix v1.0
            </span>
          </div>

          <h1 className="font-headline text-6xl md:text-7xl font-bold tracking-tight leading-[1.05] mb-8">
            Visual
            <br />
            Identity
            <br />
            <span className="text-prism">Engineering</span>
          </h1>

          <p className="text-on-surface-variant text-lg leading-relaxed mb-10 max-w-md">
            Transforming brands with surgical precision. We blend technical rigor
            with artistic intuition to construct immersive digital and physical
            identities.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="prism-gradient text-white px-7 py-3.5 rounded-lg font-headline font-bold text-sm tracking-tight shadow-lg hover:opacity-90 transition-opacity">
              Initiate Project
            </button>
            <button className="px-7 py-3.5 rounded-lg border border-outline-variant font-headline font-bold text-sm text-on-surface hover:bg-surface-container transition-colors">
              View Lab Portfolio
            </button>
          </div>
        </div>

        {/* ── Right visual ── */}
        <div className="relative">
          {/* Dark canvas card */}
          <div className="relative rounded-2xl bg-slate-900 overflow-hidden aspect-[4/3] flex items-center justify-center">
            {/* Abstract joystick / design tool illustration */}
            <svg
              viewBox="0 0 340 260"
              className="w-3/4 text-teal-500"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Base */}
              <rect
                x="60" y="190" width="220" height="28" rx="6"
                fill="currentColor" opacity="0.8"
              />
              {/* Stand body */}
              <rect
                x="130" y="100" width="80" height="95" rx="4"
                fill="currentColor" opacity="0.6"
              />
              {/* Head / top block */}
              <rect
                x="100" y="60" width="140" height="48" rx="8"
                fill="currentColor" opacity="0.9"
              />
              {/* Shaft */}
              <rect
                x="164" y="28" width="12" height="38" rx="4"
                fill="currentColor"
              />
              {/* Knob */}
              <rect
                x="146" y="10" width="48" height="22" rx="8"
                fill="currentColor"
              />
              {/* Side detail lines */}
              <line x1="110" y1="80" x2="110" y2="100" stroke="white" strokeWidth="2" opacity="0.3" />
              <line x1="230" y1="80" x2="230" y2="100" stroke="white" strokeWidth="2" opacity="0.3" />
            </svg>

            {/* Metric badge */}
            <div className="absolute bottom-5 right-5 glass-panel rounded-xl p-4 max-w-[220px]">
              <p className="font-mono text-[10px] text-secondary uppercase tracking-widest mb-1">
                Project_Metric: #01
              </p>
              <p className="font-body text-slate-700 text-sm leading-snug">
                99.8% pixel-perfect precision achieved in recent brand deployments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
