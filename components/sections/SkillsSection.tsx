"use client";

import { useState, useEffect } from "react";

const SkillsSection = () => {
  const [activeLayer, setActiveLayer] = useState(0);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(!window.matchMedia("(hover: hover)").matches);
  }, []);

  const skillLayers = [
    {
      name: "CORE STACK",
      skills: [
        { name: "JavaScript", level: 80, x: 2, y: 2, color: "#f7df1e" },
        { name: "TypeScript", level: 80, x: 4, y: 2, color: "#3178c6" },
        { name: "React.js", level: 80, x: 3, y: 1, color: "#61dafb" },
        { name: "Node.js", level: 80, x: 3, y: 3, color: "#339933" },
      ],
    },
    {
      name: "LANGUAGES",
      skills: [
        { name: "C++", level: 90, x: 1.5, y: 1, color: "#00599c" },
        { name: "C", level: 85, x: 2, y: 3, color: "#a8b9cc" },
        { name: "Java", level: 75, x: 4.5, y: 1, color: "#ed8b00" },
        { name: "Python", level: 70, x: 3.5, y: 3, color: "#3776ab" },
      ],
    },
    {
      name: "FRONTEND",
      skills: [
        { name: "HTML", level: 85, x: 2, y: 1, color: "#e34f26" },
        { name: "CSS", level: 85, x: 4, y: 1, color: "#1572b6" },
        { name: "Tailwind CSS", level: 90, x: 1, y: 2, color: "#06b6d4" },
        { name: "Next.js", level: 80, x: 5, y: 2, color: "#7f7f7f" }, // changed from black
      ],
    },
    {
      name: "BACKEND & API",
      skills: [
        { name: "Express.js", level: 85, x: 2, y: 2, color: "#68cc68" },
        { name: "REST API", level: 85, x: 4, y: 2, color: "#ff6b35" },
      ],
    },
    {
      name: "DATABASES",
      skills: [
        { name: "MongoDB", level: 85, x: 2.5, y: 1, color: "#47a248" },
        { name: "MySQL", level: 80, x: 3.5, y: 1, color: "#4479a1" },
        { name: "SQL", level: 80, x: 3, y: 3, color: "#336791" },
        { name: "NoSQL", level: 85, x: 4.5, y: 2, color: "#f29111" },
      ],
    },
    {
      name: "TOOLS & DEVOPS",
      skills: [
        { name: "Git", level: 80, x: 2, y: 2, color: "#f05032" },
        { name: "Docker", level: 55, x: 4, y: 2, color: "#2496ed" },
        { name: "Kubernetes", level: 60, x: 3, y: 1, color: "#326ce5" },
      ],
    },
    {
      name: "CORE CONCEPTS",
      skills: [
        { name: "Data Structures", level: 85, x: 2, y: 1, color: "#ff6b9d" },
        { name: "Algorithms", level: 85, x: 3, y: 3, color: "#e74c3c" },
        { name: "OOP", level: 80, x: 4, y: 1, color: "#4ecdc4" },
      ],
    },
  ];
  return (
    <>
      <style jsx>{`
        @keyframes fadeInScale {
          0% {
            opacity: 0;
            transform: scale(0.8) translateY(10px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
      `}</style>
      <section
        id="skills"
        className="px-4 py-24 relative overflow-hidden bg-background/[0.6] backdrop-blur-sm"
      >
        {/* Background - No animations on mobile */}
        {!isMobile && (
          <div className="absolute inset-0">
            {[
              { left: 10, top: 20, delay: 0 },
              { left: 25, top: 15, delay: 0.5 },
              { left: 40, top: 30, delay: 1 },
              { left: 60, top: 10, delay: 1.5 },
              { left: 75, top: 25, delay: 2 },
              { left: 90, top: 35, delay: 2.5 },
              { left: 15, top: 60, delay: 0.3 },
              { left: 35, top: 70, delay: 0.8 },
              { left: 55, top: 65, delay: 1.3 },
              { left: 80, top: 75, delay: 1.8 },
              { left: 20, top: 90, delay: 0.6 },
              { left: 45, top: 85, delay: 1.1 },
              { left: 70, top: 95, delay: 1.6 },
              { left: 85, top: 80, delay: 2.1 },
              { left: 95, top: 90, delay: 2.6 },
            ].map((particle, i) => (
              <div
                key={i}
                className="absolute w-px h-px bg-primary/10 animate-pulse"
                style={{
                  left: `${particle.left}%`,
                  top: `${particle.top}%`,
                  animationDelay: `${particle.delay}s`,
                  animationDuration: "4s",
                }}
              />
            ))}
          </div>
        )}

        <div className="container max-w-7xl mx-auto relative z-10">
          <div className="space-y-16">
            <div className="text-center space-y-6">
              <h2 className="font-playfair text-4xl md:text-6xl font-bold gradient-text">
                NEURAL SKILL MATRIX
              </h2>
              <p className="text-lg text-muted-foreground font-mono tracking-wider">
                [ INTERACTIVE INTERFACE ]
              </p>
            </div>

            <div className="relative">
              {/* Layer Selector */}
              <div className="flex justify-center mb-8 space-x-2 flex-wrap">
                {skillLayers.map((layer, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setActiveLayer(index);
                      // Trigger unique transition effect
                      const button = document.activeElement as HTMLElement;
                      button?.blur();
                    }}
                    className={`px-4 py-2 text-xs font-mono border ${
                      isMobile
                        ? ""
                        : "transition-all duration-700 ease-out transform hover:scale-105"
                    } ${
                      activeLayer === index
                        ? `border-primary bg-primary/20 text-primary ${
                            !isMobile
                              ? "shadow-lg shadow-primary/25 scale-105"
                              : ""
                          }`
                        : `border-muted text-muted-foreground ${
                            !isMobile
                              ? "hover:border-primary/50 hover:bg-primary/5"
                              : ""
                          }`
                    }`}
                    suppressHydrationWarning
                  >
                    {layer.name}
                  </button>
                ))}
              </div>

              {/* Matrix Grid */}
              <div className="relative w-full h-96">
                <div className="absolute inset-0">
                  {/* Clean Grid Lines */}
                  <div className="absolute inset-0">
                    {Array.from({ length: 6 }).map((_, i) => (
                      <div
                        key={`h-${i}`}
                        className="absolute w-full h-px bg-primary/10"
                        style={{ top: `${i * 20}%` }}
                      />
                    ))}
                    {Array.from({ length: 6 }).map((_, i) => (
                      <div
                        key={`v-${i}`}
                        className="absolute h-full w-px bg-primary/10"
                        style={{ left: `${i * 20}%` }}
                      />
                    ))}
                  </div>

                  {/* Skill Nodes */}
                  {skillLayers[activeLayer].skills.map((skill, index) => (
                    <div
                      key={`${activeLayer}-${skill.name}`}
                      className={`absolute ${
                        isMobile
                          ? ""
                          : "group cursor-pointer transition-all duration-700 ease-out"
                      }`}
                      style={{
                        left: `${skill.x * 16.66}%`,
                        top: `${skill.y * 25}%`,
                        ...(isMobile
                          ? { opacity: 1, transform: "scale(1)" }
                          : {
                              opacity: 0,
                              transform: "scale(0.8)",
                              animation: `fadeInScale 0.6s ease-out ${
                                index * 150
                              }ms forwards`,
                            }),
                      }}
                      onMouseEnter={() =>
                        !isMobile && setHoveredSkill(skill.name)
                      }
                      onMouseLeave={() => !isMobile && setHoveredSkill(null)}
                    >
                      {/* Ripple Effect - Desktop only */}
                      {!isMobile && (
                        <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div
                            className="absolute inset-0 rounded-full animate-ping"
                            style={{
                              backgroundColor: skill.color,
                              opacity: 0.3,
                              animationDuration: "1s",
                            }}
                          />
                          <div
                            className="absolute inset-2 rounded-full animate-ping"
                            style={{
                              backgroundColor: skill.color,
                              opacity: 0.2,
                              animationDelay: "0.2s",
                              animationDuration: "1s",
                            }}
                          />
                        </div>
                      )}

                      {/* Main Node */}
                      <div
                        className={`relative w-20 h-20 rounded-full border-2 bg-white/95 dark:bg-background/95 ${
                          isMobile
                            ? ""
                            : "backdrop-blur-sm group-hover:scale-110 group-hover:shadow-2xl transition-all duration-500 ease-out"
                        } flex flex-col items-center justify-center`}
                        style={{
                          borderColor: skill.color,
                          boxShadow:
                            hoveredSkill === skill.name
                              ? `0 0 30px ${skill.color}60, inset 0 0 20px ${skill.color}10`
                              : `0 0 10px ${skill.color}20, inset 0 0 10px ${skill.color}05`,
                        }}
                      >
                        <div className="text-foreground font-mono text-xs font-bold text-center leading-tight">
                          {skill.name}
                        </div>
                        <div
                          className={`text-xs font-mono font-bold mt-1 ${
                            isMobile ? "" : "transition-all duration-300"
                          }`}
                          style={{
                            color: skill.color,
                            transform:
                              !isMobile && hoveredSkill === skill.name
                                ? "scale(1.2)"
                                : "scale(1)",
                          }}
                        >
                          {skill.level}%
                        </div>
                      </div>

                      {/* Skill Info Popup - Desktop only */}
                      {!isMobile && hoveredSkill === skill.name && (
                        <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 z-20 animate-in fade-in slide-in-from-bottom-2 duration-200">
                          <div
                            className="px-3 py-2 rounded-lg text-white text-xs font-medium whitespace-nowrap shadow-lg"
                            style={{ backgroundColor: skill.color }}
                          >
                            <div className="text-center">
                              <div className="font-bold">{skill.name}</div>
                              <div className="opacity-90">
                                {skill.level}% Proficiency
                              </div>
                            </div>
                            {/* Arrow */}
                            <div
                              className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent"
                              style={{ borderTopColor: skill.color }}
                            />
                          </div>
                        </div>
                      )}

                      {/* Subtle Glow Effect - Desktop only */}
                      {!isMobile && hoveredSkill === skill.name && (
                        <div
                          className="absolute -inset-4 rounded-full opacity-30 animate-pulse pointer-events-none"
                          style={{
                            background: `radial-gradient(circle, ${skill.color}20 0%, transparent 70%)`,
                            animationDuration: "2s",
                          }}
                        />
                      )}
                    </div>
                  ))}

                  {/* Central Core Dot */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                    <div
                      className={`w-4 h-4 bg-primary rounded-full ${
                        isMobile ? "" : "animate-pulse"
                      }`}
                    />
                    {!isMobile && (
                      <div
                        className="absolute inset-0 w-8 h-8 border-2 border-primary/40 rounded-full animate-ping"
                        style={{ animationDuration: "2s" }}
                      />
                    )}
                  </div>
                </div>
              </div>

              {/* Status Display */}
              <div className="mt-8 text-center space-y-2">
                <div className="font-mono text-primary text-sm">
                  ACTIVE LAYER: {skillLayers[activeLayer].name}
                </div>
                <div className="font-mono text-muted-foreground text-xs">
                  NEURAL PATHWAYS: {skillLayers[activeLayer].skills.length}{" "}
                  ACTIVE
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SkillsSection;
