"use client";

import { useState } from "react";

const budgetOptions = [
  "BETA_TIER ($5k – $15k)",
  "CORE_TIER ($15k – $50k)",
  "PRIME_TIER ($50k – $150k)",
  "NEXUS_TIER ($150k+)",
];

const timelineOptions = [
  "IMMEDIATE_EXECUTION (< 1 month)",
  "STANDARD_WINDOW (1–3 months)",
  "EXTENDED_PHASE (3–6 months)",
  "STRATEGIC_PLANNING (6 months+)",
];

const inputBase =
  "w-full bg-surface-container-low border-none rounded-lg focus:outline-none focus:ring-1 focus:ring-secondary font-mono text-sm p-4 text-on-surface placeholder:text-outline-variant/50 transition-shadow";

const labelBase =
  "font-mono text-[10px] uppercase tracking-[0.2em] text-outline-variant font-bold block mb-2";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-surface-container-lowest rounded-2xl p-8 md:p-12 shadow-[0px_16px_48px_rgba(25,28,30,0.06)] relative overflow-hidden">
      {/* Prismatic glow */}
      <div className="absolute top-0 right-0 w-64 h-64 prismatic-gradient opacity-5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none" />

      {submitted ? (
        <div className="relative z-10 flex flex-col items-center justify-center text-center py-20 gap-6">
          <div className="w-16 h-16 prismatic-gradient rounded-xl flex items-center justify-center shadow-xl">
            <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
          </div>
          <h3 className="font-headline text-2xl font-bold">Protocol Transmitted</h3>
          <p className="text-on-surface-variant max-w-sm">
            Your request has been received. A CodeNexiss node will establish contact within 24 hours.
          </p>
          <span className="font-mono text-[10px] text-primary uppercase tracking-widest">
            TX_STATUS: QUEUED_FOR_REVIEW
          </span>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-10 relative z-10">
          {/* ── Identity Module ── */}
          <fieldset className="space-y-0">
            <legend className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary font-bold mb-6 flex items-center gap-3">
              <span className="w-6 h-[1px] bg-primary/40 inline-block" />
              Identity Module
            </legend>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <label className={labelBase}>OPERATOR_NAME</label>
                <input
                  type="text"
                  placeholder="e.g. Director Case"
                  required
                  className={inputBase}
                />
              </div>
              <div>
                <label className={labelBase}>COMMS_ENDPOINT</label>
                <input
                  type="email"
                  placeholder="protocol@codenexiss.ai"
                  required
                  className={inputBase}
                />
              </div>
            </div>
          </fieldset>

          {/* ── Technical Specification ── */}
          <fieldset>
            <legend className="font-mono text-[10px] uppercase tracking-[0.3em] text-secondary font-bold mb-6 flex items-center gap-3">
              <span className="w-6 h-[1px] bg-secondary/40 inline-block" />
              Technical Specification
            </legend>
            <label className={labelBase}>PROJECT_BRIEFING_PAYLOAD</label>
            <textarea
              rows={6}
              placeholder="Define the technical boundaries of your project... Describe architectural requirements, target audience nodes, and functional parameters."
              required
              className={inputBase}
            />
          </fieldset>

          {/* ── Allocation & Deployment ── */}
          <fieldset>
            <legend className="font-mono text-[10px] uppercase tracking-[0.3em] text-tertiary font-bold mb-6 flex items-center gap-3">
              <span className="w-6 h-[1px] bg-tertiary/40 inline-block" />
              Allocation &amp; Deployment
            </legend>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <label className={labelBase}>BUDGET_ALLOCATION_TIER</label>
                <select required className={inputBase}>
                  {budgetOptions.map((o) => (
                    <option key={o}>{o}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className={labelBase}>DEPLOYMENT_TIMELINE</label>
                <select required className={inputBase}>
                  {timelineOptions.map((o) => (
                    <option key={o}>{o}</option>
                  ))}
                </select>
              </div>
            </div>
          </fieldset>

          {/* ── Submit ── */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full md:w-auto px-12 py-5 prismatic-gradient text-white rounded-xl font-headline font-bold text-sm uppercase tracking-[0.2em] shadow-xl hover:shadow-secondary/20 hover:scale-[1.02] active:scale-95 transition-all"
            >
              Execute Protocol Synthesis
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
