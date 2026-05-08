import { useState, useEffect } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    // Check initial state from document element or localStorage
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved === 'dark') {
        document.documentElement.classList.add("dark");
        return true;
      } else if (saved === 'light') {
        document.documentElement.classList.remove("dark");
        return false;
      }
    }
    return document.documentElement.classList.contains("dark");
  });

  const toggleDarkMode = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem('theme', 'light');
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Skills & Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Badge", href: "#badges" },
    { name: "Certifications", href: "#certifications" },
    { name: "Projects", href: "#projects" },
    { name: "Contact Me", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
        scrolled 
          ? "bg-slate-50/90 dark:bg-slate-900/90 backdrop-blur-md border-slate-300 dark:border-slate-800 shadow-sm dark:shadow-none" 
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 font-bold text-lg tracking-tight text-sky-500">
            Jonas R. Castillo
          </div>
          
          <div className="flex items-center space-x-6">
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-6 text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="font-bold hover:text-sky-500 transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  {link.name}
                </a>
              ))}
            </div>

            <button
              onClick={toggleDarkMode}
              className="text-slate-500 dark:text-slate-400 hover:text-sky-500 transition-colors focus:outline-none p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800"
              aria-label="Toggle Dark Mode"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-slate-500 dark:text-slate-400 hover:text-sky-500 focus:outline-none p-2"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-b border-slate-300 dark:border-slate-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-2 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-sky-500 rounded-md transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  setIsOpen(false);
                  document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
