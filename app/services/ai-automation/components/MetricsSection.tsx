const metrics = [
  {
    badge: "Verified Metric",
    badgeColor: "bg-primary",
    value: "92%",
    label: "Automation Efficiency",
    labelColor: "text-primary",
    description:
      "Average reduction in manual task overhead across all active system implementations.",
  },
  {
    badge: "Network Status",
    badgeColor: "bg-secondary",
    value: "12ms",
    label: "Response Latency",
    labelColor: "text-secondary",
    description:
      "Ultra-low response time for critical AI processing and database synchronization.",
  },
  {
    badge: "Integrity Check",
    badgeColor: "bg-tertiary",
    value: "100%",
    label: "System Health",
    labelColor: "text-tertiary",
    description:
      "Consistent operational uptime guaranteed through distributed neural architecture.",
  },
];

export default function MetricsSection() {
  return (
    <section className="py-24 px-6 lg:px-12 bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {metrics.map((m) => (
            <div
              key={m.label}
              className="flex flex-col items-center text-center p-8 bg-surface-container-low rounded-xl relative"
            >
              {/* Floating badge */}
              <div
                className={`absolute -top-4 left-1/2 -translate-x-1/2 font-mono text-[10px] ${m.badgeColor} text-white px-3 py-1 rounded-full uppercase tracking-tighter whitespace-nowrap`}
              >
                {m.badge}
              </div>

              <span className="text-6xl font-headline font-extrabold text-on-surface mb-2">
                {m.value}
              </span>
              <span className={`font-headline text-xs uppercase tracking-widest ${m.labelColor} mb-4`}>
                {m.label}
              </span>
              <p className="text-sm text-on-surface-variant px-4">{m.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
