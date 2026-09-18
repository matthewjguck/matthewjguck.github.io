import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowDown } from 'lucide-react';
import TextPressure from '../components/TextPressure';
import WarpText from '../components/WarpText';
import TextLoop from '../components/TextLoop';
import FuzzyText from '../components/FuzzyText';
import MaskedHeading from '../components/MaskedHeading';

export function Wisdom() {
  const handleBackToHome = () => {
    window.location.hash = '#/';
  };

  const wisdomData = [
    {
      quote: "Love Radically",
      author: "Matthew Guck",
      useShuffle: true
    },
    {
      quote: "Why kill two birds with one stone,\nwhen you could nourish two doves with one loaf?",
      author: "Matthew Guck",
      useWarp: true
    },
    {
      quote: "It's hard to choose kindness. Choose it anyways and always.",
      author: "Matthew Guck",
      useLoop: true
    },
    {
      quote: "Don't get pissy about free pizza.",
      author: "Matthew Guck",
      useMasked: true
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
          className="relative flex flex-col items-center justify-center"
          style={{ height: '66vh' }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex flex-col items-center">
            <h1 className="text-6xl md:text-7xl font-bold text-center">
              Matthew's Words of Wisdom
            </h1>
            <p className="text-xl text-gray-700 text-center max-w-3xl mx-auto px-4" style={{ marginTop: '4rem' }}>
              A collection of thoughts, quotes, and reflections that have shaped my perspective on life, work, and growth.
            </p>
          </div>
          <motion.div
            className="absolute bottom-8"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ArrowDown className="w-6 h-6 text-gray-600" />
          </motion.div>
        </motion.section>

        {/* Quotes */}
        <div className="relative">
          {wisdomData.map((item, idx) => (
            <motion.div
              key={idx}
              className="min-h-screen flex flex-col items-center px-4 relative"
              style={{ justifyContent: idx === 0 ? 'flex-end' : 'center' }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: '0px 0px -100px 0px' }}
            >
              {/* Quote - Shuffle, WarpText, TextPressure, TextLoop, or MaskedHeading */}
              <div style={{ width: item.useShuffle ? '40vw' : item.useLoop ? '50vw' : item.useWarp ? '50vw' : item.useMasked ? '60vw' : '40vw', height: item.useShuffle ? '5vh' : item.useLoop ? '5vh' : item.useWarp ? 'auto' : item.useMasked ? '35vh' : '200px', marginBottom: item.useShuffle || item.useWarp || item.useLoop || item.useMasked ? '0' : '2rem', marginTop: item.useShuffle || item.useWarp || item.useLoop || item.useMasked ? '0' : '0', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: item.useLoop ? '#DC143C' : item.useWarp ? '#000000' : 'transparent', borderRadius: item.useLoop ? '8px' : item.useWarp ? '0px' : item.useMasked ? '8px' : '0px', padding: item.useWarp ? '0.5rem 2rem' : item.useLoop ? '1rem' : item.useMasked ? '0' : '0', overflow: item.useMasked ? 'hidden' : 'visible' }}>
                {item.useShuffle ? (
                  <FuzzyText
                    color="#FF0000"
                    fontSize="clamp(1.5rem, 5vw, 3rem)"
                    fontWeight={700}
                    baseIntensity={0.15}
                    hoverIntensity={0.4}
                    fuzzRange={25}
                    enableHover={true}
                  >
                    {item.quote}
                  </FuzzyText>
                ) : item.useLoop ? (
                  <TextLoop
                    text={item.quote}
                    shape="line"
                    speed={60}
                    direction="reverse"
                    separator="•"
                    fontSize={32}
                    fontWeight={700}
                    color="#ffffff"
                    ribbon={false}
                    pauseOnHover={true}
                  />
                ) : item.useWarp ? (
                  <WarpText
                    text={item.quote}
                    color="#ffffff"
                    warpStrength={0.08}
                    warpScale={1.7}
                    speed={0.55}
                    pointerInfluence={0.42}
                    pointerStrength={0.38}
                    refraction={0.04}
                    ripple={true}
                    fontSize="50vw"
                    fontWeight={700}
                    lineHeight={1.2}
                  />
                ) : item.useMasked ? (
                  <MaskedHeading
                    text={item.quote}
                    src="https://images.unsplash.com/photo-1692737580547-b45bb4a02356?q=80&w=2115&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    fillScale={1.3}
                    parallax={34}
                    brightness={0.9}
                    saturation={1.15}
                    reveal="fade"
                    trigger="view"
                    weight={700}
                    textScale={0.12}
                    lineHeight={1.1}
                    style={{ color: '#fff' }}
                  />
                ) : (
                  <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <TextPressure
                      text={item.quote}
                      textColor="#000000"
                      weight={true}
                      width={true}
                      italic={true}
                      minFontSize={24}
                      containerHeight="200px"
                    />
                  </div>
                )}
              </div>

              {/* Author */}
              <p className="text-lg text-gray-600 font-semibold text-center" style={{ marginTop: '2rem', marginBottom: idx === 0 ? '2rem' : '0' }}>
                — {item.author}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
