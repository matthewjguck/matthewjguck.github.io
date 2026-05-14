'use client'
import React from 'react'

export function MyArt() {
  return (
    <section id="my-art" className="relative w-screen h-[33vh] overflow-hidden">
      <a
        href="#/gallery"
        className="absolute inset-0 flex items-center justify-center cursor-pointer group z-10"
      >
        <video
          src="/videos/my-art.mp4"
          className="absolute inset-0 w-full h-full object-cover brightness-50 saturate-170 group-hover:scale-110 transition-transform duration-300"
          autoPlay
          muted
          loop
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative flex items-center">
          <img
            src="/images/gallery-title.svg"
            alt="Gallery"
            className="w-96 md:w-[600px] border-4 border-white rounded-lg px-8 py-6"
          />
        </div>
      </a>
    </section>
  )
}
