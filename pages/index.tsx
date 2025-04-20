
import React from "react";
import Head from "next/head";
import { Button } from "@/components/ui/button";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-black text-white p-10 text-center font-sans">
      <Head>
        <title>FormulaOne Live</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <img src="/app-icon.png" alt="Logo FormulaOne Live" className="mx-auto w-40 h-40 mb-6" />

      <h1 className="text-5xl font-bold mb-4 text-white uppercase tracking-wide">
        FormulaOne <span className="text-red-600">Live</span>
      </h1>

      <p className="text-lg mb-6 max-w-xl mx-auto text-gray-300">
        Suivez la saison de Formule 1 en temps réel : résultats, classements, fiches pilotes & circuits.
        Disponible sur mobile, navigateur, et bientôt sur App Store & Google Play.
      </p>

      <div className="flex justify-center gap-4">
        <Button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full text-lg">
          Télécharger l'app
        </Button>
        <Button variant="outline" className="text-white border-white px-6 py-3 rounded-full text-lg">
          Accès Web
        </Button>
      </div>

      <footer className="mt-12 text-sm text-gray-400">
        © {(new Date()).getFullYear()} FormulaOne Live — Projet personnel indépendant, non affilié à la F1 officielle.
      </footer>
    </main>
  );
}
