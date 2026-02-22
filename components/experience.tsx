"use client";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "Hackathon Developer – IDEATHON 2K25",
    company: "CVR College of Engineering",
    time: "2025",
    desc: [
      "Built an AI-powered Fake News Detection web application using real-time text analysis.",
      "Integrated AI APIs to classify news content and provide instant predictions.",
      "Developed RESTful backend services and responsive frontend interface.",
      "Collaborated in a team environment to design features, debug issues, and deliver within hackathon timelines."
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-32 px-6 max-w-5xl mx-auto relative">
      
      {/* Background Glow */}
      <div className="absolute inset-0 flex justify-center pointer-events-none">
        <div className="w-[500px] h-[500px] bg-purple-500/10 blur-[120px] rounded-full" />
      </div>

      <h2 className="text-4xl md:text-6xl font-semibold text-center relative z-10">
        Experience
      </h2>

      <div className="mt-16 space-y-10 relative z-10">

        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4 }}
            className="relative bg-zinc-900/80 backdrop-blur-md border border-white/10 rounded-2xl p-8 overflow-hidden"
          >
            {/* Card Reflection Glow */}
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-blue-500/10 blur-[100px] rounded-full" />

            {/* Header */}
            <div className="flex flex-col md:flex-row md:justify-between md:items-center">
              <h3 className="text-xl font-semibold text-white">{exp.role}</h3>
              <span className="text-sm text-gray-400">{exp.time}</span>
            </div>

            <p className="text-gray-400 mt-1">{exp.company}</p>

            {/* Points */}
            <ul className="mt-4 space-y-2 text-gray-300 text-sm">
              {exp.desc.map((d, i) => (
                <li key={i}>• {d}</li>
              ))}
            </ul>

          </motion.div>
        ))}
      </div>
    </section>
  );
}