export type BlogCategory =
  | "AI tools"
  | "AI agents"
  | "AI coding"
  | "GPT"
  | "Claude"
  | "automation";

export type BlogSEO = {
  title: string;
  description: string;
  keywords: string[];
};

export type BlogPost = {
  title: string;
  slug: string;
  excerpt: string;
  coverImage: string;
  publishDate: string; // ISO date
  category: BlogCategory;
  seo: BlogSEO;
  content: string; // markdown-ish plain text (rendered as prose blocks)
};

const cover = "/covers/ai-cover.svg";

export const posts: BlogPost[] = [
  {
    title: "How to choose the right AI tool in 2026",
    slug: "choose-the-right-ai-tool-2026",
    excerpt:
      "A practical framework to evaluate AI tools by workflow fit, reliability, pricing, and speed-to-value.",
    coverImage: cover,
    publishDate: "2026-05-01",
    category: "AI tools",
    seo: {
      title: "How to choose the right AI tool in 2026",
      description:
        "Use a simple scoring framework to pick AI tools that actually ship outcomes—workflow fit, reliability, cost, and UX.",
      keywords: ["AI tools", "AI tool evaluation", "productivity", "workflow"],
    },
    content:
      "## The problem\nAI directories are big. Your time is not.\n\n## A simple framework\n- Workflow fit (where does it save time?)\n- Output quality (accuracy, style control)\n- Reliability (downtime, regressions)\n- Cost (total cost of ownership)\n- Team adoption (UX, permissions)\n\n## Quick checklist\nPick 3 candidates, run the same tasks, and compare side-by-side.",
  },
  {
    title: "Trending AI agents: from chat to workflows",
    slug: "trending-ai-agents-chat-to-workflows",
    excerpt:
      "What makes an AI agent useful, and how agentic products differ from chatbots and copilots.",
    coverImage: cover,
    publishDate: "2026-05-02",
    category: "AI agents",
    seo: {
      title: "Trending AI agents: from chat to workflows",
      description:
        "Understand agentic UX, tool calling, memory, and guardrails—plus where agents deliver real ROI.",
      keywords: ["AI agents", "agentic workflows", "tool calling", "automation"],
    },
    content:
      "## Agents 101\nAgents combine reasoning + tools + state.\n\n## Where agents win\n- Multi-step workflows\n- Repeated operations\n- Cross-app coordination\n\n## Guardrails\nPrefer explicit approvals for actions like email, payments, and deployments.",
  },
  {
    title: "AI coding copilots: what to use (and when)",
    slug: "ai-coding-copilots-what-to-use",
    excerpt:
      "A modern view of AI coding: autocomplete, chat, refactors, and repo-aware agents.",
    coverImage: cover,
    publishDate: "2026-05-03",
    category: "AI coding",
    seo: {
      title: "AI coding copilots: what to use (and when)",
      description:
        "Pick the right AI coding mode—inline, chat, or agent—based on task type and risk profile.",
      keywords: ["AI coding", "copilot", "refactor", "code review"],
    },
    content:
      "## Three modes\n- Inline suggestions for speed\n- Chat for understanding\n- Agents for multi-file changes\n\n## Best practice\nAlways require tests + lint before merging agent-generated changes.",
  },
  {
    title: "GPT: prompt patterns that scale across teams",
    slug: "gpt-prompt-patterns-that-scale",
    excerpt:
      "Reusable prompt structures for consistent outputs: briefs, rubrics, and structured formats.",
    coverImage: cover,
    publishDate: "2026-05-04",
    category: "GPT",
    seo: {
      title: "GPT prompt patterns that scale across teams",
      description:
        "Learn prompt templates teams can reuse: goal/context/constraints, examples, and evaluation rubrics.",
      keywords: ["GPT", "prompting", "templates", "structured output"],
    },
    content:
      "## The core template\nGoal → Context → Constraints → Output format → Evaluation.\n\n## Add a rubric\nTell the model how to self-check before it responds.",
  },
  {
    title: "Claude for long documents: a practical workflow",
    slug: "claude-long-documents-practical-workflow",
    excerpt:
      "How to process long specs and reports: chunking strategies, extraction, and synthesis.",
    coverImage: cover,
    publishDate: "2026-05-05",
    category: "Claude",
    seo: {
      title: "Claude for long documents: a practical workflow",
      description:
        "A repeatable approach to extract facts, generate outlines, and produce accurate summaries from long documents.",
      keywords: ["Claude", "long context", "summarization", "analysis"],
    },
    content:
      "## Workflow\n1) Ask for an outline\n2) Extract key facts to a table\n3) Generate a summary with citations\n\n## Tip\nAlways ask for 'unknowns' and 'assumptions' at the end.",
  },
  {
    title: "Automation with AI: where it pays off fastest",
    slug: "automation-with-ai-where-it-pays-off",
    excerpt:
      "Start with small, measurable automations: lead triage, support summaries, and content repurposing.",
    coverImage: cover,
    publishDate: "2026-05-06",
    category: "automation",
    seo: {
      title: "Automation with AI: where it pays off fastest",
      description:
        "A prioritization guide for AI automations with clear ROI and low risk.",
      keywords: ["automation", "AI workflows", "Zapier", "productivity"],
    },
    content:
      "## Pick low-risk tasks\nSummaries, drafts, routing, and classification are great first wins.\n\n## Avoid\nAny automation that can spend money or delete data without human review.",
  },
  {
    title: "AI tool pricing: how to compare fairly",
    slug: "ai-tool-pricing-compare-fairly",
    excerpt:
      "Beyond per-seat: usage, limits, privacy, and hidden costs that change the real price.",
    coverImage: cover,
    publishDate: "2026-04-28",
    category: "AI tools",
    seo: {
      title: "AI tool pricing: how to compare fairly",
      description:
        "Learn the pricing traps: usage limits, premium models, collaboration add-ons, and data policies.",
      keywords: ["AI pricing", "SaaS pricing", "AI tools", "cost"],
    },
    content:
      "## Compare apples-to-apples\nDefine the same workload and compute cost per outcome, not cost per seat.",
  },
  {
    title: "Agent memory: when it helps (and when it hurts)",
    slug: "agent-memory-when-it-helps",
    excerpt:
      "Memory improves personalization but increases risk. Here’s how to implement it safely.",
    coverImage: cover,
    publishDate: "2026-04-27",
    category: "AI agents",
    seo: {
      title: "Agent memory: when it helps (and when it hurts)",
      description:
        "A guide to memory design: short-term context, long-term profiles, and privacy controls.",
      keywords: ["AI agents", "memory", "privacy", "personalization"],
    },
    content:
      "## Types of memory\n- Session memory\n- Project memory\n- User profile memory\n\n## Rule\nMake memory explicit and editable by users.",
  },
  {
    title: "Repo-aware AI coding: shipping with confidence",
    slug: "repo-aware-ai-coding-shipping-with-confidence",
    excerpt:
      "How to use repo context without causing regressions: constraints, tests, and safe refactors.",
    coverImage: cover,
    publishDate: "2026-04-26",
    category: "AI coding",
    seo: {
      title: "Repo-aware AI coding: shipping with confidence",
      description:
        "Practical guardrails for repo-aware assistants: test gates, small diffs, and code review patterns.",
      keywords: ["AI coding", "repo context", "testing", "refactor"],
    },
    content:
      "## Guardrails\nKeep diffs small, run tests, and require human review for security-sensitive changes.",
  },
  {
    title: "GPT for product research: synthesize, don’t hallucinate",
    slug: "gpt-product-research-synthesize",
    excerpt:
      "Use GPT to organize sources and generate insights, but keep factual claims grounded.",
    coverImage: cover,
    publishDate: "2026-04-25",
    category: "GPT",
    seo: {
      title: "GPT for product research: synthesize, don’t hallucinate",
      description:
        "A workflow to summarize sources, track quotes, and avoid invented facts in research outputs.",
      keywords: ["GPT", "research", "summaries", "citations"],
    },
    content:
      "## Best approach\nProvide sources and ask GPT to extract claims with confidence levels.",
  },
  {
    title: "Claude for writing: clarity, tone, and structure",
    slug: "claude-for-writing-clarity-tone-structure",
    excerpt:
      "A repeatable editing loop to improve clarity while preserving your voice.",
    coverImage: cover,
    publishDate: "2026-04-24",
    category: "Claude",
    seo: {
      title: "Claude for writing: clarity, tone, and structure",
      description:
        "Use Claude to improve clarity and structure with a simple three-pass editing loop.",
      keywords: ["Claude", "writing", "editing", "tone"],
    },
    content:
      "## Three-pass loop\n1) Structure\n2) Clarity\n3) Tone\n\n## Tip\nAsk for 2-3 rewrite options with different levels of formality.",
  },
  {
    title: "Automation playbook: triage, summarize, route",
    slug: "automation-playbook-triage-summarize-route",
    excerpt:
      "A safe AI automation pattern for support, sales, and ops: classify then route with approvals.",
    coverImage: cover,
    publishDate: "2026-04-23",
    category: "automation",
    seo: {
      title: "Automation playbook: triage, summarize, route",
      description:
        "A practical automation pattern: classify inbound, summarize key details, and route to the right owner.",
      keywords: ["automation", "triage", "support", "workflows"],
    },
    content:
      "## Pattern\nInbound → classify → summarize → route → human approval for actions.",
  },
  // 8 more posts (kept short but SEO-ready)
  {
    title: "AI tools vs AI agents: what’s the difference?",
    slug: "ai-tools-vs-ai-agents-difference",
    excerpt:
      "A clean mental model: tools produce outputs; agents pursue goals with tools and state.",
    coverImage: cover,
    publishDate: "2026-04-22",
    category: "AI tools",
    seo: {
      title: "AI tools vs AI agents: what’s the difference?",
      description:
        "Learn the key differences between AI tools and AI agents, and how to choose for your workflow.",
      keywords: ["AI tools", "AI agents", "workflow", "automation"],
    },
    content:
      "## The difference\nTools answer. Agents act (with guardrails). Choose based on risk and repeatability.",
  },
  {
    title: "Building agent guardrails: approvals and audit logs",
    slug: "building-agent-guardrails-approvals-audit-logs",
    excerpt:
      "Make agent actions safe with explicit approvals, role-based access, and traceable logs.",
    coverImage: cover,
    publishDate: "2026-04-21",
    category: "AI agents",
    seo: {
      title: "Building agent guardrails: approvals and audit logs",
      description:
        "A practical guide to agent safety: approval gates, RBAC, and audit trails.",
      keywords: ["AI agents", "guardrails", "approvals", "audit logs"],
    },
    content:
      "## Guardrails checklist\n- Approval gates\n- RBAC\n- Audit logs\n- Rate limits\n- Rollback plan",
  },
  {
    title: "AI coding: how to review generated PRs",
    slug: "ai-coding-review-generated-prs",
    excerpt:
      "A review checklist for AI-generated changes: tests, security, and refactor risk.",
    coverImage: cover,
    publishDate: "2026-04-20",
    category: "AI coding",
    seo: {
      title: "AI coding: how to review generated PRs",
      description:
        "Review AI-generated pull requests safely with a simple checklist and automated gates.",
      keywords: ["AI coding", "code review", "PR checklist", "testing"],
    },
    content:
      "## Checklist\n- Does it have tests?\n- Are edge cases handled?\n- Security implications?\n- Is the diff minimal?\n- Performance regressions?",
  },
  {
    title: "GPT for customer support: faster replies, same empathy",
    slug: "gpt-customer-support-faster-replies",
    excerpt:
      "Use GPT to draft replies with policy grounding, tone control, and escalation rules.",
    coverImage: cover,
    publishDate: "2026-04-19",
    category: "GPT",
    seo: {
      title: "GPT for customer support: faster replies, same empathy",
      description:
        "Improve response time using GPT drafts grounded in your policies and knowledge base.",
      keywords: ["GPT", "customer support", "automation", "tone"],
    },
    content:
      "## Best practice\nDraft with GPT, then require a human for final send—especially for refunds and compliance.",
  },
  {
    title: "Claude for analysis: ask for assumptions up front",
    slug: "claude-for-analysis-assumptions",
    excerpt:
      "A simple prompt tweak that improves analytical quality: list assumptions and unknowns first.",
    coverImage: cover,
    publishDate: "2026-04-18",
    category: "Claude",
    seo: {
      title: "Claude for analysis: ask for assumptions up front",
      description:
        "Improve analytical accuracy by having Claude list assumptions and unknowns before answering.",
      keywords: ["Claude", "analysis", "assumptions", "reasoning"],
    },
    content:
      "## Prompt\nBefore answering, list assumptions and missing info. Then give the best answer with uncertainty notes.",
  },
  {
    title: "Automation: designing reliable handoffs to humans",
    slug: "automation-reliable-handoffs-to-humans",
    excerpt:
      "The most important part of automation is the handoff: context, next actions, and ownership.",
    coverImage: cover,
    publishDate: "2026-04-17",
    category: "automation",
    seo: {
      title: "Automation: designing reliable handoffs to humans",
      description:
        "Design handoffs that work: summarized context, suggested next actions, and clear ownership.",
      keywords: ["automation", "handoff", "workflows", "ops"],
    },
    content:
      "## Handoff template\nContext → Recommendation → Next action → Owner → Deadline.",
  },
  {
    title: "AI tools for creators: image, video, and audio stacks",
    slug: "ai-tools-for-creators-stacks",
    excerpt:
      "A practical stack for creators: ideation, production, editing, and publishing.",
    coverImage: cover,
    publishDate: "2026-04-16",
    category: "AI tools",
    seo: {
      title: "AI tools for creators: image, video, and audio stacks",
      description:
        "Build a creator stack with AI tools across ideation, generation, editing, and publishing.",
      keywords: ["AI tools", "creators", "video", "audio", "image generation"],
    },
    content:
      "## Stack\nIdeate → generate → edit → repurpose → publish. Keep prompts, presets, and brand guidelines reusable.",
  },
  {
    title: "AI agents for ops: onboarding, access, and audits",
    slug: "ai-agents-for-ops-onboarding-access-audits",
    excerpt:
      "Operationalizing agents means permissions, approvals, and auditability—not just prompts.",
    coverImage: cover,
    publishDate: "2026-04-15",
    category: "AI agents",
    seo: {
      title: "AI agents for ops: onboarding, access, and audits",
      description:
        "A checklist to deploy AI agents in operations: access control, onboarding, and audits.",
      keywords: ["AI agents", "ops", "RBAC", "audit"],
    },
    content:
      "## Ops checklist\n- Access scoping\n- Approvals\n- Audit logs\n- Incident playbooks\n- Change management",
  },
  {
    title: "AI coding: when to refactor vs rewrite",
    slug: "ai-coding-refactor-vs-rewrite",
    excerpt:
      "Use AI to refactor safely, and reserve rewrites for when architecture is the bottleneck.",
    coverImage: cover,
    publishDate: "2026-04-14",
    category: "AI coding",
    seo: {
      title: "AI coding: when to refactor vs rewrite",
      description:
        "Learn when AI-assisted refactors are safe and when a rewrite is the better move.",
      keywords: ["AI coding", "refactor", "rewrite", "architecture"],
    },
    content:
      "## Rule of thumb\nRefactor when tests exist. Rewrite when requirements or architecture fundamentally changed.",
  },
  {
    title: "GPT: structured outputs for reliable automation",
    slug: "gpt-structured-outputs-reliable-automation",
    excerpt:
      "Make GPT outputs machine-friendly: JSON schemas, constraints, and retries.",
    coverImage: cover,
    publishDate: "2026-04-13",
    category: "GPT",
    seo: {
      title: "GPT: structured outputs for reliable automation",
      description:
        "Improve automation reliability with structured outputs, schemas, and validation.",
      keywords: ["GPT", "structured output", "JSON", "automation"],
    },
    content:
      "## Pattern\nAsk for JSON → validate → retry with errors → log and monitor.",
  },
  {
    title: "Claude: writing specs that engineers ship",
    slug: "claude-writing-specs-engineers-ship",
    excerpt:
      "Turn vague ideas into shippable specs using constraints, acceptance criteria, and edge cases.",
    coverImage: cover,
    publishDate: "2026-04-12",
    category: "Claude",
    seo: {
      title: "Claude: writing specs that engineers ship",
      description:
        "Use Claude to draft shippable specs with acceptance criteria and edge cases.",
      keywords: ["Claude", "product specs", "acceptance criteria", "planning"],
    },
    content:
      "## Spec outline\nGoal → Non-goals → UX → API → Edge cases → Acceptance criteria → Test plan.",
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getLatestPosts(limit = 6): BlogPost[] {
  return [...posts]
    .sort((a, b) => (a.publishDate < b.publishDate ? 1 : -1))
    .slice(0, limit);
}

