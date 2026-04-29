"use client";

const modules = [
  {
    id: "0x912-SHORT",
    icon: "movie_edit",
    title: "Reels & Shorts Editing",
    desc: "Engaging short-form video editing optimized for retention-first social media algorithms.",
    color: "primary",
    accent: "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white",
  },
  {
    id: "0x432-LONG",
    icon: "play_circle",
    title: "YouTube Video Editing",
    desc: "Professional long-form editing to enhance production value and deep narrative quality.",
    color: "secondary",
    accent: "bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-white",
  },
  {
    id: "0x113-TEXT",
    icon: "edit_note",
    title: "Script Writing",
    desc: "Structured, high-conversion scripts tailored for specific marketing psychological profiles.",
    color: "primary",
    accent: "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white",
  },
  {
    id: "0x665-VOX",
    icon: "graphic_eq",
    title: "AI Voiceover",
    desc: "Hyper-realistic vocal synthesis for ads and narration with emotional tonal control.",
    color: "tertiary",
    accent: "bg-tertiary/10 text-tertiary group-hover:bg-tertiary group-hover:text-white",
  },
  {
    id: "0x334-VIS",
    icon: "thumbnail_bar",
    title: "Thumbnail Design",
    desc: "Custom high-CTR graphical assets designed using viral pattern recognition.",
    color: "secondary",
    accent: "bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-white",
  },
  {
    id: "0x992-PLAN",
    icon: "calendar_today",
    title: "Content Planning",
    desc: "Strategic temporal allocation of content for maximum platform authority growth.",
    color: "tertiary",
    accent: "bg-tertiary/10 text-tertiary group-hover:bg-tertiary group-hover:text-white",
  },
];

const colorMap: Record<string, string> = {
  primary: "text-primary",
  secondary: "text-secondary",
  tertiary: "text-tertiary",
};

export default function ProductionModules() {
  return (
    <section className="py-28 bg-surface-container-low">
      <div className="container mx-auto px-8">
        {/* Section header */}
        <div className="mb-16 max-w-xl">
          <p className="font-label text-[10px] uppercase tracking-[0.2em] font-bold text-primary mb-3">
            Production Stack
          </p>
          <h2 className="font-display text-5xl font-bold tracking-tighter leading-tight text-on-surface mb-4">
            Production Modules
          </h2>
          <p className="text-on-surface-variant text-sm leading-relaxed">
            Discrete computational units designed for end-to-end narrative
            deployment across global channels.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((mod) => (
            <div
              key={mod.id}
              className="group bg-surface-container-lowest p-8 rounded-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[0px_16px_48px_rgba(25,28,30,0.08)] cursor-pointer"
            >
              <div
                className={`w-12 h-12 rounded-lg flex items-center justify-center mb-6 transition-colors duration-300 ${mod.accent}`}
              >
                <span className="material-symbols-outlined text-xl">
                  {mod.icon}
                </span>
              </div>

              <h3 className="font-headline text-xl font-bold mb-3 text-on-surface">
                {mod.title}
              </h3>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
                {mod.desc}
              </p>

              <div
                className={`font-mono text-[10px] tracking-widest uppercase py-2 border-t border-surface-container ${colorMap[mod.color]}`}
              >
                Module_ID: {mod.id}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
