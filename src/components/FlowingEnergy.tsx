export const FlowingEnergy = () => {
  return (
    <div className="relative w-96 h-96">
      {/* Main Energy Flow */}
      <svg 
        className="absolute inset-0 w-full h-full" 
        viewBox="0 0 400 400"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="energyGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(300, 100%, 50%)" stopOpacity="0.8">
              <animate attributeName="stop-color" 
                values="hsl(300, 100%, 50%);hsl(260, 100%, 50%);hsl(300, 100%, 50%)" 
                dur="3s" repeatCount="indefinite" />
            </stop>
            <stop offset="50%" stopColor="hsl(260, 100%, 50%)" stopOpacity="1">
              <animate attributeName="stop-color" 
                values="hsl(260, 100%, 50%);hsl(180, 100%, 50%);hsl(260, 100%, 50%)" 
                dur="3s" repeatCount="indefinite" />
            </stop>
            <stop offset="100%" stopColor="hsl(180, 100%, 50%)" stopOpacity="0.6">
              <animate attributeName="stop-color" 
                values="hsl(180, 100%, 50%);hsl(300, 100%, 50%);hsl(180, 100%, 50%)" 
                dur="3s" repeatCount="indefinite" />
            </stop>
          </linearGradient>
          
          <linearGradient id="energyGradient2" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(300, 100%, 50%)" stopOpacity="0.6" />
            <stop offset="100%" stopColor="hsl(260, 100%, 50%)" stopOpacity="0.9" />
          </linearGradient>

          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Primary Energy Flow */}
        <path 
          d="M50 200 Q200 50 350 200 Q200 350 50 200" 
          fill="url(#energyGradient1)" 
          filter="url(#glow)"
          opacity="0.8"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            values="0 200 200;360 200 200"
            dur="15s"
            repeatCount="indefinite"
          />
        </path>

        {/* Secondary Energy Streams */}
        {[...Array(8)].map((_, i) => (
          <path 
            key={i}
            d={`M${100 + i * 25} 100 Q200 200 ${300 - i * 25} 300`}
            stroke="url(#energyGradient2)" 
            strokeWidth="2" 
            fill="none"
            filter="url(#glow)"
            opacity="0.6"
          >
            <animate
              attributeName="stroke-dasharray"
              values="0 100;50 50;100 0"
              dur={`${2 + i * 0.3}s`}
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="0.3;0.8;0.3"
              dur={`${1.5 + i * 0.2}s`}
              repeatCount="indefinite"
            />
          </path>
        ))}

        {/* Pulsing Center Core */}
        <circle 
          cx="200" 
          cy="200" 
          r="30" 
          fill="hsl(300, 100%, 50%)" 
          filter="url(#glow)"
        >
          <animate
            attributeName="r"
            values="25;35;25"
            dur="2s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="0.5;1;0.5"
            dur="2s"
            repeatCount="indefinite"
          />
        </circle>

        {/* Orbiting Particles */}
        {[...Array(12)].map((_, i) => (
          <circle 
            key={i}
            cx="200" 
            cy="200" 
            r="3" 
            fill="hsl(180, 100%, 50%)"
            filter="url(#glow)"
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              values={`0 200 200;360 200 200`}
              dur={`${3 + i * 0.5}s`}
              repeatCount="indefinite"
            />
            <animateTransform
              attributeName="transform"
              type="translate"
              values={`${60 + i * 8} 0;${60 + i * 8} 0`}
              dur={`${3 + i * 0.5}s`}
              repeatCount="indefinite"
              additive="sum"
            />
          </circle>
        ))}
      </svg>

      {/* Additional Energy Rings */}
      <div className="absolute inset-0 border border-primary rounded-full animate-cyber-pulse opacity-30" />
      <div 
        className="absolute inset-8 border border-accent rounded-full animate-cyber-pulse opacity-40"
        style={{ animationDelay: '0.5s' }}
      />
      <div 
        className="absolute inset-16 border border-secondary rounded-full animate-cyber-pulse opacity-50"
        style={{ animationDelay: '1s' }}
      />
    </div>
  );
};