import { Link2, LinkIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function ExempleJSX() {
  function renderCycle(text: string) {
    return (
      <div className="h-12 w-12 text-black gap-4 rounded-full flex flex-col items-center text-sm justify-center bg-purple-500 hover:bg-purple-600 ">
        {text}
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-2xl font-black text-zinc-500 uppercase">
        Comprendre JSX#01
      </h1>
      <div className="grid grid-cols-3 items-center gap-4 p-5 w-64 h-64 bg-zinc-800 rounded-md gap-4 mt-4">
        <Link href="/" className="items-center justify-center">
          <LinkIcon
            size={32}
            color="#a8f"
            className="items-center justify-center"
          />
        </Link>
        {renderCycle("#01")}
        {renderCycle("#02")}
        {renderCycle("#03")}
        {renderCycle("#04")}
        {renderCycle("#05")}
        {renderCycle("#06")}
        {renderCycle("#07")}
        {renderCycle("#08")}
      </div>
    </div>
  );
}
