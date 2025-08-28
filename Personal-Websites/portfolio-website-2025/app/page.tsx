import Link from "next/link";

export default function Home() {
  return (
    <section className="py-20 text-center space-y-6">
      <h1 className="text-4xl font-bold">Artem Krivosheev</h1>
      <p className="text-lg text-neutral-600">
        Full-stack developer crafting bespoke digital experiences.
      </p>
      <Link
        href="/projects"
        className="inline-block rounded bg-black px-6 py-3 text-white hover:bg-neutral-800 transition"
      >
        View My Work
      </Link>
    </section>
  );
}
