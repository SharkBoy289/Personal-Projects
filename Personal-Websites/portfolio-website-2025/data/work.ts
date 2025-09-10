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
    slug: "minecraft-clone",
    title: "Minecraft Clone",
    scope: "WebGL game",
    image:
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=800&q=60",
    description:
      "Voxel-style world built in WebGL with procedurally generated terrain.",
    year: "2025",
    type: "project",
    details: [
      "Goal: Chunked rendering engine",
      "Goal: Per-block physics",
      "Goal: Saveable worlds",
    ],
  },
  {
    slug: "chess-solver",
    title: "Chess Solutions Algorithm",
    scope: "Algorithm project",
    image:
      "https://images.unsplash.com/photo-1519985176271-adb1088fa94c?auto=format&fit=crop&w=800&q=60",
    description:
      "Searches for optimal moves using minimax and heuristic pruning.",
    year: "2024",
    type: "project",
    details: [
      "Goal: Minimax with alpha-beta pruning",
      "Goal: FEN board parser",
      "Goal: Visual move explorer",
    ],
  },
  {
    slug: "dining-hall",
    title: "Dining Hall — Nutrition & History",
    scope: "Full‑stack site",
    image:
      "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=800&q=60",
    description: "Aggregates campus menus and tracks meal ratings.",
    year: "2024",
    type: "project",
    details: [
      "Goal: Menu scraping with Puppeteer",
      "Goal: Firebase auth & storage",
      "Goal: Nutrition analytics",
    ],
  },
  {
    slug: "pet-sorting-ai",
    title: "Pet Sorting AI",
    scope: "Machine learning",
    image:
      "https://images.unsplash.com/photo-1558944351-6611233c3d38?auto=format&fit=crop&w=800&q=60",
    description: "Classifies pet images into breeds and categories.",
    year: "2024",
    type: "project",
    details: [
      "Goal: Convolutional model",
      "Goal: Real‑time inference",
      "Goal: Data augmentation pipeline",
    ],
  },
  {
    slug: "pet-data-analyzer",
    title: "Pet Sorting Data Analyzer",
    scope: "Analytics tool",
    image:
      "https://images.unsplash.com/photo-1518972559570-1ecb7db0cfd2?auto=format&fit=crop&w=800&q=60",
    description:
      "Dashboard for evaluating model accuracy and dataset quality.",
    year: "2024",
    type: "project",
    details: [
      "Goal: Confusion matrix reports",
      "Goal: Dataset cleaning",
      "Goal: Exportable metrics",
    ],
  },
  {
    slug: "solar-system",
    title: "Solar System Visualizer",
    scope: "Three.js demo",
    image:
      "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=800&q=60",
    description:
      "Interactive 3D model of planets and orbits built with Three.js.",
    year: "2023",
    type: "project",
    details: [
      "Goal: Scale-accurate orbits",
      "Goal: Planet textures",
      "Goal: Adjustable time speeds",
    ],
  },
  {
    slug: "data-types-visualizer",
    title: "Data Types Visualizer",
    scope: "Learning app",
    image:
      "https://images.unsplash.com/photo-1559028012-481c2100243f?auto=format&fit=crop&w=800&q=60",
    description:
      "Teaches programming data types through interactive visuals and exercises.",
    year: "2023",
    type: "project",
    details: [
      "Goal: Animated memory diagrams",
      "Goal: Quiz mode",
      "Goal: Beginner-friendly lessons",
    ],
  },
  {
    slug: "pathways",
    title: "Pathways Career Planner",
    scope: "Agent-powered web app",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=60",
    description:
      "Guides students through college and career steps with web scraping and AI agents.",
    year: "2025",
    type: "project",
    details: [
      "Goal: Personalized pathway profiles",
      "Goal: Calendar of deadlines",
      "Goal: Soft web scraping for up-to-date info",
    ],
  },
  {
    slug: "swift-habit-tracker",
    title: "Swift Habit Tracker",
    scope: "iOS app",
    image:
      "https://images.unsplash.com/photo-1517242022622-8843f196b4a6?auto=format&fit=crop&w=800&q=60",
    description:
      "Tracks daily habits with sleep, location, and calendar data plus summary widgets.",
    year: "2025",
    type: "project",
    details: [
      "Goal: Integrate HealthKit and Calendar",
      "Goal: Daily email summaries",
      "Goal: Home screen widget",
    ],
  },
  {
    slug: "russian-word-widget",
    title: "Russian Word of the Day",
    scope: "iOS widget",
    image:
      "https://images.unsplash.com/photo-1554384645-13eab165c24b?auto=format&fit=crop&w=800&q=60",
    description:
      "Delivers a daily Russian word with selectable difficulty levels.",
    year: "2025",
    type: "project",
    details: [
      "Goal: Levels A1–C2",
      "Goal: Offline pronunciation audio",
      "Goal: Widget support",
    ],
  },
  {
    slug: "seagull-avionics",
    title: "Seagull Avionics",
    scope: "Hardware project",
    image:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=800&q=60",
    description:
      "Developed avionics stack for a custom Seagull UAV platform.",
    year: "2023",
    type: "project",
    details: [
      "Goal: Sensor fusion for flight control",
      "Goal: Telemetry link",
      "Goal: Modular PCB design",
    ],
  },
  {
    slug: "vcpms-maine",
    title: "VCPMS Maine Website",
    scope: "Angular site",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=60",
    description:
      "State-wide web portal built with Angular for VCPMS Maine.",
    year: "2024",
    type: "project",
    details: [
      "Goal: Responsive UI",
      "Goal: API-driven content",
      "Goal: Role-based auth",
    ],
  },
];

