"use client";

const services = [
  {
    icon: "dns",
    title: "Hosting Setup",
    desc: "Reliable hosting setup for performance and security. Engineered for scalability and extreme throughput.",
    status: "Ready for Deploy",
    statusColor: "text-primary",
    iconBg: "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white",
    label: "_SERVER",
    labelColor: "text-secondary font-technical",
  },
  {
    icon: "language",
    title: "Domain Setup",
    desc: "Domain registration and configuration for your business. Full DNS management and global propagation tracking.",
    status: "DNS Propagation Active",
    statusColor: "text-secondary",
    iconBg: "bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-white",
    label: null,
    labelColor: null,
  },
  {
    icon: "mail",
    title: "Business Email Setup",
    desc: "Professional email setup using your domain. Secure SMTP protocols and encrypted enterprise-grade mail servers.",
    status: "MX Records Verified",
    statusColor: "text-tertiary",
    iconBg: "bg-tertiary/10 text-tertiary group-hover:bg-tertiary group-hover:text-white",
    label: null,
    labelColor: null,
  },
  {
    icon: "shield",
    title: "Website Security",
    desc: "Implementation of security measures to protect your website. WAF filtering, DDoS mitigation, and SSL hardening.",
    status: "Threat Shield Active",
    statusColor: "text-error",
    iconBg: "bg-error/10 text-error group-hover:bg-error group-hover:text-white",
    label: null,
    labelColor: null,
  },
  {
    icon: "backup",
    title: "Backup Systems",
    desc: "Automated backup solutions to prevent data loss. Off-site replication with 99.9% retrieval success rate.",
    status: "Last Sync 2m Ago",
    statusColor: "text-primary-container",
    iconBg: "bg-primary-container/20 text-primary-container group-hover:bg-primary-container group-hover:text-on-primary-container",
    label: null,
    labelColor: null,
  },
  {
    icon: "support_agent",
    title: "Technical Support",
    desc: "Ongoing technical assistance for all your digital needs. Direct access to L3 engineers for complex troubleshooting.",
    status: "Live Support Online",
    statusColor: "text-on-surface",
    iconBg: "bg-on-surface/10 text-on-surface group-hover:bg-on-surface group-hover:text-surface",
    label: null,
    labelColor: null,
  },
];

export default function CoreServices() {
  return (
    <section className="py-28 bg-surface-container-low">
      <div className="max-w-[1920px] mx-auto px-8">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <h2 className="font-display text-4xl font-bold text-on-surface mb-3">
              Core Ecosystem Services
            </h2>
            <p className="font-body text-on-surface-variant text-sm max-w-md leading-relaxed">
              Advanced technical deployment and maintenance strategies tailored
              for high-availability environments.
            </p>
          </div>
          <span className="font-technical text-[10px] text-outline/60 uppercase tracking-widest whitespace-nowrap">
            SLA-BACKED SOLUTIONS / 24.7.365
          </span>
        </div>

        {/* Service grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc) => (
            <div
              key={svc.title}
              className="group bg-surface-container-lowest p-8 rounded-xl outline outline-1 outline-outline-variant/20 hover:shadow-2xl transition-all duration-500 flex flex-col h-full"
            >
              {/* Icon or label row */}
              <div className="mb-6">
                {svc.label ? (
                  <span className={`text-sm font-bold tracking-widest ${svc.labelColor}`}>
                    {svc.label}
                  </span>
                ) : (
                  <div
                    className={`w-12 h-12 rounded-lg flex items-center justify-center transition-colors duration-300 ${svc.iconBg}`}
                  >
                    <span className="material-symbols-outlined text-xl">
                      {svc.icon}
                    </span>
                  </div>
                )}
              </div>

              <h3 className="font-display text-xl font-bold mb-3 text-on-surface">
                {svc.title}
              </h3>
              <p className="font-body text-on-surface-variant text-sm mb-6 flex-grow leading-relaxed">
                {svc.desc}
              </p>

              <div
                className={`font-technical text-[10px] uppercase tracking-widest font-bold ${svc.statusColor}`}
              >
                Status: {svc.status}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
