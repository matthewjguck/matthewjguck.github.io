import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, ExternalLink, Github } from 'lucide-react'
import { Hero } from './components/Hero'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { Contact } from './components/Contact'
import { Gallery } from './pages/Gallery'
import { ImageWithFallback } from './components/figma/ImageWithFallback'
import { CustomProjectLayout } from './components/CustomProjectLayout'
import { projects } from './data/projects'

// Simple ProjectDetail component to fix navigation
function ProjectDetail({ project, onBack }: { 
  project: any; 
  onBack: () => void 
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-white fixed inset-0 z-[100] overflow-y-auto"
    >
      <div className="relative overflow-hidden">
        
        <div className="max-w-7xl mx-auto px-4 py-12">
          <motion.button
            onClick={onBack}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-white hover:bg-gray-50 border border-gray-300 rounded-full text-gray-800 transition-all duration-200 mb-8 group pointer-events-auto shadow-md hover:shadow-lg font-medium"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform duration-200" />
            Back to Projects
          </motion.button>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  {project.title}
                </h1>
                <p className="text-xl text-gray-700 leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag: string, index: number) => {
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
            </div>

            <div className="relative group">
              <div className="relative overflow-hidden rounded-2xl shadow-lg">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 lg:h-80 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {project.content && (
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-800 leading-relaxed text-lg">
              {project.content}
            </p>
          </div>
        </div>
      )}

      {/* Custom HTML Layout */}
      {(project as any).layoutKey && (
        <CustomProjectLayout layoutKey={(project as any).layoutKey} />
      )}
    </motion.div>
  )
}

export default function App() {
  const [currentRoute, setCurrentRoute] = useState(window.location.hash)

  useEffect(() => {
    const handleHashChange = () => {
      console.log('Hash changed from', currentRoute, 'to', window.location.hash)
      setCurrentRoute(window.location.hash)
      // Reset scroll position when route changes
      window.scrollTo(0, 0)
    }
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  // Parse the hash to get route and project ID
  const galleryMatch = currentRoute === '#/gallery'
  const projectMatch = currentRoute.match(/#\/project\/(.+)/)
  const projectId = projectMatch ? projectMatch[1] : null
  const selectedProject = projectId ? projects.find(p => p.id === projectId) : null

  console.log('Current route:', currentRoute)
  console.log('Is gallery:', galleryMatch)
  console.log('Project ID:', projectId)
  console.log('Selected project:', selectedProject)

  const handleBackToProjects = () => {
    window.location.hash = '#/'
    // Wait for navigation to complete, then scroll to projects
    setTimeout(() => {
      const projectsSection = document.getElementById('projects')
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: 'smooth' })
      }
    }, 100)
  }

  if (galleryMatch) {
    return <Gallery />
  }

  if (selectedProject) {
    return (
      <ProjectDetail 
        project={selectedProject} 
        onBack={handleBackToProjects} 
      />
    )
  }

  return (
    <div className="min-h-screen">
      <Hero />
      <Projects />
      <Skills />
      <Contact />
    </div>
  )
}