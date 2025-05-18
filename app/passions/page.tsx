import { FocusCards } from "@/components/ui/focus-cards";
import { TracingBeam } from "@/components/ui/tracing-beam";

export default function BiographiePage() {
  return (
    <TracingBeam className={"mt-36"}>
      <div className="portfolio">
        <h2 className={"!mt-0"}>Mes passions</h2>
        <FocusCardsDemo />
      </div>
    </TracingBeam>
  );
}

function FocusCardsDemo() {
  const cards = [
    {
      title: "La lecture",
      description:
        "C’est mon refuge. Je me perds avec bonheur dans les pages de romances ou de romantasy, ce genre littéraire où l’amour flirte avec la magie, et où l’imaginaire se mêle aux émotions. Ces récits m'inspirent, me font rêver, et parfois, me donnent même des idées pour mes créations pédagogiques.",
      src: "/assets/lecture.png",
    },
    {
      title: "La pâtisserie",
      description:
        "C’est un autre langage que je maîtrise : celui du sucre, de la précision et de la créativité. J’adore inventer, tester, filmer mes recettes, et les partager avec d’autres passionnés. C’est mon moment à moi, un doux équilibre entre rigueur et plaisir.",
      src: "/assets/patisserie.png",
    },
    {
      title: "L’esthétique",
      description:
        "C'est aussi un univers dans lequel je me sens bien. J’ai suivi deux formations : l’une en maquillage, l’autre en tant que prothésiste ciliaire. Ce sont des expériences qui m’ont appris la minutie, l'écoute des besoins et le sens du détail – des qualités qui me servent autant dans mes projets personnels que professionnels.",
      src: "/assets/maquillage.jpg",
    },
    {
      title: "Le voyage",
      description:
        "Même si je n’ai pas encore fait le tour du monde (ça viendra !), j’ai eu la chance de découvrir plusieurs régions en France et quelques coins d’Europe. Ces escapades m’ouvrent à d’autres cultures, d’autres façons d’apprendre, de vivre et nourrissent ma curiosité sans fin.",
      src: "/assets/voyage.jpg",
    },
  ];

  return <FocusCards cards={cards} />;
}
