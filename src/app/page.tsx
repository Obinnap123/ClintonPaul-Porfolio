import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import LiveWindowCard from "@/components/LiveWindowCard";
import TechStack from "@/components/TechStack";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const PROJECTS = [
  {
    title: "Fab Shopper",
    hook: "A production-ready full-stack e-commerce platform featuring a dynamic storefront, secure admin dashboard, and real-time inventory management.",
    tools: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL"],
    url: "https://fab-shopper.vercel.app/"
  },
  {
    title: "Academic Feedback System",
    hook: "A scalable SaaS platform for real-time academic sentiment monitoring, completely anonymous submissions, and database-level analytics.",
    tools: ["Next.js", "TypeScript", "FastAPI", "PostgreSQL"],
    url: "https://feedback-system-azure-kappa.vercel.app"
  },
  {
    title: "Service Request Manager",
    hook: "An IT ticketing dashboard that centralizes complex request workflows, featuring NextAuth JWT sessions and agent performance tracking.",
    tools: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
    url: "https://webgis-dashboard-nu.vercel.app"
  }
];

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[var(--background)] selection:bg-[var(--color-primary)] selection:text-white pb-10 pt-16">
      <Navbar />
      <Hero />
      <About />
      <TechStack />
      <Experience />

      <section className="py-24 px-4 w-full relative z-10 max-w-5xl mx-auto" id="recent-works">
        <div className="mb-12 flex flex-col items-center text-center">
          <h2 className="text-3xl font-black text-white mb-2 tracking-tight">## ~/recent-works</h2>
          <p className="text-neutral-400 font-light max-w-xl">A selection of my recent full-stack projects showcasing scalable architecture.</p>
        </div>
        
        <div className="flex flex-col space-y-8">
          {PROJECTS.map((project, idx) => (
            <LiveWindowCard 
              key={idx}
              title={project.title}
              hook={project.hook}
              tools={project.tools}
              url={project.url}
            />
          ))}
        </div>
        
        <div className="mt-12 flex justify-end">
          <a href="/projects" className="group flex items-center text-sm font-semibold text-neutral-400 hover:text-[var(--color-primary)] transition-colors">
            View all project
            <svg className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </section>

      <Contact />
    </main>
  );
}
