import { LinkIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Debutants() {
  function renderCycle(text: string) {
    return (
      <div className="h-12 w-12 text-black gap-4 rounded-full flex flex-col items-center text-sm justify-center bg-purple-500 hover:bg-purple-600 ">
        {text}
      </div>
    );
  }
  return (
    <div className="flex flex-col justify-center items-center p-5 h-screen">
      <h1 className="text-2xl font-black">Concepts de Débutants</h1>
      <div className="grid grid-cols-3 items-center gap-4 p-5 w-64 h-64 bg-zinc-800 rounded-md gap-4 mt-4">
        <Link href="/" className="items-center justify-center">
          {renderCycle("#01")}
        </Link>
        <Link href="/formation/props" className="items-center justify-center">
          {renderCycle("#02")}
        </Link>
        <Link href="/formation/logo" className="items-center justify-center">
          {renderCycle("#03")}
        </Link>
        <Link href="/formation/logo" className="items-center justify-center">
          {renderCycle("#03")}
        </Link>
      </div>
    </div>
  );
}
