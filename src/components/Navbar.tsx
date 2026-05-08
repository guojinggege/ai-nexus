"use client";

import { useState } from "react";
import Logo from "./Logo";

const navLinks = [
  { label: "Discover", href: "#discover" },
  { label: "Categories", href: "#categories" },
  { label: "Submit", href: "#submit" },
  { label: "Blog", href: "#blog" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-[rgba(5,7,20,0.7)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="#" className="flex items-center gap-2">
          <Logo />
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-md px-3 py-2 text-sm text-[var(--muted)] transition hover:text-white hover:bg-white/5"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <a
            href="#submit"
            className="rounded-md border border-white/10 bg-white/5 px-3.5 py-2 text-sm text-white/90 transition hover:bg-white/10"
          >
            Submit a tool
          </a>
          <a
            href="#discover"
            className="rounded-md bg-gradient-to-r from-indigo-500 to-cyan-400 px-3.5 py-2 text-sm font-medium text-white shadow-[0_8px_30px_-10px_rgba(99,102,241,0.6)] transition hover:opacity-95"
          >
            Get started
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/10 bg-white/5 text-white md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <svg
            viewBox="0 0 24 24"
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {open ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="border-t border-white/5 bg-[rgba(5,7,20,0.95)] md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3 sm:px-6">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm text-[var(--muted)] hover:bg-white/5 hover:text-white"
              >
                {l.label}
              </a>
            ))}
            <div className="mt-2 grid grid-cols-2 gap-2">
              <a
                href="#submit"
                onClick={() => setOpen(false)}
                className="rounded-md border border-white/10 bg-white/5 px-3 py-2 text-center text-sm text-white/90"
              >
                Submit
              </a>
              <a
                href="#discover"
                onClick={() => setOpen(false)}
                className="rounded-md bg-gradient-to-r from-indigo-500 to-cyan-400 px-3 py-2 text-center text-sm font-medium text-white"
              >
                Get started
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
