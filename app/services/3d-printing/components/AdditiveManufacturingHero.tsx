"use client";

export default function AdditiveManufacturingHero() {
    return (
        <section className="relative min-h-[850px] flex items-center technical-grid">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="z-10">
                    <div className="flex items-center gap-3 mb-6">
                        <span className="mono-metadata text-secondary border border-outline-variant/30 px-2 py-1 rounded">PROTOCOL // ADDITIVE_V1.0</span>
                        <span className="flex items-center gap-1 mono-metadata text-primary">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                            SYSTEM_STATUS: OPTIMAL
                        </span>
                    </div>
                    <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight text-on-surface mb-6 leading-[1.1]">
                        Additive <br />
                        <span className="bg-gradient-to-r from-[#0E6A8A] via-[#3150D6] to-[#8B3DFF] bg-clip-text text-transparent">Manufacturing</span><br />
                        &amp; Prototyping
                    </h1>
                    <p className="font-body text-lg text-on-surface-variant max-w-xl mb-10 leading-relaxed">
                        Redefining precision engineering through advanced 3D printing solutions. From high-detail architectural models to industrial-grade functional components, we bridge the gap between digital design and physical reality.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <button className="prismatic-gradient text-white px-8 py-4 rounded-xl font-headline font-bold flex items-center gap-3 shadow-xl hover:shadow-secondary/20 transition-all">
                            Initialize Prototype
                            <span className="material-symbols-outlined">arrow_forward</span>
                        </button>
                        <button className="bg-surface-container-highest text-primary px-8 py-4 rounded-xl font-headline font-bold">
                            View Materials
                        </button>
                    </div>
                </div>
                {/* Technical Visualization Placeholder */}
                <div className="relative h-[600px] w-full flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-tr from-secondary/5 to-transparent rounded-3xl"></div>
                    <div className="relative w-full h-full glass-panel rounded-3xl overflow-hidden border border-outline-variant/20 shadow-2xl">
                        <img className="w-full h-full object-cover" data-alt="A high-tech cinematic visualization of an industrial 3D printer in mid-process, with a vibrant violet laser scanning a complex geometric lattice structure. The lighting is cold and clinical with neon indigo highlights. The surrounding environment is a sterile, futuristic laboratory with matte gray surfaces and prismatic glass partitions. The mood is high-precision and technologically advanced, echoing a light-mode science-fiction aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBNK2aq2wPfo6HvYPYwyjfVXrNyDa-jmIcv8y7YbhiIszSinaVD8L8jF3eXW3M_Fi4TVaAW8StWeaVdl-aMUI88r81t6hy3xFJXVJWOxQfUZphCJAFQ5Ss5fa7RGq0uOYcXK0IJObmlSYHI6vsayv_xON9LiLMY0y4PjLCMiDnhQBCCNpoFfIQnnCGcEimILnYRlodaX1vKJQIp7D_y804aiv7LcTquk2JwBkn2m08R-SavDT4welcdzb3aS8TMH_2HmxakHx-vj_Zr" />
                        <div className="absolute bottom-6 left-6 p-4 bg-white/80 backdrop-blur-md rounded-lg border border-outline-variant/20">
                            <div className="flex gap-4">
                                <div className="text-xs font-mono">
                                    <div className="text-outline">X-AXIS</div>
                                    <div className="text-secondary font-bold">452.88mm</div>
                                </div>
                                <div className="text-xs font-mono">
                                    <div className="text-outline">LAYER</div>
                                    <div className="text-secondary font-bold">2484/4500</div>
                                </div>
                                <div className="text-xs font-mono">
                                    <div className="text-outline">TEMP</div>
                                    <div className="text-secondary font-bold">235°C</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}