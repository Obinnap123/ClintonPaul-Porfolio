"use client";

import { motion } from "framer-motion";

export default function TechStackBento() {
  return (
    <section className="py-20 px-4 max-w-5xl mx-auto z-10 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">Stack Used</h2>
        <p className="text-neutral-400 font-light">Architected with modern, type-safe technologies.</p>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[130px]">
        {/* Next.js (Large Box) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          whileHover={{ y: -5, scale: 1.02 }}
          transition={{ duration: 0.4 }}
          className="col-span-2 row-span-2 glass-panel rounded-3xl flex flex-col items-center justify-center p-8 group cursor-default shadow-lg"
        >
          <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.15)] mb-6 group-hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] transition-shadow">
             <svg width="40" height="40" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M90 180C139.706 180 180 139.706 180 90C180 40.2944 139.706 0 90 0C40.2944 0 0 40.2944 0 90C0 139.706 40.2944 180 90 180Z" fill="black"/>
                <path d="M141.517 149.333L67.1205 52.8H53.056V127.2H66.697V68.7508L132.899 158.463C135.917 155.667 138.805 152.613 141.517 149.333Z" fill="white"/>
                <path d="M125.441 52.8H111.458V127.2H125.441V52.8Z" fill="white"/>
            </svg>
          </div>
          <h3 className="text-3xl font-black text-white mb-3 tracking-tighter">Next.js</h3>
          <p className="text-neutral-400 text-sm text-center max-w-[200px]">Server-first React architecture delivering edge performance.</p>
        </motion.div>

        {/* TypeScript */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          whileHover={{ y: -5, scale: 1.05 }}
          className="col-span-1 glass-panel rounded-3xl flex flex-col items-center justify-center p-4 group cursor-default relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="text-blue-500 font-bold text-4xl mb-2 relative z-10">TS</div>
          <span className="text-neutral-300 font-medium tracking-wide text-sm relative z-10">TypeScript</span>
        </motion.div>

        {/* Python */}
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          whileHover={{ y: -5, scale: 1.05 }}
          className="col-span-1 border border-[var(--color-electric)] bg-[var(--color-electric)]/10 backdrop-blur-md rounded-3xl flex flex-col items-center justify-center p-4 group cursor-default shadow-[0_0_20px_rgba(59,130,246,0.1)] relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[var(--color-electric)] opacity-0 group-hover:opacity-20 transition-opacity" />
          <div className="text-[var(--color-electric)] font-bold text-4xl mb-2 relative z-10">Py</div>
          <span className="text-white font-semibold tracking-wide text-sm drop-shadow-md relative z-10">Python</span>
        </motion.div>

        {/* PostgreSQL */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          whileHover={{ y: -5, scale: 1.05 }}
          className="col-span-1 glass-panel rounded-3xl flex flex-col items-center justify-center p-4 group cursor-default relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="text-white/80 font-bold text-3xl mb-2 relative z-10">SQL</div>
          <span className="text-neutral-400 font-medium tracking-wide text-sm relative z-10">PostgreSQL</span>
        </motion.div>
        
        {/* Node.js */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.4 }}
          whileHover={{ y: -5, scale: 1.05 }}
          className="col-span-1 glass-panel rounded-3xl flex flex-col items-center justify-center p-4 group cursor-default relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
          <svg className="w-10 h-10 mb-2 relative z-10 text-[#5FA04E] drop-shadow-[0_0_12px_rgba(95,160,78,0.4)]" viewBox="0 0 128 128" fill="currentColor">
             <path d="M63.812 0L5.344 33.687v60.5L63.812 128l58.844-33.813v-60.5zm44.25 85.344l-44.25 25.438l-44.156-25.438v-42.688l44.156-25.469l44.25 25.469zm-16.125-34l-28.125-16.188v56.594l15.531-8.938v-30.812l12.594 7.219zM42.22 84.188L70.344 100.407v-56.594l-15.531 8.938v30.781l-12.594-7.219z" />
          </svg>
          <span className="text-neutral-400 font-medium tracking-wide text-sm relative z-10">Node.js</span>
        </motion.div>

        {/* Framer Motion */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.5 }}
          whileHover={{ y: -5, scale: 1.02 }}
          className="col-span-2 md:col-span-4 lg:col-span-4 glass-panel rounded-3xl flex flex-row items-center justify-center p-6 group cursor-default relative overflow-hidden gap-4"
        >
           <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          <svg className="w-8 h-8 relative z-10" viewBox="0 0 14 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0H14V7H7L0 0Z" fill="white"/>
            <path d="M0 7H14V14H7L0 7Z" fill="white"/>
            <path d="M0 14H7V21L0 14Z" fill="white"/>
          </svg>
          <span className="text-neutral-300 font-medium tracking-wide text-lg relative z-10 flex items-center">
            Smooth UI with Framer Motion <span className="text-[#3b82f6] ml-2">✧</span>
          </span>
        </motion.div>

      </div>
    </section>
  );
}
