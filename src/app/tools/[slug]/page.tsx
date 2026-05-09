import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ToolCard from "@/components/ToolCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getRelatedTools, getToolBySlug } from "@/lib/tools";
import { tools } from "@/data/tools";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return tools.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const tool = getToolBySlug(slug);
  if (!tool) return {};

  const title = tool.seo?.title ?? `${tool.name} — AI Tool`;
  const description = tool.seo?.description ?? tool.description;

  return {
    title,
    description,
    keywords: tool.seo?.keywords ?? tool.tags,
    alternates: { canonical: `/tools/${tool.slug}` },
    openGraph: {
      title,
      description,
      type: "article",
      url: `/tools/${tool.slug}`,
      images: [{ url: tool.screenshots?.[0]?.src ?? "/screenshots/placeholder-1.svg" }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [tool.screenshots?.[0]?.src ?? "/screenshots/placeholder-1.svg"],
    },
  };
}

export default async function ToolDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const tool = getToolBySlug(slug);
  if (!tool) notFound();

  const related = getRelatedTools(tool, 6);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: tool.name,
    description: tool.description,
    applicationCategory: tool.category,
    operatingSystem: "Web",
    url: tool.url,
    offers: {
      "@type": "Offer",
      price: tool.pricing.startingAtUsdPerMonth ?? 0,
      priceCurrency: "USD",
      category: tool.pricing.model,
    },
  };

  return (
    <main className="relative">
      <Navbar />

      <section className="mx-auto max-w-7xl px-4 pt-12 pb-10 sm:px-6 lg:px-8 lg:pt-16">
        <div className="mb-8 flex flex-col gap-4">
          <div className="text-sm text-[var(--muted)]">
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <span className="mx-2 text-white/20">/</span>
            <Link href="/#discover" className="hover:text-white">
              Tools
            </Link>
            <span className="mx-2 text-white/20">/</span>
            <span className="text-white/90">{tool.name}</span>
          </div>

          <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
            <div className="flex items-start gap-4">
              <div
                className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${tool.accent} text-base font-bold text-white shadow-inner`}
                aria-hidden
              >
                {tool.initials}
              </div>
              <div>
                <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                  {tool.name}
                </h1>
                <p className="mt-2 max-w-2xl text-base text-[var(--muted)] sm:text-lg">
                  {tool.tagline}
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-2">
                  <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-white/80">
                    {tool.pricing.model}
                    {typeof tool.pricing.startingAtUsdPerMonth === "number" &&
                      tool.pricing.startingAtUsdPerMonth > 0 && (
                        <span className="text-white/50">
                          {" "}
                          • from ${tool.pricing.startingAtUsdPerMonth}/mo
                        </span>
                      )}
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-white/80 capitalize">
                    {tool.category}
                  </span>
                  {tool.badge && (
                    <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-white/80">
                      {tool.badge}
                    </span>
                  )}
                </div>
              </div>
            </div>

            <div className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row">
              <a
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-400 px-5 py-3 text-sm font-medium text-white shadow-[0_10px_30px_-12px_rgba(99,102,241,0.6)] transition hover:opacity-95"
              >
                Visit website
              </a>
              <Link
                href="/submit"
                className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm text-white/90 transition hover:bg-white/10"
              >
                Submit a tool
              </Link>
            </div>
          </div>
        </div>

        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-[var(--surface)]/60">
              <div className="grid gap-3 p-3 sm:grid-cols-2">
                {tool.screenshots.map((s) => (
                  <div
                    key={s.alt}
                    className="overflow-hidden rounded-xl border border-white/10 bg-black/10"
                  >
                    <Image
                      src={s.src}
                      alt={s.alt}
                      width={1600}
                      height={1000}
                      className="h-full w-full object-cover"
                      priority
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 rounded-2xl border border-white/10 bg-[var(--surface)]/50 p-6">
              <h2 className="text-lg font-semibold">Overview</h2>
              <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                {tool.description}
              </p>
            </div>

            <div className="mt-6 rounded-2xl border border-white/10 bg-[var(--surface)]/50 p-6">
              <h2 className="text-lg font-semibold">Key features</h2>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {tool.features.map((f) => (
                  <li
                    key={f}
                    className="flex gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4 text-sm text-white/90"
                  >
                    <span
                      className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-indigo-500/15 text-indigo-200 ring-1 ring-inset ring-indigo-400/25"
                      aria-hidden
                    >
                      ✓
                    </span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <aside className="lg:col-span-4">
            <div className="sticky top-24 space-y-6">
              <div className="rounded-2xl border border-white/10 bg-[var(--surface)]/50 p-6">
                <h2 className="text-lg font-semibold">Pricing</h2>
                <div className="mt-3 rounded-xl border border-white/10 bg-white/[0.03] p-4">
                  <div className="text-sm text-white/90">{tool.pricing.model}</div>
                  {typeof tool.pricing.startingAtUsdPerMonth === "number" && (
                    <div className="mt-1 text-2xl font-semibold tracking-tight">
                      {tool.pricing.startingAtUsdPerMonth === 0
                        ? "Free"
                        : `$${tool.pricing.startingAtUsdPerMonth}/mo`}
                    </div>
                  )}
                  {tool.pricing.note && (
                    <p className="mt-2 text-xs leading-relaxed text-[var(--muted)]">
                      {tool.pricing.note}
                    </p>
                  )}
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-[var(--surface)]/50 p-6">
                <h2 className="text-lg font-semibold">Tags</h2>
                <div className="mt-3 flex flex-wrap gap-2">
                  {tool.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-white/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-[var(--surface)]/50 p-6">
                <h2 className="text-lg font-semibold">External website</h2>
                <a
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex w-full items-center justify-center rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white/90 transition hover:bg-white/10"
                >
                  Open {tool.name}
                </a>
                <p className="mt-2 text-xs text-[var(--muted)]">
                  Always verify pricing and features on the official website.
                </p>
              </div>
            </div>
          </aside>
        </div>

        <section className="mt-12">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
                Related tools
              </h2>
              <p className="mt-1 text-sm text-[var(--muted)]">
                More tools you might like in {tool.category}.
              </p>
            </div>
            <Link
              href="/#discover"
              className="text-sm text-white/80 transition hover:text-white"
            >
              Browse all →
            </Link>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((t) => (
              <ToolCard key={t.id} tool={t} />
            ))}
          </div>
        </section>
      </section>

      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Footer />
    </main>
  );
}

