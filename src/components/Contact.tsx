'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Linkedin, Instagram, Download } from 'lucide-react'

export function Contact() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-purple-900 via-blue-900 to-pink-900 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl mb-6">Let's Create Something Amazing</h2>
          <p className="text-xl text-gray-200 mb-12 max-w-2xl mx-auto">
            I'm actively seeking design opportunities where I can contribute fresh ideas and grow as a creative professional.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <motion.a
            href="mailto:matthewjguck@gmail.com"
            className="bg-white text-gray-800 px-8 py-3 rounded-full hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Mail className="w-5 h-5" />
            Get In Touch
          </motion.a>
          
          <motion.button
            onClick={() => {
              // For now, just scroll to top. You can replace this with actual resume download
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-gray-800 transition-all duration-300 inline-flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Download className="w-5 h-5" />
            Download Resume
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex justify-center gap-6"
        >
          <motion.a
            href="https://linkedin.com/in/matthewjguck"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white bg-opacity-20 p-3 rounded-full hover:bg-opacity-30 transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Linkedin className="w-6 h-6" />
          </motion.a>
          
          <motion.a
            href="https://instagram.com/matthewjguck"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white bg-opacity-20 p-3 rounded-full hover:bg-opacity-30 transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Instagram className="w-6 h-6" />
          </motion.a>
          
          <motion.a
            href="mailto:matthewjguck@gmail.com"
            className="bg-white bg-opacity-20 p-3 rounded-full hover:bg-opacity-30 transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Mail className="w-6 h-6" />
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 pt-8 border-t border-white border-opacity-20"
        >
          <p className="text-gray-300">© 2025 Matthew Guck. Designed with passion and coffee ☕</p>
        </motion.div>
      </div>
    </section>
  )
}