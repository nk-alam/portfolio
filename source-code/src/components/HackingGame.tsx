import { useState, useEffect } from 'react';

const HackingGame = () => {
  const [isHacking, setIsHacking] = useState(false);
  const [progress, setProgress] = useState(0);
  const [gameState, setGameState] = useState<'idle' | 'hacking' | 'success' | 'failed'>('idle');
  const [sequence, setSequence] = useState<string[]>([]);
  const [userInput, setUserInput] = useState<string[]>([]);
  const [currentTarget, setCurrentTarget] = useState('');

  const targets = [
    'MAINFRAME_SERVER',
    'SECURITY_PROTOCOL',
    'DATABASE_VAULT',
    'NEURAL_NETWORK',
    'QUANTUM_FIREWALL'
  ];

  const hackingSequences = [
    ['UP', 'DOWN', 'LEFT', 'RIGHT'],
    ['A', 'B', 'A', 'B'],
    ['1', '2', '3', '4'],
    ['X', 'Y', 'Z', 'X'],
    ['Q', 'W', 'E', 'R']
  ];

  const startHacking = () => {
    if (isHacking) return;
    
    const randomTarget = targets[Math.floor(Math.random() * targets.length)];
    const randomSequence = hackingSequences[Math.floor(Math.random() * hackingSequences.length)];
    
    setCurrentTarget(randomTarget);
    setSequence(randomSequence);
    setUserInput([]);
    setProgress(0);
    setGameState('hacking');
    setIsHacking(true);

    // Auto-fail after 10 seconds
    setTimeout(() => {
      if (gameState === 'hacking') {
        setGameState('failed');
        setIsHacking(false);
      }
    }, 10000);
  };

  const handleKeyPress = (key: string) => {
    if (gameState !== 'hacking') return;

    const newInput = [...userInput, key];
    setUserInput(newInput);

    if (newInput.length === sequence.length) {
      const isCorrect = newInput.every((input, index) => input === sequence[index]);
      if (isCorrect) {
        setGameState('success');
        setProgress(100);
      } else {
        setGameState('failed');
      }
      setIsHacking(false);
    } else {
      setProgress((newInput.length / sequence.length) * 100);
    }
  };

  const resetGame = () => {
    setGameState('idle');
    setProgress(0);
    setUserInput([]);
    setSequence([]);
    setCurrentTarget('');
    setIsHacking(false);
  };

  useEffect(() => {
    if (gameState === 'success' || gameState === 'failed') {
      const timer = setTimeout(resetGame, 3000);
      return () => clearTimeout(timer);
    }
  }, [gameState]);

  return (
    <div className="holographic p-4 lg:p-6 rounded-lg border border-warning/30 hover:border-warning/60 transition-all duration-300">
      <div className="flex items-center justify-between mb-4">
        <div className="text-warning font-mono text-xs sm:text-sm">HACKING_SIMULATOR.exe</div>
        <div className={`text-xs font-mono ${
          gameState === 'success' ? 'text-matrix-green' : 
          gameState === 'failed' ? 'text-red-500' : 
          gameState === 'hacking' ? 'text-warning' : 'text-terminal-white'
        }`}>
          {gameState === 'idle' && 'READY'}
          {gameState === 'hacking' && 'BREACHING...'}
          {gameState === 'success' && 'ACCESS_GRANTED'}
          {gameState === 'failed' && 'BREACH_FAILED'}
        </div>
      </div>

      {gameState === 'idle' && (
        <div className="text-center">
          <button
            onClick={startHacking}
            className="bg-terminal-dark border border-matrix-green/50 text-matrix-green hover:bg-matrix-green/10 px-4 py-2 rounded font-mono text-xs sm:text-sm transition-all duration-300 hover:scale-105"
          >
            INITIATE_BREACH()
          </button>
        </div>
      )}

      {gameState === 'hacking' && (
        <div className="space-y-4">
          <div className="text-center">
            <div className="text-warning font-mono text-xs sm:text-sm mb-2">
              TARGET: {currentTarget}
            </div>
            <div className="text-terminal-white font-mono text-xs mb-2">
              SEQUENCE: {sequence.map((key, index) => (
                <span key={index} className={`mr-1 ${
                  userInput[index] === key ? 'text-matrix-green' : 
                  userInput[index] !== undefined ? 'text-red-500' : 'text-terminal-white'
                }`}>
                  [{userInput[index] || '?'}]
                </span>
              ))}
            </div>
            <div className="w-full bg-terminal-dark rounded-full h-2 mb-4">
              <div 
                className="bg-matrix-green h-2 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          <div className="grid grid-cols-4 gap-2">
            {['UP', 'DOWN', 'LEFT', 'RIGHT', 'A', 'B', 'X', 'Y', '1', '2', '3', '4', 'Q', 'W', 'E', 'R'].map((key) => (
              <button
                key={key}
                onClick={() => handleKeyPress(key)}
                className="bg-terminal-dark border border-matrix-green/30 text-matrix-green hover:bg-matrix-green/10 px-2 py-2 rounded font-mono text-xs transition-all duration-300 hover:scale-105 active:scale-95"
              >
                {key}
              </button>
            ))}
          </div>
        </div>
      )}

      {(gameState === 'success' || gameState === 'failed') && (
        <div className="text-center">
          <div className={`font-mono text-sm mb-2 ${
            gameState === 'success' ? 'text-matrix-green' : 'text-red-500'
          }`}>
            {gameState === 'success' ? '🔓 SYSTEM COMPROMISED' : '🚫 INTRUSION DETECTED'}
          </div>
          <div className="text-terminal-white font-mono text-xs">
            {gameState === 'success' ? 'Elite hacker skills confirmed.' : 'Better luck next time, script kiddie.'}
          </div>
        </div>
      )}
    </div>
  );
};

export default HackingGame;