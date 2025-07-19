export const CircularElements = () => {
  return (
    <>
      {/* Top Left Circular HUD */}
      <div className="absolute top-16 left-16">
        <div className="relative w-32 h-32">
          <div className="absolute inset-0 border-2 border-primary rounded-full animate-cyber-rotate opacity-60" />
          <div className="absolute inset-2 border border-accent rounded-full animate-cyber-rotate" style={{ animationDirection: 'reverse', animationDuration: '8s' }} />
          <div className="absolute inset-4 border border-secondary rounded-full animate-cyber-pulse" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xs text-primary font-mono">XS1 001</span>
          </div>
          {/* Corner Markers */}
          {[0, 90, 180, 270].map((angle, i) => (
            <div 
              key={i}
              className="absolute w-2 h-2 bg-primary animate-cyber-pulse"
              style={{
                top: '50%',
                left: '50%',
                transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-66px)`,
                animationDelay: `${i * 0.2}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Top Right Circular Display */}
      <div className="absolute top-16 right-16">
        <div className="relative w-24 h-24">
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <circle 
              cx="50" 
              cy="50" 
              r="45" 
              fill="none" 
              stroke="hsl(300, 100%, 50%)" 
              strokeWidth="2"
              className="animate-cyber-pulse"
            />
            <circle 
              cx="50" 
              cy="50" 
              r="35" 
              fill="none" 
              stroke="hsl(180, 100%, 50%)" 
              strokeWidth="1"
              strokeDasharray="5,5"
              className="animate-cyber-rotate"
            />
            {/* Progress Arc */}
            <circle 
              cx="50" 
              cy="50" 
              r="40" 
              fill="none" 
              stroke="hsl(260, 100%, 50%)" 
              strokeWidth="3"
              strokeDasharray="188 63"
              className="animate-cyber-glow"
              transform="rotate(-90 50 50)"
            />
            <text x="50" y="55" textAnchor="middle" className="text-xs fill-primary font-mono">
              HR 72
            </text>
          </svg>
        </div>
      </div>

      {/* Bottom Left Radar */}
      <div className="absolute bottom-32 left-16">
        <div className="relative w-28 h-28">
          <div className="absolute inset-0 border border-cyber-blue rounded-full" />
          <div className="absolute inset-2 border border-cyber-blue/50 rounded-full" />
          <div className="absolute inset-4 border border-cyber-blue/30 rounded-full" />
          
          {/* Radar Sweep */}
          <div className="absolute inset-0 rounded-full overflow-hidden">
            <div 
              className="absolute top-1/2 left-1/2 w-0 h-12 border-l-2 border-cyber-blue origin-bottom animate-cyber-rotate"
              style={{ animationDuration: '3s' }}
            />
          </div>

          {/* Radar Blips */}
          {[...Array(5)].map((_, i) => (
            <div 
              key={i}
              className="absolute w-1 h-1 bg-cyber-blue rounded-full animate-cyber-pulse"
              style={{
                top: `${30 + Math.random() * 40}%`,
                left: `${30 + Math.random() * 40}%`,
                animationDelay: `${i * 0.4}s`
              }}
            />
          ))}

          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xs text-cyber-blue font-mono">SCN</span>
          </div>
        </div>
      </div>

      {/* Bottom Right Status Ring */}
      <div className="absolute bottom-32 right-16">
        <div className="relative w-20 h-20">
          <svg className="w-full h-full" viewBox="0 0 80 80">
            {/* Multiple Progress Rings */}
            {[35, 30, 25].map((radius, i) => (
              <circle 
                key={i}
                cx="40" 
                cy="40" 
                r={radius} 
                fill="none" 
                stroke={`hsl(${300 - i * 40}, 100%, 50%)`}
                strokeWidth="2"
                strokeDasharray={`${Math.PI * 2 * radius * 0.7} ${Math.PI * 2 * radius * 0.3}`}
                className="animate-cyber-glow"
                style={{ animationDelay: `${i * 0.3}s` }}
                transform="rotate(-90 40 40)"
              />
            ))}
            <text x="40" y="45" textAnchor="middle" className="text-xs fill-primary font-mono">
              PWR
            </text>
          </svg>
        </div>
      </div>

      {/* Floating Orbital Elements */}
      {[...Array(6)].map((_, i) => (
        <div 
          key={i}
          className="absolute w-8 h-8 border border-accent rounded-full animate-cyber-flow"
          style={{
            top: `${20 + Math.random() * 60}%`,
            left: `${10 + Math.random() * 80}%`,
            animationDelay: `${i * 0.8}s`,
            animationDuration: `${4 + i}s`
          }}
        />
      ))}
    </>
  );
};