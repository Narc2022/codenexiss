'use client';

import { useEffect, useRef } from 'react';

export default function ServicesHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    let animFrame: number;
    let time = 0;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.008;

      // Animated scan lines
      for (let i = 0; i < canvas.height; i += 6) {
        const alpha = 0.03 + Math.sin(time + i * 0.02) * 0.02;
        ctx.fillStyle = `rgba(0, 218, 243, ${alpha})`;
        ctx.fillRect(0, i, canvas.width, 1);
      }

      // Glowing orb
      const grd = ctx.createRadialGradient(
        canvas.width * 0.5 + Math.sin(time) * 30,
        canvas.height * 0.5 + Math.cos(time * 0.7) * 20,
        0,
        canvas.width * 0.5,
        canvas.height * 0.5,
        canvas.width * 0.45
      );
      grd.addColorStop(0, 'rgba(0, 218, 243, 0.18)');
      grd.addColorStop(0.4, 'rgba(93, 92, 255, 0.08)');
      grd.addColorStop(1, 'transparent');
      ctx.fillStyle = grd;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      animFrame = requestAnimationFrame(draw);
    };

    draw();
    return () => cancelAnimationFrame(animFrame);
  }, []);

  return (
    <section className="relative mb-32 overflow-hidden">
      {/* Ambient blobs */}
      <div className="pointer-events-none absolute -top-20 -left-20 w-72 h-72 rounded-full bg-[#006471]/10 blur-[100px] -z-10" />
      <div className="pointer-events-none absolute top-40 right-0 w-96 h-96 rounded-full bg-[#8025ce]/10 blur-[120px] -z-10" />

      <div className="flex flex-col items-start max-w-4xl">
        {/* Protocol badge */}
        <div className="mb-6 flex items-center gap-3">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00daf3] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00daf3]" />
          </span>
          <span className="font-mono text-[10px] uppercase tracking-widest text-[#006471]">
            Protocol v1.0.4 // Active
          </span>
        </div>

        <h1 className="font-['Space_Grotesk'] text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-none mb-2">
          Web
        </h1>
        <h1 className="font-['Space_Grotesk'] italic text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-[#006471] leading-none mb-8">
          Engineering
        </h1>

        <p className="font-['Manrope'] text-[#464556] text-lg max-w-lg leading-relaxed mb-10">
          Deploying high-precision digital instruments. We blend technical rigidity
          with ethereal aesthetics to build performance-first web ecosystems
          that scale with your ambitions.
        </p>

        <div className="flex items-center gap-4">
          <button className="bg-[#5D5CFF] text-white px-7 py-3 rounded-lg font-['Space_Grotesk'] font-bold text-sm hover:bg-[#4a49e0] active:scale-95 transition-all duration-200 shadow-lg shadow-[#5D5CFF]/30">
            Initialize Session
          </button>
          <button className="border border-[#c7c4d8] text-[#464556] px-7 py-3 rounded-lg font-['Space_Grotesk'] font-bold text-sm hover:border-[#5D5CFF] hover:text-[#5D5CFF] transition-all duration-200">
            Technical Specs
          </button>
        </div>
      </div>

      {/* Hero visual panel */}
      <div className="mt-16 relative rounded-2xl overflow-hidden bg-[#0d1117] shadow-2xl shadow-black/20 border border-white/5">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full"
          style={{ mixBlendMode: 'screen' }}
        />

        {/* Dark tech image overlay */}
        <div className="relative h-[380px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#001f24] via-[#006471]/30 to-[#0a0a1e]" />

          {/* Grid lines */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                'linear-gradient(rgba(0,218,243,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,218,243,0.3) 1px, transparent 1px)',
              backgroundSize: '60px 60px',
            }}
          />

          {/* Central glow */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-48 h-48 rounded-full bg-[#00daf3]/20 blur-3xl animate-pulse" />
            <div className="absolute w-24 h-24 rounded-full bg-white/40 blur-2xl animate-pulse" style={{ animationDelay: '0.5s' }} />
          </div>

          {/* Corner elements */}
          <div className="absolute top-4 left-4 font-mono text-[10px] text-[#00daf3]/60">
            SYS_CORE // ACTIVE
          </div>
          <div className="absolute bottom-4 right-4 font-mono text-[10px] text-[#00daf3]/60 text-right">
            SERVER_STATUS: OPTIMAL
          </div>
        </div>

        {/* Status bar */}
        <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md border border-white/10 rounded-lg px-4 py-2">
          <div className="font-mono text-[10px] text-[#464556] mb-0.5">KERNEL_PROCESS</div>
          <div className="font-mono text-sm font-bold text-white">0.024ms</div>
        </div>
        <div className="absolute bottom-4 right-4 font-mono text-[10px] text-[#00daf3] font-bold tracking-widest">
          100% OPERATIONAL
        </div>
      </div>
    </section>
  );
}
