"use client";

import { IconBrandLinkedin, IconMail, IconPhone } from "@tabler/icons-react";
import { motion } from "framer-motion";
import React from "react";
import { FloatingDock } from "./ui/floating-dock";
import ColourfulText from "@/components/ui/colourful-text";
import { Button } from "@/components/ui/moving-border";
import Image from "next/image";
import Link from "next/link";

export function BackgroundAndDock() {
  const links = [
    {
      title: "Téléphone",
      icon: (
        <IconPhone className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "tel:+33782343030",
    },

    {
      title: "LinkedIn",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.linkedin.com/in/sara-amani-2905771b8/",
    },
    {
      title: "Gmail",
      icon: (
        <IconMail className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "mailto:amanisara23@gmail.com",
    },
  ];
  return (
    <div className="relative m-auto flex flex-col h-full w-full items-center justify-center">
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="flex flex-col gap-4 items-center justify-center px-4"
      >
        <div className="text-5xl md:text-7xl font-bold !text-secondary-dark text-center">
          Bienvenue sur mon <ColourfulText text="Portfolio" />
        </div>
        <div className="font-extralight !text-[20px] text-center md:text-4xl dark:text-neutral-200 py-4 px-8">
          Mon parcours est une aventure où créativité et pédagogie se croisent.
          Si tu veux savoir comment je transforme chaque formation en expérience
          captivante, découvre mon portfolio !
        </div>
        <Link href="mailto:amanisara23@gmail.com">
          <Button
            borderRadius="1.75rem"
            className="bg-white/95 dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 text-base"
          >
            Me contacter
          </Button>
        </Link>
      </motion.div>
      <Image
        alt="logo-antibia"
        width={150}
        height={150}
        className=" cursor-pointer absolute m-auto bottom-20"
        src="/assets/flower.gif"
      />
      <div className="flex fixed z-10 bottom-0 items-center max-sm:justify-start sm:justify-center w-full">
        <FloatingDock items={links} />
      </div>
    </div>
  );
}
