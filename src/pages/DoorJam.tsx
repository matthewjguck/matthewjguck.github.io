import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { DoorJamVideos } from '../components/DoorJamVideos'

const doorjamStyles = `
  .gradient-text {
    background: linear-gradient(135deg, #ff6b6b, #ffd93d, #6bcf7f, #4ecdc4);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .doorjam-project img,
  .story-image {
    --tw-shadow: 0 0 0 0 transparent !important;
    --tw-shadow-color: transparent !important;
    box-shadow: 0 0 0 0 transparent !important;
    -webkit-box-shadow: 0 0 0 0 transparent !important;
    -moz-box-shadow: 0 0 0 0 transparent !important;
  }

  /* Caution stripe disclaimer */
  .caution-disclaimer {
    background: repeating-linear-gradient(
      45deg,
      #FFD700,
      #FFD700 20px,
      #000000 20px,
      #000000 40px
    );
    padding: 2px;
    margin-top: 1.5rem;
    border-radius: 0.5rem;
  }

  .caution-disclaimer-content {
    background: white;
    padding: 1rem;
    border-radius: 0.375rem;
    text-align: center;
  }

  .caution-disclaimer-text {
    font-size: 0.875rem;
    color: #1f2937;
    line-height: 1.6;
  }

  /* DoorJam Header Styles */
  .wrapper {
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    min-height: 25vh;
    margin: 0;
    margin-top: -4rem;
    margin-left: calc(50% - 50vw);
    margin-right: calc(50% - 50vw);
    padding: 0;
    overflow: hidden;
    transition: height 0.6s ease-out;
  }

  .header {
    background-color: #000000;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    width: clamp(90%, 80vw, 80%);
    max-width: 1200px;
    height: 18vh;
    padding: 2rem clamp(1rem, 10vw, 150px);
    border-bottom-left-radius: 50px;
    border-bottom-right-radius: 50px;
    transition: all 0.6s ease-out;
    cursor: pointer;
  }

  .doorjam-logo {
    height: clamp(60px, 10vw, 80px);
    width: auto;
    transition: all 0.3s ease-in-out;
  }

  @media (max-width: 640px) {
    .wrapper {
      margin-top: -4rem;
      min-height: auto;
      margin-left: calc(50% - 50vw);
      margin-right: calc(50% - 50vw);
    }

    .header {
      width: 92vw;
      height: 16vh;
      padding: 1.25rem 1.5rem;
      border-bottom-left-radius: 32px;
      border-bottom-right-radius: 32px;
    }

    .doorjam-logo {
      height: clamp(44px, 12vw, 64px);
    }
  }
`

export function DoorJam() {
  useEffect(() => {
    const style = document.createElement('style')
    style.innerHTML = doorjamStyles
    document.head.appendChild(style)

    return () => {
      document.head.removeChild(style)
    }
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="doorjam-project"
    >
      {/* DoorJam Header */}
      <div className="wrapper">
        <div className="header mt-10">
          <img src="/images/doorjam_logo.png" alt="DoorJam" className="doorjam-logo" />
        </div>
      </div>

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

      {/* CTA Button */}
      <div className="pt-8 pb-32 bg-white flex justify-center flex-col items-center">
        <a href="https://doorjam.vercel.app/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-black text-white font-bold px-8 py-4 rounded-full text-lg hover:bg-gray-800 transition-colors duration-200" style={{ textDecoration: 'none' }}>
          Visit the Live Site →
        </a>

        {/* Caution Disclaimer */}
        <div className="caution-disclaimer max-w-2xl">
          <div className="caution-disclaimer-content">
            <p className="caution-disclaimer-text">
              🎵 DoorJam now supports Spotify Sync via <span style={{ fontStyle: 'italic' }}>Last.FM</span> and includes a <span style={{ fontStyle: 'italic' }}>SoundCloud</span> mode for even more music streaming flexibility
            </p>
          </div>
        </div>
      </div>

      {/* Section 2: The Story */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">The Story Behind DoorJam</h2>
            <p className="text-lg text-gray-600">Why I built this, and the problems it solves.</p>
          </div>

          <div className="bg-white rounded-2xl p-8 md:p-12 border border-gray-200 mb-12">
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              While interning in San Francisco, I witnessed the same problem 3 weekends in a row: party attendees stuck on the sidewalk, desperately trying to get in touch with the host. I have a love for hosting events and bringing people together, and I saw an opportunity to build something that could elevate my own events and solve several problems at once.
            </p>

            <div className="space-y-12">
              {/* Problem 1 & Solution 1 */}
              <div>
                <div className="flex items-start gap-4 mb-6">
                  <div className="text-2xl">🚪</div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Problem 1: Letting Guests In</h3>
                    <p className="text-gray-700">
                      Letting guests in often falls to the host, who is already busy enough managing the party, music, food, and everything else.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 ml-12 mb-4">
                  <div className="text-2xl">✓</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Solution 1: Shared Responsibility</h3>
                    <p className="text-gray-700">
                      DoorJam makes playing doorman a group responsibility. Any guest inside can see who's arriving and help let them in.
                    </p>
                  </div>
                </div>
              </div>

              {/* Problem 2 & Solution 2 */}
              <div>
                <div className="flex items-start gap-4 mb-6">
                  <div className="text-2xl">📱</div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Problem 2: Silent Notifications</h3>
                    <p className="text-gray-700">
                      Guests stuck outside often try to call the host directly, killing the music while the phone rings and ruining the vibe.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 ml-12">
                  <div className="text-2xl">✓</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Solution 2: Visual Alerts</h3>
                    <p className="text-gray-700">
                      DoorJam displays a flashy but silent notification to let everyone at the party know who arrived without killing the vibe.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <a href="https://doorjam.vercel.app/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-black text-white font-bold px-8 py-4 rounded-full text-lg hover:bg-gray-800 transition-colors duration-200" style={{ textDecoration: 'none' }}>
              Try DoorJam →
            </a>
          </div>
        </div>
      </div>

      {/* Section 3: DoorJam in Action */}
      <div className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-5xl font-bold text-gray-900 mb-2 text-center">DoorJam in Action</h2>
          <DoorJamVideos />
        </div>
      </div>

      {/* Spacing below videos */}
      <div className="pb-28 bg-white"></div>

      {/* Section 4: Key Features */}
      <div className="pt-8 pb-12 bg-cover bg-center relative" style={{ backgroundImage: "url('/images/DoorJam-diamond-plate.png')", width: '100vw', marginLeft: 'calc(50% - 50vw)', marginRight: 'calc(50% - 50vw)' }}>
        <h2 className="font-bold bg-black px-8 py-4 absolute left-1/2 -translate-x-1/2 -top-12 text-center shadow-xl text-white" style={{ width: 'clamp(35vw, 500px, 80vw)', fontSize: 'clamp(1.4rem, 4.2vw, 3.5rem)', lineHeight: 1.1, whiteSpace: 'nowrap' }}>How It Works</h2>
        <div className="max-w-6xl mx-auto px-4 pt-10">
          <div className="grid md:grid-cols-3 gap-6 pt-12">
            {/* Feature 1: Guest Alert */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 relative">
              <div className="text-7xl mb-4 text-center absolute left-1/2 -translate-x-1/2 -top-[25px] leading-none">🔔</div>
              <div className="pt-12">
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Guest Notifications</h3>
                <p className="text-gray-700 text-sm text-center">
                  Guests can ring the doorbell with a simple tap. Visual alerts appear immediately without interrupting your music.
                </p>
              </div>
            </div>

            {/* Feature 2: Music Integration */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 relative">
              <div className="text-7xl mb-4 text-center absolute left-1/2 -translate-x-1/2 -top-[25px] leading-none">🎵</div>
              <div className="pt-12">
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Spotify Integration</h3>
                <p className="text-gray-700 text-sm text-center">
                  Displays your currently playing track in real-time. Your guests know what vibe you're going for while they wait.
                </p>
              </div>
            </div>

            {/* Feature 3: Display Ready */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 relative">
              <div className="text-7xl mb-4 text-center absolute left-1/2 -translate-x-1/2 -top-[25px] leading-none">📺</div>
              <div className="pt-12">
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">TV/Projector Display</h3>
                <p className="text-gray-700 text-sm text-center">
                  Optimized for large screens. Project DoorJam on your TV or projector to create an immersive party experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 5: UI Highlights */}
      <div className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">UI Highlights</h2>
            <p className="text-lg text-gray-600">A quick look at the core DoorJam screens.</p>
          </div>

          {/* Row 1: Text + Image */}
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

          {/* Row 2: Image + Text */}
          <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
            <div className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-200 md:order-1">
              <img src="/images/DoorJam Ringing.gif" alt="Ringing alert on TV" className="w-full h-auto object-cover" />
            </div>
            <div className="md:order-2">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Visual Ring Alerts</h3>
              <p className="text-lg text-gray-700">
                When someone rings the doorbell, a vibrant visual alert pulses across the screen—no sound needed. Your party stays uninterrupted while you get notified instantly.
              </p>
            </div>
          </div>

          {/* Row 3: Image + Text */}
          <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
            <div className="md:order-1">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Live Music Display</h3>
              <p className="text-lg text-gray-700">
                Your currently playing Spotify track is displayed in real-time with album art and track details. Guests see what's playing before they even walk in.
              </p>
            </div>

            <div className="md:order-2">
              <img src="/images/Alejandro.png" alt="DoorJam cyan theme with music" className="w-full h-auto object-cover" />
            </div>
          </div>

          {/* Row 4: Text + Image (Blink-182) */}
          <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
            <div className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-200">
              <img src="/images/Blink182.png" alt="DoorJam showing Blink-182" className="w-full h-auto object-cover" />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Rich Album Art</h3>
              <p className="text-lg text-gray-700">
                From punk rock to pop anthems, DoorJam beautifully showcases album artwork. Every track gets the visual treatment it deserves.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
