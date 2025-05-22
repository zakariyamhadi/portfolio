"use client";

import { BackgroundAndDock } from "@/components/home";
import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP); // register the hook to avoid React version discrepancies

export function Index() {
  return (
    <div className="h-[100svh] w-[100svw]">
      <BackgroundAndDock />
    </div>
  );
}
