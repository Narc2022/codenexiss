"use client";

import clsx from "clsx";

const tiers = [
  {
    id: "lite",
    level: "LEVEL_01",
    name: "Lite",
    tagline: "Essential infrastructure for specialized department operations.",
    price: "$2,400",
    cta: "Initialize Project",
    ctaStyle: "default",
    features: ["5 Core Modules", "100 GB Data Ingress", "Standard Security Mesh"],
    accentColor: "text-primary",
    recommended: false,
  },
  {
    id: "sync",
    level: "LEVEL_02",
    name: "Sync",
    tagline: "Scalable orchestration for multi-region enterprise environments.",
    price: "$8,900",
    cta: "Initialize Project",
    ctaStyle: "gradient",
    features: [
      "Unlimited Modules",
      "1 TB Data Ingress",
      "Zero-Trust Integration",
      "24/7 Technical Support",
    ],
    accentColor: "text-secondary",
    recommended: true,
  },
  {
    id: "core",
    level: "LEVEL_03",
    name: "Core",
    tagline: "Bespoke silicon-level integration for global market leaders.",
    price: "CUSTOM",
    cta: "Contact Architect",
    ctaStyle: "dark",
    features: [
      "Dedicated Infrastructure",
      "Unlimited Throughput",
      "On-prem Deployment Option",
    ],
    accentColor: "text-tertiary",
    recommended: false,
  },
];

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      className={clsx("w-5 h-5 flex-shrink-0", className)}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

export default function DataSection() {
  return (
    <section className="mb-24">
      {/* Header */}
      <div className="text-center mb-16">
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-outline mb-3">
          Resource Allocation
        </p>
        <h2 className="font-headline text-4xl font-bold text-on-surface">
          Compute Density Levels
        </h2>
      </div>

      {/* Tier cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {tiers.map((tier) => (
          <div
            key={tier.id}
            className={clsx(
              "relative p-8 rounded-xl flex flex-col hover:scale-[1.02] transition-transform duration-300",
              tier.recommended
                ? "bg-surface-container-lowest shadow-2xl shadow-primary/10 border-t-4 border-secondary"
                : "bg-surface-container-low"
            )}
          >
            {/* Recommended badge */}
            {tier.recommended && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-secondary text-white px-4 py-1 rounded-full text-[10px] font-bold font-mono">
                RECOMMENDED
              </div>
            )}

            <div
              className={clsx(
                "font-mono text-[10px] mb-4",
                tier.recommended ? "text-secondary" : "text-outline"
              )}
            >
              {tier.level}
            </div>

            <h3 className="font-headline text-2xl font-bold mb-2">{tier.name}</h3>
            <p className="text-sm text-on-surface-variant mb-8 h-12">{tier.tagline}</p>

            <div className="font-headline text-4xl font-bold mb-8">
              {tier.price === "CUSTOM" ? (
                <span>CUSTOM</span>
              ) : (
                <>
                  {tier.price}
                  <span className="text-sm font-normal text-outline">/mo</span>
                </>
              )}
            </div>

            <ul className="space-y-4 mb-12 flex-1">
              {tier.features.map((f) => (
                <li key={f} className="flex items-center gap-3 text-sm">
                  <CheckIcon className={tier.accentColor} />
                  {f}
                </li>
              ))}
            </ul>

            {/* CTA button */}
            <button
              className={clsx(
                "w-full py-4 font-headline font-bold text-xs uppercase tracking-widest transition-all",
                tier.ctaStyle === "gradient" &&
                  "prismatic-gradient text-white hover:opacity-90",
                tier.ctaStyle === "dark" &&
                  "bg-on-surface text-surface hover:bg-slate-800",
                tier.ctaStyle === "default" &&
                  "bg-surface-container-highest text-on-surface hover:bg-surface-container-high"
              )}
            >
              {tier.cta}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
