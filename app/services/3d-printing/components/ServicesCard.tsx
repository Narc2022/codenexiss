"use client";

export default function ServicesCard() {
    return (
        <section className="py-24 bg-surface">
            {/* Technical Specifications Dashboard */}
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    <div className="lg:col-span-4 bg-surface-container-lowest p-8 rounded-xl border border-outline-variant/10 shadow-sm h-full">
                        <div className="mono-metadata text-secondary mb-4">SPEC_MODULE_01</div>
                        <h3 className="font-display text-2xl font-bold mb-8 flex items-center gap-2">
                            Material Library
                            <span className="material-symbols-outlined text-outline">database</span>
                        </h3>
                        <div className="space-y-6">
                            <div className="flex items-center justify-between p-4 bg-surface-container-low rounded-lg">
                                <span className="font-mono text-sm font-bold">PLA/ABS</span>
                                <span className="text-xs text-on-surface-variant">Functional Basics</span>
                            </div>
                            <div className="flex items-center justify-between p-4 bg-surface-container-low rounded-lg border-l-4 border-secondary">
                                <span className="font-mono text-sm font-bold">Resin (High-Clear)</span>
                                <span className="text-xs text-secondary font-bold">Photopolymer</span>
                            </div>
                            <div className="flex items-center justify-between p-4 bg-surface-container-low rounded-lg">
                                <span className="font-mono text-sm font-bold">Carbon Fiber Nylon</span>
                                <span className="text-xs text-on-surface-variant">Aerospace Grade</span>
                            </div>
                            <div className="flex items-center justify-between p-4 bg-surface-container-low rounded-lg">
                                <span className="font-mono text-sm font-bold">TPU (Flexible)</span>
                                <span className="text-xs text-on-surface-variant">Shore 95A</span>
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-surface-container-lowest p-8 rounded-xl border border-outline-variant/10 shadow-sm relative overflow-hidden">
                            <div className="mono-metadata text-tertiary mb-4">METRIC_MODULE_02</div>
                            <div className="flex items-baseline gap-2 mb-2">
                                <span className="font-display text-6xl font-bold tracking-tighter">50</span>
                                <span className="font-headline text-xl text-outline">microns</span>
                            </div>
                            <h4 className="font-headline font-bold text-on-surface-variant mb-4 uppercase tracking-widest text-xs">Minimum Layer Resolution</h4>
                            <div className="w-full bg-surface-container h-1 rounded-full overflow-hidden">
                                <div className="h-full prismatic-gradient w-3/4"></div>
                            </div>
                            <p className="font-body text-xs text-outline mt-6 italic">Exceeding standard desktop performance by 400%.</p>
                        </div>
                        <div className="bg-surface-container-lowest p-8 rounded-xl border border-outline-variant/10 shadow-sm relative overflow-hidden">
                            <div className="mono-metadata text-primary mb-4">METRIC_MODULE_03</div>
                            <div className="flex items-baseline gap-2 mb-2">
                                <span className="font-display text-6xl font-bold tracking-tighter">1.2</span>
                                <span className="font-headline text-xl text-outline">m³</span>
                            </div>
                            <h4 className="font-headline font-bold text-on-surface-variant mb-4 uppercase tracking-widest text-xs">Max Build Volume</h4>
                            <div className="grid grid-cols-6 gap-1 mt-4">
                                <div className="aspect-square bg-primary/20 rounded-sm"></div>
                                <div className="aspect-square bg-primary/20 rounded-sm"></div>
                                <div className="aspect-square bg-primary/40 rounded-sm"></div>
                                <div className="aspect-square bg-primary/60 rounded-sm"></div>
                                <div className="aspect-square bg-primary/80 rounded-sm"></div>
                                <div className="aspect-square bg-primary rounded-sm animate-pulse"></div>
                            </div>
                            <p className="font-body text-xs text-outline mt-6 italic">Large-format industrial capabilities enabled.</p>
                        </div>
                        <div className="md:col-span-2 bg-on-surface p-8 rounded-xl text-surface relative overflow-hidden">
                            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
                            <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-8">
                                <div>
                                    <div className="mono-metadata text-secondary mb-2">ANALYTICS_V4</div>
                                    <h4 className="font-display text-2xl font-bold">Production Efficiency Dashboard</h4>
                                    <p className="text-surface-dim font-body text-sm mt-2">Real-time telemetry and supply chain integration for batch manufacturing.</p>
                                </div>
                                <div className="flex gap-10">
                                    <div className="text-center">
                                        <div className="text-3xl font-bold font-display text-secondary">99.8%</div>
                                        <div className="text-[10px] uppercase font-mono tracking-widest text-surface-dim">Success Rate</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-3xl font-bold font-display text-primary">24h</div>
                                        <div className="text-[10px] uppercase font-mono tracking-widest text-surface-dim">Lead Time</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}  