"use client";

import { MadeWithDyad } from "@/components/made-with-dyad";
import { RacesCarousel } from "@/components/RacesCarousel"; // Import du nouveau composant RacesCarousel

const Index = () => {
  const upcomingRaces = [
    {
      name: "Nice - Col d'Eze",
      date: "12 Octobre 2026",
      location: "Nice, Côte d'Azur",
      description: "Défiez-vous sur les pentes mythiques du Col d'Eze, une course épique au bord de la mer Méditerranée et au pied des Alpes.",
      imageUrl: "https://cdn.shopify.com/s/files/1/0612/2635/2718/files/2021_05_col-series-eze-3-14052021.jpg",
    },
    {
      name: "Marseille - Col de l'Espigoulier",
      date: "20 Avril 2027",
      location: "Marseille, Provence",
      description: "Une course exigeante à travers les paysages provençaux, culminant au Col de l'Espigoulier.",
      imageUrl: "/images/Espigoulier.jpg", // Utilisation de l'image locale Espigoulier.jpg
    },
    {
      name: "Annecy - Semnoz",
      date: "15 Juin 2027",
      location: "Annecy, Alpes",
      description: "Découvrez les panoramas exceptionnels du Semnoz avec vue sur le lac d'Annecy.",
      imageUrl: "/images/Semnoz.jpg", // Utilisation de l'image locale Semnoz.jpg
    },
    {
      name: "Briançon - Col du Lautaret",
      date: "25 Juillet 2027",
      location: "Briançon, Hautes-Alpes",
      description: "Une ascension légendaire dans les Alpes, au cœur des paysages grandioses du Lautaret.",
      imageUrl: "/images/Lautaret.jpg", // Utilisation de l'image locale Lautaret.jpg
    },
    {
      name: "L'Alpe d'Huez",
      date: "15 Août 2027",
      location: "L'Alpe d'Huez, Isère",
      description: "Le défi mythique des 21 virages, une course emblématique pour les grimpeurs.",
      imageUrl: "/images/Alpe huez.jpg", // Utilisation de l'image locale Alpe huez.jpg
    },
  ];

  const heroImageUrl = "/images/Galibier.jpg"; // Utilisation de l'image locale Galibier.jpg

  return (
    <div className="min-h-screen flex flex-col items-center justify-between bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-50">
      <div
        className="relative w-full py-24 flex flex-col items-center justify-center text-white bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImageUrl})`, backgroundPosition: 'center 15%' }}
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
        <h2 className="text-4xl font-bold text-center mb-8">Nos prochaines courses</h2>
        <div className="mb-16 w-full">
          <RacesCarousel races={upcomingRaces} />
        </div>
      </div>
      <MadeWithDyad />
    </div>
  );
};

export default Index;