export const DataStreams = () => {
  return (
    <>
      {/* Vertical Data Streams */}
      {[...Array(12)].map((_, i) => (
        <div 
          key={i}
          className="absolute top-0 w-px bg-gradient-to-b from-transparent via-primary to-transparent animate-data-stream"
          style={{
            left: `${10 + i * 7}%`,
            height: '100vh',
            animationDelay: `${i * 0.3}s`
          }}
        />
      ))}

      {/* Horizontal Scan Lines */}
      {[...Array(8)].map((_, i) => (
        <div 
          key={i}
          className="absolute left-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent animate-cyber-flow"
          style={{
            top: `${15 + i * 10}%`,
            width: '100vw',
            animationDelay: `${i * 0.5}s`
          }}
        />
      ))}

      {/* Particle Streams */}
      {[...Array(20)].map((_, i) => (
        <div 
          key={i}
          className="absolute w-1 h-1 bg-secondary rounded-full animate-cyber-flow"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${i * 0.2}s`,
            animationDuration: `${2 + Math.random() * 3}s`
          }}
        />
      ))}

      {/* Corner Data Flows */}
      <div className="absolute top-0 left-0 w-32 h-32">
        <svg className="w-full h-full" viewBox="0 0 128 128">
          <path 
            d="M0 0 L128 0 L128 128"
            stroke="hsl(var(--primary))"
            strokeWidth="1"
            fill="none"
            strokeDasharray="4,4"
            className="animate-cyber-flow"
          />
        </svg>
      </div>

      <div className="absolute top-0 right-0 w-32 h-32">
        <svg className="w-full h-full" viewBox="0 0 128 128">
          <path 
            d="M128 0 L0 0 L0 128"
            stroke="hsl(var(--accent))"
            strokeWidth="1"
            fill="none"
            strokeDasharray="4,4"
            className="animate-cyber-flow"
          />
        </svg>
      </div>

      <div className="absolute bottom-0 left-0 w-32 h-32">
        <svg className="w-full h-full" viewBox="0 0 128 128">
          <path 
            d="M0 128 L128 128 L128 0"
            stroke="hsl(var(--secondary))"
            strokeWidth="1"
            fill="none"
            strokeDasharray="4,4"
            className="animate-cyber-flow"
          />
        </svg>
      </div>

      <div className="absolute bottom-0 right-0 w-32 h-32">
        <svg className="w-full h-full" viewBox="0 0 128 128">
          <path 
            d="M128 128 L0 128 L0 0"
            stroke="hsl(var(--primary))"
            strokeWidth="1"
            fill="none"
            strokeDasharray="4,4"
            className="animate-cyber-flow"
          />
        </svg>
      </div>

      {/* Central Cross Hair */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <svg width="100" height="100" viewBox="0 0 100 100">
          <line x1="50" y1="0" x2="50" y2="100" stroke="hsl(var(--primary))" strokeWidth="1" opacity="0.5" />
          <line x1="0" y1="50" x2="100" y2="50" stroke="hsl(var(--primary))" strokeWidth="1" opacity="0.5" />
          <circle 
            cx="50" 
            cy="50" 
            r="20" 
            fill="none" 
            stroke="hsl(var(--accent))" 
            strokeWidth="1"
            strokeDasharray="3,3"
            className="animate-cyber-rotate"
          />
        </svg>
      </div>
    </>
  );
};