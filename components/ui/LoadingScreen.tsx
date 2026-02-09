"use client";

import { useState, useEffect } from "react";
import { Sparkles, Zap, Cpu, Database, Globe, Terminal } from "lucide-react";
import NextImage from "next/image";

export default function LoadingScreen({
  onComplete,
}: {
  onComplete: () => void;
}) {
  const [progress, setProgress] = useState(0);
  const [currentPhase, setCurrentPhase] = useState(0);
  const [loadedResources, setLoadedResources] = useState(0);
  const [totalResources, setTotalResources] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; size: number; duration: number; delay: number }>>([]);

  useEffect(() => {
    setMounted(true);
    const newParticles = Array.from({ length: 25 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 2 + Math.random() * 4,
      duration: 15 + Math.random() * 20,
      delay: Math.random() * 10,
    }));
    setParticles(newParticles);
  }, []);

  const phases = [
    { label: "Initializing Components", range: [0, 25], icon: Cpu },
    { label: "Loading Assets", range: [25, 60], icon: Database },
    { label: "Optimizing Performance", range: [60, 85], icon: Globe },
    { label: "Almost Ready", range: [85, 100], icon: Zap },
  ];

  const getCurrentPhase = (progress: number) => {
    for (let i = 0; i < phases.length; i++) {
      if (progress >= phases[i].range[0] && progress <= phases[i].range[1]) {
        return i;
      }
    }
    return phases.length - 1;
  };

  useEffect(() => {
    let isMounted = true;
    const resources: string[] = [];
    
    const images = document.querySelectorAll('img');
    const links = document.querySelectorAll('link[rel="stylesheet"]');
    
    const portfolioImages = [
      '/Ansh-model.png',
      '/consultbridge-dashboard(2).png',
      '/hop11-dashboard.png',
      '/MindMingle-dashboard.png',
      '/vacation-rental-dashboard (2).png',
      '/financial-literacy-dashboard (2).png'
    ];
    
    resources.push(...portfolioImages);
    
    images.forEach(img => {
      if (img.src && !resources.includes(img.src)) {
        resources.push(img.src);
      }
    });
    
    links.forEach(link => {
      if (link.href && !resources.includes(link.href)) {
        resources.push(link.href);
      }
    });
    
    setTotalResources(Math.max(resources.length, 8));
    
    let loadedCount = 0;
    const updateProgress = () => {
      if (!isMounted) return;
      
      loadedCount++;
      setLoadedResources(loadedCount);
      
      const progressPercent = Math.min((loadedCount / Math.max(resources.length, 8)) * 100, 100);
      setProgress(progressPercent);
      setCurrentPhase(getCurrentPhase(progressPercent));
      
      if (progressPercent >= 100) {
        setTimeout(() => {
          if (isMounted) {
            onComplete();
          }
        }, 800);
      }
    };
    
    const loadResource = (src: string) => {
      return new Promise((resolve) => {
        if (src.startsWith('http') || src.startsWith('/')) {
          const img = new Image();
          img.onload = () => {
            setTimeout(() => {
              updateProgress();
              resolve(true);
            }, 100 + Math.random() * 200);
          };
          img.onerror = () => {
            setTimeout(() => {
              updateProgress();
              resolve(false);
            }, 50);
          };
          img.src = src;
        } else {
          setTimeout(() => {
            updateProgress();
            resolve(true);
          }, 150 + Math.random() * 300);
        }
      });
    };
    
    const loadResources = async () => {
      const batchSize = 2;
      for (let i = 0; i < resources.length; i += batchSize) {
        const batch = resources.slice(i, i + batchSize);
        await Promise.all(batch.map((src) => loadResource(src)));
        await new Promise(resolve => setTimeout(resolve, 100));
      }
      
      if (loadedCount < Math.max(resources.length, 8)) {
        const remaining = Math.max(resources.length, 8) - loadedCount;
        for (let i = 0; i < remaining; i++) {
          setTimeout(() => updateProgress(), i * 100);
        }
      }
    };
    
    setTimeout(() => {
      loadResources();
    }, 300);
    
    return () => {
      isMounted = false;
    };
  }, [onComplete]);

  const currentLabel = phases[currentPhase]?.label || "Loading...";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-background via-background to-primary/5 overflow-hidden">
      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {mounted && particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute rounded-full bg-primary/30"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animation: `floatRandom ${particle.duration}s ease-in-out infinite`,
              animationDelay: `${particle.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Soft gradient mesh */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            background: `
            radial-gradient(circle at 20% 20%, rgba(168, 85, 247, 0.12) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(236, 72, 153, 0.12) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.08) 0%, transparent 50%)
          `,
            animation: "meshMove 20s ease-in-out infinite alternate",
          }}
        />
      </div>

      <div className="relative z-10 text-center space-y-8 px-8 max-w-2xl mx-auto">
        {/* Logo with glow */}
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary blur-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-700 animate-pulse" />
          <div className="relative flex items-center justify-center">
            <div className="relative">
              {/* Orbiting dots around logo */}
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 bg-primary rounded-full"
                  style={{
                    top: '50%',
                    left: '50%',
                    animation: `orbit 4s linear infinite`,
                    animationDelay: `${i * 0.5}s`,
                  }}
                />
              ))}
              <NextImage 
                src="/ansh-cari.png" 
                alt="Logo" 
                width={180} 
                height={180} 
                className="object-contain rounded-2xl relative z-10 drop-shadow-2xl" 
                style={{
                  filter: 'drop-shadow(0 0 30px rgba(168, 85, 247, 0.5))'
                }}
                priority 
              />
            </div>
          </div>
        </div>

        {/* Loading text */}
        <div className="space-y-2">
          <h1 className="font-mono text-4xl font-bold tracking-wider bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
            LOADING
          </h1>
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <Terminal className="w-4 h-4 animate-pulse" />
            <span className="font-mono">{currentLabel}</span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="space-y-6">
          <div className="relative h-2 bg-muted/20 rounded-full overflow-hidden border border-primary/30">
            <div
              className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 animate-gradient bg-[length:200%_auto]"
            />
            <div
              className="relative h-full bg-gradient-to-r from-primary via-accent to-primary transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-lg shadow-primary/50 animate-pulse" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-lg p-3 space-y-1">
              <div className="flex items-center justify-center gap-1">
                <Cpu className="w-4 h-4 text-primary" />
                <span className="text-xs text-muted-foreground">Progress</span>
              </div>
              <div className="text-2xl font-bold font-mono text-primary">{Math.round(progress)}%</div>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-accent/20 rounded-lg p-3 space-y-1">
              <div className="flex items-center justify-center gap-1">
                <Database className="w-4 h-4 text-accent" />
                <span className="text-xs text-muted-foreground">Resources</span>
              </div>
              <div className="text-2xl font-bold font-mono text-accent">{loadedResources}/{totalResources}</div>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-lg p-3 space-y-1">
              <div className="flex items-center justify-center gap-1">
                <Zap className="w-4 h-4 text-primary" />
                <span className="text-xs text-muted-foreground">Phase</span>
              </div>
              <div className="text-2xl font-bold font-mono text-primary">{currentPhase + 1}/4</div>
            </div>
          </div>

          {/* Phase Indicators */}
          <div className="flex justify-between items-center px-2">
            {phases.map((phase, idx) => {
              const PhaseIcon = phase.icon;
              const isActive = idx === currentPhase;
              const isComplete = idx < currentPhase;
              return (
                <div key={idx} className="flex flex-col items-center gap-2">
                  <div className={`w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                    isComplete ? 'bg-primary border-primary' :
                    isActive ? 'bg-primary/20 border-primary animate-pulse' :
                    'bg-muted/20 border-muted'
                  }`}>
                    <PhaseIcon className={`w-5 h-5 ${
                      isComplete || isActive ? 'text-primary-foreground' : 'text-muted-foreground'
                    }`} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes meshMove {
          0% {
            transform: scale(1) rotate(0deg);
          }
          100% {
            transform: scale(1.2) rotate(10deg);
          }
        }
        @keyframes orbit {
          0% {
            transform: translate(-50%, -50%) rotate(0deg) translateX(110px) rotate(0deg);
          }
          100% {
            transform: translate(-50%, -50%) rotate(360deg) translateX(110px) rotate(-360deg);
          }
        }
        @keyframes floatRandom {
          0%, 100% {
            transform: translate(0, 0);
            opacity: 0.3;
          }
          25% {
            transform: translate(40px, -50px);
            opacity: 0.6;
          }
          50% {
            transform: translate(-30px, -100px);
            opacity: 0.8;
          }
          75% {
            transform: translate(50px, -70px);
            opacity: 0.5;
          }
        }
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </div>
  );
}
