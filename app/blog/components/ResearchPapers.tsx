"use client";

import { useState } from "react";

// ── Types ─────────────────────────────────────────────
interface Paper {
  category: string;
  categoryColor: string; // badge bg
  revision: string;
  readTime: string;
  title: string;
  description: string;
  author: string;
  authorInitials: string;
  authorBg: string;
  // SVG placeholder colours for the card image
  gradFrom: string;
  gradTo: string;
}

// ── Data ─────────────────────────────────────────────
const recentPapers: Paper[] = [
  {
    category: "Security",
    categoryColor: "bg-white/80 text-slate-800",
    revision: "REV. 1.0.2",
    readTime: "8 MIN READ",
    title: "Post-Quantum Cryptography for Web3",
    description:
      "Standardizing lattice-based signatures across the CodeNexiss infrastructure nodes.",
    author: "Dr. Elias Thorne",
    authorInitials: "ET",
    authorBg: "bg-teal-700",
    gradFrom: "#0f766e",
    gradTo: "#1e40af",
  },
  {
    category: "AI Ethics",
    categoryColor: "bg-white/80 text-slate-800",
    revision: "REV. 3.4.0",
    readTime: "12 MIN READ",
    title: "Algorithmic Transparency Reports",
    description:
      "A comprehensive audit of recommendation biases in the v4 production rollout.",
    author: "Sarah Jenkins",
    authorInitials: "SJ",
    authorBg: "bg-purple-700",
    gradFrom: "#7c3aed",
    gradTo: "#1e3a8a",
  },
];

const archivedPapers: Paper[] = [
  {
    category: "Infra",
    categoryColor: "bg-white/80 text-slate-800",
    revision: "REV. 0.9.1",
    readTime: "6 MIN READ",
    title: "Zero-Copy Memory Pipelines",
    description:
      "Exploring shared-memory IPC patterns across multi-tenant Kubernetes clusters.",
    author: "Marcus Vane",
    authorInitials: "MV",
    authorBg: "bg-indigo-700",
    gradFrom: "#4338ca",
    gradTo: "#0f172a",
  },
  {
    category: "Networking",
    categoryColor: "bg-white/80 text-slate-800",
    revision: "REV. 2.1.0",
    readTime: "10 MIN READ",
    title: "eBPF at the Edge: A Case Study",
    description:
      "Runtime network observability without kernel module dependencies.",
    author: "Dr. Sarah Chen",
    authorInitials: "SC",
    authorBg: "bg-teal-800",
    gradFrom: "#115e59",
    gradTo: "#1e3a8a",
  },
];

// ── Card image placeholder ────────────────────────────
function CardImage({ paper }: { paper: Paper }) {
  return (
    <div className="h-40 overflow-hidden relative">
      {/* SVG abstract image stand-in */}
      <svg
        viewBox="0 0 400 160"
        className="w-full h-full group-hover:scale-105 transition-transform duration-700"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id={`cg-${paper.revision}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={paper.gradFrom} />
            <stop offset="100%" stopColor={paper.gradTo} />
          </linearGradient>
        </defs>
        <rect width="400" height="160" fill={`url(#cg-${paper.revision})`} />
        {/* Decorative circles */}
        <circle cx="320" cy="40" r="80" fill="white" fillOpacity="0.04" />
        <circle cx="360" cy="140" r="60" fill="white" fillOpacity="0.06" />
        <circle cx="80" cy="120" r="50" fill="white" fillOpacity="0.04" />
        {/* Grid lines */}
        {[0,40,80,120,160,200,240,280,320,360,400].map((x) => (
          <line key={x} x1={x} y1={0} x2={x} y2={160} stroke="white" strokeOpacity="0.05" />
        ))}
        {[0,40,80,120,160].map((y) => (
          <line key={y} x1={0} y1={y} x2={400} y2={y} stroke="white" strokeOpacity="0.05" />
        ))}
      </svg>

      {/* Category badge */}
      <div className="absolute top-4 left-4">
        <span
          className={`${paper.categoryColor} backdrop-blur-sm text-[10px] font-headline font-bold px-3 py-1 rounded-full uppercase`}
        >
          {paper.category}
        </span>
      </div>
    </div>
  );
}

// ── Component ─────────────────────────────────────────
export default function ResearchPapers() {
  const [tab, setTab] = useState<"recent" | "archived">("recent");
  const papers = tab === "recent" ? recentPapers : archivedPapers;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between px-2">
        <h2 className="text-sm font-headline font-black uppercase tracking-widest text-slate-900">
          Research Papers
        </h2>
        <div className="flex gap-4">
          <button
            onClick={() => setTab("recent")}
            className={`text-xs font-headline font-bold transition-colors ${
              tab === "recent" ? "text-teal-600" : "text-slate-400 hover:text-slate-700"
            }`}
          >
            Recent
          </button>
          <button
            onClick={() => setTab("archived")}
            className={`text-xs font-headline font-medium transition-colors ${
              tab === "archived" ? "text-teal-600" : "text-slate-400 hover:text-slate-700"
            }`}
          >
            Archived
          </button>
        </div>
      </div>

      {/* 2-column card grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {papers.map((paper) => (
          <div
            key={paper.title}
            className="group bg-white rounded-xl overflow-hidden hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-all cursor-pointer"
          >
            <CardImage paper={paper} />

            <div className="p-6 space-y-4">
              {/* Revision + read time */}
              <div className="flex justify-between items-center text-[10px] font-mono text-slate-400">
                <span>{paper.revision}</span>
                <span>{paper.readTime}</span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-headline font-bold text-slate-900 group-hover:text-teal-700 transition-colors leading-snug">
                {paper.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-slate-500 line-clamp-2 leading-relaxed">
                {paper.description}
              </p>

              {/* Author row */}
              <div className="pt-2 flex items-center gap-2">
                <div
                  className={`w-6 h-6 rounded-full ${paper.authorBg} flex items-center justify-center text-white text-[9px] font-bold font-mono shrink-0`}
                >
                  {paper.authorInitials}
                </div>
                <span className="text-xs font-medium text-slate-700">{paper.author}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
