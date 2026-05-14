import { motion } from "motion/react";
import { GraduationCap } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-black/10 dark:border-white/10">
      <div className="flex items-center space-x-4 mb-12">
        <div className="w-12 h-[1px] bg-yellow-400 text-black dark:text-white" />
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-black dark:text-white uppercase">Education</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-black p-8 border border-black/10 dark:border-white/10 rounded-2xl relative overflow-hidden shadow-sm dark:shadow-none hover:shadow dark:hover:shadow-none hover:border-yellow-400/50 transition-all group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-yellow-400/10 dark:from-yellow-400/20 to-transparent rounded-bl-full transition-transform group-hover:scale-110" />
          <div className="relative z-10">
            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 mb-6">
              <img 
                src="/lpu-logo-.png" 
                alt="LPU Batangas" 
                className="w-16 h-16 object-contain rounded-xl bg-white dark:bg-white p-2 mb-4 sm:mb-0 shadow-sm border border-yellow-400/20" 
                onError={(e) => {
                  e.currentTarget.src = "https://ui-avatars.com/api/?name=LPU&background=0EA5E9&color=FFFFFF&font-size=0.33&rounded=true";
                }}
              />
              <div>
                <h3 className="text-xl font-medium text-black dark:text-white mb-2 group-hover:text-black dark:group-hover:text-white transition-colors">Lyceum of the Philippines University - Batangas</h3>
                <p className="font-semibold text-xs text-black/70 dark:text-white/70 uppercase tracking-widest">College - August 2026</p>
              </div>
            </div>
            
            <p className="text-black dark:text-white font-medium text-sm mb-4">Bachelor of Science in Information and Technology Major in Multimedia Technology</p>
            
            <ul className="space-y-3 text-sm text-black/70 dark:text-white/70 font-normal">
              <li className="flex items-start">
                <span className="text-black dark:text-white mr-3 font-bold">→</span>
                <span>Proficient in diagnosing and repairing hardware, software, and operating system issues to maintain peak technical performance.</span>
              </li>
              <li className="flex items-start">
                <span className="text-black dark:text-white mr-3 font-bold">→</span>
                <span>Skilled in configuring and managing network infrastructure, including routers, switches, and secure connectivity protocols.</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-white dark:bg-black p-8 border border-black/10 dark:border-white/10 rounded-2xl relative overflow-hidden shadow-sm dark:shadow-none hover:shadow dark:hover:shadow-none hover:border-yellow-400/50 transition-all group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-yellow-400/10 dark:from-yellow-400/20 to-transparent rounded-bl-full transition-transform group-hover:scale-110" />
          <div className="relative z-10">
            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 mb-6">
              <img 
                src="/mabini-logo-.png" 
                alt="The Mabini Academy" 
                className="w-16 h-16 object-contain rounded-xl bg-white dark:bg-white p-2 mb-4 sm:mb-0 shadow-sm border border-yellow-400/20" 
                onError={(e) => {
                  e.currentTarget.src = "https://ui-avatars.com/api/?name=TMA&background=0EA5E9&color=FFFFFF&font-size=0.33&rounded=true";
                }}
              />
              <div>
                <h3 className="text-xl font-medium text-black dark:text-white mb-2 group-hover:text-black dark:group-hover:text-white transition-colors">The Mabini Academy</h3>
                <p className="font-semibold text-xs text-black/70 dark:text-white/70 uppercase tracking-widest">Senior Highschool - 2021</p>
              </div>
            </div>
            
            <p className="text-black dark:text-white font-medium text-sm mb-4">Science, Technology, Engineering, and Mathematic</p>
            
            <ul className="space-y-3 text-sm text-black/70 dark:text-white/70 font-normal">
              <li className="flex items-start">
                <span className="text-black dark:text-white mr-3 font-bold">→</span>
                <span><strong className="text-black dark:text-white">Structured Cabling & Termination:</strong> Proficient in terminating and testing Twisted Pair cables (Cat5e, Cat6) using RJ45 connectors following TIA/EIA-568A/B standards.</span>
              </li>
              <li className="flex items-start">
                <span className="text-black dark:text-white mr-3 font-bold">→</span>
                <span><strong className="text-black dark:text-white">Physical Layer Troubleshooting:</strong> Skilled in using LAN testers to identify and resolve connectivity issues such as shorts, open circuits, or crossed wires.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
