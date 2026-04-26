import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PartnersBar from "@/components/PartnersBar";
import InnovationFeed from "@/components/InnovationFeed";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";
import { FeedCardProps } from "@/components/FeedCard";

export default function HomePage() {
  const feedItems: FeedCardProps[] = [
  {
    id: "#SEC-09",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCuJeVMzAePdlSuALpqE2A4Bwm-UGHf6-CTBS6XGSfaZHqUkGN_3ZsRKFEIJi1J2bfCFwzZJb3dXNVklKlX1DXUOk7CpAHMBfgMRTdSZiI_Gg5yqn8VLZ4YjzrZqJ6Aw4v-N4WTpvnR_p-wC2ONXL5YhfRAJqjPbxelVrBCUPPiJRGnrM4HF2bGpnxc0UKYGjIV6r1FHvXtJbDnm5OUqwOz8Y0I_sIiHJGH3IbnKoS4e4vBJjD_P0s4wHHl2Ufco4WXLY3MF_1t8_A",
    imageAlt: "Security innovation visual",
    tags: [{ label: "Security", color: "secondary" }],
    version: "v2.4.1",
    title: "Quantum-Resistant Ledger Patch",
    description:
      "Implementation of lattice-based cryptography across the primary database mesh to future-proof asset integrity.",
    timestamp: "2024.10.12.14:30",
  },
  {
    id: "#OPS-14",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuASZr9g1trshjlp40va2GbeIzIQcqNfLFOSeo0lTE6RWq_O04M-iqUkRTWjP_0-siGJT_kuyGdLesNwF-2trirCy9YKRRSTQxJItqPyvTxec6l1OPy7kTSqbxRFovHXFUN4XO5YnILm3etoRh2EoMCBtUbFnc8-3C-8A3mGUxA8apXk6gemprUPjjwpRSrc986H_EVIl2RKCTLr31tTGog7cHEUqJeXEoGdenBvxnw6WAF9JrDmoh3I3aMgZ_iMGUVzGeA_H1_k0ErQ",
    imageAlt: "Network orbital relay visual",
    tags: [
      { label: "Network", color: "primary" },
      { label: "Global", color: "primary" },
    ],
    title: "Low-Orbit Relay Integration",
    description:
      "Satellite constellation peering now active, reducing cross-continental latency by an average of 45ms.",
    timestamp: "2024.10.11.09:12",
  },
  {
    id: "#AI-42",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBG_LRk3_bUUxPJ98J5IubAq_p5v4KVQLwU_m5jYUj1cJLSMjxcQGDdvWmq5NIsNyU5wEsS5n-GJUfjXUEn0ADArSDuk0nmQ1jVPzixZqIW_ANFjJinfsLDrZXHrbh6SxpCz957jyM97TqIDYgYJTbg4QS04w7lCUIXUmR--vbAQNmQ7OG6Tr8RqgjDZ-fcnciTMtioEfjJRNPDsC9OV12jVOU9kv-8xUidDo5saBKdd4PHhw6HZr8dVsbrVEvzkj5HWhS9aaFbqqz2",
    imageAlt: "Automation debugging visual",
    tags: [
      { label: "Automation", color: "tertiary" },
      { label: "Beta", color: "tertiary" },
    ],
    title: "Autonomous Debugging v3",
    description:
      "Self-healing code routines released for production clusters. Error resolution occurring at 3x speed.",
    timestamp: "2024.10.10.22:58",
  },
  
];

  const serviceItems2: FeedCardProps[] = [
  {
    id: "#SEC-09",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCuJeVMzAePdlSuALpqE2A4Bwm-UGHf6-CTBS6XGSfaZHqUkGN_3ZsRKFEIJi1J2bfCFwzZJb3dXNVklKlX1DXUOk7CpAHMBfgMRTdSZiI_Gg5yqn8VLZ4YjzrZqJ6Aw4v-N4WTpvnR_p-wC2ONXL5YhfRAJqjPbxelVrBCUPPiJRGnrM4HF2bGpnxc0UKYGjIV6r1FHvXtJbDnm5OUqwOz8Y0I_sIiHJGH3IbnKoS4e4vBJjD_P0s4wHHl2Ufco4WXLY3MF_1t8_A",
    imageAlt: "Security innovation visual",
    tags: [{ label: "Security", color: "secondary" }],
    version: "v2.4.1",
    title: "Web Engineering",
    description:
      "Building and maintaining modern, secure, and responsive websites and web applications for better user experience and performance.",
    timestamp: "2024.10.12.14:30",
  },
  {
    id: "#OPS-14",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuASZr9g1trshjlp40va2GbeIzIQcqNfLFOSeo0lTE6RWq_O04M-iqUkRTWjP_0-siGJT_kuyGdLesNwF-2trirCy9YKRRSTQxJItqPyvTxec6l1OPy7kTSqbxRFovHXFUN4XO5YnILm3etoRh2EoMCBtUbFnc8-3C-8A3mGUxA8apXk6gemprUPjjwpRSrc986H_EVIl2RKCTLr31tTGog7cHEUqJeXEoGdenBvxnw6WAF9JrDmoh3I3aMgZ_iMGUVzGeA_H1_k0ErQ",
    imageAlt: "Network orbital relay visual",
    tags: [
      { label: "Network", color: "primary" },
      { label: "Global", color: "primary" },
    ],
    title: "Mobile Solution Development",
    description:
      "Designing and delivering scalable, high-performance mobile applications tailored to business needs, with seamless user experience, robust architecture, and cross-platform compatibility.",
    timestamp: "2024.10.11.09:12",
  },
  {
    id: "#AI-42",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBG_LRk3_bUUxPJ98J5IubAq_p5v4KVQLwU_m5jYUj1cJLSMjxcQGDdvWmq5NIsNyU5wEsS5n-GJUfjXUEn0ADArSDuk0nmQ1jVPzixZqIW_ANFjJinfsLDrZXHrbh6SxpCz957jyM97TqIDYgYJTbg4QS04w7lCUIXUmR--vbAQNmQ7OG6Tr8RqgjDZ-fcnciTMtioEfjJRNPDsC9OV12jVOU9kv-8xUidDo5saBKdd4PHhw6HZr8dVsbrVEvzkj5HWhS9aaFbqqz2",
    imageAlt: "Automation debugging visual",
    tags: [
      { label: "Automation", color: "tertiary" },
      { label: "Beta", color: "tertiary" },
    ],
    title: "Autonomous Debugging v3",
    description:
      "Self-healing code routines released for production clusters. Error resolution occurring at 3x speed.",
    timestamp: "2024.10.10.22:58",
  },
];
  return (
    <>
      <main className="max-w-[1920px] mx-auto px-6 lg:px-10 pt-8">
        <HeroSection />
        <PartnersBar />
        <InnovationFeed  feedItems={serviceItems2} title="Advanced Services" miniTitle="The Next-Gen Service Engine"/>
        <NewsletterSection />
        <InnovationFeed feedItems={feedItems} />
      </main>
    </>
  );
}
