"use client";

import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { NextRaceCard } from "./NextRaceCard";

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
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-6xl"
    >
      <CarouselContent className="-ml-4">
        {races.map((race, index) => (
          <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
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