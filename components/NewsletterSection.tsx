"use client";

import { useState } from "react";
import toast from "react-hot-toast";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");

   const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (!email) {
    toast.error("Please enter an email");
    return;
  }
    try {
      const res = await fetch("/api/subscription", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (data.success) {
        toast.success("Email sent successfully!");
        setEmail("");
      } else {
        toast.error("Failed to send email!");
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <section className="bg-inverse-surface rounded-xl p-10 lg:p-16 relative overflow-hidden mb-16">
      <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div>
          <h2 className="text-3xl lg:text-4xl font-headline font-bold text-inverse-on-surface mb-4">
            Subscribe for Business & Innovation.
          </h2>
          <p className="text-surface-variant/80 text-lg leading-relaxed">
            Receive technical insights, strategic manifests, and architectural breakthroughs directly to your terminal.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-4"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="codenexiss@gmail.com"
            required
            className="flex-grow bg-surface-container-highest/10 border border-surface-variant/20 rounded-lg px-6 py-4 text-white mono-data focus:ring-2 focus:ring-primary focus:border-transparent outline-none placeholder:text-white/30"
          />
          <button
            type="submit"
            className="bg-primary text-on-primary font-headline font-bold px-8 py-4 rounded-lg hover:bg-primary-container transition-colors whitespace-nowrap"
          >
            JOIN THE GRID
          </button>
        </form>
      </div>

      {/* Decorative blur */}
      <div className="absolute top-0 right-0 w-96 h-96 prismatic-gradient opacity-10 blur-[100px] -mr-48 -mt-48 pointer-events-none" />
    </section>
  );
}
