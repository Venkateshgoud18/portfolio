"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-6xl md:text-8xl font-semibold"
      >
        Bujagoni Venkatesh Goud
      </motion.h1>

      <p className="mt-6 text-xl text-gray-400 max-w-xl">
        Full Stack Developer building real-time scalable apps.
      </p>

      <div className="mt-10 flex gap-6">
        <a
          href="#projects"
          className="px-6 py-3 bg-white text-black rounded-full font-medium"
        >
           more info
        </a>

        <a
          href="/Venkateshgoud_resume.pdf"
          className="px-6 py-3 border border-white/20 rounded-full"
        >
          Resume
        </a>
        
      </div>
    </section>
  );
}