export default function Badges() {
  const badges = [
    {
      id: "bdcd8a14-11bd-481e-9d97-0f5a0e8e797a",
      title: "Google IT Support Professional Certificate",
      issuer: "Google - Coursera",
      image: "https://images.credly.com/size/680x680/images/ccfd87c6-edad-4138-80cb-d49d1453d6e5/blob"
    },
    {
      id: "0a398f2a-b386-4479-a356-495ef0dd26dc",
      title: "Cybersecurity Essentials",
      issuer: "Cisco Networking Academy",
      image: "https://images.credly.com/size/680x680/images/c1426860-8205-4220-a0d5-5e6d4f07db17/blob"
    },
    {
      id: "4988bc88-70f6-4c28-9f6d-959a2e48cf51",
      title: "AI Fundamentals with IBM SkillsBuild",
      issuer: "IBM SkillsBuild",
      image: "https://images.credly.com/size/680x680/images/26c21273-c0ab-485b-98a7-f1212dcb82b8/image.png"
    },
    {
      id: "21a1167a-4628-4017-a21c-12dc3cad2b72",
      title: "Artificial Intelligence Fundamentals",
      issuer: "IBM SkillsBuild",
      image: "https://images.credly.com/size/680x680/images/82b908e1-fdcd-4785-9d32-97f11ccbcf08/image.png"
    },
    {
      id: "fe0ba833-f8b8-4cd7-bfb6-b8addff879fd",
      title: "CCNA: Introduction to Networks",
      issuer: "Cisco Networking Academy",
      image: "https://images.credly.com/size/680x680/images/70d71df5-f3dc-4380-9b9d-f22513a70417/CCNAITN__1_.png"
    },
    {
      id: "6736ed30-9eb8-4a98-b9db-c886d95c0653",
      title: "Advanced Deep Learning Specialist",
      issuer: "Coursera",
      image: "https://images.credly.com/size/680x680/images/3e91c6f6-1d05-4b40-9005-4344e35edaff/Coursera_20Advanced_20Deep_20Learning_20Specialist.png"
    },
    {
      id: "c68316a8-a44c-4c86-933e-32e26a9b433f",
      title: "Deep Learning Essentials with Keras",
      issuer: "IBM - Coursera",
      image: "https://images.credly.com/size/680x680/images/91de936a-1322-446d-9ea6-949d78c57428/image.png"
    },
    {
      id: "df695741-8f2b-4830-8075-6e03a3756a12",
      title: "Networking Basics",
      issuer: "Cisco Networking Academy",
      image: "https://images.credly.com/size/680x680/images/5bdd6a39-3e03-4444-9510-ecff80c9ce79/image.png"
    },
    {
      id: "bf40b7b9-26bd-4b66-b8f5-7a81775b782b",
      title: "Microsoft Office Specialist: Excel Associate",
      issuer: "Microsoft",
      image: "https://images.credly.com/size/680x680/images/af151b3d-9453-48a8-8d22-5b9fc54d2b43/image.png"
    }
  ];

  return (
    <section id="badges" className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-black/10 dark:border-white/10">
      <div className="flex items-center space-x-4 mb-12">
        <div className="w-12 h-[1px] bg-yellow-400 text-black dark:text-white" />
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-black dark:text-white uppercase">Badges</h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {badges.map((badge, idx) => (
          <div key={idx} className="flex flex-col items-center text-center justify-between group bg-white dark:bg-black p-6 rounded-2xl border border-black/10 dark:border-white/10 shadow-sm hover:border-yellow-400 dark:hover:border-yellow-400/50 hover:shadow-md transition-all h-full">
            <div className="w-32 h-32 mb-6 relative flex items-center justify-center">
              <img 
                src={badge.image} 
                alt={badge.title} 
                className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                style={{ filter: "drop-shadow(0 4px 6px rgba(0,0,0,0.1))" }}
                onError={(e) => {
                  const fallbackName = badge.issuer.split(' ')[0];
                  e.currentTarget.src = `https://ui-avatars.com/api/?name=${fallbackName}&background=0EA5E9&color=FFFFFF&font-size=0.33&rounded=true`;
                }}
              />
            </div>
            <div className="flex flex-col items-center flex-grow justify-between w-full">
              <h3 className="text-sm font-bold text-black dark:text-white leading-snug mb-4">{badge.title}</h3>
              
              <a 
                href={`https://www.credly.com/badges/${badge.id}/public_url`}
                target="_blank" 
                rel="noreferrer"
                className="mt-auto inline-flex items-center px-4 py-2 rounded-full border border-black/10 dark:border-white/10 text-[10px] font-bold uppercase tracking-widest text-black/70 dark:text-white/70 hover:border-yellow-400 hover:text-black dark:hover:text-white transition-all bg-white dark:bg-black"
              >
                Verify Credential →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
