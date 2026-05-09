import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: {
    default: "AI Nexus — Discover the Best AI Tools",
    template: "%s — AI Nexus",
  },
  description:
    "AI Nexus is a curated directory of the most powerful AI tools across writing, coding, design, audio, video and more.",
  keywords: ["AI", "AI tools", "directory", "ChatGPT", "Claude", "AI Nexus"],
  openGraph: {
    title: "AI Nexus — Discover the Best AI Tools",
    description:
      "Discover, compare, and explore the best AI tools. Browse featured tools, trending categories, and the latest AI articles.",
    type: "website",
    images: [{ url: "/covers/ai-cover.svg" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/covers/ai-cover.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
