import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div
      className="flex flex-col justify-center items-center h-screen *:p-4"
      id="menuCache"
    >
      <h1 className="text-3xl font-black text-zinc-700 items-center uppercase">
        Ia
      </h1>
      <div
        className="bg-zinc-800 items-center justify-center rounded-md mx-auto grid grid-cols-2 max-w-8xl "
        id="menu"
      >
        <Link href="/">
          <Image
            src="/ia.svg"
            alt="ia"
            className=" items-center"
            width={400}
            height={400}
          />
        </Link>
        <div className="grid grid-cols-2 p-5 gap-2 *:text-zinc-800 ">
          <span className="bg-purple-500  hover:bg-purple-600 px-6 py-2.5  rounded-sm self-start items-center">
            L’intelligence artificielle (IA)
          </span>
          <span className="bg-purple-500  hover:bg-purple-600 px-6 py-2.5 rounded-sm self-start items-center">
            Le machine learning
          </span>
          <span className="bg-purple-500  hover:bg-purple-600 px-6 py-2.5 rounded-sm self-start items-center">
            Le deep learning
          </span>
          <span className="bg-purple-500  hover:bg-purple-600 px-6 py-2.5 rounded-sm self-start items-center">
            Les données (data)
          </span>
          <span className="bg-purple-500  hover:bg-purple-600 px-6 py-2.5 rounded-sm self-start items-center">
            Les modèles
          </span>
          <span className="bg-purple-500  hover:bg-purple-600 px-6 py-2.5 rounded-sm self-start items-center">
            Entraînement et prédiction
          </span>
          <span className="bg-purple-500  hover:bg-purple-600 px-6 py-2.5 rounded-sm self-start items-center">
            Les fonctions de coût (loss)
          </span>
          <span className="bg-purple-500  hover:bg-purple-600 px-6 py-2.5 rounded-sm self-start items-center">
            L’optimisation
          </span>
          <span className="bg-purple-500  hover:bg-purple-600 px-6 py-2.5 rounded-sm self-start items-center">
            Évaluation du modèle
          </span>
          <span className="bg-purple-500  hover:bg-purple-600 px-6 py-2.5 rounded-sm self-start items-center">
            Overfitting / Underfitting
          </span>
          <span className="bg-purple-500  hover:bg-purple-600 px-6 py-2.5 rounded-sm self-start items-center">
            Traitement du langage naturel (NLP)
          </span>
          <span className="bg-purple-500  hover:bg-purple-600 px-6 py-2.5 rounded-sm self-start items-center">
            Vision par ordinateur
          </span>
        </div>
      </div>
    </div>
  );
}
