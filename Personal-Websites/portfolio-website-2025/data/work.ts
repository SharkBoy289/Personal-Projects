export type WorkItem = {
  slug: string;
  title: string;
  scope: string;
  image: string;
  description: string;
  year: string;
  type: "project" | "internship";
  details: string[]; // goals or roles
};

export const work: WorkItem[] = [
  {
    slug: "responsive-app",
    title: "Responsive Web App",
    scope: "Full‑stack project",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=60",
    description:
      "A performant web application demonstrating responsive layouts and fast loading techniques.",
    year: "2024",
    type: "project",
    details: ["Goal: Optimize Core Web Vitals", "Goal: Mobile‑first UX", "Goal: Deployed with CI/CD"],
  },
  {
    slug: "design-system",
    title: "Design System Internship",
    scope: "UI component library",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=60",
    description:
      "Collaborated on a scalable design system used across multiple products.",
    year: "2023",
    type: "internship",
    details: ["Role: Built accessible components", "Role: Wrote Storybook docs", "Role: Led design reviews"],
  },
  {
    slug: "data-visualizer",
    title: "Data Visualizer",
    scope: "Interactive charts",
    image:
      "https://images.unsplash.com/photo-1531497865144-0464ef8fb40e?auto=format&fit=crop&w=800&q=60",
    description:
      "Visualization tool turning raw metrics into animated dashboards.",
    year: "2022",
    type: "project",
    details: ["Goal: Real‑time updates", "Goal: Export to CSV", "Goal: Custom theming"],
  },
  {
    slug: "ux-research",
    title: "UX Research Assistant",
    scope: "Research internship",
    image:
      "https://images.unsplash.com/photo-1537432376769-00a7d6b1e619?auto=format&fit=crop&w=800&q=60",
    description:
      "Supported user studies and prototyping for a mobile application.",
    year: "2021",
    type: "internship",
    details: ["Role: Conducted surveys", "Role: Built hi‑fi prototypes", "Role: Presented findings"],
  },
  {
    slug: "game-engine",
    title: "Mini Game Engine",
    scope: "Graphics project",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=60",
    description:
      "Lightweight engine showcasing physics and sprite animation.",
    year: "2020",
    type: "project",
    details: ["Goal: Entity system", "Goal: Physics integration", "Goal: Level editor"],
  },
  {
    slug: "automation-coop",
    title: "Automation Co‑op",
    scope: "Tooling internship",
    image:
      "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=60",
    description:
      "Built internal tools to streamline deployment pipelines.",
    year: "2019",
    type: "internship",
    details: ["Role: Created CLI utilities", "Role: Improved build times", "Role: Monitored metrics"],
  },
];

