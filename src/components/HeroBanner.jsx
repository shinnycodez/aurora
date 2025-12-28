import React from 'react';
import { Link } from 'react-router-dom';

function HeroBanner() {
  const imageUrl =
    'https://pbs.twimg.com/media/G9RQ1WoaYAAyF02?format=jpg&name=900x900';

  return (
    <div className="relative">
      <div
        className="min-h-[240px] md:min-h-[480px] bg-cover lg:bg-contain bg-center bg-no-repeat transition-all duration-500 ease-in-out"
        style={{
          backgroundImage: `url("${imageUrl}")`,
        }}
      />
      
      {/* Black Shop Now Button at Left Bottom - Smaller */}
      <div className="absolute bottom-3 left-3 md:bottom-4 md:left-4">
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
    </div>
  );
}

export default HeroBanner;