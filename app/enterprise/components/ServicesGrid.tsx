"use client";

const features = [
  {
    id: "modular",
    icon: (
      <svg className="w-6 h-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
      </svg>
    ),
    title: "Modular Architecture",
    description:
      "Decoupled frontend components that interface with any legacy backend via a secure GraphQL orchestration layer. Scale modules independently without system downtime.",
    highlight: false,
    span: "col-span-1",
  },
  {
    id: "ai-search",
    icon: (
      <svg className="w-6 h-6 text-tertiary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    ),
    title: "AI Search",
    description:
      "Vector-based semantic search processing across 500+ data nodes in milliseconds.",
    highlight: false,
    span: "col-span-1",
    label: "Q_▲RK",
  },
  {
    id: "zero-trust",
    icon: (
      <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.955 11.955 0 003 12c0 6.627 5.373 12 12 12s12-5.373 12-12c0-2.117-.549-4.107-1.514-5.838A11.955 11.955 0 0012 2.964z" />
      </svg>
    ),
    title: "Zero-Trust Auth",
    description:
      "Continuous verification protocols including hardware security keys and biometric mesh integration.",
    highlight: false,
    span: "col-span-1",
  },
  {
    id: "telemetry",
    icon: null,
    title: "Real-time Telemetry",
    description:
      "Live websocket pipelines delivering sub-50ms latency updates to dashboard visualizers.",
    highlight: true,
    span: "col-span-2",
    stats: { latency: "12ms", packetLoss: "0.00%" },
  },
];

export default function ServicesGrid() {
  return (
    <section className="mb-24">
      {/* Section header */}
      <div className="flex items-center justify-between mb-12">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-outline mb-2">
            Modular Capabilities
          </p>
          <h2 className="font-headline text-4xl font-bold text-on-surface">
            System Architecture
          </h2>
        </div>
        <div className="font-mono text-[10px] text-outline uppercase tracking-widest hidden md:block">
          SYS_STATUS:{" "}
          <span className="text-primary font-bold">OPTIMIZED_CORE</span>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Modular Architecture */}
        <div className="bg-surface-container-low p-8 rounded-xl hover:bg-surface-container transition-colors duration-300 group">
          <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center mb-6 group-hover:bg-secondary/20 transition-colors">
            {features[0].icon}
          </div>
          <h3 className="font-headline text-xl font-bold mb-3">{features[0].title}</h3>
          <p className="text-sm text-on-surface-variant leading-relaxed">{features[0].description}</p>
        </div>

        {/* Center stack icon placeholder */}
        <div className="hidden md:flex items-center justify-center">
          <div className="w-16 h-16 rounded-xl bg-surface-container flex items-center justify-center">
            <svg className="w-8 h-8 text-outline" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3" />
            </svg>
          </div>
        </div>

        {/* AI Search */}
        <div className="bg-surface-container-low p-8 rounded-xl hover:bg-surface-container transition-colors duration-300 group">
          <div className="w-10 h-10 rounded-lg bg-tertiary/10 flex items-center justify-center mb-6 group-hover:bg-tertiary/20 transition-colors">
            {features[1].icon}
          </div>
          <div className="font-mono text-lg font-bold text-tertiary mb-2">Q_▲RK</div>
          <h3 className="font-headline text-xl font-bold mb-3">{features[1].title}</h3>
          <p className="text-sm text-on-surface-variant leading-relaxed">{features[1].description}</p>
        </div>

        {/* Zero-Trust Auth */}
        <div className="bg-surface-container-low p-8 rounded-xl hover:bg-surface-container transition-colors duration-300 group">
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
            {features[2].icon}
          </div>
          <h3 className="font-headline text-xl font-bold mb-3">{features[2].title}</h3>
          <p className="text-sm text-on-surface-variant leading-relaxed">{features[2].description}</p>
        </div>

        {/* Real-time Telemetry — spans 2 cols */}
        <div className="md:col-span-2 relative overflow-hidden prismatic-gradient p-8 rounded-xl">
          <div className="relative z-10">
            <h3 className="font-headline text-xl font-bold text-white mb-3">
              Real-time Telemetry
            </h3>
            <p className="text-sm text-white/80 leading-relaxed max-w-sm mb-6">
              Live websocket pipelines delivering sub-50ms latency updates to dashboard visualizers.
            </p>
            <div className="flex gap-8">
              <div>
                <div className="font-mono text-[9px] uppercase text-white/60 tracking-widest mb-1">Latency</div>
                <div className="font-headline text-2xl font-bold text-white">12ms</div>
              </div>
              <div>
                <div className="font-mono text-[9px] uppercase text-white/60 tracking-widest mb-1">Packet Loss</div>
                <div className="font-headline text-2xl font-bold text-white">0.00%</div>
              </div>
            </div>
          </div>

          {/* Animated data stream lines */}
          <div className="absolute right-0 top-0 h-full w-48 opacity-20 overflow-hidden">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute h-px bg-white animate-pulse"
                style={{
                  top: `${10 + i * 12}%`,
                  right: 0,
                  width: `${40 + Math.random() * 60}%`,
                  animationDelay: `${i * 0.2}s`,
                  animationDuration: `${1.5 + Math.random()}s`,
                }}
              />
            ))}
            <div className="absolute right-4 top-1/2 -translate-y-1/2 font-mono text-[9px] text-white uppercase tracking-widest">
              Streaming Data Vectors...
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
