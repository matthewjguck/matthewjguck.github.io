import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import TextPressure from '../components/TextPressure';
import WarpText from '../components/WarpText';

export function Wisdom() {
  const handleBackToHome = () => {
    window.location.hash = '#/';
  };

  const wisdomData = [
    {
      quote: "Why kill two birds with one stone, when you could nourish two doves with one loaf?",
      author: "Matthew Guck",
      useWarp: true
    },
    {
      quote: "The best time to plant a tree was 20 years ago. The second best time is now.",
      author: "Chinese Proverb"
    },
    {
      quote: "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
      author: "Maya Angelou"
    },
    {
      quote: "The only way to do great work is to love what you do.",
      author: "Steve Jobs"
    },
    {
      quote: "You miss 100% of the shots you don't take.",
      author: "Wayne Gretzky"
    },
    {
      quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
      author: "Nelson Mandela"
    },
    {
      quote: "The way to get started is to quit talking and begin doing.",
      author: "Walt Disney"
    },
    {
      quote: "In the middle of difficulty lies opportunity.",
      author: "Albert Einstein"
    },
    {
      quote: "You are never too old to set another goal or to dream a new dream.",
      author: "C.S. Lewis"
    },
    {
      quote: "Life is what happens when you're busy making other plans.",
      author: "John Lennon"
    }
  ];

  return (
    <div className="min-h-screen bg-white text-black relative pb-16">
      {/* Light Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-gray-50" />

      {/* Content */}
      <div className="relative z-10">
        {/* Back Button */}
        <div className="container mx-auto px-4 pt-8">
          <motion.button
            onClick={handleBackToHome}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/80 hover:bg-gray-100/80 border border-gray-300 rounded-full text-black transition-all duration-200 group shadow-lg hover:shadow-xl font-medium backdrop-blur-sm"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform duration-200" />
            Back to Home
          </motion.button>
        </div>

        {/* Header */}
        <motion.section
          className="relative h-96 flex flex-col items-center justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl md:text-7xl font-bold text-center mb-6">
            Matthew's Words of Wisdom
          </h1>
          <p className="text-xl text-gray-700 text-center max-w-3xl mx-auto px-4">
            A collection of thoughts, quotes, and reflections that have shaped my perspective on life, work, and growth.
          </p>
        </motion.section>

        {/* Quotes */}
        <div className="relative">
          {wisdomData.map((item, idx) => (
            <motion.div
              key={idx}
              className="min-h-screen flex flex-col items-center justify-center px-4 relative"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: '0px 0px -100px 0px' }}
            >
              {/* Quote - WarpText or TextPressure */}
              <div style={{ width: '100%', height: '200px', marginBottom: '2rem' }}>
                {item.useWarp ? (
                  <WarpText
                    text={item.quote}
                    color="#000000"
                    warpStrength={0.08}
                    warpScale={1.7}
                    speed={0.55}
                    pointerInfluence={0.42}
                    pointerStrength={0.38}
                    refraction={0.018}
                    ripple={true}
                    fontSize="clamp(2rem, 6vw, 4rem)"
                    fontWeight={700}
                    lineHeight={1.2}
                  />
                ) : (
                  <TextPressure
                    text={item.quote}
                    textColor="#000000"
                    weight={true}
                    width={true}
                    italic={true}
                    minFontSize={24}
                    containerHeight="120px"
                  />
                )}
              </div>

              {/* Author */}
              <p className="text-lg text-gray-600 font-semibold text-center">
                — {item.author}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
