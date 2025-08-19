import React, { useState, useEffect } from 'react'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Projects } from './components/Projects'
import { Gallery } from './pages/Gallery'
import { ProjectDetail } from './components/ProjectDetail'
import { projects } from './data/projects'

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
      <About />
    </div>
  )
}