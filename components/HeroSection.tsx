import Image from "next/image";

const stats = [
  { label: "Uptime", value: "99.998%", color: "text-primary" },
  { label: "Latency", value: "14.2ms", color: "text-secondary" },
  { label: "Success", value: "98.4%", color: "text-tertiary" },
  { label: "Nodes", value: "1.2k+", color: "text-on-surface" },
];

const workerStream = [
  { id: "Worker_01", status: "COMPLETED", statusClassName: "text-emerald-600" },
  { id: "Worker_02", status: "PROCESSING", statusClassName: "text-indigo-500" },
  { id: "Worker_03", status: "QUEUED", statusClassName: "text-outline opacity-50" },
];

export default function HeroSection() {
  return (
    <section className="relative mb-20">
      <div className="grid lg:grid-cols-12 gap-8 items-stretch">
        {/* Main Glass Hero */}
        <div className="lg:col-span-8 bg-surface-container-lowest rounded-xl overflow-hidden relative shadow-sm glass-border group">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute inset-0 prismatic-gradient" />
          </div>

          <div className="relative z-10 p-8 lg:p-12 h-full flex flex-col">
            <div className="flex items-center gap-3 mb-6">
              <span className="technical-label text-primary font-bold">
                System Status: Optimal
              </span>

              <div className="h-1 w-12 bg-primary/20 rounded-full overflow-hidden">
                <div className="h-full w-2/3 bg-primary animate-pulse" />
              </div>
            </div>

            <h1 className="text-5xl lg:text-7xl font-headline font-bold text-on-surface leading-tight tracking-tight mb-6">
              Engineering{" "}
              <span className="text-prismatic">Prismatic</span> Intelligence.
            </h1>

            <p className="text-on-surface-variant text-lg lg:text-xl max-w-xl font-body mb-10 leading-relaxed">
              CodeNexiss builds ultra-refined neural architectures for
              high-density enterprise logic. Deploy with surgical precision.
            </p>

            <div className="mt-auto grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((item) => (
                <div
                  key={item.label}
                  className="bg-surface-container-low p-4 rounded-lg glass-border"
                >
                  <span className="technical-label block text-outline mb-1">
                    {item.label}
                  </span>

                  <span className={`mono-data text-xl font-bold ${item.color}`}>
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Neural Visual Overlay */}
          <div className="absolute right-0 top-0 bottom-0 w-1/3 hidden lg:block opacity-20 pointer-events-none">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCOaIc4oTAMU5b5GOUEcOVf6Vmx0qcMBRLyKVdo0KHsGWYrheiFI7-C-N4Jq0l7F3XC658PfzSNoH2gf3xRk6CWosj-N36kaxswYkkDe9PxjF3Y4cERQyRd4wJw1iKKJh8WIKJmmltf1fSFo2booGUI--L26JZ6OYTLXmLQiIXf0pg5JYatwwnaiqOSs0D_C1nIsPJuyN5J3Myo1vmISC9jWBfFsKxr5yeqoJjBD2dz1qRUmZPp0QzPqIbumzRsJVIsSj6gH3KfJcU6"
              alt="abstract digital neural network grid"
              fill
              className="object-cover object-center"
            />
          </div>
        </div>

        {/* CTA Sidebar */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          <div className="bg-primary-container text-on-primary-container p-8 rounded-xl h-1/2 flex flex-col justify-between relative overflow-hidden group">
            <div className="relative z-10">
              <span className="technical-label text-on-primary-container/70 mb-2 block">
                Quick Action
              </span>

              <h3 className="text-2xl font-headline font-bold mb-4">
                Launch a Node
              </h3>

              <p className="text-sm opacity-80 mb-6">
                Provision specialized compute resources with one-click
                orchestration.
              </p>
            </div>

            <button className="relative z-10 bg-on-primary-container text-primary-container font-headline font-bold py-3 px-6 rounded-lg transition-transform active:scale-95 flex items-center justify-center gap-2">
              <span>Deploy Now</span>
              <span className="material-symbols-outlined text-sm">
                rocket_launch
              </span>
            </button>

            <div className="absolute -right-4 -bottom-4 opacity-10 group-hover:scale-110 transition-transform">
              <span
                className="material-symbols-outlined text-[120px]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                terminal
              </span>
            </div>
          </div>

          <div className="bg-surface-container-high p-8 rounded-xl h-1/2 flex flex-col justify-between glass-border">
            <div>
              <span className="technical-label text-on-surface-variant mb-2 block">
                Active Stream
              </span>

              <div className="space-y-3">
                {workerStream.map((worker) => (
                  <div
                    key={worker.id}
                    className="flex items-center justify-between text-xs mono-data"
                  >
                    <span className="text-outline">{worker.id}</span>

                    <span className={worker.statusClassName}>
                      {worker.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-outline-variant/30">
              <a
                href="#"
                className="text-primary text-sm font-headline font-bold flex items-center gap-2 hover:underline"
              >
                View Monitor
                <span className="material-symbols-outlined text-sm">
                  arrow_forward_ios
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}