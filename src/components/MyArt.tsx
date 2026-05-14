'use client'
import React from 'react'

export function MyArt() {
  return (
    <section
      id="my-art"
      className="relative w-screen h-[20vh] overflow-hidden"
    >
      <video
        src="/videos/my-art.mp4"
        className="w-full h-full object-cover"
        autoPlay
        muted
        loop
      />
    </section>
  )
}
