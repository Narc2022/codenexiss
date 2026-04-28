import type { Metadata } from 'next';
import ServicesHero from './components/ServicesHero';
import ServicesGrid from './components/ServicesGrid';
import DataSection from './components/DataSection';
import OperationalBandwidth from './components/OperationalBandwidth';

export const metadata: Metadata = {
  title: 'Web Engineering | CodeNexiss',
  description:
    'Deploying high-precision digital instruments. We blend technical rigidity with ethereal aesthetics to build performance-first web ecosystems that scale with your ambitions.',
};

export default function WebEngineeringPage() {
  return (
    <main className="max-w-[1920px] mx-auto px-6 lg:px-10 pt-8">
      {/* Live system metrics ticker */}
      <div className="mb-8 border-b border-[#e0e3e5] pb-4">
        <OperationalBandwidth />
      </div>

      {/* Hero */}
      <ServicesHero />

      {/* Services grid */}
      <ServicesGrid />

      {/* CTA / data section */}
      <DataSection />
    </main>
  );
}
