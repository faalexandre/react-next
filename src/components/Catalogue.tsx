import Link from "next/link";
import React from "react";

export default function Catalogue() {
  return (
    <div className="w-96 h-96 rounded-lg bg-white justify-center items-center *:p-5">
      <h1 className="text-2xl text-center font-black text-zinc-800">
        Catalogue
      </h1>
      <div className="flex flex-col ">
        <Link
          href="/formation/basico"
          className="text-black items-center text-center uppercase text-md bg-purple-500 hover:bg-purple-600 px-6 py-2.5 gap-2 rounded-md font-medium mb-2"
        >
          Basico
        </Link>
        <Link
          href="/formation/angular"
          className="text-black items-center text-center uppercase text-md bg-purple-500 hover:bg-purple-600 px-6 py-2.5 gap-2 rounded-md font-medium mb-2"
        >
          Angular
        </Link>
        <Link
          href="/formation/php"
          className="text-black items-center text-center uppercase text-md bg-purple-500 hover:bg-purple-600 px-6 py-2.5 gap-2 rounded-md font-medium mb-2"
        >
          PHP
        </Link>
      </div>
    </div>
  );
}
