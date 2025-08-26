import ProjectsGrid from "@/components/ProjectsGrid";

export const metadata = { title: "Projects" };

export default function ProjectsPage() {
  return (
    <div className="py-12 space-y-6">
      <h1 className="text-2xl font-semibold">Projects</h1>
      <ProjectsGrid />
    </div>
  );
}
