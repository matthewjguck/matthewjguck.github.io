'use client'
import { motion } from 'framer-motion'
import { ArrowLeft, ExternalLink, Github } from 'lucide-react'
import { ImageWithFallback } from './figma/ImageWithFallback'

interface ProjectDetailProps {
  project: {
    id: string
    title: string
    description: string
    image: string
    tags: string[]
    liveUrl?: string
    githubUrl?: string
    content?: string
  }
  onBack: () => void
}

export function ProjectDetail({ project, onBack }: ProjectDetailProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900/20"
    >
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Gradient overlay - FIXED: Added pointer-events-none */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 py-12">
          {/* Back Button */}
          <motion.button
            onClick={onBack}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full text-white transition-all duration-300 mb-8 group pointer-events-auto"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Projects
          </motion.button>

          {/* Hero Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Project Info */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                  {project.title}
                </h1>
                <p className="text-xl text-gray-300 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                {project.liveUrl && (
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg transition-all duration-300 transform hover:scale-105 pointer-events-auto"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink className="w-4 h-4" />
                    View Live
                  </motion.a>
                )}
                {project.githubUrl && (
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white rounded-lg transition-all duration-300 transform hover:scale-105 pointer-events-auto"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github className="w-4 h-4" />
                    View Code
                  </motion.a>
                )}
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative group">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 lg:h-80 object-cover"
                />
                {/* Enhanced gradient overlay - FIXED: Added pointer-events-none */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Project Content */}
      {project.content && (
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 leading-relaxed text-lg">
              {project.content}
            </p>
          </div>
        </div>
      )}
    </motion.div>
  )
}
