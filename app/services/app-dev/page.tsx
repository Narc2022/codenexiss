import type { Metadata } from 'next';
import AppDevHero from './components/AppDevHero';
import MobileServicesGrid from './components/MobileServicesGrid';
import NeuralDevCycle from './components/NeuralDevCycle';
import AppDevCTA from './components/AppDevCTA';

export const metadata: Metadata = {
  title: 'Mobile Solution Development | CodeNexiss',
  description:
    'Engineering high-performance mobile ecosystems through neural-enhanced architecture and cross-platform synergy.',
};

export default function AppDevPage() {
  return (
    <main className="pt-12 min-h-screen">
      {/* Hero */}
      <AppDevHero />

      {/* Services catalog grid */}
      <MobileServicesGrid />

      {/* Neural dev cycle / process */}
      <NeuralDevCycle />

      {/* Bottom CTA */}
      <AppDevCTA />
    </main>
  );
}
