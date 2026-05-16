"use client";

import { useEffect, useState } from "react";

/* ── Inline SVG icons (zero external deps) ── */
function TerminalIcon({ className }: { className?: string }) {
  return <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" /></svg>;
}
function PhoneIcon({ className }: { className?: string }) {
  return <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 15h3" /></svg>;
}
function PenIcon({ className }: { className?: string }) {
  return <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125" /></svg>;
}
function ChartIcon({ className }: { className?: string }) {
  return <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" /></svg>;
}
function CpuIcon({ className }: { className?: string }) {
  return <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" /></svg>;
}
function EditIcon({ className }: { className?: string }) {
  return <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" /></svg>;
}
function SupportIcon({ className }: { className?: string }) {
  return <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" /></svg>;
}

const services = [
  { label: "Web Engineering",    Icon: TerminalIcon,  hover: "hover:bg-primary-container hover:text-on-primary-container" },
  { label: "Mobile Solutions",   Icon: PhoneIcon,     hover: "hover:bg-secondary-container hover:text-white" },
  { label: "Graphic Design",     Icon: PenIcon,       hover: "hover:bg-tertiary-container hover:text-white" },
  { label: "Digital Marketing",  Icon: ChartIcon,     hover: "hover:bg-primary hover:text-white" },
  { label: "AI Automation",      Icon: CpuIcon,       hover: "hover:bg-primary-container hover:text-white bg-primary-fixed/20" },
  { label: "Content Creation",   Icon: EditIcon,      hover: "hover:bg-secondary hover:text-white" },
  { label: "IT Support",         Icon: SupportIcon,   hover: "hover:bg-slate-900 hover:text-white" },
];

export default function ContactHero() {
  const [utcTime, setUtcTime] = useState("");

  useEffect(() => {
    const tick = () => {
      setUtcTime(new Date().toISOString().split("T")[1].split("Z")[0]);
    };
    tick();
    const id = setInterval(tick, 10);
    return () => clearInterval(id);
  }, []);

  return (
    <header className="max-w-[1920px] mx-auto px-8 mb-16">
      {/* Headline row */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
        <div className="max-w-2xl">
          {/* Status chips */}
          <div className="flex flex-wrap gap-3 mb-5">
            <span className="font-mono text-[10px] uppercase tracking-widest px-2 py-1 bg-surface-container-high rounded text-primary font-bold">
              SYSTEM_LOAD: OPTIMAL
            </span>
            <span className="font-mono text-[10px] uppercase tracking-widest px-2 py-1 bg-surface-container-high rounded text-secondary font-bold">
              NODE: GLOBAL_REQUEST_INTAKE
            </span>
          </div>

          <h1 className="font-headline text-4xl md:text-6xl font-bold tracking-tighter text-on-surface mb-6">
            Contact &amp; Protocol{" "}
            <span className="text-transparent bg-clip-text prismatic-gradient">
              Integration
            </span>
          </h1>
          <p className="font-body text-lg text-on-surface-variant max-w-xl leading-relaxed">
            Establish a direct uplink with CodeNexiss. Whether you're initiating
            a new project protocol or seeking technical support, our neural nodes
            are ready to receive your transmission.
          </p>
        </div>

        {/* UTC clock */}
        <div className="hidden lg:block border-l-2 border-primary/20 pl-6 py-2">
          <div className="text-[10px] font-headline font-bold uppercase tracking-[0.2em] text-outline mb-1">
            CURRENT_TIME_UTC
          </div>
          <div className="font-mono text-xl font-medium tabular-nums">{utcTime}</div>
        </div>
      </div>

      {/* 7-service selector grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
        {services.map(({ label, Icon, hover }) => (
          <button
            key={label}
            className={`group flex flex-col items-center justify-center gap-3 p-6 rounded-xl glass-panel transition-all duration-300 ${hover}`}
          >
            <Icon className="w-8 h-8" />
            <span className="font-headline text-[10px] font-bold uppercase tracking-widest text-center leading-tight">
              {label}
            </span>
          </button>
        ))}
      </div>
    </header>
  );
}
