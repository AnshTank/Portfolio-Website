"use client"

import { useState, useEffect } from "react"
import { Moon, Sun, Code, Sparkles } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

const Header = () => {
  const { theme, setTheme } = useTheme()

  const navItems = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#hackathons", label: "Hackathons" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60" suppressHydrationWarning>
      <div className="container max-w-7xl mx-auto flex h-20 sm:h-24 items-center justify-between px-4 sm:px-6">
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center space-x-3 hover:opacity-80 transition-opacity duration-200"
        >
          <div className="relative">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
              <Code className="w-6 h-6 text-white" />
            </div>
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
          </div>
          <div>
            <div className="font-playfair text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Ansh Tank
            </div>
            <div className="text-xs sm:text-sm text-muted-foreground font-source-sans tracking-wide">Full-Stack • DevOps</div>
          </div>
        </button>

        <nav className="hidden md:flex items-center space-x-4 lg:space-x-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium hover:text-primary transition-all duration-300 relative group px-2 lg:px-3 py-2 rounded-lg hover:bg-primary/8"
            >
              {item.label}
              <span className="absolute -bottom-1 left-1/2 w-0 h-1 bg-primary transition-all duration-300 group-hover:w-3/4 group-hover:left-[12.5%] rounded-full"></span>
            </a>
          ))}
        </nav>

        <div className="flex items-center space-x-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="relative hover:bg-primary/10 transition-all duration-300"
            suppressHydrationWarning
          >
            <Sun className="h-5 w-5 transition-all duration-300 hover:scale-110 hover:rotate-12 dark:hidden" />
            <Moon className="h-5 w-5 transition-all duration-300 hover:scale-110 hover:-rotate-12 hidden dark:block" />
            <span className="sr-only">Toggle theme</span>
          </Button>
          <div className="hidden sm:block w-px h-6 bg-border"></div>
          <div className="hidden sm:flex items-center space-x-1">
            <Sparkles className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-xs text-muted-foreground">Available for work</span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
