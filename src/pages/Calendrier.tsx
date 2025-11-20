"use client";

import React from "react";
import { MadeWithDyad } from "@/components/made-with-dyad";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RegistrationForm } from "@/components/RegistrationForm";
import { races, Race } from "@/data/races"; // Importez les données des courses et l'interface Race
import { Link } from "react-router-dom"; // Importez Link

const Calendrier = () => {
  const [isRegistrationOpen, setIsRegistrationOpen] = React.useState(false);
  const [selectedRaceName, setSelectedRaceName] = React.useState("");

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
          {races.map((race: Race, index: number) => ( // Utilisez les données importées
            <Card key={index} className="text-left flex flex-col">
              <CardHeader>
                <Link to={`/races/${race.slug}`} className="hover:underline">
                  <CardTitle>{race.name}</CardTitle>
                </Link>
                <CardDescription>{race.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-lg font-medium mb-1">Date : {race.date}</p>
                <p className="text-lg font-medium mb-1">Lieu : {race.location}</p>
                {(race.distance || race.elevationGain) && (
                  <p className="text-lg font-medium mb-1">
                    {race.distance}
                    {race.distance && race.elevationGain && " | "}
                    {race.elevationGain}
                  </p>
                )}
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