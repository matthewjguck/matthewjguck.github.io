'use client'
import React from 'react'
import { motion } from 'framer-motion'

interface Video {
  id: string
  title: string
  description?: string
  src: string
}

const videos: Video[] = [
  {
    id: '1',
    title: 'Setup & Customization',
    src: '/videos/screen-1.mov',
  },
  {
    id: '2',
    title: 'Party Creation',
    src: '/videos/screen-2.mov',
  },
  {
    id: '3',
    title: 'Guest Notifications',
    src: '/videos/screen-3.mov',
  },
  {
    id: '4',
    title: 'Music Display',
    src: '/videos/screen-4.mov',
  },
  {
    id: '5',
    title: 'Theme Switching',
    src: '/videos/screen-5.mov',
  },
  {
    id: '6',
    title: 'Ring Alert Animation',
    src: '/videos/screen-6.mov',
  },
  {
    id: '7',
    title: 'Full Experience',
    src: '/videos/screen-7.mov',
  },
  {
    id: '8',
    title: 'Party Control Panel',
    src: '/videos/screen-8.mov',
  },
  {
    id: '9',
    title: 'Featured Demo',
    src: '/videos/screen-9.mov',
  },
  {
    id: '10',
    title: 'Demo 1',
    src: '/videos/screen-10.mov',
  },
  {
    id: '11',
    title: 'Demo 2',
    src: '/videos/screen-11.mov',
  },
]

export function DoorJamVideos() {
  // Split into 3 rows: 4, 3 (centered with new videos), 4
  const row1 = [videos[8], videos[1], videos[2], videos[3]]
  const row2 = [videos[4], videos[9], videos[10]] // Middle row with 2 new videos
  const row3 = [videos[5], videos[6], videos[7], videos[0]]

  const renderRow = (rowVideos: Video[], centered: boolean = false) => (
    <div className={`grid gap-6 ${centered ? 'grid-cols-3 justify-center' : 'grid-cols-4'} ${centered ? 'w-fit mx-auto' : ''}`}>
      {rowVideos.map((video, index) => (
        <motion.div
          key={video.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true, margin: '-100px' }}
          className="group"
        >
          <div className="bg-white rounded-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 w-full">
            <div className="relative w-full bg-black" style={{ aspectRatio: '16/9' }}>
              <video
                src={video.src}
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
              />
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )

  return (
    <div className="w-screen -mx-[calc((100vw-100%)/2)] px-4 py-8">
      <div className="space-y-6">
        {renderRow(row1)}
        {renderRow(row2, true)}
        {renderRow(row3)}
      </div>
    </div>
  )
}
