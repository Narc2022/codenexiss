import type { Metadata } from "next";
import ContactHero from "./components/ContactHero";
import ContactForm from "./components/ContactForm";
import ContactAside from "./components/ContactAside";
import LocationSection from "./components/LocationSection";

export const metadata: Metadata = {
  title: "Contact & Protocol Integration — CodeNexiss",
  description:
    "Establish a direct uplink with CodeNexiss. Initiate a new project protocol or request technical support through our neural intake system.",
};

export default function ContactPage() {
  return (
    <main className="pt-24 pb-20">
      {/* ── Hero: headline, UTC clock, service selector ── */}
      <ContactHero />

      {/* ── Main form + sidebar ── */}
      <section className="max-w-7xl mx-auto px-8 grid lg:grid-cols-12 gap-12 items-start mb-8">
        <div className="lg:col-span-8">
          <ContactForm />
        </div>
        <div className="lg:col-span-4">
          <ContactAside />
        </div>
      </section>

      {/* ── Physical node / location ── */}
      <LocationSection />
    </main>
  );
}
