import React from 'react';

export default function Slatt() {
  return (
    <div className="space-y-16 max-w-7xl mx-auto px-4 py-20">
      {/* Hero Section */}
      <section className="text-center">
        <div className="inline-flex items-center bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
          🎵 Personal Project
        </div>
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Spotify Language Acquisition Translation Tool</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Inspired while studying Spanish at Stanford, I built this tool to help my own language learning by making it easier to understand and enjoy music lyrics in different languages on Spotify.
        </p>
      </section>

      {/* The Concept */}
      <section className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">The Concept</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            SLATT combines music discovery with language learning by providing real-time lyric translation 
            for Spotify tracks. The tool integrates multiple APIs to fetch lyrics and translate them 
            as songs play, making foreign language music more accessible.
          </p>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-gray-900 to-green-900 rounded-2xl p-8 text-white">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-gray-400 ml-2">SLATT Architecture</span>
              </div>
              <div className="space-y-4 font-mono text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-green-400">🎵</span>
                  <span className="text-blue-400">Spotify API</span>
                  <span className="text-gray-400">→ Track Detection</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-yellow-400">🎤</span>
                  <span className="text-purple-400">Genius API</span>
                  <span className="text-gray-400">→ Lyric Fetching</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-red-400">🔄</span>
                  <span className="text-orange-400">LibreTranslate</span>
                  <span className="text-gray-400">→ Translation</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-cyan-400">🐍</span>
                  <span className="text-pink-400">Python Backend</span>
                  <span className="text-gray-400">→ Coordination</span>
                </div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium">
              Tech Stack
            </div>
          </div>
        </div>
        <div className="relative">
          <img src="/images/slatt1.png" alt="SLATT Interface" className="w-full rounded-2xl shadow-lg" />
          <div className="absolute -top-4 -left-4 bg-purple-500 text-white px-4 py-2 rounded-full text-sm font-medium">
            Interface Preview
          </div>
        </div>
      </section>
    </div>
  );
}
