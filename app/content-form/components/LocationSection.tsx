function LocationPinIcon() {
  return (
    <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
    </svg>
  );
}

export default function LocationSection() {
  return (
    <section className="max-w-7xl mx-auto px-8 mt-20">
      <div className="grid md:grid-cols-2 gap-12 items-center">

        {/* ── Left copy ── */}
        <div className="space-y-6">
          <div className="font-mono text-xs text-primary font-bold">
            GLOBAL_NODE_NETWORK_STATUS: ACTIVE
          </div>
          <h2 className="font-headline text-3xl font-bold tracking-tight">
            Our Physical Presence in the{" "}
            <span className="text-secondary">Silicon Nexus</span>
          </h2>
          <p className="text-on-surface-variant leading-relaxed">
            Visit our primary research node in San Francisco for high-level
            protocol discussions and technical architectural consultations.
          </p>

          {/* Address card */}
          <div className="flex gap-4 p-4 rounded-xl border border-outline-variant/30 bg-surface-container-low">
            <LocationPinIcon />
            <div>
              <div className="text-sm font-bold">Silicon Nexus SF</div>
              <p className="text-xs text-on-surface-variant mt-1">
                450 Mission St, San Francisco, CA 94105
              </p>
            </div>
          </div>
        </div>

        {/* ── Right map placeholder ── */}
        <div className="relative aspect-video rounded-3xl overflow-hidden glass-panel flex items-center justify-center">
          <div className="absolute inset-0 bg-primary/5" />

          {/* Corner scan lines */}
          <div className="absolute top-4 left-4 w-10 h-[1px] bg-outline-variant/30" />
          <div className="absolute top-4 left-4 h-10 w-[1px] bg-outline-variant/30" />
          <div className="absolute bottom-4 right-4 w-10 h-[1px] bg-outline-variant/30" />
          <div className="absolute bottom-4 right-4 h-10 w-[1px] bg-outline-variant/30" />

          {/* Scan animation */}
          <div className="relative z-10 text-center space-y-3">
            <svg
              className="w-16 h-16 text-primary/40 mx-auto animate-pulse"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              <circle cx="12" cy="12" r="10" strokeDasharray="4 2" />
            </svg>
            <div className="font-mono text-[10px] text-outline-variant tracking-widest uppercase">
              SCANNING_LOCATION_COORDINATES...
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
