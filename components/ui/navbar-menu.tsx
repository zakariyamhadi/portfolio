"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
  onClick,
  selected = false,
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
  onClick?: () => void;
  selected?: boolean;
}) => {
  return (
    <div
      onMouseEnter={() => setActive(item)}
      className="relative "
      onClick={onClick}
    >
      <motion.p
        transition={{ duration: 0.3 }}
        className={`cursor-pointer text-black hover:opacity-[0.9] dark:text-white transition-all px-5 py-4 rounded-full ${selected ? "font-bold text-white bg-primary-dark" : ""} `}
      >
        {item}
      </motion.p>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && (
            <div className="absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 pt-4">
              <motion.div
                transition={transition}
                layoutId="active" // layoutId ensures smooth animation
                className="bg-white dark:bg-slate-900 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-900/[0.2] dark:border-white/[0.2] shadow-xl"
              >
                <motion.div
                  layout // layout ensures smooth animation
                  className="w-max h-full p-4"
                >
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)} // resets the state
      className="relative rounded-full border items-center border-secondary/40 dark:bg-slate-900 backdrop-blur-2xl dark:border-white/[0.2] bg-white shadow-lg flex justify-center space-x-0 px-2 !pr-8 py-2 mx-2 "
    >
      {children}
    </nav>
  );
};

export const ProductItem = ({
  title,
  description,
  href,
  src,
}: {
  title: string;
  description: string;
  href: string;
  src: string;
}) => {
  return (
    <Link href={href} className="flex space-x-2">
      <Image
        src={src}
        width={140}
        height={70}
        alt={title}
        className="flex-shrink-0 rounded-md shadow-2xl"
      />
      <div>
        <h4 className="text-xl font-bold mb-1 text-black dark:text-white">
          {title}
        </h4>
        <p className="text-slate-700 text-sm max-w-[10rem] dark:text-slate-300">
          {description}
        </p>
      </div>
    </Link>
  );
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const HoveredLink = ({ children, ...rest }: any) => {
  const router = useRouter();
  return (
    <Link
      {...rest}
      onClick={() => router.push(rest.href)}
      className="text-slate-700 dark:text-slate-200 hover:text-black "
    >
      {children}
    </Link>
  );
};
