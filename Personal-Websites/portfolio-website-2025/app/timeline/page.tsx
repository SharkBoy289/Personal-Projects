import Link from "next/link";
import { work } from "@/data/work";

export default function TimelinePage() {
  const items = [...work].sort((a, b) => Number(b.year) - Number(a.year));

  return (
    <section className="mx-auto max-w-5xl space-y-8 p-4 sm:p-8">
      <h1 className="text-4xl font-bold">Timeline</h1>
      <ol className="border-l-2 pl-6">
        {items.map((item) => (
          <li key={item.slug} className="relative mb-8 last:mb-0">
            <span className="absolute -left-3 top-1 h-3 w-3 rounded-full bg-blue-600"></span>
            <time className="text-sm text-neutral-500">{item.year}</time>
            <div>
              <Link
                href={`/projects/${item.slug}`}
                className="font-medium hover:underline"
              >
                {item.title}
              </Link>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                {item.scope}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

