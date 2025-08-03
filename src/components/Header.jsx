// src/components/Header.jsx
import React from 'react';

const Header = ({ cartCount, toggleCart }) => {
  return (
    <header className="bg-orange-500 text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <div className="text-3xl mr-2">🍔</div>
          <h1 className="text-2xl font-bold">FoodExpress</h1>
        </div>
        
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li className="hover:text-orange-200 cursor-pointer">Home</li>
            <li className="hover:text-orange-200 cursor-pointer">Menu</li>
            <li className="hover:text-orange-200 cursor-pointer">About</li>
            <li className="hover:text-orange-200 cursor-pointer">Contact</li>
          </ul>
        </nav>
        
        <div className="relative">
          <button 
            onClick={toggleCart}
            className="flex items-center bg-orange-600 hover:bg-orange-700 px-4 py-2 rounded-full transition"
          >
            <span className="mr-2">🛒</span>
            <span>Cart</span>
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <div className="md:hidden bg-orange-600 py-2">
        <ul className="flex justify-around">
          <li className="hover:text-orange-200 cursor-pointer">Home</li>
          <li className="hover:text-orange-200 cursor-pointer">Menu</li>
          <li className="hover:text-orange-200 cursor-pointer">About</li>
          <li className="hover:text-orange-200 cursor-pointer">Contact</li>
        </ul>
      </div>
    </header>
  );
};

export default Header;