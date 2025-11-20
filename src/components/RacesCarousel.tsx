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
              "pl-4 basis-[70%] md:basis-[60%] lg:basis-[50%] transition-all duration-500 ease-in-out", // Largeur ajustée pour la carte active
              index === selectedIndex
                ? "opacity-100" // Élément actif : entièrement visible
                : index === selectedIndex + 1
                ? "opacity-50" // Élément suivant : transparent, sans décalage
                : index === selectedIndex - 1
                ? "opacity-50" // Élément précédent : transparent, sans décalage
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