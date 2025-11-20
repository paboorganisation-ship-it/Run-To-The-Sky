"use client";

import { MadeWithDyad } from "@/components/made-with-dyad";
import { NextRaceCard } from "@/components/NextRaceCard";

const Index = () => {
  const nextRace = {
    name: "Inscris-toi sur notre prochaine course : Nice - Col d'Eze",
    date: "12 Octobre 2026",
    location: "Nice, Côte d'Azur",
    description: "Défiez-vous sur les pentes mythiques du Col d'Eze, une course épique au bord de la mer Méditerranée et au pied des Alpes.",
  };

  const heroImageUrl = "https://images.unsplash.com/photo-1551776235-6629a8867625?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <div className="min-h-screen flex flex-col items-center justify-between bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-50">
      <div
        className="relative w-full py-24 flex flex-col items-center justify-center text-white bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImageUrl})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay pour la lisibilité */}
        <div className="relative z-10 flex flex-col items-center justify-center max-w-6xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-extrabold text-center mb-4">
            Run to the Sky
          </h1>
          <p className="text-xl md:text-2xl text-center max-w-2xl">
            Découvrez l'adrénaline des courses en montagne. Des paysages à couper le souffle, des défis inoubliables.
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center flex-grow w-full max-w-6xl mx-auto py-8 px-4">
        {/* Le carrousel n'est plus nécessaire ici car l'image est en arrière-plan */}
        {/* <div className="mb-16 w-full">
          <HeroCarousel />
        </div> */}

        <div className="mb-16 w-full">
          <NextRaceCard race={nextRace} />
        </div>
      </div>
      <MadeWithDyad />
    </div>
  );
};

export default Index;