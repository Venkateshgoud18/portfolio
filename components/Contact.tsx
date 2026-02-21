"use client";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 text-center">

      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-6xl font-semibold"
      >
        Get in Touch
      </motion.h2>

      <p className="mt-6 text-gray-400">
        Want to build something together?
      </p>

      <div className="mt-10 flex justify-center gap-6 flex-wrap">

        {/* Email */}
        <a
          href="mailto:goudvenki5@gmail.com"
          className="px-8 py-4 bg-white text-black rounded-full font-medium hover:scale-105 transition"
        >
          Email Me
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/Venkateshgoud18"
          target="_blank"
          className="px-8 py-4 border border-white rounded-full hover:scale-105 transition"
        >
          GitHub
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/venkatesh-goud-66666332b/"
          target="_blank"
          className="px-8 py-4 border border-white rounded-full hover:scale-105 transition"
        >
          LinkedIn
        </a>

      </div>
    </section>
  );
}