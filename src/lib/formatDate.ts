export function formatDateISO(dateIso: string): string {
  // Deterministic date formatting (prevents hydration mismatches across locales/timezones).
  // Input is expected to be an ISO-like YYYY-MM-DD string.
  const m = /^(\d{4})-(\d{2})-(\d{2})/.exec(dateIso);
  if (m) return `${m[1]}-${m[2]}-${m[3]}`;
  const d = new Date(dateIso);
  if (Number.isNaN(d.getTime())) return dateIso;
  return d.toISOString().slice(0, 10);
}

