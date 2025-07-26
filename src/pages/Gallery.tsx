import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

export function Gallery() {
  const handleBackToHome = () => {
    window.location.hash = '#/';
  };
  // Gallery sections organized by category
  const galleryData = {
    posters: {
      title: "Posters",
      description: "A digital preview of my dorm room walls.",
      images: [
        { src: "/images/perspective.png", alt: "Perspective" },
        { src: "/images/Diet Coke.png", alt: "Diet Coke" },
        { src: "/images/risk.png", alt: "Risk" },
        { src: "/images/canes.png", alt: "Canes" },
        { src: "/images/delfrisco.png", alt: "Del Frisco's Double Eagle Steakhouse" },
        { src: "/images/t1d.png", alt: "T1D" },
        { src: "/images/Accesible Design.png", alt: "Accessible Design" },
        { src: "/images/lo.png", alt: "LO" },
        { src: "/images/Noodle.png", alt: "Noodle" },
        { src: "/images/Firenze.png", alt: "Firenze" },
        { src: "/images/Life Juice.png", alt: "Life Juice" }
      ]
    },
    stanford: {
      title: "Stanford Class of 2026",
      description: "A peek into my visual design work as Class President.",
      subsections: {
        junior: {
          title: "Junior Year",
          images: [
            { src: "/images/Study Break.png", alt: "Study Break" },
            { src: "/images/Slice 4.png", alt: "Slice 4" },
            { src: "/images/Slice 5.png", alt: "Slice 5" },
            { src: "/images/Slice 6.png", alt: "Slice 6" },
            { src: "/images/Formal QR.png", alt: "Formal QR" },
            { src: "/images/Gamer Tourney.png", alt: "Gamer Tournament" },
            { src: "/images/LIFT Pun Yara.png", alt: "LIFT Pun Yara" },
            { src: "/images/LIFT Pun Rishi.png", alt: "LIFT Pun Rishi" },
            { src: "/images/LIFT Pun Aili.png", alt: "LIFT Pun Aili" },
            { src: "/images/LIFT Pun Matthew.png", alt: "LIFT Pun Matthew" },
            { src: "/images/LIFT Pun Gabby.png", alt: "LIFT Pun Gabby" },
            { src: "/images/LIFT Pun pierre.png", alt: "LIFT Pun Pierre" },
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
          images: [
            { src: "/images/Sophomore Formal Poster.png", alt: "Sophomore Formal Poster" },
            { src: "/images/Soph Formal Story.png", alt: "Soph Formal Story" },
            { src: "/images/FMOTQ.png", alt: "FMOTQ" },
            { src: "/images/CD1.png", alt: "CD1" },
            { src: "/images/CD2.png", alt: "CD2" },
            { src: "/images/CD3.png", alt: "CD3" },
            { src: "/images/Baja Blast (5).png", alt: "Baja Blast" }
          ]
        },
        freshman: {
          title: "Freshman Year",
          images: [
            { src: "/images/Intergalactic Gala Flyer.png", alt: "Intergalactic Gala Flyer" },
            { src: "/images/Karaoke.png", alt: "Karaoke" },
            { src: "/images/Mona.png", alt: "Mona" },
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

  const ScrollableImageRow = ({ images, height = "h-120" }) => (
    <div className="overflow-x-auto pb-4">
      <div className="flex space-x-4 min-w-max">
        {images.map((image, index) => (
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
              className={`${height} object-contain shadow-lg hover:shadow-xl transition-shadow duration-300`}
            />
          </motion.div>
        ))}
      </div>
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
    <div className="min-h-screen bg-black text-white relative pb-16">
      {/* Black Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black to-black/80" />
      
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
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900/80 hover:bg-gray-800/80 border border-gray-600 rounded-full text-white transition-all duration-200 group shadow-lg hover:shadow-xl font-medium backdrop-blur-sm"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform duration-200" />
            Back to Home
          </motion.button>
        </div>

        {/* Header */}
        <motion.section
          className="container mx-auto px-4 py-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-bold text-center mb-8">Gallery</h1>
          <p className="text-xl text-gray-300 text-center max-w-2xl mx-auto">
            A collection of my visual design work, from personal art to Stanford class projects.
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
          <h2 className="text-3xl font-semibold mb-2">{galleryData.posters.title}</h2>
          <p className="text-lg text-gray-300 mb-8">{galleryData.posters.description}</p>
          <ScrollableImageRow images={galleryData.posters.images} />
        </motion.section>

        {/* Stanford Class Work Section */}
        <motion.section
          className="container mx-auto px-4 mb-24"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold mb-2">{galleryData.stanford.title}</h2>
          <p className="text-lg text-gray-300 mb-12">{galleryData.stanford.description}</p>

          {/* Junior Year */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-6">{galleryData.stanford.subsections.junior.title}</h3>
            <ScrollableImageRow images={galleryData.stanford.subsections.junior.images} />
          </div>

          {/* Sophomore Year */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-6">{galleryData.stanford.subsections.sophomore.title}</h3>
            <ScrollableImageRow images={galleryData.stanford.subsections.sophomore.images} />
          </div>

          {/* Freshman Year */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-6">{galleryData.stanford.subsections.freshman.title}</h3>
            <ScrollableImageRow images={galleryData.stanford.subsections.freshman.images} />
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
          <h2 className="text-3xl font-semibold mb-2">{galleryData.spotify.title}</h2>
          <p className="text-lg text-gray-300 mb-8">{galleryData.spotify.description}</p>
          <SpotifyPlaylistRow playlists={galleryData.spotify.playlists} />
        </motion.section>
      </div>
    </div>
  );
}
