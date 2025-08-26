import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Hackathon } from "@/types";

const HackathonsSection = () => {
  const hackathons: Hackathon[] = [
    {
      title: "Parul Hackverse Hackathon 2024",
      position: "Top 50",
      project: "Smart Terrain – Hackathon Project",
      description:
        "Developed a smart terrain assistance system using Arduino Uno to help drivers navigate hilly and challenging roads safely. Features included real-time alerts for weather, braking, curves, fog, and fuel management, along with predictive guidance to prevent accidents and optimize driving.",
      impact:
        "Recognized among the top 50 teams, demonstrated real-time functionality, and received positive feedback from mentors.",
    },
    {
      title: "AI/ML Onsite Hackathon 2025",
      position: "Top 20",
      project: "HOP - Nurse Handoff Optimization",
      description:
        "Developed an AI-powered nurse shift handoff system to streamline patient information transfer and reduce errors. Implemented predictive scheduling and automated handoff summaries using machine learning.",
      impact:
        "Improved workflow efficiency, received recognition from judges, and showcased in the hackathon demo session.",
    },
  ];

  return (
    <section id="hackathons" className="px-4 py-24">
      <div className="container max-w-7xl mx-auto">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold">
              Hackathon Journey
            </h2>
            <p className="text-lg text-muted-foreground">
              Innovation through collaboration
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {hackathons.map((hackathon) => (
              <Card
                key={hackathon.title}
                className="hover:shadow-lg transition-shadow flex flex-col justify-between min-h-[340px]"
              >
                <div>
                  <CardHeader>
                    <CardTitle className="font-playfair">
                      {hackathon.title}
                    </CardTitle>
                    <Badge className="mt-2">{hackathon.position}</Badge>
                    <CardDescription className="font-semibold text-primary mt-4">
                      {hackathon.project}
                    </CardDescription>
                    <p className="text-muted-foreground font-source-sans mt-4">
                      {hackathon.description}
                    </p>
                  </CardHeader>
                </div>
                <CardContent className="mt-auto">
                  <div className="p-4 bg-muted rounded-lg">
                    <p className="text-sm font-semibold">
                      Impact: {hackathon.impact}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HackathonsSection;
