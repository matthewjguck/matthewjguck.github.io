'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FileText } from 'lucide-react'

interface PitchDeck {
  title: string
  svg: string
  pdf: string
}

const pitchDecks: PitchDeck[] = [
  {
    title: 'Queer Peer Marketplace',
    svg: '/pdfs/Queer%20Peer%20Marketplace.svg',
    pdf: '/pdfs/Queer%20Peer%20Marketplace.pdf',
  },
  {
    title: 'ClarityGrid Opportunity Analysis',
    svg: '/pdfs/ClarityGrid%20AI%20OEP%20Slides.svg',
    pdf: '/pdfs/ClarityGrid%20AI%20OEP%20Slides.pdf',
  },
  {
    title: 'Thirsty Girl Bottle Co.',
    svg: '/pdfs/Thirsty%20Girl%20Group%20Presentation.svg',
    pdf: '/pdfs/Thirsty%20Girl%20Group%20Presentation.pdf',
  },
  {
    title: 'Guild — Corporate Partner Needfinding',
    svg: '/pdfs/Patient%20Transporters.svg',
    pdf: '/pdfs/Patient%20Transporters.pdf',
  },
  {
    title: 'Spanish 2 Presentation',
    svg: '/pdfs/Spanish%202%20Presentation.svg',
    pdf: '/pdfs/Spanish%202%20Presentation.pdf',
  },
  {
    title: 'HCI Research Presentation',
    svg: '/pdfs/CS%20197%20Presentation.svg',
    pdf: '/pdfs/CS%20197%20Presentation.pdf',
  },
  {
    title: 'Shark Pro',
    svg: '/pdfs/Shark%20Pro%20from%20Google%20Slides.svg',
    pdf: '/pdfs/Shark%20Pro%20Presentation.pdf',
  },
  {
    title: 'IB Calculus Presentation',
    svg: '/pdfs/Can%20Can.svg',
    pdf: '/pdfs/Can%20Can%20Presentation.pdf',
  },
  {
    title: 'Cupid Project 1st Board Meeting',
    svg: '/pdfs/Cupid%20Project%201st%20Board%20Meeting.svg',
    pdf: '/pdfs/Cupid%20Project%201st%20Board%20Meeting.pdf',
  },
]

export function PitchDecks() {
  const [showAll, setShowAll] = useState(false)

  const displayed = showAll ? pitchDecks : pitchDecks.slice(0, 6)
  const remaining = pitchDecks.length - 6

  return (
    <motion.section
      id="pitch-decks"
      className="py-20 px-4 bg-white relative z-10"
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
          <h2 className="text-4xl md:text-5xl mb-6 text-gray-800">Pitch Decks</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Presentations and pitch decks from projects and coursework.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayed.map((deck, index) => (
            <motion.a
              key={deck.title}
              href={deck.pdf}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, margin: '-100px' }}
              className="group block focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-2xl"
              aria-label={`Open ${deck.title} PDF`}
            >
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative overflow-hidden bg-gray-50">
                  <img
                    src={deck.svg}
                    alt={deck.title}
                    className="w-full aspect-[16/9] object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/20 transition-colors duration-300">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 backdrop-blur px-4 py-2 rounded-full flex items-center gap-2 shadow-md">
                      <FileText className="w-4 h-4 text-gray-800" />
                      <span className="text-sm font-medium text-gray-800">Open PDF</span>
                    </div>
                  </div>
                </div>
                <div className="p-5 md:p-6">
                  <h3 className="text-lg md:text-xl text-gray-800 font-bold leading-snug tracking-tight">
                    {deck.title}
                  </h3>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {remaining > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <button
              onClick={() => setShowAll(!showAll)}
              className="bg-gray-800 text-white px-8 py-3 rounded-full hover:bg-gray-700 transition-colors duration-300 font-medium"
            >
              {showAll ? 'Show Less' : `View All Decks (${remaining} more)`}
            </button>
          </motion.div>
        )}
      </div>
    </motion.section>
  )
}
