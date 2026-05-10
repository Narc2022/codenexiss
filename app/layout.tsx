import type { Metadata } from "next";
// import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "CodeNexiss – Engineering Prismatic Intelligence",
  description:
    "CodeNexiss builds ultra-refined neural architectures for high-density enterprise logic. Deploy with surgical precision.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-surface text-on-surface antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
