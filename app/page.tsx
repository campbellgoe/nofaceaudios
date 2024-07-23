import Image from "next/image";
import Link from "next/link";
const Audios = [
{
  label: 'Sintax',
  src: '/SintaxMk2.wav'
},
{
  label: 'Cool beat 1 (untitled), 23/07/2024',
  src: '/coolbeat1-23-07-2024.wav'
}
]
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Welcome to <Link className="underline" href="https://nofaceaudios.vercel.app">{"https://nofaceaudios.vercel.app"}</Link></h1>
      <h2>Here is music <Link className="underline" href="https://georgecampbell.co.uk">Noface</Link> made</h2>
      <div>
        {Audios.map(audio => <div key={audio.src} className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
          <label>{audio.label} <audio controls src={audio.src} /></label>
        </div>)}
      </div>
    </main>
  );
}
