"use client";

/* ── Inline SVG icons (zero external deps) ── */

function ForumIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
    </svg>
  );
}
function ChatIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
    </svg>
  );
}
function DatabaseIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
    </svg>
  );
}
function PersonAddIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
    </svg>
  );
}
function MailIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    </svg>
  );
}
function WorkflowIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
    </svg>
  );
}
function FunnelIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z" />
    </svg>
  );
}

/* ─── Reusable card chip ─── */
function StatusChip({ color, text }: { color: string; text: string }) {
  return (
    <div className={`flex items-center gap-2 font-mono text-[10px] ${color}`}>
      <span className={`w-1 h-1 rounded-full bg-current`} />
      {text}
    </div>
  );
}

/* ─── Main component ─── */
export default function AutomationEcosystem() {
  return (
    <section className="py-24 px-0 lg:px-0 bg-surface-container-low">
      <div className="max-w-[1920px] mx-auto px-6 lg:px-10 pt-8">

        {/* Section header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <span className="font-headline text-xs uppercase tracking-[0.3em] text-primary mb-4 block">
              Core Capabilities
            </span>
            <h2 className="text-4xl font-headline font-bold tracking-tight">
              Automation Ecosystem
            </h2>
          </div>
          <p className="text-on-surface-variant max-w-md">
            Modular AI services designed to integrate seamlessly into your
            existing technical stack, reducing friction and maximizing
            throughput.
          </p>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6 lg:gap-8">

          {/* 1. Chatbot Development — half width */}
          <div className="md:col-span-3 bg-surface-container-lowest p-8 rounded-xl shadow-sm border-t-2 border-primary/20 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
              <ForumIcon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-headline font-bold mb-3">Chatbot Development</h3>
            <p className="text-on-surface-variant text-sm mb-6">
              Our Chatbot Development solutions are engineered to deliver intelligent, highly engaging conversational, mobile applications, and digital platforms. With advanced natural language processing, seamless integration capabilities and provide reliable 24/7 digital assistance.

            </p>
            <StatusChip color="text-primary" text="NLP ENGINE v4.2" />
          </div>

          {/* 2. WhatsApp Automation — half width */}
          <div className="md:col-span-3 bg-surface-container-lowest p-8 rounded-xl shadow-sm border-t-2 border-secondary/20 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-6">
              <ChatIcon className="w-6 h-6 text-secondary" />
            </div>
            <h3 className="text-xl font-headline font-bold mb-3">WhatsApp Automation</h3>
            <p className="text-on-surface-variant text-sm mb-6">
              WhatsApp is one of the most powerful communication platforms for businesses today. Our WhatsApp Automation services help you engage customers instantly, automate responses, generate leads, and improve sales without manual effort.
              We build smart automation systems that keep your business active 24/7 on WhatsApp.
            </p>
            <StatusChip color="text-secondary" text="API_INTEGRATION_CONNECTED" />
          </div>

          {/* 3. CRM Automation — third width */}
          <div className="md:col-span-2 bg-surface-container-lowest p-8 rounded-xl shadow-sm border-t-2 border-tertiary/20 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-tertiary/10 rounded-lg flex items-center justify-center mb-6">
              <DatabaseIcon className="w-6 h-6 text-tertiary" />
            </div>
            <h3 className="text-lg font-headline font-bold mb-2">CRM Automation</h3>
            <p className="text-on-surface-variant text-sm">
              CRM Automation helps streamline customer management, automate sales workflows. Our CRM Automation services ensure that your leads are tracked, nurtured.
              We help you turn your CRM into a powerful, automated growth engine.
            </p>
          </div>

          {/* 4. Lead Generation — third width */}
          <div className="md:col-span-2 bg-surface-container-lowest p-8 rounded-xl shadow-sm border-t-2 border-primary-container/20 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
              <PersonAddIcon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-lg font-headline font-bold mb-2">Lead Generation System</h3>
            <p className="text-on-surface-variant text-sm">
              A strong lead generation system is the backbone of every successful business. And services help you attract, capture, data-driven strategies across digital platforms.
              We build consistently bring new customers to your business.
            </p>
          </div>

          {/* 5. Email Automation — third width */}
          <div className="md:col-span-2 bg-surface-container-lowest p-8 rounded-xl shadow-sm border-t-2 border-secondary-container/20 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-6">
              <MailIcon className="w-6 h-6 text-secondary" />
            </div>
            <h3 className="text-lg font-headline font-bold mb-2">Email Automation</h3>
            <p className="text-on-surface-variant text-sm">
              Email automation helps your audience at every stage of their journey without manual effort.And send the right message to the right person at the right time, improving engagement, retention, and sales.
              We build smart work for your business 24/7.
            </p>
          </div>

          {/* 6. Workflow Automation — wide featured */}
          <div className="md:col-span-4 relative group overflow-hidden rounded-xl bg-surface-container-lowest border border-white/50">
            {/* Faint mesh background */}
            <div className="absolute inset-0 opacity-[0.04] bg-[url('data:image/svg+xml,%3Csvg width=%2240%22 height=%2240%22 viewBox=%220 0 40 40%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Ccircle cx=%2220%22 cy=%2220%22 r=%221%22 fill=%22%23413de4%22/%3E%3C/g%3E%3C/svg%3E')] group-hover:opacity-10 transition-opacity duration-700 pointer-events-none" />

            <div className="relative p-8 flex flex-col h-full justify-between min-h-[300px]">
              <div>
                <div className="w-12 h-12 prismatic-gradient rounded-lg flex items-center justify-center mb-6 shadow-lg shadow-primary/30">
                  <WorkflowIcon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-headline font-bold mb-4">Workflow Automation</h3>
                <p className="text-on-surface-variant max-w-lg mb-8">
                  Workflow automation helps repetitive tasks, connect tools, and improve productivity without manual effort. Our Workflow Automation services enable you to automate end-to-end business processes so your team can focus on growth instead of routine operations.
                  We build smart, scalable tailored to your business needs.
                </p>
              </div>
              <div className="flex gap-4 font-mono text-[10px] text-outline flex-wrap">
                {["PYTHON_CORE", "REST_API", "DOCKER_READY"].map((tag) => (
                  <span key={tag} className="px-2 py-1 bg-surface-container rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* 7. Sales Funnel Setup — dark accent */}
          <div className="md:col-span-2 bg-inverse-surface p-8 rounded-xl shadow-xl flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mb-6">
                <FunnelIcon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-headline font-bold text-white mb-2">
                Sales Funnel Setup
              </h3>
              <p className="text-slate-400 text-sm">
                Design and implementation of effective, high-conversion automated
                sales funnels.
              </p>
            </div>
            <a
              href="#"
              className="mt-8 text-primary-fixed-dim text-xs font-headline font-bold uppercase tracking-widest flex items-center gap-2 hover:gap-4 transition-all"
            >
              Configure
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
