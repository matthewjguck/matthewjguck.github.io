import React, { useState } from 'react';

export default function SkyHigh() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImageSrc, setModalImageSrc] = useState('');

  const openImageModal = (src: string) => {
    setModalImageSrc(src);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeImageModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeImageModal();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="bg-white text-gray-900">
      {/* Header */}
      <div className="bg-white py-12">
        <div className="container mx-auto px-6 text-center">
          <div className="flex flex-wrap justify-center gap-6 text-gray-500 text-lg mt-6">
            <span>Stanford DESIGN 1</span>
            <span>•</span>
            <span>Spring 2024</span>
            <span>•</span>
            <span>Experience Design</span>
          </div>
        </div>
      </div>

      {/* Main Image Display */}
      <div className="bg-white py-8">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="bg-gray-100 p-4 rounded-2xl">
              <img 
                src="/images/Escape Room Spread.png" 
                alt="Sky High Hypoglycemia Escape Room Design" 
                className="w-full h-auto rounded-xl cursor-pointer hover:opacity-95 transition-opacity"
                onClick={() => openImageModal('/images/Escape Room Spread.png')}
              />
            </div>
            <p className="text-center text-gray-600 mt-4 text-lg">
              Click image to view full size
            </p>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4" 
          onClick={closeImageModal}
        >
          <div className="relative max-w-full max-h-full">
            <img 
              src={modalImageSrc} 
              alt="" 
              className="max-w-full max-h-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <button 
              onClick={closeImageModal}
              className="absolute top-4 right-4 text-white text-3xl hover:text-gray-300 bg-black bg-opacity-50 rounded-full w-12 h-12 flex items-center justify-center"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
