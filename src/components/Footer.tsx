import Logo from "./Logo";
import Link from "next/link";

const sections = [
  {
    title: "Product",
    links: [
      { label: "Discover", href: "/#discover" },
      { label: "Categories", href: "/#categories" },
      { label: "Submit a tool", href: "/submit" },
      { label: "API", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "Newsletter", href: "#" },
      { label: "Changelog", href: "#" },
      { label: "Brand kit", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Contact", href: "#" },
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative mt-10 border-t border-white/5 bg-[rgba(5,7,20,0.6)]">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-400/40 to-transparent" />
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Logo />
            <p className="mt-4 max-w-sm text-sm text-[var(--muted)]">
              AI Nexus is a curated directory of the most powerful AI tools — built for
              builders, makers and the curious. New tools added every week.
            </p>
            <div className="mt-5 flex max-w-sm items-center gap-2">
              <input
                type="email"
                placeholder="you@domain.com"
                className="flex-1 rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm placeholder:text-[var(--muted)] focus:border-indigo-400/60 focus:outline-none"
              />
              <button
                type="button"
                className="rounded-md bg-gradient-to-r from-indigo-500 to-cyan-400 px-3 py-2 text-sm font-medium text-white"
              >
                Subscribe
              </button>
            </div>
          </div>

          {sections.map((s) => (
            <div key={s.title}>
              <h4 className="text-sm font-semibold text-white">{s.title}</h4>
              <ul className="mt-3 space-y-2">
                {s.links.map((l) => (
                  <li key={l.label}>
                    {l.href.startsWith("/") ? (
                      <Link
                        href={l.href}
                        className="text-sm text-[var(--muted)] transition hover:text-white"
                      >
                        {l.label}
                      </Link>
                    ) : (
                      <a
                        href={l.href}
                        className="text-sm text-[var(--muted)] transition hover:text-white"
                      >
                        {l.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-white/5 pt-6 text-xs text-[var(--muted)] sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} AI Nexus. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" aria-label="Twitter" className="hover:text-white">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
                <path d="M18.244 2H21l-6.52 7.45L22 22h-6.78l-4.74-6.21L4.8 22H2l7-8L2 2h6.86l4.28 5.66L18.24 2zm-1.18 18h1.86L7.06 4H5.14l11.92 16z" />
              </svg>
            </a>
            <a href="#" aria-label="GitHub" className="hover:text-white">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
                <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.69 1.24 3.35.95.1-.74.4-1.24.72-1.53-2.55-.29-5.24-1.27-5.24-5.66 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.17a10.95 10.95 0 0 1 5.74 0c2.19-1.48 3.15-1.17 3.15-1.17.62 1.58.23 2.75.11 3.04.74.8 1.18 1.82 1.18 3.07 0 4.4-2.7 5.36-5.27 5.65.41.36.78 1.06.78 2.13v3.16c0 .31.21.67.8.55C20.21 21.39 23.5 17.07 23.5 12 23.5 5.65 18.35.5 12 .5z" />
              </svg>
            </a>
            <a href="#" aria-label="Discord" className="hover:text-white">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
                <path d="M20.317 4.369A19.79 19.79 0 0 0 16.558 3a13.4 13.4 0 0 0-.617 1.265 18.27 18.27 0 0 0-5.486 0A12.5 12.5 0 0 0 9.83 3a19.74 19.74 0 0 0-3.76 1.369C2.79 9.045 1.99 13.58 2.39 18.057a19.9 19.9 0 0 0 6.073 3.043c.49-.66.92-1.36 1.29-2.094a12.9 12.9 0 0 1-2.03-.97c.17-.124.336-.253.495-.385a14.13 14.13 0 0 0 12.564 0c.16.132.325.261.495.385a12.9 12.9 0 0 1-2.034.97c.37.734.8 1.434 1.29 2.094a19.84 19.84 0 0 0 6.073-3.043c.46-5.177-.79-9.67-3.288-13.688zM9.55 15.345c-1.182 0-2.157-1.085-2.157-2.42 0-1.336.952-2.42 2.157-2.42 1.205 0 2.18 1.084 2.156 2.42 0 1.335-.951 2.42-2.156 2.42zm4.9 0c-1.182 0-2.157-1.085-2.157-2.42 0-1.336.953-2.42 2.157-2.42s2.18 1.084 2.156 2.42c0 1.335-.952 2.42-2.156 2.42z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
