"use client";

const steps = [
  {
    phase: "01",
    label: "Intake",
    title: "Brief Ingestion",
    desc: "Upload brand brief, audience personas, and platform targets. Our parser maps every constraint.",
    icon: "upload_file",
    color: "primary",
  },
  {
    phase: "02",
    label: "Synthesis",
    title: "Script Generation",
    desc: "LLM layers produce psychographic-tuned scripts with platform-specific hooks and CTAs.",
    icon: "auto_awesome",
    color: "secondary",
  },
  {
    phase: "03",
    label: "Production",
    title: "Asset Assembly",
    desc: "Voiceover, B-roll selection, motion graphics, and thumbnail variants rendered in parallel.",
    icon: "video_settings",
    color: "tertiary",
  },
  {
    phase: "04",
    label: "Review",
    title: "Quality Gate",
    desc: "Automated scoring against engagement benchmarks before human review sign-off.",
    icon: "verified",
    color: "primary",
  },
  {
    phase: "05",
    label: "Deploy",
    title: "Multi-Channel Push",
    desc: "Scheduled publishing across YouTube, Instagram, TikTok and LinkedIn simultaneously.",
    icon: "rocket_launch",
    color: "secondary",
  },
];

const colorMap: Record<string, { ring: string; bg: string; text: string; line: string }> = {
  primary: {
    ring: "ring-primary/30",
    bg: "bg-primary",
    text: "text-primary",
    line: "bg-primary/30",
  },
  secondary: {
    ring: "ring-secondary/30",
    bg: "bg-secondary",
    text: "text-secondary",
    line: "bg-secondary/30",
  },
  tertiary: {
    ring: "ring-tertiary/30",
    bg: "bg-tertiary",
    text: "text-tertiary",
    line: "bg-tertiary/30",
  },
};

export default function WorkflowTimeline() {
  return (
    <section className="py-28 bg-background">
      <div className="container mx-auto px-8">
        {/* Header */}
        <div className="mb-20 max-w-xl">
          <p className="font-label text-[10px] uppercase tracking-[0.2em] font-bold text-secondary mb-3">
            Pipeline Architecture
          </p>
          <h2 className="font-display text-5xl font-bold tracking-tighter leading-tight text-on-surface mb-4">
            Content Workflow
          </h2>
          <p className="text-on-surface-variant text-sm leading-relaxed">
            Five discrete protocol stages from brief to publish — fully
            observable, fully automated.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical connector line */}
          <div className="absolute left-[27px] top-10 bottom-10 w-px bg-gradient-to-b from-primary/20 via-secondary/20 to-tertiary/20 hidden md:block" />

          <div className="space-y-8">
            {steps.map((step, i) => {
              const c = colorMap[step.color];
              return (
                <div
                  key={step.phase}
                  className="relative flex gap-8 items-start group"
                  style={{ animationDelay: `${i * 80}ms` }}
                >
                  {/* Phase dot */}
                  <div
                    className={`flex-shrink-0 w-14 h-14 rounded-full ${c.bg} ring-4 ${c.ring} flex items-center justify-center z-10 shadow-lg group-hover:scale-110 transition-transform duration-200`}
                  >
                    <span className="material-symbols-outlined text-white text-xl">
                      {step.icon}
                    </span>
                  </div>

                  {/* Content card */}
                  <div className="flex-1 bg-surface-container-lowest rounded-xl p-6 border border-outline-variant/10 hover:border-outline-variant/30 transition-all duration-300 hover:shadow-[0_8px_32px_rgba(25,28,30,0.06)] mb-2">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div>
                        <span
                          className={`font-mono text-[9px] uppercase tracking-widest font-bold ${c.text} block mb-0.5`}
                        >
                          Phase {step.phase} — {step.label}
                        </span>
                        <h3 className="font-headline text-lg font-bold text-on-surface">
                          {step.title}
                        </h3>
                      </div>
                      <span
                        className={`font-mono text-[10px] ${c.text} bg-surface-container px-2 py-0.5 rounded-full whitespace-nowrap`}
                      >
                        {step.label.toUpperCase()}
                      </span>
                    </div>
                    <p className="text-on-surface-variant text-sm leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
