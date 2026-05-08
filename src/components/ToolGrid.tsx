import type { Tool } from "@/data/tools";
import ToolCard from "./ToolCard";

export default function ToolGrid({
  tools,
  query,
}: {
  tools: Tool[];
  query: string;
}) {
  return (
    <section id="discover" className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <div className="mb-6 flex items-end justify-between">
        <div>
          <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
            {query ? "Search results" : "Featured & trending"}
          </h2>
          <p className="text-sm text-[var(--muted)]">
            {tools.length} tool{tools.length === 1 ? "" : "s"}
            {query ? ` matching "${query}"` : ""}
          </p>
        </div>
      </div>

      {tools.length === 0 ? (
        <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-white/10 bg-white/[0.02] px-6 py-16 text-center">
          <div className="text-3xl">🪄</div>
          <h3 className="mt-3 text-base font-semibold text-white">No tools found</h3>
          <p className="mt-1 max-w-sm text-sm text-[var(--muted)]">
            Try a different keyword or pick another category. New tools are added every week.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {tools.map((t) => (
            <ToolCard key={t.id} tool={t} />
          ))}
        </div>
      )}
    </section>
  );
}
