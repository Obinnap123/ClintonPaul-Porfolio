"use client";

import { ArrowLeft, Download } from "lucide-react";
import Link from "next/link";

export default function ResumePage() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <main className="min-h-screen bg-neutral-100 py-10 px-4 md:py-20 font-sans print:bg-white print:py-0 print:px-0">
      <div className="max-w-[210mm] mx-auto relative">
        
        {/* Floating actions (hidden on print) */}
        <div className="fixed top-8 right-8 flex flex-col gap-4 print:hidden z-50">
          <button 
            onClick={handlePrint}
            className="w-12 h-12 bg-[#a855f7] hover:bg-[#9333ea] text-white rounded-full flex items-center justify-center shadow-xl transition-transform hover:scale-105 group relative"
            aria-label="Save as PDF"
          >
            <Download className="w-5 h-5 mx-auto" />
            <span className="absolute right-14 bg-black text-white text-xs px-3 py-1.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">Save as PDF</span>
          </button>
          <Link 
            href="/"
            className="w-12 h-12 bg-white text-black border border-neutral-200 rounded-full flex items-center justify-center shadow-lg hover:bg-neutral-50 transition-transform hover:scale-105 group relative"
            aria-label="Back to Portfolio"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="absolute right-14 bg-black text-white text-xs px-3 py-1.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">Back to Portfolio</span>
          </Link>
        </div>

        {/* A4 Sheet */}
        <div className="bg-white shadow-[0_0_40px_rgba(0,0,0,0.1)] print:shadow-none min-h-[297mm] p-[10mm] md:p-[20mm] text-neutral-900 border border-neutral-200 print:border-none rounded-sm print:rounded-none">
           
           {/* Header */}
           <div className="border-b-2 border-neutral-900 pb-6 mb-6 text-center">
             <h1 className="text-4xl md:text-5xl font-black text-black tracking-tight mb-2 uppercase">Paul Clinton Obinna</h1>
             <p className="text-xl text-[#7c3aed] font-bold tracking-widest uppercase mb-4">Full-Stack Developer</p>
             <div className="flex flex-wrap justify-center items-center text-sm font-medium text-neutral-600 gap-x-4 gap-y-2">
               <span>+234 812 628 0781</span>
               <span className="hidden sm:inline">•</span>
               <span>clintonp382@gmail.com</span>
               <span className="hidden sm:inline">•</span>
               <span>linkedin.com/in/obinna-paul-853685331</span>
               <span className="hidden sm:inline">•</span>
               <span>github.com/Obinnap123</span>
             </div>
           </div>

           {/* Professional Summary */}
           <section className="mb-6">
             <h2 className="text-lg font-bold text-black border-b border-neutral-300 pb-1 mb-3 uppercase tracking-wider">Professional Summary</h2>
             <p className="text-sm leading-relaxed text-neutral-700">
               Full-stack developer experienced in building production-ready web applications using Next.js, TypeScript, and Python. Skilled in developing responsive user interfaces, implementing secure backend APIs, and designing relational data models for real-world workflows. Proven ability to collaborate with founders and cross-functional teams to deliver scalable, user-focused systems with strong security and performance standards.
             </p>
           </section>

           {/* Technical Skills */}
           <section className="mb-6">
             <h2 className="text-lg font-bold text-black border-b border-neutral-300 pb-1 mb-3 uppercase tracking-wider">Technical Skills</h2>
             <div className="grid grid-cols-1 md:grid-cols-4 gap-2 text-sm text-neutral-700">
                <div className="font-semibold text-black">Languages</div>
                <div className="md:col-span-3">JavaScript (ES6+), TypeScript, Python, HTML5, CSS3, SASS</div>
                
                <div className="font-semibold text-black">Frameworks & Libs</div>
                <div className="md:col-span-3">Next.js, React.js, FastAPI, Tailwind CSS, Framer Motion</div>
                
                <div className="font-semibold text-black">Databases & ORM</div>
                <div className="md:col-span-3">PostgreSQL, Prisma, SQLAlchemy</div>
                
                <div className="font-semibold text-black">Auth & Security</div>
                <div className="md:col-span-3">JWT, NextAuth, bcrypt, Role-Based Access Control (RBAC)</div>
                
                <div className="font-semibold text-black">Tools</div>
                <div className="md:col-span-3">Git, GitHub, Figma, Chrome DevTools</div>
                
                <div className="font-semibold text-black">Concepts</div>
                <div className="md:col-span-3">REST APIs, Relational Data Modeling, Responsive Design, Accessibility, Performance Optimization, Analytics Dashboards</div>
             </div>
           </section>

           {/* Professional Experience */}
           <section className="mb-6">
             <h2 className="text-lg font-bold text-black border-b border-neutral-300 pb-1 mb-3 uppercase tracking-wider">Professional Experience</h2>
             
             <div className="mb-5">
               <div className="flex justify-between items-baseline mb-1">
                 <h3 className="font-bold text-black">Full-Stack Developer (Freelance) — Fab Shopper (E-Commerce)</h3>
                 <span className="text-xs font-semibold text-neutral-500 whitespace-nowrap ml-4">Jan 2026 – Mar 2026</span>
               </div>
               <ul className="list-disc list-outside ml-4 text-sm text-neutral-700 space-y-1.5">
                 <li>Engineered a production-ready, full-stack e-commerce platform featuring a dynamic storefront and a comprehensive administrative dashboard.</li>
                 <li>Designed complex relational data models in PostgreSQL using Prisma to manage inventory, orders, customer profiles, and shipping zones.</li>
                 <li>Built a custom analytics engine and integrated Snap Pixel to accurately track unique store visits and user attribution.</li>
                 <li>Implemented robust security measures, including role-based access control (RBAC) via NextAuth, secure authentication flows, and in-app realtime notifications.</li>
               </ul>
             </div>

             <div className="mb-5">
               <div className="flex justify-between items-baseline mb-1">
                 <h3 className="font-bold text-black">Frontend Developer (Contract) — PrivaCure (HealthTech)</h3>
                 <span className="text-xs font-semibold text-neutral-500 whitespace-nowrap ml-4">2025 – Present</span>
               </div>
               <ul className="list-disc list-outside ml-4 text-sm text-neutral-700 space-y-1.5">
                 <li>Contribute to a secure EHR platform enabling multi-hospital interoperability across African healthcare providers.</li>
                 <li>Build responsive, role-aware interfaces while enforcing strict RBAC boundaries at the UI layer.</li>
                 <li>Integrate encrypted patient-data APIs in collaboration with backend engineers.</li>
                 <li>Translate complex healthcare workflows into intuitive, privacy-focused frontend systems.</li>
               </ul>
             </div>

             <div className="mb-5">
               <div className="flex justify-between items-baseline mb-1">
                 <h3 className="font-bold text-black">Frontend Developer (Freelance) — Ticket & Attendee Mgmt</h3>
                 <span className="text-xs font-semibold text-neutral-500 whitespace-nowrap ml-4">Dec 2024 – Present</span>
               </div>
               <ul className="list-disc list-outside ml-4 text-sm text-neutral-700 space-y-1.5">
                 <li>Rebuilt the product landing page, improving layout consistency, responsiveness, and perceived performance.</li>
                 <li>Implemented pixel-accurate interfaces from design mockups and communicated trade-offs with founders.</li>
                 <li>Took ownership of the frontend codebase after initial successful delivery.</li>
                 <li>Developed authentication, onboarding, and event management pages in collaboration with backend engineers.</li>
               </ul>
             </div>

             <div className="mb-4">
               <div className="flex justify-between items-baseline mb-1">
                 <h3 className="font-bold text-black">Software Developer Intern — NotchHR (ATB Tech)</h3>
                 <span className="text-xs font-semibold text-neutral-500 whitespace-nowrap ml-4">Jul 2024 – Nov 2024</span>
               </div>
               <ul className="list-disc list-outside ml-4 text-sm text-neutral-700 space-y-1.5">
                 <li>Built responsive job-board interfaces including listing and detail views.</li>
                 <li>Implemented real-world UI workflows modeled after modern job platforms.</li>
                 <li>Collaborated with interns and supervisors to resolve interface challenges.</li>
                 <li>Strengthened understanding of frontend architecture and best practices.</li>
               </ul>
             </div>
           </section>

           {/* Key Projects */}
           <section className="mb-6">
             <h2 className="text-lg font-bold text-black border-b border-neutral-300 pb-1 mb-3 uppercase tracking-wider">Key Projects</h2>
             
             <div className="mb-3">
               <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1">
                 <h3 className="font-bold text-black text-sm">Fab Shopper E-Commerce Platform</h3>
                 <span className="text-xs text-[#7c3aed] font-medium break-all">fab-shopper.vercel.app</span>
               </div>
               <p className="text-xs text-neutral-500 mb-1">Next.js, TypeScript, Tailwind CSS, Prisma, PostgreSQL</p>
               <ul className="list-disc list-outside ml-4 text-xs text-neutral-700 space-y-1">
                 <li>Developed a custom full-stack, responsive web application tailored for a high-end fashion retail client.</li>
                 <li>Engineered a secure admin dashboard with real-time financial tracking, order management, and dynamic inventory control.</li>
                 <li>Built a privacy-first analytics tracker and successfully passed Vercel production deployment standards.</li>
               </ul>
             </div>

             <div className="mb-3">
               <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1">
                 <h3 className="font-bold text-black text-sm">Real-Time Academic Feedback Platform</h3>
                 <span className="text-xs text-[#7c3aed] font-medium break-all">feedback-system-azure-kappa.vercel.app</span>
               </div>
               <p className="text-xs text-neutral-500 mb-1">Next.js, TypeScript, FastAPI, PostgreSQL</p>
               <ul className="list-disc list-outside ml-4 text-xs text-neutral-700 space-y-1">
                 <li>Built a scalable academic feedback system with anonymous submissions and real-time sentiment monitoring.</li>
                 <li>Designed modular REST APIs with JWT authentication and RBAC.</li>
                 <li>Engineered database-level analytics for participation and sentiment tracking.</li>
               </ul>
             </div>

             <div className="mb-3">
               <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1">
                 <h3 className="font-bold text-black text-sm">Service Request Management System</h3>
                 <span className="text-xs text-[#7c3aed] font-medium break-all">webgis-dashboard-nu.vercel.app</span>
               </div>
               <p className="text-xs text-neutral-500 mb-1">Next.js, TypeScript, Prisma, PostgreSQL</p>
               <ul className="list-disc list-outside ml-4 text-xs text-neutral-700 space-y-1">
                 <li>Developed a full-stack ticketing platform centralizing request workflows.</li>
                 <li>Implemented secure authentication using NextAuth and JWT sessions.</li>
                 <li>Designed relational schemas supporting audit logging and traceability.</li>
               </ul>
             </div>

             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                 <div>
                   <h3 className="font-bold text-black text-sm">EtherBanks Landing Page</h3>
                   <span className="text-[10px] text-[#7c3aed] font-medium break-all block mb-1">ether-banks.vercel.app</span>
                   <p className="text-[11px] leading-snug text-neutral-700">Built a modern animated landing page with smooth transitions and full responsiveness using Framer Motion.</p>
                 </div>
                 <div>
                   <h3 className="font-bold text-black text-sm">Blog Haven</h3>
                   <span className="text-[10px] text-[#7c3aed] font-medium break-all block mb-1">blog-haven-six.vercel.app</span>
                   <p className="text-[11px] leading-snug text-neutral-700">Developed a blogging platform with API integration for dynamic content rendering.</p>
                 </div>
                 <div>
                   <h3 className="font-bold text-black text-sm">Language Academy</h3>
                   <span className="text-[10px] text-[#7c3aed] font-medium break-all block mb-1">languageacad.vercel.app</span>
                   <p className="text-[11px] leading-snug text-neutral-700">Translated Figma designs into a fully responsive React application.</p>
                 </div>
                 <div>
                   <h3 className="font-bold text-black text-sm">Clerk (Voice Recorder App)</h3>
                   <span className="text-[10px] text-[#7c3aed] font-medium break-all block mb-1">clerkk-recorder.vercel.app</span>
                   <p className="text-[11px] leading-snug text-neutral-700">Implemented audio recording and playback using browser media APIs.</p>
                 </div>
             </div>
           </section>

           {/* Education & Certs */}
           <section>
              <h2 className="text-lg font-bold text-black border-b border-neutral-300 pb-1 mb-3 uppercase tracking-wider mt-6">Education & Certifications</h2>
              <div className="flex justify-between items-baseline mb-2">
                 <h3 className="font-bold text-black text-sm">B.Sc. Computer Science <span className="font-normal text-neutral-600">— Crawford University, Igbesa</span></h3>
                 <span className="text-xs font-semibold text-neutral-500 whitespace-nowrap ml-4">2021 – 2025</span>
              </div>
              <div className="flex justify-between items-baseline">
                 <h3 className="font-bold text-black text-sm">Frontend Development Training <span className="font-normal text-neutral-600">— Digitally Virtual Academy (DVA)</span></h3>
                 <span className="text-xs font-semibold text-neutral-500 whitespace-nowrap ml-4">Jul 2024 – Aug 2024</span>
              </div>
           </section>

        </div>
      </div>
    </main>
  );
}
