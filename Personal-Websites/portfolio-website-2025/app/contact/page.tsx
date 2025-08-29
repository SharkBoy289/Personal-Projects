"use client";

import { useState } from "react";

const socials = [
  { href: "mailto:hello@example.com", label: "Email", icon: "📧" },
  { href: "https://twitter.com/", label: "Twitter", icon: "🐦" },
  { href: "https://linkedin.com/", label: "LinkedIn", icon: "💼" },
  { href: "https://instagram.com/", label: "Instagram", icon: "📷" },
  { href: "https://github.com/", label: "GitHub", icon: "💻" },
];

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <section className="mx-auto max-w-5xl grid gap-8 p-4 sm:p-8 md:grid-cols-2">
      <form
        className="space-y-4"
        onSubmit={(e) => {
          e.preventDefault();
          setSent(true);
        }}
      >
        <input
          type="text"
          name="name"
          required
          placeholder="Your name"
          className="w-full rounded border p-2"
        />
        <input
          type="email"
          name="email"
          required
          placeholder="Your email"
          className="w-full rounded border p-2"
        />
        <textarea
          name="message"
          rows={5}
          required
          placeholder="How can I help?"
          className="w-full rounded border p-2"
        />
        <button
          type="submit"
          className="rounded bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700"
        >
          Send
        </button>
        {sent && (
          <p className="text-sm text-green-600">Thanks! I&apos;ll be in touch soon.</p>
        )}
      </form>

      <div>
        <h1 className="text-3xl font-bold">Work with me</h1>
        <p className="mt-4">
          I&apos;m a graduate excited to take on full‑stack development challenges
          and always eager to learn new skills.
        </p>
        <ul className="mt-6 space-y-2">
          {socials.map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:underline"
              >
                <span>{s.icon}</span> {s.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

