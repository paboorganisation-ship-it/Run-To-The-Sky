"use client";

import * as React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RegistrationForm } from "./RegistrationForm";
import { Link } from "react-router-dom"; // Importez Link

interface NextRaceCardProps {
  race: {
    name: string;
    date: string;
    location: string;
    description: string;
    imageUrl?: string;
    distance?: string;
    elevationGain?: string;
    slug: string; // Ajout de la propriété slug
  };
}

export function NextRaceCard({ race }: NextRaceCardProps) {
  const [isRegistrationOpen, setIsRegistrationOpen] = React.useState(false);

  return (
    <>
      <Card className="w-full">
        <CardHeader>
          <Link to={`/races/${race.slug}`} className="hover:underline">
            <CardTitle>{race.name}</CardTitle>
          </Link>
          <CardDescription>{race.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-lg font-medium mb-2">Date : {race.date}</p>
          <p className="text-lg font-medium mb-2">Lieu : {race.location}</p>
          {(race.distance || race.elevationGain) && (
            <p className="text-lg font-medium mb-2">
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