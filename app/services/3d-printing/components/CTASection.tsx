"use client";

export default function CTASection() {
    return (
        <section className="py-20 relative overflow-hidden">
            <div className="absolute inset-0 technical-grid opacity-30"></div>
            {/* CTA Section */}
            <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                <div className="mono-metadata text-secondary mb-6 tracking-[0.4em]">INITIATING_SEQUENCE</div>
                <h2 className="font-display text-4xl md:text-6xl font-bold mb-10 leading-tight">Ready to bring your <br />
                    <span className="bg-gradient-to-r from-[#0E6A8A] via-[#3150D6] to-[#8B3DFF] bg-clip-text text-transparent">concepts to life?</span></h2>
                <button className="group prismatic-gradient p-[2px] rounded-xl transition-all hover:scale-105 active:scale-95 shadow-2xl">
                    <div className="bg-surface px-12 py-5 rounded-[10px] flex items-center justify-center gap-4">
                        <span className="font-headline font-bold text-on-surface text-xl">Initialize Prototype</span>
                        <span className="material-symbols-outlined text-secondary group-hover:translate-x-2 transition-transform">terminal</span>
                    </div>
                </button>
                <div className="mt-12 flex justify-center gap-8 opacity-40 grayscale">
                    <div className="flex items-center gap-2"><span className="material-symbols-outlined">security</span> <span className="text-xs font-mono">NDA_SECURE</span></div>
                    <div className="flex items-center gap-2"><span className="material-symbols-outlined">verified</span> <span className="text-xs font-mono">ISO_9001</span></div>
                    <div className="flex items-center gap-2"><span className="material-symbols-outlined">speed</span> <span className="text-xs font-mono">EXPRESS_SHIPPING</span></div>
                </div>
            </div>
        </section>
    );
}
