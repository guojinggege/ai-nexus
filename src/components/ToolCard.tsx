import { categories } from "@/data/categories";
import type { Tool } from "@/data/tools";

const badgeStyles: Record<NonNullable<Tool["badge"]>, string> = {
  Featured: "bg-indigo-500/15 text-indigo-300 ring-indigo-400/30",
  New: "bg-emerald-500/15 text-emerald-300 ring-emerald-400/30",
  Hot: "bg-rose-500/15 text-rose-300 ring-rose-400/30",
};

const pricingStyles: Record<Tool["pricing"], string> = {
  Free: "text-emerald-300",
  Freemium: "text-cyan-300",
  Paid: "text-amber-300",
};

export default function ToolCard({ tool }: { tool: Tool }) {
  const category = categories.find((c) => c.id === tool.category);

  return (
    <a
      href={tool.url}
      target="_blank"
      rel="noopener noreferrer"
      className="card-hover group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[var(--surface)]/70 p-5 backdrop-blur"
    >
      <div
        className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 transition group-hover:opacity-100"
        aria-hidden
      />

      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <div
            className={`flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${tool.accent} text-sm font-bold text-white shadow-inner`}
          >
            {tool.initials}
          </div>
          <div>
            <h3 className="text-base font-semibold leading-tight text-white">
              {tool.name}
            </h3>
            <p className="text-xs text-[var(--muted)]">{tool.tagline}</p>
          </div>
        </div>
        {tool.badge && (
          <span
            className={`inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider ring-1 ring-inset ${badgeStyles[tool.badge]}`}
          >
            {tool.badge}
          </span>
        )}
      </div>

      <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">
        {tool.description}
      </p>

      <div className="mt-5 flex items-center justify-between border-t border-white/5 pt-4 text-xs">
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-1 text-[var(--muted)]">
            <span aria-hidden>{category?.icon}</span>
            <span className="capitalize">{category?.name ?? tool.category}</span>
          </span>
          <span className={`font-medium ${pricingStyles[tool.pricing]}`}>
            {tool.pricing}
          </span>
        </div>
        <span className="inline-flex items-center gap-1 text-white/80 transition group-hover:text-white">
          Visit
          <svg
            viewBox="0 0 24 24"
            className="h-3.5 w-3.5 transition group-hover:translate-x-0.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M7 17L17 7" />
            <path d="M8 7h9v9" />
          </svg>
        </span>
      </div>
    </a>
  );
}
