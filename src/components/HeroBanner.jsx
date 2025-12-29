import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';

function HeroBanner() {
  // Array of images for the carousel
  const images = [
    'https://pbs.twimg.com/media/G9RQ1WoaYAAyF02?format=jpg&name=900x900',
    'https://pbs.twimg.com/media/G9WU9FSbkAABVzr?format=jpg&name=900x900',
    'https://pbs.twimg.com/media/G9WW8k5bYAA_RCo?format=jpg&name=900x900',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Memoize nextSlide to avoid dependency issues
  const nextSlide = useCallback(() => {
    if (isTransitioning || images.length <= 1) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    setTimeout(() => setIsTransitioning(false), 500);
  }, [isTransitioning, images.length]);

  const prevSlide = () => {
    if (isTransitioning || images.length <= 1) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const goToSlide = (index) => {
    if (isTransitioning || index === currentIndex) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  // Auto-slide every 5 seconds - FIXED: removed currentIndex from dependencies
  useEffect(() => {
    if (images.length <= 1) return;
    
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [nextSlide, images.length]); // Only depend on nextSlide and images.length

  return (
    <div className="relative">
      {/* Carousel Container */}
      <div className="relative min-h-[240px] md:min-h-[480px] overflow-hidden">
        {/* Slides */}
        {images.map((imageUrl, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover lg:bg-contain bg-center bg-no-repeat transition-opacity duration-500 ease-in-out ${
              index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
            style={{
              backgroundImage: `url("${imageUrl}")`,
            }}
          />
        ))}

        {/* Black Shop Now Button at Left Bottom - Smaller */}
        <div className="absolute bottom-3 left-3 md:bottom-4 md:left-4 z-20">
          <Link 
            to="/products" 
            className="group relative inline-flex items-center justify-center bg-black hover:bg-gray-900 text-white text-sm font-medium px-5 py-2 rounded-full transition-all duration-300 hover:scale-[1.02] border border-gray-800 min-w-0"
          >
            {/* Compact button text with arrow */}
            <span className="flex items-center gap-1.5 whitespace-nowrap">
              Shop Now
              <svg 
                className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </Link>
        </div>

        {/* Navigation Arrows (if multiple images) */}
        {images.length > 1 && (
          <>
            {/* Previous Button */}
            <button
              onClick={prevSlide}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-300 md:left-4"
              aria-label="Previous slide"
            >
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Next Button */}
            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-300 md:right-4"
              aria-label="Next slide"
            >
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Dots Indicator */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-white scale-125' 
                      : 'bg-white/50 hover:bg-white/70'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default HeroBanner;