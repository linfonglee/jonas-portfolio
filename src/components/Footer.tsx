import { Mail, Github, Linkedin, FileText } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-300 dark:border-slate-700 relative z-10 bg-transparent">
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <div className="w-12 h-[1px] bg-sky-500 text-white mb-8" />
          <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-2">Jonas R. Castillo</h2>
          <p className="font-semibold text-sm uppercase tracking-widest text-sky-500 mb-8">IT Support Engineer</p>
          
          <address className="not-italic text-sm text-slate-500 dark:text-slate-400 space-y-1 font-normal">
            <p>San Benito, Lipa City, Batangas, 4217</p>
            <p>
              <a href="mailto:castillojonasramos@gmail.com" className="hover:text-sky-500 transition-colors flex items-center mt-4 group">
                <Mail size={16} className="mr-2 group-hover:scale-110 transition-transform" />
                castillojonasramos@gmail.com
              </a>
            </p>
          </address>
        </div>

        <div className="md:text-right flex flex-col md:items-end justify-between">
          <div className="flex space-x-6 mb-12 md:mb-0">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-slate-500 dark:text-slate-400 hover:text-sky-500 hover:-translate-y-1 transition-all">
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

          <div className="flex flex-wrap gap-4 md:justify-end">
            <a 
              href="#" 
              className="inline-flex items-center px-6 py-3 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-sm rounded-full text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 hover:border-sky-500 hover:text-sky-500 hover:shadow transition-all"
            >
              <FileText size={16} className="mr-2" />
              Resume
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center px-6 py-3 bg-blue-600 border border-transparent shadow-sm rounded-full text-xs font-bold uppercase tracking-widest text-white hover:bg-blue-800 text-white hover:shadow transition-all"
            >
              <Linkedin size={16} className="mr-2" />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
      
      <div className="mt-24 pt-8 border-t border-slate-300 dark:border-slate-700 flex justify-between items-center text-xs text-slate-500 dark:text-slate-400 font-semibold">
        <p>© 2026 Jonas R. Castillo</p>
        <div className="w-8 h-8 rounded-full border border-sky-500/50 bg-white dark:bg-slate-900 flex items-center justify-center overflow-hidden shadow-sm dark:shadow-none">
          <span className="text-[8px] text-sky-500">JRC</span>
        </div>
      </div>
    </footer>
  );
}
