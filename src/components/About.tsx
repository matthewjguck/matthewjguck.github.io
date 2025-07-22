import React from 'react'
import { motion } from 'framer-motion'

export function About() {
  // Data for the role cards
  const roleCards = [
    {
      title: "Junior Class President",
      bgColor: "bg-gradient-to-r from-gray-700 to-gray-900",
      textColor: "text-white",
      logoSrc: "/images/LIFT (15).png",
      logoAlt: "Stanford L.I.F.T."
    },
    {
      title: "Non-Profit Founder",
      bgColor: "bg-gradient-to-r from-red-500 to-red-700",
      textColor: "text-white", 
      logoSrc: "/images/Cupid Project Logo HD.png",
      logoAlt: "The Cupid Project"
    },
    {
      title: "Type 1 Diabetic",
      bgColor: "bg-gradient-to-r from-blue-500 to-blue-700",
      textColor: "text-white",
      logoSrc: "/images/Cookie.png",
      logoAlt: "Type 1 Diabetic"
    },
  ];

  // Data for favorite items
  const favorites = [
    {
      category: "Soda",
      imageSrc: "/images/Diet Coke.png",
      imageAlt: "Diet Coke can",
    },
    {
      category: "Restaurant", 
      imageSrc: "/images/canes.png",
      imageAlt: "Cane's logo",
    },
    {
      category: "People",
      imageSrc: "/images/family.webp",
      imageAlt: "Group photo of friends and family",
    },
  ];

  // Data for the descriptive text banners
  const topBannerText =
    "Friend • Researcher • Innovator • Designer • Musician • Leader • Problem-Solver • Connector • Builder • Experimenter • Storyteller • Optimist • Achiever";
  const bottomBannerText =
    "Engineer • Brother • Artist • Communicator • Mentor • Developer • Organizer • Creator • Thinker • Programmer • Advocate • Doer";

  // Flag icons data (using actual flag images)
  const flagIcons = [
    { alt: "Texas flag", src: "/images/texas-flag.png" },
    { alt: "California flag", src: "/images/california-flag.png" },
    { alt: "Pride flag", src: "/images/pride-flag.png" }, 
    { alt: "Philippines flag", src: "/images/philippines-flag.png" },
    { alt: "Germany flag", src: "/images/germany-flag.png" },
    { alt: "USA flag", src: "/images/usa-flag.png" },
  ];

  return (
    <section id="about" className="py-20 bg-transparent flex justify-center">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-7xl h-[792px] relative overflow-hidden bg-white/10 backdrop-blur-sm"
      >
        {/* Top banner text */}
        <div className="absolute top-0 left-0 right-0 py-2 bg-transparent overflow-hidden">
          <motion.p 
            animate={{ x: [-1000, 1000] }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            className="text-gray-600 text-sm font-normal whitespace-nowrap"
          >
            {topBannerText}
          </motion.p>
        </div>

        {/* Main content container */}
        <div className="flex h-full pt-8">
          {/* Left side - Portrait section */}
          <motion.div 
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-[40%] h-full bg-black flex flex-col justify-between"
          >
            <div className="flex-1 flex flex-col justify-center items-center p-8">
              <div className="w-full h-[60%] relative">
                <img
                  src="/images/headshot.jpg"
                  alt="Matthew Guck portrait"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <h1 className="text-white text-6xl lg:text-7xl font-medium text-center leading-tight tracking-wide">
                    Matthew
                    <br />
                    Guck
                  </h1>
                </div>
              </div>
            </div>

            {/* Flag icons */}
            <div className="flex justify-center gap-2 mb-4">
              {flagIcons.map((flag, index) => (
                <motion.div
                  key={index}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                  className="p-1 bg-transparent border border-white rounded"
                >
                  <img src={flag.src} alt={flag.alt} className="h-5 w-8 object-cover" />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right side - Information section */}
          <motion.div 
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative w-[60%] h-full bg-gray-100 flex flex-col"
          >
            {/* Favorites section */}
            <div className="p-6">
              <h2 className="text-4xl font-medium text-gray-900 mb-4">
                My favorite...
              </h2>

              <div className="grid grid-cols-3 gap-4">
                {favorites.map((item, index) => (
                  <motion.div 
                    key={index}
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    className="flex flex-col"
                  >
                    <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                      {item.category}
                    </h3>
                    <div className="overflow-hidden h-[200px] rounded shadow-md bg-white">
                      <img
                        src={item.imageSrc}
                        alt={item.imageAlt}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="bg-black h-1.5 my-2" />

            {/* Personal blurb section */}
            <div className="flex-1 p-6 flex flex-col justify-center">
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="space-y-6"
              >
                <div className="text-center lg:text-left">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Matthew Guck</h3>
                  <p className="text-lg text-gray-600 mb-4">
                    Stanford University • Design & Computer Science
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Originally from Longview, Texas, I'm currently pursuing a degree that bridges the 
                    gap between beautiful design and powerful technology. My work focuses on creating 
                    digital experiences that not only look great but also solve real problems and 
                    improve people's lives.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl border border-blue-100">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    🏆 Recognition & Impact
                  </h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span>"Greatest Societal Impact" Award - Stanford CS147 Expo</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span>"Best Beginner Hack" - TreeHacks 2024 (1,600+ participants)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span>The Cupid Project: 7+ years of community service</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span>Type 1 diabetes advocate and educator</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Personal Mission</h4>
                  <p className="text-gray-700 leading-relaxed">
                    I believe technology should be a force for good. Whether I'm developing educational 
                    games for diabetes awareness, creating tools to help teachers connect with students, 
                    or organizing community service projects, my goal is always the same: to use my skills 
                    to make a positive impact in people's lives.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Bottom banner text */}
            <div className="bg-black py-2 mt-auto">
              <motion.p 
                animate={{ x: [1000, -1000] }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="text-gray-500 text-sm font-normal whitespace-nowrap"
              >
                {bottomBannerText}
              </motion.p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
