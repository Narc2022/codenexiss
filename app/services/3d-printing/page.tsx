import type { Metadata } from "next";
import AdditiveManufacturingHero from "./components/AdditiveManufacturingHero";
import ServicesGrid from "./components/ServicesGrid";
import ServicesCard from "./components/ServicesCard";
import CTASection from "./components/CTASection";




export const metadata = {
  title: "Additive Manufacturing — CodeNexiss",
  description:
    "Additive Manufacturing services for rapid prototyping, and intricate designs. Experience unparalleled quality and innovation with our cutting-edge technology.",
};

export default function AdditiveManufacturingPage() {
  return (
    <main className="">
        {/* Hero — headline, 3D model visual, protocol badge */}
        <AdditiveManufacturingHero />

        {/* Services grid */}
        <ServicesGrid />

        {/* Services cards */}
        <ServicesCard />

        {/* Analytics — bar chart, KPI bars, retention stats */}
        <CTASection />
    </main>
  );
}
   