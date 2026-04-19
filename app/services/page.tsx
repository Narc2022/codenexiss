import { Metadata } from "next";
import DataSection from "./components/DataSection";
import ServicesGrid from "./components/ServicesGrid";
import ServicesHero from "./components/ServicesHero";

export const metadata: Metadata = {
  title: "CodeNexiss // Services Protocol",
  description:
    "Deploy high-precision technical solutions through our modular service ecosystem.",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen technical-grid">
      <ServicesHero />
      <ServicesGrid />
      <DataSection />
    </main>
  );
}
