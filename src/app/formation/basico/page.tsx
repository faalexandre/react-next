import { LinkIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Debutants() {
  function renderCycle(text: string) {
    return (
      <div className="h-16 w-16 text-black gap-2 rounded-full flex flex-col items-center text-sm justify-center bg-purple-500 hover:bg-purple-600  ">
        <span className="text-xl font-thin"> {text}</span>
      </div>
    );
  }
  return (
    <div className="flex  flex-col justify-center items-center h-screen">
      <h1 className="text-2xl font-black p-4 uppercase text-white/60">
        Débutants
      </h1>
      <div className="grid grid-cols-3 items-center *:p-8 m-5 bg-zinc-800 rounded-md mt-0 tracking-widest">
        <Link href="/" className="items-center justify-center shadow-accent">
          {renderCycle("#01")}
        </Link>
        <Link href="/formation/php" className="items-center justify-center">
          {renderCycle("#02")}
        </Link>
        <Link href="/formation/angular" className="items-center justify-center">
          {renderCycle("#03")}
        </Link>
        <Link href="/formation/react" className="items-center justify-center">
          {renderCycle("#04")}
        </Link>
        <Link href="/formation/ia" className="items-center justify-center">
          {renderCycle("#05")}
        </Link>
        <Link href="/formation/tech" className="items-center justify-center">
          {renderCycle("#06")}
        </Link>
      </div>
    </div>
  );
}
