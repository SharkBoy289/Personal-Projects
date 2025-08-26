type Project = {
  slug: string; title: string; year: string;
  tags: string[]; blurb: string; image?: string;
  live?: string; repo?: string;
};
export type { Project };

export default function ProjectCard({ p }: { p: Project }) {
  return (
    <article className="rounded-2xl border p-4">
      <div className="flex items-baseline justify-between">
        <h3 className="font-medium">{p.title}</h3>
        <span className="text-xs text-neutral-500">{p.year}</span>
      </div>
      <p className="mt-2 text-sm text-neutral-700">{p.blurb}</p>
      <div className="mt-3 flex flex-wrap gap-2 text-xs text-neutral-600">
        {p.tags.map((t) => <span key={t} className="rounded-full border px-2 py-0.5">{t}</span>)}
      </div>
    </article>
  );
}
