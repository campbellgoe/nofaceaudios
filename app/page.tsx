import Image from "next/image";
import Link from "next/link";
import React from "react";
import Audios from "./_components/audios";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold tracking-tight text-center"><Link className="underline" href="https://nofaceaudios.vercel.app">nofaceaudios</Link></h1>
          <p className="text-2xl font-normal text-muted-background">A place to share my music</p>
        </div>
      </header>
    <Audios />
    <footer className="py-8 border-t border-gray-700">
    <div className="container mx-auto px-4 text-center text-gray-400">
      &copy; 2024 nofaceaudios. All rights reserved.
    </div>
  </footer>
  </div>
  );
}
