import type React from "react";
import type { Metadata } from "next";
import { Playfair_Display, Source_Sans_3 } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
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
  title: "Ansh Tank - Full-Stack Developer & DevOps Engineer",
  description:
    "Passionate Full-Stack Developer and aspiring DevOps Engineer specializing in React, Node.js, MongoDB, Docker, and Kubernetes. Building real-world solutions with creativity and reliability.",
  robots: "index, follow",
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
          {children}
          <SpeedInsights />
          <PerformanceMonitor />
        </ThemeProvider>
      </body>
    </html>
  );
}
