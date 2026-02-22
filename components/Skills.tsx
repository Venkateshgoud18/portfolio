"use client";
import { motion } from "framer-motion";

const skills = {
  Languages: ["Java", "JavaScript", "TypeScript"],
  Frontend: ["React", "Next.js", "Tailwind CSS"],
  Backend: ["Node.js", "Express", "MongoDB"],
  "Realtime & Systems": ["WebSockets", "WebRTC", "REST APIs"],
  Tools: ["Git", "GitHub", "AWS S3", "Vercel"],
  Deployment: ["Docker", "AWS EC2", "Vercel"],
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-32 px-6 max-w-6xl mx-auto text-center overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0 flex justify-center pointer-events-none">
        <div className="w-[700px] h-[700px] bg-indigo-500/10 blur-[160px] rounded-full" />
      </div>

      {/* Heading */}
      <h2 className="text-4xl md:text-6xl font-semibold relative z-10 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
        Skills & Technologies
      </h2>

      <p className="mt-6 text-gray-400 max-w-2xl mx-auto relative z-10">
        Tools and technologies I use to build scalable, performant and real-time applications.
      </p>

      {/* Grid */}
      <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
        {Object.entries(skills).map(([category, items], i) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.07 }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="group relative bg-gradient-to-b from-zinc-900/80 to-zinc-900/40 border border-white/10 rounded-2xl p-6 text-left overflow-hidden"
          >
            {/* Glow hover effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition">
              <div className="absolute -top-24 -right-24 w-56 h-56 bg-indigo-500/20 blur-[120px] rounded-full" />
            </div>

            {/* Shine effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] duration-700" />
            </div>

            {/* Category */}
            <h3 className="text-lg font-semibold mb-4 text-white">
              {category}
            </h3>

            {/* Skills */}
            <div className="flex flex-wrap gap-2">
              {items.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-xs bg-white/5 border border-white/10 rounded-full hover:bg-white hover:text-black transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}