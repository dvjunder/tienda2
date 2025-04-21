import React, { useState, useEffect, lazy, Suspense } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
  "https://files.underdj.com/api/public/dl/UHLROEZ7/etc/easypanel/projects/web/imagenes/image5.jpg",
  "https://files.underdj.com/api/public/dl/T56ESagG/etc/easypanel/projects/web/imagenes/image4.jpg",
  "https://files.underdj.com/api/public/dl/YrHdeTx1/etc/easypanel/projects/web/imagenes/image5.jpg",
  "https://files.underdj.com/api/public/dl/a9O3PMXN/etc/easypanel/projects/web/imagenes/image6.jpg",
  "https://files.underdj.com/api/public/dl/2qXmybW0/etc/easypanel/projects/web/imagenes/image1.jpg"
].map(url => ({
  original: url,
  thumbnail: `${url}?w=150`
}));

export function ImageGallery() {
  const [selectedImage, setSelectedImage] = useState<string>(images[0].original);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [imagesLoaded, setImagesLoaded] = useState<boolean[]>(new Array(images.length).fill(false));

  const minSwipeDistance = 50;

  const handlePrevImage = () => {
    const newIndex = (currentImageIndex - 1 + images.length) % images.length;
    setCurrentImageIndex(newIndex);
    setSelectedImage(images[newIndex].original);
  };

  const handleNextImage = () => {
    const newIndex = (currentImageIndex + 1) % images.length;
    setCurrentImageIndex(newIndex);
    setSelectedImage(images[newIndex].original);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      handleNextImage();
    }
    if (isRightSwipe) {
      handlePrevImage();
    }
  };

  const handleThumbnailClick = (image: string, index: number) => {
    setSelectedImage(image);
    setCurrentImageIndex(index);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') handlePrevImage();
    if (e.key === 'ArrowRight') handleNextImage();
    if (e.key === 'Escape') setIsModalOpen(false);
  };

  const handleImageLoad = (index: number) => {
    const newImagesLoaded = [...imagesLoaded];
    newImagesLoaded[index] = true;
    setImagesLoaded(newImagesLoaded);
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  return (
    <section className="py-2 sm:py-4 md:py-8 bg-white">
      <div className="w-full max-w-6xl mx-auto px-2 sm:px-4 space-y-2 sm:space-y-4">
        <motion.div 
          className="relative rounded-lg overflow-hidden shadow-lg bg-gray-100 w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div 
            className="relative w-full"
            style={{ paddingBottom: '75%' }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <motion.img 
              src={selectedImage}
              alt="Selected preview"
              className="absolute inset-0 w-full h-full object-contain bg-gray-100"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
              key={selectedImage}
              draggable={false}
              loading="lazy"
              onLoad={() => handleImageLoad(currentImageIndex)}
            />
            
            {!imagesLoaded[currentImageIndex] && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
              </div>
            )}
            
            <div className="absolute inset-0 flex items-center justify-between p-1 sm:p-2 md:p-4">
              <motion.button 
                onClick={handlePrevImage}
                className="p-1 sm:p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.2 }}
                aria-label="Previous image"
              >
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
              </motion.button>
              <motion.button 
                onClick={handleNextImage}
                className="p-1 sm:p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.2 }}
                aria-label="Next image"
              >
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
              </motion.button>
            </div>

            <motion.button 
              className="absolute top-2 right-2 sm:top-3 sm:right-3 md:top-4 md:right-4 bg-black/50 text-white p-1 sm:p-2 rounded-full hover:bg-black/70 transition-colors"
              onClick={() => setIsModalOpen(true)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.2 }}
              aria-label="View full size"
            >
              <span className="sr-only">Ver imagen completa</span>
              🔍
            </motion.button>
          </div>
        </motion.div>

        <div className="grid grid-cols-5 gap-1 sm:gap-2 md:gap-4">
          {images.map((image, index) => (
            <motion.button
              key={index}
              onClick={() => handleThumbnailClick(image.original, index)}
              className={`relative aspect-square rounded-lg overflow-hidden transition-all duration-200 ${
                selectedImage === image.original 
                  ? 'ring-2 ring-red-600 ring-offset-1 sm:ring-offset-2'
                  : 'hover:ring-2 hover:ring-gray-300 hover:ring-offset-1'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <img
                src={image.thumbnail}
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-full object-cover select-none"
                loading="lazy"
                draggable={false}
              />
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div 
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-2 sm:p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setIsModalOpen(false)}
            onKeyDown={handleKeyDown}
            tabIndex={0}
          >
            <motion.div 
              className="relative w-full h-full flex items-center justify-center"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={e => e.stopPropagation()}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <img 
                src={selectedImage}
                alt="Full size image"
                className="max-w-full max-h-[90vh] object-contain rounded-lg select-none"
                draggable={false}
                loading="lazy"
              />
              
              <motion.button 
                className="absolute top-2 right-2 sm:top-4 sm:right-4 text-white bg-black/50 p-2 rounded-full hover:bg-black/70 transition-colors"
                onClick={() => setIsModalOpen(false)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.2 }}
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              </motion.button>

              <div className="absolute inset-y-1/2 -translate-y-1/2 flex justify-between w-full px-2 sm:px-4">
                <motion.button 
                  onClick={(e) => { e.stopPropagation(); handlePrevImage(); }}
                  className="p-1 sm:p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                </motion.button>
                <motion.button 
                  onClick={(e) => { e.stopPropagation(); handleNextImage(); }}
                  className="p-1 sm:p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}