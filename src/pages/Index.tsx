"use client";

import { MadeWithDyad } from "@/components/made-with-dyad";
import { HeroCarousel } from "@/components/HeroCarousel";
import { NextRaceCard } from "@/components/NextRaceCard";

const Index = () => {
  const nextRace = {
    name: "Course du Col d'Eze",
    date: "12 Octobre 2026",
    location: "Nice, Côte d'Azur",
    description: "Défiez-vous sur les pentes mythiques du Col d'Eze, une course épique au cœur des Alpes françaises.",
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-between py-8 px-4 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-50">
      <div className="flex flex-col items-center justify-center flex-grow w-full max-w-6xl mx-auto">
        <h1 className="text-5xl font-extrabold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
          Run to the Sky
        </h1>
        <p className="text-xl text-center mb-12 max-w-2xl">
          Découvrez l'adrénaline des courses en montagne. Des paysages à couper le souffle, des défis inoubliables.
        </p>

        <div className="mb-16 w-full">
          <HeroCarousel />
        </div>

        <div className="mb-16 w-full">
          <NextRaceCard race={nextRace} />
        </div>
      </div>
      <MadeWithDyad />
    </div>
  );
};

export default Index;