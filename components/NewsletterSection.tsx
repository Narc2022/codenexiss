"use client";

import { useState } from "react";
import toast from "react-hot-toast";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !phone) {
      toast.error("Please enter an email and mobile number");
      return;
    }
    try {
      const res = await fetch("/api/subscription", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, phone, }),
      });

      const data = await res.json();

      if (data.success) {
        toast.success("Details sent successfully!");
        setEmail("");
        setPhone("");
      } else {
        toast.error("Failed to send email & mobile no!");
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
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
  {/* Inputs Row */}
  <div className="flex flex-col sm:flex-row gap-4">
    <input
      type="email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      placeholder="codenexiss@gmail.com"
      required
      className="flex-1 bg-surface-container-highest/10 border border-surface-variant/20 rounded-lg px-3 py-4 text-white mono-data focus:ring-2 focus:ring-primary focus:border-transparent outline-none placeholder:text-white/30"
    />

    <input
      type="tel"
      value={phone}
      onChange={(e) => setPhone(e.target.value)}
      placeholder="Enter Mobile no...."
      required
      pattern="[0-9]{10}"
      className="flex-1 bg-surface-container-highest/10 border border-surface-variant/20 rounded-lg px-3 py-4 text-white mono-data focus:ring-2 focus:ring-primary focus:border-transparent outline-none placeholder:text-white/30"
    />
  </div>

  {/* Button Row */}
  <div>
    <button
      type="submit"
      className="w-full bg-primary text-on-primary font-headline font-bold px-8 py-4 rounded-lg hover:bg-primary-container transition-colors"
    >
      JOIN THE GRID
    </button>
  </div>
</form>
      </div>

      {/* Decorative blur */}
      <div className="absolute top-0 right-0 w-96 h-96 prismatic-gradient opacity-10 blur-[100px] -mr-48 -mt-48 pointer-events-none" />
    </section>
  );
}
