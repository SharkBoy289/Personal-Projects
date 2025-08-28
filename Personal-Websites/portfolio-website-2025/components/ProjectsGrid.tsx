import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import Link from "next/link";

export default function ProjectsGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((p) => (
        <Link key={p.slug} href={`/projects/${p.slug}`}>
          <ProjectCard p={p} />
        </Link>
      ))}
    </div>
  );
}
