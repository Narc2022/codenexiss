
import GenesisHero   from "./components/GenesisHero";
import MissionProtocols from "./components/MissionProtocols";
import TeamArchitects from "./components/TeamArchitects";

export const metadata = {
  title: "CodeNexiss // Our Story & Team",
  description:
    "The genesis, mission protocols, and architects behind CodeNexiss — AI-driven infrastructure built for the next decade.",
};

export default function OurStoryPage() {
  return (
    <div className="min-h-screen bg-[#f7f9fb] text-slate-900 antialiased">
      <main>
        <GenesisHero />
        <MissionProtocols />
        <TeamArchitects />
      </main>
    </div>
  );
}
