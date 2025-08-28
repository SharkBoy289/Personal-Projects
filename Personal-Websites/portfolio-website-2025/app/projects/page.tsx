import ProjectsGrid from "@/components/ProjectsGrid";

export const metadata = { title: "My Work — Artem" };

export default function ProjectsPage() {
  return (
    <section className="space-y-8 py-12">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">My Work</h1>
        <p className="text-neutral-600">
          A selection of projects and internships showcasing full-stack
          capabilities.
        </p>
      </div>
      <ProjectsGrid />
    </section>
  );
}
