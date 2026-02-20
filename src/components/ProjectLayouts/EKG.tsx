import React from 'react';

export default function EKG() {
  return (
    <div className="space-y-16 max-w-7xl mx-auto px-4 py-20">
      {/* Header Section */}
      <section className="text-center">
        <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
          🏆 Award Winner: Greatest Societal Impact
        </div>
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Bridging the Emotional Gap in Education</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          E.K.G. helps teachers understand their students on a deeper level through innovative, 
          privacy-first classroom games that reveal emotional insights.
        </p>
      </section>

      {/* Wide Banner */}
      <div className="py-12 w-screen relative left-1/2 right-1/2 -mx-[50vw] mt-32 mb-32 overflow-hidden">
        <img src="/images/EKG-wide.png" alt="E.K.G. Project Banner" className="w-full h-auto shadow-none scale-150 md:scale-125" />
      </div>

      {/* Challenge Section */}
      <section className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">The Challenge</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Teachers often struggle to understand the emotional states and learning preferences of their students, 
            especially in larger classrooms. Traditional methods of gathering this information can be invasive, 
            time-consuming, or simply ineffective.
          </p>
        </div>
        <div className="relative">
          <div className="relative bg-gradient-to-br from-gray-700 to-gray-800 p-6 rounded-2xl">
            <div className="absolute inset-0 bg-white backdrop-blur-sm rounded-2xl"></div>
            <img src="/images/Problem.png" alt="Classroom challenges" className="relative z-10 w-full" />
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 lg:p-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Solution: Gamified Emotional Intelligence</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            E.K.G. transforms emotional data collection into engaging classroom activities that students actually enjoy.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-20 h-20 bg-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl">🎮</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Interactive Games</h3>
            <p className="text-gray-600">Fun, engaging activities that feel like play, not assessment</p>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 bg-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl">🔒</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Privacy First</h3>
            <p className="text-gray-600">Anonymous data collection with strict privacy controls</p>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 bg-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl">📊</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Actionable Insights</h3>
            <p className="text-gray-600">Clear, meaningful data that informs teaching strategies</p>
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="grid lg:grid-cols-2 gap-12 items-start">
        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-gray-900">Design Process</h2>
          
          <div className="space-y-6">
            <div className="border border-gray-200 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">1</div>
                <h3 className="text-lg font-semibold text-gray-900">User Research</h3>
              </div>
              <p className="text-gray-600">Conducted interviews with 15+ teachers and education professionals to understand pain points and needs.</p>
            </div>
            
            <div className="border border-gray-200 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold">2</div>
                <h3 className="text-lg font-semibold text-gray-900">Ideation & Prototyping</h3>
              </div>
              <p className="text-gray-600">Developed multiple game concepts and tested them with focus groups of students and teachers.</p>
            </div>
            
            <div className="border border-gray-200 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold">3</div>
                <h3 className="text-lg font-semibold text-gray-900">Testing & Iteration</h3>
              </div>
              <p className="text-gray-600">Refined the design based on user feedback and usability testing sessions.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
