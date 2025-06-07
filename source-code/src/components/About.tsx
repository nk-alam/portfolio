import { useState, useEffect } from 'react';

const About = () => {
  const [decryptedText, setDecryptedText] = useState('');
  const [isDecrypting, setIsDecrypting] = useState(false);
  const [hoveredElement, setHoveredElement] = useState<string | null>(null);
  
  const encryptedText = '████████████████████████████████████████';
  const realText = 'Elite Full-Stack Developer & Digital Architect';

  const startDecryption = () => {
    setIsDecrypting(true);
    let currentText = encryptedText;
    let decryptIndex = 0;
    
    const decryptInterval = setInterval(() => {
      if (decryptIndex >= realText.length) {
        clearInterval(decryptInterval);
        setIsDecrypting(false);
        return;
      }
      
      const newText = realText.slice(0, decryptIndex + 1) + 
                     currentText.slice(decryptIndex + 1);
      setDecryptedText(newText);
      decryptIndex++;
    }, 100);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      startDecryption();
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  const commandHistory = [
    { command: 'learn_react.js --advanced', result: 'MASTERY_ACHIEVED' },
    { command: 'study_kotlin.exe --android', result: 'EXPLOITATION_SUCCESSFUL' },
    { command: 'exploit_nodejs.sh --backend', result: 'BACKDOOR_ESTABLISHED' },
    { command: 'breach_typescript.ts --strict', result: 'SYSTEM_COMPROMISED' },
    { command: 'infiltrate_databases.sql', result: 'DATA_EXTRACTED' },
  ];

  return (
    <section id="about" className="py-12 lg:py-20 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Left Column - Profile Decryption */}
          <div className="space-y-6 lg:space-y-8">
            <div 
              className="holographic p-4 lg:p-6 rounded-lg border border-cyber-pink/30 hover:border-cyber-pink/60 hover:scale-[1.02] transition-all duration-300 cursor-pointer hover:shadow-2xl hover:shadow-cyber-pink/20"
              onMouseEnter={() => setHoveredElement('profile')}
              onMouseLeave={() => setHoveredElement(null)}
            >
              <div className="flex items-center mb-4">
                <div className={`text-cyber-pink font-mono text-sm transition-all duration-300 ${hoveredElement === 'profile' ? 'animate-pulse' : ''}`}>
                  DECRYPTING PROFILE.DAT...
                </div>
                <div className="ml-4 flex space-x-1">
                  <div className="w-2 h-2 bg-cyber-pink rounded-full animate-pulse hover:scale-150 transition-transform duration-300"></div>
                  <div className="w-2 h-2 bg-cyber-pink rounded-full animate-pulse delay-200 hover:scale-150 transition-transform duration-300"></div>
                  <div className="w-2 h-2 bg-cyber-pink rounded-full animate-pulse delay-400 hover:scale-150 transition-transform duration-300"></div>
                </div>
              </div>
              
              <h2 className={`text-2xl lg:text-3xl font-display font-bold mb-4 hover:scale-105 transition-transform duration-300 cursor-default ${hoveredElement === 'profile' ? 'animate-pulse' : ''}`}>
                <span className="text-matrix-green">{'>'} </span>
                <span className="glitch-text hover:text-electric-blue transition-colors duration-300" data-text={decryptedText || encryptedText}>
                  {decryptedText || encryptedText}
                </span>
              </h2>

              <div className="space-y-4 font-mono text-sm">
                <div className="text-terminal-white hover:scale-105 transition-transform duration-300 cursor-default">
                  <span className="text-electric-blue hover:text-matrix-green transition-colors duration-300">CLASSIFICATION:</span> ELITE OPERATOR
                </div>
                <div className="text-terminal-white hover:scale-105 transition-transform duration-300 cursor-default">
                  <span className="text-warning hover:text-cyber-pink transition-colors duration-300">CLEARANCE_LEVEL:</span> MAXIMUM
                </div>
                <div className="text-terminal-white hover:scale-105 transition-transform duration-300 cursor-default">
                  <span className="text-cyber-pink hover:text-electric-blue transition-colors duration-300">SPECIALIZATION:</span> FULL_STACK_WARFARE
                </div>
                <div className="text-terminal-white hover:scale-105 transition-transform duration-300 cursor-pointer">
                  <span className="text-matrix-green hover:text-warning transition-colors duration-300">CONTACT_PROTOCOL:</span> 
                  <span className="hover:text-electric-blue transition-colors duration-300 ml-1">palanceroot@gmail.com</span>
                </div>
              </div>
            </div>

            {/* Interactive Neural Network Visualization */}
            <div 
              className="holographic p-4 lg:p-6 rounded-lg border border-matrix-green/30 hover:border-matrix-green/60 hover:scale-[1.02] transition-all duration-300 cursor-pointer"
              onMouseEnter={() => setHoveredElement('neural')}
              onMouseLeave={() => setHoveredElement(null)}
            >
              <div className={`text-matrix-green font-mono text-sm mb-4 transition-all duration-300 ${hoveredElement === 'neural' ? 'animate-pulse' : ''}`}>
                NEURAL_NETWORK_MAP.exe
              </div>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="space-y-2">
                  <div className="w-12 h-12 mx-auto rounded-full border-2 border-matrix-green flex items-center justify-center neon-glow hover:scale-125 hover:animate-spin transition-all duration-300 cursor-pointer">
                    <span className="text-xs font-mono">UI</span>
                  </div>
                  <div className="text-xs text-matrix-green hover:text-electric-blue transition-colors duration-300 cursor-default">Frontend</div>
                </div>
                <div className="space-y-2">
                  <div className="w-12 h-12 mx-auto rounded-full border-2 border-electric-blue flex items-center justify-center neon-glow-blue hover:scale-125 hover:animate-spin transition-all duration-300 cursor-pointer">
                    <span className="text-xs font-mono">API</span>
                  </div>
                  <div className="text-xs text-electric-blue hover:text-cyber-pink transition-colors duration-300 cursor-default">Backend</div>
                </div>
                <div className="space-y-2">
                  <div className="w-12 h-12 mx-auto rounded-full border-2 border-cyber-pink flex items-center justify-center neon-glow-pink hover:scale-125 hover:animate-spin transition-all duration-300 cursor-pointer">
                    <span className="text-xs font-mono">DB</span>
                  </div>
                  <div className="text-xs text-cyber-pink hover:text-warning transition-colors duration-300 cursor-default">Database</div>
                </div>
              </div>
              
              {/* Interactive connection lines */}
              <svg className="w-full h-8 mt-4" viewBox="0 0 300 32">
                <line x1="50" y1="16" x2="150" y2="16" stroke="#00FF41" strokeWidth="2" className={`animate-pulse hover:stroke-width-4 ${hoveredElement === 'neural' ? 'animate-bounce' : ''}`} />
                <line x1="150" y1="16" x2="250" y2="16" stroke="#00D4FF" strokeWidth="2" className={`animate-pulse delay-500 hover:stroke-width-4 ${hoveredElement === 'neural' ? 'animate-bounce' : ''}`} />
              </svg>
            </div>
          </div>

          {/* Right Column - Command History & Bio */}
          <div className="space-y-6 lg:space-y-8">
            <div 
              className="holographic p-4 lg:p-6 rounded-lg border border-electric-blue/30 hover:border-electric-blue/60 hover:scale-[1.02] transition-all duration-300 cursor-pointer"
              onMouseEnter={() => setHoveredElement('commands')}
              onMouseLeave={() => setHoveredElement(null)}
            >
              <div className={`text-electric-blue font-mono text-sm mb-4 transition-all duration-300 ${hoveredElement === 'commands' ? 'animate-pulse' : ''}`}>
                COMMAND_HISTORY.log
              </div>
              <div className="space-y-3">
                {commandHistory.map((entry, index) => (
                  <div 
                    key={index} 
                    className="font-mono text-xs border-l-2 border-matrix-green/30 pl-4 hover:border-matrix-green hover:scale-105 transition-all duration-300 cursor-pointer group"
                  >
                    <div className="text-matrix-green group-hover:text-electric-blue transition-colors duration-300">$ {entry.command}</div>
                    <div className="text-warning group-hover:text-cyber-pink transition-colors duration-300">{entry.result}</div>
                  </div>
                ))}
              </div>
            </div>

            <div 
              className="holographic p-4 lg:p-6 rounded-lg border border-warning/30 hover:border-warning/60 hover:scale-[1.02] transition-all duration-300 cursor-pointer"
              onMouseEnter={() => setHoveredElement('profile-text')}
              onMouseLeave={() => setHoveredElement(null)}
            >
              <div className={`text-warning font-mono text-sm mb-4 transition-all duration-300 ${hoveredElement === 'profile-text' ? 'animate-pulse' : ''}`}>
                PSYCHOLOGICAL_PROFILE.txt
              </div>
              <div className="space-y-4 text-terminal-white">
                <p className="font-mono text-sm leading-relaxed hover:text-matrix-green/80 transition-colors duration-300 cursor-default">
                  A digital phantom operating at the intersection of creativity and logic. 
                  Specializes in architecting scalable solutions that bridge the gap between 
                  human needs and machine efficiency.
                </p>
                
                <p className="font-mono text-sm leading-relaxed hover:text-electric-blue/80 transition-colors duration-300 cursor-default">
                  <span className="text-matrix-green hover:text-cyber-pink transition-colors duration-300">MISSION STATEMENT:</span> To craft 
                  elegant code that not only solves complex problems but transforms the way 
                  users interact with technology. Every line of code is a brushstroke in 
                  the digital canvas of tomorrow.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                  <div className="hover:scale-105 transition-transform duration-300 cursor-pointer">
                    <div className="text-electric-blue font-mono text-xs hover:animate-pulse">CORE_VALUES.dll</div>
                    <ul className="text-xs font-mono space-y-1 mt-2">
                      <li className="text-matrix-green hover:text-cyber-pink transition-colors duration-300 cursor-default">• Innovation</li>
                      <li className="text-cyber-pink hover:text-warning transition-colors duration-300 cursor-default">• Precision</li>
                      <li className="text-warning hover:text-electric-blue transition-colors duration-300 cursor-default">• Collaboration</li>
                    </ul>
                  </div>
                  <div className="hover:scale-105 transition-transform duration-300 cursor-pointer">
                    <div className="text-cyber-pink font-mono text-xs hover:animate-pulse">METHODOLOGIES.exe</div>
                    <ul className="text-xs font-mono space-y-1 mt-2">
                      <li className="text-electric-blue hover:text-matrix-green transition-colors duration-300 cursor-default">• Agile Development</li>
                      <li className="text-matrix-green hover:text-warning transition-colors duration-300 cursor-default">• Clean Architecture</li>
                      <li className="text-warning hover:text-cyber-pink transition-colors duration-300 cursor-default">• Test-Driven Design</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
