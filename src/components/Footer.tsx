import { Mail, Github, Linkedin, FileText } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="relative z-10 w-full bg-slate-100 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:48px_48px]"></div>
      
      <div className="py-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <div className="w-12 h-[2px] bg-sky-400 mb-4" />
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#111827] dark:text-white mb-1 tracking-tight">Jonas R. Castillo</h2>
            <p className="font-bold text-xs uppercase tracking-widest text-[#0EA5E9] mb-4">IT Support Engineer</p>
            
            <address className="not-italic text-sm text-slate-500 dark:text-slate-400 space-y-1 font-medium">
              <p>San Benito, Lipa City, Batangas, 4217</p>
              <p>
                <a href="mailto:castillojonasramos@gmail.com" className="hover:text-sky-500 transition-colors flex items-center group w-max">
                  <Mail size={16} className="mr-2 group-hover:scale-110 transition-transform" />
                  castillojonasramos@gmail.com
                </a>
              </p>
            </address>
          </div>

          <div className="flex flex-col md:items-end h-full">
            <div className="flex space-x-6 mb-4 mt-2">
              <a href="https://www.linkedin.com/in/jonas-castillo-617858308/" target="_blank" rel="noreferrer" className="text-slate-500 dark:text-slate-400 hover:text-sky-500 hover:-translate-y-1 transition-all">
                <span className="sr-only">LinkedIn</span>
                <Linkedin size={20} />
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="text-slate-500 dark:text-slate-400 hover:text-sky-500 hover:-translate-y-1 transition-all">
                <span className="sr-only">GitHub</span>
                <Github size={20} />
              </a>
              <a href="mailto:castillojonasramos@gmail.com" className="text-slate-500 dark:text-slate-400 hover:text-sky-500 hover:-translate-y-1 transition-all">
                <span className="sr-only">Email</span>
                <Mail size={20} />
              </a>
            </div>

            <div className="flex mt-auto flex-wrap gap-4 md:justify-end pb-0">
              <a 
                href="/Jonas_Castillo_Resume.pdf" 
                download="Jonas_Castillo_Resume.pdf"
                className="inline-flex shrink-0 items-center px-4 py-2 border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-sm rounded-full text-[10px] font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 hover:border-sky-500 hover:text-sky-500 transition-all group"
              >
                <FileText size={16} className="mr-2 group-hover:text-sky-500 transition-colors" />
                Resume
              </a>
              <a 
                href="https://www.linkedin.com/in/jonas-castillo-617858308/" 
                target="_blank"
                rel="noreferrer"
                className="inline-flex shrink-0 items-center px-4 py-2 bg-[#475df8] border border-transparent shadow-sm rounded-full text-[10px] font-bold uppercase tracking-wider text-white hover:bg-blue-700 transition-all"
              >
                <Linkedin size={16} className="mr-2" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800 flex justify-between items-center text-xs text-slate-500 dark:text-slate-400 font-semibold">
          <p>© 2026 Jonas R. Castillo</p>
          <div className="w-8 h-8 rounded-full border border-sky-500/50 bg-white dark:bg-slate-800 flex items-center justify-center overflow-hidden shadow-sm dark:shadow-none">
            <span className="text-[8px] text-sky-500">JRC</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
