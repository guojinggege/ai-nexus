export type Category = {
  id: string;
  name: string;
  icon: string;
  description: string;
};

export const categories: Category[] = [
  { id: "all", name: "All", icon: "✨", description: "Every tool in the nexus" },
  { id: "chat", name: "Chatbots", icon: "💬", description: "Conversational AI assistants" },
  { id: "writing", name: "Writing", icon: "✍️", description: "Content & copywriting" },
  { id: "coding", name: "Coding", icon: "⌨️", description: "Developer copilots" },
  { id: "image", name: "Image", icon: "🎨", description: "Generate & edit images" },
  { id: "video", name: "Video", icon: "🎬", description: "Create & enhance video" },
  { id: "audio", name: "Audio", icon: "🎙️", description: "Voice, music & speech" },
  { id: "productivity", name: "Productivity", icon: "⚡", description: "Workflow & automation" },
  { id: "research", name: "Research", icon: "🔬", description: "Search & knowledge" },
];
