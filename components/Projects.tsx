"use client";
import { motion } from "framer-motion";

const projects = [
  {
    title: "IntelliChat",
    desc: "AI-powered real-time chat platform with OpenAI.",
  },
  {
    title: "DevStream",
    desc: "Version control platform with AWS S3.",
  },
  {
    title: "TradeAlgo",
    desc: "Real-time trading alerts with WebSockets.",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6 max-w-6xl mx-auto">
      <h2 className="text-4xl font-semibold text-center">
        Selected Projects
      </h2>

      <div className="mt-16 grid md:grid-cols-3 gap-8">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -8 }}
            className="bg-zinc-900 p-8 rounded-2xl border border-white/10"
          >
            <div className="h-40 bg-zinc-800 rounded-xl mb-6"></div>
            <h3 className="text-xl font-semibold">{p.title}</h3>
            <p className="mt-3 text-gray-400 text-sm">{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}