"use client";

function CheckIcon() {
  return (
    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}
function RocketIcon() {
  return (
    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
    </svg>
  );
}

const trust = [
  { icon: <CheckIcon />, label: "Encryption Active" },
  { icon: <RocketIcon />, label: "Instant Deployment" },
];

export default function CTASection() {
  return (
    <section className="px-8 py-24">
      <div className="max-w-5xl mx-auto prismatic-gradient rounded-2xl p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
        {/* Circuit grid overlay */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="relative z-10">
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to scale your digital presence?
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            Initiate the CodeNexiss Marketing Protocol today and integrate your
            brand into the future of AI-driven consumer engagement.
          </p>

          <button className="bg-white text-primary px-10 py-5 rounded-lg font-headline font-black uppercase tracking-[0.2em] shadow-xl hover:scale-105 transition-transform">
            Initiate Marketing Protocol
          </button>

          <div className="mt-8 flex justify-center gap-8 opacity-60">
            {trust.map((t) => (
              <div key={t.label} className="flex items-center gap-2 text-white text-[10px] font-mono uppercase tracking-widest">
                {t.icon}
                {t.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
