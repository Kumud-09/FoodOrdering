// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">FoodExpress</h3>
            <p className="text-gray-400">
              Bringing delicious food from the best restaurants right to your doorstep.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/home" className="text-gray-400 hover:text-white transition">Home</a></li>
              <li><a href="/menu" className="text-gray-400 hover:text-white transition">Menu</a></li>
              <li><a href="/about" className="text-gray-400 hover:text-white transition">About Us</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-white transition">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start">
                <span className="mr-2">📍</span>
                <span>123 Food Street, Culinary City</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2">📞</span>
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2">✉️</span>
                <span>info@foodexpress.com</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Download Our App</h4>
            <div className="flex space-x-3">
              <button className="bg-black text-white px-4 py-2 rounded-lg flex items-center">
                <span className="mr-2 text-2xl">🍎</span>
                <div className="text-left">
                  <p className="text-xs">Download on the</p>
                  <p className="font-semibold">App Store</p>
                </div>
              </button>
              <button className="bg-black text-white px-4 py-2 rounded-lg flex items-center">
                <span className="mr-2 text-2xl">▶️</span>
                <div className="text-left">
                  <p className="text-xs">GET IT ON</p>
                  <p className="font-semibold">Google Play</p>
                </div>
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-gray-500">
          <p>© {new Date().getFullYear()} FoodExpress. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;