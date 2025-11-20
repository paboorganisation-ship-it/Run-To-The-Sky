"use client";

import React from "react";
import { MadeWithDyad } from "@/components/made-with-dyad";

const LaSerie = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-between bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-50 p-4">
      <div className="flex-grow flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
          La série Run to the Sky
        </h1>
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8">
          Découvrez l'histoire et l'esprit de la série de courses Run to the Sky.
          Nous vous emmenons à travers les plus beaux paysages de montagne,
          offrant des défis uniques et des expériences inoubliables pour tous les coureurs.
        </p>
        <img
          src="https://images.unsplash.com/photo-1500382017468-9049cea7614f?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Paysage de montagne pour la série Run to the Sky"
          className="w-full max-w-2xl h-auto rounded-lg shadow-lg"
        />
      </div>
      <MadeWithDyad />
    </div>
  );
};

export default LaSerie;