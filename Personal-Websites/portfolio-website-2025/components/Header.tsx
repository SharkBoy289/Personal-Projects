import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4 border-b">
      <Link href="/" className="text-lg font-bold">
        Artem
      </Link>
      <nav className="flex gap-4 text-sm">
        <Link href="/about" className="hover:underline">
          About Me
        </Link>
        <Link href="/projects" className="hover:underline">
          Projects
        </Link>
        <Link href="/timeline" className="hover:underline">
          Timeline
        </Link>
        <Link href="/contact" className="hover:underline">
          Contact
        </Link>
      </nav>
    </header>
  );
}
