"use client";

import { TracingBeam } from "@/components/ui/tracing-beam";
import Image from "next/image";
import { LinkPreview } from "@/components/ui/link-preview";
import ColourfulText from "@/components/ui/colourful-text";
import React from "react";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";

export default function BiographiePage() {
  return (
    <TracingBeam className={"mt-36"}>
      <div className="portfolio">
        <h2 className={"!mt-0"}>Biographie</h2>
        <div className={"w-full flex gap-10"}>
          <div>
            <p>
              Il y a un peu de magie dans chaque parcours, et le mien ne fait
              pas exception. Je suis <strong>Sara AMANI</strong>, née en Algérie
              , et ma route n’a jamais été une ligne droite.
              <br />
              <br /> Mon amour pour la langue française m’a d’abord conduit à
              étudier le français à l’Université d’Annaba, mais ce n’était que
              le début.
              <br /> Avec une soif d’en savoir plus, j’ai poursuivi ma passion à
              <LinkPreview url="https://tailwindcss.com" className="font-bold">
                l’Université de Strasbourg
              </LinkPreview>
              , où j’ai plongé dans les sciences du langage tout en travaillant
              comme encadrante scolaire dans{" "}
              <LinkPreview url="https://tailwindcss.com" className="font-bold">
                un collège privé
              </LinkPreview>
              . Là, j’ai découvert que transmettre, accompagner, et aider à
              grandir était bien plus qu’un métier : c’était une véritable
              vocation.
            </p>
          </div>

          <Image
            src={"/assets/tete-de-nulle.jpg"}
            alt={""}
            width={300}
            height={300}
            className={
              "h-full w-full object-cover rounded-xl p-2 shadow-lg border"
            }
          />
        </div>
        <div className={"mt-5"}>
          Aujourd’hui diplômée de la Licence Professionnelle Ingénierie,
          Conseil, Animation, Formation (ICAF), je me suis spécialisée dans la
          création de formations et l’accompagnement de personnes vers leur
          épanouissement professionnel. Mais l’histoire ne s’arrête pas aux
          études.
        </div>
        <div className={"w-full flex gap-10 mt-5"}>
          <Image
            src={"/assets/tete-de-nulle.jpg"}
            alt={""}
            width={300}
            height={300}
            className={
              "h-full w-full object-cover rounded-xl p-2 shadow-lg border"
            }
          />
          <div>
            <p>
              En dehors des bancs universitaires, je suis une grande passionnée
              de pâtisserie. <br />
              Oui, le sucre et la farine ont une place importante dans ma vie !
              J’aime explorer de nouvelles recettes et partager des astuces
              gourmandes , et ce n’est pas tout .
              <br /> Le montage vidéo, une autre de{" "}
              <a href={"/passions"}>mes passions</a>, me permet de capturer des
              moments créatifs, notamment en partageant mes créations culinaires
              sur internet. <br />
              C’est une manière pour moi de combiner créativité et partage avec
              les autres.
            </p>
          </div>
        </div>
        <p className={"!mt-10"}>
          Au-delà de <a href={"/competences"}>mes compétences</a> techniques, je
          suis quelqu’un de curieuse, de perfectionniste, et toujours en quête
          d’amélioration, tant dans ma vie professionnelle que personnelle. Je
          suis convaincue que l’équilibre est la clé du succès, et je m’efforce
          de le maintenir en toutes choses, en jonglant entre{" "}
          <a href={"/passions"}>mes passions</a> et mes ambitions
          professionnelles.
        </p>
        <div className="flex flex-col justify-center items-center mt-5">
          <CVTitle />
          <iframe
            width="800"
            height="450"
            src="https://www.youtube.com/embed/ddh1Ntlyn4E"
            title="YouTube Video Player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-2xl p-2 border bg-primary shadow-lg"
          ></iframe>
        </div>{" "}
        <h2>Pourquoi l'Ingénierie de Formation</h2>
        <p>
          L’histoire de Sara commence dans les salles de classe, non pas devant,
          mais au milieu des étudiants. Après avoir exploré les chemins sinueux
          des Sciences du Langage et du FLE, elle cherchait encore cette
          étincelle, cette certitude professionnelle que beaucoup poursuivent.
        </p>
        <p>
          Un jour, alors que les étudiants somnolaient dans un amphithéâtre
          surchauffé, Sara eut une révélation.{" "}
          <em>
            "Et si je pouvais créer des formations qui gardent les yeux ouverts
            et les esprits éveillés ?"
          </em>{" "}
          pensa-t-elle. Ce fut le début de sa quête.
        </p>
        <p>
          Elle s'aventura alors sur le chemin exigeant de la licence ICAF à
          l'Université d'Avignon, affrontant des dragons nommés{" "}
          <em>"Analyse des Besoins"</em>,<em>"Scénarisation Pédagogique"</em> et{" "}
          <em>"Évaluation des Acquis"</em>. Les épreuves furent nombreuses, mais
          sa détermination plus grande encore.
        </p>
        <p>
          Diplôme en poche et forte des <a href="/competences">compétences</a>
          acquises lors de son alternance chez Kairos Formation, Sara poursuit
          aujourd’hui sa voie dans l’ingénierie pédagogique. Cette révélation
          vécue dans l’amphithéâtre surchauffé s’est transformée en véritable
          vocation. Comme dans tout bon conte, notre héroïne a surmonté les
          épreuves, vaincu les dragons pour finalement maîtriser l’art subtil de
          créer des formations qui captent l'attention.
        </p>
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
