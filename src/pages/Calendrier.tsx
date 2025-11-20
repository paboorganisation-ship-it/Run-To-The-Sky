"use client";

import React from "react";
import { MadeWithDyad } from "@/components/made-with-dyad";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

const Calendrier = () => {
  const upcomingRaces = [
    {
      name: "Nice - Col d'Eze",
      date: "12 Octobre 2026",
      location: "Nice, Côte d'Azur",
      description: "Défiez-vous sur les pentes mythiques du Col d'Eze.",
    },
    {
      name: "Mont Blanc Ultra Trail",
      date: "25 Juillet 2027",
      location: "Chamonix, Alpes",
      description: "L'ultime défi autour du Mont Blanc.",
    },
    {
      name: "Pyrénées Sky Race",
      date: "15 Septembre 2027",
      location: "Lourdes, Pyrénées",
      description: "Une course technique au cœur des Pyrénées.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-between bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-50 p-4">
      <div className="flex-grow flex flex-col items-center justify-center text-center max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-8">
          Le calendrier des courses
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {upcomingRaces.map((race, index) => (
            <Card key={index} className="text-left">
              <CardHeader>
                <CardTitle>{race.name}</CardTitle>
                <CardDescription>{race.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-medium mb-1">Date : {race.date}</p>
                <p className="text-lg font-medium">Lieu : {race.location}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <MadeWithDyad />
    </div>
  );
};

export default Calendrier;