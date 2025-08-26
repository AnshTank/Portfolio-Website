"use client";

import { useState } from "react";
import { Mail, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const HeroSection = () => {
  const [transform, setTransform] = useState("rotateY(0deg) rotateX(0deg)");
  return (
    <section className="relative px-4 py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <svg
          className="w-full h-full"
          viewBox="0 0 1000 1000"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop
                offset="0%"
                stopColor="oklch(0.75 0.28 280)"
                stopOpacity="0.1"
              />
              <stop
                offset="100%"
                stopColor="oklch(0.72 0.26 320)"
                stopOpacity="0.05"
              />
            </linearGradient>
          </defs>
          <path
            d="M0,200 Q250,100 500,200 T1000,200 L1000,0 L0,0 Z"
            fill="url(#grad1)"
          >
            <animate
              attributeName="d"
              dur="20s"
              repeatCount="indefinite"
              values="M0,200 Q250,100 500,200 T1000,200 L1000,0 L0,0 Z;M0,300 Q250,200 500,100 T1000,300 L1000,0 L0,0 Z;M0,200 Q250,100 500,200 T1000,200 L1000,0 L0,0 Z"
            />
          </path>
          <path
            d="M0,1000 Q250,900 500,800 T1000,900 L1000,1000 Z"
            fill="url(#grad1)"
          >
            <animate
              attributeName="d"
              dur="25s"
              repeatCount="indefinite"
              values="M0,1000 Q250,900 500,800 T1000,900 L1000,1000 Z;M0,1000 Q250,800 500,900 T1000,800 L1000,1000 Z;M0,1000 Q250,900 500,800 T1000,900 L1000,1000 Z"
            />
          </path>
        </svg>
      </div>
      <div className="container max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-8 fade-in-up">
            <div className="space-y-6">
              <h1 className="font-playfair text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
                <div className="animate-[fadeInUp_0.8s_ease-out_0.2s_both]">
                  Code. Deploy.
                </div>
                <div className="animate-[fadeInUp_0.8s_ease-out_0.6s_both]">
                  <span className="gradient-text">Innovate.</span>
                </div>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground font-source-sans leading-relaxed max-w-2xl">
                Full-Stack Developer & DevOps Engineer passionate about creating
                scalable, innovative solutions that bridge development and
                operations.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6 pt-2">
              <Button
                size="lg"
                className="group px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
                onClick={() =>
                  window.open(
                    "https://rendercv-sb2nov-theme-3.tiiny.site",
                    "_blank"
                  )
                }
                suppressHydrationWarning
              >
                <Mail className="mr-3 h-5 w-5" />
                View Resume
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="group bg-transparent px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-medium border-2 hover:bg-primary/5 w-full sm:w-auto"
                asChild
                suppressHydrationWarning
              >
                <Link href="/hire">
                  <Briefcase className="mr-3 h-5 w-5" />
                  Hire Me
                </Link>
              </Button>
            </div>
          </div>
          <div
            className="relative flex justify-end items-center"
            style={{ perspective: "1000px" }}
          >
            <div
              className="relative w-[280px] sm:w-[350px] lg:w-[450px] h-[350px] sm:h-[450px] lg:h-[600px] group cursor-pointer transition-transform duration-300 ease-out mx-auto lg:mx-0"
              style={{ transform }}
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x =
                  ((e.clientX - rect.left - rect.width / 2) / rect.width) * 15;
                const y =
                  ((e.clientY - rect.top - rect.height / 2) / rect.height) * 15;
                setTransform(`rotateY(${x}deg) rotateX(${-y}deg)`);
              }}
              onMouseLeave={() => {
                setTransform("rotateY(0deg) rotateX(0deg)");
              }}
            >
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-6 bg-black/5 rounded-full blur-sm"></div>
              <img
                src="/Ansh-model.png"
                alt="Ansh Tank - Ghibli Style"
                className="relative w-full h-full object-contain drop-shadow-[0_8px_25px_rgba(0,0,0,0.15)] hover:drop-shadow-[0_12px_35px_rgba(168,85,247,0.2)]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
