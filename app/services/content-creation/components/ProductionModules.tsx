"use client";

const modules = [
  {
    id: "0x912-SHORT",
    icon: "movie_edit",
    title: "Reels & Shorts Editing",
    desc: "Boost your social media presence with our professional Reels & Shorts Editing services. We create high-quality, engaging, and viral-ready short videos tailored for platforms like Instagram, YouTube Shorts, and TikTok.",
    color: "primary",
    accent: "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white",
  },
  {
    id: "0x432-LONG",
    icon: "play_circle",
    title: "YouTube Video Editing",
    desc: "Enhance your YouTube channel with our professional video editing services. We transform your raw footage into high-quality, engaging, and audience-retaining videos that help grow your subscribers and increase watch time.",
    color: "secondary",
    accent: "bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-white",
  },
  {
    id: "0x113-TEXT",
    icon: "edit_note",
    title: "Script Writing",
    desc: "Bring your ideas to life with our professional Script Writing Services. We craft engaging, creative, and audience-focused scripts for videos, ads, and digital content that capture attention and deliver powerful messages.",
    color: "primary",
    accent: "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white",
  },
  {
    id: "0x665-VOX",
    icon: "graphic_eq",
    title: "AI Voiceover",
    desc: "Enhance your content with professional AI Voiceover Services. We provide natural-sounding, high-quality voiceovers for videos, ads, and digital content that engage your audience and elevate your brand presence.",
    color: "tertiary",
    accent: "bg-tertiary/10 text-tertiary group-hover:bg-tertiary group-hover:text-white",
  },
  {
    id: "0x334-VIS",
    icon: "thumbnail_bar",
    title: "Thumbnail Design",
    desc: "Grab attention instantly with our professional Thumbnail Design Services. We create eye-catching, high-converting thumbnails that increase clicks, boost engagement, and help your content stand out on platforms.",
    color: "secondary",
    accent: "bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-white",
  },
  {
    id: "0x992-PLAN",
    icon: "calendar_today",
    title: "Content Planning",
    desc: "Take your content strategy to the next level with our professional Content Planning. We help you plan, organize, and execute content that aligns with your goals, engages your audience, drives consistent growth across platforms.",
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
            Advanced production modules engineered as scalable computational units for seamless content creation, workflow automation, and multi-channel distribution. Designed to support end-to-end deployment, they ensure operational efficiency, consistency, and reliable delivery across global digital platforms.
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
