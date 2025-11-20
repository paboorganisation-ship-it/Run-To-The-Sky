"use client";

import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { NextRaceCard } from "./NextRaceCard";
import { cn } from "@/lib/utils";

interface Race {
  name: string;
  date: string;
  location: string;
  description: string;
}

interface RacesCarouselProps {
  races: Race[];
}

export function RacesCarousel({ races }: RacesCarouselProps) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setSelectedIndex(api.selectedScrollSnap());

    api.on("select", () => {
      setSelectedIndex(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <Carousel
      opts={{
        align: "center", // Centre l'élément actif
      }}
      setApi={setApi}
      className="w-full max-w-6xl"
    >
      <CarouselContent className="-ml-4">
        {races.map((race, index) => (
          <CarouselItem
            key={index}
            className={cn(
              "pl-4 basis-[80%] md:basis-[70%] lg:basis-[60%] transition-all duration-500 ease-in-out", // Réduction de la largeur des éléments
              index === selectedIndex
                ? "opacity-100" // Élément actif : entièrement visible
                : index === selectedIndex + 1
                ? "opacity-50 translate-x-4" // Élément suivant : transparent, légèrement décalé à droite
                : index === selectedIndex - 1
                ? "opacity-50 -translate-x-4" // Élément précédent : transparent, légèrement décalé à gauche
                : "opacity-0 pointer-events-none" // Autres éléments : cachés et non interactifs
            )}
          >
            <div className="p-1">
              <NextRaceCard race={race} />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}