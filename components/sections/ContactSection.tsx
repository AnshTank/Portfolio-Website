"use client";

import type React from "react";

import { useState } from "react";
import {
  Send,
  Mail,
  Github,
  Linkedin,
  User,
  MessageSquare,
  Sparkles,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import type { FormData } from "@/types";

const ContactSection = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="px-4 sm:px-6 py-16 sm:py-24 bg-gradient-to-br from-background via-muted/10 to-background"
    >
      <div className="container max-w-7xl mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold gradient-text">
              Let's Build Something Amazing
            </h2>
            <p className="text-lg text-muted-foreground font-source-sans">
              Ready to collaborate on your next project? Let's connect and
              create something extraordinary together.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <Card className="card-hover border-primary/20 hover:border-primary/40 backdrop-blur-sm bg-gradient-to-br from-card/50 to-muted/20">
              <CardHeader>
                <CardTitle className="font-playfair flex items-center gradient-text">
                  <MessageSquare className="mr-2 h-5 w-5 text-primary animate-pulse" />
                  Send Me a Message
                </CardTitle>
                <CardDescription className="font-source-sans">
                  Have a project in mind? I'd love to hear about it and discuss
                  how we can work together.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label
                        htmlFor="name"
                        className="text-sm font-medium flex items-center"
                      >
                        <User className="mr-1 h-3 w-3" />
                        Name
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your name"
                        className="border-primary/20 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all duration-300 bg-background/50"
                        required
                        suppressHydrationWarning
                      />
                    </div>
                    <div className="space-y-2">
                      <Label
                        htmlFor="email"
                        className="text-sm font-medium flex items-center"
                      >
                        <Mail className="mr-1 h-3 w-3" />
                        Email
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        className="border-primary/20 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all duration-300 bg-background/50"
                        required
                        suppressHydrationWarning
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label
                      htmlFor="subject"
                      className="text-sm font-medium flex items-center"
                    >
                      <Sparkles className="mr-1 h-3 w-3" />
                      Subject
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="What's this about?"
                      className="border-primary/20 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all duration-300 bg-background/50"
                      required
                      suppressHydrationWarning
                    />
                  </div>
                  <div className="space-y-2">
                    <Label
                      htmlFor="message"
                      className="text-sm font-medium flex items-center"
                    >
                      <MessageSquare className="mr-1 h-3 w-3" />
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project, ideas, or just say hello! I'm excited to hear from you."
                      rows={6}
                      className="border-primary/20 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all duration-300 resize-none bg-background/50"
                      required
                      suppressHydrationWarning
                    />
                  </div>
                  {submitStatus === "success" && (
                    <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg text-green-800 dark:text-green-200 text-sm">
                      ✅ Message sent successfully! I'll get back to you soon.
                    </div>
                  )}
                  {submitStatus === "error" && (
                    <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-red-800 dark:text-red-200 text-sm">
                      ❌ Failed to send message. Please try again or contact me
                      directly.
                    </div>
                  )}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full group bg-gradient-to-r from-primary to-accent hover:from-primary/95 hover:to-accent/95 disabled:opacity-50 transition-all duration-200 hover:shadow-md"
                    suppressHydrationWarning
                  >
                    <Send
                      className={`mr-2 h-4 w-4 transition-transform duration-200 ${isSubmitting ? "animate-pulse" : "group-hover:translate-x-0.5"}`}
                    />
                    {isSubmitting ? "Sending..." : "Send Message"}
                    <Sparkles
                      className={`ml-2 h-4 w-4 ${isSubmitting ? "animate-spin" : ""}`}
                    />
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-6 sm:space-y-8">
              <Card className="card-hover border-primary/20 hover:border-primary/40 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="font-playfair flex items-center gradient-text">
                    <User className="mr-2 h-5 w-5 text-primary" />
                    Get In Touch
                  </CardTitle>
                  <CardDescription>
                    Prefer direct contact? Reach out through any of these
                    channels.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-col gap-4">
                    <Button
                      size="lg"
                      className="px-6 py-6 pulse-glow group justify-start"
                      asChild
                    >
                      <a href="mailto:anshtank9@gmail.com">
                        <Mail className="mr-4 h-5 w-5 group-hover:animate-bounce" />
                        <div className="text-left">
                          <div className="font-semibold">Email</div>
                          <div className="text-sm opacity-80">
                            anshtank9@gmail.com
                          </div>
                        </div>
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      size="lg"
                      className="px-6 py-6 shimmer-effect group justify-start bg-transparent"
                      asChild
                    >
                      <a
                        href="https://github.com/AnshTank"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="mr-4 h-5 w-5 group-hover:rotate-12 transition-transform" />
                        <div className="text-left">
                          <div className="font-semibold">GitHub</div>
                          <div className="text-sm opacity-80">@AnshTank</div>
                        </div>
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      size="lg"
                      className="px-6 py-6 shimmer-effect group justify-start bg-transparent"
                      asChild
                    >
                      <a
                        href="https://www.linkedin.com/in/anshtank9/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Linkedin className="mr-4 h-5 w-5 group-hover:scale-110 transition-transform" />
                        <div className="text-left">
                          <div className="font-semibold">LinkedIn</div>
                          <div className="text-sm opacity-80">Ansh Tank</div>
                        </div>
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-primary/10 via-accent/5 to-primary/5 border-primary/30 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="text-center space-y-3">
                    <div className="w-12 h-12 mx-auto bg-gradient-to-br from-primary/20 to-accent/10 rounded-full flex items-center justify-center">
                      <Sparkles className="w-6 h-6 text-primary animate-pulse" />
                    </div>
                    <h3 className="font-semibold gradient-text">
                      Available for Opportunities
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Currently open to full-time positions, freelance projects,
                      and exciting collaborations.
                    </p>
                    <div className="flex items-center justify-center space-x-2 text-xs text-muted-foreground">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span>Typically responds within 24 hours</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
