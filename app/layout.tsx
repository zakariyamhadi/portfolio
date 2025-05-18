import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Inter } from "next/font/google";
import Navbar from "@/components/ui/navbar";
import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import { IconBrandLinkedin, IconHome, IconMail } from "@tabler/icons-react";
import { AuroraBackground } from "@/components/ui/aurora-background";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio - MHADi Zakariya",
  description: "Un magnifique portafolio fait avec ❤️ par MHADI Zakariya",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },

    {
      title: "LinkedIn",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.linkedin.com/in/zakariya-mhadi-34794019a/",
    },
    {
      title: "Gmail",
      icon: (
        <IconMail className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
  ];
  return (
    <html lang="fr">
      <body
        className={`${inter.className} antialiased !overflow-x-hidden overflow-y-scroll overflow-y-visible`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          forcedTheme={"light"}
          enableSystem
          disableTransitionOnChange
        >
          <Navbar className="top-2" />
          <AuroraBackground />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
