"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Database } from "lucide-react";

const CATEGORIES = ["All", "Frontend", "Languages", "Auth/DB", "Tools", "OS"];

const TECH_DATA = [
  {
    name: "React",
    category: "Frontend",
    icon: (
      <svg viewBox="-11.5 -10.23174 23 20.46348" className="w-10 h-10 text-[#61DAFB]">
        <circle cx="0" cy="0" r="2.05" fill="currentColor"/>
        <g stroke="currentColor" strokeWidth="1" fill="none">
          <ellipse rx="11" ry="4.2"/>
          <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
          <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
        </g>
      </svg>
    )
  },
  {
    name: "TypeScript",
    category: "Languages",
    icon: (
      <div className="w-10 h-10 bg-[#007ACC] flex items-end justify-end p-0.5 rounded-none border-0 overflow-hidden relative">
        <span className="text-white font-bold text-[22px] leading-none mb-0.5 mr-0.5 absolute bottom-0 right-0">TS</span>
      </div>
    )
  },
  {
    name: "JavaScript",
    category: "Languages",
    icon: (
      <div className="w-10 h-10 bg-[#F7DF1E] flex items-end justify-end p-0.5 rounded-none border-0 overflow-hidden relative">
        <span className="text-black font-bold text-[22px] leading-none mb-0.5 mr-0.5 absolute bottom-0 right-0">JS</span>
      </div>
    )
  },
  {
    name: "Next.js",
    category: "Frontend",
    icon: (
      <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center border border-white/20">
        <svg viewBox="0 0 180 180" className="w-6 h-6 text-white" fill="currentColor">
          <path d="M141.517 149.333L67.1205 52.8H53.056V127.2H66.697V68.7508L132.899 158.463C135.917 155.667 138.805 152.613 141.517 149.333Z" />
          <path d="M125.441 52.8H111.458V127.2H125.441V52.8Z" />
        </svg>
      </div>
    )
  },
  {
    name: "TailwindCSS",
    category: "Frontend",
    icon: (
      <svg viewBox="0 0 128 128" className="w-10 h-10 text-[#06B6D4]">
        <path fill="currentColor" d="M64 25.6c-17.067 0-27.733 8.533-32 25.6c4.267-8.533 10.667-12.8 19.2-12.8c7.87 0 12.015 3.93 16.634 8.31C72.88 51.5 78.497 56.833 96 56.833c17.067 0 27.733-8.534 32-25.601c-4.267 8.534-10.667 12.8-19.2 12.8c-7.87 0-12.015-3.93-16.634-8.31C87.12 30.634 81.503 25.6 64 25.6zM32 56.833c-17.067 0-27.733 8.534-32 25.601c4.267-8.534 10.667-12.8 19.2-12.8c7.87 0 12.015 3.93 16.634 8.31C40.88 82.7 46.497 88.033 64 88.033c17.067 0 27.733-8.533 32-25.6c-4.267 8.533-10.667 12.8-19.2 12.8c-7.87 0-12.014-3.93-16.634-8.312C55.12 61.867 49.503 56.833 32 56.833z"/>
      </svg>
    )
  },
  {
    name: "SASS",
    category: "Frontend",
    icon: (
      <svg viewBox="0 0 24 24" className="w-10 h-10 text-[#CC6699]" fill="currentColor">
         <path d="M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0zM9.615 15.998c.175.645.156 1.248-.024 1.792l-.065.18c-.024.061-.052.12-.078.176-.14.29-.326.56-.555.81-.698.759-1.672 1.047-2.09.805-.45-.262-.226-1.335.584-2.19.871-.918 2.12-1.509 2.12-1.509v-.003l.108-.061zm9.911-10.861c-.542-2.133-4.077-2.834-7.422-1.645-1.989.707-4.144 1.818-5.693 3.267C4.568 8.48 4.275 9.98 4.396 10.607c.427 2.211 3.457 3.657 4.703 4.73v.006c-.367.18-3.056 1.529-3.686 2.925-.675 1.47.105 2.521.615 2.655 1.575.436 3.195-.36 4.065-1.649.84-1.261.766-2.881.404-3.676.496-.135 1.08-.195 1.83-.104 2.101.24 2.521 1.56 2.43 2.1-.09.539-.523.854-.674.944-.15.091-.195.12-.181.181.015.09.091.09.21.075.165-.03 1.096-.45 1.141-1.471.045-1.29-1.186-2.729-3.375-2.7-.9.016-1.471.091-1.875.256-.03-.045-.061-.075-.105-.105-1.35-1.455-3.855-2.475-3.75-4.41.03-.705.285-2.564 4.8-4.814 3.705-1.846 6.661-1.335 7.171-.21.733 1.604-1.576 4.59-5.431 5.024-1.47.165-2.235-.404-2.431-.615-.209-.225-.239-.24-.314-.194-.12.06-.045.255 0 .375.12.3.585.825 1.396 1.095.704.225 2.43.359 4.5-.45 2.324-.899 4.139-3.405 3.614-5.505l.073.067z"/>
      </svg>
    )
  },
  {
    name: "Git",
    category: "Tools",
    icon: (
      <svg viewBox="0 0 128 128" className="w-10 h-10 text-[#F05032]" fill="currentColor">
         <path d="M125.688 60.5L67.5 2.313a5.525 5.525 0 00-7.813 0L49.07 12.922L61.64 25.5a10.669 10.669 0 0113.828 11.235l11.453 11.453a10.686 10.686 0 0115.828 6.437A10.706 10.706 0 0182.266 58c-1.875 0-3.64-0.5-5.188-1.39L66.75 66.938V85.5a10.718 10.718 0 11-10.688 0V48.188A10.665 10.665 0 0148 35.016l-13.844-13.844L2.312 63.016c-2.156 2.156-2.156 5.656 0 7.812l58.188 58.188a5.522 5.522 0 007.812 0L125.688 68.328a5.522 5.522 0 000-7.828z"/>
      </svg>
    )
  },
  {
    name: "GitHub",
    category: "Tools",
    icon: (
      <svg viewBox="0 0 24 24" className="w-10 h-10 text-white" fill="currentColor">
        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    )
  },
  {
    name: "VS Code",
    category: "Tools",
    icon: (
      <svg viewBox="0 0 24 24" className="w-10 h-10 text-[#007ACC]" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z"/>
      </svg>
    )
  },
  {
    name: "Figma",
    category: "Tools",
    icon: (
      <svg viewBox="0 0 24 24" className="w-10 h-10" fill="#F24E1E">
        <path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.02 3.019 3.02h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117V8.981H8.148zM8.172 24c-2.489 0-4.515-2.014-4.515-4.49s2.014-4.49 4.49-4.49h4.588v4.441c0 2.503-2.047 4.539-4.563 4.539zm-.024-7.51a3.023 3.023 0 0 0-3.019 3.019c0 1.665 1.365 3.019 3.044 3.019 1.705 0 3.093-1.376 3.093-3.068v-2.97H8.148zm7.704 0h-.098c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h.098c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.49-4.49 4.49zm-.097-7.509c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h.098c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-.098z"/>
      </svg>
    )
  },
  {
    name: "PostgreSQL",
    category: "Auth/DB",
    icon: <Database className="w-10 h-10 text-[#336791]" />
  },
  {
    name: "Supabase",
    category: "Auth/DB",
    icon: (
      <svg viewBox="0 0 128 128" className="w-10 h-10 text-[#3ECF8E]" fill="currentColor">
         <path d="M64 4.1L5.3 35.8l58.7 31.7l58.7-31.7L64 4.1zm0 63.4L5.3 35.8v63.4L64 123.9l58.7-24.7V35.8L64 67.5z"/>
      </svg>
    )
  },
  {
    name: "Windows11",
    category: "OS",
    icon: (
      <svg viewBox="0 0 128 128" className="w-10 h-10 text-[#00A4EF]" fill="currentColor">
         <path d="M3.703 62.438h58.86v58.5h-58.86v-58.5zm62.906 0h58.86v58.5h-58.86v-58.5zm-62.906-61.11h58.86v58.5h-58.86v-58.5zm62.906 0h58.86v58.5h-58.86v-58.5z"/>
      </svg>
    )
  }
];

export default function TechStack() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredTech = TECH_DATA.filter((tech) => 
    activeCategory === "All" ? true : tech.category === activeCategory
  );

  return (
    <section className="py-24 px-4 w-full relative z-10 mx-auto" id="tech-stack">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-black text-white mb-8 tracking-tight">Tech Stack</h2>
          
          {/* Filters */}
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 bg-[#111] border border-neutral-800 p-2 rounded-full shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                  activeCategory === cat 
                    ? "text-white" 
                    : "text-neutral-500 hover:text-neutral-300 hover:bg-neutral-800"
                }`}
              >
                {activeCategory === cat && (
                  <motion.div
                    layoutId="activeFilterBubble"
                    className="absolute inset-0 bg-[#a855f7] rounded-full -z-10 shadow-[0_0_15px_rgba(168,85,247,0.4)]"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Tech Cards Grid */}
        <motion.div layout className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-4 auto-rows-fr">
          <AnimatePresence mode="popLayout">
            {filteredTech.map((tech) => (
              <motion.div
                key={tech.name}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className="group relative flex flex-col items-center justify-center p-6 bg-[#1a1a1a] border border-neutral-800 rounded-3xl hover:border-neutral-600 transition-colors cursor-default min-h-[120px]"
              >
                <div className="mb-4 transform group-hover:-translate-y-1 transition-transform duration-300">
                  {tech.icon}
                </div>
                <span className="text-xs md:text-sm font-semibold text-neutral-300 group-hover:text-white transition-colors text-center">
                  {tech.name}
                </span>
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl -z-10" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
