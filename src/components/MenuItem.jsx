// src/components/MenuItem.jsx
import React, { useState } from 'react';
import ImageFallback from './ImageFallback';


const MenuItem = ({ item, addToCart }) => {
  const [quantity, setQuantity] = useState(1);
  const [specialInstructions, setSpecialInstructions] = useState('');
  
  const handleAddToCart = () => {
    addToCart({
      ...item,
      quantity,
      specialInstructions
    });
    setQuantity(1);
    setSpecialInstructions('');
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
      <ImageFallback 
        src={item.image} 
        alt={item.name}
        className="w-full h-48 object-cover"
        fallbackText="Food Image"
      />
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold">{item.name}</h3>
          <span className="text-orange-500 font-bold">${item.price.toFixed(2)}</span>
        </div>
        
        <p className="text-gray-600 mb-4">{item.description}</p>
        
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Special Instructions
          </label>
          <textarea
            rows="2"
            className="w-full p-2 border rounded-md focus:ring-orange-500 focus:border-orange-500"
            placeholder="Add instructions (e.g. no onions, extra sauce)"
            value={specialInstructions}
            onChange={(e) => setSpecialInstructions(e.target.value)}
          />
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <button 
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="bg-gray-200 text-gray-700 px-3 py-1 rounded-l-md"
            >
              -
            </button>
            <span className="bg-gray-100 px-4 py-1">{quantity}</span>
            <button 
              onClick={() => setQuantity(quantity + 1)}
              className="bg-gray-200 text-gray-700 px-3 py-1 rounded-r-md"
            >
              +
            </button>
          </div>
          
          <button
            onClick={handleAddToCart}
            className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md transition flex items-center"
          >
            <span className="mr-2">+</span>
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;