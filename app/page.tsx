import Image from "next/image";
import Link from "next/link";
const Audios = [
{
  src: '/Sintax.wav'
}
]
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Welcome to <Link href="https://nofaceaudios.vercel.app">https://nofaceaudios.vercel.app</Link></h1>
      {Audios.map(audio => <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <label>Sintax, Mk1 <audio controls src={audio.src} /></label>
      </div>)}
    </main>
  );
}
