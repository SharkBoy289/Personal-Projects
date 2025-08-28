type Project = {
  slug: string;
  title: string;
  year: string;
  tags: string[];
  blurb: string;
  image?: string;
  scope?: string;
  type?: "project" | "internship";
  details?: string[];
};
export type { Project };

export default function ProjectCard({ p }: { p: Project }) {
  return (
    <article className="relative overflow-hidden rounded-lg shadow group">
      {p.image && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={p.image}
          alt={p.title}
          className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      )}
      <div className="absolute inset-0 flex flex-col justify-end bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100 p-4">
        <h3 className="text-lg font-semibold text-white">{p.title}</h3>
        {p.scope && (
          <p className="text-sm text-gray-200">{p.scope}</p>
        )}
      </div>
    </article>
  );
}
