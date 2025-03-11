"use client";
import React from "react";
import { HeroParallax } from "./ui/hero-parallax";

export function GalleryParallax() {
  return <HeroParallax products={products} />;
}
export const products = [
  {
    title: "Eurorient",
    link: "https://gomoonbeam.com",
    thumbnail: "/assets/nahil.png",
  },
  {
    title: "Elevage du Royaume des Sables",
    link: "https://cursor.so",
    thumbnail: "/assets/rds-accueil.png",
  },
  {
    title: "VitaBear",
    link: "https://userogue.com",
    thumbnail: "/assets/vitabear.png",
  },

  {
    title: "Anne&Ly-Trans",
    link: "https://editorially.org",
    thumbnail: "/assets/ann&ly.png",
  },
  {
    title: "Eurorient",
    link: "https://gomoonbeam.com",
    thumbnail: "/assets/nahil.png",
  },
  {
    title: "Arkotrading",
    link: "https://editrix.ai",
    thumbnail: "/assets/arkotrading.png",
  },
  {
    title: "CALVO Electricité",
    link: "https://app.pixelperfect.quest",
    thumbnail: "/assets/calvo.png",
  },
  {
    title: "Hexagonia",
    link: "https://cursor.so",
    thumbnail: "/assets/hexagonia.png",
  },
  {
    title: "CTC",
    link: "https://gomoonbeam.com",
    thumbnail: "/assets/ctc.png",
  },
];
