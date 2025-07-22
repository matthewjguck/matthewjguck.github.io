'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ProjectCard } from './ProjectCard'
import { projects } from '../data/projects'

export function Projects() {
  const [showAllProjects, setShowAllProjects] = useState(false)
  
  const handleProjectClick = (projectId: string) => {
    window.location.hash = `#/project/${projectId}`
  }

  // Show only top 6 projects by default
  const topProjects = projects.slice(0, 6)
  const additionalProjects = projects.slice(6)
  const displayedProjects = showAllProjects ? projects : topProjects

  return (
    <motion.section 
      id="projects" 
      className="py-20 px-4 bg-gray-50 relative z-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-6 text-gray-800">My Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A collection of my recent work spanning design, development, and social impact. 
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project, index) => (
            <div 
              key={project.id}
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                handleProjectClick(project.id)
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  handleProjectClick(project.id)
                }
              }}
              className="cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-2xl"
              tabIndex={0}
              role="button"
              aria-label={`View ${project.title} project details`}
            >
              <ProjectCard
                index={index}
                {...project}
              />
            </div>
          ))}
        </div>

        {/* Show "View All Projects" button only if there are additional projects and they're not shown yet */}
        {additionalProjects.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <motion.button
              onClick={() => setShowAllProjects(!showAllProjects)}
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-full hover:shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {showAllProjects ? 'Show Featured Projects' : `View All Projects (${additionalProjects.length} more)`}
            </motion.button>
          </motion.div>
        )}
      </div>
    </motion.section>
  )
}