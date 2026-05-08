import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Nexus — Discover the Best AI Tools",
  description:
    "AI Nexus is a curated directory of the most powerful AI tools across writing, coding, design, audio, video and more.",
  keywords: ["AI", "AI tools", "directory", "ChatGPT", "Midjourney", "AI Nexus"],
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
