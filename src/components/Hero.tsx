import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen relative flex items-center overflow-hidden pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-white dark:bg-black" />
      
      {/* Dramatic Grid/Dot Pattern Background */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)] dark:bg-[radial-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)] [background-size:24px_24px] opacity-40 dark:opacity-30 [mask-image:linear-gradient(to_bottom,white,transparent)]" />
      
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-yellow-400/10 rounded-full blur-[120px] pointer-events-none mix-blend-multiply dark:mix-blend-screen" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-yellow-500/10 rounded-full blur-[100px] pointer-events-none mix-blend-multiply dark:mix-blend-screen" />
      
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-8 max-w-3xl"
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5rem] font-black tracking-tight text-black dark:text-white leading-[1.05]">
              Hi, I'm <br className="hidden sm:block" />
              <span className="text-yellow-400">
                Jonas Castillo
              </span>
            </h1>

            {/* Subheadline/Description */}
            <p className="text-lg md:text-xl text-black/70 dark:text-white/70 leading-relaxed font-normal max-w-2xl">
              Infrastructure Specialist specializing in architecting secure enterprise systems and maintaining high-availability networks. Dedicated to operational excellence through proactive identity management and cloud optimization.
            </p>
          </motion.div>

          {/* Right side Illustration / Avatar & Buttons */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
            className="w-full relative flex flex-col items-center lg:items-end mt-8 lg:mt-0"
          >
            <div className="relative w-full aspect-square sm:aspect-[4/3] max-w-[500px] mb-8 rounded-[2rem] overflow-hidden border border-black/10 dark:border-white/10 shadow-xl bg-white dark:bg-black group">
              {/* Clean minimal background pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-transparent dark:from-white/5 dark:to-transparent" />
              <div className="absolute inset-0 bg-[radial-gradient(rgba(0,0,0,0.05)_1px,transparent_1px)] dark:bg-[radial-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:20px_20px] opacity-50" />
              
              <div className="absolute inset-0 flex items-center justify-center">
                 <div className="w-32 h-32 rounded-full border border-black/10 dark:border-white/10 bg-white dark:bg-[#0a0a0a] shadow-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-700 ease-out">
                    <span className="text-4xl font-light tracking-widest text-black dark:text-white ml-2">JC</span>
                 </div>
              </div>
            </div>

            {/* Call to Actions - Moved underneath image container */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 w-full max-w-[500px]">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group relative inline-flex items-center justify-center px-8 py-3.5 text-sm font-bold text-black dark:text-black transition-all duration-200 bg-yellow-400 rounded-full hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 shadow-lg shadow-yellow-400/25 overflow-hidden"
              >
                <span className="relative translate-x-2 group-hover:translate-x-0 transition-transform duration-200 ease-out">
                  Contact Me
                </span>
                <span className="relative translate-x-8 opacity-0 group-hover:translate-x-3 group-hover:opacity-100 transition-all duration-200 ease-out">
                  <ArrowRight className="w-4 h-4" />
                </span>
              </a>
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-8 py-3.5 rounded-full border border-black/10 dark:border-white/10 text-black/70 dark:text-white/70 font-bold text-sm tracking-wide hover:bg-black/5 dark:hover:bg-white/5 transition-colors shadow-sm"
              >
                View Work
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
