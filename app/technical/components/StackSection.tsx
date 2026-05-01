const stackItems = [
  {
    icon: "✳️",
    name: "React Engine",
    desc: "High-concurrency UI rendering with Fiber.",
    size: "sm",
  },
  {
    icon: "🦀",
    name: "Rust Kernel",
    desc: "Memory safety at the edge for critical computations.",
    size: "sm",
  },
  {
    icon: "⚡",
    name: "GQL Gateway",
    desc: "Typed data fetching for unified API access.",
    size: "sm",
  },
  {
    icon: "🏗️",
    name: "IaC Module",
    desc: "Declarative infra management with Terraform.",
    size: "sm",
  },
];

export default function StackSection() {
  return (
    <section>
      <div className="my-8 space-y-1">
        <p className="text-[10px] font-bold uppercase tracking-widest text-teal-600">Infrastructure</p>
        <h2 className="text-3xl font-bold text-slate-900 font-headline">The Stack</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Core Orchestrator – large card */}
        <div className="lg:col-span-1 bg-white rounded-xl border border-slate-100 shadow-sm p-6 flex flex-col gap-4">
          <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center text-xl">✳️</div>
          <div>
            <h3 className="text-lg font-bold text-slate-900 font-headline">Core Orchestrator</h3>
            <p className="text-slate-500 text-sm mt-1 leading-relaxed">
              Our proprietary Kubernetes-based kernel that handles dynamic scaling of AI inference
              models. It provides 99.99% uptime with predictive resource allocation.
            </p>
          </div>
          <div className="flex gap-6 mt-2">
            {[
              { val: "1.2ms", label: "Latency" },
              { val: "4.8PB", label: "Throughput" },
              { val: "256k", label: "Shards" },
            ].map(({ val, label }) => (
              <div key={label}>
                <div className="text-slate-900 font-bold font-mono text-base">{val}</div>
                <div className="text-slate-400 text-[10px] uppercase tracking-wider">{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right grid */}
        <div className="lg:col-span-2 grid grid-cols-2 gap-4">
          {stackItems.map((item) => (
            <div
              key={item.name}
              className="bg-white rounded-xl border border-slate-100 shadow-sm p-5 hover:shadow-md transition-shadow flex flex-col gap-3"
            >
              <div className="w-9 h-9 bg-slate-100 rounded-lg flex items-center justify-center text-lg">
                {item.icon}
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 text-sm font-headline">{item.name}</h4>
                <p className="text-slate-400 text-xs mt-0.5 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
