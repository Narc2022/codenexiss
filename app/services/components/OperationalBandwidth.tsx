"use client";

const NODES = [
  { label: "N1", height: "h-32", color: "bg-primary/20 hover:bg-primary/40" },
  { label: "N2", height: "h-48", color: "bg-secondary/20 hover:bg-secondary/40" },
  { label: "N3", height: "h-56", color: "bg-tertiary/20 hover:bg-tertiary/40" },
  { label: "N4", height: "h-40", color: "bg-primary/20 hover:bg-primary/40" },
  { label: "N5", height: "h-64", color: "bg-secondary/20 hover:bg-secondary/40" },
  { label: "N6", height: "h-36", color: "bg-tertiary/20 hover:bg-tertiary/40" },
  { label: "N7", height: "h-52", color: "bg-primary/20 hover:bg-primary/40" },
];

export default function OperationalBandwidth() {
  return (
    <div className="rounded-xl bg-surface-container-low p-8 border border-outline-variant/10 overflow-hidden relative">
      {/* Header */}
      <div className="flex justify-between items-end mb-8">
        <div>
          <h4 className="font-headline font-black text-2xl uppercase tracking-tighter">
            Operational Bandwidth
          </h4>
          <p className="font-mono text-xs text-outline">
            Real-time resource allocation across active nodes.
          </p>
        </div>
        <div className="text-right font-mono text-[10px] text-secondary">
          SYSTEM_HEALTH: OPTIMAL
        </div>
      </div>

      {/* Bar chart */}
      <div className="h-64 flex items-end gap-2 px-2">
        {NODES.map((n) => (
          <div
            key={n.label}
            className={`flex-1 ${n.color} rounded-t-sm ${n.height} transition-colors`}
          />
        ))}
      </div>

      {/* X-axis labels */}
      <div className="mt-4 pt-4 border-t border-outline-variant/20 grid grid-cols-7 text-center font-mono text-[8px] text-outline uppercase tracking-widest">
        {NODES.map((n) => (
          <span key={n.label}>{n.label}</span>
        ))}
      </div>
    </div>
  );
}
