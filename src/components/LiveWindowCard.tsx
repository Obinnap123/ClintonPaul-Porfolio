"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface LiveWindowCardProps {
  title: string;
  hook: string;
  tools: string[];
  url: string;
}

export default function LiveWindowCard({ title, hook, tools, url }: LiveWindowCardProps) {
  const mshotsUrl = `https://s0.wp.com/mshots/v1/${encodeURIComponent(url)}?w=800`;

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -5 }}
      className="group flex flex-col md:flex-row bg-[#111] border border-neutral-800 rounded-2xl overflow-hidden hover:border-[var(--color-primary)] transition-all duration-300 w-full"
    >
      {/* Image Side */}
      <div className="w-full md:w-5/12 aspect-video md:aspect-auto relative overflow-hidden bg-[#0a0a0a] border-b md:border-b-0 md:border-r border-neutral-800">
        <Image
          src={mshotsUrl}
          alt={title}
          fill
          className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105 opacity-80 group-hover:opacity-100"
          sizes="(max-width: 768px) 100vw, 400px"
          unoptimized
        />
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-[var(--color-primary)]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
           <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300 shadow-xl bg-white text-black text-sm font-bold px-6 py-2 rounded-full">
             View Project ↗
           </div>
        </div>
      </div>
      
      {/* Content Side */}
      <div className="p-6 md:p-8 flex flex-col flex-1 justify-center">
        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[var(--color-primary)] transition-colors">{title}</h3>
        <p className="text-neutral-400 text-sm md:text-base mb-6 leading-relaxed">{hook}</p>

        <div className="flex flex-wrap gap-2 mt-auto">
          {tools.map((t, i) => (
            <span key={i} className="px-3 py-1 text-xs font-mono rounded-md bg-[#1a1a1a] border border-neutral-800 text-neutral-400 group-hover:border-neutral-700 transition-colors">
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.a>
  );
}
