import Link from "next/link";
import { work } from "@/data/work";

export default function TimelinePage() {
  const items = [...work].sort((a, b) => Number(b.year) - Number(a.year));

  return (
    <section className="mx-auto max-w-5xl space-y-8 p-4 sm:p-8">
      <h1 className="text-4xl font-bold">Timeline</h1>
      <ol className="border-l-2 pl-6 lg:flex lg:border-l-0 lg:border-t-2 lg:pl-0 lg:pt-6">
        {items.map((item) => (
          <li
            key={item.slug}
            className="relative mb-8 last:mb-0 lg:mb-0 lg:flex-1"
          >
            <span className="absolute -left-3 top-1 h-3 w-3 rounded-full bg-blue-600 lg:left-1/2 lg:top-0 lg:-translate-x-1/2 lg:-translate-y-1/2"></span>
            <time className="text-sm text-amber-700 lg:block lg:text-center">
              {item.year}
            </time>
            <div className="lg:mt-2 lg:text-center">
              <Link
                href={`/projects/${item.slug}`}
                className="font-medium hover:underline"
              >
                {item.title}
              </Link>
              <p className="text-sm text-amber-800 dark:text-neutral-400">
                {item.scope}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

