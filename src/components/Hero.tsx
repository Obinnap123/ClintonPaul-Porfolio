"use client";

import { motion } from "framer-motion";
import { Download, ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex flex-col items-center justify-center px-4 z-10 text-center pb-12 pt-10">
      
      {/* Subtle Background Particles / Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_center,rgba(124,58,237,0.05),transparent)] pointer-events-none" />
      
      {/* Name */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-4xl sm:text-5xl md:text-7xl lg:text-[5.5rem] font-black mb-6 tracking-tighter relative z-10 leading-tight"
      >
         <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)]">Paul Clinton Obinna</span>
      </motion.h1>

      {/* Subtitles */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        className="flex flex-col items-center max-w-2xl mx-auto relative z-10"
      >
        <h2 className="text-lg md:text-xl font-mono text-neutral-400 mb-5">
           ~/frontend-developer
        </h2>
        
        <p className="text-base md:text-lg text-neutral-400 font-light leading-relaxed">
          I turn ideas into beautiful interfaces that work, without the extra noise. Building production-ready web applications using Next.js and TypeScript.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 w-full">
          <a href="#recent-works" className="px-8 py-3.5 bg-white text-black font-semibold rounded-lg hover:bg-neutral-200 transition-colors w-full sm:w-auto">
            View My Work
          </a>
          <a href="/resume" className="px-8 py-3.5 bg-[#111] text-white flex items-center justify-center gap-2 font-semibold rounded-lg border border-neutral-800 hover:bg-neutral-800 transition-colors w-full sm:w-auto">
            View Resume <Download className="w-4 h-4" />
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-12 sm:mt-16 w-full flex justify-center animate-bounce">
          <a href="#about" className="p-3 bg-neutral-900 rounded-full border border-neutral-800 hover:bg-neutral-800 transition-colors text-neutral-400 hover:text-white shadow-[0_0_15px_rgba(0,0,0,0.5)]">
            <ChevronDown className="w-5 h-5" />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
