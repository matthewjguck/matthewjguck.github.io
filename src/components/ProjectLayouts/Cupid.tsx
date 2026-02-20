import React from 'react';

const carouselImages = [
  { src: '/images/tcp/Aili and Gabby.JPG', alt: 'Volunteers Making Cards' },
  { src: '/images/tcp/8.JPG', alt: 'Card Distribution' },
  { src: '/images/tcp/First Year.jpg', alt: 'First Year Project' },
  { src: '/images/tcp/FullSizeRender.jpeg', alt: 'TCP Activity' },
  { src: '/images/tcp/Greta.jpeg', alt: 'Volunteer Greta' },
  { src: '/images/tcp/IMG_0761.JPG', alt: 'Community Volunteers' },
  { src: '/images/tcp/IMG_0897.JPG', alt: 'Card Making Process' },
  { src: '/images/tcp/IMG_0901.JPG', alt: 'Volunteers at Work' },
  { src: '/images/tcp/IMG_6159.jpeg', alt: 'TCP Team' },
  { src: '/images/tcp/IMG_6194.jpeg', alt: 'Card Creation' },
];

export default function Cupid() {
  return (
    <div className="bg-white">
      <style>{`
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
        .carousel-item img {
          width: 380px !important;
          height: 380px !important;
          object-fit: cover !important;
          object-position: center !important;
          display: block !important;
        }
      `}</style>

      {/* Section 1: Explain TCP */}
      <div className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">What is The Cupid Project?</h3>
              <p className="text-lg text-gray-700 mb-6">
                The Cupid Project is an annual card-giving project delivering to nursing homes every Valentine's Day since 2018.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                We aim to combat loneliness, bring communities together, and inspire others to engage in philanthropy. 
                We firmly believe that a small act of kindness can put a smile on someone's face and ignite a chain reaction of compassion and goodwill.
              </p>
            </div>
            <div className="shadow-none">
              <img src="/images/tcp/Valentines Card Giving.png" alt="Valentine's Card Giving" className="w-full max-w-md mx-auto shadow-none" />
            </div>
          </div>
        </div>
      </div>

      {/* Collage Section */}
      <div className="py-12 w-screen relative left-1/2 right-1/2 -mx-[50vw] overflow-hidden">
        <img src="/images/TCP Collage.png" alt="The Cupid Project collage" className="w-full h-auto shadow-none scale-150 md:scale-125" />
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

          {/* Impact Numbers */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-200 text-center flex flex-col justify-center items-center min-h-[200px]">
              <div className="text-5xl font-bold text-pink-600 mb-4">175,500+</div>
              <p className="text-lg text-gray-700">cards delivered to individuals in need</p>
            </div>
            
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-200 text-center flex flex-col justify-center items-center min-h-[200px]">
              <div className="text-5xl font-bold text-red-600 mb-4">42,700+</div>
              <p className="text-lg text-gray-700">volunteers making a positive impact</p>
            </div>
            
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-200 text-center flex flex-col justify-center items-center min-h-[200px]">
              <div className="text-5xl font-bold text-orange-600 mb-4">2,217+</div>
              <p className="text-lg text-gray-700">facilities reached in 1500 cities across 10 countries</p>
            </div>
          </div>
        </div>
        
        {/* Carousel */}
        <div className="w-full">
          <div className="carousel-container overflow-hidden">
            <div className="carousel-track">
              {carouselImages.map((img, idx) => (
                <div key={`carousel-1-${idx}`} className="carousel-item">
                  <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
                </div>
              ))}
              {carouselImages.map((img, idx) => (
                <div key={`carousel-2-${idx}`} className="carousel-item">
                  <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Section 3: How it Started */}
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
                <div className="bg-white rounded-3xl p-8" style={{ boxShadow: '0 0 0 0 transparent' }}>
                  <img 
                    src="https://static.wixstatic.com/media/256f2c_9418bbebc8334c4488dfcbf740a3f8f1~mv2.jpg/v1/crop/x_73,y_247,w_1196,h_1352/fill/w_500,h_600,al_c,q_95,usm_0.66_1.00_0.01,enc_auto/IMG_0408_Original.jpg" 
                    alt="Early Cupid Project" 
                    className="w-full rounded-2xl"
                    style={{ boxShadow: '0 0 0 0 transparent' }}
                  />
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
                <div className="bg-white rounded-3xl p-8" style={{ boxShadow: '0 0 0 0 transparent' }}>
                  <img 
                    src="/images/tcp/Val and Vincent.jpeg" 
                    alt="People with Valentine Cards" 
                    className="w-full max-w-md mx-auto"
                    style={{ boxShadow: '0 0 0 0 transparent' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
