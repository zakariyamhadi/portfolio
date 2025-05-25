import React from "react";
import { Timeline } from "@/components/ui/timeline";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export default function BiographiePage() {
  return (
    <div className={"mt-36 mx-auto max-w-5xl px-6"}>
      <div className="portfolio">
        <h2 className={"!mt-0"}>Experiences</h2>
        <TimelineExperience />
        <h2>Formations</h2>
        <TimelineFormations />
      </div>
    </div>
  );
}

function TimelineExperience() {
  const data = [
    {
      title: "2024-2025",
      content: (
        <div className={"relative"}>
          <h2 className={"!mt-0 !text-3xl !text-secondary"}>
            Chargée d’ingénierie de formation
          </h2>
          <div className={"flex items-center justify-start gap-3"}>
            <Image
              src={"/assets/logo-ds.png"}
              alt={"ds"}
              width={100}
              height={100}
            />
            <div className={"text-lg font-semibold text-secondary-dark"}>
              Kairos Formation
            </div>
          </div>

          <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Chez Kairos Formation, j'ai occupé le poste de chargée d'ingénierie
            de formation en alternance. Ma mission principale consistait à{" "}
            <strong>
              concevoir des formations sur mesure pour différents secteurs, avec
              une spécialisation dans le domaine nucléaire
            </strong>
            . <br />
            De l'analyse des besoins clients à l'évaluation des dispositifs, en
            passant par la création de modules e-learning, cette expérience m'a
            permis de mettre en pratique mes compétences théoriques tout en
            développant ma capacité d'adaptation aux exigences du terrain
            professionnel.
          </p>
        </div>
      ),
    },
    {
      title: "2022-2023",
      content: (
        <div>
          <h2 className={"!mt-0 !text-3xl !text-secondary"}>Stages</h2>

          <div className={"text-lg font-semibold text-secondary-dark"}>
            Domaine de l’insertion professionnelle
          </div>
          <div className={"flex items-center justify-start gap-3"}>
            <Image
              src={"/assets/logo-e2c.png"}
              alt={"ds"}
              width={100}
              height={100}
            />
            <Image
              src={"/assets/logo-ml.webp"}
              alt={"ds"}
              width={100}
              height={100}
            />
            <Image
              src={"/assets/logo-piaf.jpg"}
              alt={"ds"}
              width={100}
              height={100}
            />
          </div>
          <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Après ma licence en Sciences du langage, j’ai effectué plusieurs
            stages dans des structures engagées dans l’accompagnement
            socioprofessionnel : Chez PIAF – Mission Locale : j’ai participé à
            l’accompagnement des jeunes en recherche d’emploi ou de formation,
            en observant les entretiens individuels et en collaborant à des
            ateliers collectifs. <br />À l’École de la Deuxième Chance (E2C) :
            j’ai découvert l’approche pédagogique spécifique à l’E2C et
            contribué à des actions de remobilisation autour de la formation et
            de l’insertion. <br />
            Ces expériences ont été déterminantes dans mon orientation vers les
            métiers de la formation. Elles m’ont permis de mieux comprendre les
            leviers de la motivation, de la pédagogie active et de l’adaptation
            aux besoins des publics.
          </p>
        </div>
      ),
    },
    {
      title: "2021-2022",
      content: (
        <div>
          <h2 className={"!mt-0 !text-3xl !text-secondary"}>
            Encadrante scolaire
          </h2>
          <div className={"flex items-center justify-start gap-3"}>
            <Image
              src={"/assets/logo-pincons.jpg"}
              alt={"ds"}
              width={100}
              height={100}
              className={"h-16 w-auto"}
            />
            <div className={"text-lg font-semibold text-secondary-dark"}>
              Collège privé Les Pinsons (Strasbourg)
            </div>
          </div>

          <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Avant de plonger dans le monde de la formation pour adultes, j’ai
            exercé en tant qu' encadrante scolaire dans un collège privé. Mon
            rôle consistait à accompagner les élèves au quotidien, à assurer un
            cadre bienveillant et structurant, et à veiller au bon déroulement
            de la vie scolaire. <br />
            Cette expérience m’a donné un premier aperçu de l'accompagnement
            éducatif et a renforcé mon sens de l’écoute, de la patience et de la
            gestion des groupes. Elle m’a également confortée dans l’idée que
            j’étais faite pour transmettre, guider, et soutenir les autres dans
            leur évolution.{" "}
          </p>
        </div>
      ),
    },
  ];
  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}

function TimelineFormations() {
  const data = [
    {
      title: "2024-2025",
      content: (
        <div>
          <h2 className={"!mt-0 !text-3xl !text-secondary"}>
            Université d’Avignon
          </h2>
          <div className={"flex items-center justify-start gap-3"}>
            <Image
              src={"/assets/logo-avi.png"}
              alt={"ds"}
              width={100}
              height={100}
            />
            <div className={"text-lg font-semibold text-secondary-dark"}>
              Licence Professionnelle Métiers de la Gestion des Ressources
              Humaines : Ingénierie, Conseil, Animation de Formation (ICAF){" "}
            </div>
          </div>

          <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Cette formation professionnalisante m'a permis d'acquérir des
            compétences en analyse des besoins en formation, conception de
            dispositifs pédagogiques, animation de sessions de formation et
            accompagnement des parcours professionnels.​
          </p>
          <Dialog>
            <DialogTrigger
              className={
                "rounded-md bg-primary-dark my-3 text-sm font-semibold p-2 px-3 hover:opacity-90 transition-colors text-white"
              }
            >
              Diplôme
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Diplôme</DialogTitle>
              </DialogHeader>
              <Image
                src={"/assets/doc-avi.png"}
                alt={"ds"}
                width={1000}
                height={1000}
                className={"max-h-[80svh] m-auto object-contain"}
              />
            </DialogContent>
          </Dialog>
        </div>
      ),
    },
    {
      title: "2020-2022",
      content: (
        <div>
          <h2 className={"!mt-0 !text-3xl !text-secondary"}>
            Université de Strasbourg
          </h2>
          <div className={"flex items-center justify-start gap-3"}>
            <Image
              src={"/assets/logo-stras.png"}
              alt={"ds"}
              width={100}
              height={100}
            />
            <div className={"text-lg font-semibold text-secondary-dark"}>
              Faculté des Lettres - Licence Sciences du Langage
            </div>
          </div>
          <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Ce cursus m'a offert une compréhension approfondie des mécanismes du
            langage et de la langue française, en abordant des disciplines
            telles que la linguistique française et générale, la phonétique
            articulatoire et expérimentale, ainsi que la sociolinguistique.
          </p>
          <Dialog>
            <DialogTrigger
              className={
                "rounded-md bg-primary-dark my-3 text-sm font-semibold p-2 px-3 hover:opacity-90 transition-colors text-white"
              }
            >
              Relevé de notes
            </DialogTrigger>
            <DialogContent className={"!overflow-scroll"}>
              <DialogHeader>
                <DialogTitle>Relevé de notes</DialogTitle>
              </DialogHeader>
              <Image
                src={"/assets/doc-stras.png"}
                alt={"ds"}
                width={1000}
                height={1000}
                className={"max-h-[80svh] m-auto object-contain"}
              />
            </DialogContent>
          </Dialog>
        </div>
      ),
    },
    {
      title: "2017-2020",
      content: (
        <div>
          <h2 className={"!mt-0 !text-3xl !text-secondary"}>
            Université Badji Mokhtar d’Annaba
          </h2>
          <div className={"flex items-center justify-start gap-3"}>
            <Image
              src={"/assets/logo-annaba.png"}
              alt={"ds"}
              width={100}
              height={100}
            />
            <div className={"text-lg font-semibold text-secondary-dark"}>
              Licence Français Langue Étrangère (FLE)
            </div>
          </div>

          <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Au cours de cette formation, j'ai étudié la langue française sous
            divers aspects, notamment la linguistique, la littérature française,
            la civilisation et l'histoire de la France, ainsi que la didactique
            du français langue étrangère. Malheureusement, le sixième semestre a
            été annulé en raison de la pandémie de covid-19.
          </p>
          <Dialog>
            <DialogTrigger
              className={
                "rounded-md bg-primary-dark my-3 text-sm font-semibold p-2 px-3 hover:opacity-90 transition-colors text-white"
              }
            >
              Relevé de notes
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle> Relevé de notes</DialogTitle>
              </DialogHeader>
              <Image
                src={"/assets/doc-annaba.png"}
                alt={"ds"}
                width={1000}
                height={1000}
                className={"max-h-[80svh] m-auto object-contain"}
              />
            </DialogContent>
          </Dialog>
        </div>
      ),
    },
  ];
  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}
