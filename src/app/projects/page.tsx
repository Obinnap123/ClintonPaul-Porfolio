import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LiveWindowCard from "@/components/LiveWindowCard";

const ALL_PROJECTS = [
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
  },
  {
    title: "EtherBanks Landing Page",
    hook: "A modern animated landing page with smooth transitions and full responsiveness.",
    tools: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    url: "https://ether-banks.vercel.app/"
  },
  {
    title: "Blog Haven",
    hook: "A modern blogging platform with API integration for dynamic content rendering.",
    tools: ["React.js", "REST APIs"],
    url: "https://blog-haven-six.vercel.app/"
  },
  {
    title: "Language Academy",
    hook: "Translated Figma designs into a fully responsive React application.",
    tools: ["React.js", "SASS", "Figma"],
    url: "https://languageacad.vercel.app/"
  },
  {
    title: "Pizza Pro",
    hook: "An interactive and responsive landing page with cross-browser compatibility.",
    tools: ["HTML", "CSS", "JavaScript"],
    url: "https://pizza-pro-hazel.vercel.app/"
  },
  {
    title: "Clerk Voice Recorder",
    hook: "Implemented audio recording and playback using browser media APIs.",
    tools: ["React.js", "Tailwind CSS", "Browser APIs"],
    url: "https://clerkk-recorder-pxqq32a8r-obinnas-projects-91e57043.vercel.app/"
  }
];

export default function ProjectsPage() {
  return (
    <main className="relative min-h-screen bg-[var(--background)] selection:bg-[var(--color-primary)] selection:text-white pb-10 pt-32">
      <Navbar />
      
      <section className="px-4 max-w-5xl mx-auto z-10 relative">
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">All Projects</h1>
          <p className="text-neutral-400 font-light text-lg">A comprehensive showcase of my recent full-stack applications, static sites, and practical experiments.</p>
        </div>
        
        <div className="flex flex-col space-y-12">
          {ALL_PROJECTS.map((project, idx) => (
            <LiveWindowCard 
              key={idx}
              title={project.title}
              hook={project.hook}
              tools={project.tools}
              url={project.url}
            />
          ))}
        </div>
      </section>

      <div className="mt-20">
        <Footer />
      </div>
    </main>
  );
}
