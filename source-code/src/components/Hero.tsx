import { useState, useEffect } from 'react';
import HackingGame from './HackingGame';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [typingComplete, setTypingComplete] = useState(false);
  
  const bootSequence = [
    '> initializing_portfolio.exe...',
    '> loading_nk_alam_profile...',
    '> scanning_threat_levels...',
    '> access_granted: elite_developer_detected',
    '> welcome_to_the_matrix...',
  ];

  const fullText = 'NK ALAM';
  
  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timer = setTimeout(() => {
        setDisplayText(fullText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 150);
      return () => clearTimeout(timer);
    } else {
      setTypingComplete(true);
    }
  }, [currentIndex, fullText]);

  useEffect(() => {
    if (typingComplete) {
      const cursorTimer = setInterval(() => {
        setShowCursor(prev => !prev);
      }, 500);
      return () => clearInterval(cursorTimer);
    }
  }, [typingComplete]);

  const [currentTime, setCurrentTime] = useState(new Date());
  const [bootComplete, setBootComplete] = useState(false);

  useEffect(() => {
    const timeTimer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    const bootTimer = setTimeout(() => {
      setBootComplete(true);
    }, 3000);

    return () => {
      clearInterval(timeTimer);
      clearTimeout(bootTimer);
    };
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const getTimeZone = (timezone: string, city: string) => {
    return new Date().toLocaleTimeString('en-US', {
      timeZone: timezone,
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
    }) + ` ${city}`;
  };

  const handleEmailClick = () => {
    navigator.clipboard.writeText('palanceroot@gmail.com');
    // Email with pre-filled subject
    window.open('mailto:palanceroot@gmail.com?subject=Elite%20Developer%20Contact%20-%20Mission%20Brief&body=Greetings%20from%20the%20matrix...%0A%0A[Your%20encrypted%20message%20here]');
  };

  const handleResumeDownload = () => {
    // Create a link to download the resume PDF
    const link = document.createElement('a');
    link.href = '/NK_ALAM_Resume.pdf'; // Path to your PDF file in public folder
    link.download = 'NK_ALAM_Resume.pdf';
    link.target = '_blank';
    
    // Trigger download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Show download notification
    alert('📄 RESUME DOWNLOAD INITIATED!\n\nFile: NK_ALAM_Resume.pdf\nStatus: SECURE TRANSFER COMPLETE');
  };

  const handleWhatsAppClick = () => {
    // Replace with actual WhatsApp number
    const phoneNumber = '918597073837'; // Add real number
    const message = encodeURIComponent('🚨 SECURE CHANNEL ACTIVATED 🚨\nElite developer contact initiated...\n\n[Your encrypted message here]');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center relative pt-16 lg:pt-20"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Interactive cursor follower */}
      <div 
        className="fixed w-4 h-4 border border-matrix-green rounded-full pointer-events-none z-50 transition-all duration-100 opacity-0 md:opacity-100"
        style={{ 
          left: mousePosition.x - 8, 
          top: mousePosition.y - 8,
          opacity: isHovered ? 1 : 0,
          transform: `scale(${isHovered ? 1.5 : 1})`
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Left Column - Terminal Boot Sequence */}
          <div className="space-y-4 lg:space-y-6">
            <div className="holographic p-4 lg:p-6 rounded-lg border border-matrix-green/30 hover:border-matrix-green/60 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-matrix-green/20">
              <div className="flex items-center mb-4">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse cursor-pointer hover:bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500 animate-pulse delay-200 cursor-pointer hover:bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-matrix-green animate-pulse delay-400 cursor-pointer hover:bg-matrix-green/80"></div>
                </div>
                <span className="ml-4 text-matrix-green font-mono text-xs sm:text-sm">root@nkalam:~$</span>
              </div>
              
              <div className="font-mono text-xs sm:text-sm space-y-2">
                {bootSequence.map((line, index) => (
                  <div
                    key={index}
                    className="text-matrix-green animate-typing hover:text-electric-blue transition-colors duration-300 cursor-default"
                    style={{
                      animationDelay: `${index * 0.5}s`,
                      animationFillMode: 'forwards',
                      width: '0',
                      overflow: 'hidden',
                      whiteSpace: 'nowrap'
                    }}
                  >
                    {line}
                  </div>
                ))}
                
                {bootComplete && (
                  <div className="mt-4 text-electric-blue">
                    <span className="animate-typing">$ whoami</span>
                    <br />
                    <span className="text-matrix-green hover:text-cyber-pink transition-colors duration-300 cursor-default">elite_fullstack_developer</span>
                    <br />
                    <span className="animate-typing">$ cat contact.txt</span>
                    <br />
                    <div className="flex flex-col sm:flex-row gap-2 mt-2">
                      <span 
                        className="text-cyber-pink hover:text-electric-blue transition-colors cursor-pointer hover:underline hover:scale-105 inline-block transform text-xs sm:text-sm"
                        onClick={handleEmailClick}
                        title="Click to copy & open email"
                      >
                        📧 palanceroot@gmail.com
                      </span>
                      <span 
                        className="text-warning hover:text-matrix-green transition-colors cursor-pointer hover:underline hover:scale-105 inline-block transform text-xs sm:text-sm"
                        onClick={handleWhatsAppClick}
                        title="WhatsApp secure channel"
                      >
                        💬 WhatsApp_Secure
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Add Hacking Game Component */}
            <HackingGame />

            {/* System Stats with interactive elements */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="holographic p-3 lg:p-4 rounded border border-electric-blue/30 hover:border-electric-blue/60 transition-all duration-300 hover:scale-105 cursor-pointer group">
                <div className="text-electric-blue font-mono text-xs mb-2 group-hover:animate-pulse">SYSTEM STATUS</div>
                <div className="text-matrix-green font-mono text-xs sm:text-sm space-y-1">
                  <div className="hover:text-electric-blue transition-colors duration-300">UPTIME: 99.9%</div>
                  <div className="hover:text-electric-blue transition-colors duration-300">THREATS: NONE</div>
                  <div className="hover:text-electric-blue transition-colors duration-300">SECURITY: MAX</div>
                </div>
              </div>
              
              <div className="holographic p-3 lg:p-4 rounded border border-cyber-pink/30 hover:border-cyber-pink/60 transition-all duration-300 hover:scale-105 cursor-pointer group">
                <div className="text-cyber-pink font-mono text-xs mb-2 group-hover:animate-pulse">GLOBAL TIME</div>
                <div className="text-terminal-white font-mono text-xs space-y-1">
                  <div className="hover:text-cyber-pink transition-colors duration-300">IND: {getTimeZone('Asia/Kolkata', 'IST')}</div>
                  <div className="hover:text-cyber-pink transition-colors duration-300">UTC: {getTimeZone('UTC', 'GMT')}</div>
                  <div className="hover:text-cyber-pink transition-colors duration-300">NYC: {getTimeZone('America/New_York', 'EST')}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Main Hero Content */}
          <div className="text-center lg:text-left space-y-4 lg:space-y-6">
            <div>
              <div className="text-matrix-green font-mono text-sm lg:text-lg mb-4 hover:text-electric-blue transition-colors duration-300 cursor-default">
                {'>'} ACCESS_GRANTED: ELITE_DEVELOPER_PROFILE
              </div>
              
              <h1 
                className="text-3xl sm:text-5xl lg:text-7xl xl:text-8xl font-display font-black mb-4 cursor-default" 
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <span className="bg-gradient-to-r from-matrix-green via-electric-blue to-cyber-pink bg-clip-text text-transparent hover:from-cyber-pink hover:via-matrix-green hover:to-electric-blue transition-all duration-500 glitch-text" data-text={displayText}>
                  {displayText}
                  {!typingComplete && <span className="text-matrix-green animate-pulse">|</span>}
                  {typingComplete && showCursor && <span className="text-matrix-green">|</span>}
                </span>
              </h1>
              
              <div className="text-base sm:text-lg lg:text-xl xl:text-2xl text-terminal-white font-mono mb-6 hover:scale-105 transition-transform duration-300 cursor-default">
                <span className="text-electric-blue hover:text-matrix-green transition-colors duration-300">class</span>{' '}
                <span className="text-cyber-pink hover:text-electric-blue transition-colors duration-300">EliteDeveloper</span>{' '}
                <span className="text-terminal-white">{'{'}</span>
                <br />
                <span className="ml-2 sm:ml-4 text-matrix-green hover:text-cyber-pink transition-colors duration-300">specialties</span>
                <span className="text-terminal-white">: [</span>
                <span className="text-warning hover:text-matrix-green transition-colors duration-300 cursor-pointer">'React'</span>
                <span className="text-terminal-white">, </span>
                <span className="text-warning hover:text-electric-blue transition-colors duration-300 cursor-pointer">'Node.js'</span>
                <span className="text-terminal-white">, </span>
                <span className="text-warning hover:text-cyber-pink transition-colors duration-300 cursor-pointer">'Kotlin'</span>
                <span className="text-terminal-white">]</span>
                <br />
                <span className="text-terminal-white">{'}'}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="holographic px-4 sm:px-6 lg:px-8 py-3 lg:py-4 border border-matrix-green/50 text-matrix-green hover:bg-matrix-green hover:text-terminal-black transition-all duration-300 neon-glow font-mono font-bold group hover:scale-110 hover:shadow-2xl hover:shadow-matrix-green/30 active:scale-95 text-sm lg:text-base"
              >
                <span className="group-hover:animate-glitch">INITIALIZE_CONTACT()</span>
              </button>
              
              <button
              onClick={handleResumeDownload}
               className="holographic px-4 sm:px-6 lg:px-8 py-3 lg:py-4 border border-electric-blue/50 text-electric-blue hover:bg-electric-blue hover:text-terminal-black transition-all duration-300 neon-glow-blue font-mono font-bold group hover:scale-110 hover:shadow-2xl hover:shadow-electric-blue/30 active:scale-95 text-sm lg:text-base">
                <span className="group-hover:animate-glitch">DOWNLOAD_RESUME.exe</span>
              </button>
            </div>

            {/* Interactive Floating Code Fragments */}
            <div className="relative h-20 lg:h-32 overflow-hidden">
              <div className="absolute top-0 left-0 text-matrix-green/30 font-mono text-xs sm:text-sm animate-pulse hover:text-matrix-green/80 hover:scale-110 transition-all duration-300 cursor-pointer">
                const skills = ['React', 'TypeScript', 'Node.js'];
              </div>
              <div className="absolute top-4 lg:top-8 right-0 text-electric-blue/30 font-mono text-xs sm:text-sm animate-pulse delay-1000 hover:text-electric-blue/80 hover:scale-110 transition-all duration-300 cursor-pointer">
                fun main() {'{'} println("Elite Developer") {'}'}
              </div>
              <div className="absolute bottom-0 left-1/4 text-cyber-pink/30 font-mono text-xs sm:text-sm animate-pulse delay-2000 hover:text-cyber-pink/80 hover:scale-110 transition-all duration-300 cursor-pointer break-all">
                SELECT * FROM developers WHERE skill_level = 'LEGENDARY';
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;