"use client";

export default function CTASection() {
  return (
    <section className="py-24 px-6 lg:px-12">
      {/* Prismatic 1px border wrapper */}
      <div className="max-w-5xl mx-auto rounded-2xl prismatic-gradient p-[1px]">
        <div className="bg-surface-bright p-12 lg:p-20 rounded-[calc(1rem-1px)] text-center">
          <h2 className="text-4xl lg:text-5xl font-headline font-bold mb-8 tracking-tight">
            Ready to evolve your operations?
          </h2>
          <p className="text-on-surface-variant text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
            Deploy custom AI agents and automated architectures designed
            specifically for your organizational goals. Start your
            transformation today.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button className="prismatic-gradient text-white px-10 py-5 rounded-lg font-headline font-bold uppercase tracking-widest text-sm hover:shadow-2xl hover:shadow-primary/30 transition-all">
              Initiate System Integration
            </button>
            <button className="border border-outline-variant text-on-surface px-10 py-5 rounded-lg font-headline font-bold uppercase tracking-widest text-sm hover:bg-surface-container-low transition-all">
              Schedule Audit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
