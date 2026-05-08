"use client";

import { categories, type Category } from "@/data/categories";

type Props = {
  active: string;
  onChange: (id: string) => void;
};

export default function CategoryNav({ active, onChange }: Props) {
  return (
    <section id="categories" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex items-end justify-between gap-4 pb-4">
        <div>
          <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
            Browse by category
          </h2>
          <p className="text-sm text-[var(--muted)]">
            Filter the directory by what you want to build.
          </p>
        </div>
        <div className="hidden text-xs text-[var(--muted)] sm:block">
          {categories.length - 1} categories
        </div>
      </div>

      <div className="no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4 sm:mx-0 sm:flex-wrap sm:px-0">
        {categories.map((c) => (
          <CategoryPill
            key={c.id}
            category={c}
            active={active === c.id}
            onClick={() => onChange(c.id)}
          />
        ))}
      </div>
    </section>
  );
}

function CategoryPill({
  category,
  active,
  onClick,
}: {
  category: Category;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={[
        "inline-flex shrink-0 items-center gap-2 rounded-full border px-3.5 py-1.5 text-sm transition",
        active
          ? "border-transparent bg-gradient-to-r from-indigo-500/90 to-cyan-400/90 text-white shadow-[0_8px_24px_-10px_rgba(99,102,241,0.6)]"
          : "border-white/10 bg-white/[0.03] text-[var(--muted)] hover:border-white/20 hover:bg-white/[0.06] hover:text-white",
      ].join(" ")}
    >
      <span aria-hidden>{category.icon}</span>
      <span className="font-medium">{category.name}</span>
    </button>
  );
}
