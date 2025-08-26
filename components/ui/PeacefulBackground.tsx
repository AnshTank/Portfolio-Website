"use client"

import { useEffect, useState } from "react"

const PeacefulBackground = () => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
      {/* Peaceful Flowing Waves */}
      <svg className="w-full h-full opacity-40 dark:opacity-60" viewBox="0 0 1200 800" preserveAspectRatio="none">
        <defs>
          <linearGradient id="peacefulWave1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.15" />
            <stop offset="50%" stopColor="#A855F7" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#7C3AED" stopOpacity="0.15" />
          </linearGradient>
          <linearGradient id="peacefulWave2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.12" />
            <stop offset="50%" stopColor="#0EA5E9" stopOpacity="0.20" />
            <stop offset="100%" stopColor="#0284C7" stopOpacity="0.12" />
          </linearGradient>
          <linearGradient id="peacefulWave3" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.10" />
            <stop offset="50%" stopColor="#EAB308" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#D97706" stopOpacity="0.10" />
          </linearGradient>
        </defs>
        
        {/* Top Flowing Wave */}
        <path d="M0,150 Q300,100 600,150 T1200,150 L1200,0 L0,0 Z" fill="url(#peacefulWave1)">
          <animate
            attributeName="d"
            dur="25s"
            repeatCount="indefinite"
            values="M0,150 Q300,100 600,150 T1200,150 L1200,0 L0,0 Z;M0,120 Q300,70 600,120 T1200,120 L1200,0 L0,0 Z;M0,180 Q300,130 600,180 T1200,180 L1200,0 L0,0 Z;M0,150 Q300,100 600,150 T1200,150 L1200,0 L0,0 Z"
          />
        </path>
        
        {/* Middle Flowing Wave */}
        <path d="M0,400 Q400,350 800,400 T1200,400 L1200,800 L0,800 Z" fill="url(#peacefulWave2)">
          <animate
            attributeName="d"
            dur="30s"
            repeatCount="indefinite"
            values="M0,400 Q400,350 800,400 T1200,400 L1200,800 L0,800 Z;M0,380 Q400,330 800,380 T1200,380 L1200,800 L0,800 Z;M0,420 Q400,370 800,420 T1200,420 L1200,800 L0,800 Z;M0,400 Q400,350 800,400 T1200,400 L1200,800 L0,800 Z"
          />
        </path>
        
        {/* Bottom Flowing Wave */}
        <path d="M0,650 Q200,600 400,650 T1200,650 L1200,800 L0,800 Z" fill="url(#peacefulWave3)">
          <animate
            attributeName="d"
            dur="35s"
            repeatCount="indefinite"
            values="M0,650 Q200,600 400,650 T1200,650 L1200,800 L0,800 Z;M0,630 Q200,580 400,630 T1200,630 L1200,800 L0,800 Z;M0,670 Q200,620 400,670 T1200,670 L1200,800 L0,800 Z;M0,650 Q200,600 400,650 T1200,650 L1200,800 L0,800 Z"
          />
        </path>
      </svg>
      
      {/* Peaceful Floating Elements */}
      <div className="absolute top-[15%] left-[10%] w-4 h-4 bg-purple-500/30 dark:bg-purple-400/50 rounded-full animate-peaceful-float" />
      <div className="absolute top-[25%] right-[15%] w-3 h-3 bg-cyan-500/25 dark:bg-cyan-400/45 rounded-full animate-peaceful-float" style={{ animationDelay: '3s' }} />
      <div className="absolute top-[45%] left-[20%] w-5 h-5 bg-amber-500/20 dark:bg-amber-400/40 rounded-full animate-peaceful-float" style={{ animationDelay: '6s' }} />
      <div className="absolute top-[65%] right-[25%] w-3 h-3 bg-purple-500/28 dark:bg-purple-400/48 rounded-full animate-peaceful-float" style={{ animationDelay: '9s' }} />
      <div className="absolute top-[80%] left-[30%] w-4 h-4 bg-cyan-500/22 dark:bg-cyan-400/42 rounded-full animate-peaceful-float" style={{ animationDelay: '12s' }} />
      
      {/* Gentle Geometric Shapes */}
      <div className="absolute top-[18%] left-[5%] w-14 h-14 border-2 border-purple-500/25 dark:border-purple-400/45 rotate-45 animate-gentle-spin" />
      <div className="absolute bottom-[25%] right-[8%] w-12 h-12 border-2 border-cyan-500/20 dark:border-cyan-400/40 rounded-full animate-gentle-pulse" />
      <div className="absolute top-[68%] left-[12%] w-10 h-10 bg-amber-500/15 dark:bg-amber-400/35 animate-gentle-bounce" />
      
      {/* Peaceful Code Elements */}
      <div className="absolute top-[30%] right-[20%] text-purple-500/30 dark:text-purple-400/50 font-mono text-lg animate-gentle-pulse">{'{ }'}</div>
      <div className="absolute bottom-[40%] left-[25%] text-cyan-500/25 dark:text-cyan-400/45 font-mono text-lg animate-gentle-pulse">{'</>'}</div>
      <div className="absolute top-[55%] right-[30%] text-amber-500/32 dark:text-amber-400/52 font-mono text-lg animate-gentle-pulse">{'[]'}</div>
    </div>
  )
}

export default PeacefulBackground