import ServiceCard, { ServiceNode } from "./ServiceCard";

const SERVICE_NODES: ServiceNode[] = [
  {
    id: "NODE_00",
    icon: "Print",
    title: "3D Printing",
    description:
      "Transform digital concepts into precise physical prototypes and functional parts using advanced additive manufacturing and cutting-edge 3D printing technology.",
    metaLabel: "PROCESS",
    metaValue: "ADDITIVE",
    accentClass: "primary",
    href: "/services/3d-printing",
  },
  {
    id: "NODE_01",
    icon: "terminal",
    title: "Web Dev",
    description:
      "Build scalable, responsive, and high-performance web applications using modern frontend frameworks and cloud-native technologies.",
    metaLabel: "Status",
    metaValue: "ONLINE",
    accentClass: "primary",
    href: "/services/web-dev",
  },
  {
    id: "NODE_02",
    icon: "query_stats",
    title: "Digital Marketing",
   description:
  "Drive brand growth through data-driven strategies, targeted campaigns, and measurable digital marketing solutions across multiple platforms.",
    metaLabel: "Reach",
    metaValue: "GLOBAL",
    accentClass: "primary",
    href: "/services/digital-marketing",
  },
  {
    id: "NODE_03",
    icon: "smartphone",
    title: "App Dev",
    description:
      "Build high-performance, cross-platform mobile applications with intuitive interfaces, seamless experiences, and scalable backend integration.",
    metaLabel: "Runtime",
    metaValue: "NATIVE+",
    accentClass: "secondary",
    href: "/services/app-dev",
  },
  {
    id: "NODE_04",
    icon: "share",
    title: "Graphic Design",
    description:
      "Mathematical visual systems and algorithmic, marketing materials, and digital designs that communicate ideas with creativity and precision.",
    metaLabel: "Format",
    metaValue: "VECTOR",
    accentClass: "tertiary",
    href: "/services/graphic-design",
  },
  {
    id: "NODE_05",
    icon: "smart_toy",
    title: "AI Automation",
    description:
      "AI Automation is a modern technology-driven service that helps businesses automate repetitive tasks, improve efficiency, and increase productivity using Artificial Intelligence.",
    metaLabel: "Kernel",
    metaValue: "AI-READY",
    accentClass: "secondary",
    href: "/services/ai-automation",
  },
  {
    id: "NODE_06",
    icon: "movie_edit",
    title: "Content Creation",
    description:
      "Content Creation is a creative digital service focused on producing engaging, high-quality content that helps brands connect with their audience, build trust, and grow online.",
    metaLabel: "Res",
    metaValue: "8K_RAW",
    accentClass: "tertiary",
    href: "/services/content-creation",
  },
  {
    id: "NODE_07",
    icon: "support_agent",
    title: "IT & Support",
    description:
      "24/7 technical surveillance and managed infrastructure protocols, system maintenance, and proactive monitoring to ensure secure, efficient, and uninterrupted business operations.",
    metaLabel: "Uptime",
    metaValue: "99.9%",
    accentClass: "primary",
    href: "/services/it-support",
  },
];

export default function ServicesGrid() {
  return (
    <section className="max-w-[1920px] mx-auto px-6 lg:px-10 pb-16">
      {/* Section label */}
      <div className="flex items-center gap-4 mb-8">
      </div>

      {/* 07-column grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-8 border border-outline-variant/10 divide-x divide-y divide-outline-variant/10">
        {SERVICE_NODES.map((node) => (
          <ServiceCard key={node.id} node={node} />
        ))}
      </div>
    </section>
  );
}
