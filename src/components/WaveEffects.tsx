export const WaveEffects = () => {
  return (
    <>
      {/* Sine Wave Overlays */}
      <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 2 }}>
        {/* Top Wave */}
        <svg className="absolute top-0 w-full h-32" viewBox="0 0 1000 100" preserveAspectRatio="none">
          <path 
            d="M0,50 Q250,0 500,50 T1000,50 V0 H0 Z"
            fill="url(#waveGradient1)"
            opacity="0.3"
          >
            <animateTransform
              attributeName="transform"
              type="translate"
              values="-200 0;200 0;-200 0"
              dur="8s"
              repeatCount="indefinite"
            />
          </path>
          <defs>
            <linearGradient id="waveGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(300, 100%, 50%)" stopOpacity="0" />
              <stop offset="50%" stopColor="hsl(300, 100%, 50%)" stopOpacity="0.6" />
              <stop offset="100%" stopColor="hsl(300, 100%, 50%)" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>

        {/* Bottom Wave */}
        <svg className="absolute bottom-0 w-full h-32" viewBox="0 0 1000 100" preserveAspectRatio="none">
          <path 
            d="M0,50 Q250,100 500,50 T1000,50 V100 H0 Z"
            fill="url(#waveGradient2)"
            opacity="0.3"
          >
            <animateTransform
              attributeName="transform"
              type="translate"
              values="200 0;-200 0;200 0"
              dur="6s"
              repeatCount="indefinite"
            />
          </path>
          <defs>
            <linearGradient id="waveGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(180, 100%, 50%)" stopOpacity="0" />
              <stop offset="50%" stopColor="hsl(180, 100%, 50%)" stopOpacity="0.6" />
              <stop offset="100%" stopColor="hsl(180, 100%, 50%)" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>

        {/* Left Wave */}
        <svg className="absolute left-0 w-32 h-full" viewBox="0 0 100 1000" preserveAspectRatio="none">
          <path 
            d="M50,0 Q0,250 50,500 T50,1000 H0 V0 Z"
            fill="url(#waveGradient3)"
            opacity="0.2"
          >
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0 -200;0 200;0 -200"
              dur="10s"
              repeatCount="indefinite"
            />
          </path>
          <defs>
            <linearGradient id="waveGradient3" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="hsl(260, 100%, 50%)" stopOpacity="0" />
              <stop offset="50%" stopColor="hsl(260, 100%, 50%)" stopOpacity="0.6" />
              <stop offset="100%" stopColor="hsl(260, 100%, 50%)" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>

        {/* Right Wave */}
        <svg className="absolute right-0 w-32 h-full" viewBox="0 0 100 1000" preserveAspectRatio="none">
          <path 
            d="M50,0 Q100,250 50,500 T50,1000 H100 V0 Z"
            fill="url(#waveGradient4)"
            opacity="0.2"
          >
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0 200;0 -200;0 200"
              dur="7s"
              repeatCount="indefinite"
            />
          </path>
          <defs>
            <linearGradient id="waveGradient4" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="hsl(300, 100%, 50%)" stopOpacity="0" />
              <stop offset="50%" stopColor="hsl(300, 100%, 50%)" stopOpacity="0.6" />
              <stop offset="100%" stopColor="hsl(300, 100%, 50%)" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Diagonal Wave Patterns */}
      <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 1 }}>
        {[...Array(6)].map((_, i) => (
          <div 
            key={i}
            className="absolute w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-20"
            style={{
              top: `${20 + i * 15}%`,
              transform: `rotate(${i * 5}deg)`,
              animation: `cyber-flow ${4 + i * 0.5}s linear infinite`
            }}
          />
        ))}
      </div>

      {/* Radial Wave Pulses */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 pointer-events-none">
        {[...Array(4)].map((_, i) => (
          <div 
            key={i}
            className="absolute inset-0 border border-accent rounded-full opacity-20"
            style={{
              animation: `cyber-pulse ${2 + i * 0.5}s ease-in-out infinite`,
              animationDelay: `${i * 0.3}s`
            }}
          />
        ))}
      </div>

      <div className="absolute top-3/4 right-1/4 w-48 h-48 pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <div 
            key={i}
            className="absolute inset-0 border border-secondary rounded-full opacity-25"
            style={{
              animation: `cyber-pulse ${1.5 + i * 0.4}s ease-in-out infinite`,
              animationDelay: `${i * 0.4}s`
            }}
          />
        ))}
      </div>

      {/* Frequency Visualization */}
      <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 flex space-x-1 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i}
            className="w-1 bg-primary animate-cyber-pulse"
            style={{
              height: `${Math.random() * 40 + 10}px`,
              animationDelay: `${i * 0.1}s`,
              animationDuration: `${0.5 + Math.random() * 1}s`
            }}
          />
        ))}
      </div>

      {/* Oscilloscope-style waves */}
      <div className="absolute top-1/3 left-1/3 w-96 h-24 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 400 100">
          <path 
            d="M0,50 Q50,20 100,50 T200,50 T300,50 T400,50"
            stroke="hsl(var(--cyber-blue))"
            strokeWidth="1"
            fill="none"
            opacity="0.6"
          >
            <animate
              attributeName="d"
              values="M0,50 Q50,20 100,50 T200,50 T300,50 T400,50;M0,50 Q50,80 100,50 T200,50 T300,50 T400,50;M0,50 Q50,20 100,50 T200,50 T300,50 T400,50"
              dur="2s"
              repeatCount="indefinite"
            />
          </path>
          <path 
            d="M0,25 Q50,5 100,25 T200,25 T300,25 T400,25"
            stroke="hsl(var(--primary))"
            strokeWidth="1"
            fill="none"
            opacity="0.4"
          >
            <animate
              attributeName="d"
              values="M0,25 Q50,5 100,25 T200,25 T300,25 T400,25;M0,25 Q50,45 100,25 T200,25 T300,25 T400,25;M0,25 Q50,5 100,25 T200,25 T300,25 T400,25"
              dur="1.5s"
              repeatCount="indefinite"
            />
          </path>
        </svg>
      </div>
    </>
  );
};