import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getPostBySlug, posts } from "@/data/blog";
import { formatDateISO } from "@/lib/formatDate";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.seo.title,
    description: post.seo.description,
    keywords: post.seo.keywords,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.seo.title,
      description: post.seo.description,
      type: "article",
      url: `/blog/${post.slug}`,
      images: [{ url: post.coverImage }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.seo.title,
      description: post.seo.description,
      images: [post.coverImage],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    datePublished: post.publishDate,
    image: post.coverImage,
    description: post.excerpt,
    mainEntityOfPage: { "@type": "WebPage", "@id": `/blog/${post.slug}` },
  };

  return (
    <main className="relative">
      <Navbar />
      <article className="mx-auto max-w-3xl px-4 pt-12 pb-16 sm:px-6 lg:px-8 lg:pt-16">
        <div className="text-sm text-[var(--muted)]">
          <Link href="/blog" className="hover:text-white">
            Blog
          </Link>
          <span className="mx-2 text-white/20">/</span>
          <span className="text-white/90">{post.title}</span>
        </div>

        <h1 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
          {post.title}
        </h1>
        <div className="mt-3 flex flex-wrap items-center gap-2 text-sm text-[var(--muted)]">
          <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[10px] uppercase tracking-wider text-white/70">
            {post.category}
          </span>
          <span>•</span>
          <span>{formatDateISO(post.publishDate)}</span>
        </div>

        <div className="relative mt-7 aspect-[16/9] overflow-hidden rounded-2xl border border-white/10 bg-black/10">
          <Image src={post.coverImage} alt={post.title} fill className="object-cover" priority />
        </div>

        <div className="prose prose-invert mt-8 max-w-none">
          {post.content.split("\n\n").map((block) => {
            const key = `${post.slug}-${block.slice(0, 32)}`;
            if (block.startsWith("## ")) {
              return (
                <h2 key={key} className="mt-7 text-xl font-semibold tracking-tight">
                  {block.replace(/^##\s+/, "")}
                </h2>
              );
            }
            if (block.startsWith("- ")) {
              const items = block.split("\n").map((l) => l.replace(/^- /, ""));
              return (
                <ul key={key} className="mt-4 list-disc space-y-2 pl-5 text-[var(--muted)]">
                  {items.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              );
            }
            if (/^\d\)/.test(block)) {
              const items = block.split("\n").map((l) => l.replace(/^\d\)\s*/, ""));
              return (
                <ol key={key} className="mt-4 list-decimal space-y-2 pl-5 text-[var(--muted)]">
                  {items.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ol>
              );
            }
            return (
              <p key={key} className="mt-4 leading-relaxed text-[var(--muted)]">
                {block}
              </p>
            );
          })}
        </div>

        <div className="mt-10 flex items-center justify-between border-t border-white/5 pt-6">
          <Link href="/blog" className="text-sm text-white/80 hover:text-white">
            ← Back to Blog
          </Link>
          <Link href="/#discover" className="text-sm text-white/80 hover:text-white">
            Browse tools →
          </Link>
        </div>
      </article>

      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Footer />
    </main>
  );
}

