type Project = {
  slug: string; title: string; year: string;
  tags: string[]; blurb: string; image?: string;
  live?: string; repo?: string;
};
export type { Project };

export default function ProjectCard({ p }: { p: Project }) {
  return (
    <article
      className="group rounded-2xl border p-4 transition hover:-translate-y-1 hover:shadow-lg dark:border-neutral-700"
    >
      <div className="flex items-baseline justify-between">
        <h3 className="font-medium transition-colors group-hover:text-blue-600">
          {p.title}
        </h3>
        <span className="text-xs text-neutral-500 group-hover:text-neutral-700 dark:group-hover:text-neutral-300">
          {p.year}
        </span>
      </div>
      <p className="mt-2 text-sm text-neutral-700 dark:text-neutral-300">
        {p.blurb}
      </p>
      <div className="mt-3 flex flex-wrap gap-2 text-xs text-neutral-600 dark:text-neutral-400">
        {p.tags.map((t) => (
          <span
            key={t}
            className="rounded-full border px-2 py-0.5 transition-colors group-hover:border-blue-600 group-hover:text-blue-600 dark:border-neutral-600"
          >
            {t}
          </span>
        ))}
      </div>
    </article>
  );
}
