function ShieldIcon() {
  return (
    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.955 11.955 0 003 12c0 6.627 5.373 12 12 12s12-5.373 12-12c0-2.117-.549-4.107-1.514-5.838A11.955 11.955 0 0012 2.964z" />
    </svg>
  );
}
function MailIcon() {
  return (
    <svg className="w-6 h-6 text-secondary-fixed-dim" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25" />
    </svg>
  );
}
function LocationIcon() {
  return (
    <svg className="w-6 h-6 text-secondary-fixed-dim" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
    </svg>
  );
}
function UploadIcon() {
  return (
    <svg className="w-10 h-10 text-outline-variant" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
    </svg>
  );
}

export default function ContactAside() {
  return (
    <aside className="space-y-8">
      {/* ── Security Protocol card ── */}
      <div className="glass-panel p-8 rounded-2xl relative overflow-hidden group">
        {/* Frosted lab atmosphere */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-tertiary/5 group-hover:scale-110 transition-transform duration-700 pointer-events-none" />

        <div className="relative z-10">
          <div className="w-12 h-12 rounded-lg bg-primary-container flex items-center justify-center mb-6">
            <ShieldIcon />
          </div>
          <h3 className="font-headline text-xl font-bold mb-3 tracking-tight">
            Security Protocol
          </h3>
          <p className="text-sm text-on-surface-variant leading-relaxed mb-6">
            All specifications are transmitted via 256-bit encrypted channels.
            Your intellectual property is protected within the Nexiss Secure
            Vault.
          </p>
          <div className="font-mono text-[10px] text-primary font-bold">
            SHA-256: 7d8f...a9c2
          </div>
        </div>
      </div>

      {/* ── Technical Support card ── */}
      <div className="bg-on-secondary-fixed p-8 rounded-2xl text-white">
        <h3 className="font-headline text-xl font-bold mb-6 tracking-tight">
          Technical Support
        </h3>
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <MailIcon />
            <div>
              <div className="font-mono text-[10px] uppercase text-secondary-fixed-dim/50 font-bold mb-1">
                SUPPORT_ENDPOINT
              </div>
              <div className="text-sm font-medium">ops@codenexiss.ai</div>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <LocationIcon />
            <div>
              <div className="font-mono text-[10px] uppercase text-secondary-fixed-dim/50 font-bold mb-1">
                PHYSICAL_NODE
              </div>
              <div className="text-sm font-medium">
                Silicon Nexus, San Francisco
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Technical Documents upload card ── */}
      <div className="p-8 rounded-2xl border-2 border-dashed border-outline-variant/30 flex flex-col items-center text-center">
        <UploadIcon />
        <h4 className="font-headline text-sm font-bold uppercase tracking-widest text-on-surface mt-4 mb-2">
          Technical Documents?
        </h4>
        <p className="text-xs text-on-surface-variant mb-4">
          Attach diagrams or tech specs after submission.
        </p>
        <button className="text-[10px] font-headline font-bold text-primary uppercase border-b border-primary/30 hover:border-primary transition-all">
          Request Secure Drop Link
        </button>
      </div>
    </aside>
  );
}
