import type { Category } from "@/data/categories";

export default function CategoryCard({
  category,
  count,
  onClick,
}: {
  category: Category;
  count: number;
  onClick?: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="card-hover group flex w-full items-start gap-4 rounded-2xl border border-white/10 bg-[var(--surface)]/60 p-5 text-left"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] text-2xl">
        <span aria-hidden>{category.icon}</span>
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex items-center justify-between gap-3">
          <h3 className="truncate text-base font-semibold text-white">{category.name}</h3>
          <span className="shrink-0 rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-xs text-white/70">
            {count}
          </span>
        </div>
        <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
          {category.description}
        </p>
        <div className="mt-3 inline-flex items-center gap-1 text-sm text-white/80 transition group-hover:text-white">
          Explore
          <svg
            viewBox="0 0 24 24"
            className="h-4 w-4 transition group-hover:translate-x-0.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14" />
            <path d="M13 6l6 6-6 6" />
          </svg>
        </div>
      </div>
    </button>
  );
}

