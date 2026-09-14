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
      id: "#OPS-04",
      imageUrl:
        "https://res.cloudinary.com/dn4zh9pyq/image/upload/q_auto/f_auto/v1781454773/mobile-development_dfewda.jpg",
      imageAlt: "Mobile Solution Development visual",
      tags: [
        { label: "Mobility", color: "primary" },
        { label: "MobDev", color: "primary" },
      ],
      title: "Mobile Solution Development",
      description:
        "Designing and delivering scalable, high-performance mobile applications tailored to business needs, with seamless user experience, robust architecture, and cross-platform compatibility.",
      timestamp: "2024.10.11.09:12",
    },
    {
      id: "#OPS-05",
      imageUrl:
        "https://res.cloudinary.com/dn4zh9pyq/image/upload/q_auto/f_auto/v1781454384/Drone-technology_oem5ue.jpg",
      imageAlt: "Drone Technology Next-Gen visual",
      tags: [
        { label: "DRONEIO", color: "secondary" },
        { label: "AEROX", color: "secondary" },
      ],
      title: "Drone Technology Next-Gen",
      description:
        "Empowering modern industries with intelligent drone technology, delivering advanced aerial surveillance, precision mapping, automated inspections, and real-time data solutions for smarter and faster operations.",
      timestamp: "2024.10.11.09:12",
    },
    {
      id: "#AI-06",
      imageUrl:
        "https://res.cloudinary.com/dn4zh9pyq/image/upload/q_auto/f_auto/v1781454386/Robotic-innovation_udeods.jpg",
      imageAlt: "Robotics Innovation Center visual",
      tags: [
        { label: "ROBOIQ", color: "tertiary" },
        { label: "TECHBOT", color: "tertiary" },
      ],
      title: "Robotics Innovation Center",
      description:
        "Revolutionizing industries with intelligent robotics solutions, combining automation, artificial intelligence, and precision engineering to enhance productivity, efficiency, and smart operational performance.",
      timestamp: "2024.10.10.22:58",
    },

  ];

  const serviceItems2: FeedCardProps[] = [
     {
      id: "#SEC-00",
      imageUrl:
        "https://res.cloudinary.com/dn4zh9pyq/image/upload/q_auto/f_auto/v1781453347/3D-printing_otkism.jpg",
      imageAlt: "3D Printing Solutions visual",
      tags: [{ label: "NEXPRINT", color: "primary" },
      { label: "FORGEZD", color: "primary" }
      ],
      // version: "v2.4.1",
      title: "3D Printing Solutions",
      description:
        "Transforming ideas into reality with advanced 3D printing technology, delivering precise prototypes, custom designs, and innovative manufacturing solutions for modern industries and creative projects.",
      timestamp: "2024.10.12.14:30",
    },
    {
      id: "#SEC-07",
      imageUrl:
        "https://res.cloudinary.com/dn4zh9pyq/image/upload/v1781428414/web-engineering_dh2eup.webp",
      imageAlt: "Web Engineering visual",
      tags: [{ label: "WebTech", color: "secondary" },
      { label: "WebCore", color: "secondary" }
      ],
      // version: "v2.4.1",
      title: "Web Engineering",
      description:
        "Building and maintaining modern, secure, and responsive websites and web applications for better user experience and performance.",
      timestamp: "2024.10.12.14:30",
    },
    {
      id: "#AI-14",
      imageUrl:
        "https://res.cloudinary.com/dn4zh9pyq/image/upload/q_auto/f_auto/v1781451999/Digital_marketing_jymn1f.jpg", imageAlt: "Digital Marketing  visual",
      tags: [
        { label: "DigiMark", color: "tertiary" },
        { label: "AdTech", color: "tertiary" },
      ],
      title: "Digital Marketing",
      description:
        "Digital marketing involves strategic use of online platforms and data-driven techniques to increase brand visibility, attract targeted audiences, and drive measurable business growth.",
      timestamp: "2024.10.10.22:58",
    },
  ];
  return (
    <>
      <main className="max-w-[1920px] mx-auto px-6 lg:px-10 pt-8">
        <HeroSection />
        <PartnersBar />
        <InnovationFeed feedItems={serviceItems2} title="Advanced Services" miniTitle="The Next-Gen Service Engine" />
        <NewsletterSection />
        <InnovationFeed feedItems={feedItems} title="Upcoming Services" miniTitle="fFuture Feed" />
      </main>
    </>
  );
}
