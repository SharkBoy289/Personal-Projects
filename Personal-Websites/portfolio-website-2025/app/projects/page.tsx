import Image from "next/image";
import Link from "next/link";
import { work } from "@/data/work";

export default function ProjectsPage() {
  return (
    <section className="mx-auto max-w-5xl space-y-8 p-4 sm:p-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">My Work</h1>
        <p className="text-lg text-black dark:text-neutral-300">
          A selection of past projects and internships.
        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {work.map((p) => (
          <Link
            key={p.slug}
            href={`/projects/${p.slug}`}
            className="group relative block overflow-hidden rounded-lg shadow transition hover:shadow-lg"
          >
            <Image
              src={p.image}
              alt={p.title}
              width={500}
              height={300}
              className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 flex flex-col justify-end bg-black/40 p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <h3 className="text-lg font-semibold text-white">{p.title}</h3>
              <p className="text-sm text-gray-200">{p.scope}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

