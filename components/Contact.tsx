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

      <div className="mt-10">
        <a
          href="mailto:goudvenki5@gmail.com"
          className="px-8 py-4 bg-white text-black rounded-full font-medium hover:scale-105 transition"
        >
          Email Me
        </a>
      </div>

    </section>
  );
}