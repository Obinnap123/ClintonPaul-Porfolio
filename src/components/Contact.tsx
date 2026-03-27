"use client";

import { Mail, Phone, MapPin, ArrowUp } from "lucide-react";

export default function Contact() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="py-24 px-4 w-full relative z-10 mx-auto" id="contact">
      {/* Background glow matching reference */}
      <div className="absolute inset-0 bg-[#a855f7]/5 rounded-[3rem] max-w-5xl mx-auto pointer-events-none" />
      
      <div className="max-w-5xl mx-auto relative flex flex-col items-start bg-[#111] p-10 md:p-20 rounded-[3rem] border border-neutral-800 overflow-hidden">
        {/* Soft purple glow inside the box */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#a855f7]/10 blur-[100px] rounded-full pointer-events-none translate-x-1/3 -translate-y-1/3" />

        <div className="mb-12 relative z-10 w-full">
          <div className="inline-flex items-center space-x-2 bg-[#a855f7]/20 text-[#a855f7] border border-[#a855f7]/30 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-6">
            <span className="w-2 h-2 rounded-full bg-[#a855f7] animate-pulse" />
            <span>Currently Available</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter">Get In Touch</h2>
          <p className="text-neutral-400 font-light text-lg md:text-xl max-w-xl">
            Feel free to reach out through any of the following channels. I'll get back to you as soon as possible.
          </p>
        </div>
        
        <div className="flex flex-col space-y-8 mb-16 relative z-10 w-full">
          {/* Email */}
          <a href="mailto:clintonp382@gmail.com" className="flex items-center group w-fit">
            <div className="w-12 h-12 md:w-14 md:h-14 bg-neutral-900 border border-neutral-800 rounded-full flex items-center justify-center mr-6 group-hover:bg-[#a855f7]/20 group-hover:border-[#a855f7]/50 transition-all">
              <Mail className="w-5 h-5 text-neutral-400 group-hover:text-[#a855f7] transition-colors" />
            </div>
            <div className="flex flex-col">
              <span className="text-neutral-500 text-sm font-medium mb-1">Email</span>
              <span className="text-white md:text-lg font-semibold tracking-tight transition-colors group-hover:text-[#a855f7]">clintonp382@gmail.com</span>
            </div>
          </a>
          
          {/* Phone */}
           <a href="https://wa.me/2348126280781" target="_blank" rel="noopener noreferrer" className="flex items-center group w-fit">
            <div className="w-12 h-12 md:w-14 md:h-14 bg-neutral-900 border border-neutral-800 rounded-full flex items-center justify-center mr-6 group-hover:bg-[#a855f7]/20 group-hover:border-[#a855f7]/50 transition-all">
              <Phone className="w-5 h-5 text-neutral-400 group-hover:text-[#a855f7] transition-colors" />
            </div>
            <div className="flex flex-col">
              <span className="text-neutral-500 text-sm font-medium mb-1">Phone</span>
              <span className="text-white md:text-lg font-semibold tracking-tight transition-colors group-hover:text-[#a855f7]">(+234) 812 628 0781</span>
            </div>
          </a>

          {/* Location */}
          <div className="flex items-center cursor-default w-fit">
            <div className="w-12 h-12 md:w-14 md:h-14 bg-neutral-900 border border-neutral-800 rounded-full flex items-center justify-center mr-6">
              <MapPin className="w-5 h-5 text-neutral-400" />
            </div>
            <div className="flex flex-col">
              <span className="text-neutral-500 text-sm font-medium mb-1">Location</span>
              <span className="text-white md:text-lg font-semibold tracking-tight">Lagos, NG</span>
            </div>
          </div>
        </div>
        
        {/* Footer info inside the block */}
        <div className="w-full border-t border-neutral-800 pt-8 flex flex-col md:flex-row items-start md:items-center justify-between text-sm text-neutral-500 relative z-10 gap-4">
          <p>© 2026 Paul Clinton Obinna. All rights reserved.</p>
          <div className="flex gap-6 font-medium tracking-wide">
            <a href="https://github.com/Obinnap123" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
            <a href="https://linkedin.com/in/obinna-paul-853685331" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
          </div>
        </div>

        {/* Scroll to Top Button */}
        <button 
          onClick={scrollToTop}
          className="absolute bottom-6 right-6 md:bottom-12 md:right-12 w-12 h-12 bg-[#a855f7] rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform shadow-[0_0_20px_rgba(168,85,247,0.5)] z-20"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}
