"use client";

import { TracingBeam } from "@/components/ui/tracing-beam";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { FolderOpen, FileText } from "lucide-react";
import { motion } from "framer-motion";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "@/components/ui/animated-modal";
import Image from "next/image";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { PinContainer } from "@/components/ui/3d-pin";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";

export default function CompetencesPage() {
  return (
    <TracingBeam className={"mt-36"}>
      <div className="portfolio">
        <section>
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
            <PDFModal src={"/assets/proposition_intervetion.pdf"} />
          </div>
        </section>

        <section>
          <h2>Animer une séquence de formation </h2>
          <p>
            Pendant mon parcours universitaire, j'ai animé plusieurs séquences
            de formation, tant en autonomie qu'en co-animation. Ces exercices
            pratiques m'ont permis d'appliquer concrètement les méthodes
            pédagogiques en les adaptant aux contenus, aux participants et aux
            contraintes temporelles.
          </p>
          <p>
            J'ai mis en œuvre diverses techniques d'animation pour stimuler
            l'engagement des apprenants et atteindre les objectifs visés. Ces
            expériences ont renforcé ma confiance en situation de formation, ma
            capacité à gérer un groupe et à structurer efficacement une
            séquence, même face à l'imprévu.
          </p>
          <HoverEffect
            items={[
              {
                title: "Savoirs techniques",
                description:
                  "Structuration de séquences, utilisation de supports pédagogiques variés, gestion du temps, adaptation des modalités selon le public.",
              },
              {
                title: "Savoirs-être",
                description:
                  "Écoute active, réactivité, gestion du stress, prise de parole en public, création d'un climat bienveillant et stimulant.",
              },
              {
                title: "Savoirs théoriques",
                description:
                  "Méthodes d'animation variées, théories de l'apprentissage (Bandura, Meirieu), dynamiques de groupe dans la construction des connaissances.",
              },
            ]}
          />
          <div className={"flex gap-5 items-center justify-center"}>
            {/*<Image*/}
            {/*  src={"/assets/sequence-photo.jpg"}*/}
            {/*  alt={""}*/}
            {/*  width={1000}*/}
            {/*  height={1000}*/}
            {/*  quality={100}*/}
            {/*  className={*/}
            {/*    "h-[400px] w-full object-cover rounded-xl p-2 shadow-lg border"*/}
            {/*  }*/}
            {/*/>*/}
            <DirectionAwareHover imageUrl={"/assets/sequence-photo.jpg"}>
              Formation : Mieux consommer, moins polluer (Mai 2025)
            </DirectionAwareHover>
            <PDFModal src={"/assets/support_pedagogique.pdf"} />
          </div>
        </section>

        <section>
          <h2>Élaborer une ingénierie pédagogique </h2>
          <p>
            J'ai développé plusieurs dispositifs de formation en adoptant une
            approche structurée et méthodique. De l'analyse initiale des besoins
            jusqu'à l'évaluation des acquis, j'ai construit des parcours
            cohérents qui répondent précisément aux objectifs visés et
            s'adaptent aux spécificités des apprenants.
          </p>
          <p>
            Ma méthode de travail s'inspire notamment du modèle ADDIE, me
            permettant d'organiser efficacement chaque phase de conception.
            Cette rigueur méthodologique se combine avec une créativité dans le
            choix des activités et des supports pour favoriser l'engagement et
            l'apprentissage.
          </p>
          <div className={"flex gap-5"}>
            <HoverEffect
              items={[
                {
                  title: "Techniques",
                  description:
                    "Création de scénarios pédagogiques, conception de supports visuels (Genially, Canva).",
                },
                {
                  title: "Comportementales",
                  description: "Précision, créativité, analyse.",
                },
                {
                  title: "Théoriques",
                  description: "Principes d'apprentissage, taxonomie de Bloom.",
                },
              ]}
            />

            <PDFModal src={"/assets/proposition_intervetion.pdf"} />
          </div>
        </section>

        <section>
          <h2>Conception e-learning et digital learning </h2>
          <p>
            Dans le cadre de ma formation à l’Université d’Avignon, j’ai pu
            développer la compétence de conception de dispositifs en digital
            learning en créant un parcours de formation en ligne sur Parcooroo.
            Ce projet m’a permis de concevoir plusieurs vidéos pédagogiques, que
            j’ai scénarisées, enregistrées et montées moi-même. Ces vidéos
            avaient pour objectif de rendre accessibles des contenus théoriques
            sous une forme engageante, adaptée à un apprentissage autonome.
            Elles sont intégrées dans un parcours structuré et interactif, dont
            je fournis le lien en annexe à titre de démonstration.
          </p>
          <p>
            En parallèle, lors de mon alternance, j’ai été amenée à concevoir un
            module de micro-learning sur Rise, destiné à sensibiliser les
            travailleurs du secteur nucléaire aux risques liés au plomb. J’ai
            construit ce module en autonomie, en intégrant des contenus
            interactifs, des mises en situation et des quiz. Ce projet m’a
            également permis de me familiariser avec l’outil Articulate
            Storyline, que j’ai testé en conditions réelles, ce qui m’a permis
            d’en maîtriser les principales fonctionnalités, même si le module
            que je joins en tant que preuve a été réalisé sur Rise.
          </p>
          <p>Ces projets m’ont permis de mobiliser :</p>
          <div className={"flex gap-5"}>
            <HoverEffect
              items={[
                {
                  title: "Savoirs théoriques",
                  description:
                    "Principes du digital learning, scénarisation pédagogique, engagement cognitif et stratégies de micro-learning.",
                },
                {
                  title: "Savoirs techniques",
                  description:
                    "Utilisation d’outils auteurs (Rise, Storyline), montage vidéo, intégration de ressources multimédias, structuration de parcours interactifs.",
                },
                {
                  title: "Savoirs-être",
                  description:
                    "Créativité, autonomie, rigueur dans la conception, et capacité à se mettre à la place de l’apprenant à distance.",
                },
              ]}
            />

            <PDFModal src={"/assets/proposition_intervetion.pdf"} />
          </div>
        </section>

        <section>
          <h2>Autres réalisations </h2>

          <section>
            <h2 className={"!text-2xl !mt-0"}>
              Création d’un site internet pour un organisme de formation fictif
            </h2>
            <p>
              Dans le cadre de mon projet universitaire à l'Université
              d'Avignon, en collaboration avec mon groupe, nous avons créé un
              organisme de formation fictif. Parmi mes rôles dans ce projet,
              j’ai été responsable de la création du site internet de notre
              organisme de formation fictif. Le but était de mettre en valeur
              toutes les étapes clés de la création de l'organisme, ainsi que de
              fournir aux visiteurs les informations nécessaires, telles que la
              présentation de l’organisme, les formations proposées, les
              modalités d'inscription, et d'autres ressources pédagogiques.
            </p>
            <p>
              Pour ce faire, j'ai utilisé WordPress, un outil qui m'a permis de
              structurer le contenu de manière professionnelle et accessible.
              J'ai conçu un site clair, dynamique et bien organisé, en accord
              avec les objectifs pédagogiques du projet.
            </p>
            <p>
              <strong>Compétences développées</strong> :
            </p>
            <div className={"flex gap-5"}>
              <HoverEffect
                items={[
                  {
                    title: "Compétences techniques",
                    description:
                      "Utilisation de WordPress pour la création et gestion d’un site internet, structuration du contenu, et personnalisation de l'interface utilisateur.",
                  },
                  {
                    title: "Compétences en communication numérique",
                    description:
                      "Présentation d’informations de manière claire et pédagogique, gestion de la navigation du site.",
                  },
                  {
                    title: "Compétences en design web",
                    description:
                      "Création d'un site responsive, adapté à différents appareils et plateformes.",
                  },
                ]}
              />

              <PDFModal src={"/assets/proposition_intervetion.pdf"} />
            </div>
          </section>

          <section>
            <h2 className={"!text-2xl !mt-0"}>Montage vidéo </h2>
            <p>
              En complément de la création du site internet, j'ai également pris
              en charge la création d'une vidéo de présentation de notre
              organisme de formation fictif. Cette vidéo avait pour objectif de
              résumer les étapes clés du projet et de présenter les formations
              proposées de manière engageante et dynamique.
            </p>
            <p>
              Pour réaliser cette vidéo, j’ai utilisé Canva pour la création des
              visuels et CapCut pour le montage vidéo. Cela m’a permis
              d’intégrer des animations, des effets visuels et des transitions
              fluides, rendant ainsi la vidéo à la fois informative et
              visuellement attrayante.
            </p>
            <p>
              En parallèle, ma passion pour le montage vidéo existait déjà avant
              ce projet, et je l'ai développée dans un cadre personnel,
              notamment en créant des vidéos de recettes de pâtisserie que je
              partage en ligne. Ce projet personnel m’a permis de perfectionner
              mes compétences en montage et en création de contenu vidéo, ce qui
              a également enrichi mon travail dans le cadre universitaire.
            </p>
            <p>
              <strong>Compétences développées</strong> :
            </p>
            <div className={"flex gap-5"}>
              <HoverEffect
                items={[
                  {
                    title: "Compétences créatives",
                    description:
                      "Conception de la vidéo à l’aide de création d'animations et d'effets visuels pour enrichir le contenu pédagogique.",
                  },
                  {
                    title: "Compétences techniques en montage vidéo",
                    description:
                      "Utilisation de Canva et CapCut, Inshot, Audacity pour le montage, intégration de transitions, sous-titres et éléments graphiques.",
                  },
                  {
                    title: "Compétences en storytelling visuel",
                    description:
                      "Création d’une narration claire et dynamique, mise en valeur des informations clés par des éléments visuels adaptés. J’ai aussi suivi une formation d’une heure sur le storytelling, renforçant mes compétences en narration visuelle.",
                  },
                  {
                    title: "Passion pour le montage vidéo",
                    description:
                      "Expérience préalable dans le montage vidéo de recettes de pâtisserie, développée dans un cadre personnel, et renforçant mes compétences en production de contenu vidéo.",
                  },
                ]}
              />

              <PDFModal src={"/assets/proposition_intervetion.pdf"} />
            </div>
          </section>
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
        <ModalTrigger className="oup/modal-btn relative h-24 justify-end items-start font-semibold w-28 text-secondary-dark flex flex-col shadow-md bg-secondary hover:opacity-90 transition-opacity">
          <AnimatedFolderIcon>Preuves</AnimatedFolderIcon>
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
