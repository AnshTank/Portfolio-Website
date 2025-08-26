"use client";

import { useState, useEffect } from "react";
import { Code, Sparkles, Zap, Cpu, Database, Globe } from "lucide-react";

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [currentChunk, setCurrentChunk] = useState(0);
  const [glitchText, setGlitchText] = useState("ANSH TANK");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  
  const chunks = [
    { label: "Loading Components", target: 25, icon: Cpu },
    { label: "Preparing Interface", target: 50, icon: Database },
    { label: "Optimizing Performance", target: 75, icon: Globe },
    { label: "Almost Ready", target: 100, icon: Zap }
  ];

  useEffect(() => {
    // Subtle glitch effect for name
    const glitchInterval = setInterval(() => {
      const glitchChars = "!@#$%^&*()_+-=[]{}|;:,.<>?";
      const original = "ANSH TANK";
      let glitched = "";
      
      for (let i = 0; i < original.length; i++) {
        if (Math.random() < 0.03) {
          glitched += glitchChars[Math.floor(Math.random() * glitchChars.length)];
        } else {
          glitched += original[i];
        }
      }
      
      setGlitchText(glitched);
      setTimeout(() => setGlitchText(original), 50);
    }, 4000);

    const loadChunk = (chunkIndex: number) => {
      if (chunkIndex >= chunks.length) {
        clearInterval(glitchInterval);
        setTimeout(onComplete, 500);
        return;
      }

      setCurrentChunk(chunkIndex);
      const target = chunks[chunkIndex].target;
      const startProgress = chunkIndex === 0 ? 0 : chunks[chunkIndex - 1].target;
      const duration = 1000 + Math.random() * 800;
      const startTime = Date.now();

      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progressRatio = Math.min(elapsed / duration, 1);
        const easeOut = 1 - Math.pow(1 - progressRatio, 3);
        const newProgress = startProgress + (target - startProgress) * easeOut;
        
        setProgress(newProgress);

        if (progressRatio < 1) {
          requestAnimationFrame(animate);
        } else {
          setTimeout(() => loadChunk(chunkIndex + 1), 300);
        }
      };

      requestAnimationFrame(animate);
    };

    loadChunk(0);

    return () => clearInterval(glitchInterval);
  }, []);

  const CurrentIcon = chunks[currentChunk]?.icon || Code;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-background via-background to-primary/5">
      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        {mounted && [...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(168, 85, 247, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(168, 85, 247, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="relative z-10 text-center space-y-8 px-8">
        {/* Futuristic Logo */}
        <div className="flex items-center justify-center space-x-4 mb-8">
          <div className="relative">
            <div className="w-20 h-20 bg-gradient-to-br from-primary via-accent to-primary rounded-2xl flex items-center justify-center border border-primary/30 shadow-2xl">
              <Code className="w-10 h-10 text-white animate-pulse" />
            </div>
            <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full animate-pulse border-2 border-background">
              <Sparkles className="w-4 h-4 text-white m-0.5 animate-spin" style={{animationDuration: '3s'}} />
            </div>
            {/* Orbiting elements */}
            <div className="absolute inset-0 animate-spin" style={{animationDuration: '10s'}}>
              <div className="absolute -top-2 left-1/2 w-2 h-2 bg-primary rounded-full"></div>
            </div>
          </div>
          
          <div className="text-left">
            <div className="font-playfair text-4xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              {glitchText}
            </div>
            <div className="text-sm text-muted-foreground font-source-sans tracking-wider">
              FULL-STACK • DEVOPS
            </div>
          </div>
        </div>

        {/* Futuristic Progress */}
        <div className="w-96 max-w-sm mx-auto space-y-6">
          <div className="relative">
            <div className="h-3 bg-muted/20 rounded-full overflow-hidden border border-primary/30">
              <div 
                className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-500 ease-out relative"
                style={{ width: `${progress}%` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/40 animate-pulse"></div>
              </div>
            </div>
            
            {/* Progress indicators */}
            <div className="absolute -top-1 left-0 w-full flex justify-between">
              {chunks.map((_, i) => (
                <div
                  key={i}
                  className={`w-2 h-2 rounded-full border-2 ${
                    i <= currentChunk ? 'bg-primary border-primary' : 'bg-muted border-muted'
                  }`}
                />
              ))}
            </div>
          </div>
          
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <CurrentIcon className="w-4 h-4 text-primary animate-pulse" />
              <span className="text-sm text-muted-foreground font-source-sans">
                {chunks[currentChunk]?.label || "Loading..."}
              </span>
            </div>
            <span className="font-mono text-primary font-bold text-lg">
              {Math.round(progress)}%
            </span>
          </div>
        </div>

        {/* Matrix-style loading */}
        <div className="flex justify-center space-x-1">
          {mounted && [...Array(8)].map((_, i) => (
            <div
              key={i}
              className="w-1 h-8 bg-primary/60 animate-pulse"
              style={{ 
                animationDelay: `${i * 0.1}s`,
                animationDuration: '1s'
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}