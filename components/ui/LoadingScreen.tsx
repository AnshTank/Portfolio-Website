"use client";

import { useState, useEffect } from "react";
import { Code, Sparkles, Zap, Cpu, Database, Globe } from "lucide-react";

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

  useEffect(() => {
    setMounted(true);
  }, []);

  const phases = [
    { label: "Initializing Components", range: [0, 25], icon: Cpu },
    { label: "Loading Assets", range: [25, 60], icon: Database },
    { label: "Optimizing Performance", range: [60, 85], icon: Globe },
    { label: "Almost Ready", range: [85, 100], icon: Zap },
  ];

  // Get current phase based on progress
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
    
    // Collect all images and resources to track
    const images = document.querySelectorAll('img');
    const links = document.querySelectorAll('link[rel="stylesheet"]');
    const scripts = document.querySelectorAll('script[src]');
    
    // Add portfolio images
    const portfolioImages = [
      '/Ansh-model.png',
      '/consultbridge-dashboard(2).png',
      '/hop11-dashboard.png',
      '/MindMingle-dashboard.png',
      '/vacation-rental-dashboard (2).png',
      '/financial-literacy-dashboard (2).png'
    ];
    
    resources.push(...portfolioImages);
    
    // Add existing images
    images.forEach(img => {
      if (img.src && !resources.includes(img.src)) {
        resources.push(img.src);
      }
    });
    
    // Add stylesheets
    links.forEach(link => {
      if (link.href && !resources.includes(link.href)) {
        resources.push(link.href);
      }
    });
    
    setTotalResources(Math.max(resources.length, 8)); // Minimum 8 for smooth progress
    
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
    
    // Load resources with realistic timing
    const loadResource = (src: string, index: number) => {
      return new Promise((resolve) => {
        if (src.startsWith('http') || src.startsWith('/')) {
          const img = new Image();
          img.onload = () => {
            setTimeout(() => {
              updateProgress();
              resolve(true);
            }, 100 + Math.random() * 200); // Realistic loading time
          };
          img.onerror = () => {
            setTimeout(() => {
              updateProgress();
              resolve(false);
            }, 50);
          };
          img.src = src;
        } else {
          // For non-image resources, simulate loading
          setTimeout(() => {
            updateProgress();
            resolve(true);
          }, 150 + Math.random() * 300);
        }
      });
    };
    
    // Start loading resources sequentially with some parallel loading
    const loadResources = async () => {
      const batchSize = 2;
      for (let i = 0; i < resources.length; i += batchSize) {
        const batch = resources.slice(i, i + batchSize);
        await Promise.all(batch.map((src, idx) => loadResource(src, i + idx)));
        
        // Small delay between batches for realistic feel
        await new Promise(resolve => setTimeout(resolve, 100));
      }
      
      // Ensure we reach 100%
      if (loadedCount < Math.max(resources.length, 8)) {
        const remaining = Math.max(resources.length, 8) - loadedCount;
        for (let i = 0; i < remaining; i++) {
          setTimeout(() => updateProgress(), i * 100);
        }
      }
    };
    
    // Start loading after a brief delay
    setTimeout(() => {
      loadResources();
    }, 300);
    
    return () => {
      isMounted = false;
    };
  }, [onComplete]);

  const CurrentIcon = phases[currentPhase]?.icon || Code;
  const currentLabel = phases[currentPhase]?.label || "Loading...";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-background via-background to-primary/5">
      {/* Neural Network Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated gradient mesh */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background: `
            radial-gradient(circle at 20% 20%, rgba(168, 85, 247, 0.1) 0%, transparent 40%),
            radial-gradient(circle at 80% 80%, rgba(236, 72, 153, 0.1) 0%, transparent 40%),
            radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.1) 0%, transparent 40%),
            radial-gradient(circle at 20% 80%, rgba(34, 197, 94, 0.1) 0%, transparent 40%),
            radial-gradient(circle at 10% 60%, rgba(245, 158, 11, 0.08) 0%, transparent 35%),
            radial-gradient(circle at 90% 40%, rgba(239, 68, 68, 0.08) 0%, transparent 35%)
          `,
            animation: "meshMove 15s ease-in-out infinite alternate",
          }}
        ></div>

        {/* Floating tech elements */}
        <div suppressHydrationWarning>
          {mounted &&
            [...Array(16)].map((_, i) => {
              const elements = [
                "⚡",
                "🚀",
                "💻",
                "⚙️",
                "🔧",
                "📱",
                "🌐",
                "💡",
                "🔍",
                "📊",
                "🔒",
                "🌍",
                "📶",
                "✨",
                "🔥",
                "🎨",
              ];
              const element = elements[i % elements.length];
              const positions = [
                { left: 8, top: 15 },
                { left: 85, top: 12 },
                { left: 25, top: 8 },
                { left: 70, top: 25 },
                { left: 15, top: 35 },
                { left: 90, top: 40 },
                { left: 45, top: 30 },
                { left: 65, top: 45 },
                { left: 10, top: 60 },
                { left: 80, top: 65 },
                { left: 35, top: 55 },
                { left: 55, top: 70 },
                { left: 20, top: 80 },
                { left: 75, top: 85 },
                { left: 40, top: 75 },
                { left: 60, top: 90 },
              ];
              const pos = positions[i] || {
                left: Math.random() * 80 + 10,
                top: Math.random() * 80 + 10,
              };
              return (
                <div
                  key={i}
                  className="absolute text-xl opacity-8"
                  style={{
                    left: `${pos.left}%`,
                    top: `${pos.top}%`,
                    animation: `techFloat ${
                      10 + (i % 4)
                    }s ease-in-out infinite`,
                    animationDelay: `${i * 0.8}s`,
                  }}
                >
                  {element}
                </div>
              );
            })}
        </div>

        {/* Circuit lines */}
        <div suppressHydrationWarning>
          <svg
            className="absolute inset-0 w-full h-full opacity-15"
            style={{ animation: "circuitPulse 8s ease-in-out infinite" }}
          >
            <defs>
              <linearGradient
                id="circuitGrad"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="rgba(168, 85, 247, 0.2)" />
                <stop offset="100%" stopColor="rgba(236, 72, 153, 0.2)" />
              </linearGradient>
            </defs>
            <path
              d="M0 50 Q200 100 400 50 T800 100 L1200 80"
              stroke="url(#circuitGrad)"
              strokeWidth="2"
              fill="none"
            />
            <path
              d="M0 200 Q300 150 500 200 T900 150 L1200 180"
              stroke="url(#circuitGrad)"
              strokeWidth="2"
              fill="none"
            />
            <path
              d="M50 0 Q100 200 150 400 T250 800"
              stroke="url(#circuitGrad)"
              strokeWidth="2"
              fill="none"
            />
            <path
              d="M300 0 Q350 250 400 500 T500 1000"
              stroke="url(#circuitGrad)"
              strokeWidth="2"
              fill="none"
            />
            <circle cx="200" cy="100" r="4" fill="rgba(168, 85, 247, 0.3)" />
            <circle cx="500" cy="200" r="4" fill="rgba(236, 72, 153, 0.3)" />
            <circle cx="150" cy="400" r="4" fill="rgba(59, 130, 246, 0.3)" />
            <circle cx="400" cy="500" r="4" fill="rgba(34, 197, 94, 0.3)" />
          </svg>
        </div>
      </div>

      <div className="relative z-10 text-center space-y-8 px-8 bg-background/80 backdrop-blur-sm rounded-2xl border border-primary/10 shadow-2xl max-w-md mx-auto py-12">
        {/* Futuristic Logo */}
        <div className="flex items-center justify-center space-x-4 mb-8">
          <div className="relative">
            <div className="w-20 h-20 bg-gradient-to-br from-primary via-accent to-primary rounded-2xl flex items-center justify-center border border-primary/30 shadow-2xl">
              <Code className="w-10 h-10 text-white animate-pulse" />
            </div>
            <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full animate-pulse border-2 border-background">
              <Sparkles
                className="w-4 h-4 text-white m-0.5 animate-spin"
                style={{ animationDuration: "3s" }}
              />
            </div>
            {/* Orbiting elements */}
            <div
              className="absolute inset-0 animate-spin"
              style={{ animationDuration: "10s" }}
            >
              <div className="absolute -top-2 left-1/2 w-2 h-2 bg-primary rounded-full"></div>
            </div>
          </div>

          <div className="text-left">
            <div className="font-playfair text-4xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              ANSH TANK
            </div>
            <div className="text-sm text-muted-foreground font-source-sans tracking-wider">
              FULL-STACK • DEVOPS
            </div>
          </div>
        </div>

        {/* Dynamic Progress */}
        <div className="w-96 max-w-sm mx-auto space-y-6">
          <div className="relative">
            <div className="h-3 bg-muted/20 rounded-full overflow-hidden border border-primary/30">
              <div
                className="h-full bg-gradient-to-r from-primary to-accent rounded-full relative transition-all duration-300 ease-out"
                style={{ width: `${progress}%` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/40 animate-pulse"></div>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <CurrentIcon className="w-4 h-4 text-primary transition-all duration-300 animate-pulse" />
              <span className="text-sm text-muted-foreground font-source-sans transition-opacity duration-300 ease-in-out">
                {currentLabel}
              </span>
            </div>
            <span className="font-mono text-primary font-bold text-lg transition-all duration-300 ease-out">
              {Math.round(progress)}%
            </span>
          </div>
          
          {/* Resource counter */}
          <div className="text-xs text-muted-foreground/70 font-mono">
            {loadedResources}/{totalResources} resources loaded
          </div>
        </div>

        {/* Circular Progress Indicator */}
        <div className="relative w-16 h-16 mx-auto">
          <div className="absolute inset-0 rounded-full border-2 border-primary/30"></div>
          <div className="absolute inset-2 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 animate-pulse"></div>
          
          {/* Circular progress fill */}
          <svg className="absolute inset-0 w-16 h-16 transform -rotate-90">
            <circle
              cx="32"
              cy="32"
              r="28"
              stroke="currentColor"
              strokeWidth="3"
              fill="none"
              className="text-primary/30"
            />
            <circle
              cx="32"
              cy="32"
              r="28"
              stroke="currentColor"
              strokeWidth="3"
              fill="none"
              strokeDasharray={`${2 * Math.PI * 28}`}
              strokeDashoffset={`${2 * Math.PI * 28 * (1 - progress / 100)}`}
              className="text-primary transition-all duration-300 ease-out"
              strokeLinecap="round"
            />
          </svg>
          
          <div className="absolute inset-4 rounded-full bg-primary/10 animate-pulse" style={{ animationDuration: "2s" }}></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes meshMove {
          0% {
            transform: scale(1) rotate(0deg);
          }
          100% {
            transform: scale(1.1) rotate(5deg);
          }
        }
        @keyframes techFloat {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
            opacity: 0.1;
          }
          50% {
            transform: translateY(-20px) rotate(10deg);
            opacity: 0.3;
          }
        }
        @keyframes circuitPulse {
          0%,
          100% {
            opacity: 0.1;
          }
          50% {
            opacity: 0.3;
          }
        }
      `}</style>
    </div>
  );
}

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-background via-background to-primary/5">
      {/* Neural Network Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated gradient mesh */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background: `
            radial-gradient(circle at 20% 20%, rgba(168, 85, 247, 0.1) 0%, transparent 40%),
            radial-gradient(circle at 80% 80%, rgba(236, 72, 153, 0.1) 0%, transparent 40%),
            radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.1) 0%, transparent 40%),
            radial-gradient(circle at 20% 80%, rgba(34, 197, 94, 0.1) 0%, transparent 40%),
            radial-gradient(circle at 10% 60%, rgba(245, 158, 11, 0.08) 0%, transparent 35%),
            radial-gradient(circle at 90% 40%, rgba(239, 68, 68, 0.08) 0%, transparent 35%)
          `,
            animation: "meshMove 15s ease-in-out infinite alternate",
          }}
        ></div>

        {/* Floating tech elements */}
        <div suppressHydrationWarning>
          {mounted &&
            [...Array(16)].map((_, i) => {
              const elements = [
                "⚡",
                "🚀",
                "💻",
                "⚙️",
                "🔧",
                "📱",
                "🌐",
                "💡",
                "🔍",
                "📊",
                "🔒",
                "🌍",
                "📶",
                "✨",
                "🔥",
                "🎨",
              ];
              const element = elements[i % elements.length];
              const positions = [
                { left: 8, top: 15 },
                { left: 85, top: 12 },
                { left: 25, top: 8 },
                { left: 70, top: 25 },
                { left: 15, top: 35 },
                { left: 90, top: 40 },
                { left: 45, top: 30 },
                { left: 65, top: 45 },
                { left: 10, top: 60 },
                { left: 80, top: 65 },
                { left: 35, top: 55 },
                { left: 55, top: 70 },
                { left: 20, top: 80 },
                { left: 75, top: 85 },
                { left: 40, top: 75 },
                { left: 60, top: 90 },
              ];
              const pos = positions[i] || {
                left: Math.random() * 80 + 10,
                top: Math.random() * 80 + 10,
              };
              return (
                <div
                  key={i}
                  className="absolute text-xl opacity-8"
                  style={{
                    left: `${pos.left}%`,
                    top: `${pos.top}%`,
                    animation: `techFloat ${
                      10 + (i % 4)
                    }s ease-in-out infinite`,
                    animationDelay: `${i * 0.8}s`,
                  }}
                >
                  {element}
                </div>
              );
            })}
        </div>

        {/* Circuit lines */}
        <div suppressHydrationWarning>
          <svg
            className="absolute inset-0 w-full h-full opacity-15"
            style={{ animation: "circuitPulse 8s ease-in-out infinite" }}
          >
            <defs>
              <linearGradient
                id="circuitGrad"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="rgba(168, 85, 247, 0.2)" />
                <stop offset="100%" stopColor="rgba(236, 72, 153, 0.2)" />
              </linearGradient>
            </defs>
            <path
              d="M0 50 Q200 100 400 50 T800 100 L1200 80"
              stroke="url(#circuitGrad)"
              strokeWidth="2"
              fill="none"
            />
            <path
              d="M0 200 Q300 150 500 200 T900 150 L1200 180"
              stroke="url(#circuitGrad)"
              strokeWidth="2"
              fill="none"
            />
            <path
              d="M50 0 Q100 200 150 400 T250 800"
              stroke="url(#circuitGrad)"
              strokeWidth="2"
              fill="none"
            />
            <path
              d="M300 0 Q350 250 400 500 T500 1000"
              stroke="url(#circuitGrad)"
              strokeWidth="2"
              fill="none"
            />
            <circle cx="200" cy="100" r="4" fill="rgba(168, 85, 247, 0.3)" />
            <circle cx="500" cy="200" r="4" fill="rgba(236, 72, 153, 0.3)" />
            <circle cx="150" cy="400" r="4" fill="rgba(59, 130, 246, 0.3)" />
            <circle cx="400" cy="500" r="4" fill="rgba(34, 197, 94, 0.3)" />
          </svg>
        </div>
      </div>

      <div className="relative z-10 text-center space-y-8 px-8 bg-background/80 backdrop-blur-sm rounded-2xl border border-primary/10 shadow-2xl max-w-md mx-auto py-12">
        {/* Futuristic Logo */}
        <div className="flex items-center justify-center space-x-4 mb-8">
          <div className="relative">
            <div className="w-20 h-20 bg-gradient-to-br from-primary via-accent to-primary rounded-2xl flex items-center justify-center border border-primary/30 shadow-2xl">
              <Code className="w-10 h-10 text-white animate-pulse" />
            </div>
            <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full animate-pulse border-2 border-background">
              <Sparkles
                className="w-4 h-4 text-white m-0.5 animate-spin"
                style={{ animationDuration: "3s" }}
              />
            </div>
            {/* Orbiting elements */}
            <div
              className="absolute inset-0 animate-spin"
              style={{ animationDuration: "10s" }}
            >
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
                className="h-full bg-gradient-to-r from-primary to-accent rounded-full relative"
                style={{ width: `${progress}%` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/40 animate-pulse"></div>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <CurrentIcon className="w-4 h-4 text-primary transition-all duration-300 animate-pulse" />
              <span className="text-sm text-muted-foreground font-source-sans transition-opacity duration-300 ease-in-out">
                {chunks[currentChunk]?.label || "Loading..."}
              </span>
            </div>
            <span className="font-mono text-primary font-bold text-lg transition-all duration-500 ease-out">
              {Math.round(progress)}%
            </span>
          </div>
        </div>

        {/* Smooth Pulse Loader */}
        <div className="relative w-16 h-16 mx-auto">
          <div className="absolute inset-0 rounded-full border-2 border-primary/30"></div>
          <div className="absolute inset-2 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 animate-pulse"></div>
          <div className="absolute inset-0 rounded-full border-2 border-primary overflow-hidden">
            <div
              className="w-full bg-primary transition-all duration-300 ease-out"
              style={{
                height: `${progress}%`,
                position: "absolute",
                bottom: 0,
                borderRadius: "50%",
              }}
            ></div>
          </div>
          <div
            className="absolute inset-4 rounded-full bg-primary/10 animate-pulse"
            style={{ animationDuration: "2s" }}
          ></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes smoothGlow {
          0%,
          100% {
            opacity: 0.2;
            transform: scale(0.8);
          }
          50% {
            opacity: 1;
            transform: scale(1.2);
          }
        }
        @keyframes meshMove {
          0% {
            transform: scale(1) rotate(0deg);
          }
          100% {
            transform: scale(1.1) rotate(5deg);
          }
        }
        @keyframes techFloat {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
            opacity: 0.1;
          }
          50% {
            transform: translateY(-20px) rotate(10deg);
            opacity: 0.3;
          }
        }
        @keyframes circuitPulse {
          0%,
          100% {
            opacity: 0.1;
          }
          50% {
            opacity: 0.3;
          }
        }
      `}</style>
    </div>
  );
}
