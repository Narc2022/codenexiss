"use client";


export default function ServicesGrid() {
    return (
        <section className="py-24 bg-surface-container-low">
            {/* Service header */}
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-16 text-center lg:text-left">
                    <h2 className="font-display text-4xl font-bold mb-4">Core Capabilities</h2>
                    <p className="font-body text-on-surface-variant max-w-2xl">Specialized additive technologies tailored for aerospace, architecture, and medical engineering.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* FDM Printing */}
                    <div className="group bg-surface-container-lowest p-8 rounded-xl border border-transparent hover:border-secondary/20 transition-all duration-500 shadow-sm hover:shadow-xl relative overflow-hidden">
                        <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center text-secondary mb-6 group-hover:bg-secondary group-hover:text-white transition-colors">
                            <span className="material-symbols-outlined">layers</span>
                        </div>
                        <h3 className="font-headline text-xl font-bold mb-3">FDM Printing</h3>
                        <p className="font-body text-sm text-on-surface-variant leading-relaxed mb-6">Robust functional prototypes and end-use parts using high-performance thermoplastics.</p>
                        <div className="mono-metadata text-[9px] text-outline">ENGINEERING // STRENGTH</div>
                        <div className="absolute top-0 right-0 p-4 opacity-5">
                            <span className="material-symbols-outlined text-6xl">precision_manufacturing</span>
                        </div>
                    </div>
                    {/* SLA Resin Printing */}
                    <div className="group bg-surface-container-lowest p-8 rounded-xl border border-transparent hover:border-secondary/20 transition-all duration-500 shadow-sm hover:shadow-xl relative overflow-hidden">
                        <div className="w-12 h-12 bg-tertiary/10 rounded-lg flex items-center justify-center text-tertiary mb-6 group-hover:bg-tertiary group-hover:text-white transition-colors">
                            <span className="material-symbols-outlined">opacity</span>
                        </div>
                        <h3 className="font-headline text-xl font-bold mb-3">SLA Resin Printing</h3>
                        <p className="font-body text-sm text-on-surface-variant leading-relaxed mb-6">Ultra-high detail surfaces for architectural models and intricate jewelry masters.</p>
                        <div className="mono-metadata text-[9px] text-outline">PRECISION // MICRON_LEVEL</div>
                        <div className="absolute top-0 right-0 p-4 opacity-5">
                            <span className="material-symbols-outlined text-6xl">blur_on</span>
                        </div>
                    </div>
                    {/* SLS Printing */}
                    <div className="group bg-surface-container-lowest p-8 rounded-xl border border-transparent hover:border-secondary/20 transition-all duration-500 shadow-sm hover:shadow-xl relative overflow-hidden">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                            <span className="material-symbols-outlined">grain</span>
                        </div>
                        <h3 className="font-headline text-xl font-bold mb-3">SLS Printing</h3>
                        <p className="font-body text-sm text-on-surface-variant leading-relaxed mb-6">Industrial-grade nylon components with no support structures required.</p>
                        <div className="mono-metadata text-[9px] text-outline">PRODUCTION // SCALABLE</div>
                    </div>
                    {/* 3D Scanning */}
                    <div className="group bg-surface-container-lowest p-8 rounded-xl border border-transparent hover:border-secondary/20 transition-all duration-500 shadow-sm hover:shadow-xl relative overflow-hidden">
                        <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center text-secondary mb-6 group-hover:bg-secondary group-hover:text-white transition-colors">
                            <span className="material-symbols-outlined">center_focus_weak</span>
                        </div>
                        <h3 className="font-headline text-xl font-bold mb-3">3D Scanning</h3>
                        <p className="font-body text-sm text-on-surface-variant leading-relaxed mb-6">Digital twin creation and high-accuracy reverse engineering for existing assets.</p>
                        <div className="mono-metadata text-[9px] text-outline">CAPTURE // METROLOGY</div>
                    </div>
                    {/* CAD Modeling */}
                    <div className="group bg-surface-container-lowest p-8 rounded-xl border border-transparent hover:border-secondary/20 transition-all duration-500 shadow-sm hover:shadow-xl relative overflow-hidden">
                        <div className="w-12 h-12 bg-tertiary/10 rounded-lg flex items-center justify-center text-tertiary mb-6 group-hover:bg-tertiary group-hover:text-white transition-colors">
                            <span className="material-symbols-outlined">category</span>
                        </div>
                        <h3 className="font-headline text-xl font-bold mb-3">CAD Modeling</h3>
                        <p className="font-body text-sm text-on-surface-variant leading-relaxed mb-6">Optimizing complex geometries for additive manufacturing and lightweighting.</p>
                        <div className="mono-metadata text-[9px] text-outline">DESIGN // GENERATIVE</div>
                    </div>
                    {/* Post-Processing */}
                    <div className="group bg-surface-container-lowest p-8 rounded-xl border border-transparent hover:border-secondary/20 transition-all duration-500 shadow-sm hover:shadow-xl relative overflow-hidden">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                            <span className="material-symbols-outlined">auto_fix_high</span>
                        </div>
                        <h3 className="font-headline text-xl font-bold mb-3">Post-Processing</h3>
                        <p className="font-body text-sm text-on-surface-variant leading-relaxed mb-6">Expert finishing, UV curing, painting, and complex assembly solutions.</p>
                        <div className="mono-metadata text-[9px] text-outline">FINISHING // AESTHETIC</div>
                    </div>
                </div>
            </div>
        </section>
    );
}