import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div className="flex flex-col justify-center items-center h-screen *:p-4">
      <h1 className="text-3xl font-black text-zinc-700 items-center uppercase">
        Angular
      </h1>
      <div className="bg-zinc-800 items-center justify-center rounded-md mx-auto grid grid-cols-2">
        <Link href="/">
          <Image
            src="/angular.webp"
            alt="angular"
            className="max-w-full object-cover items-center"
            width={400}
            height={400}
          />
        </Link>
        <div className="grid grid-cols-2 p-5 gap-2 *:text-zinc-800 relative ">
          <span className="bg-purple-500  hover:bg-purple-600 px-6 py-2.5  rounded-sm self-start items-center">
            Components
          </span>
          <span className="bg-purple-500  hover:bg-purple-600 px-6 py-2.5 rounded-sm self-start items-center">
            Les Modules
          </span>
          <span className="bg-purple-500  hover:bg-purple-600 px-6 py-2.5 rounded-sm self-start items-center">
            Le data binding
          </span>
          <span className="bg-purple-500  hover:bg-purple-600 px-6 py-2.5 rounded-sm self-start items-center">
            Les directives
          </span>
          <span className="bg-purple-500  hover:bg-purple-600 px-6 py-2.5 rounded-sm self-start items-center">
            Les services
          </span>
          <span className="bg-purple-500  hover:bg-purple-600 px-6 py-2.5 rounded-sm self-start items-center">
            L'injection de dépendances
          </span>
          <span className="bg-purple-500  hover:bg-purple-600 px-6 py-2.5 rounded-sm self-start items-center">
            Le routing
          </span>
          <span className="bg-purple-500  hover:bg-purple-600 px-6 py-2.5 rounded-sm self-start items-center">
            Les observables (RxJS)
          </span>
          <span className="bg-purple-500  hover:bg-purple-600 px-6 py-2.5 rounded-sm self-start items-center">
            Les requêtes HTTP
          </span>
          <span className="bg-purple-500  hover:bg-purple-600 px-6 py-2.5 rounded-sm self-start items-center">
            Les formulaires
          </span>
        </div>
      </div>
    </div>
  );
}
