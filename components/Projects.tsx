"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const projects = [
  {
    title: "IntelliChat",
    desc: "AI-powered real-time chat platform with OpenAI.",
    full: "IntelliChat is an AI chat project built using GPT-4o mini, focused on speed, simplicity, and real usage scenarios. Built on the MERN stack (MongoDB, Express, React, Node.js), this project pushed me to think beyond just code—towards scalability, performance, and user experience.",
    tech: ["React", "Node.js", "Express", "MongoDB", "OpenAI API", "JWT"],
    github: "https://github.com/Venkateshgoud18/gptmini.git",
    live: "",
    video: "/Screen Recording 2026-02-21 at 7.35.35 AM.mov",
    image: null,
  },
  {
    title: "DevStream",
    desc: "Version control platform with AWS S3.",full: "DevStream is a GitHub-inspired MERN stack application that simulates version control operations like init, add, commit, and push. It integrates AWS S3 for storing project files and handling pushes. Through this project, I gained hands-on experience with cloud storage, REST APIs, and building a scalable full-stack system while understanding how real-world version control platforms work internally.",
    
    tech: ["React", "Node.js", "MongoDB", "AWS S3"],
    github: "https://github.com/Venkateshgoud18/VersionControlSystem.git",
    live: "",
    video: null,
    image: "/Devstream.jpeg",
  },
  {
    title: "TradeAlgo",
    desc: "Real-time trading alerts with WebSockets.",
    full: "TradeAlgo is a real-time trading alert system that streams market data using WebSockets and triggers instant notifications based on price conditions. The backend follows an event-driven architecture to process live updates efficiently and broadcast alerts to users with minimal latency. This project strengthened my understanding of WebSockets, asynchronous systems, and building scalable real-time applications.",
    tech: ["React", "Node.js", "WebSockets"],
    github: "https://github.com/Venkateshgoud18/TradeAlgo.git",
    live: "",
    video: "/Screen Recording 2026-02-21 at 7.44.06 AM.mov",
    image: null,
  },
  {
    title: "TradeHive",
    desc: "Stock trading & market insights platform.",
    full: "TradeHive is a stock trading and market insights platform built with the MERN stack. It integrates the Finnhub API to provide real-time stock data, news, and analytics. Users can track their portfolios, set price alerts, and access comprehensive market insights. This project enhanced my skills in API integration, data visualization, and building user-centric financial applications.",
    tech: ["React", "Node.js", "MongoDB", "Finnhub API"],
    github: "https://github.com/Venkateshgoud18/zerodha.git",
    live: "",
    video: "/Screen Recording 2026-02-21 at 7.51.21 AM.mov",
    image: null,
  },
  {
    title: "Call Hub",
    desc: "Zoom-like MERN video conferencing platform.",
    full: "Call Hub is a video conferencing platform inspired by Zoom, built using the MERN stack. It leverages WebRTC for real-time video communication and Socket.io for signaling and chat functionality. Users can create/join rooms, share screens, and chat seamlessly. This project deepened my understanding of real-time communication technologies and building scalable full-stack applications.",
    tech: ["WebRTC", "React", "Node.js", "MongoDB", "Socket.io"],
    github: "https://github.com/Venkateshgoud18/ZoomClone.git",
    live: "",
    video: null,
    image: "/Screenshot 2026-02-21 at 7.55.15 AM.png",
  },
  {
    title: "Local Handicraft Marketplace",
    desc: "MERN e-commerce platform for local artisans.",
    full: "Local Handicraft Marketplace is an e-commerce platform built with the MERN stack, designed to connect local artisans with customers. It features product listings, shopping cart functionality, and secure checkout. This project allowed me to apply my full-stack development skills while creating a platform that supports small businesses and promotes local craftsmanship.",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    github: "https://github.com/Venkateshgoud18/LocalHandicraft.git",
    live: "",
    video: null,
    image: "/WhatsApp Image 2026-02-21 at 08.01.00.jpeg",
  },
  {
    title: "VisionCart AI",
    desc: "AI-powered product detection & shopping assistant.",
    full: "VisionCart AI is an innovative shopping assistant that uses AI to detect products in images and provide users with relevant information and purchase options. Built with React and Node.js, it integrates AI APIs for image recognition and product matching. This project allowed me to explore the intersection of AI and e-commerce, creating a unique user experience that simplifies online shopping.",
    tech: ["React", "Node.js", "AI APIs"],
    github: "https://github.com/Venkateshgoud18/VisionCartAi.git",
    live: "",
    video: null,
    image: "/Screenshot 2026-02-11 at 9.28.30 AM.png",
  },
];

export default function Projects() {
  const [active, setActive] = useState<any>(null);

  return (
    <section id="projects" className="py-32 px-6 max-w-6xl mx-auto">
      <h2 className="text-4xl font-semibold text-center">Projects</h2>

      {/* GRID */}
      <div className="mt-16 grid md:grid-cols-3 gap-8">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -8 }}
            onClick={() => setActive(p)}
            className="bg-zinc-900 p-6 rounded-2xl border border-white/10 cursor-pointer"
          >
            <div className="rounded-xl overflow-hidden mb-6">
              {p.video ? (
                <video
                  src={p.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-48 object-cover rounded-xl"
                />
              ) : (
                <img
                  src={p.image || ""}
                  className="w-full h-48 object-cover rounded-xl"
                />
              )}
            </div>

            <h3 className="text-xl font-semibold">{p.title}</h3>
            <p className="mt-3 text-gray-400 text-sm">{p.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* MODAL */}
      {active && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-6"
          onClick={() => setActive(null)}
        >
          <div
            className="bg-zinc-900 max-w-3xl w-full rounded-2xl p-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* MEDIA */}
            <div className="rounded-xl overflow-hidden mb-6">
              {active.video ? (
                <video
                  src={active.video}
                  controls
                  autoPlay
                  className="w-full rounded-xl"
                />
              ) : (
                <img
                  src={active.image}
                  className="w-full rounded-xl"
                />
              )}
            </div>

            {/* TITLE */}
            <h3 className="text-2xl font-semibold">{active.title}</h3>

            {/* FULL DESC */}
            <p className="mt-4 text-gray-400">{active.full}</p>

            {/* TECH STACK */}
            <div className="flex flex-wrap gap-2 mt-4">
              {active.tech?.map((t: string, i: number) => (
                <span
                  key={i}
                  className="px-3 py-1 text-xs bg-white/10 border border-white/20 rounded-full"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* BUTTONS */}
            <div className="flex gap-4 mt-6">
              {active.github && (
                <a
                  href={active.github}
                  target="_blank"
                  className="px-5 py-2 border border-white rounded-lg"
                >
                  GitHub
                </a>
              )}

              {active.live && (
                <a
                  href={active.live}
                  target="_blank"
                  className="px-5 py-2 bg-white text-black rounded-lg"
                >
                  Live
                </a>
              )}
            </div>

            {/* CLOSE */}
            <button
              onClick={() => setActive(null)}
              className="mt-6 px-6 py-2 bg-white text-black rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}