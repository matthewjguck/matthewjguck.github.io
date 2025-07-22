'use client'
import React from 'react'
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
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
      className="group"
    >
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
        <div className="relative overflow-hidden">
          <ImageWithFallback
            src={image}
            alt={title}
            className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {liveUrl && liveUrl !== "#" && (
                <motion.a
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-gray-800 p-3 rounded-full hover:bg-gray-100 transition-colors pointer-events-auto"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <ExternalLink className="w-5 h-5" />
                </motion.a>
              )}
              {githubUrl && githubUrl !== "#" && (
                <motion.a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-gray-800 p-3 rounded-full hover:bg-gray-100 transition-colors pointer-events-auto"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <Github className="w-5 h-5" />
                </motion.a>
              )}
            </div>
          </div>
        </div>
        
        <div className="p-6">
          <div className="flex justify-between items-start mb-3">
            <h3 className="text-xl text-gray-800 font-bold">{title}</h3>
            {status && (
              <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">
                {status}
              </span>
            )}
          </div>
          
          {(date || type) && (
            <div className="flex gap-4 mb-3 text-sm text-gray-500">
              {date && <span>{date}</span>}
              {type && <span>• {type}</span>}
            </div>
          )}
          
          <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
          
          {(location || role) && (
            <div className="mb-4 text-sm text-gray-500">
              {location && <div>📍 {location}</div>}
              {role && <div>👤 {role}</div>}
            </div>
          )}
          
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, tagIndex) => (
              <span
                key={tagIndex}
                className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
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