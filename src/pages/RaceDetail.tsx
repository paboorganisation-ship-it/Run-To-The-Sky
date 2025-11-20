"use client";

import React from "react";
import { useParams, Link } from "react-router-dom";
import { MadeWithDyad } from "@/components/made-with-dyad";
import { races } from "@/data/races";
import { Button } from "@/components/ui/button";
import { RegistrationForm } from "@/components/RegistrationForm";

const RaceDetail = () => {
  const { raceSlug } = useParams<{ raceSlug: string }>();
  const race = races.find((r) => r.slug === raceSlug);

  const [isRegistrationOpen, setIsRegistrationOpen] = React.useState(false);

  if (!race) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-50 p-4">
        <h1 className="text-4xl font-bold mb-4">Course non trouvée</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-4">
          Désolé, la course que vous recherchez n'existe pas.
        </p>
        <Link to="/" className="text-blue-500 hover:text-blue-700 underline">
          Retour à l'accueil
        </Link>
        <MadeWithDyad />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-between bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-50 p-4">
      <div className="flex-grow flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6">{race.name}</h1>
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8">
          {race.description}
        </p>

        {race.imageUrl && (
          <img
            src={race.imageUrl}
            alt={`Vue de ${race.name}`}
            className="w-full max-w-2xl h-auto object-cover rounded-lg shadow-lg mb-8"
          />
        )}

        <div className="text-left w-full max-w-2xl mb-8">
          <h2 className="text-3xl font-bold mb-4">Informations clés</h2>
          <p className="text-lg mb-2">
            <span className="font-semibold">Date :</span> {race.date}
          </p>
          <p className="text-lg mb-2">
            <span className="font-semibold">Lieu :</span> {race.location}
          </p>
          {(race.distance || race.elevationGain) && (
            <p className="text-lg mb-2">
              <span className="font-semibold">Distance | Dénivelé :</span> {race.distance}
              {race.distance && race.elevationGain && " | "}
              {race.elevationGain}
            </p>
          )}
          <h2 className="text-3xl font-bold mt-8 mb-4">Le col mythique</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            {race.fullDescription}
          </p>
          <Button onClick={() => setIsRegistrationOpen(true)} className="w-full mt-8">
            S'inscrire maintenant
          </Button>
        </div>
      </div>
      <MadeWithDyad />
      <RegistrationForm
        isOpen={isRegistrationOpen}
        onClose={() => setIsRegistrationOpen(false)}
        raceName={race.name}
      />
    </div>
  );
};

export default RaceDetail;