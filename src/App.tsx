import React, { useState, useEffect } from 'react'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { MyArt } from './components/MyArt'
import { Resume } from './components/Resume'
import { Projects } from './components/Projects'
import { PitchDecks } from './components/PitchDecks'
import { WisdomTeaser } from './components/WisdomTeaser'
import { Gallery } from './pages/Gallery'
import { Wisdom } from './pages/Wisdom'
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

  // Debug: Find elements with scrollbars
  useEffect(() => {
    const debugScrollbars = () => {
      const allElements = document.querySelectorAll('*')
      allElements.forEach(el => {
        const scrollHeight = el.scrollHeight
        const clientHeight = el.clientHeight
        const scrollWidth = el.scrollWidth
        const clientWidth = el.clientWidth

        if (scrollHeight > clientHeight || scrollWidth > clientWidth) {
          const style = window.getComputedStyle(el)
          const overflowY = style.overflowY
          const overflowX = style.overflowX

          if ((overflowY === 'auto' || overflowY === 'scroll') && scrollHeight > clientHeight) {
            console.warn('Element with vertical scroll:', {
              element: el,
              class: el.className,
              id: el.id,
              scrollHeight,
              clientHeight,
              overflowY
            })
          }
        }
      })
    }

    // Run debug after a short delay to let DOM settle
    const timer = setTimeout(debugScrollbars, 500)
    return () => clearTimeout(timer)
  }, [currentRoute])

  const galleryMatch = currentRoute === '#/gallery'
  const wisdomMatch = currentRoute === '#/wisdom'
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

  if (wisdomMatch) {
    return (
      <>
        <div aria-live="polite" className="sr-only">{announcement}</div>
        <Wisdom />
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
    <div className="w-full overflow-x-clip">
      <div aria-live="polite" className="sr-only">{announcement}</div>
      <Hero />
      <Projects />
      <MyArt />
      <PitchDecks />
      <About />
      <Resume />
      <WisdomTeaser />
    </div>
  )
}