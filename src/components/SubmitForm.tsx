"use client";

import { useActionState } from "react";
import { submitTool, type SubmitToolState } from "@/app/submit/actions";
import { categories } from "@/data/categories";

const initialState: SubmitToolState | null = null;

export default function SubmitForm() {
  const [state, action, pending] = useActionState(submitTool, initialState);
  const fieldErrors = state && !state.ok ? state.fieldErrors : undefined;

  return (
    <form action={action} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field
          label="Tool name"
          name="name"
          placeholder="e.g. MyAwesome AI"
          error={fieldErrors?.name}
        />
        <Field
          label="Website URL"
          name="url"
          placeholder="https://example.com"
          error={fieldErrors?.url}
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="text-sm text-white/90">Category</label>
          <select
            name="category"
            defaultValue=""
            className={[
              "mt-2 w-full rounded-xl border bg-[var(--surface)]/70 px-3 py-3 text-sm text-white outline-none transition",
              fieldErrors?.category
                ? "border-rose-400/60"
                : "border-white/10 focus:border-indigo-400/60",
            ].join(" ")}
          >
            <option value="" disabled>
              Select a category…
            </option>
            {categories
              .filter((c) => c.id !== "all")
              .map((c) => (
                <option key={c.id} value={c.id}>
                  {c.name}
                </option>
              ))}
          </select>
          {fieldErrors?.category && (
            <p className="mt-2 text-xs text-rose-300">{fieldErrors.category}</p>
          )}
        </div>

        <Field
          label="Submitter email"
          name="email"
          placeholder="you@domain.com"
          error={fieldErrors?.email}
        />
      </div>

      <div>
        <label className="text-sm text-white/90">Description</label>
        <textarea
          name="description"
          rows={6}
          placeholder="What does this tool do? Who is it for? What makes it different?"
          className={[
            "mt-2 w-full resize-none rounded-xl border bg-[var(--surface)]/70 px-3 py-3 text-sm text-white outline-none transition",
            fieldErrors?.description
              ? "border-rose-400/60"
              : "border-white/10 focus:border-indigo-400/60",
          ].join(" ")}
        />
        {fieldErrors?.description && (
          <p className="mt-2 text-xs text-rose-300">{fieldErrors.description}</p>
        )}
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-[var(--muted)]">
          By submitting, you confirm this tool is safe to list publicly.
        </p>

        <button
          type="submit"
          disabled={pending}
          className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-400 px-5 py-3 text-sm font-medium text-white shadow-[0_10px_30px_-12px_rgba(99,102,241,0.6)] transition hover:opacity-95 disabled:opacity-60"
        >
          {pending ? "Submitting…" : "Submit tool"}
        </button>
      </div>

      {state && (
        <div
          className={[
            "rounded-xl border px-4 py-3 text-sm",
            state.ok
              ? "border-emerald-400/30 bg-emerald-500/10 text-emerald-200"
              : "border-rose-400/30 bg-rose-500/10 text-rose-200",
          ].join(" ")}
          role="status"
        >
          {state.message}
        </div>
      )}
    </form>
  );
}

function Field({
  label,
  name,
  placeholder,
  error,
}: {
  label: string;
  name: string;
  placeholder: string;
  error?: string;
}) {
  return (
    <div>
      <label className="text-sm text-white/90" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        placeholder={placeholder}
        className={[
          "mt-2 w-full rounded-xl border bg-[var(--surface)]/70 px-3 py-3 text-sm text-white outline-none transition placeholder:text-[var(--muted)]",
          error ? "border-rose-400/60" : "border-white/10 focus:border-indigo-400/60",
        ].join(" ")}
      />
      {error && <p className="mt-2 text-xs text-rose-300">{error}</p>}
    </div>
  );
}

