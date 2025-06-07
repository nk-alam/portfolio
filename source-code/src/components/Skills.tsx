import { useState, useEffect } from 'react';

interface Skill {
  name: string;
  level: number;
  category: string;
  color: string;
}

const Skills = () => {
  const [animateProgress, setAnimateProgress] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [clickedSkill, setClickedSkill] = useState<string | null>(null);

  const skills: Skill[] = [
    // Frontend Warfare
    { name: 'React.js', level: 98, category: 'Frontend Warfare', color: 'matrix-green' },
    { name: 'Next.js', level: 95, category: 'Frontend Warfare', color: 'matrix-green' },
    { name: 'TypeScript', level: 92, category: 'Frontend Warfare', color: 'matrix-green' },
    { name: 'Tailwind CSS', level: 96, category: 'Frontend Warfare', color: 'matrix-green' },
    
    // Backend Infiltration
    { name: 'Node.js', level: 96, category: 'Backend Infiltration', color: 'electric-blue' },
    { name: 'Express.js', level: 88, category: 'Backend Infiltration', color: 'electric-blue' },
    { name: 'MongoDB', level: 85, category: 'Backend Infiltration', color: 'electric-blue' },
    { name: 'PostgreSQL', level: 82, category: 'Backend Infiltration', color: 'electric-blue' },
    
    // Mobile Penetration
    { name: 'Kotlin', level: 94, category: 'Mobile Penetration', color: 'cyber-pink' },
    { name: 'Java', level: 87, category: 'Mobile Penetration', color: 'cyber-pink' },
    { name: 'Android SDK', level: 89, category: 'Mobile Penetration', color: 'cyber-pink' },
    
    // DevOps Operations
    { name: 'Git/GitHub', level: 97, category: 'DevOps Operations', color: 'warning' },
    { name: 'Docker', level: 78, category: 'DevOps Operations', color: 'warning' },
    { name: 'AWS', level: 75, category: 'DevOps Operations', color: 'warning' },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimateProgress(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  const getThreatLevel = (level: number) => {
    if (level >= 95) return 'LEGENDARY';
    if (level >= 90) return 'EXPERT';
    if (level >= 80) return 'ADVANCED';
    return 'PROFICIENT';
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Frontend Warfare': return '🎯';
      case 'Backend Infiltration': return '🔐';
      case 'Mobile Penetration': return '📱';
      case 'DevOps Operations': return '⚙️';
      default: return '💻';
    }
  };

  const handleSkillClick = (skillName: string) => {
    setClickedSkill(skillName);
    setTimeout(() => setClickedSkill(null), 1000);
  };

  return (
    <section id="skills" className="py-12 lg:py-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-display font-bold mb-6 hover:scale-105 transition-transform duration-300 cursor-default">
            <span className="text-matrix-green">{'>'} </span>
            <span className="glitch-text hover:animate-pulse" data-text="THREAT ASSESSMENT">
              THREAT ASSESSMENT
            </span>
          </h2>
          
          <div className="holographic p-4 lg:p-6 rounded-lg border border-red-500/50 max-w-2xl mx-auto hover:border-red-500/80 hover:scale-105 transition-all duration-300 cursor-pointer group">
            <div className="text-red-500 font-mono text-base lg:text-lg mb-4 animate-pulse group-hover:animate-bounce">
              ⚠️ THREAT LEVEL: MAXIMUM ⚠️
            </div>
            <div className="text-terminal-white font-mono text-sm hover:text-red-500 transition-colors duration-300">
              ELITE DEVELOPER DETECTED • MULTIPLE EXPLOIT CAPABILITIES • PROCEED WITH CAUTION
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          {Object.entries(groupedSkills).map(([category, categorySkills]) => (
            <div key={category} className="holographic p-4 lg:p-6 rounded-lg border border-matrix-green/30 hover:border-matrix-green/60 hover:scale-[1.02] transition-all duration-300 hover:shadow-2xl hover:shadow-matrix-green/20">
              <div className="flex items-center mb-6 group cursor-pointer">
                <span className="text-xl lg:text-2xl mr-3 group-hover:animate-bounce">{getCategoryIcon(category)}</span>
                <h3 className="text-lg lg:text-xl font-display font-bold text-matrix-green group-hover:text-electric-blue transition-colors duration-300">
                  {category.toUpperCase()}
                </h3>
              </div>

              <div className="space-y-4">
                {categorySkills.map((skill, index) => (
                  <div 
                    key={skill.name} 
                    className="space-y-2 hover:scale-105 transition-all duration-300 cursor-pointer"
                    onMouseEnter={() => setHoveredSkill(skill.name)}
                    onMouseLeave={() => setHoveredSkill(null)}
                    onClick={() => handleSkillClick(skill.name)}
                  >
                    <div className="flex justify-between items-center">
                      <span className={`font-mono text-terminal-white hover:text-${skill.color} transition-colors duration-300 ${hoveredSkill === skill.name ? 'animate-pulse' : ''}`}>
                        {skill.name}
                      </span>
                      <div className="flex items-center space-x-2">
                        <span className={`text-${skill.color} font-mono text-xs px-2 py-1 rounded border border-${skill.color}/30 hover:border-${skill.color}/80 hover:bg-${skill.color}/10 transition-all duration-300 ${clickedSkill === skill.name ? 'animate-bounce' : ''}`}>
                          {getThreatLevel(skill.level)}
                        </span>
                        <span className={`font-mono text-xs text-terminal-white hover:text-${skill.color} transition-colors duration-300`}>
                          {skill.level}%
                        </span>
                      </div>
                    </div>
                    
                    <div className="relative">
                      <div className="w-full bg-terminal-dark h-2 rounded-full overflow-hidden hover:h-3 transition-all duration-300">
                        <div 
                          className={`h-full bg-${skill.color} transition-all duration-1000 ease-out relative hover:animate-pulse ${hoveredSkill === skill.name ? 'animate-pulse' : ''}`}
                          style={{ 
                            width: animateProgress ? `${skill.level}%` : '0%',
                            transitionDelay: `${index * 100}ms`
                          }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-pulse"></div>
                        </div>
                      </div>
                      
                      {/* Interactive Binary progress indicator */}
                      <div className={`mt-1 font-mono text-xs text-matrix-green/50 hover:text-matrix-green transition-colors duration-300 cursor-default ${hoveredSkill === skill.name ? 'animate-pulse' : ''}`}>
                        {'█'.repeat(Math.floor(skill.level / 10))}{'░'.repeat(10 - Math.floor(skill.level / 10))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Real-time System Monitor */}
        <div className="mt-8 lg:mt-12 holographic p-4 lg:p-6 rounded-lg border border-electric-blue/30 hover:border-electric-blue/60 hover:scale-[1.02] transition-all duration-300 cursor-pointer group">
          <div className="text-electric-blue font-mono text-sm mb-4 group-hover:animate-pulse">REAL_TIME_SYSTEM_MONITOR.exe</div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center hover:scale-110 transition-transform duration-300 cursor-pointer">
              <div className="text-matrix-green font-mono text-xl lg:text-2xl font-bold hover:animate-bounce">100%</div>
              <div className="text-xs text-terminal-white hover:text-matrix-green transition-colors duration-300">CODE QUALITY</div>
            </div>
            <div className="text-center hover:scale-110 transition-transform duration-300 cursor-pointer">
              <div className="text-electric-blue font-mono text-xl lg:text-2xl font-bold hover:animate-bounce">24/7</div>
              <div className="text-xs text-terminal-white hover:text-electric-blue transition-colors duration-300">AVAILABILITY</div>
            </div>
            <div className="text-center hover:scale-110 transition-transform duration-300 cursor-pointer">
              <div className="text-cyber-pink font-mono text-xl lg:text-2xl font-bold hover:animate-bounce">∞</div>
              <div className="text-xs text-terminal-white hover:text-cyber-pink transition-colors duration-300">LEARNING RATE</div>
            </div>
            <div className="text-center hover:scale-110 transition-transform duration-300 cursor-pointer">
              <div className="text-warning font-mono text-xl lg:text-2xl font-bold hover:animate-bounce">0</div>
              <div className="text-xs text-terminal-white hover:text-warning transition-colors duration-300">VULNERABILITIES</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;