import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function WisdomTeaser() {
  const handleNavigateToWisdom = () => {
    window.location.hash = '#/wisdom';
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="h-screen md:h-[5vh] bg-black text-white flex items-center justify-center px-4 cursor-pointer hover:bg-gray-900 transition-colors duration-300"
      onClick={handleNavigateToWisdom}
    >
      <div className="flex items-center justify-center gap-4 w-full max-w-6xl mx-auto group">
        <h2 className="text-3xl md:text-4xl font-bold">
          Matthew's Words of Wisdom
        </h2>
        <ArrowRight className="w-8 h-8 md:w-10 md:h-10 group-hover:translate-x-2 transition-transform duration-300" />
      </div>
    </motion.section>
  );
}
