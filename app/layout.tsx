import type React from "react";
import type { Metadata } from "next";
import { Playfair_Display, Source_Sans_3 } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import StructuredData from "@/components/StructuredData";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { PerformanceMonitor } from "@/components/ui/PerformanceMonitor";

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
  weight: ["400", "600", "700"],
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-source-sans",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: {
    default: "Ansh Tank - Full-Stack Developer & DevOps Engineer",
    template: "%s | Ansh Tank"
  },
  description:
    "Passionate Full-Stack Developer and aspiring DevOps Engineer specializing in React, Node.js, MongoDB, Docker, and Kubernetes. Building real-world solutions with creativity and reliability.",
  keywords: [
    "Full-Stack Developer",
    "DevOps Engineer", 
    "React Developer",
    "Node.js Developer",
    "MongoDB",
    "Docker",
    "Kubernetes",
    "TypeScript",
    "Next.js",
    "Web Development",
    "Software Engineer",
    "Ansh Tank"
  ],
  authors: [{ name: "Ansh Tank", url: "https://anshtank.me" }],
  creator: "Ansh Tank",
  publisher: "Ansh Tank",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://anshtank.me",
    title: "Ansh Tank - Full-Stack Developer & DevOps Engineer",
    description: "Passionate Full-Stack Developer and aspiring DevOps Engineer specializing in React, Node.js, MongoDB, Docker, and Kubernetes.",
    siteName: "Ansh Tank Portfolio",
    images: [
      {
        url: "https://anshtank.me/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ansh Tank - Full-Stack Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ansh Tank - Full-Stack Developer & DevOps Engineer",
    description: "Passionate Full-Stack Developer and aspiring DevOps Engineer specializing in React, Node.js, MongoDB, Docker, and Kubernetes.",
    images: ["https://anshtank.me/og-image.png"],
    creator: "@anshtank9",
  },
  verification: {
    google: "RVuyhfVqYo1QLWzQQM7FufQ1_-ZfFJHZnQuSZFuq3Kw",
  },
  alternates: {
    canonical: "https://anshtank.me",
  },
  category: "technology",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${sourceSans.variable} antialiased`}
      suppressHydrationWarning
    >
      <body suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          <StructuredData />
          {children}
          <SpeedInsights />
          <PerformanceMonitor />
        </ThemeProvider>
      </body>
    </html>
  );
}
