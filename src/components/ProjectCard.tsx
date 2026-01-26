'use client'
import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import { ImageWithFallback } from './figma/ImageWithFallback'

interface ProjectCardProps {
  title: string
  description: string
  image: string
  tags: string[]
  liveUrl?: string
  githubUrl?: string
  index: number
  date?: string
  type?: string
  location?: string
  role?: string
  status?: string
}

export function ProjectCard({ title, description, image, tags, liveUrl, githubUrl, index, date, type, location, role, status }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [colorIndex, setColorIndex] = useState(0)
  
  // Check if this is the DoorJam project
  const isDoorJam = image.includes('DoorJam')
  
  // Color cycle array for DoorJam
  const doorJamColors = [
    'Red',
    'Orange',
    'Cyan',
    'Pink',
    'Green',
    'Purple',
    'Blue',
    'Yellow'
  ]
  
  useEffect(() => {
    if (isDoorJam && isHovered) {
      const interval = setInterval(() => {
        setColorIndex((prevIndex) => (prevIndex + 1) % doorJamColors.length)
      }, 200)
      
      return () => clearInterval(interval)
    } else {
      setColorIndex(0)
    }
  }, [isHovered, isDoorJam])
  
  // Determine which image to display
  const displayImage = isDoorJam && isHovered
    ? `/images/DoorJam-${doorJamColors[colorIndex]}.png`
    : image

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
      className="group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 focus-within:ring-2 focus-within:ring-blue-500">
        <div className="relative overflow-hidden">
          <ImageWithFallback
            src={displayImage}
            alt={title}
            className="w-full aspect-[16/9] object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {liveUrl && liveUrl !== "#" && (
                <motion.a
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/90 backdrop-blur px-3 py-2 text-gray-800 rounded-full hover:bg-white transition-colors pointer-events-auto shadow-md"
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.92 }}
                  onClick={(e) => e.stopPropagation()}
                  aria-label={`Open live site for ${title}`}
                >
                  <ExternalLink className="w-4 h-4" />
                </motion.a>
              )}
              {githubUrl && githubUrl !== "#" && (
                <motion.a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/90 backdrop-blur px-3 py-2 text-gray-800 rounded-full hover:bg-white transition-colors pointer-events-auto shadow-md"
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.92 }}
                  onClick={(e) => e.stopPropagation()}
                  aria-label={`View code for ${title}`}
                >
                  <Github className="w-4 h-4" />
                </motion.a>
              )}
            </div>
          </div>
        </div>
        <div className="p-5 md:p-6">
          <div className="flex justify-between items-start mb-2 md:mb-3">
            <h3 className="text-lg md:text-xl text-gray-800 font-bold leading-snug tracking-tight">{title}</h3>
            {status && (
              <span className="bg-yellow-100 text-yellow-800 text-[10px] md:text-xs px-2 py-1 rounded-full text-nowrap font-medium">
                {status}
              </span>
            )}
          </div>
          {(date || type) && (
            <div className="flex flex-wrap gap-2 mb-3 text-xs md:text-sm text-gray-500 font-medium">
              {date && <span>{date}</span>}
              {type && <span className="before:content-['•'] before:mx-1 before:text-gray-300">{type}</span>}
            </div>
          )}
          <p className="text-gray-600 mb-4 text-sm md:text-base leading-relaxed line-clamp-4">{description}</p>
          {(location || role) && (
            <div className="mb-4 text-xs md:text-sm text-gray-500 space-y-1">
              {location && <div>📍 {location}</div>}
              {role && <div>👤 {role}</div>}
            </div>
          )}
          <div className="flex flex-wrap gap-1.5 md:gap-2" aria-label="Project tags">
            {tags.map((tag, tagIndex) => (
              <span
                key={tagIndex}
                className="bg-gray-100 text-gray-700 px-2.5 py-1 rounded-full text-[10px] md:text-xs font-medium tracking-wide"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}