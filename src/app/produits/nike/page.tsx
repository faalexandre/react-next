import Link from "next/link";
import React from "react";

export default function ProduitsNike() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-3xl text-zinc-500 font-black ">Produits Nike</h1>
      <Link href="/produits">Page Produits</Link>
    </div>
  );
}
