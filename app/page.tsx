"use client";

import { useState, useEffect } from "react";
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import HeroSection from "@/components/sections/HeroSection"
import ConnectSection from "@/components/sections/ConnectSection"
import AboutSection from "@/components/sections/AboutSection"
import SkillsSection from "@/components/sections/SkillsSection"
import ProjectsSection from "@/components/sections/ProjectsSection"
import HackathonsSection from "@/components/sections/HackathonsSection"
import ContactSection from "@/components/sections/ContactSection"
import LoadingScreen from "@/components/ui/LoadingScreen"


export default function Portfolio() {
  const [isLoading, setIsLoading] = useState(true);
  const [showHero, setShowHero] = useState(false);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    setTimeout(() => setShowHero(true), 200);
  };

  if (isLoading) {
    return <LoadingScreen onComplete={handleLoadingComplete} />;
  }

  return (
    <div className="min-h-screen bg-background flex flex-col relative">
      {/* Unique Floating Shapes */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0" suppressHydrationWarning>
        {/* Triangle */}
        <div className="absolute top-20 left-12 w-16 h-16 bg-gradient-to-br from-violet-400/6 to-purple-600/4 animate-float-random-1" style={{clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'}}></div>
        
        {/* Star */}
        <div className="absolute top-1/3 left-1/4 w-12 h-12 bg-gradient-to-l from-emerald-400/6 to-teal-500/4 animate-float-random-3" style={{clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)', animationDelay: '4s'}}></div>
        
        {/* Diamond */}
        <div className="absolute top-60 right-1/3 w-14 h-14 bg-gradient-to-bl from-pink-400/6 to-rose-500/4 animate-float-random-1" style={{clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)', animationDelay: '1s'}}></div>
        
        {/* Hearts scattered */}
        <div className="absolute bottom-1/4 right-1/6 w-12 h-12 bg-gradient-to-tr from-red-400/6 to-pink-500/4 animate-float-random-2" style={{clipPath: 'polygon(50% 100%, 20% 60%, 20% 40%, 30% 20%, 50% 30%, 70% 20%, 80% 40%, 80% 60%)', animationDelay: '7s'}}></div>
        
        {/* Hearts */}
        <div className="absolute bottom-1/4 right-1/6 w-12 h-12 bg-gradient-to-tr from-red-400/6 to-pink-500/4 animate-float-random-2" style={{clipPath: 'polygon(50% 100%, 20% 60%, 20% 40%, 30% 20%, 50% 30%, 70% 20%, 80% 40%, 80% 60%)', animationDelay: '7s'}}></div>
        
        <div className="absolute top-1/4 right-1/2 w-8 h-8 bg-gradient-to-tr from-pink-400/5 to-rose-500/3 animate-float-random-1" style={{clipPath: 'polygon(50% 100%, 20% 60%, 20% 40%, 30% 20%, 50% 30%, 70% 20%, 80% 40%, 80% 60%)', animationDelay: '2.5s'}}></div>
        
        {/* Hexagon */}
        <div className="absolute top-40 right-16 w-20 h-20 bg-gradient-to-tr from-cyan-300/6 to-blue-500/4 animate-float-random-2" style={{clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)', animationDelay: '2s'}}></div>
        
        {/* Pentagon */}
        <div className="absolute bottom-1/3 left-1/6 w-10 h-10 bg-gradient-to-r from-indigo-400/6 to-blue-600/4 animate-float-random-3" style={{clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)', animationDelay: '5s'}}></div>
      </div>
      
      <Header />
      
      <main className="flex-1 relative z-10">
        {showHero ? (
          <HeroSection />
        ) : (
          <div className="h-screen" />
        )}
        
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
