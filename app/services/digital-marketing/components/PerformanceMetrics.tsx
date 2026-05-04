"use client";

const bars = [30, 45, 40, 65, 55, 80, 75, 95, 100];

const kpis = [
  {
    label: "Campaign Efficiency",
    value: "98.2%",
    percent: 98.2,
    color: "bg-primary",
    textColor: "text-primary",
  },
  {
    label: "ROI Index",
    value: "12.4x",
    percent: 85,
    color: "bg-secondary",
    textColor: "text-secondary",
  },
];

export default function PerformanceMetrics() {
  return (
    <section className="px-8 py-24 bg-surface">
      <div className="max-w-[1920px] mx-auto px-6 lg:px-10 pt-8
">
        <div className="flex flex-col lg:flex-row gap-16 items-start">

          {/* ── Left: copy + KPI bars ── */}
          <div className="lg:w-1/3">
            <span className="font-headline text-[11px] uppercase tracking-[0.2em] text-secondary font-bold">
              Analytics Engine
            </span>
            <h2 className="font-headline text-4xl font-bold mt-2 mb-6">
              Performance Metrics
            </h2>
            <p className="text-on-surface-variant mb-8 leading-relaxed">
              Our proprietary dashboard tracks the efficiency of every marketing
              protocol in real-time, providing deep insights into your growth
              vectors.
            </p>

            <div className="space-y-4">
              {kpis.map((k) => (
                <div
                  key={k.label}
                  className="p-4 bg-surface-container rounded-lg border border-outline-variant/10"
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-mono text-[10px] uppercase font-bold">
                      {k.label}
                    </span>
                    <span className={`font-mono text-[10px] ${k.textColor}`}>
                      {k.value}
                    </span>
                  </div>
                  <div className="w-full bg-surface-container-highest h-1 rounded-full overflow-hidden">
                    <div
                      className={`${k.color} h-full rounded-full`}
                      style={{ width: `${k.percent}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: chart + stat cards ── */}
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8 w-full">

            {/* Bar chart */}
            <div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm border border-outline-variant/5">
              <h4 className="font-mono text-[11px] text-outline mb-6 uppercase tracking-widest">
                Growth Vectors [LIVE]
              </h4>
              <div className="relative h-64 flex items-end justify-between px-4 gap-2">
                {bars.map((h, i) => {
                  const isPeak = i === bars.length - 1;
                  const opacity = 20 + i * 10;
                  return (
                    <div
                      key={i}
                      className={`relative flex-1 rounded-t-sm ${isPeak ? "prismatic-gradient" : `bg-secondary/${opacity}`}`}
                      style={{ height: `${h}%` }}
                    >
                      {isPeak && (
                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-on-surface text-surface text-[10px] px-2 py-1 rounded font-mono font-bold whitespace-nowrap">
                          PEAK
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Retention + node stats */}
            <div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm border border-outline-variant/5 flex flex-col justify-center">
              <div className="mb-8 text-center">
                <div className="text-5xl font-headline font-black text-on-surface mb-1">
                  94%
                </div>
                <div className="font-mono text-[10px] text-outline uppercase tracking-widest">
                  Retention Accuracy
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-surface-container-low rounded-lg">
                  <div className="text-2xl font-headline font-bold text-primary">
                    2.4M
                  </div>
                  <div className="text-[9px] font-mono text-outline uppercase">
                    Reach Node
                  </div>
                </div>
                <div className="text-center p-4 bg-surface-container-low rounded-lg">
                  <div className="text-2xl font-headline font-bold text-tertiary">
                    580k
                  </div>
                  <div className="text-[9px] font-mono text-outline uppercase">
                    Conv Sync
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
