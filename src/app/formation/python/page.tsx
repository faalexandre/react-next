import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Python() {
  return (
    <div className="flex flex-col justify-center items-center h-screen *:p-4">
      <h1 className="text-3xl font-black text-zinc-700 items-center uppercase gap-2">
        Python
      </h1>
      <div className="bg-zinc-800 items-center justify-center rounded-md mx-auto grid grid-cols-2">
        <Link href="/">
          <Image
            src="/python.svg"
            alt="angular"
            className="max-w-full object-cover items-center"
            width={400}
            height={400}
          />
        </Link>
        <div className="grid grid-cols-2 p-5 gap-2 *:text-zinc-800 relative ">
          <span className="bg-purple-500  hover:bg-purple-600 px-6 py-2.5  rounded-sm self-start items-center">
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
            Les modules et packages
          </span>
          <span className="bg-purple-500  hover:bg-purple-600 px-6 py-2.5 rounded-sm self-start items-center">
            Programmation orientée objet (POO)
          </span>
          <span className="bg-purple-500  hover:bg-purple-600 px-6 py-2.5 rounded-sm self-start items-center">
            Gestion des erreurs (exceptions)
          </span>
          <span className="bg-purple-500  hover:bg-purple-600 px-6 py-2.5 rounded-sm self-start items-center">
            Lecture / écriture de fichiers
          </span>
          <span className="bg-purple-500  hover:bg-purple-600 px-6 py-2.5 rounded-sm self-start items-center">
            Les environnements virtuels
          </span>
          <span className="bg-purple-500  hover:bg-purple-600 px-6 py-2.5 rounded-sm self-start items-center">
            Utilisations principales
          </span>
        </div>
      </div>
    </div>
  );
}
