"use client";

/* ── Inline SVG icons ── */
function HubIcon({ className }: { className?: string }) {
  return <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" /></svg>;
}
function PhotoIcon({ className }: { className?: string }) {
  return <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" /></svg>;
}
function GroupIcon({ className }: { className?: string }) {
  return <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" /></svg>;
}
function SearchIcon({ className }: { className?: string }) {
  return <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" /></svg>;
}
function BuildingIcon({ className }: { className?: string }) {
  return <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" /></svg>;
}
function CursorIcon({ className }: { className?: string }) {
  return <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59" /></svg>;
}
function AdsIcon({ className }: { className?: string }) {
  return <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46" /></svg>;
}
function ArticleIcon({ className }: { className?: string }) {
  return <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" /></svg>;
}
function MailIcon({ className }: { className?: string }) {
  return <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25" /></svg>;
}
function PencilIcon({ className }: { className?: string }) {
  return <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" /></svg>;
}
function TargetIcon({ className }: { className?: string }) {
  return <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1" fill="currentColor" /></svg>;
}

/* ── Service card data ── */
const services = [
  {
    icon: <HubIcon className="w-9 h-9 text-secondary" />,
    title: "Social Media Management",
    desc: "Complete handling of your social media profiles including content, posting, and engagement through automated synchronization.",
    chip: "LATENCY: 0.4ms | SYNC: ACTIVE",
    chipColor: "text-outline",
    span: "lg:col-span-2",
    size: "xl",
  },
  {
    icon: <PhotoIcon className="w-9 h-9 text-tertiary" />,
    title: "Instagram Marketing",
    desc: "Visual strategies to grow followers, engagement, and brand visibility on Instagram.",
    span: "",
    size: "lg",
  },
  {
    icon: <GroupIcon className="w-9 h-9 text-secondary-container" />,
    title: "Facebook Marketing",
    desc: "Targeted campaigns to reach and convert your ideal audience segments.",
    span: "",
    size: "lg",
  },
  {
    icon: <SearchIcon className="w-9 h-9 text-primary" />,
    title: "SEO (On/Off-page)",
    desc: "Improving search rankings through technical optimization and neural backlink strategies.",
    span: "",
    size: "lg",
  },
  {
    icon: <BuildingIcon className="w-9 h-9 text-secondary" />,
    title: "LinkedIn Marketing",
    desc: "Professional marketing strategies for B2B growth and enterprise networking.",
    span: "",
    size: "lg",
  },
  {
    icon: <CursorIcon className="w-9 h-9 text-primary-container" />,
    title: "Google Ads",
    desc: "Paid advertising campaigns to generate high-intent traffic, leads, and sales via the Google Search Ecosystem.",
    span: "lg:col-span-2",
    size: "xl",
    ghost: <TargetIcon className="w-32 h-32 text-on-surface opacity-10" />,
  },
  {
    icon: <AdsIcon className="w-9 h-9 text-secondary" />,
    title: "Meta Ads",
    desc: "Highly targeted Facebook & Instagram ad campaigns to boost conversions.",
    span: "",
    size: "lg",
  },
  {
    icon: <ArticleIcon className="w-9 h-9 text-tertiary-container" />,
    title: "Content Marketing",
    desc: "Strategic content creation designed to attract and retain your primary audience.",
    span: "",
    size: "lg",
  },
  {
    icon: <MailIcon className="w-9 h-9 text-primary" />,
    title: "Email Marketing",
    desc: "Automated drip campaigns designed to nurture leads and increase retention.",
    span: "",
    size: "lg",
  },
  {
    icon: <PencilIcon className="w-9 h-9 text-on-surface" />,
    title: "Copywriting",
    desc: "Persuasive and engaging technical content for websites, ads, and branding.",
    span: "",
    size: "lg",
  },
];

export default function MarketingNodes() {
  return (
    <section className="px-0 py-24 bg-surface-container-low">
      <div className="max-w-[1920px] mx-auto px-6 lg:px-10 pt-6">
        {/* Header */}
        <div className="mb-16">
          <span className="font-headline text-[11px] uppercase tracking-[0.2em] text-primary font-bold">
            Service Catalog
          </span>
          <h2 className="font-headline text-4xl font-bold mt-2">
            Marketing Nodes &amp; Optimizations
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((s, i) => (
            <div
              key={i}
              className={`${s.span ?? ""} bg-surface-container-lowest p-8 rounded-xl border border-outline-variant/10 group hover:shadow-lg transition-all relative overflow-hidden`}
            >
              <div className="relative z-10">
                <div className="mb-4">{s.icon}</div>
                <h3 className={`font-headline font-bold mb-2 ${s.size === "xl" ? "text-xl" : "text-lg"}`}>
                  {s.title}
                </h3>
                <p className={`text-on-surface-variant ${s.size === "xl" ? "text-sm" : "text-xs"}`}>
                  {s.desc}
                </p>
                {s.chip && (
                  <div className={`font-mono text-[10px] ${s.chipColor} mt-4`}>
                    {s.chip}
                  </div>
                )}
              </div>
              {/* Ghost watermark icon for Google Ads card */}
              {s.ghost && (
                <div className="absolute right-0 top-0 w-1/3 h-full flex items-center justify-center opacity-10 pointer-events-none">
                  {s.ghost}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

