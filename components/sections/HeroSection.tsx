"use client";

import { Mail, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative px-4 py-24 md:py-32">
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
            <div className="relative w-[280px] sm:w-[350px] lg:w-[450px] h-[350px] sm:h-[450px] lg:h-[600px] mx-auto lg:mx-0 group">
              {/* Glow layer - duplicate image with light blue glow */}
              <Image
                src="/Ansh-model.png"
                alt=""
                width={450}
                height={600}
                priority
                quality={90}
                sizes="(max-width: 640px) 280px, (max-width: 1024px) 350px, 450px"
                className="absolute w-full h-full object-contain opacity-0 group-hover:opacity-60 transition-opacity duration-[800ms] ease-in-out"
                style={{
                  filter:
                    "blur(15px) brightness(1.2) drop-shadow(0 0 12px #22d3ee)",
                  transform: "scale(1.05)",
                }}
              />
              {/* Main image */}
              <Image
                src="/Ansh-model.png"
                alt="Ansh Tank - Hero"
                width={450}
                height={600}
                priority
                quality={90}
                sizes="(max-width: 640px) 280px, (max-width: 1024px) 350px, 450px"
                className="relative w-full h-full object-contain animate-[heroLanding_1.5s_ease-out_0.3s_both] transition-all duration-[800ms] ease-in-out group-hover:scale-[1.03] drop-shadow-[0_8px_25px_rgba(0,0,0,0.15)] z-10"
                style={{
                  backgroundColor: "transparent",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
