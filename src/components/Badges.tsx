import { useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Badges() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const defaultSrc = "//cdn.credly.com/assets/utilities/embed.js";
    const existingScript = document.querySelector(`script[src="${defaultSrc}"]`);
    
    if (!existingScript) {
      const script = document.createElement("script");
      script.src = defaultSrc;
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = direction === 'left' ? -340 : 340;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const badges = [
    {
      id: "bdcd8a14-11bd-481e-9d97-0f5a0e8e797a",
      title: "Google IT Support Professional Certificate",
      issuer: "Coursera",
    },
    {
      id: "0a398f2a-b386-4479-a356-495ef0dd26dc",
      title: "Cybersecurity Essentials",
      issuer: "Coursera",
    },
    {
      id: "4988bc88-70f6-4c28-9f6d-959a2e48cf51",
      title: "AI Fundamentals with IBM SkillsBuild",
      issuer: "CISCO",
    },
    {
      id: "21a1167a-4628-4017-a21c-12dc3cad2b72",
      title: "Artificial Intelligence Fundamentals",
      issuer: "IMB SkillsBuild",
    },
    {
      id: "fe0ba833-f8b8-4cd7-bfb6-b8addff879fd",
      title: "CCNA: Introduction to Networks",
      issuer: "CISCO",
    },
    {
      id: "6736ed30-9eb8-4a98-b9db-c886d95c0653",
      title: "Advanced Deep Learning Specialist",
      issuer: "Coursera",
    },
    {
      id: "c68316a8-a44c-4c86-933e-32e26a9b433f",
      title: "Deep Learning Essentials with Keras",
      issuer: "Coursera",
    },
    {
      id: "df695741-8f2b-4830-8075-6e03a3756a12",
      title: "Networking Basics",
      issuer: "CISCO",
    },
    {
      id: "bf40b7b9-26bd-4b66-b8f5-7a81775b782b",
      title: "Microsoft Office Specialist: Excel Associate",
      issuer: "Microsoft",
    }
  ];

  return (
    <section id="badges" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-300 dark:border-slate-700">
      <div className="flex items-center justify-between mb-12">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-[1px] bg-sky-500 text-white" />
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 dark:text-white uppercase">Badges</h2>
        </div>
        
        <div className="flex space-x-2">
          <button 
            onClick={() => scroll('left')}
            className="p-2 rounded-full border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 hover:bg-sky-500/10 text-slate-500 dark:text-slate-400 hover:text-sky-500 transition-all shadow-sm"
            aria-label="Scroll left"
          >
            <ChevronLeft size={20} />
          </button>
          <button 
            onClick={() => scroll('right')}
            className="p-2 rounded-full border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 hover:bg-sky-500/10 text-slate-500 dark:text-slate-400 hover:text-sky-500 transition-all shadow-sm"
            aria-label="Scroll right"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Grid with interactive scroll / overflow */}
      <div 
        ref={scrollRef}
        className="overflow-x-auto pb-8 custom-scrollbar scroll-smooth"
      >
        <div className="flex space-x-8 min-w-max">
          {badges.map((badge, idx) => (
            <div key={idx} className="bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-2xl p-6 flex flex-col items-center justify-center min-w-[320px] text-center hover:border-sky-500/50 hover:shadow dark:hover:shadow-none transition-all group backdrop-blur-sm">
              <div className="bg-white mb-4 overflow-hidden w-[300px] h-[270px] mx-auto border border-slate-100 dark:border-slate-800">
                <div 
                  data-iframe-width="300" 
                  data-iframe-height="270" 
                  data-share-badge-id={badge.id} 
                  data-share-badge-host="https://www.credly.com"
                />
              </div>
              <h3 className="font-bold text-base text-slate-900 dark:text-white mb-2 group-hover:text-sky-500 transition-colors">{badge.title}</h3>
              <p className="font-semibold text-xs uppercase text-slate-500 dark:text-slate-400">Issued by {badge.issuer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
