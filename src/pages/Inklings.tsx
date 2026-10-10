import React, { useEffect } from 'react'
import { motion } from 'framer-motion'

const inklingsStyles = `
  @font-face {
    font-family: 'Printvetica';
    src: url('/fonts/Printvetica.otf') format('opentype');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  .inklings-project {
    font-family: 'Printvetica', sans-serif;
  }

  .inklings-project img,
  .inklings-story-image {
    --tw-shadow: 0 0 0 0 transparent !important;
    --tw-shadow-color: transparent !important;
    box-shadow: 0 0 0 0 transparent !important;
    -webkit-box-shadow: 0 0 0 0 transparent !important;
    -moz-box-shadow: 0 0 0 0 transparent !important;
  }

  .inklings-logo-container {
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 0.5rem 0 1.5rem;
  }

  .inklings-wordmark {
    width: 100%;
    max-width: 72rem;
    margin: 0 auto;
    padding: 0 1rem;
  }

  .inklings-wordmark img {
    width: 100%;
    height: auto;
    display: block;
  }

  .inklings-spread-love {
    background-image: url('/images/inklings/inklings-p12-1.png');
    background-size: 220px auto;
    background-repeat: repeat;
  }

  .inklings-quadrant-box {
    border: 2px solid #111827;
  }

  .inklings-technical-photo {
    position: relative;
  }

  .inklings-technical-photo .inklings-detail-inset {
    position: absolute !important;
    bottom: 0.75rem;
    right: 0.75rem;
    width: 50% !important;
    height: auto !important;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.3);
    border: 4px solid #ffffff;
  }

  .inklings-technical-photo .inklings-pi-badge {
    position: absolute !important;
    top: 0.75rem;
    left: 0.75rem;
    width: 2.5rem !important;
    height: auto !important;
    border-radius: 0 !important;
  }

  .inklings-award-image {
    width: 66% !important;
  }

  .inklings-video-mask {
    -webkit-mask-image: url('/images/inklings/rough-video-mask.svg');
    mask-image: url('/images/inklings/rough-video-mask.svg');
    -webkit-mask-mode: alpha;
    mask-mode: alpha;
    -webkit-mask-repeat: no-repeat;
    mask-repeat: no-repeat;
    -webkit-mask-size: 100% 100%;
    mask-size: 100% 100%;
    -webkit-mask-position: center;
    mask-position: center;
  }
`

export function Inklings() {
  useEffect(() => {
    const style = document.createElement('style')
    style.innerHTML = inklingsStyles
    document.head.appendChild(style)

    return () => {
      document.head.removeChild(style)
    }
  }, [])

  return (
    <>
      {/* Section 0: Logo and intro */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="inklings-project receipt-page-bg py-24 px-4 md:px-8"
      >
        <div className="receipt-paper max-w-6xl mx-auto">
          <div className="px-6 py-16 md:px-16">
            <div className="inklings-logo-container">
              <div className="inklings-wordmark">
                <img src="/images/inklings/inklings-combined-header.svg" alt="Inklings" />
              </div>
            </div>

            <div className="md:max-w-6xl mx-auto px-0 md:px-4 mt-16 mb-16">
              <video
                src="/videos/Inklings.mp4"
                controls
                preload="yes"
                playsInline
                className="w-full md:w-4/5 mx-auto inklings-story-image inklings-video-mask"
              ></video>
            </div>

            <div className="flex flex-col flex-col-reverse md:grid md:grid-cols-10 gap-8 items-center max-w-6xl mx-auto px-0">
              <div className="md:col-span-4 flex flex-col gap-8">
                <h1 className="text-4xl md:text-5xl font-bold">What is an Inkling?</h1>
                <p className="text-2xl text-gray-700 leading-relaxed">
                  Inklings are a tangible reminder that someone is thinking about you.
                </p>
                <p className="text-2xl text-gray-700 leading-relaxed">
                  They turn kind, passing thoughts into meaningful connection between friends.
                </p>
              </div>

              <div className="md:col-span-6 flex justify-center align-center w-full">
                <div>
                  <img src="/images/inklings/user-made-inklings.png" alt="Inklings Illustration" className="rounded-lg shadow-lg w-full h-auto object-cover" />
                  <p className="text-md text-gray-700 text-center">User Generated Inklings</p>
                </div>
              </div>
            </div>

            {/* How Does Inklings Work */}
            <div className="max-w-6xl mx-auto mt-16 mb-16">
              <h1 className="text-4xl md:text-5xl font-bold">How does Inklings work?</h1>
              <p className="text-2xl text-gray-700 leading-relaxed">
                Inklings consists of a network of physical receipt printers and a web app.
              </p>

              <div className="grid md:grid-cols-10 gap-8 items-center mt-16">
                <div className="md:col-span-6 flex flex-col gap-6">
                  <h2 className="text-4xl font-semibold">Sending</h2>
                  <p className="text-2xl text-gray-700 leading-relaxed">
                    Senders create their message on the Inklings web app, and send a notification to their friend's Stanford University email.
                  </p>
                  <p className="text-2xl text-gray-700 leading-relaxed">
                    The message editor allows users to write with unique fonts, dither images for B&W printing, and add fun stickers via GIPHY's sticker API.
                  </p>
                </div>
                <div className="md:col-span-4 flex justify-center">
                  <img src="/images/inklings/sending.png" alt="Inklings web app message editor showing a composed message with fonts and stickers" className="rounded-lg shadow-lg w-full h-auto object-cover" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-10 gap-8 items-center mt-20">
                <div className="md:col-span-6 flex flex-col gap-6">
                  <h2 className="text-4xl font-semibold">Receiving</h2>
                  <p className="text-2xl text-gray-700 leading-relaxed">
                    Recipients of an Inkling receive an email notification prompting them to go to an Inklings printer and print their message.
                  </p>
                  <p className="text-2xl text-gray-700 leading-relaxed">
                    Once they sign in and click print, Inklings will ensure that device's location is within 10m of a printer. If it is, the message will print within 3 seconds.
                  </p>
                </div>
                <div className="md:col-span-1"></div>
                <div className="md:col-span-3 flex justify-center">
                  <img src="/images/inklings/receiving.png" alt="Inklings printer confirming a recipient's location before printing their message" className="rounded-lg shadow-lg w-full h-auto object-cover" />
                </div>
              </div>

              <div className="mt-20">
                <h3 className="text-4xl font-semibold mb-6 text-center">Technical</h3>
                <p className="text-2xl text-gray-700 leading-relaxed text-center max-w-4xl mx-auto mb-10">
                  Each printer is connected to a Raspberry Pi running a custom print server, which continuously polls our Supabase backend for new print jobs and processes them automatically.
                </p>
                <div className="grid md:grid-cols-9 gap-6 max-w-5xl mx-auto items-center">
                  <div className="md:col-span-1"></div>
                  <img src="/images/inklings/wire diagram.png" alt="Inklings receipt printer stickered with the Inklings logo and a QR code" className="rounded-lg col-span-3 w-full h-auto object-cover" />
                  <div className="md:col-span-1"></div>
                  <img src="/images/inklings/tech stack lol.png" alt="Technical summary: React frontend, Supabase backend, Raspberry Pi print server running print_server.py over Stanford Wi-Fi with a custom USB driver, Resend for email, Wix and PorkBun for hosting, 310 GitHub commits in 5 weeks" className="rounded-lg col-span-3 w-full h-auto object-cover" />
                  <div className="md:col-span-1"></div>
                </div>
              </div>
            </div>

            {/* The Problem */}
            <div className="max-w-6xl mx-auto mt-16 mb-16">
              <h2 className="text-4xl font-semibold">The Problem</h2>
              <p className="text-2xl text-gray-700 leading-relaxed">
                Our team originally set out to address the problem of connecting with loved ones at a distance.
              </p>
              <div className="grid md:grid-cols-9 gap-12 items-center">
                <div className="flex flex-col col-span-4 gap-6">
                  <p className="text-2xl text-gray-700 leading-relaxed">
                    Every existing way of reaching someone forced a tradeoff. Mailed letters and handwritten cards feel
                    intentional, but they're slow and take real commitment. Texts, DMs, and social feeds are fast, but
                    they're often passive — easy to send without much thought, and just as easy to forget. Nothing let
                    you send something quick that still felt like it meant something.
                  </p>
                </div>
                <img src="/images/inklings/2x2.png" alt="A hand holding a printed Inkling with the message 'You light up my life' and a hand-drawn sun sticker" className="rounded-lg shadow-lg col-span-5 w-full h-auto object-cover" />
              </div>
            </div>

            {/* Web App */}
            <div className="py-20 bg-white -mx-6 md:-mx-16 px-6 md:px-16">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-4xl font-bold text-gray-900 mb-4">Inklings Web App</h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <img src="/images/inklings/inklings-p6-6.png" alt="Inklings app Home screen with Send and Print buttons" className="w-full max-w mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-gray-900 mb-2">1. Start an Inkling</h3>
                    <p className="text-gray-600">Open the web app and choose to send or print a new Inkling.</p>
                  </div>
                  <div className="text-center">
                    <img src="/images/inklings/inklings-p6-5.png" alt="Inklings app screen asking who you want to send this to, with a SUNet ID field" className="w-full max-w mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-gray-900 mb-2">2. Pick a Friend</h3>
                    <p className="text-gray-600">Address it to their Stanford SUNet ID — no accounts or contact syncing needed.</p>
                  </div>
                  <div className="text-center">
                    <img src="/images/inklings/inklings-p6-4.png" alt="Inklings app compose screen with a hand-drawn sun sticker and the message You light up my life" className="w-full max-w mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-gray-900 mb-2">3. Add a Note</h3>
                    <p className="text-gray-600">Write a message, drop in a photo or sticker, and send it off.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Award */}
            <div className="max-w-6xl mx-auto mt-16 mb-16">
              <p className="text-2xl text-gray-700 leading-relaxed text-center max-w-3xl mx-auto mb-10">
                Inklings was a recipient of the Robert H. McKim Award, which celebrates outstanding work in the Undergraduate Design capstone.
              </p>
              <img src="/images/inklings/award.png" alt="Robert H. McKim Award" className="inklings-award-image h-auto mx-auto block rounded-lg" />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Section 1: Iteration Badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="inklings-project receipt-page-bg py-24 px-4 md:px-8"
      >
        <div className="receipt-paper max-w-6xl mx-auto">
          <div className="px-6 py-16 md:px-16">
            <div className="grid md:grid-cols-3 gap-8 text-center py-8">
              <div>
                <p className="text-sm font-semibold text-gray-500 tracking-wide uppercase mb-2">1st Iteration</p>
                <h3 className="text-4xl font-bold text-gray-900">Solis</h3>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-500 tracking-wide uppercase mb-2">2nd Iteration</p>
                <h3 className="text-4xl font-bold text-gray-900">Orbit</h3>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-500 tracking-wide uppercase mb-2">3rd Iteration</p>
                <h3 className="text-4xl font-bold text-gray-900">Inklings</h3>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Section 2: Solis */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="inklings-project receipt-page-bg py-24 px-4 md:px-8"
      >
        <div className="receipt-paper max-w-6xl mx-auto">
          <div className="px-6 py-16 md:px-16">
            <h2 className="text-5xl font-bold mb-2">Solis</h2>
            <p className="text-2xl font-light text-gray-700 mb-8">GET CALMED, COOLED, &amp; CONNECTED.</p>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Solis is a sleek, bar-shaped device that responds to an outward breath by releasing a short burst of cool, illuminated mist. Designed for crowded, hot, or overwhelming environments such as raves, concerts, and nightclubs, it offers a moment of physical and sensory relief for both the user and their surrounding environment.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Rather than inhaling, users blow outward, directing the mist toward themselves or others nearby. The cooling effect helps reduce heat and overstimulation, and the infusion of menthol creates an immediate calming sensation. The light patterns make the interaction mesmerizing but contained, turning a simple cooling action into a shared, ambient moment.
            </p>

            <h3 className="text-3xl font-semibold mt-12 mb-8">Three Core Functions</h3>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div>
                <h4 className="text-xl font-bold mb-3">Cooling</h4>
                <p className="text-gray-700">Releases cool air and mist that can be directed toward the face, neck, or hands to reduce heat</p>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-3">Calming</h4>
                <p className="text-gray-700">Menthol-infused mist and controlled airflow create a grounding effect in loud, crowded settings</p>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-3">Connection</h4>
                <p className="text-gray-700">Enables a shared, mutually beneficial interaction without needing to speak</p>
              </div>
            </div>

            <h3 className="text-3xl font-semibold mt-12 mb-8">Value Proposition</h3>
            <ul className="space-y-3 text-lg text-gray-700">
              <li><strong>Oral Fixation:</strong> Provides a satisfying hand-to-mouth action and a short, repeatable ritual</li>
              <li><strong>Lung Health:</strong> Everything is outward-facing, no smoke, no vapor, nothing entering the body</li>
              <li><strong>Ambient Accessory:</strong> Functions like other rave essentials (fans, lights, trinkets) that stimulate connection</li>
              <li><strong>Calming Effect:</strong> Menthol-infused mist creates a grounding effect without overwhelming</li>
              <li><strong>Low-Pressure Social:</strong> Enables shared interaction without the demand of conversation</li>
              <li><strong>Safety:</strong> Offers relief from heat, claustrophobia, and overwhelm without added risks</li>
            </ul>

            <p className="text-lg text-gray-700 italic mt-8">
              The only product that combines the best qualities of a cigarette without the harm, addressing broader issues of heat exhaustion, addiction, and loneliness.
            </p>

            <div className="w-full mt-16 -mx-6 md:-mx-16">
              <img src="/images/inklings/solis-concept-sheet.png" alt="Solis concept sheet showing device design, tagline, and value propositions" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Section 3: The Pivot */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="inklings-project receipt-page-bg py-24 px-4 md:px-8"
      >
        <div className="receipt-paper max-w-6xl mx-auto">
          <div className="px-6 py-16 md:px-16">
            <h2 className="text-4xl font-bold mb-8">The Pivot</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Solis prototyping taught us something unexpected: the physical device wasn't the core insight. What mattered was the <strong>ritual</strong> — the act of sharing a grounded moment with someone. The breath, the light, the sensation — these created a low-pressure space for authentic connection.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              But Solis was location-specific. It only worked for people in raves and concerts. The real opportunity was bigger: How could we enable this kind of authentic, ritual-based sharing across all of life? How could college kids connect meaningfully across their two worlds — home and school — without the performance pressure of social media?
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              That question led us to Orbit. A digital platform designed around the same principles that made Solis work: genuine moments, low-pressure sharing, and meaningful connection with the people who matter most.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Section 4: Orbit */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="inklings-project receipt-page-bg py-24 px-4 md:px-8"
      >
        <div className="receipt-paper max-w-6xl mx-auto">
          <div className="px-6 py-16 md:px-16">
            <h2 className="text-5xl font-bold mb-2">Orbit</h2>
            <p className="text-2xl font-light text-gray-700 mb-8">BUILD AN ORBIT AROUND WHAT MATTERS.</p>

            <div className="grid md:grid-cols-2 gap-12 items-start mt-12 mb-12">
              <div>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  College kids live two lives — one at home and one at school. They want to share moments with the people they care about across both worlds, but existing solutions felt wrong. Texting is authentic but demanding. Social media is easy to share but inherently curated. There's no space for genuine moments without performance.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Orbit is a one-way sharing app designed for authentic connection. You collect memories and share them with friends in different orbits around you — like group stories, but they get saved to your friends' orbits for later viewing. No likes. No comments. No replies. Just real moments, preserved.
                </p>
              </div>
              <div>
                <img src="/images/inklings/orbit-values.png" alt="Design framework showing the gap between texting and social media, Orbit's values of authentic, easy to share, reflective, and intimate" className="w-full h-auto rounded-lg" />
              </div>
            </div>

            <h3 className="text-3xl font-semibold mt-12 mb-8">Three Core Principles</h3>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <p className="text-4xl font-bold text-gray-900 mb-3">01</p>
                <p className="text-lg text-gray-700">You are the center of your own universe.</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-gray-900 mb-3">02</p>
                <p className="text-lg text-gray-700">Share moments to people in orbits around you.</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-gray-900 mb-3">03</p>
                <p className="text-lg text-gray-700">No likes. No comments. No replies.</p>
              </div>
            </div>

            <h3 className="text-3xl font-semibold mt-12 mb-8">Features</h3>
            <div className="w-full mb-12">
              <img src="/images/inklings/orbit-mockups.png" alt="Orbit app mockups showing sharing via orbits, orb communication, and audio-first interface" className="w-full h-auto rounded-lg" />
            </div>

            <h3 className="text-3xl font-semibold mt-12 mb-8">The Real Impact</h3>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="border-l-4 border-gray-300 pl-4">
                <p className="text-gray-700 leading-relaxed">
                  "Lately, I've appreciated talking to my kids. It reminded me like at their age — what was important to me back then and what I thought my future held. It <strong>makes me feel young again.</strong>"
                </p>
              </div>
              <div className="border-l-4 border-gray-300 pl-4">
                <p className="text-gray-700 leading-relaxed">
                  "The <strong>highlight of my week</strong> was hearing my daughter say 'I love you so much, Mommy,' and then hug me. 💛"
                </p>
              </div>
              <div className="border-l-4 border-gray-300 pl-4">
                <p className="text-gray-700 leading-relaxed">
                  "What do you want to be when you grow up? This question has been <strong>weighing on me</strong> recently as I enter into my final years of undergrad — I still <strong>feel lost</strong> in the never ending void of options."
                </p>
              </div>
            </div>

            <h3 className="text-3xl font-semibold mt-16 mb-8 text-center">Visual Evolution</h3>
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <img src="/images/inklings/solis-poster-1.jpg" alt="Solis iteration visual exploration" className="w-full h-auto rounded-lg" />
              <img src="/images/inklings/solis-poster-2.jpg" alt="Solis iteration visual exploration" className="w-full h-auto rounded-lg" />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Section 5: The Second Pivot */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="inklings-project receipt-page-bg py-24 px-4 md:px-8"
      >
        <div className="receipt-paper max-w-6xl mx-auto">
          <div className="px-6 py-16 md:px-16">
            <h2 className="text-4xl font-bold mb-8">The Second Pivot</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Orbit taught us the power of asynchronous, reflective sharing. People wanted a space to share genuine moments without the pressure of immediate response. But as we watched people use it, we noticed something: the most meaningful interactions happened when sharing felt <strong>intentional</strong> and <strong>surprising</strong>.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Digital notifications blend into the noise. But what if the moment of connection was <strong>physical</strong>? What if instead of checking an app, your friend walked to a printer and found a message from you waiting — something tangible, something that felt like a real gesture of care?
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              That insight led to Inklings. A system that takes the core principle — thoughtful, authentic connection between friends — and makes it physical. Messages that get printed. Moments that get preserved as tangible artifacts. A reminder that sometimes the most meaningful way to show someone you're thinking of them is to send something that <strong>arrives</strong>, that can be held, that says "I took the time to send this."
            </p>
          </div>
        </div>
      </motion.div>
    </>
  )
}
