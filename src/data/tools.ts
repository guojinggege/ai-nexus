export type Tool = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  url: string;
  category: string;
  badge?: "Featured" | "New" | "Hot";
  pricing: "Free" | "Freemium" | "Paid";
  initials: string;
  accent: string; // tailwind gradient classes
};

export const tools: Tool[] = [
  {
    id: "chatgpt",
    name: "ChatGPT",
    tagline: "OpenAI's flagship conversational AI",
    description:
      "A versatile chatbot for writing, brainstorming, coding and analysis with broad reasoning and tool use.",
    url: "https://chat.openai.com",
    category: "chat",
    badge: "Featured",
    pricing: "Freemium",
    initials: "GP",
    accent: "from-emerald-400 to-teal-500",
  },
  {
    id: "claude",
    name: "Claude",
    tagline: "Anthropic's helpful, harmless assistant",
    description:
      "Long-context conversations, careful reasoning, and strong coding ability — great for nuanced tasks.",
    url: "https://claude.ai",
    category: "chat",
    badge: "Hot",
    pricing: "Freemium",
    initials: "CL",
    accent: "from-orange-400 to-rose-500",
  },
  {
    id: "gemini",
    name: "Gemini",
    tagline: "Google's multimodal AI",
    description:
      "Native multimodal understanding across text, images, audio and code, deeply integrated with Google.",
    url: "https://gemini.google.com",
    category: "chat",
    pricing: "Freemium",
    initials: "GE",
    accent: "from-sky-400 to-indigo-500",
  },
  {
    id: "perplexity",
    name: "Perplexity",
    tagline: "Answer engine for the web",
    description:
      "Conversational search that cites real sources — fast, focused answers with up-to-date references.",
    url: "https://perplexity.ai",
    category: "research",
    badge: "Hot",
    pricing: "Freemium",
    initials: "PX",
    accent: "from-cyan-400 to-blue-500",
  },
  {
    id: "cursor",
    name: "Cursor",
    tagline: "The AI-first code editor",
    description:
      "VS Code fork with deeply integrated AI: edit, refactor and chat with your entire codebase as context.",
    url: "https://cursor.com",
    category: "coding",
    badge: "Featured",
    pricing: "Freemium",
    initials: "CR",
    accent: "from-violet-400 to-fuchsia-500",
  },
  {
    id: "copilot",
    name: "GitHub Copilot",
    tagline: "Your AI pair programmer",
    description:
      "Inline suggestions, chat and agents directly in your editor and on GitHub for faster shipping.",
    url: "https://github.com/features/copilot",
    category: "coding",
    pricing: "Paid",
    initials: "GH",
    accent: "from-slate-400 to-zinc-600",
  },
  {
    id: "v0",
    name: "v0",
    tagline: "Generate UI from a prompt",
    description:
      "Describe an interface and get production-ready React + Tailwind components, generated in seconds.",
    url: "https://v0.dev",
    category: "coding",
    badge: "New",
    pricing: "Freemium",
    initials: "V0",
    accent: "from-zinc-300 to-zinc-500",
  },
  {
    id: "midjourney",
    name: "Midjourney",
    tagline: "Stunning AI image generation",
    description:
      "High-fidelity, stylistically rich image generation famous for its painterly, cinematic aesthetic.",
    url: "https://midjourney.com",
    category: "image",
    badge: "Featured",
    pricing: "Paid",
    initials: "MJ",
    accent: "from-pink-400 to-purple-500",
  },
  {
    id: "dalle",
    name: "DALL·E 3",
    tagline: "Image generation by OpenAI",
    description:
      "Photorealistic and illustrative image generation built right into ChatGPT with natural language editing.",
    url: "https://openai.com/dall-e-3",
    category: "image",
    pricing: "Freemium",
    initials: "DE",
    accent: "from-amber-400 to-pink-500",
  },
  {
    id: "stable-diffusion",
    name: "Stable Diffusion",
    tagline: "Open-source image diffusion",
    description:
      "The leading open-weights image generation family — run locally, fine-tune, and customize freely.",
    url: "https://stability.ai",
    category: "image",
    pricing: "Free",
    initials: "SD",
    accent: "from-lime-400 to-emerald-500",
  },
  {
    id: "runway",
    name: "Runway",
    tagline: "AI for filmmakers",
    description:
      "Text-to-video, video-to-video and a suite of magic tools for editing, masking and motion control.",
    url: "https://runwayml.com",
    category: "video",
    badge: "Hot",
    pricing: "Freemium",
    initials: "RW",
    accent: "from-fuchsia-400 to-rose-500",
  },
  {
    id: "sora",
    name: "Sora",
    tagline: "OpenAI's text-to-video model",
    description:
      "Generate cinematic, minute-long video clips from a prompt with strong physical world understanding.",
    url: "https://openai.com/sora",
    category: "video",
    badge: "New",
    pricing: "Paid",
    initials: "SO",
    accent: "from-indigo-400 to-purple-500",
  },
  {
    id: "pika",
    name: "Pika",
    tagline: "Idea-to-video in seconds",
    description:
      "Friendly text and image to video tool with stylized presets, lip sync and creative camera moves.",
    url: "https://pika.art",
    category: "video",
    pricing: "Freemium",
    initials: "PI",
    accent: "from-rose-400 to-orange-500",
  },
  {
    id: "elevenlabs",
    name: "ElevenLabs",
    tagline: "Lifelike text-to-speech",
    description:
      "Cloned voices, expressive multilingual speech and dubbing with industry-leading naturalness.",
    url: "https://elevenlabs.io",
    category: "audio",
    badge: "Featured",
    pricing: "Freemium",
    initials: "11",
    accent: "from-yellow-400 to-amber-500",
  },
  {
    id: "suno",
    name: "Suno",
    tagline: "Generate full songs from a prompt",
    description:
      "Compose original music with vocals, instruments and lyrics in any genre from a short text prompt.",
    url: "https://suno.com",
    category: "audio",
    badge: "Hot",
    pricing: "Freemium",
    initials: "SU",
    accent: "from-teal-400 to-cyan-500",
  },
  {
    id: "whisper",
    name: "Whisper",
    tagline: "Robust speech recognition",
    description:
      "Open-source multilingual transcription that handles noisy audio, accents and code-switching well.",
    url: "https://openai.com/research/whisper",
    category: "audio",
    pricing: "Free",
    initials: "WH",
    accent: "from-slate-400 to-blue-500",
  },
  {
    id: "notion-ai",
    name: "Notion AI",
    tagline: "AI inside your workspace",
    description:
      "Summarize, draft and search across your Notion workspace — turn pages into actionable knowledge.",
    url: "https://notion.so/product/ai",
    category: "productivity",
    pricing: "Paid",
    initials: "NO",
    accent: "from-zinc-200 to-zinc-500",
  },
  {
    id: "jasper",
    name: "Jasper",
    tagline: "Marketing copy at scale",
    description:
      "Brand-aware long-form content, campaigns and on-brand templates for marketing teams.",
    url: "https://jasper.ai",
    category: "writing",
    pricing: "Paid",
    initials: "JA",
    accent: "from-purple-400 to-indigo-500",
  },
  {
    id: "grammarly",
    name: "Grammarly",
    tagline: "Writing assistant everywhere",
    description:
      "Real-time grammar, tone and clarity suggestions across the apps and sites you already use.",
    url: "https://grammarly.com",
    category: "writing",
    pricing: "Freemium",
    initials: "GR",
    accent: "from-emerald-400 to-green-500",
  },
  {
    id: "copy-ai",
    name: "Copy.ai",
    tagline: "AI-powered GTM workflows",
    description:
      "Automate prospect research, outbound and content workflows with multi-step AI playbooks.",
    url: "https://copy.ai",
    category: "writing",
    pricing: "Freemium",
    initials: "CY",
    accent: "from-cyan-400 to-teal-500",
  },
  {
    id: "elicit",
    name: "Elicit",
    tagline: "AI research assistant",
    description:
      "Find and summarize academic papers, extract data into tables and reason across the literature.",
    url: "https://elicit.com",
    category: "research",
    pricing: "Freemium",
    initials: "EL",
    accent: "from-blue-400 to-indigo-500",
  },
  {
    id: "zapier",
    name: "Zapier AI",
    tagline: "Automation with AI steps",
    description:
      "Wire AI into thousands of apps with no-code automations, AI agents and natural language workflows.",
    url: "https://zapier.com/ai",
    category: "productivity",
    pricing: "Freemium",
    initials: "ZA",
    accent: "from-orange-400 to-amber-500",
  },
];
