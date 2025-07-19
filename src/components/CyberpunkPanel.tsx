import { useEffect, useState } from "react";
import { FlowingEnergy } from "./FlowingEnergy";
import { CircularElements } from "./CircularElements";
import { TechnicalReadouts } from "./TechnicalReadouts";
import { DataStreams } from "./DataStreams";
import { MatrixRain } from "./MatrixRain";
import { WaveEffects } from "./WaveEffects";

export const CyberpunkPanel = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="relative w-full h-screen bg-background overflow-hidden">
      {/* Matrix Rain Effect */}
      <MatrixRain />

      {/* Wave Effects */}
      <WaveEffects />

      {/* Grid Background */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 0, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 0, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          zIndex: 3
        }}
      />

      {/* Corner Elements */}
      <div className="absolute top-4 left-4 w-16 h-16 border-l-2 border-t-2 border-primary animate-cyber-glow" style={{ zIndex: 10 }} />
      <div className="absolute top-4 right-4 w-16 h-16 border-r-2 border-t-2 border-primary animate-cyber-glow" style={{ zIndex: 10 }} />
      <div className="absolute bottom-4 left-4 w-16 h-16 border-l-2 border-b-2 border-primary animate-cyber-glow" style={{ zIndex: 10 }} />
      <div className="absolute bottom-4 right-4 w-16 h-16 border-r-2 border-b-2 border-primary animate-cyber-glow" style={{ zIndex: 10 }} />

      {/* Central Flowing Energy */}
      <div className="absolute inset-0 flex items-center justify-center" style={{ zIndex: 5 }}>
        <FlowingEnergy />
      </div>

      {/* Circular UI Elements */}
      <CircularElements />

      {/* Technical Readouts */}
      <TechnicalReadouts />

      {/* Data Streams */}
      <DataStreams />

      {/* HUD Overlay Elements */}
      <div className="absolute top-1/2 left-8 transform -translate-y-1/2">
        <div className="space-y-4">
          {[...Array(6)].map((_, i) => (
            <div 
              key={i}
              className="w-3 h-3 rounded-full bg-primary animate-cyber-pulse border border-primary"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </div>
      </div>

      <div className="absolute top-1/2 right-8 transform -translate-y-1/2">
        <div className="space-y-4">
          {[...Array(6)].map((_, i) => (
            <div 
              key={i}
              className="w-3 h-3 rounded-full bg-accent animate-cyber-pulse border border-accent"
              style={{ animationDelay: `${i * 0.3}s` }}
            />
          ))}
        </div>
      </div>

      {/* Bottom Navigation Bar */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex space-x-4">
          {[...Array(4)].map((_, i) => (
            <div 
              key={i}
              className="w-20 h-12 rounded-full border-2 border-cyber-blue bg-cyber-blue/10 animate-cyber-glow flex items-center justify-center"
              style={{ animationDelay: `${i * 0.5}s` }}
            >
              <div className="w-8 h-2 bg-cyber-blue rounded animate-cyber-pulse" />
            </div>
          ))}
        </div>
      </div>

      {/* Loading State */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-background flex items-center justify-center">
          <div className="text-2xl text-primary animate-cyber-pulse">
            INITIALIZING SYSTEM...
          </div>
        </div>
      )}
    </div>
  );
};