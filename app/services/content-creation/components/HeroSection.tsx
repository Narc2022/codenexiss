"use client";

import { useEffect, useRef } from "react";

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const particles: {
      x: number;
      y: number;
      vx: number;
      vy: number;
      alpha: number;
      size: number;
    }[] = [];

    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        alpha: Math.random() * 0.4 + 0.05,
        size: Math.random() * 2 + 0.5,
      });
    }

    let animId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(65, 61, 228, ${p.alpha})`;
        ctx.fill();
      });
      animId = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <section className="relative min-h-[860px] flex items-center overflow-hidden bg-background">
      {/* Ambient blobs */}
      <div className="absolute top-1/3 -right-24 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-24 w-[500px] h-[500px] bg-tertiary/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Particle canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-60 pointer-events-none"
      />

      <div className="container mx-auto px-8 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left copy */}
        <div className="lg:col-span-7 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-surface-container-low rounded-full mb-6 outline outline-1 outline-outline-variant/20">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="font-label text-[10px] uppercase tracking-[0.2em] font-bold text-on-surface-variant">
              Content Protocol V3.1
            </span>
          </div>

          <h1 className="font-display text-6xl md:text-8xl font-bold tracking-tighter leading-[0.9] mb-8">
            <span className="block text-on-surface">Synthetic</span>
            <span className="block" style={{ color: "#006471" }}>
              Content
            </span>
            <span
              className="block"
              style={{
                background:
                  "linear-gradient(135deg, #413de4 0%, #8025ce 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Systems
            </span>
          </h1>

          <p className="text-on-surface-variant text-base md:text-lg leading-relaxed mb-10 max-w-lg font-body">
            Precision-engineered narrative infrastructure for high-growth
            digital ecosystems. We automate creative complexity using
            CodeNexiss synthesis protocols.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="group flex items-center gap-3 bg-indigo-600 text-white px-7 py-3.5 rounded-lg font-headline font-bold uppercase tracking-widest text-xs shadow-[0_8px_32px_rgba(65,61,228,0.35)] hover:shadow-[0_12px_48px_rgba(65,61,228,0.5)] hover:scale-[1.03] active:scale-95 transition-all">
              Request Audit
              <span className="material-symbols-outlined text-base group-hover:translate-x-0.5 transition-transform">
                arrow_forward
              </span>
            </button>
            <button className="flex items-center gap-2 px-7 py-3.5 rounded-lg font-headline font-bold uppercase tracking-widest text-xs text-on-surface border border-outline-variant hover:border-secondary hover:text-secondary transition-all">
              View Workflows
            </button>
          </div>
        </div>

        {/* Right — buffer card */}
        <div className="lg:col-span-5">
          <div className="bg-white/60 backdrop-blur-xl rounded-2xl border border-outline-variant/20 shadow-[0_24px_80px_rgba(25,28,30,0.08)] overflow-hidden">
            {/* Card header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-surface-container">
              <div>
                <p className="font-label text-[9px] uppercase tracking-[0.2em] text-primary font-bold">
                  Buffer Status
                </p>
              </div>
              <div className="flex gap-1.5">
                {["bg-red-400", "bg-yellow-400", "bg-green-400"].map((c) => (
                  <span
                    key={c}
                    className={`w-2.5 h-2.5 rounded-full ${c}`}
                  />
                ))}
              </div>
            </div>

            {/* Video preview mock */}
            <div className="relative h-56 bg-slate-900 flex items-center justify-center">
              <div className="w-14 h-14 rounded-full bg-white/10 border border-white/20 flex items-center justify-center cursor-pointer hover:bg-white/20 transition-colors">
                <span className="material-symbols-outlined text-white text-3xl ml-1">
                  play_arrow
                </span>
              </div>
              <div className="absolute bottom-3 left-4 right-4">
                <div className="flex justify-between text-[9px] text-white/40 font-mono mb-1.5">
                  <span>ENCODING SEQUENCE</span>
                  <span>89.4%</span>
                </div>
                <div className="h-0.5 bg-white/10 rounded-full">
                  <div
                    className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                    style={{ width: "89.4%" }}
                  />
                </div>
              </div>
            </div>

            {/* Live stats row */}
            <div className="grid grid-cols-3 divide-x divide-surface-container px-0">
              {[
                { label: "Frames/s", value: "60fps", color: "text-primary" },
                { label: "Resolution", value: "4K", color: "text-secondary" },
                { label: "Queue", value: "3 jobs", color: "text-tertiary" },
              ].map((s) => (
                <div key={s.label} className="py-4 px-5">
                  <p className="font-label text-[8px] uppercase tracking-widest text-on-surface-variant mb-0.5">
                    {s.label}
                  </p>
                  <p className={`font-mono text-sm font-bold ${s.color}`}>
                    {s.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
