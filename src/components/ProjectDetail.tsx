'use client'
import { motion } from 'framer-motion'
import { ArrowLeft, ExternalLink, Github } from 'lucide-react'
import { ImageWithFallback } from './figma/ImageWithFallback'
import { CustomProjectLayout } from './CustomProjectLayout'

interface ProjectDetailProps {
  project: any;
  onBack: () => void
}

export function ProjectDetail({ project, onBack }: ProjectDetailProps) {
  const hasCustomLayout = project.layoutKey;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-white fixed inset-0 z-[100] overflow-y-auto"
      role="dialog" aria-modal="true" aria-labelledby="project-title"
    >
      {!hasCustomLayout && (
        <div className="relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 py-12" role="document">
            <motion.button
              onClick={onBack}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white hover:bg-gray-50 border border-gray-300 rounded-full text-gray-800 transition-all duration-200 mb-8 group pointer-events-auto shadow-md hover:shadow-lg font-medium text-sm"
              aria-label="Back to projects"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform duration-200" />
              Back to Projects
            </motion.button>

            <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-6">
                <div className="space-y-5">
                  <h1 id="project-title" className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight tracking-tight">
                    {project.title}
                  </h1>
                  <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2" aria-label="Project tags">
                  {project.tags.map((tag: string, index: number) => {
                    const brightColors = [
                      'bg-blue-600 text-white','bg-red-600 text-white','bg-green-600 text-white','bg-purple-600 text-white','bg-orange-600 text-white','bg-cyan-600 text-white','bg-pink-600 text-white','bg-indigo-600 text-white','bg-teal-600 text-white','bg-amber-600 text-white','bg-slate-600 text-white'
                    ]
                    const getTagColor = (tagName: string, idx: number) => {
                      const lower = tagName.toLowerCase()
                      if (lower.includes('react') || lower.includes('javascript') || lower.includes('typescript')) return 'bg-blue-600 text-white'
                      if (lower.includes('swift') || lower.includes('ios') || lower.includes('xcode')) return 'bg-orange-600 text-white'
                      if (lower.includes('python') || lower.includes('django') || lower.includes('flask')) return 'bg-green-600 text-white'
                      if (lower.includes('design') || lower.includes('figma') || lower.includes('ui') || lower.includes('ux')) return 'bg-purple-600 text-white'
                      if (lower.includes('vision') || lower.includes('ai') || lower.includes('ml') || lower.includes('computer')) return 'bg-red-600 text-white'
                      if (lower.includes('database') || lower.includes('sql') || lower.includes('api')) return 'bg-indigo-600 text-white'
                      if (lower.includes('css') || lower.includes('html')) return 'bg-pink-600 text-white'
                      if (lower.includes('mobile') || lower.includes('app')) return 'bg-cyan-600 text-white'
                      return brightColors[idx % brightColors.length]
                    }
                    return (
                      <span
                        key={index}
                        className={`px-3 py-1.5 rounded-full text-xs font-medium tracking-wide shadow-sm ${getTagColor(tag, index)}`}
                      >
                        {tag}
                      </span>
                    )
                  })}
                </div>

                <div className="flex flex-wrap gap-3 pt-2">
                  {project.liveUrl && project.liveUrl !== '#' && project.liveUrl !== '' && (
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-300 shadow-md text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.96 }}
                    >
                      <ExternalLink className="w-4 h-4" />
                      {project.liveUrlLabel || 'View Live'}
                    </motion.a>
                  )}
                  {project.githubUrl && project.githubUrl !== '#' && project.githubUrl !== '' && (
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-800 hover:bg-gray-900 text-white rounded-lg transition-all duration-300 shadow-md text-sm font-medium focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2"
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.96 }}
                    >
                      <Github className="w-4 h-4" />
                      View Code
                    </motion.a>
                  )}
                </div>
              </div>

              <div className="relative group mt-4 lg:mt-0 w-full lg:w-auto flex justify-center">
                <div className="relative overflow-hidden rounded-2xl shadow-xl ring-1 ring-gray-200/60 w-[85vw] lg:w-full">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {hasCustomLayout && (
        <motion.button
          onClick={onBack}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="fixed top-6 left-6 inline-flex items-center gap-2 px-5 py-2.5 bg-white hover:bg-gray-50 border border-gray-300 rounded-full text-gray-800 transition-all duration-200 group pointer-events-auto shadow-md hover:shadow-lg font-medium text-sm z-50"
          aria-label="Back to projects"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform duration-200" />
          Back to Projects
        </motion.button>
      )}

      {!hasCustomLayout && project.content && (
        <div className="max-w-5xl mx-auto px-4 pb-20">
          <div className="prose prose-gray max-w-none prose-headings:tracking-tight">
            <p className="text-gray-800 leading-relaxed text-base md:text-lg">
              {project.content}
            </p>
          </div>
        </div>
      )}

      {hasCustomLayout && (
        <CustomProjectLayout layoutKey={project.layoutKey} />
      )}
    </motion.div>
  )
}
