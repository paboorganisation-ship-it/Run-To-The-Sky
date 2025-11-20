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
              "pl-4 basis-[90%] md:basis-[80%] lg:basis-[70%] transition-all duration-500 ease-in-out",
              index === selectedIndex
                ? "opacity-100 scale-100" // Élément actif : entièrement visible, taille normale
                : index === selectedIndex + 1
                ? "opacity-50 scale-95 translate-x-4" // Élément suivant : transparent, légèrement plus petit, décalé à droite
                : index === selectedIndex - 1
                ? "opacity-50 scale-95 -translate-x-4" // Élément précédent : transparent, légèrement plus petit, décalé à gauche
                : "opacity-0 scale-90 pointer-events-none" // Autres éléments : cachés et non interactifs
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