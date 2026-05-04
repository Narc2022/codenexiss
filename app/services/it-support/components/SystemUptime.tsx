"use client";

import { useEffect, useRef, useState } from "react";

const metrics = [
  {
    value: "99.99%",
    label: "Global Network Uptime",
    color: "border-primary",
    textColor: "text-primary",
    extra: (
      <div className="mt-6 flex justify-center gap-1 items-end">
        {[16, 24, 20, 32, 24].map((h, i) => (
          <div
            key={i}
            className="w-1 rounded-full bg-primary"
            style={{ height: `${h}px` }}
          />
        ))}
      </div>
    ),
  },
  {
    value: "< 15ms",
    label: "Mean Response Time",
    color: "border-secondary",
    textColor: "text-secondary",
    extra: (
      <div className="mt-6 font-technical text-[10px] text-secondary/60 tracking-widest">
        REGION: NORTH_AMERICA_WEST
      </div>
    ),
  },
  {
    value: "3x Tier-4",
    label: "Data Redundancy",
    color: "border-tertiary",
    textColor: "text-tertiary",
    extra: (
      <div className="mt-6 flex justify-center gap-2">
        {[true, true, false].map((active, i) => (
          <span
            key={i}
            className={`material-symbols-outlined ${active ? "text-tertiary/40" : "text-tertiary"}`}
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            database
          </span>
        ))}
      </div>
    ),
  },
];

export default function SystemUptime() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-24 bg-surface overflow-hidden relative">
      {/* Dot grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#191c1e 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />

      <div className="max-w-[1920px] mx-auto px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl font-bold mb-4 text-on-surface">
            System Uptime &amp; Integrity
          </h2>
          <div
            className="h-1 w-24 mx-auto rounded-full"
            style={{
              background:
                "linear-gradient(135deg, #006471 0%, #413de4 50%, #8025ce 100%)",
            }}
          />
        </div>

        {/* Metric cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {metrics.map((m, i) => (
            <div
              key={m.label}
              className={`p-10 rounded-xl text-center outline outline-1 outline-outline-variant/20 border-t-4 ${m.color} transition-all duration-700 ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{
                transitionDelay: `${i * 120}ms`,
                background: "rgba(255,255,255,0.7)",
                backdropFilter: "blur(12px)",
                boxShadow: "0px 16px 48px rgba(25,28,30,0.06)",
              }}
            >
              <div
                className={`font-technical text-4xl font-bold mb-2 ${m.textColor}`}
              >
                {m.value}
              </div>
              <div className="font-label text-xs uppercase tracking-widest font-bold text-outline">
                {m.label}
              </div>
              {m.extra}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
