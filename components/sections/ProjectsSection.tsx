import { ExternalLink, Github } from "lucide-react";
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

const ProjectsSection = () => {
  const projects: Project[] = [
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
  ];

  return (
    <section id="projects" className="px-4 py-24">
      <div className="container max-w-7xl mx-auto">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold gradient-text">
              Featured Projects
            </h2>
            <p className="text-lg text-muted-foreground">
              Showcasing innovation through code
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card
                key={project.title}
                className="card-hover group overflow-hidden border-primary/10 hover:border-primary/30 flex flex-col h-full"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardHeader className="flex-grow">
                  <CardTitle className="font-playfair gradient-text">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="font-source-sans">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 mt-auto">
                  <div className="flex flex-wrap gap-2 max-h-16 overflow-hidden">
                    {project.tech.slice(0, 6).map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="shimmer-effect"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.tech.length > 6 && (
                      <Badge variant="secondary" className="text-xs">
                        +{project.tech.length - 6} more
                      </Badge>
                    )}
                  </div>
                  <div className="flex gap-2 pt-2">
                    {project.liveUrl && (
                      <Button size="sm" className="flex-1" asChild>
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1"
                      asChild
                    >
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center pt-8">
            <Button
              size="lg"
              variant="outline"
              className="shimmer-effect transition-all duration-500 hover:scale-105"
              asChild
            >
              <Link href="/projects" className="transition-all duration-300">
                View All Projects
                <ExternalLink className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
