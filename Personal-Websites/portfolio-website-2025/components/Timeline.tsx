import Link from "next/link";
import { timeline } from "@/data/timeline";

export default function Timeline() {
  return (
    <ul className="space-y-4">
      {timeline.map((t) => (
        <li key={t.slug} className="flex items-start gap-4">
          <span className="w-16 font-medium text-sm">{t.year}</span>
          <Link href={`/projects/${t.slug}`} className="underline">
            {t.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
