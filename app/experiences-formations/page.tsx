import React from "react";
import { Timeline } from "@/components/ui/timeline";

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
        <div>
          <h2 className={"!mt-0 !text-3xl !text-secondary"}>
            Chargée d’ingénierie de formation
          </h2>
          <div className={"text-lg font-semibold text-secondary-dark"}>
            Kairos Formation
          </div>
          <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Cette année, j’ai rejoint Kairos Formation en tant que chargée
            d’ingénierie de formation dans le cadre de mon alternance. Mon
            rôle ? Concevoir des formations sur mesure pour des publics variés,
            notamment dans le secteur du nucléaire. J’ai pu analyser les besoins
            de commanditaires, concevoir des parcours pédagogiques adaptés,
            créer des modules en digital learning (dont un en microlearning sur
            le plomb via Rise), et participer activement à l’évaluation des
            dispositifs. Cette expérience m’a permis de confronter la théorie à
            la réalité du terrain, de développer ma réactivité et d’affiner ma
            posture de formatrice-conceptrice.
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
          <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Après ma licence en Sciences du langage, j’ai effectué plusieurs
            stages dans des structures engagées dans l’accompagnement
            socioprofessionnel : Chez PIAF – Mission Locale : j’ai participé à
            l’accompagnement des jeunes en recherche d’emploi ou de formation,
            en observant les entretiens individuels et en collaborant à des
            ateliers collectifs. À l’École de la Deuxième Chance (E2C) : j’ai
            découvert l’approche pédagogique spécifique à l’E2C et contribué à
            des actions de remobilisation autour de la formation et de
            l’insertion. Ces expériences ont été déterminantes dans mon
            orientation vers les métiers de la formation. Elles m’ont permis de
            mieux comprendre les leviers de la motivation, de la pédagogie
            active et de l’adaptation aux besoins des publics.
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
          <div className={"text-lg font-semibold text-secondary-dark"}>
            Collège privé Les Pinsons (Strasbourg)
          </div>
          <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Avant de plonger dans le monde de la formation pour adultes, j’ai
            exercé en tant qu' encadrante scolaire dans un collège privé. Mon
            rôle consistait à accompagner les élèves au quotidien, à assurer un
            cadre bienveillant et structurant, et à veiller au bon déroulement
            de la vie scolaire. Cette expérience m’a donné un premier aperçu de
            l'accompagnement éducatif et a renforcé mon sens de l’écoute, de la
            patience et de la gestion des groupes. Elle m’a également confortée
            dans l’idée que j’étais faite pour transmettre, guider, et soutenir
            les autres dans leur évolution.{" "}
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
          <div className={"text-lg font-semibold text-secondary-dark"}>
            Licence Professionnelle Métiers de la Gestion des Ressources
            Humaines : Ingénierie, Conseil, Animation de Formation (ICAF){" "}
          </div>
          <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Cette formation professionnalisante m'a permis d'acquérir des
            compétences en analyse des besoins en formation, conception de
            dispositifs pédagogiques, animation de sessions de formation et
            accompagnement des parcours professionnels.​
          </p>
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
          <div className={"text-lg font-semibold text-secondary-dark"}>
            Faculté des Lettres - Licence Sciences du Langage
          </div>
          <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Ce cursus m'a offert une compréhension approfondie des mécanismes du
            langage et de la langue française, en abordant des disciplines
            telles que la linguistique française et générale, la phonétique
            articulatoire et expérimentale, ainsi que la sociolinguistique.
          </p>
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
          <div className={"text-lg font-semibold text-secondary-dark"}>
            Licence Français Langue Étrangère (FLE)
          </div>
          <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Au cours de cette formation, j'ai étudié la langue française sous
            divers aspects, notamment la linguistique, la littérature française,
            la civilisation et l'histoire de la France, ainsi que la didactique
            du français langue étrangère. Malheureusement, le sixième semestre a
            été annulé en raison de la pandémie de covid-19.
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
