const partners = [
  { name: "DATASTREAM", icon: "storage" },
  { name: "NEBULA-X", icon: "cloud" },
  { name: "SENTINEL", icon: "shield" },
  { name: "QUARK.IO", icon: "bolt" },
  { name: "CORELOGIC", icon: "hub" },
];

export default function PartnersBar() {
  return (
    <div className="flex flex-wrap items-center gap-8 py-8 border-y border-outline-variant/10 mb-12">
      <span className="technical-label text-outline whitespace-nowrap">
        Verified Partners
      </span>
      <div className="flex flex-wrap items-center gap-8">
        {partners.map((partner) => (
          <div
            key={partner.name}
            className="flex items-center gap-2 text-outline hover:text-on-surface transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[18px]">
              {partner.icon}
            </span>
            <span className="technical-label text-[11px]">{partner.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
