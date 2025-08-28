"use client";

import Link from "next/link";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

/**
 * Sticky navigation bar with simple mobile menu.
 */
export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/40 dark:bg-neutral-900/70 dark:supports-[backdrop-filter]:bg-neutral-900/40">
      <nav className="mx-auto flex max-w-5xl items-center justify-between p-4">
        <Link
          href="/"
          className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text font-bold text-transparent transition-opacity hover:opacity-80"
        >
          Artem
        </Link>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            className="rounded p-2 transition-colors duration-200 hover:bg-black/5 dark:hover:bg-white/10 sm:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            ☰
          </button>
          <ul
            className={`${open ? "block" : "hidden"} absolute left-0 right-0 top-full mt-2 flex flex-col gap-2 bg-white p-4 text-sm shadow transition-colors duration-200 dark:bg-neutral-900 sm:static sm:mt-0 sm:flex sm:flex-row sm:gap-6 sm:bg-transparent sm:p-0 sm:text-inherit sm:shadow-none`}
            onClick={() => setOpen(false)}
          >
            <li>
              <Link
                href="/about"
                className="relative block rounded px-3 py-2 transition-colors duration-200 hover:bg-black/5 dark:hover:bg-white/10 after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-gradient-to-r from-blue-500 to-purple-500 after:transition-all after:duration-300 hover:after:w-full"
              >
                About Me
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className="relative block rounded px-3 py-2 transition-colors duration-200 hover:bg-black/5 dark:hover:bg-white/10 after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-gradient-to-r from-blue-500 to-purple-500 after:transition-all after:duration-300 hover:after:w-full"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="/timeline"
                className="relative block rounded px-3 py-2 transition-colors duration-200 hover:bg-black/5 dark:hover:bg-white/10 after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-gradient-to-r from-blue-500 to-purple-500 after:transition-all after:duration-300 hover:after:w-full"
              >
                Timeline
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="relative block rounded px-3 py-2 transition-colors duration-200 hover:bg-black/5 dark:hover:bg-white/10 after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-gradient-to-r from-blue-500 to-purple-500 after:transition-all after:duration-300 hover:after:w-full"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

