"use client";

import { cn } from "@/lib/utils";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./navbar-menu";
import { useState } from "react";
import { ModeToggle } from "./toggle";
import { AnimatedTooltipPreview } from "../photo-profile";
import { usePathname, useRouter } from "next/navigation";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const router = useRouter();
  const pathname = usePathname();
  return (
    <div
      className={cn(
        "fixed top-10 inset-x-0 max-w-[80svw] w-fit mx-auto z-50 select-none",
        className,
      )}
    >
      <Menu setActive={setActive}>
        <AnimatedTooltipPreview />
        <MenuItem
          setActive={setActive}
          active={active}
          item="A propos de moi"
          onClick={() => router.push("/biographie")}
          selected={pathname.includes("biographie")}
        >
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/biographie">Ma Biographie</HoveredLink>
            <HoveredLink href="/biographie">
              Pourquoi Ingénieurie de formation ?
            </HoveredLink>
          </div>
        </MenuItem>
        <MenuItem
          setActive={setActive}
          active={active}
          item="Compétences"
          onClick={() => router.push("/competences")}
          selected={pathname.includes("competences")}
        >
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/competences">
              Analyser une demande et identifier un besoin en formation
            </HoveredLink>
            <HoveredLink href="/competences">
              Animer une séquence de formation
            </HoveredLink>
            <HoveredLink href="/competences">
              Élaborer une ingénierie pédagogique
            </HoveredLink>
            <HoveredLink href="/competences">
              Conception e-learning et digital learning
            </HoveredLink>
            <HoveredLink href="/competences">Montage vidéo</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem
          setActive={setActive}
          active={active}
          item="Mes passions"
          onClick={() => router.push("/passions")}
          selected={pathname.includes("passions")}
        ></MenuItem>
        <MenuItem
          setActive={setActive}
          active={active}
          item="Expériences & Formations"
          onClick={() => router.push("/experiences-formations")}
          selected={pathname.includes("experiences-formations")}
        ></MenuItem>
      </Menu>
    </div>
  );
}

export default Navbar;
