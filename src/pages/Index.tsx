"use client";

import { MadeWithDyad } from "@/components/made-with-dyad";
import { RacesCarousel } from "@/components/RacesCarousel";
import { races } from "@/data/races"; // Importez les données des courses

const Index = () => {
  const heroImageUrl = "https://miro.medium.com/v2/resize:fit:1400/1*jI7dGJJ-JuinU9Va2c16Hg.jpeg"; // URL de l'image d'arrière-plan mise à jour

  return (
    <div className="min-h-screen flex flex-col items-center justify-between bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-50">
      <div
        className="relative w-full py-24 flex flex-col items-center justify-center text-white bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImageUrl})`, backgroundPosition: 'center 15%' }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
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
        <h2 className="text-4xl font-bold text-center mb-8">Nos prochaines courses</h2>
        <div className="mb-16 w-full">
          <RacesCarousel races={races} /> {/* Utilisez les données importées */}
        </div>
      </div>
      <MadeWithDyad />
    </div>
  );
};

export default Index;