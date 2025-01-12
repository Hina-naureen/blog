"use client";


import { motion } from "framer-motion";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#ead4d4] text-[#555A54] flex items-center justify-center px-4">
      <div className="bg-white shadow-lg rounded-lg max-w-2xl p-6">
        <motion.h1
          className="text-4xl font-bold text-[#555A54] mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About This Blog
        </motion.h1>
        <p className="text-gray-600 leading-relaxed">
          Welcome to my blog! This platform is designed to share knowledge, ideas, and inspiration with readers around the world.
        </p>
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-2">Explore My Blog</h2>
          <Link
            href="/"
            className="inline-block mt-4 px-6 py-2 bg-[#5F4E4A] text-white rounded-lg shadow-md hover:shadow-lg hover:bg-[#8a7773] transition-all"
          >
            Visit Blog Page
          </Link>
        </div>
      </div>
    </div>
  );
}