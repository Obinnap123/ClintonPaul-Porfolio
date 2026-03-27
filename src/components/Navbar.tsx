"use client";

import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Sync initial state if needed
    setIsDark(document.documentElement.classList.contains('dark'));
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    }
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 w-full z-50 bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-white/5"
    >
      <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between relative">
        <a href="/" className="flex items-center space-x-2 group">
          <div className="w-10 h-10 rounded-full bg-[#a855f7] text-white flex items-center justify-center font-bold text-sm tracking-tighter group-hover:scale-105 transition-transform shadow-[0_0_15px_rgba(168,85,247,0.4)]">
            {'</>'}
          </div>
        </a>
        
        <div className="flex items-center space-x-3 md:space-x-4">
          <button 
            onClick={toggleTheme}
            className="p-2 text-neutral-400 hover:text-white transition-colors rounded-full hover:bg-neutral-800"
            aria-label="Toggle Theme"
          >
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
