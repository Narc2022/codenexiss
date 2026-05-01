import type { Metadata } from "next";
import GraphicDesignHero from "./components/GraphicDesignHero";
import ServicesGrid from "./components/ServicesGrid";
import CTASection from "./components/CTASection";

export const metadata: Metadata = {
  title: "Graphic Design — CodeNexiss",
  description:
    "Visual Identity Engineering. Transforming brands with surgical precision through logo design, brand identity kits, and immersive digital identities.",
};

export default function GraphicDesignPage() {
  return (
    <main>
      {/* Hero — headline, CTA buttons, precision metric badge */}
      <GraphicDesignHero />

      {/* Bento grid — 10 design services */}
      <ServicesGrid />

      {/* Glass CTA — email audit request */}
      <CTASection />
    </main>
  );
}
