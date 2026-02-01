"use client";

import { useState } from "react";
import {
  ExternalLink,
  Github,
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

import type { Project } from "@/types";

const ProjectsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const projectsPerPage = 5;

  const handlePageChange = (page: number) => {
    if (page === currentPage) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentPage(page);
      setIsTransitioning(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 150);
  };

  const allProjects: Project[] = [
    {
      title: "ConsultBridge",
      description:
        "AI-powered consultancy platform built with React, Node.js, and MongoDB. Features include consultancy listings, AI chatbot guidance, appointment booking with online/offline options, and payment integration.",
      tech: [
        "Next.js",
        "React",
        "Typescript",
        "Node.js",
        "MongoDB",
        "AI Chatbot",
      ],
      image: "/consultbridge-dashboard(2).png",
      liveUrl:
        "https://consult-bridge-git-main-ansh-tanks-projects.vercel.app?_vercel_share=myesbSodRCw87s8b3Vg8VEtqnwsHjlmE",
      githubUrl: "https://github.com/AnshTank/ConsultBridge",
    },
    {
      title: "Never Break The Chain - MNZD Habit Tracker",
      description:
        "Revolutionary habit tracking application that transforms daily consistency into extraordinary results through the innovative MNZD methodology. Features include visual progress tracking, GitHub-style heatmaps, and comprehensive analytics.",
      tech: [
        "Next.js",
        "TypeScript",
        "MongoDB",
        "JWT Auth",
        "Framer Motion",
        "Recharts",
      ],
      image: "/images/hero-chain.png",
      liveUrl: "https://never-break-the-chain.vercel.app",
      githubUrl: "https://github.com/AnshTank/Never-Break-The-Chain",
    },
    {
      title: "Vacant - Property Management",
      description:
        "Modern property management platform for vacation rentals. Features include property listings, booking management, real-time availability, secure payments, and comprehensive dashboard for property owners.",
      tech: ["React", "Node.js", "MongoDB", "Stripe", "JWT", "Socket.io"],
      image: "/vacation-rental-dashboard (2).png",
      githubUrl: "https://github.com/AnshTank/Vacation-Rental-App",
    },
    {
      title: "HOP-11: Nurse Handoff Companion",
      description:
        "Web-based platform for nurses to manage shift handoffs efficiently. Features include patient record management, real-time updates, and secure data handling with React and MongoDB.",
      tech: [
        "Next.js",
        "Typescript",
        "React",
        "Node.js",
        "MongoDB",
        "Express.js",
      ],
      image: "/hop11-dashboard.png",
      liveUrl: "https://hop-q77u-git-main-ansh-tanks-projects.vercel.app",
      githubUrl: "https://github.com/AnshTank/HOP",
    },
    {
      title: "MindMingle",
      description:
        "Social networking platform focused on mental wellness and community support. Features include user profiles, discussion boards, and real-time chat functionality using React, Node.js, and MongoDB.",
      tech: ["React", "Node.js", "MongoDB", "Socket.io"],
      image: "/MindMingle-dashboard.png",
      githubUrl: "https://github.com/AnshTank/MindMingle",
    },
    {
      title: "Financial Literacy Platform",
      description:
        "Web application focused on financial education for women and young people. Features include interactive modules on budgeting, saving, investing, virtual trading simulations, expert guidance, and subscription-based mentorship using React and Node.js.",
      tech: ["React", "Node.js", "MongoDB", "Stripe", "Virtual Trading"],
      image: "/financial-literacy-dashboard (2).png",
      githubUrl: "https://github.com/anshtank/financial-literacy-platform",
    },
  ];

  const totalPages = Math.ceil(allProjects.length / projectsPerPage);
  const startIndex = (currentPage - 1) * projectsPerPage;
  const currentProjects = allProjects.slice(
    startIndex,
    startIndex + projectsPerPage
  );

  return (
    <div className="min-h-screen bg-background">
      <main>
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" asChild>
                <Link href="/">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Home
                </Link>
              </Button>
            </div>

            <div className="text-center space-y-4 sm:space-y-6">
              <h1 className="font-playfair text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold gradient-text tracking-tight">
                All Projects
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
                Explore my complete portfolio of innovative solutions and
                creative implementations
              </p>
            </div>

            <div
              className={`space-y-8 transition-all duration-300 ${
                isTransitioning
                  ? "opacity-50 scale-95"
                  : "opacity-100 scale-100"
              }`}
            >
              {currentProjects.map((project, index) => (
                <div
                  key={project.title}
                  className={`group relative overflow-hidden rounded-xl sm:rounded-2xl bg-gradient-to-br from-background via-background/95 to-primary/5 border border-primary/10 hover:border-primary/30 transition-all duration-500 ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  } flex flex-col lg:flex h-auto lg:h-80`}
                >
                  <div className="lg:w-2/5 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-48 sm:h-64 lg:h-80 object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 z-20">
                      <div className="bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                        Project #
                        {String(startIndex + index + 1).padStart(2, "0")}
                      </div>
                    </div>
                  </div>

                  <div className="lg:w-3/5 p-4 sm:p-6 lg:p-8 flex flex-col justify-center space-y-3 sm:space-y-4">
                    <div className="space-y-3 sm:space-y-4">
                      <h3 className="font-playfair text-xl sm:text-2xl lg:text-3xl font-bold gradient-text group-hover:scale-105 transition-transform duration-300 origin-left">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed text-sm sm:text-base lg:text-lg">
                        {project.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium hover:bg-primary/20 transition-colors duration-300"
                          style={{ animationDelay: `${techIndex * 100}ms` }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-3 sm:pt-4">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-primary text-primary-foreground rounded-lg sm:rounded-xl font-medium hover:bg-primary/90 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-primary/25 text-sm sm:text-base"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Live Demo
                        </a>
                      )}
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-3 border border-primary/30 text-primary rounded-lg sm:rounded-xl font-medium hover:bg-primary/10 hover:scale-105 transition-all duration-300 text-sm sm:text-base"
                      >
                        <Github className="w-4 h-4" />
                        Source Code
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center items-center gap-3 pt-12">
              <Button
                variant="outline"
                size="sm"
                onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
                disabled={currentPage === 1}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <Button
                    key={page}
                    variant={currentPage === page ? "default" : "outline"}
                    size="sm"
                    onClick={() => handlePageChange(page)}
                    className="w-12 h-12 font-medium"
                  >
                    {page}
                  </Button>
                )
              )}

              <Button
                variant="outline"
                size="sm"
                onClick={() =>
                  handlePageChange(Math.min(currentPage + 1, totalPages))
                }
                disabled={currentPage === totalPages}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProjectsPage;
