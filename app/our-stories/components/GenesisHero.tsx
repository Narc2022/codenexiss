export default function GenesisHero() {
  return (
    <header className="relative overflow-hidden px-6 lg:px-10 pt-8 bg-[#f7f9fb]">
      {/* Subtle bg glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-32 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[120px]" />
        <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-[1920px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* ── Left column ── */}
        <div className="lg:col-span-7 z-10 space-y-8">
          {/* Tag */}
          <div className="inline-block px-3 py-1 bg-indigo-100 rounded-full">
            <span className="text-[10px] font-mono font-bold text-indigo-800 uppercase tracking-[0.2em]">
              01 // THE GENESIS
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-6xl md:text-8xl font-headline font-bold text-slate-900 leading-none tracking-tighter">
            Crafting the{" "}
            <em className="not-italic text-teal-700 italic font-headline">Neural</em>
            {" "}Infrastructure.
          </h1>

          {/* Body */}
          <p className="text-lg md:text-xl text-slate-500 max-w-2xl font-light leading-relaxed">
            CodeNexiss didn&apos;t start in a garage. It started in a research lab at the
            intersection of quantum linguistics and high-availability systems. We build the
            &ldquo;ghosts&rdquo; that run the world&apos;s most resilient networks.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <button className="flex items-center gap-3 px-8 py-4 rounded-lg font-headline font-bold text-white shadow-xl hover:scale-[1.02] transition-transform bg-gradient-to-br from-teal-600 via-indigo-600 to-purple-600">
              EXPLORE THE STACK
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
            <button className="px-8 py-4 rounded-lg font-headline font-bold text-teal-700 bg-slate-200 hover:bg-slate-300 transition-colors">
              OUR PROTOCOLS
            </button>
          </div>
        </div>

        {/* ── Right column ── */}
        <div className="lg:col-span-5 relative">
          {/* Image card */}
          <div className="aspect-square rounded-xl relative overflow-hidden border border-[rgba(199,196,216,0.2)] p-4 bg-slate-100">
            {/* Abstract SVG stand-in (no external images) */}
            <div className="w-full h-full rounded-lg overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative">
              <svg
                viewBox="0 0 500 500"
                className="absolute inset-0 w-full h-full"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Flowing crystalline paths */}
                <path d="M60 250 C 120 80 250 420 400 180" stroke="url(#p1)" strokeWidth="3" opacity="0.7" />
                <path d="M40 300 C 140 60 280 440 460 160" stroke="url(#p2)" strokeWidth="2" opacity="0.5" />
                <path d="M100 200 C 180 350 300 100 440 300" stroke="url(#p3)" strokeWidth="2.5" opacity="0.6" />
                <path d="M80 350 C 200 120 330 420 480 200" stroke="url(#p4)" strokeWidth="1.5" opacity="0.4" />
                <path d="M20 180 C 160 400 320 60 480 340" stroke="url(#p5)" strokeWidth="1" opacity="0.35" />
                {/* Glow orbs */}
                <circle cx="250" cy="200" r="60" fill="url(#orb1)" opacity="0.15" />
                <circle cx="350" cy="320" r="40" fill="url(#orb2)" opacity="0.1" />
                <defs>
                  <linearGradient id="p1" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#00daf3" />
                    <stop offset="100%" stopColor="#413de4" />
                  </linearGradient>
                  <linearGradient id="p2" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#413de4" />
                    <stop offset="100%" stopColor="#8025ce" />
                  </linearGradient>
                  <linearGradient id="p3" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#8025ce" />
                    <stop offset="100%" stopColor="#00daf3" />
                  </linearGradient>
                  <linearGradient id="p4" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#9cf0ff" />
                    <stop offset="100%" stopColor="#c1c1ff" />
                  </linearGradient>
                  <linearGradient id="p5" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#ddb7ff" />
                    <stop offset="100%" stopColor="#9cf0ff" />
                  </linearGradient>
                  <radialGradient id="orb1">
                    <stop offset="0%" stopColor="#413de4" />
                    <stop offset="100%" stopColor="transparent" />
                  </radialGradient>
                  <radialGradient id="orb2">
                    <stop offset="0%" stopColor="#8025ce" />
                    <stop offset="100%" stopColor="transparent" />
                  </radialGradient>
                </defs>
              </svg>
            </div>

            {/* Latency stat chip */}
            <div className="absolute bottom-8 right-8 bg-white/80 backdrop-blur-md p-5 rounded-lg border border-[rgba(199,196,216,0.25)] max-w-[190px]">
              <span className="font-mono text-[10px] text-teal-600 block mb-2 uppercase tracking-wider">
                LATENCY_INDEX
              </span>
              <div className="h-1 w-full bg-slate-200 rounded-full mb-3 overflow-hidden">
                <div className="h-full w-3/4 bg-indigo-600 rounded-full" />
              </div>
              <span className="font-headline font-bold text-2xl leading-none text-slate-900">
                0.002ms
              </span>
            </div>
          </div>

          {/* Decorative geometry */}
          <div className="absolute -top-10 -right-10 w-40 h-40 border border-slate-300/20 rounded-full pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-60 h-60 border border-slate-300/20 rotate-45 pointer-events-none" />
        </div>
      </div>
    </header>
  );
}
