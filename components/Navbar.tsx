"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
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

          {/* Search */}
          <div className="hidden lg:flex items-center bg-slate-100 px-3 py-1.5 rounded-lg">
            <span className="material-symbols-outlined text-gray-500 mr-2 text-[18px]">
              search
            </span>
            <input
              type="text"
              placeholder="Search systems..."
              className="bg-transparent border-none text-xs outline-none w-48"
            />
          </div>

          {/* Icons */}
          <div className="flex items-center gap-2">
            <button className="p-2 hover:bg-slate-100 rounded-md transition-all">
              <span className="material-symbols-outlined">
                notifications
              </span>
            </button>

            <button className="p-2 hover:bg-slate-100 rounded-md transition-all">
              <span className="material-symbols-outlined">
                settings
              </span>
            </button>

            {/* Profile */}
            <div className="w-8 h-8 rounded-full overflow-hidden border">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCj3LHoKiXc_N2kGFyvFdnLXvyoBXyXLHu7w5r-jtdx6Tq1SE7-nqR33NHql5DLtUAZVIw4mZoi4hlIW5qHneC2o2jv8ksrA8KDBvlwWKDK7Iqs4LYJLaqm2rVSoqYpbZREeXr7jfLyeWbpn-kFF1kHeqDYq0E_O4s60lt6S71hQOq4x1WknU7AMWBV3ABnWz9PH48Dv0pE4y3D28K8yrzDbqmg9JnjuBpGwMbSRepteu_3DmhU1fX8n-8Z13OHdHoXPjqvmkiiY3PK"
                alt="User profile"
                width={32}
                height={32}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}