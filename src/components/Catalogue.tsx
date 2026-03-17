import { IdCard } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Catalogue() {
  return (
    <div className="w-96 h-7xl rounded-lg bg-neutral-content justify-center items-center *:p-5">
      <h1 className="text-2xl text-center font-black text-zinc-800">
        Catalogue
      </h1>
      <div className="flex flex-col ">
        <Link
          href="/formation/basico"
          className="text-black items-center text-center uppercase text-lg bg-[#1fb854] hover:bg-[#15803b] px-6 py-2.5 gap-2 rounded-md font-medium mb-2"
        >
          Basico
        </Link>
        <Link
          href="/formation/angular"
          className="text-black items-center text-center uppercase text-lg bg-[#E91E63]  hover:bg-[#AD1457] px-6 py-2.5 gap-2 rounded-md font-medium mb-2 "
        >
          Angular
        </Link>
        <Link
          href="/formation/php"
          className="text-black items-center text-center uppercase text-lg bg-[#8e55fd] hover:bg-[#7120e1] px-6 py-2.5 gap-2 rounded-md font-medium mb-2"
        >
          PHP
        </Link>
        <Link
          href="/formation/react"
          className="text-black items-center text-center uppercase text-lg bg-[#5d67f7] hover:bg-[#413fec] px-6 py-2.5 gap-2 rounded-md font-medium mb-2"
        >
          React
        </Link>

        <Link
          href="/formation/ia"
          className="text-black items-center text-center uppercase text-lg bg-purple-500 hover:bg-purple-600 px-6 py-2.5 gap-2 rounded-md font-medium mb-2"
        >
          IA
        </Link>
        <Link
          href="/formation/tech"
          className="text-black items-center text-center uppercase text-lg bg-[#65ca13] hover:bg-[#3b7e0d] px-6 py-2.5 gap-2 rounded-md font-medium mb-2"
        >
          Tech
        </Link>
        <Link
          href="/formation/python"
          className="text-black items-center text-center uppercase text-lg bg-[#E5C430]  hover:bg-[#b99b18] px-6 py-2.5 gap-2 rounded-md font-medium mb-2"
        >
          Python
        </Link>
      </div>
    </div>
  );
}
