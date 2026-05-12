import { ExternalLink, Info } from "lucide-react";
import { useState } from "react";

export default function Projects() {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-300 dark:border-slate-700">
      <div className="flex items-center space-x-4 mb-12">
        <div className="w-12 h-[1px] bg-sky-500 text-white" />
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 dark:text-white uppercase">Projects</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-3xl overflow-hidden relative group hover:shadow-lg dark:hover:shadow-none hover:border-sky-500/50 transition-all backdrop-blur-sm flex flex-col">
          <div className="p-8 flex-1 flex flex-col">
            <div className="flex items-center space-x-3 mb-6">
              <h3 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">iDENTify</h3>
              <div className="relative flex items-center">
                <button 
                  className="text-slate-500 dark:text-slate-400 hover:text-sky-500 transition-colors"
                  onMouseEnter={() => setShowTooltip(true)}
                  onMouseLeave={() => setShowTooltip(false)}
                  onClick={() => setShowTooltip(!showTooltip)}
                >
                  <Info size={18} />
                </button>
                {showTooltip && (
                  <div className="absolute left-0 top-full mt-3 w-72 bg-white dark:bg-slate-900 text-xs text-slate-900 dark:text-white p-4 rounded-xl shadow-xl z-20 border border-slate-300 dark:border-slate-700 leading-relaxed">
                    <strong className="block mb-1">Note on Live Demo:</strong> 
                    The provided link is a feature-complete mirror of the original system. 
                    Because the production version handles live patient records at LPU-Batangas, 
                    the actual production environment is restricted to authorized medical personnel only 
                    to ensure Data Privacy Act compliance.
                  </div>
                )}
              </div>
            </div>
            
            <p className="text-sm font-semibold text-sky-500 uppercase tracking-widest mb-4">Patient Information and Treatment Tracker</p>
            
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" alt="MySQL" title="MySQL" className="w-7 h-7 hover:scale-110 transition-transform drop-shadow-sm" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" alt="HTML5" title="HTML5" className="w-7 h-7 hover:scale-110 transition-transform drop-shadow-sm" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" alt="PHP" title="PHP" className="w-7 h-7 hover:scale-110 transition-transform drop-shadow-sm" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt="JavaScript" title="JavaScript" className="w-7 h-7 hover:scale-110 transition-transform drop-shadow-sm" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" alt="Tailwind CSS" title="Tailwind CSS" className="w-7 h-7 hover:scale-110 transition-transform drop-shadow-sm" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg" alt="NPM" title="NPM" className="w-auto h-7 hover:scale-110 transition-transform drop-shadow-sm" />
              <img src="https://cdn.simpleicons.org/xampp/FB7A24" alt="XAMPP" title="XAMPP" className="w-7 h-7 hover:scale-110 transition-transform drop-shadow-sm" />
            </div>

            <p className="text-slate-500 dark:text-slate-400 font-normal leading-relaxed mb-8 flex-1">
              Developed and implemented <strong className="text-slate-900 dark:text-white font-bold">iDENTify</strong>, a specialized Patient Information and Treatment Tracker designed to modernize the Department of Dentistry's record-keeping. This project successfully transitioned the department from high-risk paper-based documentation to a secure, centralized digital platform, significantly improving data integrity and operational efficiency.
            </p>

            <div>
              <a 
                href="https://i-dent-ify.netlify.app/dashboard.html"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center px-6 py-3 bg-sky-500 text-white text-white border border-transparent shadow-sm hover:shadow text-xs font-bold uppercase tracking-widest rounded-full hover:bg-transparent hover:text-sky-500 hover:border-sky-500 transition-all"
              >
                View Live Mirror <ExternalLink size={14} className="ml-2" />
              </a>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-3xl overflow-hidden relative group hover:shadow-lg dark:hover:shadow-none hover:border-sky-500/50 transition-all backdrop-blur-sm flex flex-col">
          <div className="p-8 flex-1 flex flex-col">
            <h3 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">Personal Website Portfolio</h3>
            
            <p className="text-sm font-semibold text-sky-500 uppercase tracking-widest mb-4">Professional Showcase & Resume</p>
            
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="React" title="React" className="w-7 h-7 hover:scale-110 transition-transform drop-shadow-sm" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" alt="Tailwind CSS" title="Tailwind CSS" className="w-7 h-7 hover:scale-110 transition-transform drop-shadow-sm" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt="JavaScript" title="JavaScript" className="w-7 h-7 hover:scale-110 transition-transform drop-shadow-sm" />
            </div>

            <p className="text-slate-500 dark:text-slate-400 font-normal leading-relaxed mb-8 flex-1">
              Designed and developed to showcase my skills in web development, UI/UX design, and technical problem-solving. This platform features a responsive architecture and user-focused design to highlight my hands-on experience in cloud and endpoint management. It serves as a professional showcase of my ability to bridge aesthetic interface design with high-performance technical infrastructure.
            </p>

            <div>
              <a 
                href="#"
                onClick={(e) => e.preventDefault()}
                className="inline-flex items-center px-6 py-3 bg-sky-500 text-white text-white border border-transparent shadow-sm hover:shadow text-xs font-bold uppercase tracking-widest rounded-full hover:bg-transparent hover:text-sky-500 hover:border-sky-500 transition-all"
              >
                View Live Mirror <ExternalLink size={14} className="ml-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
