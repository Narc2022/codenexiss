"use client";

import { Phone } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";

export default function CTASection() {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (!email || !phone) {
      toast.error("Please enter an email and mobile number");
      return;
    }
    try {
      const res = await fetch("/api/audit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, Phone }),
      });

      const data = await res.json();

      if (data.success) {
        toast.success("Details sent successfully!");
        setEmail("");
      } else {
        toast.error("Failed to send email & mobile no!");
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
    }
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
          
           {/* Form */}
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
              className="bg-surface-container border-none rounded-lg px-6 py-4 sm:w-75 font-mono text-[12px] focus:outline-none focus:ring-2 focus:ring-secondary placeholder:text-outline"
            />
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter Mobile no...."
              required
              pattern="[0-9]{10}"
              className="bg-surface-container border-none rounded-lg px-6 py-4 sm:w-75 font-mono text-[12px] focus:outline-none focus:ring-2 focus:ring-secondary placeholder:text-outline"
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
