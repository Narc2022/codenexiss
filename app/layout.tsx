import type { Metadata } from "next";
import "./globals.css";

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
      <body className="bg-surface text-on-surface antialiased">{children}</body>
    </html>
  );
}
