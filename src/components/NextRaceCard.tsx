"use client";

import * as React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RegistrationForm } from "./RegistrationForm";

interface NextRaceCardProps {
  race: {
    name: string;
    date: string;
    location: string;
    description: string;
    imageUrl?: string;
    distance?: string; // Ajout de la propriété distance
    elevationGain?: string; // Ajout de la propriété elevationGain
  };
}

export function NextRaceCard({ race }: NextRaceCardProps) {
  const [isRegistrationOpen, setIsRegistrationOpen] = React.useState(false);

  return (
    <>
      <Card className="w-full">
        <CardHeader>
          <CardTitle>{race.name}</CardTitle>
          <CardDescription>{race.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-lg font-medium mb-2">Date : {race.date}</p>
          <p className="text-lg font-medium mb-2">Lieu : {race.location}</p>
          {race.distance && (
            <p className="text-lg font-medium mb-2">Distance : {race.distance}</p>
          )}
          {race.elevationGain && (
            <p className="text-lg font-medium mb-2">Dénivelé : {race.elevationGain}</p>
          )}
          {race.imageUrl && (
            <img
              src={race.imageUrl}
              alt={`Vue de ${race.name}`}
              className="w-full h-48 object-cover rounded-md mt-4"
            />
          )}
        </CardContent>
        <CardFooter>
          <Button onClick={() => setIsRegistrationOpen(true)} className="w-full">
            S'inscrire maintenant
          </Button>
        </CardFooter>
      </Card>
      <RegistrationForm
        isOpen={isRegistrationOpen}
        onClose={() => setIsRegistrationOpen(false)}
        raceName={race.name}
      />
    </>
  );
}