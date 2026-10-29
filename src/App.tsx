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
      console.log('=== SCROLLBAR DEBUG ===')
      console.log('html:', {
        scrollHeight: document.documentElement.scrollHeight,
        clientHeight: document.documentElement.clientHeight,
        overflow: getComputedStyle(document.documentElement).overflow,
        overflowY: getComputedStyle(document.documentElement).overflowY
      })
      console.log('body:', {
        scrollHeight: document.body.scrollHeight,
        clientHeight: document.body.clientHeight,
        overflow: getComputedStyle(document.body).overflow,
        overflowY: getComputedStyle(document.body).overflowY
      })

      const allElements = document.querySelectorAll('*')
      const problematic: any[] = []

      allElements.forEach(el => {
        const scrollHeight = el.scrollHeight
        const clientHeight = el.clientHeight
        const overflowY = getComputedStyle(el).overflowY

        if ((scrollHeight > clientHeight + 1) && (overflowY === 'auto' || overflowY === 'scroll')) {
          problematic.push({
            tag: el.tagName,
            class: el.className,
            id: el.id,
            scrollHeight,
            clientHeight,
            diff: scrollHeight - clientHeight,
            overflowY
          })
        }
      })

      if (problematic.length > 0) {
        console.warn('⚠️ Found', problematic.length, 'elements with vertical scrollbars:')
        console.table(problematic)
      } else {
        console.log('✓ No elements with scrollbars found')
      }
    }

    debugScrollbars()
    const timer = setTimeout(debugScrollbars, 1000)
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