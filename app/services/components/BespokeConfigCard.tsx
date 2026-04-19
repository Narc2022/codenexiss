import Link from "next/link";

export default function BespokeConfigCard() {
  return (
    <div className="rounded-xl bg-gradient-to-br from-secondary to-tertiary p-8 text-on-secondary shadow-xl relative overflow-hidden flex flex-col justify-between">
      {/* Background glow */}
      <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-white/10 rounded-full blur-3xl" />

      <div>
        <span
          className="material-symbols-outlined text-4xl mb-4 block"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          bolt
        </span>
        <h4 className="font-headline font-black text-2xl leading-tight mb-4">
          Request Bespoke Configuration
        </h4>
        <p className="font-body text-sm opacity-90 leading-relaxed mb-6">
          Need a custom technical stack? Our engineers can architect a bespoke
          environment tailored to your exact operational requirements.
        </p>
      </div>

      <Link
        href="/contact"
        className="bg-white text-secondary font-label font-bold uppercase tracking-widest py-3 px-6 rounded-lg hover:bg-opacity-90 transition-all flex items-center justify-between group"
      >
        Initialize Setup
        <span className="material-symbols-outlined group-hover:translate-x-1 transition-all">
          rocket_launch
        </span>
      </Link>
    </div>
  );
}
