// src/components/Hero.jsx
// src/components/Hero.js
import React from 'react';

const Hero = () => {
  return (
    <div className="relative bg-gray-900 text-white min-h-[500px]">
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 py-32 relative z-20">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Delicious Food Delivered to Your Door</h1>
          <p className="text-lg md:text-xl mb-8">From street food to fine dining, we bring the best cuisine right to your doorstep. Order now and enjoy!</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full text-lg font-semibold transition">
              Order Now
            </button>
            <button className="bg-white hover:bg-gray-100 text-gray-800 px-8 py-3 rounded-full text-lg font-semibold transition">
              View Menu
            </button>
          </div>
        </div>
      </div>
      
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ 
          backgroundImage: "url('/images/hero-bg1.jpg')",
        }}
      ></div>
    </div>
  );
};

export default Hero;