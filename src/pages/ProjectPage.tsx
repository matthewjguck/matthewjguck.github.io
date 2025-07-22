import React from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, ExternalLink, Github } from 'lucide-react'
import { ImageWithFallback } from '../components/figma/ImageWithFallback'
import { projects } from '../data/projects'

export function ProjectPage() {
  const { projectId } = useParams<{ projectId: string }>()
  const project = projects.find(p => p.id === projectId)

  if (!project) {
    return <Navigate to="/" replace />
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-gray-50 py-8"
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link
            to="/"
            className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors group"
          >
            <motion.div
              whileHover={{ x: -5 }}
              transition={{ duration: 0.2 }}
            >
              <ArrowLeft className="w-5 h-5" />
            </motion.div>
            Back to Portfolio
          </Link>
        </motion.div>

        {/* Project Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h1 className="text-4xl md:text-5xl mb-6 text-gray-800">{project.title}</h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">{project.description}</p>
              
              {/* Project Meta */}
              <div className="space-y-4 mb-8">
                {project.date && (
                  <div>
                    <h4 className="font-semibold text-gray-800">Date</h4>
                    <p className="text-gray-600">{project.date}</p>
                  </div>
                )}
                {project.type && (
                  <div>
                    <h4 className="font-semibold text-gray-800">Project Type</h4>
                    <p className="text-gray-600">{project.type}</p>
                  </div>
                )}
                {project.location && (
                  <div>
                    <h4 className="font-semibold text-gray-800">Location</h4>
                    <p className="text-gray-600">{project.location}</p>
                  </div>
                )}
                {project.role && (
                  <div>
                    <h4 className="font-semibold text-gray-800">Role</h4>
                    <p className="text-gray-600">{project.role}</p>
                  </div>
                )}
              </div>

              {/* Links */}
              {(project.liveUrl || project.githubUrl) && (
                <div className="flex gap-4 mb-8">
                  {project.liveUrl && project.liveUrl !== "#" && (
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink className="w-4 h-4" />
                      {project.liveUrlLabel || "View Live"}
                    </motion.a>
                  )}
                  {project.githubUrl && project.githubUrl !== "#" && (
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-gray-800 text-white px-6 py-3 rounded-full hover:bg-gray-900 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github className="w-4 h-4" />
                      GitHub
                    </motion.a>
                  )}
                </div>
              )}

              {/* Tags */}
                            <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, index) => {
                  // Define bright colors array
                  const brightColors = [
                    'bg-blue-500 text-white',
                    'bg-red-500 text-white', 
                    'bg-green-500 text-white',
                    'bg-purple-500 text-white',
                    'bg-orange-500 text-white',
                    'bg-cyan-500 text-white',
                    'bg-pink-500 text-white',
                    'bg-indigo-500 text-white',
                    'bg-teal-500 text-white',
                    'bg-amber-500 text-white',
                    'bg-slate-500 text-white'
                  ]
                  
                  // Assign colors based on tag content with fallback to index-based
                  const getTagColor = (tagName: string, index: number) => {
                    const lower = tagName.toLowerCase()
                    
                    // Content-based color assignment
                    if (lower.includes('react') || lower.includes('javascript') || lower.includes('typescript')) {
                      return 'bg-blue-500 text-white'
                    } else if (lower.includes('swift') || lower.includes('ios') || lower.includes('xcode')) {
                      return 'bg-orange-500 text-white'
                    } else if (lower.includes('python') || lower.includes('django') || lower.includes('flask')) {
                      return 'bg-green-500 text-white'
                    } else if (lower.includes('design') || lower.includes('figma') || lower.includes('ui') || lower.includes('ux')) {
                      return 'bg-purple-500 text-white'
                    } else if (lower.includes('vision') || lower.includes('ai') || lower.includes('ml') || lower.includes('computer')) {
                      return 'bg-red-500 text-white'
                    } else if (lower.includes('database') || lower.includes('sql') || lower.includes('api')) {
                      return 'bg-indigo-500 text-white'
                    } else if (lower.includes('css') || lower.includes('html')) {
                      return 'bg-pink-500 text-white'
                    } else if (lower.includes('mobile') || lower.includes('app')) {
                      return 'bg-cyan-500 text-white'
                    } else {
                      // Use index-based distribution for unknown tags to avoid adjacency
                      return brightColors[index % brightColors.length]
                    }
                  }
                  
                  return (
                    <span
                      key={index}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-default ${getTagColor(tag, index)}`}
                    >
                      {tag}
                    </span>
                  )
                })}
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            <ImageWithFallback
              src={project.image}
              alt={project.title}
              className="w-full h-auto rounded-2xl shadow-lg"
            />
            {project.status && (
              <div className="absolute top-4 right-4 bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">
                {project.status}
              </div>
            )}
          </motion.div>
        </div>

        {/* Content Sections */}
        {project.content && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-16 bg-gray-800 rounded-2xl p-8 text-white"
          >
            <div className="prose prose-lg max-w-none text-white">
              <div dangerouslySetInnerHTML={{ __html: project.content }} />
            </div>
          </motion.div>
        )}

        {/* Video */}
        {project.video && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mb-16"
          >
            <h3 className="text-2xl font-semibold mb-6 text-center">Demo Video</h3>
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg">
              <iframe
                src={project.video}
                frameBorder="0"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </motion.div>
        )}

        {/* Figma Embed */}
        {project.figmaEmbed && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="mb-16"
          >
            <h3 className="text-2xl font-semibold mb-6 text-center">Interactive Prototype</h3>
            <div className="bg-gray-800 rounded-2xl p-8">
              <div className="aspect-video rounded-xl overflow-hidden">
                <iframe
                  src={project.figmaEmbed}
                  className="w-full h-full border border-gray-300 rounded-xl"
                  allowFullScreen
                />
              </div>
            </div>
          </motion.div>
        )}

        {/* Gallery */}
        {project.gallery && project.gallery.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="mb-16"
          >
            <h3 className="text-2xl font-semibold mb-6 text-center">Gallery</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.gallery.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                  className="aspect-square rounded-xl overflow-hidden shadow-lg"
                >
                  <ImageWithFallback
                    src={image}
                    alt={`${project.title} gallery ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  )
}
