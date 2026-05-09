import { tools, type Tool } from "@/data/tools";

export function getToolBySlug(slug: string): Tool | undefined {
  return tools.find((t) => t.slug === slug);
}

export function getRelatedTools(tool: Tool, limit = 6): Tool[] {
  const sameCategory = tools.filter(
    (t) => t.id !== tool.id && (t.category === tool.category || t.categories?.includes(tool.category)),
  );

  const toolTags = new Set(tool.tags.map((t) => t.toLowerCase()));
  const scored = sameCategory
    .map((t) => {
      const overlap = t.tags.reduce((acc, tag) => (toolTags.has(tag.toLowerCase()) ? acc + 1 : acc), 0);
      const badgeBoost = t.badge ? 0.25 : 0;
      return { t, score: overlap + badgeBoost };
    })
    .sort((a, b) => b.score - a.score);

  const top = scored.map((s) => s.t).slice(0, limit);
  if (top.length >= limit) return top;

  // fallback: fill with any other tools
  const fallback = tools.filter((t) => t.id !== tool.id && !top.some((x) => x.id === t.id));
  return [...top, ...fallback.slice(0, Math.max(0, limit - top.length))];
}

