"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="py-40 text-center max-w-5xl mx-auto px-6">
      <h2 className="text-5xl md:text-7xl font-semibold">
        About Me
      </h2>

      {/* Description */}
      <p className="mt-10 text-xl text-gray-400 leading-8">
        Full Stack Developer and problem solver with 590+ algorithmic challenges solved,
        experienced in building scalable web applications and real-time data-driven systems.
        Focused on clean architecture, performance optimization, and delivering impactful
        solutions with a strong engineering mindset.
      </p>

      {/* Stats Cards */}
      <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-6">

        {/* LeetCode */}
        <motion.div
          whileHover={{ y: -6 }}
          className="bg-zinc-900 border border-white/10 rounded-2xl p-6"
        >
          <h3 className="text-3xl font-semibold">590+</h3>
          <p className="text-gray-400 mt-2 text-sm">
            DSA Problems Solved
          </p>
        </motion.div>

        {/* Projects */}
        <motion.div
          whileHover={{ y: -6 }}
          className="bg-zinc-900 border border-white/10 rounded-2xl p-6"
        >
          <h3 className="text-3xl font-semibold">10+</h3>
          <p className="text-gray-400 mt-2 text-sm">
            Real-World Projects Built
          </p>
        </motion.div>

        {/* Tech */}
        <motion.div
          whileHover={{ y: -6 }}
          className="bg-zinc-900 border border-white/10 rounded-2xl p-6"
        >
          <h3 className="text-3xl font-semibold">MERN</h3>
          <p className="text-gray-400 mt-2 text-sm">
            Full Stack Focus
          </p>
        </motion.div>

      </div>
    </section>
  );
}