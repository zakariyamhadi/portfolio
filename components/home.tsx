"use client";

import { AuroraBackground } from "@/components/ui/aurora-background";
import { IconBrandLinkedin, IconHome, IconMail } from "@tabler/icons-react";
import { motion } from "framer-motion";
import React from "react";
import { FloatingDock } from "./ui/floating-dock";

export function BackgroundAndDock() {
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
    <>
      <AuroraBackground>
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="relative flex flex-col gap-4 items-center justify-center px-4"
        >
          <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
            Bienvenue sur Mon Portfolio
          </div>
          <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
            Ingénieur Web Passionné et Créatif
          </div>
          <button className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2">
            Me contacter
          </button>
        </motion.div>
      </AuroraBackground>
      <div className="flex fixed z-10 bottom-0 items-center max-sm:justify-start sm:justify-center w-full">
        <FloatingDock items={links} />
      </div>
    </>
  );
}
