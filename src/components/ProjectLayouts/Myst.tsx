import React from 'react';

export default function Myst() {
  return (
    <div className="space-y-12 max-w-7xl mx-auto px-4 py-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-8 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/background.png" 
            alt="Background" 
            className="w-full h-full object-cover"
            style={{
              maskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0) 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0) 100%)'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/0 to-transparent"></div>
        </div>
        
        <div className="relative z-10 -top-3 text-center mb-10 text-white font-medium text-3xl">
          Myst
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 mb-1 items-start relative z-10">
          <div className="lg:col-span-2 space-y-6 relative">
            <div className="absolute -top-7 left-1/2 transform -translate-x-1/2 bg-purple-100 text-purple-600 px-16 py-2 rounded-full text-base font-semibold z-10 shadow-lg">
              Project Overview
            </div>
            
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-white/20 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Breaking Echo Chambers with AI</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Myst is a Chrome Extension that analyzes content in real-time using Vision-Language Models. It provides insights into your media consumption patterns 
                without storing personal data, helping you become more aware of potential bias in your information diet.
              </p>
              <div className="flex items-center gap-2 text-sm text-purple-600 font-medium">
                <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                Real-time analysis • Privacy-first • Zero data storage
              </div>
            </div>

            {/* Alignment Indicators */}
            <div className="mb-6">
              <h4 className="text-lg font-medium text-gray-900 mb-4 text-center">Myst tracks these 4 alignment indicators to give you a better idea where you lean</h4>
              <div className="grid grid-cols-4 gap-3">
                <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-xl p-4 text-center shadow-lg border border-red-400/20">
                  <h5 className="font-bold text-white text-sm">Political Alignment</h5>
                </div>
                <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-4 text-center shadow-lg border border-green-400/20">
                  <h5 className="font-bold text-white text-sm">Economic Alignment</h5>
                </div>
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-4 text-center shadow-lg border border-blue-400/20">
                  <h5 className="font-bold text-white text-sm">Educational Value</h5>
                </div>
                <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-4 text-center shadow-lg border border-purple-400/20">
                  <h5 className="font-bold text-white text-sm">Tonal Alignment</h5>
                </div>
              </div>
            </div>
          </div>
          
          {/* Demo */}
          <div className="space-y-4 relative">
            <div className="absolute -top-7 left-1/2 transform -translate-x-1/2 bg-indigo-100 text-indigo-600 px-8 py-2 rounded-full text-base font-semibold z-10 shadow-lg">
              Live Demo
            </div>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border">
              <iframe 
                src="/sidepanel.html" 
                className="w-full"
                style={{ height: '600px', border: 'none', background: 'transparent' }}
                title="Myst Chrome Extension Interface"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
