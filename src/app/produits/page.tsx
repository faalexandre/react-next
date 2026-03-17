import Link from "next/link";
import React from "react";

export default function TestePage() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-3xl text-white font-black ">Produits</h1>
      <Link href="/produits/nike" className="text-zinc-500 text-sm font-thin">
        Page produits
      </Link>
    </div>
  );
}
