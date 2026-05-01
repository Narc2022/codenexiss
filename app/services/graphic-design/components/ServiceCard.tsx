import { ReactNode } from "react";
import clsx from "clsx";

type Variant = "default" | "accent-secondary" | "accent-tertiary";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  variant?: Variant;
  children?: ReactNode; // extra slot (colour dots, image, etc.)
  className?: string;
}

const variantMap: Record<Variant, string> = {
  default: "bg-surface-container-lowest text-on-surface hover:shadow-lg",
  "accent-secondary":
    "bg-secondary-container text-on-secondary hover:shadow-xl",
  "accent-tertiary": "bg-tertiary text-on-tertiary hover:shadow-xl",
};

export default function ServiceCard({
  icon,
  title,
  description,
  variant = "default",
  children,
  className,
}: ServiceCardProps) {
  return (
    <div
      className={clsx(
        "rounded-xl p-8 transition-all relative overflow-hidden",
        variantMap[variant],
        className
      )}
    >
      <div className="relative z-10">
        <div className="mb-4">{icon}</div>
        <h4 className="text-xl font-bold font-headline mb-2">{title}</h4>
        <p
          className={clsx(
            "text-sm leading-relaxed",
            variant === "default" ? "text-on-surface-variant" : "opacity-80"
          )}
        >
          {description}
        </p>
        {children && <div className="mt-4">{children}</div>}
      </div>
    </div>
  );
}
