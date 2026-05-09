import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SubmitForm from "@/components/SubmitForm";

export const metadata: Metadata = {
  title: "Submit an AI Tool — AI Nexus",
  description:
    "Submit your AI tool to AI Nexus. Share the name, website, category, and a short description for review.",
};

export default function SubmitPage() {
  return (
    <main className="relative">
      <Navbar />
      <section className="mx-auto max-w-3xl px-4 pt-12 pb-16 sm:px-6 lg:px-8 lg:pt-16">
        <div className="rounded-2xl border border-white/10 bg-[var(--surface)]/50 p-6 sm:p-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
            <span aria-hidden>🚀</span> Get listed
          </div>
          <h1 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
            Submit a tool
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-[var(--muted)] sm:text-base">
            We review submissions for quality, safety, and clarity. If approved, your
            tool will appear in the directory with a dedicated detail page.
          </p>

          <div className="mt-8">
            <SubmitForm />
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

