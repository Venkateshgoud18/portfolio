"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-black/70 backdrop-blur-lg border-b border-white/10 z-50">
      <nav className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link
          href="/"
          className="text-lg font-semibold tracking-wide bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent"
        >
          Venkatesh
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6 text-sm text-gray-300 items-center">
          <Link href="/" className="hover:text-white transition">Home</Link>
          <Link href="/#skills" className="hover:text-white transition">Skills</Link>
          <Link href="/#currently" className="hover:text-white transition">Exploring</Link>
          <Link href="/#experience" className="hover:text-white transition">Experience</Link>
          <Link href="/#projects" className="hover:text-white transition">Projects</Link>
          <Link href="/coding" className="hover:text-white transition">Coding</Link>
          <Link href="/#contact" className="hover:text-white transition">Contact</Link>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-2xl"
        >
          {open ? "✕" : "☰"}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          open ? "max-h-[400px]" : "max-h-0"
        }`}
      >
        <div className="bg-black/95 backdrop-blur-xl border-t border-white/10 px-6 py-6 space-y-5 text-gray-300 text-base">
          <Link href="/" onClick={() => setOpen(false)} className="block hover:text-white">Home</Link>
          <Link href="/#skills" onClick={() => setOpen(false)} className="block hover:text-white">Skills</Link>
          <Link href="/#currently" onClick={() => setOpen(false)} className="block hover:text-white">Exploring</Link>
          <Link href="/#experience" onClick={() => setOpen(false)} className="block hover:text-white">Experience</Link>
          <Link href="/#projects" onClick={() => setOpen(false)} className="block hover:text-white">Projects</Link>
          <Link href="/coding" onClick={() => setOpen(false)} className="block hover:text-white">Coding</Link>
          <Link href="/#contact" onClick={() => setOpen(false)} className="block hover:text-white">Contact</Link>
        </div>
      </div>
    </header>
  );
}