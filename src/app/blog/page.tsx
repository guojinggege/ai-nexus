import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogCard from "@/components/BlogCard";
import { posts } from "@/data/blog";
import { formatDateISO } from "@/lib/formatDate";

export const metadata: Metadata = {
  title: "Blog — AI Nexus",
  description:
    "AI Nexus Blog: AI tools, agents, coding, GPT, Claude, and automation. Short, practical articles for builders.",
};

export default function BlogIndexPage() {
  const sorted = [...posts].sort((a, b) => (a.publishDate < b.publishDate ? 1 : -1));

  return (
    <main className="relative">
      <Navbar />
      <section className="mx-auto max-w-7xl px-4 pt-12 pb-16 sm:px-6 lg:px-8 lg:pt-16">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
              <span aria-hidden>✍️</span> AI insights
            </div>
            <h1 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
              Blog
            </h1>
            <p className="mt-3 max-w-2xl text-sm text-[var(--muted)] sm:text-base">
              Practical articles on AI tools, agents, AI coding, GPT, Claude, and
              automation.
            </p>
          </div>
          <div className="text-sm text-[var(--muted)]">
            Updated {formatDateISO(sorted[0]?.publishDate ?? "2026-01-01")} •{" "}
            {sorted.length} articles
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {sorted.map((p) => (
            <BlogCard key={p.slug} post={p} />
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}

