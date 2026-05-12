import { motion } from "motion/react";
import { Briefcase, Wrench } from "lucide-react";

export default function Experience() {
  const tools = [
    "Microsoft 365", "Google Workspace", "Slack Admin", "Azure/Entra ID",
    "Jira", "Snipe-IT", "Jamf", "Microsoft Intune", "TeamViewer"
  ];

  return (
    <section id="experience" className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-300 dark:border-slate-700">
      <div className="flex items-center space-x-4 mb-12">
        <div className="w-12 h-[1px] bg-sky-500 text-white" />
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 dark:text-white uppercase">Skills & Experience</h2>
      </div>

      <div className="grid md:grid-cols-12 gap-8">
        <div className="md:col-span-4 text-slate-500 dark:text-slate-400">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Hello Connect, Philippines</h3>
          <p className="text-sm font-semibold text-sky-500 mb-4 bg-sky-500/10 inline-block px-3 py-1 rounded-full border border-sky-500/20">IT Support Engineer Intern</p>
          <p className="text-sm">January 2026 – May 2026</p>
        </div>
        
        <div className="md:col-span-8 space-y-6 text-slate-500 dark:text-slate-400">
          <div>
            <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center">
              <Briefcase className="w-5 h-5 mr-3 text-sky-500" />
              Technical Experience & Milestones
            </h4>
            <ul className="space-y-4 font-normal text-sm leading-relaxed border-l border-slate-300 dark:border-slate-700 pl-6 ml-2">
              <li className="relative before:content-[''] before:absolute before:-left-[29px] before:top-1.5 before:w-2.5 before:h-2.5 before:bg-white dark:bg-slate-900 before:rounded-full before:border-2 before:border-sky-500 before:shadow-sm">
                <strong className="text-slate-900 dark:text-white font-medium">Identity & Cloud Admin:</strong> Managed user lifecycles and zero-trust protocols for a high-headcount workforce using Google Workspace, Slack, and Microsoft Entra ID.
              </li>
              <li className="relative before:content-[''] before:absolute before:-left-[29px] before:top-1.5 before:w-2.5 before:h-2.5 before:bg-white dark:bg-slate-900 before:rounded-full before:border-2 before:border-sky-500 before:shadow-sm">
                <strong className="text-slate-900 dark:text-white font-medium">ITSM & Operations:</strong> Resolved high-volume Jira tickets within strict SLA targets, managing SaaS procurement and cross-departmental technical solutions.
              </li>
              <li className="relative before:content-[''] before:absolute before:-left-[29px] before:top-1.5 before:w-2.5 before:h-2.5 before:bg-white dark:bg-slate-900 before:rounded-full before:border-2 before:border-sky-500 before:shadow-sm">
                <strong className="text-slate-900 dark:text-white font-medium">Network Administration:</strong> Assisted in foundational network administration by configuring VLANs and supporting secure connectivity to help maintain optimized infrastructure performance.
              </li>
              <li className="relative before:content-[''] before:absolute before:-left-[29px] before:top-1.5 before:w-2.5 before:h-2.5 before:bg-white dark:bg-slate-900 before:rounded-full before:border-2 before:border-sky-500 before:shadow-sm">
                <strong className="text-slate-900 dark:text-white font-medium">Endpoint & Remote Support:</strong> Provided hybrid MDM support for Windows (Intune) and macOS (Jamf), utilizing TeamViewer to minimize downtime for remote agents.
              </li>
              <li className="relative before:content-[''] before:absolute before:-left-[29px] before:top-1.5 before:w-2.5 before:h-2.5 before:bg-white dark:bg-slate-900 before:rounded-full before:border-2 before:border-sky-500 before:shadow-sm">
                <strong className="text-slate-900 dark:text-white font-medium">Asset & Infrastructure:</strong> Ensured 100% hardware accountability via Snipe-IT and directed production floor deployments with a focus on ergonomic and cable management standards.
              </li>
            </ul>
          </div>

          <div className="pt-8">
            <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center">
              <Wrench className="w-5 h-5 mr-3 text-sky-500" />
              Core Stack & Tools
            </h4>
            <div className="flex flex-wrap gap-2 mt-4">
              {tools.map((tool, idx) => (
                <div key={idx} className="px-3 py-1.5 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 hover:border-sky-500/50 hover:text-sky-500 rounded-full text-xs font-semibold text-slate-500 dark:text-slate-400 shadow-sm dark:shadow-none transition-all">
                  {tool}
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
               {["SLA Compliance", "Inventory Auditing", "Remote Troubleshooting", "Technical Documentation"].map((competency, idx) => (
                <div key={idx} className="px-3 py-1 shrink-0 text-xs text-slate-500 dark:text-slate-400 border-b border-slate-300 dark:border-slate-700">
                  {competency}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
