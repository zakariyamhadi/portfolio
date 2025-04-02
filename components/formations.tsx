"use client";

import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { useRouter } from "next/navigation";

export function TimelineDemo() {
  const router = useRouter();
  const data = [
    {
      title: "2024",
      content: (
        <div>
          <div className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8 flex flex-col">
            <div className="flex items-center">
              Ingénieur Développement chez{" "}
              <div className="flex items-center justify-center mx-2 p-2 rounded-xl bg-[#3b0764]">
                <Image
                  alt="logo-antibia"
                  width={80}
                  height={10}
                  className=" cursor-pointer"
                  onClick={() => router.push("https://www.antibia.com/")}
                  src="/assets/antibia.png"
                />
              </div>
              en tant qu'Ingénieur Développement.
            </div>
            <div className="flex items-center">
              Alternance chez{" "}
              <Image
                alt="logo-inersio"
                width={80}
                height={10}
                className="mx-1 cursor-pointer"
                onClick={() => router.push("https://www.inersio.com/")}
                src="/assets/inersio.png"
              />
              en tant que Développeur Front-End Web & Mobile.
            </div>
            <p>
              Une année riche en expériences où j'ai occupé le rôle de
              développeur principal sur les projets les plus récents. J'ai eu
              l'opportunité de déployer ces applications dans divers
              environnements, jusqu'à leur mise en production.
            </p>
            <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal my-8 flex items-center">
              Préparation du Mastère en Solutions Digitales et Data (MS2D) avec{" "}
              <Image
                alt="logo-esimed"
                width={80}
                height={10}
                className="mx-1 cursor-pointer"
                onClick={() => router.push("https://esimed.fr/")}
                src="/assets/esimed.png"
              />
              et{" "}
              <Image
                alt="logo-3il"
                width={130}
                height={10}
                className="mx-2 cursor-pointer"
                onClick={() => router.push("https://www.3il-ingenieurs.fr/")}
                src="/assets/3il.svg"
              />
            </p>
            <div className="mb-8">
              <p className="font-bold underline">Compétences :</p>
              <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal flex items-center">
                • API Rest, SAP, JIRA API, Minio, Stripe API
              </p>
              <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal flex items-center">
                • NextJS 14, React 18
              </p>
              <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal flex items-center">
                • ShadcnUI, RadixUI, AceternityUI
              </p>
              <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal flex items-center">
                • Flutter
              </p>
              <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal flex items-center">
                • Angular 17, 18
              </p>
              <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal flex items-center">
                • Java Spring
              </p>
              <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal flex items-center">
                • Agile SCRUM
              </p>
              <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal flex items-center">
                • PostgresQL
              </p>
              <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal flex items-center">
                • Material Angular
              </p>
            </div>
            <div>
              <p className="font-bold underline">Points marquants :</p>
              <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal flex items-center">
                • Connexion avec API Rest, SAP et autre outils comme JIRA API,
                Minio, Stripe etc...
              </p>
              <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal flex items-center">
                • Intégration de ShadcnUI et de quelques composant
                d'AceternityUI
              </p>
              <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal flex items-center">
                • Amélioration continue des process internes (qualité de code,
                observabilité, déploiement : Sentry, Infisical, Sonar,
                Playwright)
              </p>
              <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal flex items-center">
                • Initialisation de deux projets majeurs (ERP) sous NextJS
              </p>
              <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal flex items-center">
                • Responsable Front au niveau des validations de Merge-Request
              </p>
              <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal flex items-center">
                • Initiative de mis en commun de composant Front au sein de
                l'équipe de développement
              </p>
              <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal flex items-center">
                • Développement de sites Shopify
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/assets/shadcnui.png"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/assets/inersio-accueil.png"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/assets/grafana.png"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/assets/vitabear.png"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2021 - 2023",
      content: (
        <div className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8 flex flex-col">
          <p className="items-center text-neutral-800 dark:text-neutral-200 text-xs flex md:text-sm font-normal mb-2">
            Embauché en tant que Développeur Front-End Web chez{" "}
            <Image
              alt="logo-esimed"
              width={40}
              height={10}
              className="mx-1.5 cursor-pointer"
              src="/assets/itso.png"
            />{" "}
          </p>
          <p className="items-center text-neutral-800 dark:text-neutral-200 text-xs flex md:text-sm font-normal mb-3">
            ITSO devient INERSIO en janvier 2023. Sous contrat en CDI.
          </p>
          <p className="items-center text-neutral-800 dark:text-neutral-200 text-xs flex md:text-sm font-normal mb-8">
            Création de{" "}
            <span
              className="font-bold flex items-center mr-2 cursor-pointer"
              onClick={() => router.push("https://www.digisten.fr/")}
            >
              <Image
                alt="logo-digisten"
                height={40}
                width={40}
                src="/assets/digisten.png"
              />
              DIGISTEN
            </span>{" "}
            en Janvier 2023.
          </p>
          <div className="mb-8">
            <p className="font-bold underline">Points marquants :</p>
            <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal flex items-center">
              • Développement de nouvelles fonctionnalités, d’évolutions,
              analyse et conception de solutions
            </p>
            <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal flex items-center">
              • Expérience sur application de gestion type ERP, Facturation et
              Gestion de Devis
            </p>
            <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal flex items-center">
              • Transfert de compétences aux nouveaux arrivants sur le projet et
              accompagnement de formation des alternants
            </p>
            <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal flex items-center">
              • Participation active aux chiffrages technico-fonctionnels
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://assets.aceternity.com/pro/hero-sections.png"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://assets.aceternity.com/features-section.png"
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://assets.aceternity.com/pro/bento-grids.png"
              alt="bento template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://assets.aceternity.com/cards.png"
              alt="cards template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Changelog",
      content: (
        <div>
          <div className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8 flex flex-col">
            <p className="items-center text-neutral-800 dark:text-neutral-200 text-xs flex md:text-sm font-normal mb-2">
              Embauché en tant que Développeur Front-End Web chez{" "}
              <Image
                alt="logo-esimed"
                width={40}
                height={10}
                className="mx-1.5 cursor-pointer"
                src="/assets/itso.png"
              />{" "}
            </p>
            <p className="items-center text-neutral-800 dark:text-neutral-200 text-xs flex md:text-sm font-normal mb-8">
              ITSO devient INERSIO en janvier 2023. Sous contrat en CDI.
            </p>
            <div className="mb-8">
              <p className="font-bold underline">Points marquants :</p>
              <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal flex items-center">
                • Développement de nouvelles fonctionnalités, d’évolutions,
                analyse et conception de solutions
              </p>
              <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal flex items-center">
                • Expérience sur application de gestion type ERP, Facturation et
                Gestion de Devis
              </p>
              <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal flex items-center">
                • Transfert de compétences aux nouveaux arrivants sur le projet
                et accompagnement de formation des alternants
              </p>
              <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal flex items-center">
                • Participation active aux chiffrages technico-fonctionnels
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://assets.aceternity.com/pro/hero-sections.png"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://assets.aceternity.com/features-section.png"
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://assets.aceternity.com/pro/bento-grids.png"
              alt="bento template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://assets.aceternity.com/cards.png"
              alt="cards template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
