"use client";

import { useState } from "react";

export default function CTASection() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: wire up to your API / email service
    alert(`Audit requested for: ${email}`);
    setEmail("");
  };

  return (
    <section className="py-24 px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto glass-panel p-12 rounded-2xl relative">
        {/* Corner module tag */}
        <div className="absolute top-0 right-0 p-8 pointer-events-none">
          <span className="font-mono text-[11px] text-secondary/30 uppercase tracking-widest">
            MODULE_ALPHA_07
          </span>
        </div>

        <div className="text-center">
          <h2 className="text-4xl font-bold font-headline mb-6">
            Ready to transform your brand into a visually unforgettable experience?
          </h2>
          <p className="text-on-surface-variant mb-10 max-w-2xl mx-auto leading-relaxed">
            Our creative design studio delivers bold, modern, and strategically crafted visuals refined through a precision-driven quality process.
          </p>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter laboratory email..."
              className="bg-surface-container border-none rounded-lg px-6 py-4 w-full sm:w-80 font-mono text-[12px] focus:outline-none focus:ring-2 focus:ring-secondary placeholder:text-outline"
            />
            <button
              type="submit"
              className="prism-gradient px-10 py-4 rounded-lg font-bold font-headline shadow-lg hover:opacity-90 hover:shadow-secondary/20 transition-all"
            >
              Request Audit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
