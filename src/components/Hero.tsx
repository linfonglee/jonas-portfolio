import { motion } from "motion/react";
import { Facebook, Instagram, Github, Linkedin, Dribbble, Twitter } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      {/* Background decorations */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-sky-500/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="space-y-8 max-w-3xl relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6">
            Hi, I'm Jonas <span className="text-sky-500">Castillo</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 leading-relaxed font-normal mb-8">
            IT Support Engineer specializing in architecting secure enterprise infrastructures and maintaining high-availability network systems. Dedicated to operational excellence through proactive identity management, cloud optimization, and the strategic deployment of scalable digital environments.
          </p>
          
          <div className="flex flex-wrap items-center gap-4 mb-8">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-3 rounded-full bg-sky-500 text-white font-bold tracking-wide hover:opacity-90 transition-opacity shadow-lg shadow-sky-500/20"
            >
              Contact Me
            </a>
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-3 rounded-full border-2 border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-bold tracking-wide hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors hover:border-sky-500/50 hover:text-sky-500 dark:hover:text-sky-500"
            >
              View Work
            </a>
          </div>

          <div className="flex items-center gap-5 text-slate-500 dark:text-slate-400">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-sky-500 transition-colors">
              <Facebook size={24} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-sky-500 transition-colors">
              <Instagram size={24} />
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-sky-500 transition-colors">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-sky-500 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="https://dribbble.com" target="_blank" rel="noreferrer" className="hover:text-sky-500 transition-colors">
              <Dribbble size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-sky-500 transition-colors">
              <Twitter size={24} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
