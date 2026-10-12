import React, { useEffect } from 'react'
import { motion } from 'framer-motion'

const carouselStyles = `
  body {
    font-family: 'Poppins', sans-serif;
  }
  .gradient-text {
    background: linear-gradient(135deg, #ec4899, #ef4444, #f97316);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .heart-pattern {
    background-image: radial-gradient(circle at 2px 2px, rgba(236, 72, 153, 0.1) 1px, transparent 0);
    background-size: 20px 20px;
  }

  .cupid-logo-container {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 3rem 0 2rem;
  }

  .cupid-logo {
    height: auto;
    width: 30%;
    max-width: 500px;
  }

  @media (min-width: 768px) {
    .cupid-logo {
      width: 20%;
      max-width: 520px;
    }
  }

  /* Carousel styles */
  .carousel-container {
    overflow: hidden;
    position: relative;
  }
  .carousel-track {
    display: flex;
    animation: scroll 30s linear infinite;
    width: calc(400px * 20);
  }

  .carousel-track:hover {
    animation-play-state: paused;
  }
  @keyframes scroll {
    0% { transform: translateX(0); }
    100% { transform: translateX(calc(-400px * 10)); }
  }
  .carousel-item {
    min-width: 380px;
    width: 380px;
    height: 380px;
    margin-right: 20px;
    flex-shrink: 0;
    overflow: hidden;
  }

  /* Override any image shadows */
  .cupid-project-content img,
  .story-image,
  .carousel-item img {
    --tw-shadow: 0 0 0 0 transparent !important;
    --tw-shadow-color: transparent !important;
    box-shadow: 0 0 0 0 transparent !important;
    -webkit-box-shadow: 0 0 0 0 transparent !important;
    -moz-box-shadow: 0 0 0 0 transparent !important;
    border-radius: 0 !important;
    -webkit-border-radius: 0 !important;
    -moz-border-radius: 0 !important;
  }

  /* Force carousel images to be square */
  .carousel-item img {
    width: 380px !important;
    height: 380px !important;
    object-fit: cover !important;
    object-position: center !important;
    display: block !important;
  }
  .carousel-tab-btn {
    color: #9CA3AF;
    border-bottom: 2px solid transparent;
    transition: all 0.2s ease;
  }
  .carousel-tab-btn.active {
    color: #111827 !important;
    border-bottom: 2px solid #111827 !important;
  }
  .carousel-tab-btn:hover {
    color: #111827;
  }
`

export function Cupid() {
  useEffect(() => {
    // Add styles to head
    const style = document.createElement('style')
    style.innerHTML = carouselStyles
    document.head.appendChild(style)

    // Initialize carousel functions after HTML is rendered
    ;(window as any).scrollTimeout = null

    ;(window as any).updateTabSelector = function(index: number) {
      document.querySelectorAll('.carousel-tab-btn').forEach((btn, i) => {
        if (i === index) {
          btn.classList.add('active')
        } else {
          btn.classList.remove('active')
        }
      })
    }

    ;(window as any).updateActiveTab = function() {
      const carousel = document.getElementById('portalCarousel')
      if (!carousel) return

      clearTimeout((window as any).scrollTimeout)
      ;(window as any).scrollTimeout = setTimeout(function() {
        const slides = carousel.querySelectorAll('[data-index]')
        const scrollLeft = carousel.scrollLeft
        const width = carousel.clientWidth
        const threshold = width * 0.1

        for (let idx = 0; idx < slides.length; idx++) {
          const slideLeft = slides[idx].offsetLeft
          const slideRight = slideLeft + slides[idx].offsetWidth
          const viewportStart = scrollLeft

          if (slideRight - viewportStart > threshold && slideLeft - viewportStart < width - threshold) {
            ;(window as any).updateTabSelector(idx)
            break
          }
        }
      }, 600)
    }

    return () => {
      document.head.removeChild(style)
    }
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="cupid-project-content bg-white"
    >
      {/* Logo */}
      <div className="cupid-logo-container">
        <img src="/images/The Cupid Project Logo.png" alt="The Cupid Project" className="cupid-logo" />
      </div>

      {/* Section 1: Explain TCP */}
      <div className="py-5 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-8">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">What is The Cupid Project?</h3>
              <p className="text-lg text-gray-700 mb-6">
               The Cupid Project is an annual card-giving project delivering to nursing homes every Valentine's Day since 2018.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                We aim to combat loneliness, bring communities together, and inspire others to engage in philanthropy.
                We firmly believe that a small act of kindness can put a smile on someone's face and ignite a chain reaction of compassion and goodwill.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                For the better part of the last decade, The Cupid Project has pushed me to become a better product designer. It has taught me the power of little details and has necessitated that I learn new skills, pivot with grace, and keep <i>people</i> at the center of my design philosophy. The Cupid Project's annual Card Giving initiative is an inherently unique, human experience; however, growing The Cupid Project requires designing a scalable, replicable structure that allows these unique, human moments to shine.
              </p>
            </div>

            <div className="shadow-none">
              <img src="/images/tcp/Valentines Card Giving.png" alt="Valentine's Card Giving" className="w-full max-w-md mx-auto shadow-none" />
            </div>
          </div>
        </div>
      </div>

      <div className="pt-8 pb-2 w-screen relative left-1/2 right-1/2 -mx-[50vw]">
        <div className="max-w-6xl mx-auto px-4 mb-20 flex justify-center">
          <a href="https://thecupidproject.org" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-white text-black mb-20 px-12 py-3 rounded-full hover:bg-black hover:text-white transition-colors hover:scale-105 font-[poppins] text-lg font-bold border-2 border-black">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
            </svg>
            Visit Website
          </a>
        </div>
        <img src="/images/TCP Collage.webp" alt="The Cupid Project collage" className="w-full h-auto shadow-none scale-150 md:scale-125" />
      </div>

      {/* UI/UX Work Section */}
      <div className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">UI/ UX Work</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Designing and building the digital experiences behind The Cupid Project, from the public-facing website to the internal tools volunteers use.
            </p>
          </div>

          {/* Sub-section: Public Website */}
          <div className="mb-24">
            <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">The Cupid Project Website</h3>
            <div className="bg-gray-100 rounded-3xl p-3 shadow-lg border border-gray-200">
              <div className="flex items-center gap-1.5 px-3 py-2">
                <span className="w-3 h-3 rounded-full bg-red-400"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
                <span className="w-3 h-3 rounded-full bg-green-400"></span>
              </div>
              <div className="bg-white rounded-2xl overflow-hidden aspect-video">
                <iframe src="https://www.thecupidproject.org/" title="The Cupid Project website" className="border-0" loading="lazy" style={{ width: '151.52%', height: '151.52%', transform: 'scale(0.66)', transformOrigin: '0 0' }}></iframe>
              </div>
            </div>
            <div className="flex justify-center mt-16">
              <a href="https://thecupidproject.org" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-white text-black px-12 py-3 rounded-full hover:bg-black hover:text-white transition-colors hover:scale-105 font-[poppins] text-lg font-bold border-2 border-black">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                </svg>
                Visit Website
              </a>
            </div>
          </div>

          {/* Sub-section: Art Direction */}
          <div className="bg-black py-24 px-4 md:px-8 w-screen -ml-[calc(50vw-50%)]">
            <div className="max-w-7xl mx-auto">
              <h3 className="text-3xl font-bold mb-2 text-center font-[poppins]" style={{ color: 'white' }}>Art Direction</h3>
              <p className="text-lg font-thin max-w-2xl mx-auto text-center mb-10 font-[poppins]" style={{ color: 'white' }}>
                Four visual references that shaped the look and feel of the site.
              </p>
              <div className="flex justify-center">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
                <div>
                <div className="bg-gray-50 shadow-lg aspect-square overflow-hidden">
                  <img src="/images/paper-scraps.png" alt="Paper scraps artifact" className="w-full h-full object-cover" />
                </div>
                <h4 className="text-lg font-bold text-white mt-4 mb-1 font-[poppins]">Paper Scraps</h4>
                <p className="text-sm font-thin font-[poppins]" style={{ color: 'white' }}>Paper cards, crafts</p>
              </div>
              <div>
                <div className="bg-gray-50 shadow-lg aspect-square overflow-hidden">
                  <img src="/images/crayon-scribbles.png" alt="Crayon scribbles artifact" className="w-full h-full object-cover" />
                </div>
                <h4 className="text-lg font-bold text-white mt-4 mb-1 font-[poppins]">Crayon Scribbles</h4>
                <p className="text-sm font-thin font-[poppins]" style={{ color: 'white' }}>Creativity, handmade feel</p>
              </div>
              <div>
                <div className="bg-gray-50 shadow-lg aspect-square overflow-hidden">
                  <img src="/images/paper-texture.png" alt="Paper texture artifact" className="w-full h-full object-cover" />
                </div>
                <h4 className="text-lg font-bold text-white mt-4 mb-1 font-[poppins]">Paper Texture</h4>
                <p className="text-sm font-thin font-[poppins]" style={{ color: 'white' }}>Handmade, tangible feel</p>
              </div>
              <div>
                <div className="bg-gray-50 shadow-lg aspect-square overflow-hidden">
                  <img src="/images/halftone-texture.png" alt="Halftone texture artifact" className="w-full h-full object-cover" />
                </div>
                <h4 className="text-lg font-bold text-white mt-4 mb-1 font-[poppins]">Halftone Texture</h4>
                <p className="text-sm font-thin font-[poppins]" style={{ color: 'white' }}>Cool, young, Gen Z audience</p>
                </div>
              </div>
            </div>
            </div>
          </div>

          {/* Sub-section: Internal Portal */}
          <div className="mb-24 mt-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-2 text-center font-[poppins]">Internal Portal</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto text-center mb-8 font-[poppins]">
              A private tool used by chapter leads and volunteers to coordinate card drives, track deliveries, and manage facilities.
            </p>
            <div className="relative w-full">
              {/* Carousel Container */}
              <div className="overflow-hidden rounded-2xl bg-white border border-gray-200 shadow-lg">
                <div className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory" id="portalCarousel" onScroll={() => window.updateActiveTab?.()}>
                  {/* Slide 1: Portal Selector */}
                  <div className="flex-shrink-0 w-full snap-center" data-index="0">
                    <img src="/images/Portal Selector.png" alt="Portal routing page" className="w-full h-auto object-cover max-h-[70vh]" />
                  </div>

                  {/* Slide 2: Volunteer Portal */}
                  <div className="flex-shrink-0 w-full snap-center" data-index="1">
                    <img src="/images/Volunteer Portal.png" alt="Volunteer portal screen" className="w-full h-auto object-cover max-h-[70vh]" />
                  </div>

                  {/* Slide 3: Portal-3 */}
                  <div className="flex-shrink-0 w-full snap-center" data-index="2">
                    <img src="/images/Portal-3.png" alt="Chapter roster portal screen" className="w-full h-auto object-cover max-h-[70vh]" />
                  </div>
                </div>
              </div>

              {/* Navigation Buttons */}
              <button onClick={() => {
                const c = document.getElementById('portalCarousel') as HTMLElement
                c.scrollBy({ left: -c.clientWidth, behavior: 'smooth' })
              }} className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-gray-900 p-3 rounded-full shadow-lg font-[poppins] font-bold text-xl">
                ←
              </button>
              <button onClick={() => {
                const c = document.getElementById('portalCarousel') as HTMLElement
                c.scrollBy({ left: c.clientWidth, behavior: 'smooth' })
              }} className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-gray-900 p-3 rounded-full shadow-lg font-[poppins] font-bold text-xl">
                →
              </button>
            </div>

            {/* Carousel Tabs Below */}
            <div className="flex justify-center gap-8 mt-6">
              <button onClick={() => {
                const c = document.getElementById('portalCarousel') as HTMLElement
                c.scrollLeft = 0
                ;(window as any).updateTabSelector(0)
              }} className="carousel-tab-btn font-[poppins] font-medium pb-2 cursor-pointer active">Portal Routing Page</button>
              <button onClick={() => {
                const c = document.getElementById('portalCarousel') as HTMLElement
                c.scrollLeft = c.clientWidth
                ;(window as any).updateTabSelector(1)
              }} className="carousel-tab-btn font-[poppins] font-medium pb-2 cursor-pointer">Lo-FI Wireframing</button>
              <button onClick={() => {
                const c = document.getElementById('portalCarousel') as HTMLElement
                c.scrollLeft = c.clientWidth * 2
                ;(window as any).updateTabSelector(2)
              }} className="carousel-tab-btn font-[poppins] font-medium pb-2 cursor-pointer">Iteration 2</button>
            </div>

            {/* HS Chapter Portal Demo Button */}
            <div className="flex justify-center mt-12">
              <a href="/hs-chapter-portal-demo/index.html" target="_blank" rel="noopener noreferrer" className="bg-black text-white font-bold px-8 py-3 rounded-full text-lg hover:bg-gray-800 transition-all font-[poppins]">
                📦 View HS Chapter Portal Demo
              </a>
            </div>
          </div>

          {/* Sub-section: High School Portal Resource Thumbnails */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-2 text-center">High School Portal Resource Thumbnails</h3>
            <div className="bg-white rounded-2xl overflow-hidden">
              <img src="/images/TCP Portal Resources Section.png" alt="High School Portal Resource Thumbnails" className="w-full h-auto drop-shadow-lg" />
            </div>
          </div>
        </div>
      </div>

      {/* Section 2: Impact and Photos */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Our Impact</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Since 2018, The Cupid Project has grown into a global movement of love and kindness,
              bringing smiles to faces around the world.
            </p>
          </div>

          {/* Impact Numbers - Background Image Section */}
          <div className="w-screen -mx-[calc((100vw-100%)/2)] py-32 md:py-48 relative -mb-20" style={{ backgroundImage: "url('/images/impact-bg-hero.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
            {/* Overlay for better text readability */}
            <div className="absolute inset-0" style={{ background: 'rgba(255, 255, 255, 0.08)' }}></div>

            <div className="relative w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-20">
              <div className="grid md:grid-cols-3 gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-20">
                <div className="text-center flex flex-col justify-center items-center py-8 md:py-12 px-6 md:px-10 rounded-lg" style={{ backgroundImage: "url('/images/metric-bg.png')", backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '300px' }}>
                  <div className="font-black text-white mb-4" style={{ fontSize: 'clamp(2.5rem, 8vw, 5rem)', textShadow: '3px 3px 12px rgba(0,0,0,0.4)' }}>600,000+</div>
                  <p className="text-lg md:text-xl font-medium" style={{ color: 'white', textShadow: '1px 1px 4px rgba(0,0,0,0.3)' }}>cards delivered to individuals in need</p>
                </div>

                <div className="text-center flex flex-col justify-center items-center py-8 md:py-12 px-6 md:px-10 rounded-lg" style={{ backgroundImage: "url('/images/metric-bg.png')", backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '300px' }}>
                  <div className="font-black text-white mb-4" style={{ fontSize: 'clamp(2.5rem, 8vw, 5rem)', textShadow: '3px 3px 12px rgba(0,0,0,0.4)' }}>42,700+</div>
                  <p className="text-lg md:text-xl font-medium" style={{ color: 'white', textShadow: '1px 1px 4px rgba(0,0,0,0.3)' }}>volunteers making a positive impact</p>
                </div>

                <div className="text-center flex flex-col justify-center items-center py-8 md:py-12 px-6 md:px-10 rounded-lg" style={{ backgroundImage: "url('/images/metric-bg.png')", backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '300px' }}>
                  <div className="font-black text-white mb-4" style={{ fontSize: 'clamp(2.5rem, 8vw, 5rem)', textShadow: '3px 3px 12px rgba(0,0,0,0.4)' }}>2,217+</div>
                  <p className="text-lg md:text-xl font-medium" style={{ color: 'white', textShadow: '1px 1px 4px rgba(0,0,0,0.3)' }}>facilities reached in 1500 cities across 10 countries</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full-width carousel */}
        <div className="w-screen -mx-[calc((100vw-100%)/2)]">
          <div className="carousel-container overflow-hidden w-full">
            <div className="carousel-track">
              {/* Images from the TCP folder - using all non-transparent JPG images */}
              <div className="carousel-item"><img src="/images/tcp/Aili and Gabby.JPG" alt="Volunteers Making Cards" className="w-full h-full object-cover" /></div>
              <div className="carousel-item"><img src="/images/tcp/8.JPG" alt="Card Distribution" className="w-full h-full object-cover" /></div>
              <div className="carousel-item"><img src="/images/tcp/First Year.jpg" alt="First Year Project" className="w-full h-full object-cover" /></div>
              <div className="carousel-item"><img src="/images/tcp/FullSizeRender.jpeg" alt="TCP Activity" className="w-full h-full object-cover" /></div>
              <div className="carousel-item"><img src="/images/tcp/Greta.jpeg" alt="Volunteer Greta" className="w-full h-full object-cover" /></div>
              <div className="carousel-item"><img src="/images/tcp/IMG_0761.JPG" alt="Community Volunteers" className="w-full h-full object-cover" /></div>
              <div className="carousel-item"><img src="/images/tcp/IMG_0897.JPG" alt="Card Making Process" className="w-full h-full object-cover" /></div>
              <div className="carousel-item"><img src="/images/tcp/IMG_0901.JPG" alt="Volunteers at Work" className="w-full h-full object-cover" /></div>
              <div className="carousel-item"><img src="/images/tcp/IMG_6159.jpeg" alt="TCP Team" className="w-full h-full object-cover" /></div>
              <div className="carousel-item"><img src="/images/tcp/IMG_6194.jpeg" alt="Card Creation" className="w-full h-full object-cover" /></div>
              {/* Duplicate images for seamless loop */}
              <div className="carousel-item"><img src="/images/tcp/Aili and Gabby.JPG" alt="Volunteers Making Cards" className="w-full h-full object-cover" /></div>
              <div className="carousel-item"><img src="/images/tcp/8.JPG" alt="Card Distribution" className="w-full h-full object-cover" /></div>
              <div className="carousel-item"><img src="/images/tcp/First Year.jpg" alt="First Year Project" className="w-full h-full object-cover" /></div>
              <div className="carousel-item"><img src="/images/tcp/FullSizeRender.jpeg" alt="TCP Activity" className="w-full h-full object-cover" /></div>
              <div className="carousel-item"><img src="/images/tcp/Greta.jpeg" alt="Volunteer Greta" className="w-full h-full object-cover" /></div>
              <div className="carousel-item"><img src="/images/tcp/IMG_0761.JPG" alt="Community Volunteers" className="w-full h-full object-cover" /></div>
              <div className="carousel-item"><img src="/images/tcp/IMG_0897.JPG" alt="Card Making Process" className="w-full h-full object-cover" /></div>
              <div className="carousel-item"><img src="/images/tcp/IMG_0901.JPG" alt="Volunteers at Work" className="w-full h-full object-cover" /></div>
              <div className="carousel-item"><img src="/images/tcp/IMG_6159.jpeg" alt="TCP Team" className="w-full h-full object-cover" /></div>
              <div className="carousel-item"><img src="/images/tcp/IMG_6194.jpeg" alt="Card Creation" className="w-full h-full object-cover" /></div>
            </div>
          </div>
        </div>

        {/* Instagram Embed */}
        <div className="py-20 bg-white flex justify-center items-center w-full">
          <div className="flex justify-center px-4">
            <blockquote className="instagram-media" data-instgrm-permalink="https://www.instagram.com/thecupidproject/?utm_source=ig_embed&utm_campaign=loading" data-instgrm-version="14" style={{ background: '#FFF', border: 0, borderRadius: '3px', boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)', margin: '1px', maxWidth: '540px', minWidth: '326px', padding: 0, width: '99.375%' }}>
              <div style={{ padding: '16px' }}>
                <a href="https://www.instagram.com/thecupidproject/?utm_source=ig_embed&utm_campaign=loading" style={{ background: '#FFFFFF', lineHeight: 0, padding: '0 0', textAlign: 'center', textDecoration: 'none', width: '100%' }} target="_blank" rel="noreferrer">
                  <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <div style={{ backgroundColor: '#F4F4F4', borderRadius: '50%', flexGrow: 0, height: '40px', marginRight: '14px', width: '40px' }}></div>
                    <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'center' }}>
                      <div style={{ backgroundColor: '#F4F4F4', borderRadius: '4px', flexGrow: 0, height: '14px', marginBottom: '6px', width: '100px' }}></div>
                      <div style={{ backgroundColor: '#F4F4F4', borderRadius: '4px', flexGrow: 0, height: '14px', width: '60px' }}></div>
                    </div>
                  </div>
                </a>
              </div>
            </blockquote>
            <script async src="//www.instagram.com/embed.js"></script>
          </div>
        </div>
      </div>

      {/* Section 3: How it Started / Our Story */}
      <div className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">How It All Started</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The journey from a small high school club to a global movement of love
            </p>
          </div>

          <div className="space-y-16">
            {/* Story Part 1 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">A Family's Shared Dream</h3>
                <p className="text-lg text-gray-700 mb-6">
                  The Cupid Project was born out of a deep-rooted passion for helping others and making a difference.
                  It all started with a family's shared common desire to spread love and joy to those in need.
                </p>
                <p className="text-lg text-gray-700">
                  The journey began with the establishment of the Hearts Club at Longview High School in Longview, Texas,
                  where monthly art projects were organized to connect with and bring happiness to individuals in nursing homes.
                </p>
              </div>
              <div className="relative">
                <div className="bg-white rounded-3xl p-8" style={{ boxShadow: '0 0 0 0 transparent !important', WebkitBoxShadow: '0 0 0 0 transparent !important', MozBoxShadow: '0 0 0 0 transparent !important', filter: 'none !important' }}>
                  <img src="https://static.wixstatic.com/media/256f2c_9418bbebc8334c4488dfcbf740a3f8f1~mv2.jpg/v1/crop/x_73,y_247,w_1196,h_1352/fill/w_500,h_600,al_c,q_95,usm_0.66_1.00_0.01,enc_auto/IMG_0408_Original.jpg" alt="Early Cupid Project" className="w-full rounded-2xl story-image" style={{ boxShadow: '0 0 0 0 transparent !important', WebkitBoxShadow: '0 0 0 0 transparent !important', MozBoxShadow: '0 0 0 0 transparent !important', filter: 'none !important' }} />
                </div>
              </div>
            </div>

            {/* Story Part 2 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="md:order-2">
                <h3 className="text-3xl font-bold text-gray-900 mb-6">The Power of Greeting Cards</h3>
                <p className="text-lg text-gray-700 mb-6">
                  As time went on, the scope of our efforts expanded, and we realized the power of greeting cards
                  as a means of reaching out to even more people.
                </p>
                <p className="text-lg text-gray-700">
                  With an unwavering commitment to combatting loneliness and fostering community connections,
                  The Cupid Project was established in 2018. Since then, our annual card-giving project has become
                  a beacon of love, inspiring individuals and communities worldwide.
                </p>
              </div>
              <div className="md:order-1 relative">
                <div className="bg-white rounded-3xl p-8" style={{ boxShadow: '0 0 0 0 transparent !important', WebkitBoxShadow: '0 0 0 0 transparent !important', MozBoxShadow: '0 0 0 0 transparent !important', filter: 'none !important' }}>
                  <img src="/images/tcp/Val and Vincent.jpeg" alt="People with Valentine Cards" className="w-full max-w-md mx-auto story-image" style={{ boxShadow: '0 0 0 0 transparent !important', WebkitBoxShadow: '0 0 0 0 transparent !important', MozBoxShadow: '0 0 0 0 transparent !important', filter: 'none !important' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </motion.div>
  )
}
