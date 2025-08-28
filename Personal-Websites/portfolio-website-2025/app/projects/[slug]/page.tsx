import { projects } from "@/data/projects";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return notFound();

  return (
    <section className="space-y-6 py-12">
      <h1 className="text-3xl font-bold">{project.title}</h1>
      <p className="text-neutral-700">{project.blurb}</p>
      {project.image && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={project.image}
          alt={project.title}
          className="w-full rounded"
        />
      )}
      <div>
        {project.type === "internship" ? (
          <>
            <h2 className="font-semibold mb-2">Roles</h2>
            <ul className="ml-6 list-disc space-y-1">
              {project.details?.map((d) => <li key={d}>{d}</li>)}
            </ul>
          </>
        ) : (
          <>
            <h2 className="font-semibold mb-2">Goals</h2>
            <ul className="ml-6 list-disc space-y-1">
              {project.details?.map((d) => <li key={d}>{d}</li>)}
            </ul>
          </>
        )}
      </div>
    </section>
  );
}
