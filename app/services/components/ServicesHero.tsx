export default function ServicesHero() {
  return (
    <header className="max-w-[1920px] mx-auto px-6 py-16 md:py-24">
      <div className="flex flex-col gap-4 max-w-4xl">
        <div className="flex items-center gap-3">
          <span className="h-[2px] w-12 node-active-line" />
          <span className="font-mono text-[10px] tracking-tighter uppercase text-primary font-bold">
            Protocol // Service_Mesh_v1.0.4
          </span>
        </div>
        <h1 className="font-headline font-black text-5xl md:text-7xl tracking-tighter text-on-surface">
          Comprehensive{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-tertiary">
            Operational Nodes
          </span>
        </h1>
        <p className="font-body text-on-surface-variant text-lg md:text-xl leading-relaxed max-w-2xl">
          Deploy high-precision technical solutions through our modular service
          ecosystem. Each node is engineered for seamless integration and maximum
          performance.
        </p>
      </div>
    </header>
  );
}
