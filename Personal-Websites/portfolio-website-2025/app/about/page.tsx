export const metadata = { title: "About — Artem" };

export default function AboutPage() {
  return (
    <section className="space-y-16 py-12">
      <div className="flex flex-col gap-8 md:flex-row md:items-start items-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://source.unsplash.com/random/300x300?portrait"
          alt="Artem"
          className="h-48 w-48 rounded-full object-cover"
        />
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">Hi I&apos;m Artem</h1>
          <p className="text-neutral-700">
            I&apos;m a graduate passionate about full-stack development and
            crafting user-centric experiences.
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Services</h2>
        <div className="grid gap-6 sm:grid-cols-3">
          {[
            { img: "https://source.unsplash.com/random/200x200?design", text: "UI/UX Design" },
            { img: "https://source.unsplash.com/random/200x200?code", text: "Full Stack Development" },
            { img: "https://source.unsplash.com/random/200x200?consulting", text: "Consulting" },
          ].map((s) => (
            <div key={s.text} className="text-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={s.img}
                alt={s.text}
                className="mx-auto mb-2 h-32 w-32 rounded object-cover"
              />
              <p>{s.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">My Design Process</h2>
        <div className="grid gap-6 sm:grid-cols-4">
          {['Discover', 'Design', 'Develop', 'Deploy'].map((step) => (
            <div key={step} className="rounded border p-4 text-center">
              {step}
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Testimonials</h2>
        <div className="grid gap-6 sm:grid-cols-3">
          {[
            {
              quote: "Artem delivered a stellar site for our initiative.",
              author: "Challenge UCSC",
            },
            {
              quote: "Working with Artem was effortless and fun.",
              author: "Karina Mois",
            },
            {
              quote: "He built a reliable platform for us quickly.",
              author: "Max Harper",
            },
          ].map((t) => (
            <figure key={t.author} className="rounded border p-4 shadow-sm">
              <blockquote className="italic text-sm">{t.quote}</blockquote>
              <figcaption className="mt-2 text-right text-xs">
                — {t.author}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
