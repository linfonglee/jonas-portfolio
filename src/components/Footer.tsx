import { Mail, Github, Linkedin, FileText } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="relative z-10 w-full bg-white dark:bg-black border-t border-black/10 dark:border-white/10 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:48px_48px]"></div>
      
      <div className="py-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <div className="w-12 h-[2px] bg-yellow-400 mb-4" />
            <h2 className="text-2xl md:text-3xl font-extrabold text-black dark:text-white mb-1 tracking-tight">Jonas R. Castillo</h2>
            <p className="font-bold text-xs uppercase tracking-widest text-yellow-400 mb-4">IT Support Engineer</p>
            
            <address className="not-italic text-sm text-black/70 dark:text-white/70 space-y-1 font-medium">
              <p>Lipa City, Batangas, 4217</p>
              <p>
                <a href="mailto:castillojonasramos@gmail.com" className="hover:text-black dark:hover:text-white transition-colors flex items-center group w-max">
                  <Mail size={16} className="mr-2 group-hover:scale-110 transition-transform" />
                  castillojonasramos@gmail.com
                </a>
              </p>
            </address>
          </div>

          <div className="flex flex-col md:items-end h-full">
            <div className="flex space-x-6 mb-4 mt-2">
              <a href="https://www.linkedin.com/in/jonas-castillo-617858308/" target="_blank" rel="noreferrer" className="text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white hover:-translate-y-1 transition-all">
                <span className="sr-only">LinkedIn</span>
                <Linkedin size={20} />
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white hover:-translate-y-1 transition-all">
                <span className="sr-only">GitHub</span>
                <Github size={20} />
              </a>
              <a href="mailto:castillojonasramos@gmail.com" className="text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white hover:-translate-y-1 transition-all">
                <span className="sr-only">Email</span>
                <Mail size={20} />
              </a>
            </div>

            <div className="flex mt-auto flex-wrap gap-4 md:justify-end pb-0">
              <a 
                href="/Jonas_Castillo_Resume.pdf" 
                download="Jonas_Castillo_Resume.pdf"
                className="inline-flex shrink-0 items-center px-4 py-2 border border-black/10 dark:border-white/10 bg-white dark:bg-black shadow-sm rounded-full text-[10px] font-bold uppercase tracking-wider text-black/70 dark:text-white/70 hover:border-yellow-400 hover:text-black dark:hover:text-white transition-all group"
              >
                <FileText size={16} className="mr-2 group-hover:text-black dark:group-hover:text-white transition-colors" />
                Resume
              </a>
              <a 
                href="https://www.linkedin.com/in/jonas-castillo-617858308/" 
                target="_blank"
                rel="noreferrer"
                className="inline-flex shrink-0 items-center px-4 py-2 bg-[#fbbf24] border border-transparent shadow-sm rounded-full text-[10px] font-bold uppercase tracking-wider text-black dark:text-white hover:bg-blue-700 transition-all"
              >
                <Linkedin size={16} className="mr-2" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-6 pt-4 border-t border-black/10 dark:border-white/10 flex justify-between items-center text-xs text-black/70 dark:text-white/70 font-semibold">
          <p>© 2026 Jonas R. Castillo</p>
          <div className="w-8 h-8 rounded-full border border-yellow-400/50 bg-white dark:bg-black flex items-center justify-center overflow-hidden shadow-sm dark:shadow-none">
            <span className="text-[8px] text-black dark:text-white">JRC</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
