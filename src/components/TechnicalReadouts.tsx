export const TechnicalReadouts = () => {
  const generateRandomData = () => {
    return {
      temperature: (Math.random() * 40 + 20).toFixed(1),
      pressure: (Math.random() * 1000 + 500).toFixed(0),
      voltage: (Math.random() * 50 + 100).toFixed(2),
      frequency: (Math.random() * 100 + 400).toFixed(1)
    };
  };

  return (
    <>
      {/* Top Data Readouts */}
      <div className="absolute top-8 left-1/2 transform -translate-x-1/2">
        <div className="flex space-x-8">
          <div className="text-center">
            <div className="text-xs text-muted-foreground font-mono">TEMP</div>
            <div className="text-lg text-primary font-mono animate-cyber-pulse">
              {generateRandomData().temperature}°C
            </div>
          </div>
          <div className="text-center">
            <div className="text-xs text-muted-foreground font-mono">FREQ</div>
            <div className="text-lg text-accent font-mono animate-cyber-pulse">
              {generateRandomData().frequency}Hz
            </div>
          </div>
          <div className="text-center">
            <div className="text-xs text-muted-foreground font-mono">VOLT</div>
            <div className="text-lg text-secondary font-mono animate-cyber-pulse">
              {generateRandomData().voltage}V
            </div>
          </div>
        </div>
      </div>

      {/* Left Side Technical Panel */}
      <div className="absolute top-1/4 left-4">
        <div className="bg-card/20 border border-cyber-grid p-4 rounded-lg backdrop-blur-sm">
          <div className="text-xs text-muted-foreground font-mono mb-2">SYSTEM STATUS</div>
          <div className="space-y-2">
            {['ONLINE', 'STABLE', 'ACTIVE', 'NOMINAL'].map((status, i) => (
              <div key={i} className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-cyber-pulse" />
                <span className="text-xs text-foreground font-mono">{status}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Side Data Stream */}
      <div className="absolute top-1/4 right-4">
        <div className="bg-card/20 border border-cyber-grid p-4 rounded-lg backdrop-blur-sm">
          <div className="text-xs text-muted-foreground font-mono mb-2">DATA STREAM</div>
          <div className="space-y-1">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="flex items-center space-x-2">
                <div className="text-xs text-accent font-mono">
                  {Math.random().toString(36).substring(2, 8).toUpperCase()}
                </div>
                <div className="w-4 h-1 bg-accent animate-cyber-glow" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Center Coordinates */}
      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2">
        <div className="bg-card/20 border border-cyber-grid px-6 py-2 rounded-lg backdrop-blur-sm">
          <div className="flex space-x-6 text-xs font-mono">
            <span className="text-primary">X: {(Math.random() * 1000).toFixed(2)}</span>
            <span className="text-accent">Y: {(Math.random() * 1000).toFixed(2)}</span>
            <span className="text-secondary">Z: {(Math.random() * 1000).toFixed(2)}</span>
          </div>
        </div>
      </div>

      {/* Floating Info Panels */}
      <div className="absolute top-1/3 left-1/4">
        <div className="text-xs text-primary font-mono animate-cyber-pulse">
          LAT: 34.0522N
        </div>
      </div>

      <div className="absolute top-2/3 right-1/4">
        <div className="text-xs text-accent font-mono animate-cyber-pulse">
          LON: 118.2437W
        </div>
      </div>

      {/* Error/Warning Indicators */}
      <div className="absolute top-1/2 left-1/6">
        <div className="space-y-1">
          {['ERR', 'CHK', 'RDY'].map((code, i) => (
            <div 
              key={i}
              className="text-xs font-mono px-2 py-1 border rounded animate-cyber-glow"
              style={{
                color: i === 0 ? 'hsl(0, 100%, 50%)' : 'hsl(var(--primary))',
                borderColor: i === 0 ? 'hsl(0, 100%, 50%)' : 'hsl(var(--primary))',
                animationDelay: `${i * 0.5}s`
              }}
            >
              {code}
            </div>
          ))}
        </div>
      </div>

      <div className="absolute top-1/2 right-1/6">
        <div className="space-y-1">
          {['PWR', 'SYS', 'NET'].map((code, i) => (
            <div 
              key={i}
              className="text-xs font-mono px-2 py-1 border border-accent rounded animate-cyber-glow text-accent"
              style={{ animationDelay: `${i * 0.3}s` }}
            >
              {code}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};