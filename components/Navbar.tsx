"use client";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <header className="fixed top-0 w-full bg-black/70 backdrop-blur-xl border-b border-white/10 z-50">
        <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

          {/* Logo */}
          <Link
            href="/"
            className="text-lg font-semibold tracking-wide bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent"
          >
            Venkatesh
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-6 text-sm text-gray-300">
            {[
              ["Home", "/"],
              ["Skills", "/#skills"],
              ["Exploring", "/#currently"],
              ["Experience", "/#experience"],
              ["Projects", "/#projects"],
              ["Coding", "/coding"],
              ["Contact", "/#contact"],
            ].map(([label, href]) => (
              <Link
                key={label}
                href={href}
                className="relative hover:text-white transition after:absolute after:-bottom-1 after:left-0 after:h-[1px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white text-3xl"
          >
            {open ? "✕" : "☰"}
          </button>
        </nav>
      </header>

      {/* Mobile Fullscreen Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center space-y-8 text-xl text-gray-300 md:hidden"
          >
            {[
              ["Home", "/"],
              ["Skills", "/#skills"],
              ["Exploring", "/#currently"],
              ["Experience", "/#experience"],
              ["Projects", "/#projects"],
              ["Coding", "/coding"],
              ["Contact", "/#contact"],
            ].map(([label, href]) => (
              <Link
                key={label}
                href={href}
                onClick={() => setOpen(false)}
                className="hover:text-white transition"
              >
                {label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}