"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="py-12 px-4 w-full relative z-10 max-w-5xl mx-auto" id="about">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="flex flex-col items-center"
      >
        <h2 className="text-3xl font-black text-white mb-6 tracking-tight text-center w-full">## ~/about-me</h2>
        
        <div className="text-neutral-400 font-light leading-relaxed space-y-6 md:text-lg max-w-4xl text-left w-full">
          <p>
            I am a <strong className="text-white font-medium">Full-Stack Developer</strong> experienced in building production-ready web applications using Next.js, TypeScript, and Python.
          </p>
          <p>
            My expertise lies in developing highly responsive user interfaces, implementing secure backend APIs, and designing scalable relational data models for real-world workflows. I have a proven track record of collaborating directly with founders and cross-functional teams to deliver user-focused systems that maintain strict security, robust Role-Based Access Control (RBAC), and high-performance standards.
          </p>
          <p>
            Whether it's modernizing an EHR platform for healthcare providers or architecting a complete e-commerce system from scratch, I prioritize <strong className="text-[var(--color-primary)] font-medium">clean code, privacy-first data handling, and zero friction.</strong>
          </p>
        </div>
      </motion.div>
    </section>
  );
}
