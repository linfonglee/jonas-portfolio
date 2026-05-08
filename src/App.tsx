/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Education from './components/Education';
import Badges from './components/Badges';
import Certifications from './components/Certifications';
import Projects from './components/Projects';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative bg-slate-200 dark:bg-slate-950 min-h-screen font-sans antialiased text-slate-900 dark:text-white overflow-x-hidden">
      {/* Tech Grid Background */}
      <div className="fixed inset-0 z-0 bg-[linear-gradient(to_right,var(--grid-color)_1px,transparent_1px),linear-gradient(to_bottom,var(--grid-color)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-[0.5] pointer-events-none" />
      
      <div className="relative z-10 w-full">
        <Navbar />
        <main>
          <Hero />
          <Experience />
          <Education />
          <Badges />
          <Certifications />
          <Projects />
        </main>
        <Footer />
      </div>
    </div>
  );
}
