"use client";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7 }}
      className="container mx-auto py-10 px-4"
    >
      <h1 className="text-3xl text-[#555A54] font-bold mb-4 mt-6 text-center">Contact Us</h1>
      <form className="max-w-lg mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label
            className="block text-[#555A54] text-sm font-bold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Your Name"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-[#555A54] leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="container mx-auto px-4">
  {/* Your content here */}
</div>
        <div className="mb-4">
          <label
            className="block text-[#555A54] text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Your Email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-[#555A54] leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-[#555A54] text-sm font-bold mb-2"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            id="message"
            placeholder="Your Message"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-[#555A54] leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <button
          type="submit"
          className="bg-[#555A54] hover:bg-[#414541] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Send Message
        </button>
      </form>
    </motion.div>
  );
}