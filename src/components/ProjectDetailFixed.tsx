'use client'
import { motion } from 'framer-motion'
import { ArrowLeft, ExternalLink, Github, Calendar, MapPin, User, Award } from 'lucide-react'
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
    date?: string
    type?: string
    location?: string
    role?: string
    status?: string
    content?: string
    gallery?: string[]
    features?: string[]
    technologies?: string[]
    challenges?: string[]
    outcome?: string
    teamSize?: string
    duration?: string
    platforms?: string[]
  }
  onBack: () => void
}

export function ProjectDetail({ project, onBack }: ProjectDetailProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="min-h-screen bg-white fixed inset-0 z-[100] overflow-y-auto"
    >
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        
        <div className="max-w-7xl mx-auto px-4 py-12">
          {/* Back Button */}
          <motion.button
            onClick={onBack}
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-white hover:bg-gray-50 border border-gray-300 rounded-full text-gray-800 transition-all duration-200 mb-8 group pointer-events-auto shadow-md hover:shadow-lg font-medium"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform duration-200" />
            Back to Projects
          </motion.button>

          {/* Hero Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Project Info */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  {project.title}
                </h1>
                <p className="text-xl text-gray-700 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Meta Information */}
              <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                {project.date && (
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {project.date}
                  </div>
                )}
                {project.role && (
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    {project.role}
                  </div>
                )}
                {project.type && (
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4" />
                    {project.type}
                  </div>
                )}
                {project.location && (
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    {project.location}
                  </div>
                )}
              </div>

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
                      className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-default ${getTagColor(tag, index)}`}
                    >
                      {tag}
                    </span>
                  )
                })}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                {project.liveUrl && (
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-lg transition-all duration-300 transform hover:scale-105 pointer-events-auto shadow-lg"
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
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white hover:bg-gray-50 border border-gray-300 text-gray-700 rounded-lg transition-all duration-300 transform hover:scale-105 pointer-events-auto shadow-md"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github className="w-4 h-4" />
                    View Code
                  </motion.a>
                )}
              </div>
            </motion.div>

            {/* Hero Image */}
            <motion.div 
              variants={itemVariants}
              className="relative group"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 lg:h-80 object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Project Details */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Project Overview */}
            {project.content && (
              <motion.section variants={itemVariants} className="space-y-6">
                <h2 className="text-3xl font-bold text-gray-900">Project Overview</h2>
                <div className="prose prose-gray max-w-none">
                  <p className="text-gray-800 leading-relaxed text-lg">
                    {project.content}
                  </p>
                </div>
              </motion.section>
            )}

            {/* Features */}
            {project.features && project.features.length > 0 && (
              <motion.section variants={itemVariants} className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">Key Features</h3>
                <div className="grid gap-4">
                  {project.features.map((feature, index) => (
                    <div key={index} className="relative p-6 rounded-xl bg-white border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all duration-300">
                      {/* Background gradient - FIXED: Added pointer-events-none */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl opacity-50 pointer-events-none" />
                      <div className="relative">
                        <p className="text-gray-800">{feature}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.section>
            )}

            {/* Challenges */}
            {project.challenges && project.challenges.length > 0 && (
              <motion.section variants={itemVariants} className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">Challenges & Solutions</h3>
                <div className="space-y-4">
                  {project.challenges.map((challenge, index) => (
                    <div key={index} className="relative p-6 rounded-xl bg-white border border-gray-200">
                      {/* Background gradient - FIXED: Added pointer-events-none */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl opacity-30 pointer-events-none" />
                      <div className="relative">
                        <p className="text-gray-800">{challenge}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.section>
            )}

            {/* Outcome */}
            {project.outcome && (
              <motion.section variants={itemVariants} className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">Outcome & Impact</h3>
                <div className="relative p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-200">
                  {/* Background glow - FIXED: Added pointer-events-none */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-100/50 to-purple-100/50 rounded-2xl pointer-events-none" />
                  <div className="relative">
                    <p className="text-gray-800 text-lg leading-relaxed">{project.outcome}</p>
                  </div>
                </div>
              </motion.section>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Project Stats */}
            <motion.div variants={itemVariants} className="relative p-6 rounded-2xl bg-white border border-gray-200 shadow-lg">
              {/* Background glow - FIXED: Added pointer-events-none */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl opacity-50 pointer-events-none" />
              <div className="relative space-y-6">
                <h3 className="text-xl font-bold text-gray-900">Project Details</h3>
                <div className="space-y-4 text-sm">
                  {project.duration && (
                    <div>
                      <span className="text-gray-600">Duration:</span>
                      <span className="ml-2 text-gray-900 font-medium">{project.duration}</span>
                    </div>
                  )}
                  {project.teamSize && (
                    <div>
                      <span className="text-gray-600">Team Size:</span>
                      <span className="ml-2 text-gray-900 font-medium">{project.teamSize}</span>
                    </div>
                  )}
                  {project.status && (
                    <div>
                      <span className="text-gray-600">Status:</span>
                      <span className="ml-2 text-gray-900 font-medium">{project.status}</span>
                    </div>
                  )}
                  {project.platforms && project.platforms.length > 0 && (
                    <div>
                      <span className="text-gray-600">Platforms:</span>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {project.platforms.map((platform, index) => (
                          <span key={index} className="px-2 py-1 bg-gray-200 text-gray-800 rounded text-xs border border-gray-300 font-medium">
                            {platform}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>

            {/* Technologies */}
            {project.technologies && project.technologies.length > 0 && (
              <motion.div variants={itemVariants} className="relative p-6 rounded-2xl bg-white border border-gray-200 shadow-lg">
                <div className="relative space-y-4">
                  <h3 className="text-xl font-bold text-gray-900">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-blue-600 text-white rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>

        {/* Project Gallery */}
        {project.gallery && project.gallery.length > 0 && (
          <motion.section variants={itemVariants} className="mt-16 space-y-8">
            <h3 className="text-3xl font-bold text-gray-900 text-center">Project Gallery</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.gallery.map((image, index) => (
                <motion.div
                  key={index}
                  className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer border border-gray-200 hover:border-gray-300"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <ImageWithFallback
                    src={image}
                    alt={`${project.title} screenshot ${index + 1}`}
                    className="w-full h-48 object-cover"
                  />
                  {/* Hover overlay - This one is intentional for interaction */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}
      </div>
    </motion.div>
  )
}
