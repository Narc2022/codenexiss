"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  console.log("Current pathname:", pathname); // Debugging line

  const navLinks = [
    { label: "Dashboard", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Enterprises", href: "/enterprise" },
    { label: "Our Stories", href: "/our-stories" },
    { label: "Innovation Hub", href: "/blog" },
    { label: "Technical", href: "/technical" },
  ];

  return (
    <nav className="bg-white/70 backdrop-blur-md sticky top-0 z-50 shadow-[0_4px_30px_rgba(0,0,0,0.05)] after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-gradient-to-r after:from-indigo-500 after:via-purple-500 after:to-transparent">

      <div className="flex justify-between items-center w-full px-6 py-3 max-w-[1920px] mx-auto">

        {/* Left */}
        <div className="flex items-center gap-8">
          <span className="text-xl font-bold font-headline text-slate-900">
            CodeNexiss
          </span>

          {/*Destop Menu */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/services"
                  ? pathname.startsWith("/services")
                  : pathname === link.href;

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={
                    isActive
                      ? "text-indigo-600 border-b-2 border-indigo-500 pb-1 font-headline text-sm"
                      : "text-slate-500 font-medium hover:text-slate-900 transition-colors font-headline text-sm"
                  }
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center gap-4">

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>

<Link href="/contact-us">
  <button className="prismatic-gradient text-on-primary px-6 py-2.5 rounded-lg text-sm font-bold font-headline tracking-tight scale-95 active:scale-90 transition-transform">
    Get Started
  </button>
</Link>        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-4">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/services"
                  ? pathname.startsWith("/services")
                  : pathname === link.href;

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={
                    isActive
                      ? "text-indigo-600 font-semibold"
                      : "text-slate-600"
                  }
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}