import Image from "next/image";

const services = [
  {
    title: "Web Development",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=60",
    desc: "Full‑stack applications and APIs.",
  },
  {
    title: "UI/UX Design",
    img: "https://images.unsplash.com/photo-1559027615-ce3d4a3b86aa?auto=format&fit=crop&w=600&q=60",
    desc: "Human‑centered product design.",
  },
  {
    title: "Consulting",
    img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=60",
    desc: "Helping teams ship faster.",
  },
];

const process = [
  { step: "Discover", text: "Research, gather requirements and define scope." },
  { step: "Build", text: "Iterate using agile methodologies and rapid prototypes." },
  { step: "Launch", text: "Deploy, monitor and continuously improve." },
];

const testimonials = [
  {
    name: "Challenge UCSC",
    quote:
      "Artem's thoughtful design helped our program reach more students than ever before.",
  },
  {
    name: "Karina Mois",
    quote: "Working with Artem was seamless – the final product was stunning and fast.",
  },
  {
    name: "Max Harper",
    quote: "Our organization's new site boosted engagement thanks to Artem's expertise.",
  },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl space-y-16 p-4 sm:p-8">
      <section className="flex flex-col items-center gap-8 md:flex-row">
        <Image
          src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=crop&w=400&q=60"
          alt="Portrait of Artem"
          width={300}
          height={300}
          className="rounded-full object-cover"
        />
        <div className="text-center md:text-left">
          <h1 className="text-4xl font-bold">Hi, I&apos;m Artem</h1>
          <p className="mt-4 text-lg text-amber-800 dark:text-neutral-300">
            I&apos;m a developer who loves crafting polished user experiences and
            solving real‑world problems with code.
          </p>
        </div>
      </section>

      <section>
        <h2 className="mb-6 text-2xl font-semibold">Services</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((s) => (
            <div key={s.title} className="text-center">
              <Image
                src={s.img}
                alt=""
                width={400}
                height={250}
                className="mx-auto h-40 w-full rounded object-cover"
              />
              <h3 className="mt-4 font-medium">{s.title}</h3>
              <p className="mt-2 text-sm text-amber-800 dark:text-neutral-400">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-6 text-2xl font-semibold">My Design Process</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {process.map((p) => (
            <div key={p.step} className="rounded-lg border p-4">
              <h3 className="font-medium">{p.step}</h3>
              <p className="mt-2 text-sm text-amber-800 dark:text-neutral-400">
                {p.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-6 text-2xl font-semibold">Testimonials</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <blockquote key={t.name} className="rounded-lg bg-neutral-200 p-4 text-sm italic dark:bg-neutral-800">
              “{t.quote}”
              <footer className="mt-3 text-right not-italic font-medium">– {t.name}</footer>
            </blockquote>
          ))}
        </div>
      </section>
    </div>
  );
}

