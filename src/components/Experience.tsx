"use client";

import { motion } from "framer-motion";

const EXPERIENCES = [
  {
    role: "Full-Stack Developer (Freelance)",
    company: "Fab Shopper (E-Commerce)",
    date: "Jan 2026 – Mar 2026",
    points: [
      "Engineered a production-ready e-commerce platform with a dynamic storefront and comprehensive admin dashboard.",
      "Designed complex relational data models in PostgreSQL using Prisma for inventory, orders, and shipping zones.",
      "Built a custom analytics engine securely integrating tracking systems for user attribution.",
      "Implemented robust security measures including NextAuth RBAC, secure flows, and real-time app notifications."
    ]
  },
  {
    role: "Frontend Developer (Contract)",
    company: "PrivaCure (HealthTech)",
    date: "2025 – Present",
    points: [
      "Contribute to a secure EHR platform enabling multi-hospital interoperability across African healthcare providers.",
      "Build responsive, role-aware interfaces while enforcing strict RBAC boundaries at the UI layer.",
      "Integrate encrypted patient data APIs in tight collaboration with backend engineers."
    ]
  },
  {
    role: "Software Developer Intern",
    company: "NotchHR (ATB Tech)",
    date: "Jul 2024 – Nov 2024",
    points: [
      "Built responsive job-board interfaces including complex listing and administrative detail views.",
      "Implemented real-world UI workflows modeled after modern, large-scale job platforms.",
      "Collaborated heavily with cross-functional teams to rapidly resolve interface challenges."
    ]
  }
];

export default function Experience() {
  return (
    <section className="py-24 px-4 w-full relative z-10 max-w-5xl mx-auto" id="experience">
      <div className="mb-16 flex flex-col items-center text-center">
        <h2 className="text-3xl font-black text-white mb-2 tracking-tight">## ~/my-experience</h2>
        <p className="text-neutral-400 font-light">Professional journey and contributions.</p>
      </div>

      <div className="relative border-l border-neutral-800 ml-3 md:ml-6 mt-10 space-y-12">
        {EXPERIENCES.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: idx * 0.1 }}
            className="relative"
          >
            {/* Timeline dot */}
            <div className="absolute -left-[10px] top-8 w-5 h-5 rounded-full bg-[#0a0a0a] border-[4px] border-[var(--color-primary)] z-10" />
            
            {/* Experience Card */}
            <div className="bg-[#111] border border-neutral-800 p-6 md:p-8 rounded-2xl hover:border-[var(--color-primary)]/50 transition-colors ml-6 md:ml-10">
                <h3 className="text-2xl font-bold text-white mb-1">{exp.role}</h3>
                <h4 className="text-lg text-[var(--color-primary)] font-medium mb-4 flex flex-col sm:flex-row sm:items-center">
                  {exp.company} 
                  <span className="text-neutral-500 text-sm mt-1 sm:mt-0 sm:ml-3 font-mono">| {exp.date}</span>
                </h4>
                <ul className="space-y-3">
                  {exp.points.map((pt, i) => (
                    <li key={i} className="text-neutral-400 font-light text-sm md:text-base leading-relaxed">
                      {pt}
                    </li>
                  ))}
                </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
