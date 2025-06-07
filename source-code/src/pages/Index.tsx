import { useEffect, useState } from 'react';
import Hero from '../components/Hero';
import Navigation from '../components/Navigation';
import About from '../components/About';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import MatrixRain from '../components/MatrixRain';
import ScanLine from '../components/ScanLine';

const Index = () => {
  const [currentSection, setCurrentSection] = useState('hero');

  useEffect(() => {
    // Add console message for developers
    console.log(`
████████╗██╗  ██╗██████╗ ███████╗ █████╗ ████████╗    ██████╗ ███████╗████████╗███████╗ ██████╗████████╗███████╗██████╗ 
╚══██╔══╝██║  ██║██╔══██╗██╔════╝██╔══██╗╚══██╔══╝    ██╔══██╗██╔════╝╚══██╔══╝██╔════╝██╔════╝╚══██╔══╝██╔════╝██╔══██╗
   ██║   ███████║██████╔╝█████╗  ███████║   ██║       ██║  ██║█████╗     ██║   █████╗  ██║        ██║   █████╗  ██║  ██║
   ██║   ██╔══██║██╔══██╗██╔══╝  ██╔══██║   ██║       ██║  ██║██╔══╝     ██║   ██╔══╝  ██║        ██║   ██╔══╝  ██║  ██║
   ██║   ██║  ██║██║  ██║███████╗██║  ██║   ██║       ██████╔╝███████╗   ██║   ███████╗╚██████╗   ██║   ███████╗██████╔╝
   ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝   ╚═╝       ╚═════╝ ╚══════╝   ╚═╝   ╚══════╝ ╚═════╝   ╚═╝   ╚══════╝╚═════╝ 

[SYSTEM] Elite developer detected. Welcome to the matrix, fellow hacker.
[INFO] This portfolio contains several Easter eggs. Try the Konami code...
[WARNING] Unauthorized access attempts will be traced and reported.
    `);

    // Konami code easter egg
    let konamiCode = [];
    const konamiSequence = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]; // ↑↑↓↓←→←→BA

    const handleKonamiCode = (e: KeyboardEvent) => {
      konamiCode.push(e.keyCode);
      if (konamiCode.length > konamiSequence.length) {
        konamiCode.shift();
      }
      
      if (konamiCode.join(',') === konamiSequence.join(',')) {
        document.body.style.animation = 'glitch 0.1s ease-in-out infinite';
        setTimeout(() => {
          document.body.style.animation = '';
          alert('🔓 GOD MODE ACTIVATED 🔓\nAll systems compromised.\nWelcome to the inner circle, elite hacker.');
        }, 1000);
        konamiCode = [];
      }
    };

    document.addEventListener('keydown', handleKonamiCode);
    return () => document.removeEventListener('keydown', handleKonamiCode);
  }, []);

  return (
    <div className="min-h-screen bg-terminal-black text-terminal-white relative overflow-x-hidden binary-bg">
      <MatrixRain />
      <ScanLine />
      
      <Navigation currentSection={currentSection} setCurrentSection={setCurrentSection} />
      
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
