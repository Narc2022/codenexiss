
import HeroSection from "./components/HeroSection";
import PipelineSection from "./components/PipelineSection";
import StackSection from "./components/StackSection";
import PerformanceSection from "./components/PerformanceSection";

export default function TechnicalFoundationsPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <main className="max-w-[1920px] mx-auto px-6 lg:px-10 pt-8">
        <HeroSection />
        <PipelineSection />
        <StackSection />
        <PerformanceSection />
      </main>
  
    </div>
  );
}
