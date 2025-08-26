import type { Project } from "@/components/ProjectCard";

export const projects: Project[] = [
  {
    slug: "dining-hall",
    title: "Dining Hall — Nutrition & History",
    year: "2024",
    tags: ["Next.js", "Firebase", "Puppeteer"],
    blurb: "Full-stack app that aggregates menus and tracks meals.",
  },
  {
    slug: "sudoku",
    title: "Sudoku Solver",
    year: "2023",
    tags: ["TypeScript", "Algorithms"],
    blurb: "MRV/LCV + constraint propagation with visualizer.",
  },
];
