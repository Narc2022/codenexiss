import FeaturedWhitepaper  from "./components/FeaturedWhitepaper";
import SystemUpdates       from "./components/SystemUpdates";
import ResearchPapers      from "./components/ResearchPapers";
import NewsletterSection   from "./components/NewsletterSection";

export const metadata = {
  title: "Innovation Hub | CodeNexiss",
  description:
    "Research papers, system updates, and whitepapers from the CodeNexiss engineering collective.",
};

export default function InnovationBlogPage() {
  return (
    <div className="min-h-screen bg-[#f7f9fb] text-slate-900 antialiased">
      <main className="max-w-[1400px] mx-auto px-6 py-12 space-y-20">
        {/* 1. Featured whitepaper hero */}
        <FeaturedWhitepaper />

        {/* 2. Bento feed — system updates (4 cols) + research papers (8 cols) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-4">
            <SystemUpdates />
          </div>
          <div className="md:col-span-8">
            <ResearchPapers />
          </div>
        </div>

        {/* 3. Newsletter CTA */}
        <NewsletterSection />
      </main>
    </div>
  );
}
