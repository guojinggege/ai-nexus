"use client";

import { useMemo, useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CategoryNav from "@/components/CategoryNav";
import ToolGrid from "@/components/ToolGrid";
import Footer from "@/components/Footer";
import { tools } from "@/data/tools";

export default function HomePage() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

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
      <CategoryNav active={activeCategory} onChange={setActiveCategory} />
      <ToolGrid tools={filtered} query={query} />
      <Footer />
    </main>
  );
}
