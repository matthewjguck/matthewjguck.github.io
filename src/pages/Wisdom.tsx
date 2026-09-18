import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

export function Wisdom() {
  const handleBackToHome = () => {
    window.location.hash = '#/';
  };

  const wisdomData = [
    {
      quote: "The best time to plant a tree was 20 years ago. The second best time is now.",
      author: "Chinese Proverb",
      category: "Growth"
    },
    {
      quote: "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
      author: "Maya Angelou",
      category: "Impact"
    },
    {
      quote: "The only way to do great work is to love what you do.",
      author: "Steve Jobs",
      category: "Passion"
    },
    {
      quote: "You miss 100% of the shots you don't take.",
      author: "Wayne Gretzky",
      category: "Courage"
    },
    {
      quote: "Everything you want is on the other side of fear.",
      author: "Jack Canfield",
      category: "Courage"
    },
    {
      quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
      author: "Nelson Mandela",
      category: "Resilience"
    },
    {
      quote: "The way to get started is to quit talking and begin doing.",
      author: "Walt Disney",
      category: "Action"
    },
    {
      quote: "In the middle of difficulty lies opportunity.",
      author: "Albert Einstein",
      category: "Perspective"
    },
    {
      quote: "You are never too old to set another goal or to dream a new dream.",
      author: "C.S. Lewis",
      category: "Growth"
    },
    {
      quote: "Life is what happens when you're busy making other plans.",
      author: "John Lennon",
      category: "Perspective"
    },
    {
      quote: "The only impossible journey is the one you never begin.",
      author: "Tony Robbins",
      category: "Action"
    },
    {
      quote: "Don't watch the clock; do what it does. Keep going.",
      author: "Sam Levenson",
      category: "Persistence"
    }
  ];

  const categories = Array.from(new Set(wisdomData.map(item => item.category)));

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

        {/* Quotes Grid */}
        {categories.map((category, catIdx) => (
          <motion.section
            key={category}
            className="container mx-auto px-4 mb-24"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-semibold mb-12 text-black text-center">{category}</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {wisdomData
                .filter(item => item.category === category)
                .map((item, idx) => (
                  <motion.div
                    key={idx}
                    className="bg-white rounded-2xl p-8 shadow-md border border-gray-200 hover:shadow-xl transition-shadow duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <p className="text-lg md:text-xl font-medium text-gray-900 mb-6 leading-relaxed">
                      "{item.quote}"
                    </p>
                    <p className="text-gray-600 font-semibold text-right">
                      — {item.author}
                    </p>
                  </motion.div>
                ))}
            </div>
          </motion.section>
        ))}
      </div>
    </div>
  );
}
