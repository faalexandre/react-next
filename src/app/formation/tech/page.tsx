import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Tech() {
  return (
    <div className="flex flex-col justify-center items-center h-screen *:p-4">
      <h1 className="text-3xl font-black text-zinc-700 items-center uppercase gap-2">
        Tech Lead
      </h1>
      <div className="bg-zinc-800 items-center justify-center rounded-md mx-auto grid grid-cols-2">
        <Link href="/">
          <Image
            src="/tech-lead.webp"
            alt="angular"
            className="max-w-full object-cover items-center"
            width={400}
            height={400}
          />
        </Link>
        <div className="grid grid-cols-2 p-5 gap-2 *:text-zinc-800 relative ">
          <span className="bg-[#1fb854] hover:bg-[#15803b] px-6 py-2.5  rounded-sm self-start items-center">
            Vision technique
          </span>
          <span className="bg-[#1fb854] hover:bg-[#15803b] px-6 py-2.5 rounded-sm self-start items-center">
            Architecture logicielle
          </span>
          <span className="bg-[#1fb854] hover:bg-[#15803b] px-6 py-2.5 rounded-sm self-start items-center">
            Leadership technique
          </span>
          <span className="bg-[#1fb854] hover:bg-[#15803b] px-6 py-2.5 rounded-sm self-start items-center">
            Mentorat
          </span>
          <span className="bg-[#1fb854] hover:bg-[#15803b] px-6 py-2.5 rounded-sm self-start items-center">
            Qualité du code
          </span>
          <span className="bg-[#1fb854] hover:bg-[#15803b] px-6 py-2.5 rounded-sm self-start items-center">
            Prise de décision
          </span>
          <span className="bg-[#1fb854] hover:bg-[#15803b] px-6 py-2.5 rounded-sm self-start items-center">
            Gestion de la dette technique
          </span>
          <span className="bg-[#1fb854] hover:bg-[#15803b] px-6 py-2.5 rounded-sm self-start items-center">
            Culture DevOps
          </span>
          <span className="bg-[#1fb854] hover:bg-[#15803b] px-6 py-2.5 rounded-sm self-start items-center">
            Communication
          </span>
          <span className="bg-[#1fb854] hover:bg-[#15803b] px-6 py-2.5 rounded-sm self-start items-center">
            Gestion des priorités
          </span>
          <span className="bg-[#1fb854] hover:bg-[#15803b] px-6 py-2.5 rounded-sm self-start items-center">
            Trade-offs (compromis)
          </span>
          <span className="bg-[#1fb854] hover:bg-[#15803b] px-6 py-2.5 rounded-sm self-start items-center">
            Responsabilité globale
          </span>
        </div>
      </div>
    </div>
  );
}
