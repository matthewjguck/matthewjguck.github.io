import React, { useState, useEffect } from 'react'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Resume } from './components/Resume'
import { Projects } from './components/Projects'
import { Gallery } from './pages/Gallery'
import { ProjectDetail } from './components/ProjectDetail'
import { projects } from './data/projects'

export default function App() {
  const [currentRoute, setCurrentRoute] = useState(window.location.hash)
  const [announcement, setAnnouncement] = useState('')

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentRoute(window.location.hash)
      window.scrollTo(0, 0)
      setAnnouncement('Navigated to ' + (window.location.hash.replace('#/', '') || 'home'))
    }
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const galleryMatch = currentRoute === '#/gallery'
  const projectMatch = currentRoute.match(/#\/project\/(.+)/)
  const projectId = projectMatch ? projectMatch[1] : null
  const selectedProject = projectId ? projects.find(p => p.id === projectId) : null

  const handleBackToProjects = () => {
    window.location.hash = '#/'
    setTimeout(() => {
      const projectsSection = document.getElementById('projects')
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: 'smooth' })
      }
    }, 100)
  }

  if (galleryMatch) {
    return (
      <>
        <div aria-live="polite" className="sr-only">{announcement}</div>
        <Gallery />
      </>
    )
  }

  if (selectedProject) {
    return (
      <>
        <div aria-live="polite" className="sr-only">{announcement}</div>
        <ProjectDetail 
          project={selectedProject} 
          onBack={handleBackToProjects} 
        />
      </>
    )
  }

  return (
    <div className="min-h-screen overflow-x-hidden">
      <div aria-live="polite" className="sr-only">{announcement}</div>
      <Hero />
      <Projects />
      <About />
      <Resume />
    </div>
  )
}