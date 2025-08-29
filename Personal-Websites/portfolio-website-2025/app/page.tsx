import Link from "next/link";

export default function Home() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center gap-6 text-center">
      <h1 className="text-5xl font-bold">Artem</h1>
      <p className="max-w-xl text-lg">
        Full‑stack developer crafting fast, responsive experiences across the
        web.
      </p>
      <Link
        href="/projects"
        className="rounded-full bg-blue-600 px-6 py-3 text-sm font-medium text-white transition hover:bg-blue-700"
      >
        See my work
      </Link>
    </section>
  );
}

