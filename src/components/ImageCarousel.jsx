import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export const ImageCarousel = ({ images, projectTitle }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToImage = (index) => {
    setCurrentIndex(index);
  };

  const openFullscreen = () => {
    setIsFullscreen(true);
    document.body.style.overflow = "hidden";
  };

  const closeFullscreen = () => {
    setIsFullscreen(false);
    document.body.style.overflow = "unset";
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isFullscreen) return;

      switch (e.key) {
        case "ArrowLeft":
          prevImage();
          break;
        case "ArrowRight":
          nextImage();
          break;
        case "Escape":
          closeFullscreen();
          break;
        default:
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isFullscreen]);

  if (!images || images.length === 0) {
    return null;
  }

  return (
    <>
      {/* Main Carousel */}
      <div className="relative group">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <div className="relative bg-[#0d0d0d] backdrop-blur-xl border border-[#1a1a1a] rounded-2xl overflow-hidden shadow-2xl">
          {/* Main Image */}
          <div className="relative">
            <img
              src={images[currentIndex]}
              alt={`${projectTitle} - Image ${currentIndex + 1}`}
              className="w-full h-64 sm:h-80 md:h-96 object-cover cursor-pointer group-hover:scale-105 transition-transform duration-700"
              onClick={openFullscreen}
            />

            {/* Navigation Arrows - Mobile Optimized */}
            {images.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    prevImage();
                  }}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-black/90 text-white p-2 sm:p-3 rounded-full opacity-100 sm:opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 touch-manipulation"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    nextImage();
                  }}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-black/90 text-white p-2 sm:p-3 rounded-full opacity-100 sm:opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 touch-manipulation"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </>
            )}

            {/* Image Counter */}
            <div className="absolute top-3 sm:top-4 left-3 sm:left-4 bg-black/70 text-white px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-medium">
              {currentIndex + 1} / {images.length}
            </div>

            {/* Fullscreen Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                openFullscreen();
              }}
              className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-black/70 hover:bg-black/90 text-white p-2 sm:p-3 rounded-full opacity-100 sm:opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 touch-manipulation"
              aria-label="Open fullscreen"
            >
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                />
              </svg>
            </button>
          </div>

          {/* Thumbnail Navigation - Mobile Optimized */}
          {images.length > 1 && (
            <div className="p-3 sm:p-4 bg-[#111111]">
              <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-2">
                {images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => goToImage(index)}
                    className={`flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 touch-manipulation ${
                      index === currentIndex
                        ? "border-[#00d4ff] scale-110"
                        : "border-[#2a2a2a] hover:border-[#3a3a3a]"
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  >
                    <img
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Fullscreen Modal - Mobile Optimized */}
      <AnimatePresence>
        {isFullscreen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center"
            onClick={closeFullscreen}
          >
            {/* Close Button - Mobile Optimized */}
            <button
              onClick={closeFullscreen}
              className="absolute top-4 sm:top-6 right-4 sm:right-6 bg-black/70 hover:bg-black/90 text-white p-2 sm:p-3 rounded-full z-10 hover:scale-110 transition-all duration-300 touch-manipulation"
              aria-label="Close fullscreen"
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            {/* Fullscreen Image - Mobile Optimized */}
            <div
              className="relative w-full h-full max-w-7xl max-h-full p-4 sm:p-8 flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentIndex}
                  src={images[currentIndex]}
                  alt={`${projectTitle} - Image ${currentIndex + 1}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  className="max-w-full max-h-full object-contain rounded-lg"
                />
              </AnimatePresence>

              {/* Fullscreen Navigation - Mobile Optimized */}
              {images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-2 sm:left-8 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-black/90 text-white p-3 sm:p-4 rounded-full hover:scale-110 transition-all duration-300 touch-manipulation"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-2 sm:right-8 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-black/90 text-white p-3 sm:p-4 rounded-full hover:scale-110 transition-all duration-300 touch-manipulation"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
                  </button>

                  {/* Fullscreen Thumbnails - Mobile Optimized */}
                  <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2">
                    <div className="flex gap-2 sm:gap-3 bg-black/70 p-2 sm:p-3 rounded-full max-w-full overflow-x-auto">
                      {images.map((image, index) => (
                        <button
                          key={index}
                          onClick={() => goToImage(index)}
                          className={`w-8 h-8 sm:w-12 sm:h-12 rounded-lg overflow-hidden border-2 transition-all duration-300 flex-shrink-0 touch-manipulation ${
                            index === currentIndex
                              ? "border-cyan-400 scale-110"
                              : "border-gray-600 hover:border-gray-400"
                          }`}
                          aria-label={`Go to image ${index + 1}`}
                        >
                          <img
                            src={image}
                            alt={`Thumbnail ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
