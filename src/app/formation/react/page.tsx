import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ReactPage() {
  return (
    <div className="flex flex-col justify-center items-center h-screen *:p-4">
      <h1 className="text-3xl font-black text-zinc-700 items-center uppercase gap-2">
        React
      </h1>
      <div className="bg-zinc-800 items-center justify-center rounded-md mx-auto grid grid-cols-2">
        <Link href="/">
          <Image
            src="/react.svg"
            alt="angular"
            className="max-w-full object-cover items-center"
            width={400}
            height={400}
          />
        </Link>
        <div className="grid grid-cols-2 p-5 gap-2 *:text-zinc-800 relative ">
          <span className="bg-[#5d67f7] hover:bg-[#413fec] px-6 py-2.5  rounded-sm self-start items-center">
            Les composants
          </span>
          <span className="bg-[#5d67f7] hover:bg-[#413fec] px-6 py-2.5 rounded-sm self-start items-center">
            Les props (propriétés)
          </span>
          <span className="bg-[#5d67f7] hover:bg-[#413fec] px-6 py-2.5 rounded-sm self-start items-center">
            Le state (état)
          </span>
          <span className="bg-[#5d67f7] hover:bg-[#413fec] px-6 py-2.5 rounded-sm self-start items-center">
            Le cycle de vie (hooks)
          </span>
          <span className="bg-[#5d67f7] hover:bg-[#413fec] px-6 py-2.5 rounded-sm self-start items-center">
            Le Virtual DOM
          </span>
          <span className="bg-[#5d67f7] hover:bg-[#413fec] px-6 py-2.5 rounded-sm self-start items-center">
            JSX
          </span>
          <span className="bg-[#5d67f7] hover:bg-[#413fec] px-6 py-2.5 rounded-sm self-start items-center">
            Gestion des événements
          </span>
          <span className="bg-[#5d67f7] hover:bg-[#413fec] px-6 py-2.5 rounded-sm self-start items-center">
            Le rendu conditionnel
          </span>
          <span className="bg-[#5d67f7] hover:bg-[#413fec] px-6 py-2.5 rounded-sm self-start items-center">
            Les listes et clés (keys)
          </span>
          <span className="bg-[#5d67f7] hover:bg-[#413fec] px-6 py-2.5 rounded-sm self-start items-center">
            Gestion des formulaires
          </span>
          <span className="bg-[#5d67f7] hover:bg-[#413fec] px-6 py-2.5 rounded-sm self-start items-center">
            Gestion d’état globale
          </span>
        </div>
      </div>
    </div>
  );
}
