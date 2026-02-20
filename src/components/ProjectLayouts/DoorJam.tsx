import React from 'react';

export default function DoorJam() {
  return (
    <div className="bg-white">
      <style>{`
        .gradient-text {
          background: linear-gradient(135deg, #ff6b6b, #ffd93d, #6bcf7f, #4ecdc4);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>

      {/* Section 1: What is DoorJam */}
      <div className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">What is DoorJam?</h3>
              <p className="text-lg text-gray-700 mb-6">
                With DoorJam, guests can let you (and everyone else) know they've arrived. Gone are the days of phone calls and text alerts interrupting your jam.
              </p>
              <p className="text-lg text-gray-700">
                DoorJam displays your currently playing Spotify track, and will visually alert you when someone is at the door. Display it on a TV or Projector to elevate your party.
              </p>
            </div>
            <div className="shadow-none">
              <img src="/images/DoorJam Ringing.gif" alt="DoorJam Ringing Feature" className="w-full max-w-md mx-auto shadow-none rounded-lg" />
            </div>
          </div>
        </div>
      </div>

      {/* Section 2: Key Features */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">How It Works</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
              <div className="text-4xl mb-4">🔔</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Guest Notifications</h3>
              <p className="text-gray-700">
                Guests can ring the doorbell with a simple tap. Visual alerts appear immediately without interrupting your music.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
              <div className="text-4xl mb-4">🎵</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Spotify Integration</h3>
              <p className="text-gray-700">
                Displays your currently playing track in real-time. Your guests know what vibe you're going for while they wait.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
              <div className="text-4xl mb-4">📺</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">TV/Projector Display</h3>
              <p className="text-gray-700">
                Optimized for large screens. Project DoorJam on your TV or projector to create an immersive party experience.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Section 3: UI Highlights */}
      <div className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">UI Highlights</h2>
            <p className="text-lg text-gray-600">A quick look at the core DoorJam screens.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Seamless Onboarding</h3>
              <p className="text-lg text-gray-700">
                Getting started is effortless. The sign-up flow guides you through party creation with smooth animations and intuitive choices—start or join a party in seconds.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-200">
              <img src="/images/Doorjam UI Design.gif" alt="DoorJam sign up flow" className="w-full h-auto object-cover" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
