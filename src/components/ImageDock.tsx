'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { ImageWithFallback } from './figma/ImageWithFallback'

interface ImageOption {
  id: string
  src: string
  alt: string
  thumbnail: string
  textStyle?: string
}

interface ImageDockProps {
  images: ImageOption[]
  activeImageId: string
  onImageChange: (imageId: string) => void
}

export function ImageDock({ images, activeImageId, onImageChange }: ImageDockProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="relative z-50"
    >
      {/* Enhanced Glass morphism container */}
      <div 
        className="relative px-6 py-4 rounded-3xl backdrop-blur-2xl border border-white/30"
        style={{
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
          boxShadow: `
            0 8px 12px 0 rgba(0, 0, 0, 0.37),
            inset 0 1px 0 rgba(255, 255, 255, 0.15),
            inset 0 -1px 0 rgba(0, 0, 0, 0.1),
            0 10px 10px -12px rgba(0, 0, 0, 0.25)
          `,
          backdropFilter: 'blur(12px) saturate(180%)',
          WebkitBackdropFilter: 'blur(12px) saturate(180%)'
        }}
      >
        <div className="relative flex gap-3">
          {images.map((image, index) => (
            <motion.button
              key={image.id}
              onClick={() => onImageChange(image.id)}
              className={`relative w-16 h-16 rounded-2xl overflow-hidden transition-all duration-300 backdrop-blur-sm ${
                activeImageId === image.id 
                  ? 'ring-2 ring-white/80 shadow-2xl' 
                  : 'hover:ring-1 hover:ring-white/50'
              }`}
              style={{
                background: activeImageId === image.id 
                  ? 'linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.1))'
                  : 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
                boxShadow: activeImageId === image.id
                  ? '0 8px 25px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
                  : '0 4px 15px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
              }}
              whileHover={{ 
                scale: activeImageId === image.id ? 1.15 : 1.1,
                y: -2
              }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, scale: 0, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ 
                duration: 0.4, 
                delay: 0.7 + index * 0.1,
                type: "spring",
                stiffness: 200
              }}
            >
              <ImageWithFallback
                src={image.thumbnail}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
              {/* Tooltip */}
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
                {image.alt}
              </div>
              {/* Active indicator with glow */}
              {activeImageId === image.id && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-5 h-5 bg-white rounded-full border-2 border-white/80"
                  style={{
                    boxShadow: `
                      0 2px 8px rgba(0, 0, 0, 0.25),
                      0 1px 3px rgba(0, 0, 0, 0.15),
                      0 0 0 1px rgba(255, 255, 255, 0.1)
                    `
                  }}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 400, 
                    damping: 30,
                    duration: 0.3
                  }}
                >
                  <motion.div 
                    className="absolute inset-0 bg-white rounded-full"
                    animate={{ 
                      scale: [1, 1.2, 1],
                      opacity: [0.8, 0.4, 0.8]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </motion.div>
              )}
            </motion.button>
          ))}
        </div>
      </div>
    </motion.div>
  )
}