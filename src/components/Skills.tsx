'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { Palette, Monitor, Smartphone, Camera, PenTool, Users } from 'lucide-react'

const skills = [
  {
    icon: Palette,
    title: "Brand Identity",
    description: "Logo design, brand guidelines, and visual identity systems"
  },
  {
    icon: Monitor,
    title: "Web Design",
    description: "Responsive websites, UI/UX design, and user experience optimization"
  },
  {
    icon: Smartphone,
    title: "Mobile Design",
    description: "iOS and Android app interfaces, mobile-first design principles"
  },
  {
    icon: Camera,
    title: "Photography",
    description: "Product photography, lifestyle shots, and creative direction"
  },
  {
    icon: PenTool,
    title: "Illustration",
    description: "Digital illustrations, icons, and custom graphics"
  },
  {
    icon: Users,
    title: "User Research",
    description: "User interviews, persona development, and usability testing"
  }
]

export function Skills() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-6 text-gray-800">Skills & Expertise</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A versatile skill set developed through academic projects, internships, and personal exploration
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-center group"
            >
              <div className={`bg-gradient-to-br w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 ${
                index === 0 ? 'from-red-50 to-pink-50' :
                index === 1 ? 'from-blue-50 to-cyan-50' :
                index === 2 ? 'from-green-50 to-emerald-50' :
                index === 3 ? 'from-purple-50 to-violet-50' :
                index === 4 ? 'from-orange-50 to-amber-50' :
                'from-indigo-50 to-blue-50'
              }`}>
                <skill.icon className={`w-10 h-10 ${
                  index === 0 ? 'text-red-600' :
                  index === 1 ? 'text-blue-600' :
                  index === 2 ? 'text-green-600' :
                  index === 3 ? 'text-purple-600' :
                  index === 4 ? 'text-orange-600' :
                  'text-indigo-600'
                }`} />
              </div>
              <h3 className="text-xl mb-3 text-gray-800">{skill.title}</h3>
              <p className="text-gray-600 leading-relaxed">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}