// ──────────────────────────────────────────────────────
// Icon components (inline SVG, no external deps)
// ──────────────────────────────────────────────────────
function IconDynamic() {
  return (
    <svg className="w-9 h-9 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
        d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
    </svg>
  );
}

function IconSecurity() {
  return (
    <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  );
}

function IconInfinite() {
  return (
    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
    </svg>
  );
}

// ──────────────────────────────────────────────────────
export default function MissionProtocols() {
  return (
    <section className="pt-24 px-6 bg-slate-50">
      <div className=" max-w-[1920px] mx-auto px-6 lg:px-4">

        {/* Section header */}
        <div className="mb-16">
          <span className="font-mono text-xs text-purple-600 uppercase tracking-widest mb-2 block">
            02 // STRATEGIC_INTENT
          </span>
          <h2 className="text-4xl font-headline font-bold text-slate-900">Mission Protocols</h2>
        </div>

        {/* Bento grid — 4 columns on lg */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">

          {/* ── Large feature card (2 cols × 2 rows) ── */}
          <div className="md:col-span-2 lg:row-span-2 relative bg-white rounded-xl border border-[rgba(199,196,216,0.25)] p-8 flex flex-col justify-between group overflow-hidden shadow-sm">
            {/* Hover orb */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700 pointer-events-none" />

            <div>
              <div className="mb-6"><IconDynamic /></div>
              <h3 className="text-3xl font-headline font-bold mb-4 text-slate-900">
                Autonomous Scalability
              </h3>
              <p className="text-slate-500 leading-relaxed">
                We develop systems that don&apos;t just react to load—they predict it. Our
                proprietary Nexus-Engine recalibrates core architecture in real-time without human
                intervention.
              </p>
            </div>

            {/* Region badges */}
            <div className="mt-8 pt-8 border-t border-slate-200/30">
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  {["bg-slate-300", "bg-teal-200", "bg-indigo-200"].map((c, i) => (
                    <div key={i} className={`w-8 h-8 rounded-full border-2 border-white ${c}`} />
                  ))}
                </div>
                <span className="font-mono text-[10px] text-slate-400 uppercase tracking-wider">
                  Active in 14 Regions
                </span>
              </div>
            </div>
          </div>

          {/* ── Zero-Trust DNA ── */}
          <div className="bg-white rounded-xl border border-[rgba(199,196,216,0.25)] p-8 hover:bg-slate-50 transition-colors group shadow-sm">
            <div className="mb-4 group-hover:rotate-12 transition-transform inline-block">
              <IconSecurity />
            </div>
            <h4 className="font-headline font-bold text-xl mb-2 text-slate-900">Zero-Trust DNA</h4>
            <p className="text-sm text-slate-500 leading-relaxed">
              Security isn&apos;t a layer; it&apos;s the foundation of every line of code we ship.
            </p>
          </div>

          {/* ── Hyper-Redundancy ── */}
          <div className="bg-white rounded-xl border border-[rgba(199,196,216,0.25)] p-8 hover:bg-slate-50 transition-colors group shadow-sm">
            <div className="mb-4 group-hover:scale-110 transition-transform inline-block">
              <IconInfinite />
            </div>
            <h4 className="font-headline font-bold text-xl mb-2 text-slate-900">Hyper-Redundancy</h4>
            <p className="text-sm text-slate-500 leading-relaxed">
              Our clusters maintain 99.9999% uptime through decentralized node consensus.
            </p>
          </div>

          {/* ── Architect's Manifesto (dark, 2 cols) ── */}
          <div className="md:col-span-2 bg-slate-900 rounded-xl p-8 relative overflow-hidden shadow-sm">
            <div className="relative z-10">
              <h4 className="text-white font-headline font-bold text-2xl mb-5">
                The Architect&apos;s Manifesto
              </h4>
              <div className="font-mono text-xs text-slate-400 leading-[2] space-y-0.5">
                <p>// PROTOCOL_01: Elegance is mandatory.</p>
                <p>// PROTOCOL_02: Performance is the only metric.</p>
                <p>// PROTOCOL_03: Humanity drives the machine.</p>
              </div>
            </div>

            {/* Watermark terminal icon */}
            <div className="absolute -right-10 -bottom-10 opacity-[0.08] pointer-events-none select-none">
              <svg className="w-52 h-52 text-teal-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V6h16v12zM6 10h2v2H6v-2zm0 4h8v2H6v-2zm10 0h2v2h-2v-2zm-6-4h8v2h-8v-2z" />
              </svg>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
