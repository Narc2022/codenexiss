// ── Types ─────────────────────────────────────────────
interface Update {
  date: string;
  title: string;
  description: string;
  tags: string[];
  accentColor: string; // tailwind border color
  iconColor: string;   // tailwind text color
}

// ── Data ─────────────────────────────────────────────
const updates: Update[] = [
  {
    date: "24.05.2024",
    title: "Kernel Patch // Obsidian Core",
    description:
      "Resolved thread contention in async-heavy deployment cycles. Improved throughput by 14%.",
    tags: ["Hotfix", "Stable"],
    accentColor: "border-teal-600",
    iconColor: "text-teal-600",
  },
  {
    date: "22.05.2024",
    title: "Schema Evolution v4.2",
    description:
      "Migrating production clusters to the new Vector-Optimized index format.",
    tags: ["Migration"],
    accentColor: "border-indigo-500",
    iconColor: "text-indigo-500",
  },
];

// ── Icon ─────────────────────────────────────────────
function TerminalIcon({ className }: { className?: string }) {
  return (
    <svg className={`w-5 h-5 ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
        d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  );
}
function DbIcon({ className }: { className?: string }) {
  return (
    <svg className={`w-5 h-5 ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
        d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
    </svg>
  );
}

const icons = [
  <TerminalIcon key="t" />,
  <DbIcon key="d" />,
];

// ── Component ─────────────────────────────────────────
export default function SystemUpdates() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between px-2">
        <h2 className="text-sm font-headline font-black uppercase tracking-widest text-slate-900">
          System Updates
        </h2>
        <span className="text-[10px] font-mono text-teal-600 font-bold">V1.0.4 LIVE</span>
      </div>

      {/* Cards */}
      <div className="space-y-4">
        {updates.map((u, i) => (
          <div
            key={u.title}
            className={`p-5 bg-white rounded-xl shadow-[0_4px_30px_rgba(0,0,0,0.02)] border-l-2 ${u.accentColor} group hover:bg-slate-50 transition-all`}
          >
            {/* Date + hover icon */}
            <div className="flex justify-between items-start mb-3">
              <span className="text-[10px] font-mono text-slate-400">{u.date}</span>
              <span className={`${u.iconColor} opacity-0 group-hover:opacity-100 transition-opacity`}>
                {icons[i]}
              </span>
            </div>

            {/* Title */}
            <h3 className="font-headline font-bold text-slate-900 mb-2">{u.title}</h3>

            {/* Description */}
            <p className="text-xs text-slate-500 leading-relaxed mb-4">{u.description}</p>

            {/* Tags */}
            <div className="flex gap-2 flex-wrap">
              {u.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[9px] font-mono bg-slate-100 text-slate-500 px-2 py-0.5 rounded uppercase"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
