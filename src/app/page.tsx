"use client";

import { useMemo, useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CategoryNav from "@/components/CategoryNav";
import ToolGrid from "@/components/ToolGrid";
import Footer from "@/components/Footer";
import { tools } from "@/data/tools";
import { categories } from "@/data/categories";
import { getLatestPosts } from "@/data/blog";
import BlogCard from "@/components/BlogCard";
import CategoryCard from "@/components/CategoryCard";
import ToolCard from "@/components/ToolCard";
import Link from "next/link";

export default function HomePage() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const featuredTools = useMemo(
    () => tools.filter((t) => t.badge === "Featured").slice(0, 8),
    [],
  );

  const latestPosts = useMemo(() => getLatestPosts(6), []);

  const trendingCategories = useMemo(() => {
    const counts = new Map<string, number>();
    for (const t of tools) counts.set(t.category, (counts.get(t.category) ?? 0) + 1);

    return categories
      .filter((c) => c.id !== "all")
      .map((c) => ({ c, count: counts.get(c.id) ?? 0 }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 6);
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return tools.filter((t) => {
      const matchesCategory =
        activeCategory === "all" || t.category === activeCategory;
      if (!matchesCategory) return false;
      if (!q) return true;
      return (
        t.name.toLowerCase().includes(q) ||
        t.tagline.toLowerCase().includes(q) ||
        t.description.toLowerCase().includes(q) ||
        t.category.toLowerCase().includes(q)
      );
    });
  }, [query, activeCategory]);

  return (
    <main className="relative">
      <Navbar />
      <Hero query={query} onQueryChange={setQuery} />

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
              Featured tools
            </h2>
            <p className="mt-1 text-sm text-[var(--muted)]">
              Hand-picked tools with strong momentum.
            </p>
          </div>
          <a href="#discover" className="text-sm text-white/80 hover:text-white">
            Browse all →
          </a>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {featuredTools.map((t) => (
            <ToolCard key={t.id} tool={t} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
              Trending categories
            </h2>
            <p className="mt-1 text-sm text-[var(--muted)]">
              Browse what people are building right now.
            </p>
          </div>
          <a href="#categories" className="text-sm text-white/80 hover:text-white">
            View filters →
          </a>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {trendingCategories.map(({ c, count }) => (
            <CategoryCard
              key={c.id}
              category={c}
              count={count}
              onClick={() => {
                setActiveCategory(c.id);
                document.getElementById("discover")?.scrollIntoView({ behavior: "smooth" });
              }}
            />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
              Latest AI articles
            </h2>
            <p className="mt-1 text-sm text-[var(--muted)]">
              Short, practical reads on tools, agents, GPT, Claude, and automation.
            </p>
          </div>
          <Link href="/blog" className="text-sm text-white/80 hover:text-white">
            Read the blog →
          </Link>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {latestPosts.map((p) => (
            <BlogCard key={p.slug} post={p} />
          ))}
        </div>
      </section>

      <CategoryNav active={activeCategory} onChange={setActiveCategory} />
      <ToolGrid tools={filtered} query={query} />
      <Footer />
    </main>
  );
}
