"use client";

import { AppleCardsCarouselDemo } from "@/components/apple-cards-carousel";
import SignupFormDemo from "@/components/example/signup-form-demo";
import { Footer } from "@/components/footer";
import { TimelineDemo } from "@/components/formations";
import { GalleryParallax } from "@/components/gallery-parallax";
import { HeroHighlightDemo } from "@/components/hero-highlight";
import { BackgroundAndDock } from "@/components/home";
import React from "react";

export function Index() {
  return (
    <div className="h-[100svh] w-[100svw]">
      <BackgroundAndDock />
      <GalleryParallax />
      <HeroHighlightDemo />
      <TimelineDemo />
      <AppleCardsCarouselDemo />
      <SignupFormDemo />
      <Footer />
    </div>
  );
}
