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
      imageSrc: "/images/Canes.png",
      imageAlt: "Cane's logo",
    },
    {
      category: "Color",
      imageSrc: "/images/yellow.png",
      imageAlt: "Yellow color swatch",
    },
  ];

  // Data for the descriptive text banners
  const topBannerWords = [
    "Friend", "Researcher", "Innovator", "Designer", "Musician", "Leader", 
    "Problem-Solver", "Connector", "Builder", "Experimenter", "Storyteller", 
    "Optimist", "Achiever"
  ];
  
  const bottomBannerWords = [
    "Engineer", "Brother", "Artist", "Communicator", "Mentor", "Developer", 
    "Organizer", "Creator", "Thinker", "Programmer", "Advocate", "Doer"
  ];

  // Function to format banner text with adjustable spacing
  const formatBannerText = (words: string[], gapSize: number = 4, repeats: number = 3) => {
    // Repeat the words array multiple times for continuous scrolling
    const repeatedWords = Array(repeats).fill(words).flat();
    
    return repeatedWords.map((word, index) => (
      <span key={index}>
        {word}
        {index < repeatedWords.length - 1 && (
          <span style={{ margin: `0 ${gapSize * 0.5}rem` }}>•</span>
        )}
      </span>
    ));
  };

  const topBannerElements = formatBannerText(topBannerWords, 8, 4);
  const bottomBannerElements = formatBannerText(bottomBannerWords, 8, 4);

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
    <section id="about" className=" bg-transparent flex justify-center">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-full h-full relative overflow-hidden bg-black"
      >
        {/* Top banner text */}
        <div className="absolute top-2 left-0 right-0 bg-black overflow-hidden flex items-center font-bold font-wide">
          <motion.div 
            animate={{ x: [-2000, 2000] }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className="text-gray-300 text-lg font-extralight tracking-widest whitespace-nowrap flex items-center"
            style={{ fontStretch: 'expanded' }}
          >
            {topBannerElements}
          </motion.div>
        </div>

        {/* Main content container */}
        <div className="flex flex-col lg:flex-row h-full pt-12 gap-1">
          {/* Left side - Portrait section */}
          <motion.div 
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full lg:w-[40%] h-96 sm:h-[500px] md:h-[600px] lg:h-full flex flex-col overflow-hidden"
          >
            <div className="flex-1 relative">
              {/* Mobile and tablet - use wide image */}
              <img
                src="/images/headshot-wide.png"
                alt="Matthew Guck portrait"
                className="w-full h-full object-cover object-center z-20 block lg:hidden"
              />
              {/* Desktop - use regular headshot */}
              <img
                src="/images/headshot.jpg"
                alt="Matthew Guck portrait"
                className="w-full h-full object-cover z-20 hidden lg:block"
              />

              {/* Greeting text overlay - top left corner */}
              <div className="absolute top-6 left-6 z-40">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="text-left"
                >
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-1 drop-shadow-lg">Hi there! 👋 I'm</h3>
                  <h2 className="text-6xl md:text-6xl font-bold bg-gradient-to-r from-yellow-400 to-pink-600 bg-clip-text text-transparent leading-tight drop-shadow-lg">
                    Matthew Guck
                  </h2>
                </motion.div>
              </div>

              {/* Flag icons - moved up inside the image area */}
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-30">
                {flagIcons.map((flag, index) => (
                  <motion.div
                    key={index}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1.2 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                    className="p-1 bg-transparent"
                  >
                    <img src={flag.src} alt={flag.alt} className="h-30 w-15 -mb-12 object-contain" />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right side - Information section */}
          <motion.div 
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative w-full lg:w-[60%] flex-1 lg:h-full bg-gray-100 flex flex-col gap-1"
          >
            {/* Personal blurb section */}
            <div className="p-6">
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="bg-white p-6 rounded-xl shadow-md border border-gray-100"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                  {/* Left column - Personal intro (2/3 width) */}
                  <div className="md:col-span-2">
                    <motion.div
                      initial={{ x: -20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                    >
                      <p className="text-gray-700 leading-relaxed text-sm md:text-base mb-6 mx-3">
                        I'm a Junior studying Computer Science and Design at Stanford University. 🌲 I am the Stanford Class of 2026 President, and I love to create things— software, visuals, games, music, etc.
                      </p>

                      <div className="grid grid-cols-2  border-t items-center sm:grid-cols-1 sm:gap-0 md:grid-cols-2 md:-gap-100 lg:grid-cols-2 lg:gap-10 px-5">
                        <img src="/images/SCS.png" className="h-20 w-40 object-contain inline-block mx-2 mt-2" alt="Stanford University logo" />
                        <img src="/images/dschool.png" className="h-20 w-40 object-contain inline-block mx-2 mt-2 mb-6" alt="d.school logo" />
                      </div>
                    </motion.div>
                  </div>
                  
                </div>
              </motion.div>
            </div>

            {/* Favorites section */}
            <div className="flex-1 pb-16 px-6">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-gray-900 mb-4 text-center">
                My favorite...
              </h2>

              <div className="grid grid-cols-3 gap-4">
                {favorites.map((item, index) => (
                  <motion.div 
                    key={index}
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    className="flex flex-col w-full max-w-xs mx-auto"
                  >
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-2 text-center">
                      {item.category}
                    </h3>
                    <div className="relative w-full overflow-hidden rounded shadow-md bg-white border border-black" style={{ aspectRatio: '11/17' }}>
                      <img
                        src={item.imageSrc}
                        alt={item.imageAlt}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom banner text - positioned absolutely to span full width */}
        <div className="absolute bottom-0 p-2 left-0 right-0 bg-black overflow-hidden flex items-center z-10">
          <motion.div 
            animate={{ x: [2000, -2000] }}
            transition={{ duration: 55, repeat: Infinity, ease: "linear" }}
            className="text-gray-300 text-lg font-extralight tracking-widest whitespace-nowrap flex items-center"
            style={{ fontStretch: 'expanded' }}
          >
            {bottomBannerElements}
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
