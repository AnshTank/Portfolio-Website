import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import HeroSection from "@/components/sections/HeroSection"
import ConnectSection from "@/components/sections/ConnectSection"
import AboutSection from "@/components/sections/AboutSection"
import SkillsSection from "@/components/sections/SkillsSection"
import ProjectsSection from "@/components/sections/ProjectsSection"
import HackathonsSection from "@/components/sections/HackathonsSection"
import ContactSection from "@/components/sections/ContactSection"


export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background flex flex-col relative">
      {/* Animated Wave Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0" suppressHydrationWarning>
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1440 900" preserveAspectRatio="none">
          <path d="M0,550 Q360,470 720,550 T1440,550 L1440,900 L0,900 Z" fill="url(#waveGrad1)">
            <animate attributeName="d" dur="6s" repeatCount="indefinite" values="M0,550 Q360,470 720,550 T1440,550 L1440,900 L0,900 Z;M0,570 Q360,490 720,570 T1440,570 L1440,900 L0,900 Z;M0,530 Q360,450 720,530 T1440,530 L1440,900 L0,900 Z;M0,550 Q360,470 720,550 T1440,550 L1440,900 L0,900 Z" />
          </path>
          <path d="M0,750 Q480,670 960,750 T1440,750 L1440,900 L0,900 Z" fill="url(#waveGrad2)">
            <animate attributeName="d" dur="8s" repeatCount="indefinite" values="M0,750 Q480,670 960,750 T1440,750 L1440,900 L0,900 Z;M0,730 Q480,650 960,730 T1440,730 L1440,900 L0,900 Z;M0,770 Q480,690 960,770 T1440,770 L1440,900 L0,900 Z;M0,750 Q480,670 960,750 T1440,750 L1440,900 L0,900 Z" />
          </path>
          <defs>
            <linearGradient id="waveGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.02" />
              <stop offset="50%" stopColor="#06B6D4" stopOpacity="0.015" />
              <stop offset="100%" stopColor="#1E40AF" stopOpacity="0.01" />
            </linearGradient>
            <linearGradient id="waveGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0EA5E9" stopOpacity="0.015" />
              <stop offset="50%" stopColor="#0284C7" stopOpacity="0.01" />
              <stop offset="100%" stopColor="#1D4ED8" stopOpacity="0.008" />
            </linearGradient>
            <linearGradient id="waveGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#EC4899" stopOpacity="0.04" />
              <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.02" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute top-20 left-12 w-20 h-20 bg-gradient-to-br from-violet-400/5 to-purple-600/4 clip-path-[polygon(50%_0%,_100%_38%,_82%_100%,_18%_100%,_0%_38%)] animate-orbit z-10"></div>
        <div className="absolute top-40 right-16 w-24 h-24 bg-gradient-to-tr from-cyan-300/4 to-blue-500/3 clip-path-[circle(50%_at_50%_50%)] animate-gentle-pulse z-10" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-60 left-1/4 w-16 h-32 bg-gradient-to-b from-emerald-400/4 to-teal-500/3 clip-path-[polygon(25%_0%,_75%_0%,_100%_100%,_0%_100%)] animate-slide-vertical z-10" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-32 left-1/2 w-18 h-18 bg-gradient-to-l from-pink-400/4 to-rose-500/3 clip-path-[polygon(30%_0%,_70%_0%,_100%_30%,_100%_70%,_70%_100%,_30%_100%,_0%_70%,_0%_30%)] animate-gentle-bounce z-10" style={{animationDelay: '3s'}}></div>
        <div className="absolute bottom-40 left-8 w-22 h-22 bg-gradient-to-tr from-amber-400/4 to-orange-500/3 clip-path-[polygon(50%_0%,_61%_35%,_98%_35%,_68%_57%,_79%_91%,_50%_70%,_21%_91%,_32%_57%,_2%_35%,_39%_35%)] animate-orbit-reverse z-10" style={{animationDelay: '4s'}}></div>
        <div className="absolute top-1/3 right-8 w-20 h-28 bg-gradient-to-bl from-indigo-400/4 to-purple-500/3 clip-path-[polygon(0%_20%,_60%_20%,_60%_0%,_100%_50%,_60%_100%,_60%_80%,_0%_80%)] animate-slide-horizontal z-10" style={{animationDelay: '2.5s'}}></div>
      </div>
      <Header />
      <main className="flex-1 relative z-10">
        <HeroSection />
        <ConnectSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <HackathonsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
