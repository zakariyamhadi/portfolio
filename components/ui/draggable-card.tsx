"use client";
import { cn } from "@/lib/utils";
import React, { useRef, useState, useEffect } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useAnimationControls,
} from "motion/react";

export const DraggableCard = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const cardRef = useRef<HTMLDivElement>(null);
  const controls = useAnimationControls();

  const springConfig = { stiffness: 100, damping: 20, mass: 0.5 };
  const rotateX = useSpring(
    useTransform(mouseY, [-300, 300], [25, -25]),
    springConfig,
  );
  const rotateY = useSpring(
    useTransform(mouseX, [-300, 300], [-25, 25]),
    springConfig,
  );

  useEffect(() => {
    const updateConstraints = () => {
      const card = cardRef.current;
      if (card) {
        const { width, height } = card.getBoundingClientRect();
        card.style.maxWidth = `${window.innerWidth - width}px`;
        card.style.maxHeight = `${window.innerHeight - height}px`;
      }
    };

    updateConstraints();
    window.addEventListener("resize", updateConstraints);

    return () => window.removeEventListener("resize", updateConstraints);
  }, []);

  return (
    <motion.div
      ref={cardRef}
      drag
      dragConstraints={{
        left: 0,
        right: window.innerWidth,
        top: 0,
        bottom: window.innerHeight,
      }}
      style={{ rotateX, rotateY, willChange: "transform" }}
      className={cn(
        "absolute w-80 h-96 bg-neutral-100 dark:bg-neutral-800 shadow-2xl rounded-lg",
        className,
      )}
    >
      {children}
    </motion.div>
  );
};

export const DraggableCardContainer = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div className={cn("relative w-full h-[600px]", className)}>{children}</div>
  );
};
