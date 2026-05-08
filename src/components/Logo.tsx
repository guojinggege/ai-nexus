export default function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <span className="relative inline-flex h-8 w-8 items-center justify-center">
        <span className="absolute inset-0 rounded-lg bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-cyan-400 opacity-90 blur-[2px]" />
        <span className="relative h-7 w-7 rounded-lg bg-[var(--background)] ring-1 ring-white/10 flex items-center justify-center">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-white"
            aria-hidden
          >
            <path
              d="M4 12L9 7l6 6 5-5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="20" cy="8" r="1.6" fill="currentColor" />
            <circle cx="9" cy="7" r="1.6" fill="currentColor" />
            <circle cx="15" cy="13" r="1.6" fill="currentColor" />
            <circle cx="4" cy="12" r="1.6" fill="currentColor" />
          </svg>
        </span>
      </span>
      <span className="text-base font-semibold tracking-tight">
        AI <span className="gradient-text">Nexus</span>
      </span>
    </div>
  );
}
