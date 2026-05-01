import { ReactNode } from 'react';

export type TileVariant = 'full' | 'half' | 'third';
export type TileLayout = 'vertical' | 'horizontal';

export interface ServiceTileProps {
  icon: string;               // Material Symbol name
  iconColor: string;          // Tailwind text color class
  title: string;
  description: string;
  variant?: TileVariant;      // grid span: full=12, half=6, third=4
  layout?: TileLayout;        // vertical (icon top) | horizontal (icon side)
  badge?: string;             // optional badge label
  badgeColor?: string;        // optional badge bg/text classes
  linkLabel?: string;         // optional CTA link
  accent?: boolean;           // subtle gradient tint
}

const spanMap: Record<TileVariant, string> = {
  full:  'md:col-span-12',
  half:  'md:col-span-6',
  third: 'md:col-span-4',
};

export default function ServiceTile({
  icon,
  iconColor,
  title,
  description,
  variant = 'third',
  layout = 'vertical',
  badge,
  badgeColor = 'bg-[#e1dfff] text-[#09006b]',
  linkLabel,
  accent = false,
}: ServiceTileProps) {
  return (
    <div
      className={`
        ${spanMap[variant]}
        group glass-card rounded-xl p-8
        hover:shadow-2xl hover:-translate-y-0.5
        transition-all duration-500
        ${accent ? 'bg-gradient-to-tr from-white to-[#413de4]/5' : ''}
      `}
    >
      {layout === 'horizontal' ? (
        /* Horizontal layout — icon left, text right */
        <div className="flex gap-6 items-center">
          <div className="p-4 bg-[#eceef0] rounded-lg shrink-0">
            <span className={`material-symbols-outlined text-4xl ${iconColor}`}>{icon}</span>
          </div>
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h3 className="font-['Space_Grotesk'] text-xl font-bold">{title}</h3>
              {badge && (
                <span className={`font-['JetBrains_Mono'] text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full ${badgeColor}`}>
                  {badge}
                </span>
              )}
            </div>
            <p className="font-['Manrope'] text-[#464556] text-sm leading-relaxed">{description}</p>
            {linkLabel && (
              <a
                href="#"
                className="inline-flex items-center gap-1 mt-3 text-sm font-['Space_Grotesk'] font-bold text-[#413de4] hover:underline"
              >
                {linkLabel}
                <span className="material-symbols-outlined text-base">open_in_new</span>
              </a>
            )}
          </div>
        </div>
      ) : (
        /* Vertical layout — icon top */
        <>
          <div className="p-4 bg-[#eceef0] rounded-lg w-fit mb-6">
            <span className={`material-symbols-outlined text-4xl ${iconColor}`}>{icon}</span>
          </div>
          <div className="flex items-center gap-3 mb-3">
            <h3 className="font-['Space_Grotesk'] text-xl font-bold">{title}</h3>
            {badge && (
              <span className={`font-['JetBrains_Mono'] text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full ${badgeColor}`}>
                {badge}
              </span>
            )}
          </div>
          <p className="font-['Manrope'] text-[#464556] text-sm leading-relaxed mb-4">{description}</p>
          {linkLabel && (
            <a
              href="#"
              className="inline-flex items-center gap-1 text-sm font-['Space_Grotesk'] font-bold text-[#413de4] hover:underline"
            >
              {linkLabel}
              <span className="material-symbols-outlined text-base">open_in_new</span>
            </a>
          )}
        </>
      )}
    </div>
  );
}
