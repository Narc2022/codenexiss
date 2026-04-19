import Image from "next/image";

export interface FeedCardProps {
  id: string;
  imageUrl: string;
  imageAlt: string;
  tags: { label: string; color: "secondary" | "primary" | "tertiary" }[];
  version?: string;
  title: string;
  description: string;
  timestamp: string;
}

const tagColorMap = {
  secondary: "bg-secondary-fixed text-on-secondary-fixed-variant",
  primary: "bg-primary-fixed text-on-primary-fixed-variant",
  tertiary: "bg-tertiary-fixed text-on-tertiary-fixed-variant",
};

export default function FeedCard({
  id,
  imageUrl,
  imageAlt,
  tags,
  version,
  title,
  description,
  timestamp,
}: FeedCardProps) {
  return (
    <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm glass-border flex flex-col group hover:shadow-xl transition-all duration-300 cursor-pointer">
      {/* Image */}
      <div className="relative h-48 rounded-lg overflow-hidden mb-6 bg-surface-container">
        <Image
          src={imageUrl}
          alt={imageAlt}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4 px-2 py-1 bg-surface-container-lowest/90 backdrop-blur rounded text-[10px] mono-data font-bold border border-outline-variant/20">
          {id}
        </div>
      </div>

      {/* Tags */}
      <div className="flex gap-2 mb-4">
        {tags.map((tag) => (
          <span
            key={tag.label}
            className={`px-2 py-0.5 rounded-full technical-label ${tagColorMap[tag.color]}`}
          >
            {tag.label}
          </span>
        ))}
        {version && (
          <span className="px-2 py-0.5 rounded-full bg-surface-container-high text-outline technical-label">
            {version}
          </span>
        )}
      </div>

      {/* Title */}
      <h3 className="text-xl font-headline font-bold mb-3 group-hover:text-primary transition-colors">
        {title}
      </h3>

      {/* Description */}
      <p className="text-on-surface-variant text-sm mb-6 flex-grow leading-relaxed">
        {description}
      </p>

      {/* Footer */}
      <div className="flex items-center justify-between pt-4 border-t border-outline-variant/10">
        <span className="mono-data text-[10px] text-outline">
          TIMESTAMP: {timestamp}
        </span>
        <span className="material-symbols-outlined text-primary text-lg">
          arrow_outward
        </span>
      </div>
    </div>
  );
}
