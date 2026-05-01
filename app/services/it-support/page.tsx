import HeroSection from "./components/HeroSection";
import CoreServices from "./components/CoreServices";
import SystemUptime from "./components/SystemUptime";
import CTASection from "./components/CTASection";

export const metadata = {
  title: "CodeNexiss | IT & Support Services",
  description:
    "Mission-critical IT support and infrastructure management for the modern enterprise.",
};

export default function ITSupportPage() {
  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <CoreServices />
      <SystemUptime />
      <CTASection />
    </main>
  );
}
