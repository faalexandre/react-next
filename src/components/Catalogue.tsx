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
          href="/"
          className="text-black items-center text-center uppercase text-md bg-purple-500 hover:bg-purple-600 px-6 py-2.5 gap-2 rounded-md font-medium mb-2"
        >
          Home
        </Link>
        <Link
          href="/formation/jsx"
          className="text-black items-center text-center uppercase text-md bg-purple-500 hover:bg-purple-600 px-6 py-2.5 gap-2 rounded-md font-medium mb-2"
        >
          JSX
        </Link>
        <Link
          href="/formation/props"
          className="text-black items-center text-center uppercase text-md bg-purple-500 hover:bg-purple-600 px-6 py-2.5 gap-2 rounded-md font-medium mb-2"
        >
          Props
        </Link>
      </div>
    </div>
  );
}
