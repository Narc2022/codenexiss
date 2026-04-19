import ServicesHero from "./components/ServicesHero";
import ServicesGrid from "./components/ServicesGrid";
import OperationalBand from "./components/OperationalBand";
import DataSection from "./components/DataSection";

export const metadata = {
  title: "Services — CodeNexiss",
  description:
    "Custom enterprise portals engineered for massive scale. Explore system architecture, real-time telemetry, and compute density levels.",
};

export default function ServicesPage() {
  return (
    <main className="max-w-[1440px] mx-auto px-6 py-12 md:py-20">
      {/* Hero — headline, CTA, uptime visual */}
      <ServicesHero />

      {/* Feature grid — Modular Arch, AI Search, Zero-Trust, Telemetry */}
      <ServicesGrid />

      {/* Case study dark band — Logisstiics / supply chain */}
      <OperationalBand />

      {/* Pricing tiers — Lite / Sync / Core */}
      <DataSection />
    </main>
  );
}
