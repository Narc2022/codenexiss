const steps = [
  {
    id: "01",
    color: "bg-teal-600",
    icon: "🌐",
    title: "Inception",
    description: "AI-assisted brainstorming and requirements mapping using LLM kernels.",
    extra: (
      <div className="mt-4 bg-slate-900 rounded-md p-3 font-mono text-[10px] text-green-400 space-y-1">
        <div>git init code-nexus-v4</div>
        <div>ai --prompt context.md</div>
      </div>
    ),
  },
  {
    id: "02",
    color: "bg-indigo-600",
    icon: "⚡",
    title: "Synthesis",
    description: "Automated boilerplating and microservice scaffolding via CodeNexiss CLI.",
    extra: (
      <div className="mt-4 bg-slate-800 rounded-md h-24 flex items-center justify-center text-slate-600 text-xs font-mono">
        [CLI OUTPUT]
      </div>
    ),
  },
  {
    id: "03",
    color: "bg-purple-600",
    icon: "🔒",
    title: "Validation",
    description: "Heuristic security scanning and automated unit testing across 40 nodes.",
    extra: (
      <div className="mt-4 space-y-1">
        <div className="h-1.5 bg-purple-200 rounded-full overflow-hidden">
          <div className="h-full bg-purple-500 rounded-full w-[85%]" />
        </div>
        <div className="h-1.5 bg-indigo-100 rounded-full overflow-hidden">
          <div className="h-full bg-indigo-400 rounded-full w-[60%]" />
        </div>
      </div>
    ),
  },
  {
    id: "04",
    color: "bg-slate-800",
    icon: "🚀",
    title: "Deployment",
    description: "Blue-green deployment strategy to global edge nodes with instant rollback.",
    extra: (
      <button className="mt-4 w-full bg-slate-900 text-white text-[10px] font-bold uppercase tracking-widest py-2 rounded hover:bg-slate-700 transition-colors">
        Execute Final Push
      </button>
    ),
  },
];

export default function PipelineSection() {
  return (
    <section>
      <div className="flex items-center justify-between my-8">
        <div className="space-y-1">
          <p className="text-[10px] font-bold uppercase tracking-widest text-teal-600">The Process</p>
          <h2 className="text-3xl font-bold text-slate-900 font-headline">The Pipeline</h2>
        </div>
        <span className="hidden md:block font-mono text-[10px] text-slate-400 uppercase tracking-wider bg-slate-100 px-3 py-1.5 rounded">
          PROCESS_ID: 0x992_WORKFLOW
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {steps.map((step) => (
          <div
            key={step.id}
            className="bg-white rounded-xl border border-slate-100 shadow-sm p-5 flex flex-col hover:shadow-md transition-shadow"
          >
            <div className="flex items-center gap-2 mb-3">
              <span className={`${step.color} text-white text-[10px] font-bold px-2 py-0.5 rounded`}>
                {step.id}
              </span>
            </div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-lg">{step.icon}</span>
              <h3 className="font-semibold text-slate-900 text-sm font-headline">{step.title}</h3>
            </div>
            <p className="text-slate-500 text-xs leading-relaxed flex-1">{step.description}</p>
            {step.extra}
          </div>
        ))}
      </div>
    </section>
  );
}
