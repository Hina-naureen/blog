"use client";
import { motion } from "framer-motion";

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[#5F4E4A] text-[#D6ADAD] flex flex-col items-center p-6 font-inter">
      <motion.h1
        className="text-4xl font-bold mb-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Welcome to the Blog
      </motion.h1>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl">
        {[1, 2, 3, 4, 5, 6].map((post, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
          >
            <motion.img
              src="/placeholder.jpg" // Replace with actual blog post image
              alt={`Blog post ${index + 1}`}
              className="w-full h-48 object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            />
            <div className="p-4">
              <h2 className="text-lg font-bold mb-2">
                Blog Post Title {index + 1}
              </h2>
              <p className="text-sm text-gray-600">
                This is a short description of the blog post. Click to read more.
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}