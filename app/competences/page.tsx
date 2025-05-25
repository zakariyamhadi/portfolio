"use client";

import { TracingBeam } from "@/components/ui/tracing-beam";
import React, { useEffect, useState } from "react";
import { FolderOpen, FileText } from "lucide-react";
import { motion } from "framer-motion";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalTrigger,
} from "@/components/ui/animated-modal";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { Parallax } from "@/components/parrallax";
import { Gallery } from "@/components/gallery";
import { LinkPreview } from "@/components/ui/link-preview";
import { ThreeDCardDemo } from "@/components/macbook";

export default function CompetencesPage() {
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
        <section id={"analyser"}>
          <h2 className={"!mt-0"}>
            Analyser une demande et identifier un besoin en formation
          </h2>
          <p>
            J'ai mené un projet avec l'École de la Deuxième Chance d'Avignon
            pour créer une formation sur mesure. Après analyse du contexte, j'ai
            conçu et utilisé une grille d'entretien pour mes échanges avec la
            direction et l'équipe pédagogique. Cette méthode m'a permis
            d'identifier le besoin réel au-delà de la demande initiale. Les
            entretiens ont ciblé le public, les objectifs, les contraintes et
            les compétences à développer, aboutissant à une proposition de
            formation parfaitement adaptée aux enjeux de l'établissement.
          </p>

          <div className={"flex gap-5"}>
            <HoverEffect
              items={[
                {
                  title: "Savoirs techniques",
                  description:
                    "Conception d'outils d'enquête, conduite d'entretiens semi-directifs, formalisation d'un diagnostic de besoin.",
                },
                {
                  title: "Savoirs-être",
                  description:
                    "Écoute active, adaptabilité, reformulation, posture professionnelle avec un partenaire externe.",
                },
                {
                  title: "Savoirs théoriques",
                  description:
                    "Méthodologie d'analyse de besoin en formation, distinction entre demande explicite et besoin réel, typologies des besoins en formation, conception par approche compétences.",
                },
              ]}
            />
          </div>
          <PDFModal src={"/assets/proposition_intervetion.pdf"} />
        </section>

        <section id={"animer"}>
          <h2>Animer une séquence de formation </h2>
          <p>
            Pendant mon parcours universitaire,{" "}
            <LinkPreview
              imageSrc={"/assets/sequence-photo.jpg"}
              isStatic={true}
            >
              j'ai animé plusieurs séquences de formation
            </LinkPreview>
            , tant en autonomie qu'en co-animation. Ces exercices pratiques
            m'ont permis d'appliquer concrètement les méthodes pédagogiques en
            les adaptant aux contenus, aux participants et aux contraintes
            temporelles.
          </p>
          <p className={"pb-5"}>
            J'ai mis en œuvre{" "}
            <LinkPreview imageSrc={"/assets/animer-2.jpg"} isStatic={true}>
              diverses techniques d'animation pour stimuler l'engagement des
              apprenants et atteindre les objectifs visés
            </LinkPreview>
            . Ces expériences ont renforcé ma confiance en situation de
            formation, ma capacité à gérer un groupe et à structurer
            efficacement une séquence, même face à l'imprévu.
          </p>
          <Parallax />
          {/*<HoverEffect*/}
          {/*  items={[*/}
          {/*    {*/}
          {/*      title: "Savoirs techniques",*/}
          {/*      description:*/}
          {/*        "Structuration de séquences, utilisation de supports pédagogiques variés, gestion du temps, adaptation des modalités selon le public.",*/}
          {/*    },*/}
          {/*    {*/}
          {/*      title: "Savoirs-être",*/}
          {/*      description:*/}
          {/*        "Écoute active, réactivité, gestion du stress, prise de parole en public, création d'un climat bienveillant et stimulant.",*/}
          {/*    },*/}
          {/*    {*/}
          {/*      title: "Savoirs théoriques",*/}
          {/*      description:*/}
          {/*        "Méthodes d'animation variées, théories de l'apprentissage (Bandura, Meirieu), dynamiques de groupe dans la construction des connaissances.",*/}
          {/*    },*/}
          {/*  ]}*/}
          {/*/>*/}
          {/*<div className={"flex gap-5 items-center justify-center"}>*/}
          {/*  <DirectionAwareHover imageUrl={"/assets/sequence-photo.jpg"}>*/}
          {/*    Formation : Mieux consommer, moins polluer (Mai 2025)*/}
          {/*  </DirectionAwareHover>*/}
          {/*  <PDFModal src={"/assets/support_pedagogique.pdf"} />*/}
          {/*</div>*/}
        </section>

        <section id={"elaborer"}>
          <h2>Élaborer une ingénierie pédagogique </h2>
          <p>
            Mon passage chez Kairos Formation m'a plongée dans la réalité de
            l'ingénierie pédagogique en entreprise. Face à des commandes clients
            aux besoins très spécifiques, j'ai appris à décortiquer les enjeux
            métier pour les transformer en objectifs pédagogiques concrets. Que
            ce soit pour concevoir des modules de sensibilisation réglementaire
            ou développer des formations techniques sur mesure, j'ai découvert
            que le vrai défi n'est pas dans la théorie pédagogique mais dans
            l'adaptation permanente aux contraintes du terrain.
          </p>
          {/*<div className={"flex gap-5"}>*/}
          {/*  <HoverEffect*/}
          {/*    items={[*/}
          {/*      {*/}
          {/*        title: "Techniques",*/}
          {/*        description:*/}
          {/*          "Création de scénarios pédagogiques, conception de supports visuels (Genially, Canva).",*/}
          {/*      },*/}
          {/*      {*/}
          {/*        title: "Comportementales",*/}
          {/*        description: "Précision, créativité, analyse.",*/}
          {/*      },*/}
          {/*      {*/}
          {/*        title: "Théoriques",*/}
          {/*        description: "Principes d'apprentissage, taxonomie de Bloom.",*/}
          {/*      },*/}
          {/*    ]}*/}
          {/*  />*/}
          {/*  <PDFModal src={"/assets/proposition_intervetion.pdf"} />*/}
          {/*</div>*/}
          <div
            className={
              "w-full text-center my-5 text-xl font-semibold text-primary-dark "
            }
          >
            Parcourez les différents scénarios pédagogiques réalisés
          </div>
          <Gallery />
        </section>

        <section id={"concevoir"}>
          <h2>Conception e-learning et digital learning </h2>
          <p className={"pb-5"}>
            Mon immersion dans le digital learning s'est faite par la pratique
            chez Kairos Formation, où j'ai développé des modules e-learning avec
            les outils Articulate. Entre la création de parcours interactifs sur
            Rise et l'exploration des fonctionnalités de Storyline, j'ai
            découvert les spécificités de la formation à distance.
            <br /> J'ai également conçu un parcours complet sur la plateforme
            Parcooroo, incluant la production de vidéos pédagogiques que j'ai
            entièrement réalisées <strong>de la conception au montage</strong>.
            Cette compétence en création vidéo enrichit ma palette d'outils pour
            développer des contenus attractifs et pédagogiques, quel que soit le
            projet de communication. <br />
            Cette expérience m'a révélé que concevoir pour le digital, c'est
            repenser entièrement son approche pédagogique : séquencer
            différemment, créer de l'interactivité adaptée, et surtout prévoir
            comment accompagner les apprenants pour qu'ils ne se retrouvent pas
            isolés dans leur parcours d'apprentissage.
          </p>
          {/*<div className={"flex gap-5"}>*/}
          {/*  <HoverEffect*/}
          {/*    items={[*/}
          {/*      {*/}
          {/*        title: "Savoirs théoriques",*/}
          {/*        description:*/}
          {/*          "Principes du digital learning, scénarisation pédagogique, engagement cognitif et stratégies de micro-learning.",*/}
          {/*      },*/}
          {/*      {*/}
          {/*        title: "Savoirs techniques",*/}
          {/*        description:*/}
          {/*          "Utilisation d’outils auteurs (Rise, Storyline), montage vidéo, intégration de ressources multimédias, structuration de parcours interactifs.",*/}
          {/*      },*/}
          {/*      {*/}
          {/*        title: "Savoirs-être",*/}
          {/*        description:*/}
          {/*          "Créativité, autonomie, rigueur dans la conception, et capacité à se mettre à la place de l’apprenant à distance.",*/}
          {/*      },*/}
          {/*    ]}*/}
          {/*  />*/}

          {/*  <PDFModal src={"/assets/proposition_intervetion.pdf"} />*/}
          {/*</div>*/}
          <LinkPreview
            isStatic={false}
            url={"https://www.parcooroo.com/s5pvxnc9"}
            className={"bg-[#697f3e] text-white p-3 !px-2 !mt-2 font-normal"}
          >
            <span className={"font-normal tracking-tight pr-5"}>ParcOOroo</span>{" "}
            <strong>
              Cliquez ici pour suivre ma formation directement sur ParcOOroo.
            </strong>
          </LinkPreview>
        </section>

        <section id={"autres"}>
          <h2>Autres réalisations </h2>

          <section>
            <h2 className={"!text-2xl !mt-0"}>
              Création d’un site internet pour un organisme de formation fictif
            </h2>
            <div className={"flex gap-10 items-start justify-center"}>
              {" "}
              <p className={"pt-5"}>
                Lors d'un projet de groupe visant à concevoir un organisme de
                formation fictif, j'ai pris en charge le développement de
                l'interface web qui donnerait vie à notre concept. <br />
                Utilisant WordPress, j'ai conçu un site professionnel qui devait
                présenter de manière crédible notre offre tout en fournissant
                une navigation claire : présentation de l'organisme, catalogue
                détaillé des formations, modalités d'inscription et ressources
                pédagogiques. <br />
                Cette mission m'a appris que créer un site web efficace va bien
                au-delà de la technique : il faut raconter une histoire qui
                donne envie.
              </p>{" "}
              <ThreeDCardDemo />
            </div>

            {/*<div className={"flex gap-5"}>*/}
            {/*  <HoverEffect*/}
            {/*    items={[*/}
            {/*      {*/}
            {/*        title: "Compétences techniques",*/}
            {/*        description:*/}
            {/*          "Utilisation de WordPress pour la création et gestion d’un site internet, structuration du contenu, et personnalisation de l'interface utilisateur.",*/}
            {/*      },*/}
            {/*      {*/}
            {/*        title: "Compétences en communication numérique",*/}
            {/*        description:*/}
            {/*          "Présentation d’informations de manière claire et pédagogique, gestion de la navigation du site.",*/}
            {/*      },*/}
            {/*      {*/}
            {/*        title: "Compétences en design web",*/}
            {/*        description:*/}
            {/*          "Création d'un site responsive, adapté à différents appareils et plateformes.",*/}
            {/*      },*/}
            {/*    ]}*/}
            {/*  />*/}

            {/*  <PDFModal src={"/assets/proposition_intervetion.pdf"} />*/}
            {/*</div>*/}
          </section>

          {/*<section>*/}
          {/*  <h2 className={"!text-2xl !mt-0"}>Montage vidéo </h2>*/}
          {/*  <p>*/}
          {/*    En complément de la création du site internet, j'ai également pris*/}
          {/*    en charge la création d'une vidéo de présentation de notre*/}
          {/*    organisme de formation fictif. Cette vidéo avait pour objectif de*/}
          {/*    résumer les étapes clés du projet et de présenter les formations*/}
          {/*    proposées de manière engageante et dynamique.*/}
          {/*  </p>*/}
          {/*  <p>*/}
          {/*    Pour réaliser cette vidéo, j’ai utilisé Canva pour la création des*/}
          {/*    visuels et CapCut pour le montage vidéo. Cela m’a permis*/}
          {/*    d’intégrer des animations, des effets visuels et des transitions*/}
          {/*    fluides, rendant ainsi la vidéo à la fois informative et*/}
          {/*    visuellement attrayante.*/}
          {/*  </p>*/}
          {/*  <p>*/}
          {/*    En parallèle, ma passion pour le montage vidéo existait déjà avant*/}
          {/*    ce projet, et je l'ai développée dans un cadre personnel,*/}
          {/*    notamment en créant des vidéos de recettes de pâtisserie que je*/}
          {/*    partage en ligne. Ce projet personnel m’a permis de perfectionner*/}
          {/*    mes compétences en montage et en création de contenu vidéo, ce qui*/}
          {/*    a également enrichi mon travail dans le cadre universitaire.*/}
          {/*  </p>*/}
          {/*  <p>*/}
          {/*    <strong>Compétences développées</strong> :*/}
          {/*  </p>*/}
          {/*  <div className={"flex gap-5"}>*/}
          {/*    <HoverEffect*/}
          {/*      items={[*/}
          {/*        {*/}
          {/*          title: "Compétences créatives",*/}
          {/*          description:*/}
          {/*            "Conception de la vidéo à l’aide de création d'animations et d'effets visuels pour enrichir le contenu pédagogique.",*/}
          {/*        },*/}
          {/*        {*/}
          {/*          title: "Compétences techniques en montage vidéo",*/}
          {/*          description:*/}
          {/*            "Utilisation de Canva et CapCut, Inshot, Audacity pour le montage, intégration de transitions, sous-titres et éléments graphiques.",*/}
          {/*        },*/}
          {/*        {*/}
          {/*          title: "Compétences en storytelling visuel",*/}
          {/*          description:*/}
          {/*            "Création d’une narration claire et dynamique, mise en valeur des informations clés par des éléments visuels adaptés. J’ai aussi suivi une formation d’une heure sur le storytelling, renforçant mes compétences en narration visuelle.",*/}
          {/*        },*/}
          {/*        {*/}
          {/*          title: "Passion pour le montage vidéo",*/}
          {/*          description:*/}
          {/*            "Expérience préalable dans le montage vidéo de recettes de pâtisserie, développée dans un cadre personnel, et renforçant mes compétences en production de contenu vidéo.",*/}
          {/*        },*/}
          {/*      ]}*/}
          {/*    />*/}

          {/*    <PDFModal src={"/assets/proposition_intervetion.pdf"} />*/}
          {/*  </div>*/}
          {/*</section>*/}
        </section>
      </div>
    </TracingBeam>
  );
}

function AnimatedFolderIcon({ children }: { children: React.ReactNode }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative flex flex-col items-center justify-center cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <motion.div
        animate={{ rotate: hovered ? 20 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <FolderOpen size={48} />
      </motion.div>

      <div className="absolute left-14 -top-2 flex flex-col space-y-1">
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: hovered ? 1 : 0, x: hovered ? 0 : 10 }}
          transition={{ duration: 0.3 }}
        >
          <FileText size={20} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 12 }}
          animate={{ opacity: hovered ? 1 : 0, x: hovered ? 0 : 12 }}
          transition={{ duration: 0.3, delay: 0.05 }}
        >
          <FileText size={20} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 14 }}
          animate={{ opacity: hovered ? 1 : 0, x: hovered ? 0 : 14 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <FileText size={20} />
        </motion.div>
      </div>
      {children}
    </div>
  );
}

function PDFModal({ src }: { src: string }) {
  return (
    <div className="flex items-center justify-center">
      <Modal>
        <ModalTrigger className="relative justify-end items-start !font-semibold transition-colors hover:bg-muted tracking-tight text-secondary-dark flex flex-col shadow-md border hover:opacity-90 ">
          Preuve
        </ModalTrigger>
        <ModalBody>
          <ModalContent>
            <div style={{ width: "100%", height: "80vh" }}>
              <iframe
                src={src}
                title="Document PDF"
                width="100%"
                height="100%"
                style={{ border: "none" }}
              />
            </div>
          </ModalContent>
        </ModalBody>
      </Modal>
    </div>
  );
}
