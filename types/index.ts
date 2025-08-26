import type React from "react";
export interface Skill {
  name: string;
  level: number;
  icon: React.ComponentType<{ className?: string }>;
  category: "Languages" | "Web & Frontend" | "Backend & API" | "Databases" | "Tools & DevOps" | "Core Concepts";
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  image: string;
  liveUrl?: string;
  githubUrl: string;
}

export interface Hackathon {
  title: string;
  position: string;
  project: string;
  description: string;
  impact: string;
}

export interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ConnectLink {
  name: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  hoverColor: string;
  url: string;
}
