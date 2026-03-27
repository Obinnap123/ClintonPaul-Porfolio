export default function Footer() {
  return (
    <footer className="w-full border-t border-neutral-800 bg-[#0a0a0a] py-12 z-10 relative mt-20">
      <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm text-neutral-500 font-light">
        <p className="mb-6 md:mb-0">
          © {new Date().getFullYear()} Paul Clinton Obinna. <span className="text-neutral-700 hidden sm:inline">|</span> All Rights Reserved.
        </p>
        <div className="flex space-x-8 font-mono">
          <a
            href="https://github.com/Obinnap123"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors flex items-center space-x-2"
          >
            <span>GitHub</span>
            <span className="text-[10px]">↗</span>
          </a>
          <a
            href="https://linkedin.com/in/obinna-paul-853685331"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors flex items-center space-x-2"
          >
            <span>LinkedIn</span>
            <span className="text-[10px]">↗</span>
          </a>
          <a
            href="mailto:clintonp382@gmail.com"
            className="hover:text-white transition-colors flex items-center space-x-2"
          >
            <span>Email</span>
            <span className="text-[10px]">↗</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
