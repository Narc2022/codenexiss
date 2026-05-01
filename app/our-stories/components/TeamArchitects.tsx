"use client";

// ── Types ────────────────────────────────────────────
interface TeamMember {
  name: string;
  role: string;
  initials: string;
  accentFrom: string;
  accentTo: string;
  actions: { label: string; icon: React.ReactNode }[];
}

// ── Inline icon helpers ──────────────────────────────
const ShareIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
      d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
  </svg>
);
const DbIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
      d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
  </svg>
);
const HubIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
      d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
  </svg>
);
const BrainIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
  </svg>
);
const LockIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
  </svg>
);
const CloudIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
      d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
  </svg>
);
const ChipIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
      d="M9 3H7a2 2 0 00-2 2v2M9 3h6M9 3V1m6 2h2a2 2 0 012 2v2M15 3V1m6 6v6m0 0v2a2 2 0 01-2 2h-2m0 0H9m6 0V21m-6-2H7a2 2 0 01-2-2v-2m0 0V9m0 6H3M9 21v-2M9 9H3" />
  </svg>
);

// ── Data ─────────────────────────────────────────────
const team: TeamMember[] = [
  {
    name: "Elias Thorne",
    role: "Lead Systems Engineer",
    initials: "ET",
    accentFrom: "from-slate-700",
    accentTo: "to-slate-900",
    actions: [
      { label: "share", icon: <ShareIcon /> },
      { label: "db", icon: <DbIcon /> },
      { label: "hub", icon: <HubIcon /> },
    ],
  },
  {
    name: "Dr. Sarah Chen",
    role: "Neural Architect",
    initials: "SC",
    accentFrom: "from-teal-700",
    accentTo: "to-teal-900",
    actions: [
      { label: "share", icon: <ShareIcon /> },
      { label: "brain", icon: <BrainIcon /> },
      { label: "chip", icon: <ChipIcon /> },
    ],
  },
  {
    name: "Marcus Vane",
    role: "Security Protocol Lead",
    initials: "MV",
    accentFrom: "from-indigo-700",
    accentTo: "to-indigo-900",
    actions: [
      { label: "share", icon: <ShareIcon /> },
      { label: "lock", icon: <LockIcon /> },
      { label: "hub", icon: <HubIcon /> },
    ],
  },
  {
    name: "Julianna Stark",
    role: "Core Infrastructure Dev",
    initials: "JS",
    accentFrom: "from-purple-700",
    accentTo: "to-purple-900",
    actions: [
      { label: "share", icon: <ShareIcon /> },
      { label: "hub", icon: <HubIcon /> },
      { label: "cloud", icon: <CloudIcon /> },
    ],
  },
];

// ── Component ─────────────────────────────────────────
export default function TeamArchitects() {
  return (
    <section className="py-24 px-6 bg-[#f7f9fb]">
      <div className="max-w-[1920px] mx-auto px-6 lg:px-4">
        {/* Header row */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-xl">
            <span className="font-mono text-xs text-teal-600 uppercase tracking-[0.3em] mb-4 block">
              03 // HUMAN_COMPUTATION
            </span>
            <h2 className="text-5xl font-headline font-bold text-slate-900 tracking-tight mb-5">
              Meet the Architects
            </h2>
            <p className="text-slate-500 leading-relaxed">
              Our team is a collective of systems theorists, neural designers, and kernel hackers
              focused on the next decade of infrastructure.
            </p>
          </div>

          {/* Carousel nav */}
          <div className="hidden md:flex gap-3 mb-2 shrink-0">
            <button className="w-12 h-12 rounded-full border border-[rgba(199,196,216,0.4)] flex items-center justify-center text-slate-600 hover:bg-slate-100 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button className="w-12 h-12 rounded-full bg-slate-900 text-white flex items-center justify-center hover:bg-teal-700 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Team grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member) => (
            <div key={member.name} className="group">

              {/* Photo card */}
              <div className="aspect-[4/5] rounded-xl mb-6 overflow-hidden relative bg-slate-200">
                {/* Stylised avatar – grayscale base, colour on hover */}
                <div
                  className={`w-full h-full bg-gradient-to-b ${member.accentFrom} ${member.accentTo}
                    flex items-center justify-center
                    grayscale group-hover:grayscale-0
                    group-hover:scale-105
                    transition-all duration-500`}
                >
                  <span className="text-white/20 font-headline font-black text-8xl select-none">
                    {member.initials}
                  </span>
                </div>

                {/* ACTIVE_STATUS slide-up badge */}
                <div className="absolute bottom-0 left-0 w-full p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <div className="bg-white/90 backdrop-blur-md p-3 rounded-lg flex justify-between items-center border border-[rgba(199,196,216,0.3)]">
                    <span className="font-mono text-[10px] tracking-tighter uppercase font-bold text-indigo-600">
                      ACTIVE_STATUS
                    </span>
                    <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)]" />
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="px-2">
                <h5 className="font-headline font-bold text-xl text-slate-900 mb-1">
                  {member.name}
                </h5>
                <p className="font-mono text-[11px] text-teal-600 uppercase tracking-widest mb-4">
                  {member.role}
                </p>
                <div className="flex gap-4 text-slate-500 opacity-50 hover:opacity-100 transition-opacity">
                  {member.actions.map((a) => (
                    <button
                      key={a.label}
                      aria-label={a.label}
                      className="hover:text-indigo-600 transition-colors"
                    >
                      {a.icon}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
