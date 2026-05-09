import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function BlogNotFound() {
  return (
    <main className="relative">
      <Navbar />
      <section className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6 lg:px-8">
        <div className="mx-auto inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
          404
        </div>
        <h1 className="mt-6 text-3xl font-semibold tracking-tight sm:text-4xl">
          Article not found
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-sm text-[var(--muted)] sm:text-base">
          This article doesn’t exist (or the URL changed). Browse the blog index to
          find the latest posts.
        </p>
        <div className="mt-8">
          <Link
            href="/blog"
            className="rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-400 px-5 py-3 text-sm font-medium text-white"
          >
            Back to Blog
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}

