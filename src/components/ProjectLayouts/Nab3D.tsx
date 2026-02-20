import React from 'react';

export default function Nab3D() {
  return (
    <div className="space-y-12 max-w-7xl mx-auto px-4 py-20">
      {/* Usage & Live Demo Section */}
      <section className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-gray-900 pb-4 text-center">Usage & Demo</h2>
        <div className="grid lg:grid-cols-2 gap-8 mb-1 items-center">
          <div className="space-y-4 relative">
            <div className="absolute -top-7 left-1/2 transform -translate-x-1/2 bg-blue-100 text-blue-600 px-16 py-2 rounded-full text-base font-semibold z-10 shadow-lg">
              Code Example
            </div>
            <div className="bg-gray-900 rounded-xl p-6 text-green-400 font-mono text-sm h-100">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-gray-400 ml-2">Integration Example</span>
              </div>
              <div className="space-y-2 text-sm">
                <div><span className="text-blue-400">&lt;!DOCTYPE</span> <span className="text-yellow-400">html</span><span className="text-blue-400">&gt;</span></div>
                <div><span className="text-blue-400">&lt;html&gt;</span></div>
                <div><span className="text-blue-400">&lt;head&gt;</span></div>
                <div className="pl-4"><span className="text-blue-400">&lt;title&gt;</span>My 3D Showcase<span className="text-blue-400">&lt;/title&gt;</span></div>
                <div><span className="text-blue-400">&lt;/head&gt;</span></div>
                <div><span className="text-blue-400">&lt;body&gt;</span></div>
                <div className="pl-4 bg-yellow-900 bg-opacity-20 py-1">
                  <span className="text-pink-400">&lt;nab3d</span> <span className="text-yellow-400">src=</span><span className="text-green-400">"/videos/matthew.mp4"</span><span className="text-pink-400">&gt;&lt;/nab3d&gt;</span>
                </div>
                <div><span className="text-blue-400">&lt;/body&gt;</span></div>
                <div><span className="text-blue-400">&lt;/html&gt;</span></div>
              </div>
            </div>
            <p className="text-gray-600 mb-4 text-center">Just one line of code to embed any 3D object into your website</p>
          </div>
          
          <div className="space-y-4 relative">
            <div className="absolute -top-7 left-1/2 transform -translate-x-1/2 bg-purple-100 text-purple-600 px-16 py-2 rounded-full text-base font-semibold z-10 shadow-lg">
              Live 3D Model
            </div>
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl h-100 relative overflow-hidden">
              <div className="w-full h-96 flex items-center justify-center text-gray-400">
                <p>3D Model Viewer (interactive model would render here)</p>
              </div>
            </div>
            <p className="text-gray-600 text-center text-sm">
              Click and drag to orbit • Scroll to zoom • Click to focus
            </p>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center pb-5">The Problem</h2>
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              3D content creation has always been a barrier for web developers. Traditional 3D modeling requires 
              specialized skills, expensive software, and significant time investment. Most developers simply 
              avoid 3D content altogether.
            </p>
            <div className="bg-red-50 border border-red-200 rounded-lg p-6 mt-5">
              <h3 className="font-semibold text-red-900 mb-1">3D Modeling Workflow Issues</h3>
              <ul className="text-red-800 space-y-1 text-sm">
                <li>Steep learning curve for 3D modeling software</li>
                <li>Hours of work for simple objects</li>
                <li>Complex web-integration processes</li>
                <li>Limited web optimization options</li>
              </ul>
            </div>
          </div>
          <div className="relative">
            <img src="/images/slowflow.png" alt="Nab 3D Interface" className="w-full" style={{ borderRadius: '0' }} />
            <p className="justify-center text-center text-gray-900 font-medium italic mt-4">
              Archaic photogrammetry processes are overcomplicated and time-consuming
            </p>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-gray-900 mt-4 text-center">The Solution</h2>
        <div className="text-center m-8">
          <div className="max-w-4xl mx-auto">
            <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl">
              <iframe 
                src="https://www.youtube.com/embed/-RIqBdwPtAk" 
                title="Nab 3D Demo Video"
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
