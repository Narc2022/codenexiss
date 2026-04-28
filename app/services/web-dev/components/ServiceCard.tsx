'use client';

import { ArrowRight } from 'lucide-react';

export interface ServiceCardProps {
  type: string;
  typeColor: 'primary' | 'secondary' | 'tertiary' | 'error' | 'velocity' | 'guardian';
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  metaLabel: string;
  metaValue: string;
  href?: string;
}

const typeColorMap: Record<string, string> = {
  primary: 'bg-[#9cf0ff] text-[#001f24]',
  secondary: 'bg-[#5c5bfe] text-white',
  tertiary: 'bg-[#ddb7ff] text-[#2c0051]',
  error: 'bg-[#ffdad6] text-[#93000a]',
  velocity: 'bg-[#9cf0ff] text-[#001f24]',
  guardian: 'bg-[#ffdad6] text-[#93000a]',
};

export default function ServiceCard({
  type,
  typeColor,
  imageSrc,
  imageAlt,
  title,
  description,
  metaLabel,
  metaValue,
  href = '#',
}: ServiceCardProps) {
  const colorClass = typeColorMap[typeColor] ?? typeColorMap.primary;

  return (
    <div className="group bg-white/80 p-1 rounded-xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-0.5 border border-[#e0e3e5]/60">
      <div className="bg-[#f2f4f6] rounded-lg p-6 h-full flex flex-col">
        {/* Image */}
        <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          <div
            className={`absolute top-3 left-3 px-2 py-1 text-[9px] font-bold rounded font-mono ${colorClass}`}
          >
            TYPE: {type}
          </div>
        </div>

        {/* Content */}
        <h3 className="font-['Space_Grotesk'] text-xl font-bold mb-3 group-hover:text-[#006471] transition-colors">
          {title}
        </h3>
        <p className="font-['Manrope'] text-sm text-[#464556] flex-grow mb-6 leading-relaxed">
          {description}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between mt-auto pt-6 border-t border-[#c7c4d8]/20">
          <div>
            <div className="font-mono text-[9px] text-[#767587] uppercase tracking-wider mb-0.5">
              {metaLabel}
            </div>
            <div className="font-mono text-[10px] text-[#413de4] font-semibold">
              {metaValue}
            </div>
          </div>
          <div className="w-8 h-8 rounded-full border border-[#006471]/20 flex items-center justify-center group-hover:bg-[#006471] group-hover:border-[#006471] transition-all duration-300">
            <ArrowRight
              size={14}
              className="text-[#006471] group-hover:text-white group-hover:translate-x-0.5 transition-all duration-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
