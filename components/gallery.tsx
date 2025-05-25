import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Image from "next/image";

export function Gallery() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true }),
  );
  const [open, setOpen] = React.useState(false);
  const [docsSelected, setDocsSelected] = React.useState<any>(undefined);
  const array = [
    {
      imageSrc: "/assets/img-doc1.png",
      docSrc: "/assets/doc1.pdf",
      title:
        "Création de CV Vidéo pour l'insertion professionnelle des jeunes de l'E2C",
    },
    {
      imageSrc: "/assets/img-doc2.png",
      docSrc: "/assets/doc2.pdf",
      title:
        "Création de CV Vidéo pour l'insertion professionnelle des jeunes de l'E2C",
    },
    {
      imageSrc: "/assets/img-doc3.png",
      docSrc: "/assets/doc3.pdf",
      title: "L'échappée sensorielle",
    },
    {
      imageSrc: "/assets/img-doc4.png",
      docSrc: "/assets/doc4.pdf",
      title: "Mieux consommers, moins polluer",
    },
  ];

  return (
    <>
      <PDFModal
        src={docsSelected?.docSrc ?? undefined}
        open={open}
        setOpen={setOpen}
        title={docsSelected?.title ?? undefined}
      />
      <Carousel
        plugins={[plugin.current]}
        className="w-full h-fit"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent className={"w-full"}>
          {array.map((doc, index) => (
            <CarouselItem key={index} className={"w-full"}>
              <div className="p-1 w-full">
                <Card
                  className={
                    "w-full hover:bg-primary cursor-pointer transition-colors"
                  }
                  onClick={() => {
                    setOpen(true);
                    setDocsSelected(doc);
                  }}
                >
                  <CardContent className="flex  items-center justify-center p-6 w-full">
                    <Image
                      src={doc.imageSrc}
                      alt={"tesrt"}
                      width={1000}
                      height={1000}
                      className={`object-cover ${index != 0 && "object-top"} rounded-xl max-h-80`}
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </>
  );
}

function PDFModal({
  src,
  open,
  setOpen,
  title,
}: {
  src?: string;
  open: boolean;
  setOpen: any;
  title?: string;
}) {
  if (src === undefined) return null;
  return (
    <div className="flex items-center justify-center">
      <Dialog
        open={open}
        onOpenChange={(value: boolean) => !value && setOpen(false)}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
          </DialogHeader>
          <div style={{ width: "100%", height: "85vh" }}>
            <iframe
              src={src}
              title="Document PDF"
              width="100%"
              height="100%"
              style={{ border: "none" }}
            />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
