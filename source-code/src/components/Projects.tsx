import { useState } from 'react';

interface Project {
  id: string;
  name: string;
  description: string;
  difficulty: 'EASY' | 'MEDIUM' | 'HARD' | 'LEGENDARY';
  status: 'DEPLOYED' | 'MAINTAINED' | 'CLASSIFIED';
  techStack: string[];
  demoUrl?: string;
  codeUrl?: string;
  exploits: string[];
}

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  const projects: Project[] = [
    {
      id: 'project_alpha',
      name: 'E-Commerce Platform',
      description: 'A sophisticated e-commerce solution with real-time inventory management, secure payment processing, and advanced analytics dashboard.',
      difficulty: 'LEGENDARY',
      status: 'DEPLOYED',
      techStack: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Socket.io'],
      exploits: ['Advanced State Management', 'Real-time Synchronization', 'Payment Gateway Integration', 'Mobile Responsive Design'],
      demoUrl: 'https://demo.example.com',
      codeUrl: 'https://github.com/nkalam/project-alpha'
    },
    {
      id: 'project_beta',
      name: 'Task Management System',
      description: 'Enterprise-grade task management platform with team collaboration, project tracking, and automated reporting features.',
      difficulty: 'HARD',
      status: 'MAINTAINED',
      techStack: ['Next.js', 'PostgreSQL', 'Prisma', 'NextAuth', 'Tailwind'],
      exploits: ['Database Optimization', 'Authentication Systems', 'Real-time Collaboration', 'Advanced Analytics'],
      demoUrl: 'https://tasks.example.com',
      codeUrl: 'https://github.com/nkalam/project-beta'
    },
    {
      id: 'project_gamma',
      name: 'Android Fitness Tracker',
      description: 'Native Android application for fitness tracking with GPS integration, workout planning, and social features.',
      difficulty: 'HARD',
      status: 'DEPLOYED',
      techStack: ['Kotlin', 'Room Database', 'Google Maps API', 'Firebase'],
      exploits: ['GPS Integration', 'Local Database Management', 'Push Notifications', 'Material Design'],
      demoUrl: 'https://play.google.com/store/apps/details?id=com.example.fitness',
    },
    {
      id: 'project_delta',
      name: 'AI Chat Interface',
      description: 'Intelligent chat interface with natural language processing and contextual responses.',
      difficulty: 'LEGENDARY',
      status: 'CLASSIFIED',
      techStack: ['React', 'Python', 'TensorFlow', 'WebSocket', 'Redis'],
      exploits: ['Machine Learning Integration', 'Real-time Communication', 'Context Awareness', 'Scalable Architecture'],
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'EASY': return 'text-matrix-green';
      case 'MEDIUM': return 'text-warning';
      case 'HARD': return 'text-cyber-pink';
      case 'LEGENDARY': return 'text-electric-blue';
      default: return 'text-terminal-white';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'DEPLOYED': return 'text-matrix-green';
      case 'MAINTAINED': return 'text-warning';
      case 'CLASSIFIED': return 'text-red-500';
      default: return 'text-terminal-white';
    }
  };

  const handleProjectClick = (projectId: string) => {
    setSelectedProject(selectedProject === projectId ? null : projectId);
  };

  return (
    <section id="projects" className="py-12 lg:py-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-display font-bold mb-6 hover:scale-105 transition-transform duration-300 cursor-default">
            <span className="text-matrix-green">{'>'} </span>
            <span className="glitch-text hover:animate-pulse" data-text="CODE ARSENAL">
              CODE ARSENAL
            </span>
          </h2>
          
          <div className="holographic p-4 rounded-lg border border-matrix-green/30 max-w-2xl mx-auto hover:border-matrix-green/60 hover:scale-105 transition-all duration-300 cursor-pointer group">
            <div className="text-matrix-green font-mono text-sm group-hover:animate-pulse">
              ls -la ~/projects/ | grep -E "(DEPLOYED|MAINTAINED|CLASSIFIED)"
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className={`holographic p-4 lg:p-6 rounded-lg border transition-all duration-300 cursor-pointer transform hover:scale-105 ${
                selectedProject === project.id 
                  ? 'border-electric-blue/50 neon-glow-blue scale-105' 
                  : 'border-matrix-green/30 hover:border-matrix-green/50'
              } ${hoveredProject === project.id ? 'shadow-2xl shadow-matrix-green/20' : ''}`}
              onClick={() => handleProjectClick(project.id)}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <span className={`text-matrix-green font-mono text-sm transition-all duration-300 ${hoveredProject === project.id ? 'animate-pulse' : ''}`}>
                    [{String(index + 1).padStart(2, '0')}]
                  </span>
                  <h3 className={`text-lg lg:text-xl font-display font-bold text-terminal-white hover:text-matrix-green transition-colors duration-300 ${hoveredProject === project.id ? 'animate-pulse' : ''}`}>
                    {project.name}
                  </h3>
                </div>
                
                <div className="flex items-center space-x-2">
                  <span className={`font-mono text-xs px-2 py-1 rounded border ${getDifficultyColor(project.difficulty)} border-current hover:scale-110 transition-transform duration-300`}>
                    {project.difficulty}
                  </span>
                  <span className={`font-mono text-xs px-2 py-1 rounded border ${getStatusColor(project.status)} border-current hover:scale-110 transition-transform duration-300`}>
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Project Description */}
              <p className={`text-terminal-white font-mono text-sm mb-4 leading-relaxed hover:text-matrix-green/80 transition-colors duration-300 ${hoveredProject === project.id ? 'animate-pulse' : ''}`}>
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="mb-4">
                <div className="text-electric-blue font-mono text-xs mb-2 hover:animate-pulse transition-all duration-300">EXPLOITS_USED:</div>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span 
                      key={tech}
                      className="text-xs font-mono px-2 py-1 bg-terminal-dark text-matrix-green rounded border border-matrix-green/30 hover:border-matrix-green hover:bg-matrix-green/10 hover:scale-110 transition-all duration-300 cursor-pointer"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Expanded Details */}
              {selectedProject === project.id && (
                <div className="border-t border-matrix-green/30 pt-4 space-y-4 animate-fade-in">
                  <div>
                    <div className="text-cyber-pink font-mono text-xs mb-2 animate-pulse">ATTACK_VECTORS:</div>
                    <ul className="space-y-1">
                      {project.exploits.map((exploit, idx) => (
                        <li key={idx} className="text-xs font-mono text-terminal-white hover:text-cyber-pink transition-colors duration-300 cursor-default">
                          <span className="text-matrix-green">•</span> {exploit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
                    {project.demoUrl && (
                      <button className="flex-1 holographic py-2 px-4 border border-matrix-green/50 text-matrix-green hover:bg-matrix-green hover:text-terminal-black transition-all duration-300 font-mono text-xs hover:scale-105 active:scale-95">
                        EXECUTE_DEMO()
                      </button>
                    )}
                    {project.codeUrl && (
                      <button className="flex-1 holographic py-2 px-4 border border-electric-blue/50 text-electric-blue hover:bg-electric-blue hover:text-terminal-black transition-all duration-300 font-mono text-xs hover:scale-105 active:scale-95">
                        VIEW_SOURCE()
                      </button>
                    )}
                    {project.status === 'CLASSIFIED' && (
                      <button className="flex-1 holographic py-2 px-4 border border-red-500/50 text-red-500 hover:bg-red-500 hover:text-terminal-black transition-all duration-300 font-mono text-xs cursor-not-allowed hover:animate-pulse">
                        ACCESS_DENIED
                      </button>
                    )}
                  </div>
                </div>
              )}

              {/* Terminal Prompt */}
              <div className="mt-4 pt-2 border-t border-matrix-green/20">
                <div className={`text-matrix-green font-mono text-xs hover:text-electric-blue transition-colors duration-300 cursor-default ${hoveredProject === project.id ? 'animate-pulse' : ''}`}>
                  {selectedProject === project.id ? (
                    <span>nk@alam:~/projects/{project.id}$ cat README.md</span>
                  ) : (
                    <span>nk@alam:~/projects$ ls -la {project.id}/</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive GitHub Activity Graph */}
        <div className="mt-8 lg:mt-12 holographic p-4 lg:p-6 rounded-lg border border-electric-blue/30 hover:border-electric-blue/60 hover:scale-[1.02] transition-all duration-300 cursor-pointer group">
          <div className="text-electric-blue font-mono text-sm mb-4 group-hover:animate-pulse">ACTIVITY_RADAR.exe</div>
          <div className="grid grid-cols-12 gap-1">
            {Array.from({ length: 84 }, (_, i) => (
              <div 
                key={i}
                className={`w-3 h-3 rounded-sm transition-all duration-300 hover:scale-150 cursor-pointer ${
                  Math.random() > 0.7 
                    ? 'bg-matrix-green hover:bg-electric-blue' 
                    : Math.random() > 0.5 
                      ? 'bg-matrix-green/50 hover:bg-matrix-green' 
                      : 'bg-terminal-dark hover:bg-matrix-green/30'
                }`}
              ></div>
            ))}
          </div>
          <div className="flex justify-between mt-2 text-xs font-mono text-terminal-white">
            <span className="hover:text-matrix-green transition-colors duration-300 cursor-default">365 DAYS OF CODE</span>
            <span className="hover:text-electric-blue transition-colors duration-300 cursor-default">STREAK: INFINITE</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;