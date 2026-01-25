import React from 'react'
import { motion } from 'framer-motion'

export function Resume() {
  return (
    <section className="py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-gray-900 mb-4">Experience</h2>
          <p className="text-xl text-gray-600">My professional and academic journey</p>
        </motion.div>

        <div className="space-y-16">
          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-8 border-b-4 border-gray-900 pb-2 inline-block">
              Education
            </h3>
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 flex gap-6">
                <div className="flex-shrink-0">
                  <img src="/images/stanford.png" alt="Stanford University" className="w-20 h-20 object-contain" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div>
                      <h4 className="text-2xl font-bold text-gray-900">Stanford University</h4>
                      <p className="text-lg text-gray-600 mt-1">3.6 GPA</p>
                    </div>
                    <p className="text-gray-600 mt-2 md:mt-0">September 2022 - June 2026</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-gray-800">
                      <span className="font-semibold">B.S.</span> — Design (AI + Digital User Experience)
                    </p>
                    <p className="text-gray-800 ml-8">Computer Science (Human-Computer Interaction)</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 flex gap-6">
                <div className="flex-shrink-0">
                  <img src="/images/longview-logo.png" alt="Longview High School" className="w-20 h-20 object-contain" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div>
                      <h4 className="text-2xl font-bold text-gray-900">Longview High School</h4>
                      <p className="text-lg text-gray-600 mt-1">5.4 Weighted GPA</p>
                    </div>
                    <p className="text-gray-600 mt-2 md:mt-0">August 2018 - May 2022</p>
                  </div>
                  <p className="text-gray-800">International Baccalaureate Diploma Programme</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Work Experience Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-8 border-b-4 border-gray-900 pb-2 inline-block">
              Work Experience
            </h3>
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 flex gap-6">
                <div className="flex-shrink-0">
                  <img src="/images/Summerall.avif" alt="Summerall Law" className="w-20 h-20 object-contain" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div>
                      <h4 className="text-2xl font-bold text-gray-900">Summerall Law</h4>
                      <p className="text-lg text-gray-600 mt-1">Software Development & Design Intern; San Francisco, California</p>
                    </div>
                    <p className="text-gray-600 mt-2 md:mt-0 whitespace-nowrap">June 2025 - September 2025</p>
                  </div>
                  <ul className="space-y-2 text-gray-700">
                  <li className="flex">
                    <span className="mr-3">•</span>
                    <span>Designed and launched a dynamic booking system that reduced scheduling errors by 30% over 4 weeks.</span>
                  </li>
                  <li className="flex">
                    <span className="mr-3">•</span>
                    <span>Developed a component-based design system for an estate management platform using Figma and React.</span>
                  </li>
                  <li className="flex">
                    <span className="mr-3">•</span>
                    <span>Employed rapid prototyping through Bolt.new and GitHub Copilot to accelerate design-to-development handoff.</span>
                  </li>
                </ul>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 flex gap-6">
                <div className="flex-shrink-0">
                  <img src="/images/stanford.png" alt="Stanford Computer Science" className="w-20 h-20 object-contain" />
                </div>
                <div className="flex-1">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h4 className="text-2xl font-bold text-gray-900">Stanford Computer Science</h4>
                    <p className="text-lg text-gray-600 mt-1">HCI/UX Researcher; Stanford, California</p>
                  </div>
                  <p className="text-gray-600 mt-2 md:mt-0 whitespace-nowrap">September 2024 - January 2025</p>
                </div>
                <p className="text-gray-700 mb-4">
                  Human-Computer Interaction research around audio-only computer interfacing.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex">
                    <span className="mr-3">•</span>
                    <span>Developed a context-based system for identifying and correcting proper noun recognition errors in voice-to-text transcribers.</span>
                  </li>
                  <li className="flex">
                    <span className="mr-3">•</span>
                    <span>Conducted and designed an IRB-approved scientific study, showing the research tool improved error detection rates by 68%.</span>
                  </li>
                </ul>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 flex gap-6">
                <div className="flex-shrink-0">
                  <img src="/images/IXXIA.png" alt="IXXIA Jewelry" className="w-20 h-20 object-contain" />
                </div>
                <div className="flex-1">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h4 className="text-2xl font-bold text-gray-900">IXXIA Jewelry</h4>
                    <p className="text-lg text-gray-600 mt-1">UI/UX Designer, Frontend Developer; Longview, Texas</p>
                  </div>
                  <p className="text-gray-600 mt-2 md:mt-0 whitespace-nowrap">September 2021 - December 2023</p>
                </div>
                <p className="text-gray-700 mb-4">
                  Luxury jewelry company with a mission to share happiness.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex">
                    <span className="mr-3">•</span>
                    <span>Redesigned IXXIA website, increasing customer conversions by 521%</span>
                  </li>
                  <li className="flex">
                    <span className="mr-3">•</span>
                    <span>Designed print materials for packaging and events, created content for social media using Figma and Photoshop.</span>
                  </li>
                </ul>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Leadership Experience Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-8 border-b-4 border-gray-900 pb-2 inline-block">
              Leadership Experience and Activities
            </h3>
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 flex gap-6">
                <div className="flex-shrink-0">
                  <img src="/images/stanford.png" alt="Stanford Class President" className="w-20 h-20 object-contain" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div>
                      <h4 className="text-2xl font-bold text-gray-900">Stanford Class President</h4>
                      <p className="text-lg text-gray-600 mt-1">Class of 2026; Stanford, California</p>
                    </div>
                    <p className="text-gray-600 mt-2 md:mt-0">May 2023 - Present</p>
                  </div>
                  <ul className="space-y-2 text-gray-700">
                  <li className="flex">
                    <span className="mr-3">•</span>
                    <span>Created comprehensive marketing collateral and organized events, securing 52% of the class vote in a competitive 4-way election.</span>
                  </li>
                  <li className="flex">
                    <span className="mr-3">•</span>
                    <span>Maximized the impact of $44,000 class budget, hosting 250% more events than preceding Junior Class Presidents.</span>
                  </li>
                </ul>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 flex gap-6">
                <div className="flex-shrink-0">
                  <img src="/images/TCP-logo.png" alt="The Cupid Project" className="w-20 h-20 object-contain" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div>
                      <h4 className="text-2xl font-bold text-gray-900">The Cupid Project</h4>
                      <p className="text-lg text-gray-600 mt-1">501(c)(3) Non-profit</p>
                    </div>
                    <p className="text-gray-600 mt-2 md:mt-0">January 2018 - Present</p>
                  </div>
                  <ul className="space-y-2 text-gray-700">
                  <li className="flex">
                    <span className="mr-3">•</span>
                    <span>Founded and digitally scaled a nonprofit focused on engaging GenZ in community service and reducing elderly loneliness.</span>
                  </li>
                  <li className="flex">
                    <span className="mr-3">•</span>
                    <span>Scaled volunteer base 1,250% through social media, uniting 44,000+ volunteers to deliver 150,000+ Valentine's Cards.</span>
                  </li>
                  <li className="flex">
                    <span className="mr-3">•</span>
                    <span>Designed and distributed marketing media with Figma, Photoshop, Illustrator, After Effects, Canva, GIMP, Procreate, Wix, & Shopify.</span>
                  </li>
                </ul>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 flex gap-6">
                <div className="flex-shrink-0">
                  <img src="/images/schiff.png" alt="Stanford Residential Assistant" className="w-20 h-20 object-contain" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div>
                      <h4 className="text-2xl font-bold text-gray-900">Residential Assistant</h4>
                      <p className="text-lg text-gray-600 mt-1">Freshman RA at Stanford's Schiff House</p>
                    </div>
                    <p className="text-gray-600 mt-2 md:mt-0">August 2025 - Present</p>
                  </div>
                  <ul className="space-y-2 text-gray-700">
                  <li className="flex">
                    <span className="mr-3">•</span>
                    <span>Memorized the names and faces of 90+ residents in order to foster a welcoming, inclusive environment as a mentor.</span>
                  </li>
                  <li className="flex">
                    <span className="mr-3">•</span>
                    <span>Managed bookkeeping, receipts, and payment card transactions while adhering to the house budget.</span>
                  </li>
                </ul>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 flex gap-6">
                <div className="flex-shrink-0">
                  <img src="/images/bsa-logo.jpg" alt="Boy Scouts of America" className="w-20 h-20 object-contain" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div>
                      <h4 className="text-2xl font-bold text-gray-900">Boy Scouts of America</h4>
                      <p className="text-lg text-gray-600 mt-1">Eagle Scout, Senior Patrol Leader</p>
                    </div>
                    <p className="text-gray-600 mt-2 md:mt-0">August 2016 - July 2022</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
