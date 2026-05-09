export type ToolPricing =
  | { model: "Free"; startingAtUsdPerMonth?: number; note?: string }
  | { model: "Freemium"; startingAtUsdPerMonth?: number; note?: string }
  | { model: "Paid"; startingAtUsdPerMonth?: number; note?: string };

export type ToolScreenshot = {
  src: string;
  alt: string;
};

export type ToolSEO = {
  title: string;
  description: string;
  keywords: string[];
};

export type Tool = {
  /** Stable identifier for internal references */
  id: string;
  /** URL slug for `/tools/[slug]` */
  slug: string;
  name: string;
  tagline: string;
  description: string;
  /** Canonical external website */
  url: string;
  /** App category id, matching `src/data/categories.ts` */
  category: string;
  categories?: string[];
  tags: string[];
  badge?: "Featured" | "New" | "Hot";
  pricing: ToolPricing;
  /** Visual identity (no binary assets required) */
  logoText: string;
  initials: string;
  accent: string; // tailwind gradient classes
  features: string[];
  screenshots: ToolScreenshot[];
  seo: ToolSEO;
  createdAt: string; // ISO date
  updatedAt?: string; // ISO date
};

export const tools: Tool[] = [
  {
    id: "chatgpt",
    slug: "chatgpt",
    name: "ChatGPT",
    tagline: "OpenAI's flagship conversational AI",
    description:
      "A versatile chatbot for writing, brainstorming, coding and analysis with broad reasoning and tool use.",
    url: "https://chat.openai.com",
    category: "chat",
    categories: ["chat"],
    tags: ["gpt", "chatbot", "writing", "coding", "reasoning"],
    badge: "Featured",
    pricing: { model: "Freemium", startingAtUsdPerMonth: 0 },
    logoText: "OpenAI",
    initials: "GP",
    accent: "from-emerald-400 to-teal-500",
    features: [
      "Fast chat for brainstorming, writing, and Q&A",
      "Strong coding assistance and debugging",
      "Supports tool use and structured outputs",
      "Good general reasoning across domains",
    ],
    screenshots: [
      { src: "/screenshots/placeholder-1.svg", alt: "ChatGPT chat interface mock" },
      { src: "/screenshots/placeholder-2.svg", alt: "ChatGPT coding workflow mock" },
    ],
    seo: {
      title: "ChatGPT — AI chatbot for writing and coding",
      description:
        "Explore ChatGPT: features, pricing, screenshots, and use cases. A versatile AI assistant for writing, coding, and analysis.",
      keywords: ["ChatGPT", "OpenAI", "AI chatbot", "GPT", "AI writing", "AI coding"],
    },
    createdAt: "2026-01-10",
  },
  {
    id: "claude",
    slug: "claude",
    name: "Claude",
    tagline: "Anthropic's helpful, harmless assistant",
    description:
      "Long-context conversations, careful reasoning, and strong coding ability — great for nuanced tasks.",
    url: "https://claude.ai",
    category: "chat",
    categories: ["chat"],
    tags: ["claude", "chatbot", "reasoning", "coding", "long-context"],
    badge: "Hot",
    pricing: { model: "Freemium", startingAtUsdPerMonth: 0 },
    logoText: "Anthropic",
    initials: "CL",
    accent: "from-orange-400 to-rose-500",
    features: [
      "Long-context conversations",
      "Careful reasoning for complex tasks",
      "Excellent coding assistance",
      "Great for drafting, analysis, and summarization",
    ],
    screenshots: [
      { src: "/screenshots/placeholder-1.svg", alt: "Claude chat interface mock" },
      { src: "/screenshots/placeholder-2.svg", alt: "Claude long document workflow mock" },
    ],
    seo: {
      title: "Claude — AI assistant with long context",
      description:
        "Discover Claude: features, pricing, and screenshots. A long-context AI assistant great for reasoning, analysis, and coding.",
      keywords: ["Claude", "Anthropic", "AI assistant", "long context", "AI coding"],
    },
    createdAt: "2026-02-02",
  },
  {
    id: "gemini",
    slug: "gemini",
    name: "Gemini",
    tagline: "Google's multimodal AI",
    description:
      "Native multimodal understanding across text, images, audio and code, deeply integrated with Google.",
    url: "https://gemini.google.com",
    category: "chat",
    categories: ["chat"],
    tags: ["gemini", "google", "multimodal", "chatbot"],
    pricing: { model: "Freemium", startingAtUsdPerMonth: 0 },
    logoText: "Google",
    initials: "GE",
    accent: "from-sky-400 to-indigo-500",
    features: [
      "Multimodal understanding across text and images",
      "Great for research, planning, and ideation",
      "Integrations with Google products",
      "Fast conversational answers",
    ],
    screenshots: [
      { src: "/screenshots/placeholder-1.svg", alt: "Gemini interface mock" },
      { src: "/screenshots/placeholder-2.svg", alt: "Gemini multimodal mock" },
    ],
    seo: {
      title: "Gemini — Google's multimodal AI",
      description:
        "Learn about Gemini: a multimodal AI for chat, images, and more. See features, pricing, and screenshots.",
      keywords: ["Gemini", "Google", "multimodal AI", "AI chat"],
    },
    createdAt: "2026-02-15",
  },
  {
    id: "perplexity",
    slug: "perplexity",
    name: "Perplexity",
    tagline: "Answer engine for the web",
    description:
      "Conversational search that cites real sources — fast, focused answers with up-to-date references.",
    url: "https://perplexity.ai",
    category: "research",
    categories: ["research"],
    tags: ["search", "citations", "research", "answer engine"],
    badge: "Hot",
    pricing: { model: "Freemium", startingAtUsdPerMonth: 0 },
    logoText: "Perplexity",
    initials: "PX",
    accent: "from-cyan-400 to-blue-500",
    features: [
      "Web answers with citations",
      "Fast, focused research workflows",
      "Great for discovery and summarization",
      "Useful for comparing sources quickly",
    ],
    screenshots: [
      { src: "/screenshots/placeholder-1.svg", alt: "Perplexity search mock" },
      { src: "/screenshots/placeholder-2.svg", alt: "Perplexity citations mock" },
    ],
    seo: {
      title: "Perplexity — AI answer engine with citations",
      description:
        "Explore Perplexity: AI-powered search with citations, features, pricing, and screenshots.",
      keywords: ["Perplexity", "AI search", "citations", "research assistant"],
    },
    createdAt: "2026-03-01",
  },
  {
    id: "cursor",
    slug: "cursor",
    name: "Cursor",
    tagline: "The AI-first code editor",
    description:
      "VS Code fork with deeply integrated AI: edit, refactor and chat with your entire codebase as context.",
    url: "https://cursor.com",
    category: "coding",
    categories: ["coding"],
    tags: ["ai coding", "editor", "refactor", "codebase chat"],
    badge: "Featured",
    pricing: { model: "Freemium", startingAtUsdPerMonth: 0 },
    logoText: "Cursor",
    initials: "CR",
    accent: "from-violet-400 to-fuchsia-500",
    features: [
      "AI-native editing and refactoring",
      "Chat with your codebase as context",
      "Fast code generation and iteration loops",
      "Great UX for shipping features quickly",
    ],
    screenshots: [
      { src: "/screenshots/placeholder-1.svg", alt: "Cursor editor mock" },
      { src: "/screenshots/placeholder-2.svg", alt: "Cursor chat context mock" },
    ],
    seo: {
      title: "Cursor — AI-first code editor",
      description:
        "Discover Cursor: an AI-first code editor with deep refactoring and codebase chat. Features, pricing, screenshots.",
      keywords: ["Cursor", "AI code editor", "refactor", "pair programmer"],
    },
    createdAt: "2026-03-10",
  },
  {
    id: "copilot",
    slug: "github-copilot",
    name: "GitHub Copilot",
    tagline: "Your AI pair programmer",
    description:
      "Inline suggestions, chat and agents directly in your editor and on GitHub for faster shipping.",
    url: "https://github.com/features/copilot",
    category: "coding",
    categories: ["coding"],
    tags: ["copilot", "ai coding", "autocomplete", "github"],
    pricing: { model: "Paid", startingAtUsdPerMonth: 10 },
    logoText: "GitHub",
    initials: "GH",
    accent: "from-slate-400 to-zinc-600",
    features: [
      "Inline code suggestions in your editor",
      "Copilot Chat for debugging and planning",
      "Agentic workflows in supported IDEs",
      "Great for accelerating common coding tasks",
    ],
    screenshots: [
      { src: "/screenshots/placeholder-1.svg", alt: "Copilot suggestions mock" },
      { src: "/screenshots/placeholder-2.svg", alt: "Copilot chat mock" },
    ],
    seo: {
      title: "GitHub Copilot — AI pair programmer",
      description:
        "GitHub Copilot helps you write code faster with inline suggestions and chat. Features, pricing, and screenshots.",
      keywords: ["GitHub Copilot", "AI coding", "pair programmer", "autocomplete"],
    },
    createdAt: "2026-03-22",
  },
  {
    id: "v0",
    slug: "v0",
    name: "v0",
    tagline: "Generate UI from a prompt",
    description:
      "Describe an interface and get production-ready React + Tailwind components, generated in seconds.",
    url: "https://v0.dev",
    category: "coding",
    badge: "New",
    categories: ["coding"],
    tags: ["ui generator", "tailwind", "react", "prompt-to-ui"],
    pricing: { model: "Freemium", startingAtUsdPerMonth: 0 },
    logoText: "Vercel",
    initials: "V0",
    accent: "from-zinc-300 to-zinc-500",
    features: [
      "Prompt-to-UI generation",
      "React + Tailwind output",
      "Fast iteration for product UIs",
      "Good for prototypes and scaffolding",
    ],
    screenshots: [
      { src: "/screenshots/placeholder-1.svg", alt: "v0 prompt to UI mock" },
      { src: "/screenshots/placeholder-2.svg", alt: "v0 components mock" },
    ],
    seo: {
      title: "v0 — Generate UI with AI",
      description:
        "v0 generates React + Tailwind UI from a prompt. See features, pricing, and screenshots.",
      keywords: ["v0", "Vercel", "AI UI", "Tailwind", "React components"],
    },
    createdAt: "2026-04-01",
  },
  {
    id: "midjourney",
    slug: "midjourney",
    name: "Midjourney",
    tagline: "Stunning AI image generation",
    description:
      "High-fidelity, stylistically rich image generation famous for its painterly, cinematic aesthetic.",
    url: "https://midjourney.com",
    category: "image",
    categories: ["image"],
    tags: ["image generation", "art", "creative", "design"],
    badge: "Featured",
    pricing: { model: "Paid", startingAtUsdPerMonth: 10 },
    logoText: "Midjourney",
    initials: "MJ",
    accent: "from-pink-400 to-purple-500",
    features: [
      "High-fidelity artistic generation",
      "Strong style control and aesthetics",
      "Great for concept art and moodboards",
      "Large creative community workflows",
    ],
    screenshots: [
      { src: "/screenshots/placeholder-1.svg", alt: "Midjourney gallery mock" },
      { src: "/screenshots/placeholder-2.svg", alt: "Midjourney prompt mock" },
    ],
    seo: {
      title: "Midjourney — AI image generation",
      description:
        "Midjourney generates stunning images with stylized aesthetics. Explore features, pricing, and screenshots.",
      keywords: ["Midjourney", "AI image generator", "text to image", "concept art"],
    },
    createdAt: "2026-04-10",
  },
  {
    id: "dalle",
    slug: "dall-e-3",
    name: "DALL·E 3",
    tagline: "Image generation by OpenAI",
    description:
      "Photorealistic and illustrative image generation built right into ChatGPT with natural language editing.",
    url: "https://openai.com/dall-e-3",
    category: "image",
    categories: ["image"],
    tags: ["dall-e", "openai", "image generation", "design"],
    pricing: { model: "Freemium", startingAtUsdPerMonth: 0 },
    logoText: "OpenAI",
    initials: "DE",
    accent: "from-amber-400 to-pink-500",
    features: [
      "Text-to-image generation",
      "Natural language prompt refinement",
      "Strong illustration and photorealism",
      "Integrated into popular workflows",
    ],
    screenshots: [
      { src: "/screenshots/placeholder-1.svg", alt: "DALL·E prompt mock" },
      { src: "/screenshots/placeholder-2.svg", alt: "DALL·E results mock" },
    ],
    seo: {
      title: "DALL·E 3 — OpenAI image generation",
      description:
        "DALL·E 3 generates images from text with strong quality. Features, pricing, and screenshots.",
      keywords: ["DALL·E 3", "OpenAI", "AI image", "text to image"],
    },
    createdAt: "2026-04-12",
  },
  {
    id: "stable-diffusion",
    slug: "stable-diffusion",
    name: "Stable Diffusion",
    tagline: "Open-source image diffusion",
    description:
      "The leading open-weights image generation family — run locally, fine-tune, and customize freely.",
    url: "https://stability.ai",
    category: "image",
    categories: ["image"],
    tags: ["open source", "diffusion", "local", "fine-tuning"],
    pricing: { model: "Free" },
    logoText: "Stability",
    initials: "SD",
    accent: "from-lime-400 to-emerald-500",
    features: [
      "Open-weights ecosystem",
      "Run locally or in the cloud",
      "Fine-tuning and LoRA workflows",
      "Massive community model library",
    ],
    screenshots: [
      { src: "/screenshots/placeholder-1.svg", alt: "Stable Diffusion UI mock" },
      { src: "/screenshots/placeholder-2.svg", alt: "Stable Diffusion models mock" },
    ],
    seo: {
      title: "Stable Diffusion — Open-source image diffusion",
      description:
        "Stable Diffusion is an open-weights image generation family. Explore features, pricing, and screenshots.",
      keywords: ["Stable Diffusion", "diffusion", "open source", "AI image"],
    },
    createdAt: "2026-04-20",
  },
  {
    id: "runway",
    slug: "runway",
    name: "Runway",
    tagline: "AI for filmmakers",
    description:
      "Text-to-video, video-to-video and a suite of magic tools for editing, masking and motion control.",
    url: "https://runwayml.com",
    category: "video",
    categories: ["video"],
    tags: ["video", "generative", "editing", "filmmaking"],
    badge: "Hot",
    pricing: { model: "Freemium", startingAtUsdPerMonth: 0 },
    logoText: "Runway",
    initials: "RW",
    accent: "from-fuchsia-400 to-rose-500",
    features: [
      "Text-to-video generation",
      "Video editing and masking tools",
      "Video-to-video transformations",
      "Great for creators and teams",
    ],
    screenshots: [
      { src: "/screenshots/placeholder-1.svg", alt: "Runway video timeline mock" },
      { src: "/screenshots/placeholder-2.svg", alt: "Runway generation mock" },
    ],
    seo: {
      title: "Runway — AI video generation and editing",
      description:
        "Runway brings generative video and editing tools to creators. Features, pricing, and screenshots.",
      keywords: ["Runway", "AI video", "text to video", "video editing"],
    },
    createdAt: "2026-04-25",
  },
  {
    id: "sora",
    slug: "sora",
    name: "Sora",
    tagline: "OpenAI's text-to-video model",
    description:
      "Generate cinematic, minute-long video clips from a prompt with strong physical world understanding.",
    url: "https://openai.com/sora",
    category: "video",
    badge: "New",
    categories: ["video"],
    tags: ["openai", "text-to-video", "cinematic", "video"],
    pricing: { model: "Paid", note: "Pricing varies by access and plan." },
    logoText: "OpenAI",
    initials: "SO",
    accent: "from-indigo-400 to-purple-500",
    features: [
      "High-quality text-to-video generation",
      "Strong scene coherence and realism",
      "Great for concepting and pre-visualization",
      "Cinematic output styles",
    ],
    screenshots: [
      { src: "/screenshots/placeholder-1.svg", alt: "Sora prompt mock" },
      { src: "/screenshots/placeholder-2.svg", alt: "Sora results mock" },
    ],
    seo: {
      title: "Sora — OpenAI text-to-video",
      description:
        "Sora generates cinematic videos from text prompts. Explore features, pricing, and screenshots.",
      keywords: ["Sora", "OpenAI", "text to video", "AI video"],
    },
    createdAt: "2026-05-01",
  },
  {
    id: "pika",
    slug: "pika",
    name: "Pika",
    tagline: "Idea-to-video in seconds",
    description:
      "Friendly text and image to video tool with stylized presets, lip sync and creative camera moves.",
    url: "https://pika.art",
    category: "video",
    categories: ["video"],
    tags: ["video", "stylized", "lip sync", "creator"],
    pricing: { model: "Freemium", startingAtUsdPerMonth: 0 },
    logoText: "Pika",
    initials: "PI",
    accent: "from-rose-400 to-orange-500",
    features: [
      "Quick idea-to-video generation",
      "Stylized presets and templates",
      "Creative camera effects",
      "Great for social content",
    ],
    screenshots: [
      { src: "/screenshots/placeholder-1.svg", alt: "Pika presets mock" },
      { src: "/screenshots/placeholder-2.svg", alt: "Pika generation mock" },
    ],
    seo: {
      title: "Pika — Idea-to-video in seconds",
      description:
        "Pika turns ideas into short videos fast with stylized presets. Features, pricing, and screenshots.",
      keywords: ["Pika", "AI video", "text to video", "creator tools"],
    },
    createdAt: "2026-05-05",
  },
  {
    id: "elevenlabs",
    slug: "elevenlabs",
    name: "ElevenLabs",
    tagline: "Lifelike text-to-speech",
    description:
      "Cloned voices, expressive multilingual speech and dubbing with industry-leading naturalness.",
    url: "https://elevenlabs.io",
    category: "audio",
    categories: ["audio"],
    tags: ["text-to-speech", "voice", "dubbing", "audio"],
    badge: "Featured",
    pricing: { model: "Freemium", startingAtUsdPerMonth: 0 },
    logoText: "ElevenLabs",
    initials: "11",
    accent: "from-yellow-400 to-amber-500",
    features: [
      "Natural, expressive text-to-speech",
      "Voice cloning and custom voices",
      "Multilingual speech generation",
      "Dubbing and narration workflows",
    ],
    screenshots: [
      { src: "/screenshots/placeholder-1.svg", alt: "ElevenLabs voice mock" },
      { src: "/screenshots/placeholder-2.svg", alt: "ElevenLabs dubbing mock" },
    ],
    seo: {
      title: "ElevenLabs — Lifelike text-to-speech",
      description:
        "ElevenLabs provides expressive TTS and voice cloning. Explore features, pricing, and screenshots.",
      keywords: ["ElevenLabs", "text to speech", "voice cloning", "AI audio"],
    },
    createdAt: "2026-05-06",
  },
  {
    id: "suno",
    slug: "suno",
    name: "Suno",
    tagline: "Generate full songs from a prompt",
    description:
      "Compose original music with vocals, instruments and lyrics in any genre from a short text prompt.",
    url: "https://suno.com",
    category: "audio",
    badge: "Hot",
    categories: ["audio"],
    tags: ["music", "song", "generation", "audio"],
    pricing: { model: "Freemium", startingAtUsdPerMonth: 0 },
    logoText: "Suno",
    initials: "SU",
    accent: "from-teal-400 to-cyan-500",
    features: [
      "Prompt-to-song generation",
      "Vocals, lyrics, and instrumentation",
      "Style and genre control",
      "Great for demos and creative exploration",
    ],
    screenshots: [
      { src: "/screenshots/placeholder-1.svg", alt: "Suno song generation mock" },
      { src: "/screenshots/placeholder-2.svg", alt: "Suno styles mock" },
    ],
    seo: {
      title: "Suno — Generate songs with AI",
      description:
        "Suno generates full songs from a prompt. Features, pricing, screenshots, and use cases.",
      keywords: ["Suno", "AI music", "song generator", "AI audio"],
    },
    createdAt: "2026-05-07",
  },
  {
    id: "whisper",
    slug: "whisper",
    name: "Whisper",
    tagline: "Robust speech recognition",
    description:
      "Open-source multilingual transcription that handles noisy audio, accents and code-switching well.",
    url: "https://openai.com/research/whisper",
    category: "audio",
    categories: ["audio"],
    tags: ["speech recognition", "transcription", "open source", "asr"],
    pricing: { model: "Free" },
    logoText: "OpenAI",
    initials: "WH",
    accent: "from-slate-400 to-blue-500",
    features: [
      "Multilingual speech-to-text",
      "Strong robustness to noise and accents",
      "Works well for long audio",
      "Open-source model family",
    ],
    screenshots: [
      { src: "/screenshots/placeholder-1.svg", alt: "Whisper transcription mock" },
      { src: "/screenshots/placeholder-2.svg", alt: "Whisper language mock" },
    ],
    seo: {
      title: "Whisper — Open-source speech recognition",
      description:
        "Whisper is an open-source speech recognition model for transcription. Features, pricing, screenshots.",
      keywords: ["Whisper", "speech recognition", "transcription", "OpenAI"],
    },
    createdAt: "2026-05-08",
  },
  {
    id: "notion-ai",
    slug: "notion-ai",
    name: "Notion AI",
    tagline: "AI inside your workspace",
    description:
      "Summarize, draft and search across your Notion workspace — turn pages into actionable knowledge.",
    url: "https://notion.so/product/ai",
    category: "productivity",
    categories: ["productivity"],
    tags: ["notion", "summarize", "workspace", "productivity"],
    pricing: { model: "Paid", startingAtUsdPerMonth: 8 },
    logoText: "Notion",
    initials: "NO",
    accent: "from-zinc-200 to-zinc-500",
    features: [
      "Summarize notes and docs",
      "Draft and rewrite content in-place",
      "Search and Q&A across your workspace",
      "Turn knowledge into action items",
    ],
    screenshots: [
      { src: "/screenshots/placeholder-1.svg", alt: "Notion AI writing mock" },
      { src: "/screenshots/placeholder-2.svg", alt: "Notion AI summary mock" },
    ],
    seo: {
      title: "Notion AI — AI inside your workspace",
      description:
        "Notion AI helps draft, summarize, and search across your workspace. Features, pricing, screenshots.",
      keywords: ["Notion AI", "productivity", "summarize", "writing assistant"],
    },
    createdAt: "2026-03-18",
  },
  {
    id: "jasper",
    slug: "jasper",
    name: "Jasper",
    tagline: "Marketing copy at scale",
    description:
      "Brand-aware long-form content, campaigns and on-brand templates for marketing teams.",
    url: "https://jasper.ai",
    category: "writing",
    categories: ["writing"],
    tags: ["marketing", "copywriting", "content", "brand voice"],
    pricing: { model: "Paid", startingAtUsdPerMonth: 39 },
    logoText: "Jasper",
    initials: "JA",
    accent: "from-purple-400 to-indigo-500",
    features: [
      "Brand voice and style control",
      "Campaign and long-form content generation",
      "Team workflows and templates",
      "Great for marketing orgs",
    ],
    screenshots: [
      { src: "/screenshots/placeholder-1.svg", alt: "Jasper campaigns mock" },
      { src: "/screenshots/placeholder-2.svg", alt: "Jasper brand voice mock" },
    ],
    seo: {
      title: "Jasper — Marketing copy at scale",
      description:
        "Jasper helps teams generate on-brand marketing content. Features, pricing, and screenshots.",
      keywords: ["Jasper", "AI marketing", "copywriting", "brand voice"],
    },
    createdAt: "2026-03-05",
  },
  {
    id: "grammarly",
    slug: "grammarly",
    name: "Grammarly",
    tagline: "Writing assistant everywhere",
    description:
      "Real-time grammar, tone and clarity suggestions across the apps and sites you already use.",
    url: "https://grammarly.com",
    category: "writing",
    categories: ["writing"],
    tags: ["writing", "grammar", "tone", "editing"],
    pricing: { model: "Freemium", startingAtUsdPerMonth: 0 },
    logoText: "Grammarly",
    initials: "GR",
    accent: "from-emerald-400 to-green-500",
    features: [
      "Grammar and spelling checks",
      "Tone and clarity suggestions",
      "Works across many apps and browsers",
      "Great for professional communication",
    ],
    screenshots: [
      { src: "/screenshots/placeholder-1.svg", alt: "Grammarly suggestions mock" },
      { src: "/screenshots/placeholder-2.svg", alt: "Grammarly tone mock" },
    ],
    seo: {
      title: "Grammarly — Writing assistant everywhere",
      description:
        "Grammarly improves writing with grammar, tone, and clarity suggestions. Features, pricing, screenshots.",
      keywords: ["Grammarly", "writing assistant", "grammar", "tone"],
    },
    createdAt: "2026-02-20",
  },
  {
    id: "copy-ai",
    slug: "copy-ai",
    name: "Copy.ai",
    tagline: "AI-powered GTM workflows",
    description:
      "Automate prospect research, outbound and content workflows with multi-step AI playbooks.",
    url: "https://copy.ai",
    category: "writing",
    categories: ["writing", "productivity"],
    tags: ["gtm", "outbound", "automation", "workflows"],
    pricing: { model: "Freemium", startingAtUsdPerMonth: 0 },
    logoText: "Copy.ai",
    initials: "CY",
    accent: "from-cyan-400 to-teal-500",
    features: [
      "GTM workflow automation",
      "Prospect research assistance",
      "Outbound and content generation",
      "Playbooks for repeatable processes",
    ],
    screenshots: [
      { src: "/screenshots/placeholder-1.svg", alt: "Copy.ai workflow mock" },
      { src: "/screenshots/placeholder-2.svg", alt: "Copy.ai outbound mock" },
    ],
    seo: {
      title: "Copy.ai — AI-powered GTM workflows",
      description:
        "Copy.ai automates go-to-market workflows like outbound and research. Features, pricing, screenshots.",
      keywords: ["Copy.ai", "GTM", "automation", "AI copywriting"],
    },
    createdAt: "2026-02-28",
  },
  {
    id: "elicit",
    slug: "elicit",
    name: "Elicit",
    tagline: "AI research assistant",
    description:
      "Find and summarize academic papers, extract data into tables and reason across the literature.",
    url: "https://elicit.com",
    category: "research",
    categories: ["research"],
    tags: ["papers", "academic", "summarize", "literature review"],
    pricing: { model: "Freemium", startingAtUsdPerMonth: 0 },
    logoText: "Elicit",
    initials: "EL",
    accent: "from-blue-400 to-indigo-500",
    features: [
      "Find relevant academic papers",
      "Summarize and extract key findings",
      "Structured tables for evidence",
      "Great for literature reviews",
    ],
    screenshots: [
      { src: "/screenshots/placeholder-1.svg", alt: "Elicit paper search mock" },
      { src: "/screenshots/placeholder-2.svg", alt: "Elicit extraction mock" },
    ],
    seo: {
      title: "Elicit — AI research assistant for papers",
      description:
        "Elicit helps find and summarize papers, and extract evidence into tables. Features, pricing, screenshots.",
      keywords: ["Elicit", "AI research", "papers", "literature review"],
    },
    createdAt: "2026-01-28",
  },
  {
    id: "zapier",
    slug: "zapier-ai",
    name: "Zapier AI",
    tagline: "Automation with AI steps",
    description:
      "Wire AI into thousands of apps with no-code automations, AI agents and natural language workflows.",
    url: "https://zapier.com/ai",
    category: "productivity",
    categories: ["productivity", "automation"],
    tags: ["automation", "workflows", "agents", "integrations"],
    pricing: { model: "Freemium", startingAtUsdPerMonth: 0 },
    logoText: "Zapier",
    initials: "ZA",
    accent: "from-orange-400 to-amber-500",
    features: [
      "Automations across thousands of apps",
      "AI steps inside workflows",
      "Natural language triggers and actions",
      "Great for ops, sales, and support workflows",
    ],
    screenshots: [
      { src: "/screenshots/placeholder-1.svg", alt: "Zapier AI workflow mock" },
      { src: "/screenshots/placeholder-2.svg", alt: "Zapier integrations mock" },
    ],
    seo: {
      title: "Zapier AI — Automations with AI steps",
      description:
        "Zapier AI adds AI steps and agents to no-code workflows. Features, pricing, and screenshots.",
      keywords: ["Zapier AI", "automation", "workflows", "AI agents"],
    },
    createdAt: "2026-01-20",
  },
];
