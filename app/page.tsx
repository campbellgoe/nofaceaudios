import Image from "next/image";
import Link from "next/link";
const Audios = [
{
  src: '/SintaxMk2.wav'
}
]
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Welcome to <Link href="https://nofaceaudios.vercel.app">https://nofaceaudios.vercel.app</Link></h1>
      <h2>Here is music I made</h2>
      <div>
        {Audios.map(audio => <div key={audio.src} className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
          <label>Sintax, Mk2 <audio controls src={audio.src} /></label>
        </div>)}
      </div>
    </main>
  );
}
