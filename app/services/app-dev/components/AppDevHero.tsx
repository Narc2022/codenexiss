'use client';

import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

export default function AppDevHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    let frame: number;
    let t = 0;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      t += 0.012;

      // Floating dashed rectangles (phone silhouette aura)
      const cx = canvas.width * 0.5;
      const cy = canvas.height * 0.5;

      for (let i = 0; i < 3; i++) {
        const scale = 0.55 + i * 0.18 + Math.sin(t + i) * 0.025;
        const w = canvas.width * scale;
        const h = canvas.height * scale;
        const alpha = 0.12 - i * 0.03 + Math.sin(t * 0.8 + i) * 0.05;
        ctx.strokeStyle = `rgba(93, 92, 255, ${alpha})`;
        ctx.lineWidth = 1;
        ctx.setLineDash([6, 6]);
        ctx.lineDashOffset = t * 10 + i * 20;
        ctx.beginPath();
        ctx.roundRect(cx - w / 2, cy - h / 2, w, h, 24);
        ctx.stroke();
      }

      // Pulsing center dot
      const r = 6 + Math.sin(t * 2) * 2;
      const grd = ctx.createRadialGradient(cx, cy, 0, cx, cy, r * 8);
      grd.addColorStop(0, 'rgba(93,92,255,0.25)');
      grd.addColorStop(1, 'transparent');
      ctx.fillStyle = grd;
      ctx.beginPath();
      ctx.arc(cx, cy, r * 8, 0, Math.PI * 2);
      ctx.fill();

      ctx.setLineDash([]);
      frame = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <section className="relative overflow-hidden ">
      {/* Dot grid background */}
      <div
        className="absolute inset-0 -z-10 opacity-60"
        style={{
          backgroundImage: 'radial-gradient(#c7c4d8 0.5px, transparent 0.5px)',
          backgroundSize: '24px 24px',
        }}
      />
      {/* Ambient gradient */}
      <div className="pointer-events-none absolute top-0 right-0 w-[600px] h-[600px] bg-[#413de4]/5 blur-[120px] -z-10 rounded-full" />

      <div className="max-w-[1920px] mx-auto px-6 lg:px-10 pt-2 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left — copy */}
        <div className="space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#e1dfff] text-[#09006b] rounded-full">
            <span className="font-['JetBrains_Mono'] text-[10px] font-bold tracking-widest uppercase">
              SYNERGY_V1.0
            </span>
          </div>

          <h1 className="font-['Space_Grotesk'] text-5xl lg:text-7xl font-bold tracking-tighter leading-[0.9]">
            Mobile Solution{' '}
            <br />
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: 'linear-gradient(135deg, #413de4 0%, #8025ce 100%)' }}
            >
              Development
            </span>
          </h1>

          <p className="font-['Manrope'] text-xl text-[#464556] max-w-lg leading-relaxed">
            Engineering high-performance mobile ecosystems through neural-enhanced
            architecture and cross-platform synergy.
          </p>

          <div className="flex flex-wrap gap-4">
            <button
              className="flex items-center gap-2 text-white px-7 py-3.5 rounded-xl font-['Space_Grotesk'] font-bold text-sm active:scale-95 transition-transform shadow-lg"
              style={{ backgroundImage: 'linear-gradient(135deg, #413de4 0%, #8025ce 100%)' }}
            >
              Initiate Architecture
              <ArrowRight size={16} />
            </button>
            <button className="px-7 py-3.5 rounded-xl border border-[#c7c4d8] font-['Space_Grotesk'] font-bold text-sm text-[#464556] hover:border-[#413de4] hover:text-[#413de4] transition-all duration-200">
              View Ecosystems
            </button>
          </div>
        </div>

        {/* Right — animated mockup card */}
        <div className="relative flex items-center justify-center">
          {/* Latency badge */}
          <div className="absolute top-4 right-4 z-20 flex items-center gap-2 bg-white/90 backdrop-blur border border-[#e0e3e5] rounded-full px-3 py-1.5 shadow-sm">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#006471] opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#006471]" />
            </span>
            <span className="font-['JetBrains_Mono'] text-[10px] text-[#464556]">
              LATENCY: 12ms
            </span>
          </div>

          {/* Canvas animation */}
          <div className="relative w-full max-w-md aspect-[4/3] bg-[#eceef0]/60 rounded-2xl border border-[#e0e3e5] overflow-hidden">
            <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

            {/* Phone icon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 rounded-2xl bg-white/80 backdrop-blur border border-[#c7c4d8]/40 flex items-center justify-center shadow-xl">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#413de4"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="5" y="2" width="14" height="20" rx="2" />
                  <line x1="12" y1="18" x2="12.01" y2="18" />
                </svg>
              </div>
            </div>

            {/* Bottom status bar */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-white/90 backdrop-blur border border-[#e0e3e5] rounded-full px-4 py-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#413de4] animate-pulse" />
              <span className="font-['JetBrains_Mono'] text-[9px] text-[#413de4] font-bold tracking-widest">
                SYNERGY_OPTIMIZED
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
