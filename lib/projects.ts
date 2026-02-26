export type Project = {
  title: string;
  slug: "research" | "llm-competition" | "internship" | "dance-event" | "local-event";
  description: string;
  techStack: string[];
  imagePath: string;
};

export const projects: Project[] = [
  {
    title: "\u7814\u7A76",
    slug: "research",
    description:
      "This project explored LiDAR data processing and web visualization with an emphasis on practical operation and maintainable architecture.",
    techStack: ["Python", "Open3D", "TypeScript", "three.js", "AWS"],
    imagePath: "/images/placeholder.svg",
  },
  {
    title: "LLM\u30B3\u30F3\u30DA\u30C6\u30A3\u30B7\u30E7\u30F3",
    slug: "llm-competition",
    description:
      "Participated in an LLM competition and improved scores through iterative preprocessing, prompt design, and evaluation tuning.",
    techStack: ["Python", "LLM", "Pandas", "scikit-learn"],
    imagePath: "/images/placeholder.svg",
  },
  {
    title: "\u9577\u671F\u30A4\u30F3\u30BF\u30FC\u30F3",
    slug: "internship",
    description:
      "Handled feature development and operational improvements in a long-term internship, with repeated feedback-driven iterations.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL"],
    imagePath: "/images/placeholder.svg",
  },
  {
    title: "\u30C0\u30F3\u30B9\u30A4\u30D9\u30F3\u30C8\u958B\u50AC",
    slug: "dance-event",
    description:
      "Planned and executed a dance event, covering performer coordination, venue operations, and audience communication.",
    techStack: ["Planning", "Design", "Marketing", "Operation"],
    imagePath: "/images/placeholder.svg",
  },
  {
    title: "\u30ED\u30FC\u30AB\u30EB\u30A4\u30D9\u30F3\u30C8\u958B\u50AC",
    slug: "local-event",
    description:
      "Organized local community events and established a repeatable process for continuous operation.",
    techStack: ["Community", "Facilitation", "Sponsorship", "PR"],
    imagePath: "/images/placeholder.svg",
  },
];

export const projectBySlug = new Map(projects.map((project) => [project.slug, project]));
