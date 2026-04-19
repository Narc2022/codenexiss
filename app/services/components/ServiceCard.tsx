import Link from "next/link";

export interface ServiceNode {
  id: string;        // e.g. "NODE_01"
  icon: string;      // Material Symbol name
  title: string;
  description: string;
  metaLabel: string;
  metaValue: string;
  accentClass: string; // Tailwind color group: "primary" | "secondary" | "tertiary"
  href?: string;
}

interface ServiceCardProps {
  node: ServiceNode;
}

const accentMap: Record<string, { bg: string; text: string; btn: string }> = {
  primary: {
    bg: "bg-primary/5",
    text: "text-primary",
    btn: "text-secondary hover:text-primary",
  },
  secondary: {
    bg: "bg-secondary/5",
    text: "text-secondary",
    btn: "text-secondary hover:text-primary",
  },
  tertiary: {
    bg: "bg-tertiary/5",
    text: "text-tertiary",
    btn: "text-secondary hover:text-primary",
  },
};

export default function ServiceCard({ node }: ServiceCardProps) {
  const accent = accentMap[node.accentClass] ?? accentMap.primary;

  return (
    <div className="bg-surface-container-lowest p-6 flex flex-col h-full group hover:bg-surface-container-low transition-all duration-300 relative overflow-hidden">
      {/* Node badge */}
      <div className="absolute top-0 right-0 p-2 font-mono text-[8px] text-outline/30 select-none">
        {node.id}
      </div>

      {/* Icon */}
      <div
        className={`w-12 h-12 flex items-center justify-center rounded-lg ${accent.bg} ${accent.text} mb-6`}
      >
        <span
          className="material-symbols-outlined text-3xl"
          style={{ fontVariationSettings: "'FILL' 0" }}
        >
          {node.icon}
        </span>
      </div>

      {/* Copy */}
      <h3 className="font-headline font-bold text-lg mb-2">{node.title}</h3>
      <p className="font-body text-sm text-on-surface-variant mb-8 flex-grow">
        {node.description}
      </p>

      {/* Footer */}
      <div className="mt-auto">
        <div className="font-mono text-[10px] uppercase text-outline mb-4 flex justify-between">
          <span>{node.metaLabel}</span>
          <span className={accent.text}>{node.metaValue}</span>
        </div>
        <Link
          href={node.href ?? "#"}
          className={`w-full flex items-center justify-between text-xs font-label font-bold uppercase tracking-widest ${accent.btn} transition-colors group`}
        >
          View Protocol
          <span className="material-symbols-outlined text-sm transform group-hover:translate-x-1 transition-transform">
            arrow_forward_ios
          </span>
        </Link>
      </div>
    </div>
  );
}
