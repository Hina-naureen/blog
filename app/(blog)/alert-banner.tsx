"use client";

import { useRouter } from "next/navigation";
import { useSyncExternalStore, useTransition } from "react";

import { disableDraftMode } from "./actions";

const emptySubscribe = () => () => {};

export default function AlertBanner() {
  return (
    <div
      className="fixed top-0 left-0 z-50 w-full h-16 border-b bg-[#ead4d4] text-[#555A54] backdrop-blur shadow-md"
    >
      <div className="container mx-auto flex justify-between items-center h-full px-4">
        <div className="text-lg font-semibold">Your Blog</div>
        <ul className="flex space-x-6">
          <li><a href="/" className="hover:text-gray-400">Home</a></li>
          <li><a href="/About" className="hover:text-gray-400">About</a></li>
          <li><a href="/contact" className="hover:text-gray-400">Contact</a></li>
         
        </ul>
      </div>

      
    </div>
  );
}