"use client";

import { useState, useEffect } from "react";
import { Code, Sparkles, Zap, Cpu, Database, Globe } from "lucide-react";

export default function LoadingScreen({
  onComplete,
}: {
  onComplete: () => void;
}) {
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
    { label: "Almost Ready", target: 100, icon: Zap },
  ];

  useEffect(() => {
    // Disable glitch effect to prevent scattering
    // const glitchInterval = setInterval(() => {
    //   const glitchChars = "!@#$%^&*()_+-=[]{}|;:,.<>?";
    //   const original = "ANSH TANK";
    //   let glitched = "";
    //
    //   for (let i = 0; i < original.length; i++) {
    //     if (Math.random() < 0.03) {
    //       glitched += glitchChars[Math.floor(Math.random() * glitchChars.length)];
    //     } else {
    //       glitched += original[i];
    //     }
    //   }
    //
    //   setGlitchText(glitched);
    //   setTimeout(() => setGlitchText(original), 50);
    // }, 4000);

    const loadChunk = (chunkIndex: number) => {
      if (chunkIndex >= chunks.length) {
        // clearInterval(glitchInterval);
        setTimeout(onComplete, 500);
        return;
      }

      setCurrentChunk(chunkIndex);
      const target = chunks[chunkIndex].target;
      const startProgress =
        chunkIndex === 0 ? 0 : chunks[chunkIndex - 1].target;
      const duration = 1000 + chunkIndex * 200;
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

    return () => {};
  }, []);

  const CurrentIcon = chunks[currentChunk]?.icon || Code;

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
