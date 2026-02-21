"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function CodingPage() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-32">

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-6xl font-semibold text-center"
      >
        Coding Profiles
      </motion.h1>

      <p className="text-center text-gray-400 mt-4">
      Solve algorithmic problems & building real world projects
      </p>

      <div className="mt-16 max-w-3xl mx-auto grid gap-6">

        {/* LeetCode */}
        <a
          href="https://leetcode.com/u/venky1802/"
          target="_blank"
          className="border border-zinc-800 p-6 rounded-2xl hover:bg-zinc-900 transition flex items-center gap-4"
        >
          <Image src="/leetcode.png" alt="LeetCode" width={40} height={40} />

          <div>
            <h2 className="text-xl font-semibold">LeetCode</h2>
            <p className="text-gray-400 mt-1">
              Solve algorithmic problems & practice DSA
            </p>
            <p className="mt-1 text-sm text-gray-500">
              ⭐ 590+ problems solved
            </p>
          </div>
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/Venkateshgoud18"
          target="_blank"
          className="border border-zinc-800 p-6 rounded-2xl hover:bg-zinc-900 transition flex items-center gap-4"
        >
          <Image src="/github.png" alt="GitHub" width={40} height={40} />

          <div>
            <h2 className="text-xl font-semibold">GitHub</h2>
            <p className="text-gray-400 mt-1">
              Full-stack projects & open source work
            </p>
          </div>
        </a>

        {/* HackerRank */}
        <a
          href="https://www.hackerrank.com/profile/goudvenki5"
          target="_blank"
          className="border border-zinc-800 p-6 rounded-2xl hover:bg-zinc-900 transition flex items-center gap-4"
        >
          <Image src="/hackerrank.png" alt="HackerRank" width={40} height={40} />

          <div>
            <h2 className="text-xl font-semibold">HackerRank</h2>
            <p className="text-gray-400 mt-1">
              Java & problem solving practice and
              5 star in Java domain
            </p>
          </div>
        </a>

      </div>
    </div>
  );
}