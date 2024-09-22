
"use client";
import React from 'react'

function Audio({ totalItemsLength, audioRefs, audio, index }: any) {
  const [canPlayThrough, setCanPlayThrough] = React.useState(false)
  const onCanPlayThrough = () => {
    setCanPlayThrough(true)
  }
 return <div>
         <h2 className="text-3xl font-bold mb-4">{audio.label}</h2>
         <p className="text-gray-300 mb-4">Released: {audio.releaseDate}</p>
          <audio onCanPlayThrough={onCanPlayThrough} className="w-full rounded-lg bg-gray-800" controls src={audio.src} onVolumeChange={(e: any) => {
          // set all audios to the desired volume
          audioRefs.current.forEach((audio: HTMLAudioElement, j: number) => {
            if(index !== j) audio.volume = e.target.volume
          })
        }} onPlay={() => {
         
          // pause all other audios or if not loaded pause it
          const audioEls = audioRefs.current
          audioEls.forEach((el: HTMLAudioElement, j: number) => {
           if (index != j || !canPlayThrough){
             el.pause();
           }
          })
          if(!canPlayThrough){
            console.warn("audio not loaded yet")
            alert("Loading...")
           }
        }} onEnded={(event: any) => {
          // if there is a next audio, play it on ended this audio
          if (index + 1 < totalItemsLength) {
            const node = audioRefs.current?.[index + 1]
            if (node) {
              node.currentTime = 0;
              node.play();
            }
          }
        }} ref={node => {
          if (node) audioRefs.current[index] = node
        }} />
      </div>
}

function Audios() {
  const AudiosData = [
    {
      label: 'Tidal Wave',
      src: '/Tidal_wave.coolbeat1-24-07-2024-1404.wav',
      releaseDate: 'July 2024'
    },
    {
      label: 'Syntax',
      src: '/SintaxMk2.wav',
      releaseDate: 'April 2024'
    },
    
  ]
  const audioRefs = React.useRef<HTMLAudioElement[]>([]);
  return (
    <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
              {/* <div>
                <h2 className="text-3xl font-bold mb-4">Tidal Wave</h2>
                <p className="text-gray-300 mb-4">Released: June 1, 2023</p>
                <audio controls src="/placeholder-audio.mp3" className="w-full rounded-lg bg-gray-800">
                  Your browser does not support the audio element.
                </audio>
              </div> */}
      {AudiosData.map((audio, index) => <Audio key={audio.src} totalItemsLength={AudiosData.length} audioRefs={audioRefs} audio={audio} index={index} />)}
    
      </div>
      </div>
        </section>
  )
  }

export default Audios