"use client";

import Link from "next/link";
import { useState } from "react";

/**
 * Sticky navigation bar with simple mobile menu.
 */
export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/40 dark:bg-neutral-900/70 dark:supports-[backdrop-filter]:bg-neutral-900/40">
      <nav className="mx-auto flex max-w-5xl items-center justify-between p-4">
        <Link href="/" className="font-bold">Artem</Link>
        <button
          className="sm:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
        <ul
          className={`${open ? "block" : "hidden"} absolute left-0 right-0 top-full mt-2 flex flex-col gap-4 bg-white p-4 text-sm shadow sm:static sm:mt-0 sm:flex sm:flex-row sm:gap-6 sm:bg-transparent sm:p-0 sm:shadow-none dark:bg-neutral-900 sm:dark:bg-transparent`}
          onClick={() => setOpen(false)}
        >
          <li>
            <Link href="/about" className="hover:text-blue-600">About Me</Link>
          </li>
          <li>
            <Link href="/projects" className="hover:text-blue-600">Projects</Link>
          </li>
          <li>
            <Link href="/timeline" className="hover:text-blue-600">Timeline</Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-blue-600">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

