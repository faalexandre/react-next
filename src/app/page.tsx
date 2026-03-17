import Catalogue from "@/components/Catalogue";
import React from "react";

export default function HomePage() {
  return (
    <div className="flex justify-center items-center h-screen flex-col">
      <h1 className="flex flex-col text-3xl font-black justify-center items-center text-center">
        Bienvenue à l'apprentissage de{" "}
        <span className="text-md text-zinc-500 font-light">React & Next</span>
      </h1>
      <div className="p-5">
        <Catalogue />
      </div>
    </div>
  );
}
