import HeroSection from "./components/HeroSection";
import ProductionModules from "./components/ProductionModules";
import WorkflowTimeline from "./components/WorkflowTimeline";
import SystemPerformance from "./components/SystemPerformance";
import CTASection from "./components/HeroSection";

export const metadata = {
  title: "AURA.SYNTHETIX | Content Creation Systems",
  description:
    "Precision-engineered content creation infrastructure for high-growth digital ecosystems.",
};

export default function ContentCreationPage() {
  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <ProductionModules />
      <WorkflowTimeline />
      <SystemPerformance />
      <CTASection />
    </main>
  );
}
