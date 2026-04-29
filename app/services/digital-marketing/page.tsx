import type { Metadata } from "next";
import DigitalMarketingHero from "./components/DigitalMarketingHero";
import MarketingNodes from "./components/MarketingNodes";
import PerformanceMetrics from "./components/PerformanceMetrics";
import CTASection from "./components/CTASection";

export const metadata: Metadata = {
  title: "Digital Marketing Systems — CodeNexiss AI",
  description:
    "Synthesize high-velocity growth through our neural-integrated marketing protocols. AI-driven visibility, SEO, social media, Google Ads, and more.",
};

export default function DigitalMarketingPage() {
  return (
    <main className="pt-24">
      {/* Hero — headline, neural network visual, protocol badge */}
      <DigitalMarketingHero />

      {/* 10-service bento grid */}
      <MarketingNodes />

      {/* Analytics — bar chart, KPI bars, retention stats */}
      <PerformanceMetrics />

      {/* Prismatic CTA */}
      <CTASection />
    </main>
  );
}
