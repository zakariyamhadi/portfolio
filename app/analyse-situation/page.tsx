"use client";

import { TracingBeam } from "@/components/ui/tracing-beam";
import Image from "next/image";
import { LinkPreview } from "@/components/ui/link-preview";
import React, { useEffect } from "react";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { MaskContainer } from "@/components/ui/svg-mask-effect";
import { Gallery } from "@/components/gallery";

export default function BiographiePage() {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);
  return (
    <TracingBeam className={"mt-36"}>
      <div className="portfolio">
        <div style={{ width: "100%", height: "75vh" }}>
          <iframe
            src={"/assets/analyse-situation.pdf"}
            title="Document PDF"
            width="100%"
            height="100%"
            style={{ border: "none" }}
          />
        </div>
        <div
          className={
            "w-full text-center mb-5 mt-10 text-xl font-semibold text-primary-dark "
          }
        >
          Voici les livres qui m'ont inspirée pour rédiger mon analyse
        </div>
        <div className="flex justify-between gap-4 max-w-5xl mx-auto overflow-hidden pr-8 pl-2 py-5">
          <Image
            src="/assets/livre1.jpg"
            alt=""
            width={400}
            height={400}
            className="object-cover w-1/3 h-auto border p-2 rounded-lg shadow-lg"
          />
          <Image
            src="/assets/livre2.jpg"
            alt=""
            width={400}
            height={400}
            className="object-cover w-1/3 h-auto border p-2 rounded-lg shadow-lg"
          />
          <Image
            src="/assets/livre3.png"
            alt=""
            width={400}
            height={400}
            className="object-cover w-1/3 h-auto border p-2 rounded-lg shadow-lg"
          />
        </div>
      </div>
    </TracingBeam>
  );
}

function CVTitle() {
  const words = [
    {
      text: "Découvrez",
      className: "text-primary-dark",
    },
    {
      text: "mon",
    },
    {
      text: "CV",
      className: "text-primary-dark",
    },
    {
      text: "Vidéo",
      className: "text-primary-dark",
    },
    {
      text: "ci",
    },
    {
      text: "-",
    },
    {
      text: "dessous",
    },
  ];
  return <TypewriterEffectSmooth words={words} />;
}
