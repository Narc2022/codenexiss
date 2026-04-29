"use client";

export default function CTASection() {
  return (
    <section className="py-32 bg-background relative overflow-hidden">
      {/* Prismatic overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          background:
            "linear-gradient(135deg, #006471 0%, #413de4 50%, #8025ce 100%)",
        }}
      />

      <div className="container mx-auto px-8 text-center relative z-10">
        <div className="max-w-3xl mx-auto">
          <p className="font-label text-[10px] uppercase tracking-[0.25em] font-bold text-primary mb-6">
            Begin Deployment
          </p>

          <h2 className="font-display text-5xl md:text-7xl font-bold tracking-tighter mb-8 text-on-surface">
            Scale your{" "}
            <span
              style={{
                background:
                  "linear-gradient(135deg, #006471 0%, #413de4 50%, #8025ce 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              narrative.
            </span>
          </h2>

          <p className="text-on-surface-variant text-lg mb-12 max-w-xl mx-auto leading-relaxed">
            Join the next generation of digital creators using synthetic
            systems to dominate the attention economy.
          </p>

          <button className="bg-indigo-600 text-white px-12 py-5 rounded-xl font-headline font-bold uppercase tracking-[0.2em] text-sm shadow-2xl transition-all hover:scale-105 active:scale-95 hover:shadow-[0_20px_60px_rgba(65,61,228,0.4)]">
            Initiate Protocol
          </button>

          {/* Trust logos */}
          <div className="mt-16 pt-16 border-t border-outline-variant/10 flex flex-wrap justify-center gap-12 opacity-40">
            {[
              "Nexus Labs",
              "Quantum Media",
              "SynthCore",
              "AuraNet",
            ].map((name) => (
              <span
                key={name}
                className="font-display font-black text-sm tracking-tighter text-on-surface-variant uppercase"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
