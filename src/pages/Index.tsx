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
      name: "Mont Blanc Ultra Trail",
      date: "25 Juillet 2027",
      location: "Chamonix, Alpes",
      description: "L'ultime défi autour du Mont Blanc.",
      imageUrl: "https://images.unsplash.com/photo-1506905925346-21d027d21914?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Exemple d'image générique pour les autres courses
    },
    {
      name: "Pyrénées Sky Race",
      date: "15 Septembre 2027",
      location: "Lourdes, Pyrénées",
      description: "Une course technique au cœur des Pyrénées.",
      imageUrl: "https://images.unsplash.com/photo-1505852679233-0a64777620e8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Exemple d'image générique
    },
    {
      name: "Trail des Calanques",
      date: "20 Mars 2027",
      location: "Marseille, Provence",
      description: "Course côtière avec des vues imprenables sur les Calanques.",
      imageUrl: "https://images.unsplash.com/photo-1587613865763-cd45e84775b8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Exemple d'image générique
    },
  ];

  const heroImageUrl = "/images/Semnoz.jpg"; // Utilisation de l'image locale Semnoz.jpg

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