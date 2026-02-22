"use client";
import { motion } from "framer-motion";

const topics = [
  {
    title: "Data Science",
    desc: "Exploring data analysis, preprocessing techniques, and extracting insights from structured datasets.",
  },
  {
    title: "Machine Learning",
    desc: "Learning supervised & unsupervised learning, model evaluation, and practical ML implementations.",
  },
  {
    title: "Neural Networks",
    desc: "Understanding deep learning fundamentals, backpropagation, and building basic neural architectures.",
  },
];

export default function Currently() {
  return (
    <section
      id="currently"
      className="relative py-32 px-6 max-w-6xl mx-auto text-center"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 flex justify-center pointer-events-none">
        <div className="w-[500px] h-[500px] bg-emerald-500/10 blur-[120px] rounded-full" />
      </div>

      <h2 className="text-4xl md:text-6xl font-semibold relative z-10">
        Currently Exploring
      </h2>

      <p className="mt-6 text-gray-400 max-w-2xl mx-auto relative z-10">
        Expanding my knowledge in AI-driven systems and data-focused engineering.
      </p>

      <div className="mt-16 grid md:grid-cols-3 gap-8 relative z-10">
        {topics.map((topic, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -6 }}
            transition={{ delay: i * 0.1 }}
            className="relative bg-zinc-900/80 backdrop-blur-md border border-white/10 rounded-2xl p-6 text-left overflow-hidden"
          >
            {/* Card Glow */}
            <div className="absolute -top-16 -right-16 w-40 h-40 bg-emerald-400/10 blur-[90px] rounded-full" />

            <h3 className="text-xl font-semibold">{topic.title}</h3>
            <p className="mt-3 text-gray-400 text-sm leading-6">
              {topic.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}