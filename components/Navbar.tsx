"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 w-full bg-black border-b border-zinc-800 z-50">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="text-white font-semibold text-lg">
          Venkatesh
        </Link>

        {/* Links */}
        <div className="flex gap-8 text-sm text-gray-300">

          <Link href="/" className="hover:text-white">
            Home
          </Link>

          <Link href="#projects" className="hover:text-white">
            Projects
          </Link>

          <Link href="#about" className="hover:text-white">
            About
          </Link>

          <Link href="/coding" className="hover:text-white">
            Coding Profiles
          </Link>

          <Link href="#contact" className="hover:text-white">
            Contact
          </Link>

        </div>
      </nav>
    </header>
  );
}