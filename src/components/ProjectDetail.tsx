'use client'
import { motion } from 'framer-motion'
import { ArrowLeft, ExternalLink, Github, Calendar, MapPin, User, Award } from 'lucide-react'
import { ImageWithFallback } from './figma/ImageWithFallback'

interface ProjectDetailProps {
  project: {
    id: string
    title: string
    description: string
    image: string
    tags: string[]
    liveUrl?: string
    githubUrl?: string
    date?: string
    type?: string
    location?: string
    role?: string
    status?: string
    content?: string
    gallery?: string[]
    video?: string
    figmaEmbed?: string
  }
  onBack: () => void
}

export function ProjectDetail({ project, onBack }: ProjectDetailProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100"
    >
      {/* Hero Section */}
      <div className="relative overflow-hidden">
                {/* Enhanced gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-blue-700/10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 py-12">
          {/* Back Button */}
          <motion.button
            variants={itemVariants}
            onClick={onBack}
            className="group flex items-center gap-3 text-gray-600 hover:text-gray-900 mb-8 transition-all duration-300"
            whileHover={{ x: -5 }}
          >
            <div className="p-2 rounded-full bg-white shadow-lg group-hover:shadow-xl transition-shadow">
              <ArrowLeft className="w-5 h-5" />
            </div>
            <span className="font-medium">Back to Portfolio</span>
          </motion.button>

          {/* Project Header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <motion.div variants={itemVariants} className="space-y-6">
                {/* Status Badge */}
                {project.status && (
                  <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-medium">
                    <Award className="w-4 h-4" />
                    {project.status}
                  </div>
                )}

                {/* Title */}
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                  {project.title}
                </h1>

                {/* Description */}
                <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                  {project.description}
                </p>

                {/* Meta Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-6">
                  {project.date && (
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-blue-50 rounded-lg">
                        <Calendar className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-500">Date</p>
                        <p className="text-gray-900">{project.date}</p>
                      </div>
                    </div>
                  )}

                  {project.type && (
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-purple-50 rounded-lg">
                        <Award className="w-5 h-5 text-purple-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-500">Type</p>
                        <p className="text-gray-900">{project.type}</p>
                      </div>
                    </div>
                  )}

                  {project.location && (
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-green-50 rounded-lg">
                        <MapPin className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-500">Location</p>
                        <p className="text-gray-900">{project.location}</p>
                      </div>
                    </div>
                  )}

                  {project.role && (
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-orange-50 rounded-lg">
                        <User className="w-5 h-5 text-orange-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-500">Role</p>
                        <p className="text-gray-900">{project.role}</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4">
                  {project.liveUrl && project.liveUrl !== "#" && (
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span className="font-medium">View Live</span>
                    </motion.a>
                  )}

                  {project.githubUrl && project.githubUrl !== "#" && (
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Github className="w-4 h-4" />
                      <span className="font-medium">GitHub</span>
                    </motion.a>
                  )}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-3 pt-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-white text-gray-700 px-4 py-2 rounded-lg text-sm font-medium border border-gray-200 shadow-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Hero Image */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-5"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-blue-600/20 rounded-3xl blur-3xl pointer-events-none" />
                <div className="relative bg-white rounded-3xl shadow-lg overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="max-w-7xl mx-auto px-4 py-16 space-y-20">
        {/* Project Description */}
        {project.content && (
          <motion.section
            variants={itemVariants}
            className="relative"
          >
            <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-8 md:p-12 shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-blue-700/10 rounded-3xl pointer-events-none" />
              <div className="relative">
                <h2 className="text-3xl font-bold text-white mb-8">Project Overview</h2>
                <div 
                  className="prose prose-lg prose-invert max-w-none text-gray-100 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: project.content }}
                />
              </div>
            </div>
          </motion.section>
        )}

        {/* Video Section */}
        {project.video && (
          <motion.section
            variants={itemVariants}
            className="space-y-8"
          >
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Demo Video</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Watch the project in action and see how it works
              </p>
            </div>
            <div className="relative max-w-5xl mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-blue-600/20 rounded-3xl blur-2xl pointer-events-none" />
              <div className="relative bg-white rounded-3xl shadow-lg overflow-hidden">
                <div className="aspect-video">
                  <iframe
                    src={project.video}
                    frameBorder="0"
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </motion.section>
        )}

        {/* Figma Prototype */}
        {project.figmaEmbed && (
          <motion.section
            variants={itemVariants}
            className="space-y-8"
          >
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Interactive Prototype</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Explore the interactive design and user experience
              </p>
            </div>
            <div className="relative max-w-6xl mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-blue-600/20 rounded-3xl blur-2xl pointer-events-none" />
              <div className="relative bg-white rounded-3xl shadow-lg overflow-hidden p-8">
                <div className="aspect-video rounded-2xl overflow-hidden">
                  <iframe
                    src={project.figmaEmbed}
                    className="w-full h-full border-0"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </motion.section>
        )}

        {/* Gallery Section with custom layouts */}
        {project.gallery && project.gallery.length > 0 && (
          <motion.section
            variants={itemVariants}
            className="space-y-8"
          >
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Gallery</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Detailed views and additional project screenshots
              </p>
            </div>
            
            {/* Create different layouts based on project type */}
            {project.id === 'ekg' ? (
              /* EKG specific layout */
              <div className="space-y-16">
                {/* Problem Section */}
                <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl p-8 md:p-12">
                  <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">The Problem</h3>
                  <div className="max-w-4xl mx-auto">
                    <ImageWithFallback
                      src="/images/Problem.png"
                      alt="Problem definition"
                      className="w-full rounded-2xl shadow-lg"
                    />
                  </div>
                </div>

                {/* Needfinding Section */}
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 md:p-12">
                  <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Needfinding</h3>
                  <div className="max-w-4xl mx-auto">
                    <ImageWithFallback
                      src="/images/Needfinding EKG.png"
                      alt="Needfinding research"
                      className="w-full rounded-2xl shadow-lg"
                    />
                  </div>
                </div>

                {/* Prototyping Section */}
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12">
                  <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Prototyping and Testing</h3>
                  <div className="space-y-8 max-w-4xl mx-auto">
                    <p className="text-lg text-gray-700 text-center">
                      We prototyped potential ways to enable students to share information with their teachers.
                    </p>
                    <div className="grid gap-8">
                      <ImageWithFallback
                        src="/images/Proto.png"
                        alt="Prototype designs"
                        className="w-full rounded-2xl shadow-lg"
                      />
                      <ImageWithFallback
                        src="/images/ProtoResult.png"
                        alt="Prototype results"
                        className="w-full rounded-2xl shadow-lg"
                      />
                    </div>
                  </div>
                </div>

                {/* Solution Section */}
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 md:p-12">
                  <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Solution: E.K.G.</h3>
                  <div className="space-y-8 max-w-5xl mx-auto">
                    <ImageWithFallback
                      src="/images/EKG Poster.png"
                      alt="EKG Poster"
                      className="w-full rounded-2xl shadow-lg"
                    />
                  </div>
                </div>

                {/* UI Designs */}
                <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-3xl p-8 md:p-12">
                  <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">UI Designs</h3>
                  <div className="max-w-4xl mx-auto">
                    <ImageWithFallback
                      src="/images/EKGUI.png"
                      alt="EKG UI Design"
                      className="w-full rounded-2xl shadow-lg"
                    />
                  </div>
                </div>
              </div>
            ) : project.id === 'daycare' ? (
              /* Diabetic Daycare specific layout */
              <div className="space-y-16">
                {/* Challenge Section */}
                <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl p-8 md:p-12">
                  <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">The Challenge</h3>
                  <div className="max-w-4xl mx-auto space-y-6">
                    <p className="text-lg text-gray-700 text-center">
                      Friends and family of diabetics often do not understand the basics of diabetes management.
                    </p>
                    <ImageWithFallback
                      src="/images/Challenges Diabetes.png"
                      alt="Diabetes Challenges"
                      className="w-full rounded-2xl shadow-lg"
                    />
                  </div>
                </div>

                {/* Goal Section */}
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 md:p-12">
                  <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Goal</h3>
                  <div className="max-w-4xl mx-auto space-y-6">
                    <p className="text-lg text-gray-700 text-center">
                      An educational point-and-click babysitting simulator that can teach non-diabetics about carb counting, insulin therapy, and the dangerous health consequences of blood sugar mismanagement.
                    </p>
                    <ImageWithFallback
                      src="/images/FINAL GAME POINTER.png"
                      alt="Final Game"
                      className="w-full rounded-2xl shadow-lg"
                    />
                  </div>
                </div>

                {/* Milestone Section */}
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12">
                  <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Milestone 1: Text-based Prototype</h3>
                  <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-8 items-center">
                    <div>
                      <ImageWithFallback
                        src="/images/Diabetic Daycare - Terminal.png"
                        alt="Terminal prototype"
                        className="w-full rounded-2xl shadow-lg"
                      />
                    </div>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">During this stage of development:</h4>
                        <ul className="text-gray-700 space-y-1">
                          <li>• Text-only terminal interface</li>
                          <li>• Can only consume carbs in 30g increments</li>
                          <li>• Can only inject insulin in 3 unit increments</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Model Design */}
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 md:p-12">
                  <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Designing the Model</h3>
                  <div className="max-w-4xl mx-auto space-y-6">
                    <p className="text-gray-700 leading-relaxed">
                      This model leverages Gaussian distributions to simulate the absorption rates of both insulin and carbohydrates. 
                      Carbohydrate absorption is variable, peaking between 30 to 120 minutes based on the glycemic index and complexity of the food. 
                      Simple carbohydrates are absorbed rapidly, while complex carbohydrates exhibit delayed peaks. Insulin absorption, by contrast, 
                      is more consistent, reaching its peak effectiveness at approximately 120 minutes post-injection.
                    </p>
                    <ImageWithFallback
                      src="/images/Bell Curve.png"
                      alt="Bell Curve Model"
                      className="w-full rounded-2xl shadow-lg"
                    />
                  </div>
                </div>

                {/* Game Summary */}
                <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-3xl p-8 md:p-12">
                  <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Game Summary</h3>
                  <div className="max-w-4xl mx-auto">
                    <ImageWithFallback
                      src="/images/Game Summarry.png"
                      alt="Game Summary"
                      className="w-full rounded-2xl shadow-lg"
                    />
                  </div>
                </div>
              </div>
            ) : project.id === 'engauge' ? (
              /* EnGauge specific layout */
              <div className="space-y-16">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 md:p-12">
                  <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Design Process</h3>
                  <div className="max-w-5xl mx-auto space-y-8">
                    <ImageWithFallback
                      src="/images/EnGauge Spread.png"
                      alt="EnGauge Design Spread"
                      className="w-full rounded-2xl shadow-lg"
                    />
                  </div>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 md:p-12">
                  <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Application Screens</h3>
                  <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[1, 2, 3, 4, 5, 6, 7].map((num) => (
                      <motion.div 
                        key={num} 
                        className="bg-white rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all duration-300"
                        whileHover={{ scale: 1.02 }}
                      >
                        <ImageWithFallback
                          src={`/images/Final${num}.png`}
                          alt={`EnGauge screen ${num}`}
                          className="w-full rounded-xl"
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12">
                  <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Report</h3>
                  <div className="max-w-4xl mx-auto">
                    <ImageWithFallback
                      src="/images/Engauge Report.png"
                      alt="EnGauge Report"
                      className="w-full rounded-2xl shadow-lg"
                    />
                  </div>
                </div>
              </div>
            ) : project.id === 'sustainability' ? (
              /* Sustainability specific layout */
              <div className="space-y-8">
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12">
                  <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Design Proposals</h3>
                  <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {project.gallery.map((image, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                        whileHover={{ scale: 1.02 }}
                      >
                        <ImageWithFallback
                          src={image}
                          alt={`Sustainability proposal ${index + 1}`}
                          className="w-full rounded-xl"
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            ) : project.id === 'ontype1' ? (
              /* OnType1 specific layout */
              <div className="space-y-16">
                <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-3xl p-8 md:p-12">
                  <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Digital Art Series</h3>
                  <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {project.gallery.map((image, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                        whileHover={{ scale: 1.02 }}
                      >
                        <ImageWithFallback
                          src={image}
                          alt={`OnType1 art ${index + 1}`}
                          className="w-full rounded-xl"
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 md:p-12">
                  <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Featured Designs</h3>
                  <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
                    <motion.div 
                      className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                      whileHover={{ scale: 1.02 }}
                    >
                      <ImageWithFallback
                        src="/images/Accesible Design.png"
                        alt="Accessible Design"
                        className="w-full rounded-xl"
                      />
                    </motion.div>
                    <motion.div 
                      className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                      whileHover={{ scale: 1.02 }}
                    >
                      <ImageWithFallback
                        src="/images/Diet Coke.png"
                        alt="Diet Coke Design"
                        className="w-full rounded-xl"
                      />
                    </motion.div>
                  </div>
                </div>
              </div>
            ) : project.id === 'slatt' ? (
              /* SLATT specific layout */
              <div className="space-y-16">
                <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-3xl p-8 md:p-12">
                  <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Application Screenshots</h3>
                  <div className="space-y-8 max-w-4xl mx-auto">
                    {project.gallery.map((image, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                        whileHover={{ scale: 1.01 }}
                      >
                        <ImageWithFallback
                          src={image}
                          alt={`SLATT screenshot ${index + 1}`}
                          className="w-full rounded-xl"
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            ) : project.id === 'nab3d' ? (
              /* Nab 3D specific layout */
              <div className="space-y-16">
                <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-3xl p-8 md:p-12">
                  <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">3D Modeling Process</h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {project.gallery.map((image, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                        whileHover={{ scale: 1.02 }}
                      >
                        <ImageWithFallback
                          src={image}
                          alt={`Nab 3D model ${index + 1}`}
                          className="w-full rounded-xl"
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            ) : project.id === 'skyhigh' ? (
              /* Sky High specific layout */
              <div className="space-y-16">
                <div className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-3xl p-8 md:p-12">
                  <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Game Development</h3>
                  <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {project.gallery.map((image, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                        whileHover={{ scale: 1.02 }}
                      >
                        <ImageWithFallback
                          src={image}
                          alt={`Sky High game ${index + 1}`}
                          className="w-full rounded-xl"
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            ) : project.id === 'cupid' ? (
              /* Cupid Project specific layout */
              <div className="space-y-16">
                <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-3xl p-8 md:p-12">
                  <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Design Elements</h3>
                  <div className="space-y-8 max-w-5xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-8">
                      <motion.div 
                        className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                        whileHover={{ scale: 1.02 }}
                      >
                        <ImageWithFallback
                          src="/images/Cupid Project Logo HD.png"
                          alt="Cupid Project Logo"
                          className="w-full rounded-xl"
                        />
                      </motion.div>
                      <motion.div 
                        className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                        whileHover={{ scale: 1.02 }}
                      >
                        <ImageWithFallback
                          src="/images/Cupid Project Side By Side Logo.png"
                          alt="Cupid Project Side by Side Logo"
                          className="w-full rounded-xl"
                        />
                      </motion.div>
                    </div>
                    {project.gallery.map((image, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                        whileHover={{ scale: 1.01 }}
                      >
                        <ImageWithFallback
                          src={image}
                          alt={`Cupid Project design ${index + 1}`}
                          className="w-full rounded-xl"
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            ) : project.id === 'vending' ? (
              /* Virtual Vending specific layout */
              <div className="space-y-16">
                <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-3xl p-8 md:p-12">
                  <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Virtual Reality Experience</h3>
                  <div className="max-w-4xl mx-auto space-y-8">
                    <motion.div 
                      className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                      whileHover={{ scale: 1.01 }}
                    >
                      <ImageWithFallback
                        src="/images/Virtual Vending.png"
                        alt="Virtual Vending Machine"
                        className="w-full rounded-xl"
                      />
                    </motion.div>
                    {project.gallery.map((image, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                        whileHover={{ scale: 1.01 }}
                      >
                        <ImageWithFallback
                          src={image}
                          alt={`Virtual Vending ${index + 1}`}
                          className="w-full rounded-xl"
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              /* Default gallery layout */
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {project.gallery.map((image, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-500"
                    whileHover={{ scale: 1.02 }}
                  >
                    <ImageWithFallback
                      src={image}
                      alt={`${project.title} gallery ${index + 1}`}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </motion.div>
                ))}
              </div>
            )}
          </motion.section>
        )}

        {/* Call to Action */}
        <motion.section
          variants={itemVariants}
          className="text-center py-16"
        >
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl p-12 text-white">
            <h2 className="text-3xl font-bold mb-4">Interested in Learning More?</h2>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Feel free to reach out if you'd like to discuss this project or explore potential collaborations.
            </p>
            <motion.button
              onClick={onBack}
              className="bg-white text-blue-600 px-8 py-3 rounded-xl font-medium hover:bg-gray-100 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View More Projects
            </motion.button>
          </div>
        </motion.section>
      </div>
    </motion.div>
  )
}
