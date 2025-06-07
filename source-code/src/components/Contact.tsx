import { useState } from 'react';

const Contact = () => {
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [isConnecting, setIsConnecting] = useState(false);
  const [connectionEstablished, setConnectionEstablished] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim() || !email.trim()) return;
    
    setIsConnecting(true);
    
    // Create mailto link with actual functionality
    const subject = encodeURIComponent('Elite Developer Contact - Mission Brief');
    const body = encodeURIComponent(`From: ${email}\n\nMessage:\n${message}`);
    window.open(`mailto:palanceroot@gmail.com?subject=${subject}&body=${body}`);
    
    setTimeout(() => {
      setIsConnecting(false);
      setConnectionEstablished(true);
      setTimeout(() => {
        setConnectionEstablished(false);
        setMessage('');
        setEmail('');
      }, 3000);
    }, 2000);
  };

  const handleWhatsApp = () => {
    const phoneNumber = '918597073837'; // Replace with actual number
    const text = encodeURIComponent(`🚨 SECURE CHANNEL ACTIVATED 🚨\nFrom: ${email}\n\nMessage: ${message}`);
    window.open(`https://wa.me/${phoneNumber}?text=${text}`, '_blank');
  };

  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/nk-alam', status: 'SECURE' },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/nk-alam', status: 'ENCRYPTED' },
    { name: 'Twitter', url: 'https://twitter.com/nk-alam', status: 'VERIFIED' },
    { name: 'Email', url: 'mailto:palanceroot@gmail.com', status: 'PGP_ENABLED' },
  ];

  return (
    <section id="contact" className="py-16 lg:py-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-display font-bold mb-6">
            <span className="text-matrix-green">{'>'} </span>
            <span className="glitch-text" data-text="ESTABLISH CONNECTION">
              ESTABLISH CONNECTION
            </span>
          </h2>
          
          <div className="holographic p-4 rounded-lg border border-matrix-green/30 max-w-2xl mx-auto">
            <div className="text-matrix-green font-mono text-xs sm:text-sm">
              {isConnecting ? (
                <span className="animate-pulse">ESTABLISHING_SECURE_CHANNEL...</span>
              ) : connectionEstablished ? (
                <span className="text-electric-blue">CONNECTION_ESTABLISHED • MESSAGE_TRANSMITTED</span>
              ) : (
                'ssh nk@alam.dev -p 2025'
              )}
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Left Column - Terminal Chat Interface */}
          <div className="space-y-6 lg:space-y-8">
            <div className="holographic p-4 lg:p-6 rounded-lg border border-cyber-pink/30">
              <div className="flex items-center mb-4">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-matrix-green"></div>
                </div>
                <span className="ml-4 text-cyber-pink font-mono text-xs sm:text-sm">secure_chat.exe</span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="font-mono text-xs sm:text-sm space-y-2">
                  <div className="text-matrix-green">$ initialize_message_protocol</div>
                  <div className="text-electric-blue">ENCRYPTION: AES-256 | STATUS: READY</div>
                  <div className="text-warning">CLEARANCE: GRANTED | PRIORITY: HIGH</div>
                </div>

                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-terminal-dark border border-matrix-green/30 rounded p-3 text-terminal-white font-mono text-sm focus:border-matrix-green focus:outline-none focus:ring-1 focus:ring-matrix-green"
                    placeholder="your.email@domain.com"
                    disabled={isConnecting || connectionEstablished}
                    required
                  />
                </div>

                <div className="relative">
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full h-24 sm:h-32 bg-terminal-dark border border-matrix-green/30 rounded p-3 text-terminal-white font-mono text-sm resize-none focus:border-matrix-green focus:outline-none focus:ring-1 focus:ring-matrix-green"
                    placeholder="Enter your encrypted message here..."
                    disabled={isConnecting || connectionEstablished}
                    required
                  />
                  <div className="absolute bottom-2 right-2 text-xs font-mono text-matrix-green/50">
                    {message.length}/1024
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button
                    type="submit"
                    disabled={!message.trim() || !email.trim() || isConnecting || connectionEstablished}
                    className="holographic py-3 px-4 border border-matrix-green/50 text-matrix-green hover:bg-matrix-green hover:text-terminal-black transition-all duration-300 font-mono font-bold disabled:opacity-50 disabled:cursor-not-allowed text-xs sm:text-sm"
                  >
                    {isConnecting ? (
                      <span className="flex items-center justify-center space-x-2">
                        <span>TRANSMITTING</span>
                        <div className="flex space-x-1">
                          <div className="w-1 h-1 bg-matrix-green rounded-full animate-pulse"></div>
                          <div className="w-1 h-1 bg-matrix-green rounded-full animate-pulse delay-200"></div>
                          <div className="w-1 h-1 bg-matrix-green rounded-full animate-pulse delay-400"></div>
                        </div>
                      </span>
                    ) : connectionEstablished ? (
                      'EMAIL_SENT ✓'
                    ) : (
                      'SEND_EMAIL()'
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={handleWhatsApp}
                    disabled={!message.trim() || !email.trim() || isConnecting || connectionEstablished}
                    className="holographic py-3 px-4 border border-warning/50 text-warning hover:bg-warning hover:text-terminal-black transition-all duration-300 font-mono font-bold disabled:opacity-50 disabled:cursor-not-allowed text-xs sm:text-sm"
                  >
                    SEND_WHATSAPP()
                  </button>
                </div>
              </form>
            </div>

            {/* Response Time Info */}
            <div className="holographic p-4 rounded-lg border border-electric-blue/30">
              <div className="text-electric-blue font-mono text-xs sm:text-sm mb-2">RESPONSE_PROTOCOL.info</div>
              <div className="space-y-1 text-xs font-mono">
                <div className="flex justify-between">
                  <span className="text-terminal-white">Typical Response:</span>
                  <span className="text-matrix-green">{'<'} 24 Hours</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-terminal-white">Priority Level:</span>
                  <span className="text-warning">MAXIMUM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-terminal-white">Encryption:</span>
                  <span className="text-cyber-pink">END-TO-END</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Information & Network Nodes */}
          <div className="space-y-6 lg:space-y-8">
            
            {/* Contact Details */}
            <div className="holographic p-4 lg:p-6 rounded-lg border border-warning/30">
              <div className="text-warning font-mono text-xs sm:text-sm mb-4">CONTACT_PROTOCOLS.cfg</div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-terminal-dark rounded border border-matrix-green/20">
                  <div>
                    <div className="text-matrix-green font-mono text-xs sm:text-sm">PRIMARY_CHANNEL</div>
                    <div className="text-terminal-white font-mono text-xs break-all">palanceroot@gmail.com</div>
                  </div>
                  <div className="text-electric-blue font-mono text-xs">PGP_ENABLED</div>
                </div>

                <div className="flex items-center justify-between p-3 bg-terminal-dark rounded border border-electric-blue/20">
                  <div>
                    <div className="text-electric-blue font-mono text-xs sm:text-sm">AVAILABILITY</div>
                    <div className="text-terminal-white font-mono text-xs">24/7 • Global Time Zones</div>
                  </div>
                  <div className="text-matrix-green font-mono text-xs">ACTIVE</div>
                </div>

                <div className="flex items-center justify-between p-3 bg-terminal-dark rounded border border-cyber-pink/20">
                  <div>
                    <div className="text-cyber-pink font-mono text-xs sm:text-sm">COLLABORATION</div>
                    <div className="text-terminal-white font-mono text-xs">Remote • On-site • Hybrid</div>
                  </div>
                  <div className="text-warning font-mono text-xs">FLEXIBLE</div>
                </div>
              </div>
            </div>

            {/* Social Network Nodes */}
            <div className="holographic p-4 lg:p-6 rounded-lg border border-cyber-pink/30">
              <div className="text-cyber-pink font-mono text-xs sm:text-sm mb-4">NETWORK_NODES.map</div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-terminal-dark rounded border border-matrix-green/20 hover:border-matrix-green/50 transition-all duration-300 group hover:scale-105"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-terminal-white font-mono text-xs sm:text-sm group-hover:text-matrix-green transition-colors">
                        {link.name}
                      </span>
                      <span className="text-xs font-mono text-matrix-green/70">
                        {link.status}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Security Status */}
            <div className="holographic p-4 lg:p-6 rounded-lg border border-matrix-green/30">
              <div className="text-matrix-green font-mono text-xs sm:text-sm mb-4">SECURITY_STATUS.log</div>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-terminal-white font-mono text-xs">SSL Certificate:</span>
                  <span className="text-matrix-green font-mono text-xs">VALID</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-terminal-white font-mono text-xs">Firewall Status:</span>
                  <span className="text-electric-blue font-mono text-xs">ACTIVE</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-terminal-white font-mono text-xs">Data Protection:</span>
                  <span className="text-cyber-pink font-mono text-xs">GDPR_COMPLIANT</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-terminal-white font-mono text-xs">Threats Detected:</span>
                  <span className="text-warning font-mono text-xs">ZERO</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-12 lg:mt-16 pt-8 border-t border-matrix-green/20">
          <p className="text-terminal-white font-mono text-sm">
            <span className="text-matrix-green">NK ALAM</span> • Elite Developer • 
            <span className="text-electric-blue"> Digital Architect</span> • 
            <span className="text-cyber-pink"> System Innovator</span>
          </p>
          <p className="text-matrix-green/70 font-mono text-xs mt-2">
            "Every line of code is a step towards digital evolution."
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
