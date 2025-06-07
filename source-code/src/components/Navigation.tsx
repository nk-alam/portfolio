import { useState, useEffect } from 'react';

interface NavigationProps {
  currentSection: string;
  setCurrentSection: (section: string) => void;
}

const Navigation = ({ currentSection, setCurrentSection }: NavigationProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { id: 'hero', label: 'HOME', command: 'cd ~/' },
    { id: 'about', label: 'ABOUT', command: 'cat about.md' },
    { id: 'skills', label: 'SKILLS', command: 'ls skills/' },
    { id: 'projects', label: 'PROJECTS', command: 'ls projects/' },
    { id: 'contact', label: 'CONTACT', command: 'ping contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY < lastScrollY || currentScrollY < 100);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const scrollToSection = (sectionId: string) => {
    setCurrentSection(sectionId);
    setIsMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      <div className="holographic backdrop-blur-md border-b border-matrix-green/30 hover:border-matrix-green/50 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <span className="text-matrix-green font-display font-bold text-lg sm:text-xl glitch-text hover:text-electric-blue hover:scale-110 transition-all duration-300 cursor-pointer" data-text="NK.ALAM">
                NK.ALAM
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {menuItems.map((item, index) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`px-3 py-2 text-sm font-medium transition-all duration-300 relative group hover:scale-110 active:scale-95 ${
                      currentSection === item.id
                        ? 'text-matrix-green neon-glow'
                        : 'text-terminal-white hover:text-matrix-green'
                    }`}
                    title={item.command}
                  >
                    <span className="font-mono group-hover:animate-pulse text-xs sm:text-sm">
                      {String(index + 1).padStart(2, '0')}.
                    </span>
                    <span className="ml-1">{item.label}</span>
                    
                    {/* Hover effect */}
                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-matrix-green transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></div>
                    
                    {/* Command tooltip */}
                    <div className="absolute top-full left-0 mt-2 px-2 py-1 bg-terminal-dark text-matrix-green text-xs font-mono rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-10 border border-matrix-green/30">
                      {item.command}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-matrix-green hover:text-electric-blue transition-colors duration-300 hover:scale-110 active:scale-95 p-2"
              >
                <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden border-t border-matrix-green/30 animate-fade-in">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {menuItems.map((item, index) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`block px-3 py-2 text-sm font-medium transition-all duration-300 w-full text-left hover:scale-105 active:scale-95 rounded ${
                      currentSection === item.id
                        ? 'text-matrix-green bg-matrix-green/10'
                        : 'text-terminal-white hover:text-matrix-green hover:bg-matrix-green/5'
                    }`}
                  >
                    <span className="font-mono text-xs">
                      {String(index + 1).padStart(2, '0')}.
                    </span>
                    <span className="ml-1">{item.label}</span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Interactive Status bar - Hidden on very small screens */}
        <div className="border-t border-matrix-green/20 px-4 py-1 hover:bg-matrix-green/5 transition-colors duration-300 hidden sm:block">
          <div className="flex items-center justify-between text-xs font-mono">
            <div className="flex items-center space-x-2 sm:space-x-4">
              <span className="text-matrix-green hover:animate-pulse cursor-default">SYSTEM STATUS: OPERATIONAL</span>
              <span className="text-electric-blue hover:animate-pulse cursor-default hidden sm:inline">THREAT LEVEL: ZERO</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-warning hover:text-matrix-green transition-colors duration-300 cursor-default">CPU: 12%</span>
              <span className="text-cyber-pink hover:text-electric-blue transition-colors duration-300 cursor-default hidden sm:inline">RAM: 8.3GB</span>
              <span className="text-electric-blue hover:text-cyber-pink transition-colors duration-300 cursor-default hidden lg:inline">NET: 1.2GB/s</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
