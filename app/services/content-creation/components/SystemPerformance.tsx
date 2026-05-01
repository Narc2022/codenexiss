"use client";

import { useEffect, useRef, useState } from "react";

const metrics = [
  {
    label: "Render Accuracy",
    value: "99.8%",
    icon: "check_circle",
    color: "border-primary",
    barColor: "bg-primary",
    textColor: "text-primary",
    bars: [1, 1, 1, 0.2],
  },
  {
    label: "Engagement Uplift",
    value: "+142%",
    icon: "trending_up",
    color: "border-secondary",
    barColor: "bg-secondary",
    textColor: "text-secondary",
    bars: [1, 1, 1, 1],
  },
  {
    label: "Sync Latency",
    value: "<10ms",
    icon: "bolt",
    color: "border-tertiary",
    barColor: "bg-tertiary",
    textColor: "text-tertiary",
    bars: [1, 1, 0.1, 0.1],
  },
];

function useCountUp(target: number, duration = 1800, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number;
    const animate = (ts: number) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [start, target, duration]);
  return count;
}

export default function SystemPerformance() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-surface border-y border-outline-variant/10"
    >
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 items-center">
          {/* Label */}
          <div className="lg:col-span-1">
            <p className="font-label text-[10px] text-primary font-bold uppercase tracking-widest mb-2">
              Internal Diagnostics
            </p>
            <h2 className="font-display text-4xl font-bold leading-tight text-on-surface">
              System Performance
            </h2>
          </div>

          {/* Metric cards */}
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-8">
            {metrics.map((m) => (
              <div
                key={m.label}
                className={`bg-surface-container-low p-6 rounded-xl border-l-4 ${m.color} transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              >
                <p className="font-label text-[9px] uppercase tracking-widest text-on-surface-variant mb-1">
                  {m.label}
                </p>
                <div className="flex items-end gap-2">
                  <span className="font-mono text-4xl font-bold tracking-tighter text-on-surface">
                    {m.value}
                  </span>
                  <span
                    className={`material-symbols-outlined mb-1 ${m.textColor}`}
                  >
                    {m.icon}
                  </span>
                </div>
                <div className="mt-4 flex gap-1">
                  {m.bars.map((b, i) => (
                    <div
                      key={i}
                      className={`h-1 flex-1 rounded-full transition-all duration-1000 ${b === 1 ? m.barColor : `${m.barColor}/20`}`}
                      style={{
                        opacity: visible ? 1 : 0,
                        transitionDelay: `${i * 120}ms`,
                      }}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
