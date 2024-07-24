
"use client";
import React from 'react'

function Audios() {
  const AudiosData = [
    {
      label: 'Sintax',
      src: '/SintaxMk2.wav'
    },
    {
      label: 'Tidal wave - Noface (24/7/2024)',
      src: '/Tidal_wave.coolbeat1-24-07-2024-1404.wav'
    }
  ]
  const audioRefs = React.useRef<HTMLAudioElement[]>([]);
  return (
    <>
      {AudiosData.map((audio, index) => <div key={audio.src} className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <label>{audio.label} <audio controls src={audio.src} onPlay={() => {
          const audioEls = audioRefs.current
          audioEls.forEach((el, j) => {
           if (index != j){
             el.pause();
           }
          })
        }} onEnded={(event: any) => {
          if (index + 1 < AudiosData.length) {
            const node = audioRefs.current?.[index + 1]
            if (node) {
              node.currentTime = 0;
              node.play();
            }
          }
        }} ref={node => {
          if (node) audioRefs.current[index] = node
        }} /></label>
      </div>)}
    </>)
  }

export default Audios
