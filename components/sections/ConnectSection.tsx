import { Code, Linkedin, Instagram, Coffee } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import type { ConnectLink } from "@/types"

const ConnectSection = () => {
  const connectLinks: ConnectLink[] = [
    {
      name: "LeetCode",
      description: "Problem Solving",
      icon: Code,
      color: "orange-500",
      hoverColor: "orange-500/40",
      url: "https://leetcode.com/u/Anshtank/",
    },
    {
      name: "LinkedIn",
      description: "Professional Network",
      icon: Linkedin,
      color: "blue-600",
      hoverColor: "blue-600/40",
      url: "https://www.linkedin.com/in/anshtank9/",
    },
    {
      name: "Instagram",
      description: "Personal Updates",
      icon: Instagram,
      color: "pink-500",
      hoverColor: "pink-500/40",
      url: "https://www.instagram.com/mr._a_n_s_h_/",
    },
    {
      name: "Buy Me Coffee",
      description: "Support My Work",
      icon: Coffee,
      color: "yellow-600",
      hoverColor: "yellow-500/50",
      url: "https://buymeacoffee.com/anshtank9y",
    },
  ]

  return (
    <section className="px-4 py-16 bg-gradient-to-br from-muted/20 via-background to-muted/10">
      <div className="container max-w-7xl mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="font-playfair text-2xl md:text-3xl font-bold gradient-text">Connect & Support</h2>
            <p className="text-muted-foreground font-source-sans">Find me across the web and support my work</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {connectLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Card
                  className={`card-hover group cursor-pointer border-${link.color}/20 hover:border-${link.hoverColor} hover:scale-105 transition-transform duration-200 ${
                    link.name === "Buy Me Coffee"
                      ? "bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border-yellow-500/30 hover:border-yellow-500/50"
                      : ""
                  }`}
                >
                  <CardContent className="p-6 text-center">
                    <div
                      className={`w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-${link.color}/20 to-${link.color.replace(
                        "500",
                        "600",
                      )}/10 rounded-lg flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}
                    >
                      <link.icon className={`w-6 h-6 text-${link.color} group-hover:animate-bounce`} />
                    </div>
                    <h3
                      className={`font-semibold text-sm ${
                        link.name === "Buy Me Coffee" ? "text-yellow-700 dark:text-yellow-400" : ""
                      }`}
                    >
                      {link.name}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-1">{link.description}</p>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-sm text-muted-foreground font-source-sans">
              Follow my coding journey and consider supporting my open-source contributions
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ConnectSection
