"use client";

type HeroProps = {
  query: string;
  onQueryChange: (q: string) => void;
};

export default function Hero({ query, onQueryChange }: HeroProps) {
  const stats = [
    { label: "Curated tools", value: "500+" },
    { label: "Categories", value: "20+" },
    { label: "Updated daily", value: "24/7" },
  ];

  return (
    <section className="relative overflow-hidden">
      <div className="grid-bg absolute inset-0 -z-10" aria-hidden />
      <div className="absolute inset-x-0 top-0 -z-10 h-[420px] bg-gradient-to-b from-indigo-500/10 via-transparent to-transparent" aria-hidden />

      <div className="mx-auto max-w-7xl px-4 pt-16 pb-12 sm:px-6 sm:pt-20 lg:px-8 lg:pt-28 lg:pb-16">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur">
            <span className="relative inline-flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-70" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-cyan-400" />
            </span>
            Now indexing 500+ AI tools — updated daily
          </div>

          <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Discover the best <span className="gradient-text">AI tools</span>
            <br className="hidden sm:block" /> all in one nexus.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base text-[var(--muted)] sm:text-lg">
            Hand-picked, categorized and constantly refreshed. Find the right AI for
            writing, coding, design, video, audio, research and beyond.
          </p>

          <div className="mx-auto mt-8 flex max-w-xl items-center gap-2">
            <div className="relative flex-1">
              <svg
                viewBox="0 0 24 24"
                className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--muted)]"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="7" />
                <path d="M21 21l-4.3-4.3" />
              </svg>
              <input
                value={query}
                onChange={(e) => onQueryChange(e.target.value)}
                type="text"
                placeholder="Search 500+ tools — try 'video', 'copilot', 'voice'..."
                className="w-full rounded-xl border border-white/10 bg-[var(--surface)]/80 py-3 pl-9 pr-4 text-sm text-white placeholder:text-[var(--muted)] outline-none ring-0 transition focus:border-indigo-400/60 focus:bg-[var(--surface)]"
              />
            </div>
            <a
              href="#discover"
              className="hidden rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-400 px-4 py-3 text-sm font-medium text-white shadow-[0_10px_30px_-12px_rgba(99,102,241,0.6)] transition hover:opacity-95 sm:inline-block"
            >
              Explore
            </a>
          </div>

          <div className="mx-auto mt-8 grid max-w-2xl grid-cols-3 gap-3 sm:gap-6">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-xl border border-white/10 bg-white/[0.03] px-3 py-3 backdrop-blur"
              >
                <div className="text-xl font-semibold text-white sm:text-2xl">{s.value}</div>
                <div className="text-[11px] uppercase tracking-wider text-[var(--muted)] sm:text-xs">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
