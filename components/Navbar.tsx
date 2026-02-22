"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-black/70 backdrop-blur-md border-b border-white/10 z-50">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link
          href="/"
          className="text-lg font-semibold tracking-wide bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent hover:opacity-80 transition"
        >
          Venkatesh
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 text-sm text-gray-300 items-center">

          <Link href="/" className="hover:text-white transition">
            Home
          </Link>


          <Link href="/#skills" className="hover:text-white transition">
            Skills
          </Link>

          <Link href="/#currently" className="hover:text-white transition">
            Exploring
          </Link>

          <Link href="/#experience" className="hover:text-white transition">
            Experience
          </Link>

          <Link href="/#projects" className="hover:text-white transition">
            Projects
          </Link>

          <Link href="/coding" className="hover:text-white transition">
            Coding
          </Link>

          <Link href="/#contact" className="hover:text-white transition">
            Contact
          </Link>

        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-xl"
        >
          ☰
        </button>
      </nav>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-black border-t border-white/10 px-6 py-4 space-y-4 text-gray-300">
          <Link href="/" onClick={() => setOpen(false)}>Home</Link>
          <Link href="/#about" onClick={() => setOpen(false)}>About</Link>
          <Link href="/#skills" onClick={() => setOpen(false)}>Skills</Link>
          <Link href="/#currently" onClick={() => setOpen(false)}>Exploring</Link>
          <Link href="/#experience" onClick={() => setOpen(false)}>Experience</Link>
          <Link href="/#projects" onClick={() => setOpen(false)}>Projects</Link>
          <Link href="/coding" onClick={() => setOpen(false)}>Coding</Link>
          <Link href="/#contact" onClick={() => setOpen(false)}>Contact</Link>
        </div>
      )}
    </header>
  );
}