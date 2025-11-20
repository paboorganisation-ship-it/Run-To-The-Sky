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
  };
}

export function NextRaceCard({ race }: NextRaceCardProps) {
  const [isRegistrationOpen, setIsRegistrationOpen] = React.useState(false);

  return (
    <>
      <Card className="w-full max-w-md mx-auto">
        <CardHeader>
          <CardTitle>{race.name}</CardTitle>
          <CardDescription>{race.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-lg font-medium mb-2">Date : {race.date}</p>
          <p className="text-lg font-medium">Lieu : {race.location}</p>
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