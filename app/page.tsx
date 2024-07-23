import Image from "next/image";
import Link from "next/link";
import React from "react";
import Audios from "./_components/audios";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Welcome to <Link className="underline" href="https://nofaceaudios.vercel.app">{"https://nofaceaudios.vercel.app"}</Link></h1>
      <h2>Here is music <Link className="underline" href="https://georgecampbell.co.uk">Noface</Link> made</h2>
      <div>
        <Audios />
      </div>
    </main>
  );
}
