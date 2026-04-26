import Link from "next/link";

const navLinks = [
  { label: "Dashboard", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Enterprises", href: "/enterprise" },
  { label: "Our Stories", href: "/our-stories" },
  { label: "Innovation Hub", href: "/blog" },
  { label: "Technical", href: "/technical" },
];

const footerLinks = {
  Resources: [
    { label: "API Reference", href: "/api" },
    { label: "Changelog", href: "/changelog" },
    { label: "Documentation", href: "/docs" },
  ],
  Trust: [
    { label: "Security", href: "/security" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "SLA Guarantee", href: "/sla" },
  ],
};

export default function Footer() {
  return (
    <footer className="w-full border-t border-slate-200/20 bg-slate-100">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 px-10 py-12 max-w-[1920px] mx-auto">
        
        {/* Brand */}
        <div className="col-span-2">
          <span className="font-headline font-black text-slate-900 text-2xl block mb-4">
            CodeNexiss
          </span>

          <p className="text-xs text-slate-500 font-body max-w-xs mb-6 leading-relaxed">
            Advanced orchestration for the modern enterprise. Built for scale,
            engineered for precision.
          </p>

          <span className="mono-data text-xs text-slate-500">
            © {new Date().getFullYear()} CodeNexiss
          </span>
        </div>

        {/* Navigation (Reused) */}
        <div>
          <h4 className="font-headline text-sm uppercase tracking-widest text-slate-900 mb-4">
            Navigation
          </h4>

          <ul className="space-y-2">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-slate-500 hover:text-indigo-400 transition-colors text-sm font-label"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Other Sections */}
        {Object.entries(footerLinks).map(([section, links]) => (
          <div key={section}>
            <h4 className="font-headline text-sm uppercase tracking-widest text-slate-900 mb-4">
              {section}
            </h4>

            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-slate-500 hover:text-indigo-400 transition-colors text-sm font-label"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* System */}
        <div>
          <h4 className="font-headline text-sm uppercase tracking-widest text-slate-900 mb-4">
            System
          </h4>

          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-500" />
              <Link
                href="/status"
                className="text-slate-500 hover:text-indigo-400 text-sm"
              >
                Operational Status
              </Link>
            </li>
            <li className="text-slate-500 text-sm">Region: US-EAST-1</li>
            <li className="text-slate-500 text-sm">Build: 94a2b9</li>
          </ul>
        </div>

      </div>
    </footer>
  );
}