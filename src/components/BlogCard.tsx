import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/data/blog";
import { formatDateISO } from "@/lib/formatDate";

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="card-hover group overflow-hidden rounded-2xl border border-white/10 bg-[var(--surface)]/60"
    >
      <div className="relative aspect-[16/9] overflow-hidden border-b border-white/10">
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          className="object-cover opacity-95 transition duration-300 group-hover:scale-[1.02]"
        />
      </div>

      <div className="p-5">
        <div className="flex flex-wrap items-center gap-2 text-xs text-[var(--muted)]">
          <span className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[10px] uppercase tracking-wider text-white/70">
            {post.category}
          </span>
          <span>{formatDateISO(post.publishDate)}</span>
        </div>

        <h3 className="mt-3 text-base font-semibold leading-snug text-white">
          {post.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
          {post.excerpt}
        </p>

        <div className="mt-4 inline-flex items-center gap-1 text-sm text-white/80 transition group-hover:text-white">
          Read
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
    </Link>
  );
}

