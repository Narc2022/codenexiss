"use client";

export default function CTASection() {
  return (
    <section className="pb-24 px-8">
      <div
        className="max-w-[1440px] mx-auto rounded-[2rem] p-12 md:p-20 text-white flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #006471 0%, #413de4 50%, #8025ce 100%)",
        }}
      >
        {/* Glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-[80px] -mr-32 -mt-32 pointer-events-none" />

        <div className="relative z-10">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Ready to scale?
          </h2>
          <p className="font-body text-white/80 text-lg max-w-md leading-relaxed">
            Connect with our systems architects today to design your
            future-proof infrastructure.
          </p>
        </div>

        <div className="relative z-10 flex flex-col sm:flex-row gap-4 w-full md:w-auto">
          <button className="bg-white text-primary px-10 py-5 rounded-xl font-headline font-bold text-sm uppercase tracking-widest hover:shadow-2xl hover:scale-[1.03] active:scale-95 transition-all">
            Schedule Consultation
          </button>
        </div>
      </div>
    </section>
  );
}
