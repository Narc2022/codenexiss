import type { Metadata } from "next";
import AIAutomationHero from "./components/AIAutomationHero";
import AutomationEcosystem from "./components/AutomationEcosystem";
import MetricsSection from "./components/MetricsSection";
import CTASection from "./components/CTASection";

export const metadata: Metadata = {
  title: "AI Automation — CodeNexiss",
  description:
    "Intelligent Systems Engineering. Synthesizing efficiency through custom AI architectures, neural frameworks, and autonomous enterprise automation.",
};

export default function AIAutomationPage() {
  return (
    <main className="min-h-screen">
      {/* Hero — headline, diagnostics panel, CTA */}
      <AIAutomationHero />

      {/* Bento grid — 7 automation services */}
      <AutomationEcosystem />

      {/* KPI metrics — 92% / 12ms / 100% */}
      <MetricsSection />

      {/* Final CTA — prismatic gradient border */}
      <CTASection />
    </main>
  );
}
