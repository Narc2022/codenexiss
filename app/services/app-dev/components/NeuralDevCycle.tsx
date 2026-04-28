const steps = [
  {
    num: '01',
    label: 'Synthetix Architecture Design',
    bg: 'bg-[#5c5bfe]',
    text: 'text-[#fbf7ff]',
  },
  {
    num: '02',
    label: 'Parallel Sprint Development',
    bg: 'bg-[#9a46e9]',
    text: 'text-[#fff8fd]',
  },
  {
    num: '03',
    label: 'AI-Assisted Security Audit',
    bg: 'bg-[#007f8e]',
    text: 'text-[#f1fdff]',
  },
];

export default function NeuralDevCycle() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute -top-40 -left-40 w-96 h-96 bg-[#413de4]/5 blur-[120px] rounded-full" />
      <div className="pointer-events-none absolute -bottom-20 right-0 w-80 h-80 bg-[#8025ce]/5 blur-[100px] rounded-full" />

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center relative z-10">
        {/* Left — text */}
        <div className="lg:w-1/2 space-y-7">
          <p className="font-['JetBrains_Mono'] text-xs font-bold text-[#8025ce] uppercase tracking-widest">
            ARCHITECTURE_FLOW
          </p>

          <h2 className="font-['Space_Grotesk'] text-4xl font-bold tracking-tight leading-tight">
            The Neural Development Cycle
          </h2>

          <p className="font-['Manrope'] text-[#464556] leading-relaxed">
            We don't just build apps; we architect living digital organisms. Our development
            cycle integrates AI feedback loops to ensure code quality and user engagement
            are maximized at every deployment stage.
          </p>

          <ul className="space-y-4">
            {steps.map((s) => (
              <li key={s.num} className="flex items-center gap-4">
                <span
                  className={`w-6 h-6 shrink-0 rounded font-['JetBrains_Mono'] text-xs flex items-center justify-center ${s.bg} ${s.text}`}
                >
                  {s.num}
                </span>
                <span className="font-['Space_Grotesk'] font-bold">{s.label}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right — video thumbnail */}
        <div className="lg:w-1/2 w-full">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCsydT9e2g39dBAYpsLQ07Li4akkFr3DJv_CgW9Vy5BaBSCkVyEUOsm2Bn62IWffsm8Zo8wsyis34Z3UH882esI9zBiRi0LMuZ1W1dj-dkXrIA9NlV7foygbPgCsKa1-5l3oKWVwgstnoHQpXDS6W7v5iCbT_h_uBliCGWvqKg6aQjQEl_DIpdKyxPgcdy3AfqzfV4kSBw6CdjEV9eUHCvcpF4MtL2H27NmTmVINbE_xIaNLvpy1YI0tNVLtiM5i7taG_xlAqupWmOF"
              alt="Modern high-tech development workspace with glowing monitors"
              className="w-full aspect-video object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
              <div className="flex items-center gap-4">
                <button className="w-12 h-12 rounded-full border border-white/30 bg-white/10 backdrop-blur flex items-center justify-center hover:bg-white/20 transition-colors">
                  <span className="material-symbols-outlined text-white">play_arrow</span>
                </button>
                <span className="font-['Space_Grotesk'] font-bold text-white">
                  Watch Process Overview
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
