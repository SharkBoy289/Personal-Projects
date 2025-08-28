export const metadata = { title: "Contact — Artem" };

export default function ContactPage() {
  return (
    <section className="grid gap-12 py-12 md:grid-cols-2">
      <form className="space-y-4">
        <input
          type="text"
          placeholder="Your name"
          className="w-full rounded border p-2"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full rounded border p-2"
        />
        <textarea
          placeholder="Message"
          className="h-32 w-full rounded border p-2"
        />
        <button
          type="submit"
          className="rounded bg-black px-4 py-2 text-white hover:bg-neutral-800"
        >
          Send
        </button>
      </form>
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">Work with me</h1>
        <p className="text-neutral-700">
          I&apos;m a graduate excited to work in full-stack development or learn
          new skills.
        </p>
        <ul className="space-y-2">
          <li>
            <a href="mailto:artem@example.com" className="hover:underline">
              Email
            </a>
          </li>
          <li>
            <a href="https://twitter.com" className="hover:underline">
              Twitter
            </a>
          </li>
          <li>
            <a href="https://linkedin.com" className="hover:underline">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="https://instagram.com" className="hover:underline">
              Instagram
            </a>
          </li>
          <li>
            <a href="https://github.com" className="hover:underline">
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
