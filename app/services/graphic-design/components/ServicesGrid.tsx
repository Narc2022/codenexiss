"use client";

/* ─── Icon components (inline SVG, no external deps) ─── */

function PentagonIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2L2.5 9.27l3.77 11.63h11.46L21.5 9.27z" opacity={0.85} />
    </svg>
  );
}
function StyleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  );
}
function SocialIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
    </svg>
  );
}
function PlayIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.024-.983a1.125 1.125 0 010 1.966l-5.603 3.113A1.125 1.125 0 019 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113z" clipRule="evenodd" />
    </svg>
  );
}
function PosterIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 9v7.5" />
    </svg>
  );
}
function CardIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    </svg>
  );
}
function BookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
    </svg>
  );
}
function PackageIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
    </svg>
  );
}
function PresentationIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
    </svg>
  );
}
function PhotoIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
    </svg>
  );
}

/* ─── Main component ─── */

export default function ServicesGrid() {
  return (
    <section className="max-w-[1920px] mx-auto px-6 lg:px-10 pt-8 ">
      {/* Section header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <h2 className="text-sm font-bold font-headline uppercase tracking-[0.2em] text-secondary mb-4">
            The Laboratory Scope
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold font-headline tracking-tight">
            Technical Design Capabilities
          </h3>
        </div>
        <div className="font-mono text-[11px] text-on-surface-variant flex gap-6 shrink-0">
          <span>[ SERVICES_COUNT: 10 ]</span>
          <span>[ STATUS: OPERATIONAL ]</span>
        </div>
      </div>

      {/* ── Bento grid ── */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">

        {/* 1. Logo Design — wide */}
        <div className="md:col-span-8 bg-surface-container-lowest rounded-xl p-8 hover:shadow-lg transition-all group relative overflow-hidden">
          <div className="relative z-10">
            <PentagonIcon className="w-10 h-10 text-primary mb-4" />
            <h4 className="text-2xl font-bold font-headline mb-3">Logo Design</h4>
            <p className="text-on-surface-variant max-w-md">
              Creative and unique logo designs that represent your brand identity
              through mathematical balance and artistic flair.
            </p>
          </div>
          {/* Ghost watermark */}
          <div className="absolute bottom-0 right-6 font-headline text-[80px] font-black text-on-surface/5 select-none leading-none group-hover:text-on-surface/10 transition-all duration-500 pointer-events-none">
            PROCESSS
          </div>
        </div>

        {/* 2. Brand Identity Kit */}
        <div className="md:col-span-4 bg-surface-container-lowest rounded-xl p-8 hover:shadow-lg transition-all group">
          <StyleIcon className="w-10 h-10 text-secondary mb-4" />
          <h4 className="text-2xl font-bold font-headline mb-3">Brand Identity Kit</h4>
          <p className="text-on-surface-variant text-sm mb-6">
            Complete branding solutions including color palette, typography, and
            precise brand guidelines.
          </p>
          <div className="flex gap-2 mt-auto">
            <div className="w-8 h-8 rounded-full bg-primary shadow-inner" />
            <div className="w-8 h-8 rounded-full bg-secondary shadow-inner" />
            <div className="w-8 h-8 rounded-full bg-tertiary shadow-inner" />
          </div>
        </div>

        {/* 3. Social Media Creatives */}
        <div className="md:col-span-4 bg-surface-container-lowest rounded-xl p-8 hover:shadow-lg transition-all">
          <SocialIcon className="w-10 h-10 text-tertiary mb-4" />
          <h4 className="text-xl font-bold font-headline mb-2">Social Media Creatives</h4>
          <p className="text-on-surface-variant text-sm">
            Eye-catching posts and designs tailored for rapid engagement across
            all digital platforms.
          </p>
        </div>

        {/* 4. YouTube Thumbnails — featured */}
        <div className="md:col-span-4 bg-secondary-container text-on-secondary rounded-xl p-8 hover:shadow-xl transition-all relative overflow-hidden">
          <div className="relative z-10">
            <PlayIcon className="w-10 h-10 mb-4" />
            <h4 className="text-xl font-bold font-headline mb-2">YouTube Thumbnails</h4>
            <p className="text-on-secondary/80 text-sm">
              High-converting thumbnails designed with psychological triggers to
              maximize CTR.
            </p>
          </div>
          <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/10 rounded-full blur-2xl pointer-events-none" />
        </div>

        {/* 5. Posters & Banners */}
        <div className="md:col-span-4 bg-surface-container-lowest rounded-xl p-8 hover:shadow-lg transition-all">
          <PosterIcon className="w-10 h-10 text-primary mb-4" />
          <h4 className="text-xl font-bold font-headline mb-2">Posters &amp; Banners</h4>
          <p className="text-on-surface-variant text-sm">
            Creative visual communication for high-impact promotions and event
            advertisements.
          </p>
        </div>

        {/* 6. Business Cards — mini */}
        <div className="md:col-span-3 bg-surface-container-lowest rounded-xl p-8 hover:shadow-lg transition-all">
          <CardIcon className="w-10 h-10 text-secondary mb-4" />
          <h4 className="text-lg font-bold font-headline mb-2">Business Cards</h4>
          <p className="text-on-surface-variant text-xs">
            Tactile, professional designs that leave an indelible first
            impression.
          </p>
        </div>

        {/* 7. Brochure Design */}
        <div className="md:col-span-6 bg-surface-container-lowest rounded-xl p-8 hover:shadow-lg transition-all border-t-2 border-primary/20">
          <div className="flex gap-6 items-start">
            <div>
              <BookIcon className="w-10 h-10 text-primary mb-4" />
              <h4 className="text-xl font-bold font-headline mb-2">Brochure Design</h4>
              <p className="text-on-surface-variant text-sm">
                Informative layouts and visually appealing brochures optimized for
                storytelling.
              </p>
            </div>
            {/* Mockup placeholder */}
            <div className="hidden sm:flex w-32 h-32 rounded-lg bg-slate-800 shrink-0 items-center justify-center overflow-hidden">
              <svg viewBox="0 0 80 100" className="w-full h-full" fill="none">
                <rect width="80" height="100" fill="#1e293b" />
                <rect x="8" y="10" width="64" height="6" rx="2" fill="#94a3b8" opacity="0.4" />
                <rect x="8" y="22" width="44" height="4" rx="2" fill="#94a3b8" opacity="0.25" />
                <rect x="8" y="32" width="54" height="4" rx="2" fill="#94a3b8" opacity="0.2" />
                <rect x="8" y="42" width="64" height="36" rx="4" fill="#334155" opacity="0.7" />
                <rect x="8" y="84" width="30" height="3" rx="1.5" fill="#94a3b8" opacity="0.2" />
              </svg>
            </div>
          </div>
        </div>

        {/* 8. Packaging Design */}
        <div className="md:col-span-3 bg-surface-container-lowest rounded-xl p-8 hover:shadow-lg transition-all">
          <PackageIcon className="w-10 h-10 text-tertiary mb-4" />
          <h4 className="text-lg font-bold font-headline mb-2">Packaging Design</h4>
          <p className="text-on-surface-variant text-xs">
            Unboxing experiences that elevate product value through structural
            design.
          </p>
        </div>

        {/* 9. Presentation Design */}
        <div className="md:col-span-6 bg-surface-container-lowest rounded-xl p-8 hover:shadow-lg transition-all">
          <PresentationIcon className="w-10 h-10 text-secondary mb-4" />
          <h4 className="text-xl font-bold font-headline mb-2">Presentation Design</h4>
          <p className="text-on-surface-variant text-sm">
            High-stakes slide systems designed for business pitches and corporate
            laboratories.
          </p>
        </div>

        {/* 10. Image Editing — accent wide */}
        <div className="md:col-span-6 bg-tertiary text-on-tertiary rounded-xl p-8 hover:shadow-xl transition-all flex items-center justify-between gap-4">
          <div>
            <h4 className="text-2xl font-bold font-headline mb-2">Image Editing</h4>
            <p className="text-on-tertiary/80 text-sm max-w-xs">
              Surgical retouching and high-fidelity photo manipulation.
            </p>
          </div>
          <PhotoIcon className="w-16 h-16 opacity-30 shrink-0" />
        </div>

      </div>
    </section>
  );
}
