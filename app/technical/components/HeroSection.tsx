export default function HeroSection() {
  return (
    <section className="relative">
      {/* Glow orbs */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-teal-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute -top-12 -right-12 w-64 h-64 bg-purple-500/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative z-10 space-y-6">
        <div className="flex items-center gap-3">
          <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase">
            System Core
          </span>
          <div className="h-px w-24 bg-gradient-to-r from-indigo-200 to-transparent" />
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 max-w-4xl leading-[1.1] font-headline">
          Technical Foundations &amp;{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-indigo-500 to-purple-600">
            Workflow
          </span>
        </h1>

        <p className="text-slate-500 text-lg max-w-2xl leading-relaxed">
          Exploring the symbiotic relationship between generative AI and high-performance
          infrastructure. Our pipeline is engineered for zero-latency deployment and absolute
          security.
        </p>
      </div>
    </section>
  );
}
