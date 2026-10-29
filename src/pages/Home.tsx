import React from 'react'
import { Hero } from '../components/Hero'
import { Projects } from '../components/Projects'

export function Home() {
  return (
    <div className="w-full overflow-x-clip">
      <Hero />
      <Projects />
    </div>
  )
}
