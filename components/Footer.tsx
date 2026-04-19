import Link from "next/link";

const footerLinks = {
  Platform: ["Dashboard", "Deployments", "Analytics"],
  Resources: ["API Reference", "Changelog", "Documentation"],
  Trust: ["Security", "Privacy Policy", "SLA Guarantee"],
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
            © 2024 CodeNexiss // v1.0.4-STABLE
          </span>
        </div>

        {/* Link Columns */}
        {Object.entries(footerLinks).map(([section, links]) => (
          <div key={section}>
            <h4 className="font-headline text-sm uppercase tracking-widest text-slate-900 mb-4">
              {section}
            </h4>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link}>
                  <Link
                    href="#"
                    className="text-slate-500 hover:text-indigo-400 transition-colors text-sm font-label"
                  >
                    {link}
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
              <div className="w-2 h-2 rounded-full bg-emerald-500 flex-shrink-0" />
              <Link
                href="#"
                className="text-slate-500 hover:text-indigo-400 transition-colors text-sm font-label"
              >
                Operational Status
              </Link>
            </li>
            <li className="text-slate-500 text-sm font-label">
              Region: US-EAST-1
            </li>
            <li className="text-slate-500 text-sm font-label">Build: 94a2b9</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
