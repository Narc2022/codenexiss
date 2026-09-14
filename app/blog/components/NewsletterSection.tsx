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
      const res = await fetch("/api/homepage_subscription", {
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
    <section className="rounded-xl relative overflow-hidden p-12 text-white bg-gradient-to-br from-teal-600 via-indigo-600 to-purple-700">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none select-none">
        <div className="absolute -right-16 -top-16 w-64 h-64 bg-white rounded-full blur-2xl" />
        <div className="absolute right-32 bottom-8 w-40 h-40 bg-purple-300 rounded-full blur-2xl" />
        <div className="absolute right-8 top-1/2 w-24 h-24 bg-indigo-300 rounded-full blur-xl" />
      </div>

      {/* Hub icon watermark */}
      <div className="absolute -right-16 -top-16 opacity-[0.07] pointer-events-none select-none">
        <svg className="w-72 h-72 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" />
          <path d="M17 12c0 2.76-2.24 5-5 5s-5-2.24-5-5 2.24-5 5-5 5 2.24 5 5zm-5-3c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-2xl">
        <h2 className="text-4xl font-headline font-bold mb-4">Join the Collective</h2>
        <p className="text-lg opacity-80 mb-8 leading-relaxed">
          Get bi-weekly technical deep-dives, early access to whitepapers, and operational
          insights delivered to your terminal.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit}>
        <div className="flex flex-col sm:flex-row gap-4 max-w-lg">
          {/* Inputs Row */}
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="user@codenexiss.io"
            required
            className="flex-grow bg-white/10 backdrop-blur-md border border-white/20 rounded-lg px-6 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all font-mono text-sm"
          />
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Enter Mobile no...."
            required
            pattern="[0-9]{10}"
            className="flex-grow bg-white/10 backdrop-blur-md border border-white/20 rounded-lg px-6 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all font-mono text-sm"
          />
          <button
            type="submit" 
            className="px-8 py-3 bg-white text-indigo-700 font-headline font-black uppercase tracking-wider rounded-lg hover:bg-opacity-90 active:scale-95 transition-all shrink-0"
          >
            Subscribe
          </button>
        </div>
        </form>
        <p className="mt-4 text-[10px] font-mono opacity-60 uppercase tracking-widest">
          Encrypted Delivery // No Tracking // No Spam
        </p>
      </div>
    </section>
  );
}
