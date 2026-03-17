import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function PHP() {
  return (
    <div className="flex flex-col justify-center items-center h-screen *:p-4">
      <h1 className="text-3xl font-black text-zinc-700 items-center uppercase">
        Php
      </h1>
      <div className="bg-zinc-800 items-center justify-center rounded-md mx-auto grid grid-cols-2 max-w-8xl">
        <Link href="/">
          <Image
            src="/php.png"
            alt="angular"
            className="max-w-full object-cover items-center"
            width={400}
            height={400}
          />
        </Link>
        <div className="grid grid-cols-2 p-5 gap-2 *:text-zinc-800  ">
          <span className="bg-purple-500  hover:bg-purple-600 px-6 py-2.5  rounded-sm self-start items-center">
            Syntaxe de base
          </span>
          <span className="bg-purple-500  hover:bg-purple-600 px-6 py-2.5 rounded-sm self-start items-center">
            Les variables
          </span>
          <span className="bg-purple-500  hover:bg-purple-600 px-6 py-2.5 rounded-sm self-start items-center">
            Les types de données
          </span>
          <span className="bg-purple-500  hover:bg-purple-600 px-6 py-2.5 rounded-sm self-start items-center">
            Les structures de contrôle
          </span>
          <span className="bg-purple-500  hover:bg-purple-600 px-6 py-2.5 rounded-sm self-start items-center">
            Les fonctions
          </span>
          <span className="bg-purple-500  hover:bg-purple-600 px-6 py-2.5 rounded-sm self-start items-center">
            Les tableaux (arrays)
          </span>
          <span className="bg-purple-500  hover:bg-purple-600 px-6 py-2.5 rounded-sm self-start items-center">
            Programmation orientée objet (POO)
          </span>
          <span className="bg-purple-500  hover:bg-purple-600 px-6 py-2.5 rounded-sm self-start items-center">
            Interaction avec les formulaires
          </span>
          <span className="bg-purple-500  hover:bg-purple-600 px-6 py-2.5 rounded-sm self-start items-center">
            Accès aux bases de données
          </span>
          <span className="bg-purple-500  hover:bg-purple-600 px-6 py-2.5 rounded-sm self-start items-center">
            Gestion des sessions
          </span>
          <span className="bg-purple-500  hover:bg-purple-600 px-6 py-2.5 rounded-sm self-start items-center">
            Inclusion de fichiers
          </span>
          <span className="bg-purple-500  hover:bg-purple-600 px-6 py-2.5 rounded-sm self-start items-center">
            Formulaire
          </span>
        </div>
      </div>
    </div>
  );
}
