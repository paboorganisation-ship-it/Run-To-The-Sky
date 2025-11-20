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
          <img
            src="https://images.unsplash.com/photo-1587613865763-cd45e84775b8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Vue panoramique du Col d'Eze"
            className="w-full h-48 object-cover rounded-md mt-4"
          />
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