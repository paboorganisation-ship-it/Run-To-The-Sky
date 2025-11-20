"use client";

import React from "react";
import { MadeWithDyad } from "@/components/made-with-dyad";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const PrepareTaCourse = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-between bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-50 p-4">
      <div className="flex-grow flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-8">
          Prépare ta course
        </h1>
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-12">
          Retrouvez ici tous nos conseils pour vous préparer au mieux à votre prochaine aventure Run to the Sky.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          <Card className="text-left">
            <CardHeader>
              <CardTitle>Entraînement Physique</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-2">
                Pour les courses en montagne, un entraînement spécifique est crucial.
                Intégrez des séances de dénivelé, de la course à pied sur sentiers
                et du renforcement musculaire ciblé pour les jambes et le tronc.
              </p>
              <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400">
                <li>Course en côte et escaliers</li>
                <li>Randonnées avec dénivelé positif important</li>
                <li>Squats, fentes, gainage</li>
                <li>Repos et récupération actifs</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="text-left">
            <CardHeader>
              <CardTitle>Nutrition et Hydratation</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-2">
                Une alimentation équilibrée et une bonne hydratation sont les piliers
                de la performance et de la récupération.
              </p>
              <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400">
                <li>Aliments riches en glucides complexes avant la course</li>
                <li>Apport suffisant en protéines pour la récupération</li>
                <li>Hydratation régulière avec des électrolytes</li>
                <li>Éviter les aliments lourds ou nouveaux avant l'effort</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="text-left">
            <CardHeader>
              <CardTitle>Équipement Essentiel</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-2">
                L'équipement adapté garantit votre sécurité et votre confort en montagne.
              </p>
              <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400">
                <li>Chaussures de trail adaptées</li>
                <li>Vêtements techniques (couches, respirants)</li>
                <li>Sac d'hydratation ou flasques</li>
                <li>Trousse de premiers secours, couverture de survie</li>
                <li>Téléphone chargé, sifflet</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="text-left">
            <CardHeader>
              <CardTitle>Mental et Stratégie</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-2">
                La préparation mentale est aussi importante que la préparation physique.
              </p>
              <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400">
                <li>Visualisation positive de la course</li>
                <li>Gestion de l'effort et du rythme</li>
                <li>Connaissance du parcours et des points de ravitaillement</li>
                <li>Rester à l'écoute de son corps</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
      <MadeWithDyad />
    </div>
  );
};

export default PrepareTaCourse;