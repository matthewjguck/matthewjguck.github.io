import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

export function Gallery() {
  const handleBackToHome = () => {
    window.location.hash = '#/';
  };

  const galleryData = {
    posters: {
      title: "Posters",
      description: "",
      images: [
        { src: "/images/perspective.png", alt: "Perspective", name: "Perspective Matters", madeIn: "Figma",

          description:
          [ { type: 'text',
              content: 'Final Submission for Design 60: Visual Expression.' }, 
            { type: 'text',
              content: '*"Design a poster based upon a subject about which you have strong feelings. Communicate these feelings as much through form as by descriptive or symbolic means."*' },
            { type: 'image',
              src: '/images/perspective-process.png',
              alt: 'Pink triangle design' },
            { type: 'text',
              content: 'The pink triangle was a symbol used to identify gay and transgender men in Nazi Concentration Camps. The inclusion of the triangle represents a flattening of identity.' },
            { type: 'text',
              content: 'The piece is meant to provoke self-reflection and elicit broad interpretation, but there are 2 main ideas I hoped to express:' },
            { type: 'text',
              content: '• that every individual is more than the label you may first give them.' },
            { type: 'text',
              content: '• that new perspectives can bring positive, colorful change into your life.' }, 
          
          ]
        },

        
        { src: "/images/Diet Coke.png", alt: "Diet Coke", name: "Diet Coke in the style of Mondrian", madeIn: "Figma", description: [
          { type: 'text', content: 'During COVID, my family had a painting night. The theme?' },
          { type: 'text', content: '*Paint your favorite food.*', center: true },
          { type: 'text', content: '"As a newly diagnosed Type 1 Diabetic, I was freshly introduced to the wonders of Diet Coke. The red stripe down the side of cans reminded me of Piet Mondrian\'s colorblocking."' },
          { type: 'images', srcs: [
            { src: '/images/diet-coke-2.png', alt: 'Diet Coke painting reference' },
            { src: '/images/diet-coke-3.jpeg', alt: 'Diet Coke can reference' }
          ] },
          { type: 'image', src: '/images/diet-coke-4.png', alt: 'Diet Coke final painting', size: 'large' },
          { type: 'text', content: 'Recreating this painting as an 11x17" print was one of my first forays into digital print-making and designing in Figma.' },
          { type: 'text', content: '*The similarity between "Piet" and "Diet" was hard to ignore. Alt. Title: Piet Coke.*', style: 'italic grey' }
        ] },
        { src: "/images/Risk1.png", alt: "Risk", name: "Risk: Go When Others Stop", madeIn: "Figma", description: [
          { type: 'text', content: 'As a broke college student and creative, I found that the best gifts I could give were ones I made myself. My brother is one of my biggest inspirations in life. When he told me his New Years Resolution was to "take more risks," I wanted to make something that would remind him to bet on himself, even when it feels uncomfortable or uncertain.' },
          { type: 'image', src: '/images/traffic-light.jpg', alt: 'Red traffic light', size: 'medium' },
          { type: 'text', content: 'In this work, red arrows point forward, creating tension between \'stop\' and \'go.\' The signal is deliberately mixed because taking risks is mixed: it requires you to move forward even when every cautious instinct says to pause.' },
          { type: 'text', content: 'The spiky shapes scattered throughout represent both the uncomfortable spotlight effect that taking risks can have and the sense of individualism it can engender.' }
        ] },
        { src: "/images/Canes.png", alt: "Canes", name: "Canes", madeIn: "Figma", description: [
          { type: 'text', content: 'A Figma exploration around grain and gradients. At the bottom of the work, there is a motto that plays off of the "Raising" in Raising Cane\'s:' },
          { type: 'text', content: '*"Always raising the bar."*', center: true },
          { type: 'text', content: 'I keep this piece on my wall to remind myself to keep growing (and because Cane\'s is delicious). Outdoing myself is not a stringent requirement for my next project, but a long-term commitment to being my most exceptional self.' }
        ] },
        { src: "/images/delfrisco.png", alt: "Del Frisco's Double Eagle Steakhouse", name: "Del Frisco's Double Eagle Steakhouse", madeIn: "Figma", description: [
          { type: 'text', content: 'Christmas gift for a soon-to-be ex-New Yorker.' },
          { type: 'text', content: 'I wanted to capture a unique slice of New York that felt local. I wanted the recipient to have a reminder that they truly lived in New York, not just an off-the-shelf *\'I❤️NY\'* mug or a print of the Statue of Liberty.' }
        ] },
        { src: "/images/Life Juice.png", alt: "Life Juice", name: "Life Juice", madeIn: "Slides", description: [
          { type: 'text', content: 'Assignment for IB Theory of Knowledge | Junior Year HS' },
          { type: 'text', content: 'Topic: Insulin Price Gouging' }
        ] }
      ],
      simpleImages: [
        { src: "/images/t1d.png", alt: "T1D", name: "T1D" },
        { src: "/images/Accesible Design.png", alt: "Accessible Design", name: "Accessible Design" },
        { src: "/images/Lo.png", alt: "LO", name: "LO" },
        { src: "/images/Noodle.png", alt: "Noodle", name: "Noodle" },
        { src: "/images/Firenze.png", alt: "Firenze", name: "Firenze" }
      ]
    },
    alternativeMedia: {
      title: "Alternative Media",
      description: "",
      images: [
        {
          src: "/images/blender-dorm-room.png",
          alt: "Blender Render of Stanford Dorm Room",
          name: "Blender Render of Stanford Dorm Room",
          madeIn: "Blender",
          description: [
            { type: "text", content: "For my final project in Computer Graphics, I created a ray traced render of my dorm room. The shot depicts a game of Mario 64 left unattended as the result of a spilled coffee." },
            { type: "images", srcs: ["/images/room-reference.jpg", "/images/blender-alternate-view.png"], labels: ["Room reference", "Alternate view"] }
          ]
        }
      ]
    },
    drawings: {
      title: "Drawings from Frosh Fall",
      description: "Reflections from my favorite moments of my first quarter of college.",
      images: [
        { src: "/images/drawing-1.jpg", alt: "Drawing 1", name: "Drawing 1" },
        { src: "/images/drawing-2.jpg", alt: "Drawing 2", name: "Drawing 2" },
        { src: "/images/drawing-3.jpg", alt: "Drawing 3", name: "Drawing 3" },
        { src: "/images/drawing-4.jpg", alt: "Drawing 4", name: "Drawing 4" },
        { src: "/images/drawing-5.jpg", alt: "Drawing 5", name: "Drawing 5" },
        { src: "/images/drawing-6.jpg", alt: "Drawing 6", name: "Drawing 6" },
        { src: "/images/drawing-7.jpg", alt: "Drawing 7", name: "Drawing 7" },
        { src: "/images/drawing-8.jpg", alt: "Drawing 8", name: "Drawing 8" },
        { src: "/images/drawing-9.jpg", alt: "Drawing 9", name: "Drawing 9" },
        { src: "/images/drawing-10.jpg", alt: "Drawing 10", name: "Drawing 10" },
        { src: "/images/drawing-11.jpg", alt: "Drawing 11", name: "Drawing 11" },
        { src: "/images/drawing-12.jpg", alt: "Drawing 12", name: "Drawing 12" },
        { src: "/images/drawing-13.jpg", alt: "Drawing 13", name: "Drawing 13" },
        { src: "/images/drawing-14.jpg", alt: "Drawing 14", name: "Drawing 14" },
        { src: "/images/drawing-15.jpg", alt: "Drawing 15", name: "Drawing 15" },
        { src: "/images/drawing-16.jpg", alt: "Drawing 16", name: "Drawing 16" }
      ]
    },
    paintings: {
      title: "Paintings",
      description: "",
      images: [
        { src: "/images/llama-painting-new.jpg", alt: "Llama Painting", name: "Llama Painting" },
        { src: "/images/painting-2.jpg", alt: "Painting 2", name: "Painting 2" },
        { src: "/images/painting-3.jpg", alt: "Painting 3", name: "Painting 3" }
      ]
    },
    stanford: {
      title: "Stanford Class of 2026",
      description: "A peek into my visual design work as Class President.",
      subsections: {
        junior: {
          title: "Junior Year",
          images: [],
          headerTriptych: [
            { src: "/images/Study Break.png", alt: "Study Break" },
            { src: "/images/Formal QR.png", alt: "Formal QR" },
            { src: "/images/Gamer Tourney.png", alt: "Gamer Tournament" }
          ],
          liftPuns: [
            { src: "/images/LIFT Pun Yara.png", alt: "LIFT Pun Yara" },
            { src: "/images/LIFT Pun Rishi.png", alt: "LIFT Pun Rishi" },
            { src: "/images/LIFT Pun Aili.png", alt: "LIFT Pun Aili" },
            { src: "/images/LIFT Pun Matthew.png", alt: "LIFT Pun Matthew" },
            { src: "/images/LIFT Pun Gabby.png", alt: "LIFT Pun Gabby" },
            { src: "/images/LIFT Pun pierre.png", alt: "LIFT Pun Pierre" }
          ],
          wrappedImages: [
            { src: "/images/Wrapped 1.png", alt: "Wrapped 1" },
            { src: "/images/Wrapped 2.png", alt: "Wrapped 2" },
            { src: "/images/Wrapped 5.png", alt: "Wrapped 5" },
            { src: "/images/Wrapped 4.png", alt: "Wrapped 4" },
            { src: "/images/Wrapped 6.png", alt: "Wrapped 6" },
            { src: "/images/Wrapped 7.png", alt: "Wrapped 7" },
            { src: "/images/Wrapped 8.png", alt: "Wrapped 8" },
            { src: "/images/Wrapped 9.png", alt: "Wrapped 9" },
            { src: "/images/Wrapped 10.png", alt: "Wrapped 10" }
          ]
        },
        sophomore: {
          title: "Sophomore Year",
          images: [],
          headerTriptych: [
            { src: "/images/CD1.png", alt: "CD1" },
            { src: "/images/CD2.png", alt: "CD2" },
            { src: "/images/CD3.png", alt: "CD3" }
          ],
          secondTriptych: [
            { src: "/images/Sophomore Formal Poster.png", alt: "Sophomore Formal Poster" },
            { src: "/images/FMOTQ.png", alt: "FMOTQ" },
            { src: "/images/Baja Blast (5).png", alt: "Baja Blast" }
          ]
        },
        freshman: {
          title: "Freshman Year",
          images: [],
          headerTriptych: [
            { src: "/images/Intergalactic Gala Flyer.png", alt: "Intergalactic Gala Flyer" },
            { src: "/images/Karaoke.png", alt: "Karaoke" },
            { src: "/images/Mona.png", alt: "Mona" }
          ],
          liftQuad: [
            { src: "/images/LIFT (16).png", alt: "LIFT 16" },
            { src: "/images/LIFT (17).png", alt: "LIFT 17" },
            { src: "/images/LIFT (18).png", alt: "LIFT 18" },
            { src: "/images/LIFT (15).png", alt: "LIFT 15" }
          ]
        }
      }
    },
    spotify: {
      title: "Spotify Playlists",
      description: "A handful of my Spotify Playlist Covers.",
      playlists: [
        {
          image: "/images/Lemon.png",
          alt: "Lemon",
          embedUrl: "https://open.spotify.com/embed/playlist/3aR2Fpbtiu5pNjMIjsNhbQ?utm_source=generator"
        },
        {
          image: "/images/Fork();.png",
          alt: "Fork();",
          embedUrl: "https://open.spotify.com/embed/playlist/25WE9Cu9f9gI82758wO1ZP?utm_source=generator"
        },
        {
          image: "/images/Turn Me On.png",
          alt: "Turn Me On",
          embedUrl: "https://open.spotify.com/embed/playlist/0MdQJADyR2LGvc6nMhiUxZ?utm_source=generator"
        },
        {
          image: "/images/Dis Co.png",
          alt: "Dis Co",
          embedUrl: "https://open.spotify.com/embed/playlist/4DXvdN0BxQOGwto2LSDoGW?utm_source=generator"
        },
        {
          image: "/images/Masarap to my ears.png",
          alt: "Masarap to my ears",
          embedUrl: "https://open.spotify.com/embed/playlist/32C74CSmwdzcGeIO7A80fy?utm_source=generator"
        },
        {
          image: "/images/If I was a HAG.png",
          alt: "If I was a HAG",
          embedUrl: "https://open.spotify.com/embed/playlist/4EgmC2Ip3aSLxqy6QUTr0A?utm_source=generator"
        },
        {
          image: "/images/para las chicas.png",
          alt: "para las chicas",
          embedUrl: "https://open.spotify.com/embed/playlist/3cY7DIQR5zFfb449T2ccOa?utm_source=generator"
        },
        {
          image: "/images/TIME.png",
          alt: "TIME",
          embedUrl: "https://open.spotify.com/embed/playlist/4cAIATnARq4mKhEiuRfqd4?utm_source=generator"
        }
      ]
    }
  };

  const renderDescription = (description) => {
    const parseText = (text) => {
      const parts = [];
      let lastIndex = 0;
      const regex = /\*([^*]+)\*/g;
      let match;

      while ((match = regex.exec(text)) !== null) {
        if (match.index > lastIndex) {
          parts.push(text.substring(lastIndex, match.index));
        }
        parts.push(<em key={parts.length}>{match[1]}</em>);
        lastIndex = match.index + match[0].length;
      }

      if (lastIndex < text.length) {
        parts.push(text.substring(lastIndex));
      }

      return parts.length > 0 ? parts : text;
    };

    if (typeof description === 'string') {
      return <p className="text-gray-700 leading-relaxed">{parseText(description)}</p>;
    }
    if (Array.isArray(description)) {
      return (
        <div className="space-y-4">
          {description.map((item, idx) => {
            if (item.type === 'text') {
              const textColor = item.style === 'italic grey' ? 'text-gray-500' : 'text-gray-700';
              const textAlign = item.center ? 'text-center' : '';
              return (
                <p key={idx} className={`${textColor} leading-relaxed ${textAlign}`}>
                  {parseText(item.content)}
                </p>
              );
            }
            if (item.type === 'image') {
              const widthMap = { large: 'w-2/3', medium: 'w-1/2', small: 'w-1/4' };
              const width = widthMap[item.size] || 'w-1/4';
              return (
                <div key={idx} className={`${width} mx-auto`}>
                  <img
                    src={item.src}
                    alt={item.alt || ''}
                    className="w-full h-auto object-contain"
                  />
                </div>
              );
            }
            if (item.type === 'images') {
              return (
                <div key={idx} className="flex justify-center gap-6">
                  {item.srcs.map((img, imgIdx) => (
                    <div key={imgIdx} className="flex-1 text-center flex flex-col">
                      <img
                        src={typeof img === 'string' ? img : img.src}
                        alt={typeof img === 'string' ? '' : (img.alt || '')}
                        className="w-full h-64 object-cover"
                      />
                      {item.labels && item.labels[imgIdx] && (
                        <p className="text-gray-500 italic text-sm mt-2">{item.labels[imgIdx]}</p>
                      )}
                    </div>
                  ))}
                </div>
              );
            }
          })}
        </div>
      );
    }
    return null;
  };

  const AlternatingImageGrid = ({ images }) => (
    <div className="space-y-20">
      {images.map((image, index) => {
        const isImageFirst = index % 2 === 0;
        return (
          <motion.div
            key={index}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            {isImageFirst ? (
              <>
                <div className="flex justify-center">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="h-220 object-contain"
                  />
                </div>
                <div className="space-y-4 md:pl-8">
                  <div>
                    <h3 className="text-4xl font-semibold text-black">{image.name}</h3>
                    {image.madeIn === "Figma" && (
                      <div className="flex items-center gap-2 mt-2">
                        <p className="text-sm text-gray-600">Made in</p>
                        <img src="/images/figma-logo.png" alt="Figma" className="h-8" />
                      </div>
                    )}
                    {image.madeIn === "Slides" && (
                      <div className="flex items-center gap-2 mt-2">
                        <p className="text-sm text-gray-600">Made in</p>
                        <img src="/images/slides-logo.png" alt="Google Slides" className="h-8" />
                      </div>
                    )}
                    {image.madeIn === "Blender" && (
                      <div className="flex items-center gap-2 mt-2">
                        <p className="text-sm text-gray-600">Made in</p>
                        <img src="/images/blender-logo.png" alt="Blender" className="h-8" />
                      </div>
                    )}
                    {image.madeIn && image.madeIn !== "Figma" && image.madeIn !== "Slides" && image.madeIn !== "Blender" && (
                      <p className="text-sm text-gray-600 mt-2">Made in {image.madeIn}</p>
                    )}
                  </div>
                  {renderDescription(image.description)}
                </div>
              </>
            ) : (
              <>
                <div className="space-y-4 md:pl-20">
                  <div>
                    <h3 className="text-4xl font-semibold text-black">{image.name}</h3>
                    {image.madeIn === "Figma" && (
                      <div className="flex items-center gap-2 mt-2">
                        <p className="text-sm text-gray-600">Made in</p>
                        <img src="/images/figma-logo.png" alt="Figma" className="h-8" />
                      </div>
                    )}
                    {image.madeIn === "Slides" && (
                      <div className="flex items-center gap-2 mt-2">
                        <p className="text-sm text-gray-600">Made in</p>
                        <img src="/images/slides-logo.png" alt="Google Slides" className="h-13" />
                      </div>
                    )}
                    {image.madeIn === "Blender" && (
                      <div className="flex items-center gap-2 mt-2">
                        <p className="text-sm text-gray-600">Made in</p>
                        <img src="/images/blender-logo.png" alt="Blender" className="h-8" />
                      </div>
                    )}
                    {image.madeIn && image.madeIn !== "Figma" && image.madeIn !== "Slides" && image.madeIn !== "Blender" && (
                      <p className="text-sm text-gray-600 mt-2">Made in {image.madeIn}</p>
                    )}
                  </div>
                  {renderDescription(image.description)}
                </div>
                <div className="flex justify-center">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="h-220 object-contain"
                  />
                </div>
              </>
            )}
          </motion.div>
        );
      })}
    </div>
  );

  const SpotifyPlaylistRow = ({ playlists }) => (
    <div className="overflow-x-auto pb-4">
      <div className="flex space-x-6 min-w-max">
        {playlists.map((playlist, index) => (
          <motion.div
            key={index}
            className="flex-shrink-0 w-80"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <img
              src={playlist.image}
              alt={playlist.alt}
              className="w-full h-80 object-contain mb-4"
            />
            <iframe
              style={{ borderRadius: '12px' }}
              src={playlist.embedUrl}
              width="100%"
              height="152"
              frameBorder="0"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              className="shadow-lg"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white text-black relative pb-16">
      {/* Light Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-gray-50" />

      {/* Video Background */}
      <div className="absolute top-0 left-0 right-0 h-66 overflow-hidden group">
        <video
          src="/videos/my-art.mp4"
          className="absolute inset-0 w-full h-full object-cover brightness-50 saturate-150"
          autoPlay
          muted
          loop
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

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
          className="relative h-96 flex flex-col items-center justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: -25 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="/images/gallery-title.svg"
            alt="Gallery"
            className="w-[clamp(50vw,50%,80vw)]"
          />
          <p className="text-xl text-gray-700 text-center max-w-3xl mx-auto px-16 mt-24">
            A collection of my creative design work, from personal art to Stanford class projects.
          </p>
        </motion.section>

        {/* Posters Section */}
        <motion.section
          className="container mx-auto px-4 mb-24"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-semibold mb-2 text-black text-center">{galleryData.posters.title}</h2>
          <p className="text-lg text-gray-700 mb-12 text-center">{galleryData.posters.description}</p>
          <AlternatingImageGrid images={galleryData.posters.images} />
          <div className="overflow-x-auto pb-4 mt-20">
            <div className="flex space-x-4 min-w-max">
              {galleryData.posters.simpleImages.map((image, index) => (
                <motion.div
                  key={index}
                  className="flex-shrink-0"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="h-120 object-contain"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Alternative Media Section */}
        <motion.section
          className="container mx-auto px-4 mb-24"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-semibold mb-2 text-black text-center">{galleryData.alternativeMedia.title}</h2>
          <p className="text-lg text-gray-700 mb-12 text-center">{galleryData.alternativeMedia.description}</p>
          <AlternatingImageGrid images={galleryData.alternativeMedia.images} />
        </motion.section>

        {/* Drawings Section */}
        <motion.section
          className="container mx-auto px-4 mb-24"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-semibold mb-2 text-black text-center">{galleryData.drawings.title}</h2>
          <p className="text-lg text-gray-700 mb-12 text-center">{galleryData.drawings.description}</p>
          <div className="grid grid-cols-5 gap-4 mb-4">
            {[0, 2, 3, 4, 5].map((idx, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <img src={galleryData.drawings.images[idx].src} alt={galleryData.drawings.images[idx].alt} className="w-full h-auto object-cover" />
              </motion.div>
            ))}
          </div>
          <div className="grid grid-cols-5 gap-4 mb-4">
            {[6, 7, 8, 9, 10].map((idx, i) => (
              <motion.div
                key={i + 5}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: (i + 5) * 0.1 }}
                viewport={{ once: true }}
              >
                <img src={galleryData.drawings.images[idx].src} alt={galleryData.drawings.images[idx].alt} className="w-full h-auto object-cover" />
              </motion.div>
            ))}
          </div>
          <div className="grid grid-cols-4 gap-4 mb-4">
            {[11, 12, 13, 15].map((idx, i) => (
              <motion.div
                key={i + 10}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: (i + 10) * 0.1 }}
                viewport={{ once: true }}
              >
                <img src={galleryData.drawings.images[idx].src} alt={galleryData.drawings.images[idx].alt} className="w-full h-auto object-cover" />
              </motion.div>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[1, 14].map((idx, i) => (
              <motion.div
                key={i + 14}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: (i + 14) * 0.1 }}
                viewport={{ once: true }}
              >
                <img src={galleryData.drawings.images[idx].src} alt={galleryData.drawings.images[idx].alt} className="w-full h-auto object-cover" />
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Paintings Section */}
        <motion.section
          className="container mx-auto px-4 mb-24"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-semibold mb-2 text-black text-center">{galleryData.paintings.title}</h2>
          <p className="text-lg text-gray-700 mb-12 text-center">{galleryData.paintings.description}</p>
          <div className="grid grid-cols-3 gap-4">
            {galleryData.paintings.images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <img src={image.src} alt={image.alt} className="w-full h-auto object-cover" />
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Stanford Class Work Section */}
        <motion.section
          className="container mx-auto px-4 mb-24"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-semibold mb-2 text-center">{galleryData.stanford.title}</h2>
          <p className="text-lg text-gray-700 mb-12 text-center">{galleryData.stanford.description}</p>

          {/* Junior Year */}
          <div className="mb-20">
            <h3 className="text-2xl font-semibold mb-12">{galleryData.stanford.subsections.junior.title}</h3>
            <div className="mb-20 grid grid-cols-3 gap-4">
              {galleryData.stanford.subsections.junior.headerTriptych.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <img src={image.src} alt={image.alt} className="w-full h-auto object-contain" />
                </motion.div>
              ))}
            </div>
            <div className="mb-20 grid grid-cols-3 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <img src="/images/Slice 4.png" alt="Slice 4" className="w-full h-auto object-contain" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <img src="/images/Slice 5.png" alt="Slice 5" className="w-full h-auto object-contain" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <img src="/images/Slice 6.png" alt="Slice 6" className="w-full h-auto object-contain" />
              </motion.div>
            </div>
            <AlternatingImageGrid images={galleryData.stanford.subsections.junior.images} />

            {/* LIFT Puns Scrollable Row */}
            <div className="mt-20">
              <h4 className="text-lg font-semibold mb-6 text-gray-700">LIFT Campaign Puns</h4>
              <div className="overflow-x-auto pb-4">
                <div className="flex space-x-4 min-w-max">
                  {galleryData.stanford.subsections.junior.liftPuns.map((image, index) => (
                    <motion.div
                      key={index}
                      className="flex-shrink-0"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="h-96 object-contain"
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Wrapped Images Scrollable Row */}
            <div className="mt-20">
              <h4 className="text-lg font-semibold mb-6 text-gray-700">Junior Year Wrapped</h4>
              <div className="overflow-x-auto pb-4">
                <div className="flex space-x-4 min-w-max">
                  {galleryData.stanford.subsections.junior.wrappedImages.map((image, index) => (
                    <motion.div
                      key={index}
                      className="flex-shrink-0"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="h-96 object-contain"
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Sophomore Year */}
          <div className="mb-20">
            <h3 className="text-2xl font-semibold mb-12">{galleryData.stanford.subsections.sophomore.title}</h3>
            <div className="mb-20 grid grid-cols-3 gap-4">
              {galleryData.stanford.subsections.sophomore.headerTriptych.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <img src={image.src} alt={image.alt} className="w-full h-auto object-contain" />
                </motion.div>
              ))}
            </div>
            <div className="mb-20 grid grid-cols-3 gap-4">
              {galleryData.stanford.subsections.sophomore.secondTriptych.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <img src={image.src} alt={image.alt} className="w-full h-auto object-contain" />
                </motion.div>
              ))}
            </div>
            <AlternatingImageGrid images={galleryData.stanford.subsections.sophomore.images} />
          </div>

          {/* Freshman Year */}
          <div className="mb-20">
            <h3 className="text-2xl font-semibold mb-12">{galleryData.stanford.subsections.freshman.title}</h3>
            <div className="mb-20 grid grid-cols-3 gap-4">
              {galleryData.stanford.subsections.freshman.headerTriptych.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <img src={image.src} alt={image.alt} className="w-full h-auto object-contain" />
                </motion.div>
              ))}
            </div>
            <div className="mb-20 grid grid-cols-4 gap-4">
              {galleryData.stanford.subsections.freshman.liftQuad.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <img src={image.src} alt={image.alt} className="w-full h-auto object-contain" />
                </motion.div>
              ))}
            </div>
            <AlternatingImageGrid images={galleryData.stanford.subsections.freshman.images} />
          </div>
        </motion.section>

        {/* Spotify Playlists Section */}
        <motion.section
          className="container mx-auto px-4 mb-24"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-semibold mb-2 text-center">{galleryData.spotify.title}</h2>
          <p className="text-lg text-gray-700 mb-8 text-center">{galleryData.spotify.description}</p>
          <SpotifyPlaylistRow playlists={galleryData.spotify.playlists} />
        </motion.section>
      </div>
    </div>
  );
}
