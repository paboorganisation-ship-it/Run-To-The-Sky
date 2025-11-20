"use client";

import React from "react";
import { MadeWithDyad } from "@/components/made-with-dyad";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button"; // Import du bouton pour l'inscription
import { RegistrationForm } from "@/components/RegistrationForm"; // Import du formulaire d'inscription

const Calendrier = () => {
  const [isRegistrationOpen, setIsRegistrationOpen] = React.useState(false);
  const [selectedRaceName, setSelectedRaceName] = React.useState("");

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
      imageUrl: "/images/Espigoulier.jpg",
    },
    {
      name: "Annecy - Semnoz",
      date: "15 Juin 2027",
      location: "Annecy, Alpes",
      description: "Découvrez les panoramas exceptionnels du Semnoz avec vue sur le lac d'Annecy.",
      imageUrl: "/images/Semnoz.jpg",
    },
    {
      name: "Briançon - Col du Lautaret",
      date: "25 Juillet 2027",
      location: "Briançon, Hautes-Alpes",
      description: "Une ascension légendaire dans les Alpes, au cœur des paysages grandioses du Lautaret.",
      imageUrl: "/images/Lautaret.jpg",
    },
    {
      name: "L'Alpe d'Huez",
      date: "15 Août 2027",
      location: "L'Alpe d'Huez, Isère",
      description: "Le défi mythique des 21 virages, une course emblématique pour les grimpeurs.",
      imageUrl: "/images/Alpe huez.jpg",
    },
  ];

  const handleRegisterClick = (raceName: string) => {
    setSelectedRaceName(raceName);
    setIsRegistrationOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-between bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-50 p-4">
      <div className="flex-grow flex flex-col items-center justify-center text-center max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-8">
          Le calendrier des courses
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {upcomingRaces.map((race, index) => (
            <Card key={index} className="text-left flex flex-col">
              <CardHeader>
                <CardTitle>{race.name}</CardTitle>
                <CardDescription>{race.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-lg font-medium mb-1">Date : {race.date}</p>
                <p className="text-lg font-medium">Lieu : {race.location}</p>
                {race.imageUrl && (
                  <img
                    src={race.imageUrl}
                    alt={`Vue de ${race.name}`}
                    className="w-full h-48 object-cover rounded-md mt-4"
                  />
                )}
              </CardContent>
              <div className="p-6 pt-0">
                <Button onClick={() => handleRegisterClick(race.name)} className="w-full">
                  S'inscrire maintenant
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
      <MadeWithDyad />
      <RegistrationForm
        isOpen={isRegistrationOpen}
        onClose={() => setIsRegistrationOpen(false)}
        raceName={selectedRaceName}
      />
    </div>
  );
};

export default Calendrier;