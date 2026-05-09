"use server";

import { z } from "zod";
import { getSupabaseAdmin } from "@/lib/supabase/admin";

const submissionSchema = z.object({
  name: z.string().trim().min(2, "Tool name is too short.").max(80),
  url: z.string().trim().url("Please enter a valid website URL."),
  category: z.string().trim().min(2).max(40),
  description: z.string().trim().min(30, "Description should be at least 30 characters.").max(1000),
  email: z.string().trim().email("Please enter a valid email."),
});

export type SubmitToolState =
  | { ok: true; message: string }
  | { ok: false; message: string; fieldErrors?: Record<string, string> };

export async function submitTool(_: SubmitToolState | null, formData: FormData): Promise<SubmitToolState> {
  const raw = {
    name: String(formData.get("name") ?? ""),
    url: String(formData.get("url") ?? ""),
    category: String(formData.get("category") ?? ""),
    description: String(formData.get("description") ?? ""),
    email: String(formData.get("email") ?? ""),
  };

  const parsed = submissionSchema.safeParse(raw);
  if (!parsed.success) {
    const fieldErrors: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path[0];
      if (typeof key === "string" && !fieldErrors[key]) fieldErrors[key] = issue.message;
    }
    return {
      ok: false,
      message: "Please fix the highlighted fields.",
      fieldErrors,
    };
  }

  try {
    const supabase = getSupabaseAdmin();
    const { error } = await supabase.from("tool_submissions").insert({
      tool_name: parsed.data.name,
      website_url: parsed.data.url,
      category: parsed.data.category,
      description: parsed.data.description,
      submitter_email: parsed.data.email,
      status: "pending",
    });

    if (error) {
      return { ok: false, message: `Failed to submit: ${error.message}` };
    }

    return { ok: true, message: "Submitted! We’ll review your tool soon." };
  } catch (e) {
    const msg = e instanceof Error ? e.message : "Unknown error";
    return { ok: false, message: msg };
  }
}

