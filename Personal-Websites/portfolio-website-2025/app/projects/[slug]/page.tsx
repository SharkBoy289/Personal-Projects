import Image from "next/image";
import { notFound } from "next/navigation";
import { work } from "@/data/work";

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  const project = work.find((p) => p.slug === params.slug);
  if (!project) return notFound();

  return (
    <section className="mx-auto max-w-5xl p-4 sm:p-8">
      <div className="grid gap-8 md:grid-cols-3">
        <div className="md:col-span-2">
          <h1 className="text-4xl font-bold">{project.title}</h1>
          <p className="mt-4 text-lg text-neutral-700 dark:text-neutral-300">
            {project.description}
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold">
            {project.type === "internship" ? "Roles" : "Goals"}
          </h2>
          <ul className="mt-3 list-disc pl-4 text-neutral-700 dark:text-neutral-300">
            {project.details.map((d) => (
              <li key={d}>{d}</li>
            ))}
          </ul>
        </div>
      </div>

      <Image
        src={project.image}
        alt=""
        width={800}
        height={400}
        className="mt-8 rounded-lg object-cover"
      />
    </section>
  );
}

