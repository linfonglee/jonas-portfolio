import { motion } from "motion/react";
import { Briefcase, Wrench } from "lucide-react";

export default function Experience() {
  const tools = [
    { name: "Microsoft 365", icon: "/microsoft-365.png" },
    { name: "Google Workspace", icon: "/google-workspace.png" },
    { name: "Slack Admin", icon: "/Slack_icon.png" },
    { name: "Azure/Entra ID", icon: "/Microsoft_azureentra_logo.png" },
    { name: "Jira", icon: "/jira.png" },
    { name: "Snipe-IT", icon: "/snipe-it.png" },
    { name: "Jamf", icon: "/jamf_software_logo.jpg" },
    { name: "Microsoft Intune", icon: "/microsoft intune.jpg" },
    { name: "TeamViewer", icon: "/teamviewer.png" }
  ];

  return (
    <section id="experience" className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-black/10 dark:border-white/10">
      <div className="flex items-center space-x-4 mb-12">
        <div className="w-12 h-[1px] bg-yellow-400 text-black dark:text-white" />
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-black dark:text-white uppercase">Skills & Experience</h2>
      </div>

      <div className="grid md:grid-cols-12 gap-8">
        <div className="md:col-span-4 text-black/70 dark:text-white/70">
          <div className="flex items-start gap-4 mb-4">
            <img 
              src="/helloconnect-logo.png" 
              alt="HelloConnect Logo" 
              className="h-14 w-auto object-contain bg-white dark:bg-white rounded-lg p-1.5 filter drop-shadow-sm border border-black/10 dark:border-white/10 shrink-0 mt-1"
            />
            <div>
              <h3 className="text-2xl font-bold text-black dark:text-white leading-tight mb-3">HelloConnect Inc.</h3>
              <p className="text-sm font-semibold text-black dark:text-white mb-2 bg-yellow-400/10 inline-block px-3 py-1 rounded-full border border-yellow-400/20">IT Support Engineer Intern</p>
              <p className="text-sm">January 2026 – May 2026</p>
            </div>
          </div>

          <div className="pt-8 md:pt-12">
            <h4 className="text-lg font-bold text-black dark:text-white mb-4 flex items-center">
              <Wrench className="w-5 h-5 mr-3 text-black dark:text-white" />
              Core Stack & Tools
            </h4>
            <div className="flex flex-wrap gap-2 mt-4">
              {tools.map((tool, idx) => (
                <div key={idx} className="flex items-center px-3 py-1.5 bg-white dark:bg-black border border-black/10 dark:border-white/10 hover:border-yellow-400/50 hover:text-black dark:hover:text-white rounded-full text-xs font-semibold text-black/70 dark:text-white/70 shadow-sm dark:shadow-none transition-all group">
                  <img src={tool.icon} alt={tool.name} className="w-4 h-4 mr-2 object-contain group-hover:scale-110 transition-transform" />
                  {tool.name}
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="md:col-span-8 space-y-6 text-black/70 dark:text-white/70">
          <div>
            <h4 className="text-lg font-bold text-black dark:text-white mb-4 flex items-center">
              <Briefcase className="w-5 h-5 mr-3 text-black dark:text-white" />
              Technical Experience & Milestones
            </h4>
            <ul className="space-y-4 font-normal text-sm leading-relaxed border-l border-black/10 dark:border-white/10 pl-6 ml-2">
              <li className="relative before:content-[''] before:absolute before:-left-[29px] before:top-1.5 before:w-2.5 before:h-2.5 before:bg-white dark:bg-black before:rounded-full before:border-2 before:border-yellow-400 before:shadow-sm">
                <strong className="text-black dark:text-white font-medium">Identity & Cloud Admin:</strong> Managed user lifecycles and zero-trust protocols for a high-headcount workforce using Google Workspace, Slack, and Microsoft Entra ID.
              </li>
              <li className="relative before:content-[''] before:absolute before:-left-[29px] before:top-1.5 before:w-2.5 before:h-2.5 before:bg-white dark:bg-black before:rounded-full before:border-2 before:border-yellow-400 before:shadow-sm">
                <strong className="text-black dark:text-white font-medium">ITSM & Operations:</strong> Resolved high-volume Jira tickets within strict SLA targets, managing SaaS procurement and cross-departmental technical solutions.
              </li>
              <li className="relative before:content-[''] before:absolute before:-left-[29px] before:top-1.5 before:w-2.5 before:h-2.5 before:bg-white dark:bg-black before:rounded-full before:border-2 before:border-yellow-400 before:shadow-sm">
                <strong className="text-black dark:text-white font-medium">Network Administration:</strong> Assisted in foundational network administration by configuring VLANs and supporting secure connectivity to help maintain optimized infrastructure performance.
              </li>
              <li className="relative before:content-[''] before:absolute before:-left-[29px] before:top-1.5 before:w-2.5 before:h-2.5 before:bg-white dark:bg-black before:rounded-full before:border-2 before:border-yellow-400 before:shadow-sm">
                <strong className="text-black dark:text-white font-medium">Endpoint & Remote Support:</strong> Provided hybrid MDM support for Windows (Intune) and macOS (Jamf), utilizing TeamViewer to minimize downtime for remote agents.
              </li>
              <li className="relative before:content-[''] before:absolute before:-left-[29px] before:top-1.5 before:w-2.5 before:h-2.5 before:bg-white dark:bg-black before:rounded-full before:border-2 before:border-yellow-400 before:shadow-sm">
                <strong className="text-black dark:text-white font-medium">Asset & Infrastructure:</strong> Ensured 100% hardware accountability via Snipe-IT and directed production floor deployments with a focus on ergonomic and cable management standards.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
