import { useState } from "react";

type Category = "All" | "Security & Operating Systems" | "Emerging Tech & Productivity" | "IT Support & Networking";

export default function Certifications() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const certs = [
    {
      title: "IT Security: Defense against the digital dark arts",
      date: "April 28, 2026",
      issuer: "Google - Coursera",
      link: "https://www.coursera.org/account/accomplishments/verify/49ZBB2N1I5KV",
      category: "Security & Operating Systems",
      logo: "/google-coursera.png"
    },
    {
      title: "Operating Systems and You: Becoming a Power User",
      date: "April 27, 2026",
      issuer: "Google - Coursera",
      link: "https://coursera.org/verify/IY4EKCSF3BFA",
      category: "Security & Operating Systems",
      logo: "/google-coursera.png"
    },
    {
      title: "Introduction to Computers and Operating Systems and Security",
      date: "March 26, 2026",
      issuer: "Microsoft - Coursera",
      link: "https://coursera.org/verify/OQBEO05C15E4",
      category: "Security & Operating Systems",
      logo: "/microsoft-certiport.png"
    },
    {
      title: "Partner: NDG Linux Unhatched",
      date: "April 25, 2024",
      issuer: "Cisco Networking Academy",
      link: null,
      category: "Security & Operating Systems",
      logo: "/cisco.png"
    },
    {
      title: "AI Fundamentals with IBM SkillsBuild",
      date: "March 21, 2025",
      issuer: "Cisco Networking Academy",
      link: null,
      category: "Emerging Tech & Productivity",
      logo: "/cisco.png"
    },
    {
      title: "Introduction to Machine Learning",
      date: "May 22, 2025",
      issuer: "Duke University - Coursera",
      link: "https://coursera.org/verify/7TDKO5C9M6PY",
      category: "Emerging Tech & Productivity",
      logo: "/duke-coursera.png"
    },
    {
      title: "Introduction to Deep Learning & Neural Networks with Keras",
      date: "May 22, 2025",
      issuer: "IBM - Coursera",
      link: "https://coursera.org/verify/OW2OC2F4BYZD",
      category: "Emerging Tech & Productivity",
      logo: "/ibm-coursera.png"
    },
    {
      title: "Microsoft Office Specialist: Excel Associate (Microsoft 365 Apps)",
      date: "January 9, 2026",
      issuer: "Microsoft - Certiport (Credential ID: wan4V-Fa7b)",
      link: null,
      category: "Emerging Tech & Productivity",
      logo: "/microsoft-certiport.png"
    },
    {
      title: "Google IT Support Professional Certificate",
      date: "April 28, 2026",
      issuer: "Google - Coursera",
      link: "https://coursera.org/verify/professional-cert/5OWWZH0XYJB5",
      category: "IT Support & Networking",
      logo: "/google-coursera.png"
    },
    {
      title: "Technical Support Fundamentals",
      date: "April 10, 2026",
      issuer: "Google - Coursera",
      link: "https://coursera.org/verify/2KKRMAS5B41R",
      category: "IT Support & Networking",
      logo: "/google-coursera.png"
    },
    {
      title: "CCNAv7: Introduction to Networks",
      date: "July 10, 2024",
      issuer: "Cisco Networking Academy",
      link: null,
      category: "IT Support & Networking",
      logo: "/cisco.png"
    },
    {
      title: "System Administration and IT Infrastructure Services",
      date: "April 28, 2026",
      issuer: "Google - Coursera",
      link: "https://www.coursera.org/account/accomplishments/verify/IE8O58DH1G9Z",
      category: "IT Support & Networking",
      logo: "/google-coursera.png"
    }
  ];

  const filteredCerts = activeCategory === "All" 
    ? certs 
    : certs.filter(c => c.category === activeCategory);

  const categories: Category[] = ["All", "Security & Operating Systems", "Emerging Tech & Productivity", "IT Support & Networking"];

  return (
    <section id="certifications" className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-black/10 dark:border-white/10">
      <div className="flex items-center space-x-4 mb-12">
        <div className="w-12 h-[1px] bg-yellow-400 text-black dark:text-white" />
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-black dark:text-white uppercase">Certifications</h2>
      </div>

      <div className="flex flex-wrap gap-2 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-widest transition-all ${
              activeCategory === cat 
                ? "bg-yellow-400 text-black dark:text-white shadow" 
                : "bg-white dark:bg-black border border-black/10 dark:border-white/10 text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white hover:border-yellow-400/50 shadow-sm"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCerts.map((cert, idx) => (
          <div key={idx} className="bg-white dark:bg-black p-6 rounded-2xl border border-black/10 dark:border-white/10 hover:border-yellow-400/50 shadow-sm hover:shadow transition-all flex flex-col justify-between group backdrop-blur-sm">
            <div>
              <div className="flex justify-between items-start mb-4">
                <p className="text-[10px] uppercase font-bold text-black dark:text-white">{cert.category}</p>
                <img 
                  src={cert.logo} 
                  alt={cert.issuer}
                  className="w-10 h-10 object-contain rounded bg-white dark:bg-white p-1 border border-black/10 dark:border-white/10"
                  onError={(e) => {
                    const fallbackName = cert.issuer.split(' ')[0];
                    e.currentTarget.src = `https://ui-avatars.com/api/?name=${fallbackName}&background=0EA5E9&color=FFFFFF&font-size=0.33&rounded=true`;
                  }}
                />
              </div>
              <h3 className="text-sm font-bold text-black dark:text-white mb-2 leading-snug group-hover:text-black dark:group-hover:text-white transition-colors">{cert.title}</h3>
              <p className="text-xs font-medium text-black/70 dark:text-white/70 mb-1">{cert.issuer}</p>
              <p className="text-xs font-semibold text-black/70 dark:text-white/70">{cert.date}</p>
            </div>
            
            {cert.link && (
              <a 
                href={cert.link} 
                target="_blank" 
                rel="noreferrer"
                className="mt-6 inline-flex items-center text-xs font-semibold text-black dark:text-white hover:text-black dark:hover:text-white transition-colors underline underline-offset-4"
              >
                Verify Credential →
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
