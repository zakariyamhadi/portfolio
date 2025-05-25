"use client";
import React from "react";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import { useRouter } from "next/navigation";
const people = [
  {
    id: 1,
    name: "Sara MHADI",
    designation: "Chargée d'ingénierie de formation",
    image: "/assets/pp.jpg",
  },
];

export function AnimatedTooltipPreview() {
  const router = useRouter();
  return (
    <div
      className="flex flex-row items-center justify-center mr-10 cursor-pointer"
      onClick={() => router.push("/")}
    >
      <AnimatedTooltip items={people} />
    </div>
  );
}
