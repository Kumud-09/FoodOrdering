// src/components/MenuSection.jsx
import React, { useState } from 'react';
import MenuItem from './MenuItem';

const MenuSection = ({ menuCategories, addToCart }) => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');

  
    const filteredCategories = menuCategories
  .map(category => ({
    ...category,
    items: category.items.filter(item => 
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      item.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }))
  .filter(category => category.items.length > 0)

  return (
    <div className="py-8">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Our Menu</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Explore our diverse menu featuring delicious dishes from around the world. 
          From appetizers to desserts, we have something for everyone.
        </p>
      </div>
      
      <div className="mb-8">
        <div className="flex justify-center mb-6">
          <div className="relative w-full max-w-md">
            <input
              type="text"
              placeholder="Search for dishes..."
              className="w-full p-4 pl-12 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <span className="absolute left-4 top-4 text-gray-400 text-xl">🔍</span>
          </div>
        </div>
        
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {menuCategories.map((category, index) => (
            <button
              key={category.id}
              className={`px-5 py-2 rounded-full transition ${
                activeCategory === index
                  ? 'bg-orange-500 text-white'
                  : 'bg-gray-200 hover:bg-gray-300'
              }`}
              onClick={() => setActiveCategory(index)}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>
      
      <div>
        {filteredCategories.length > 0 ? (
          filteredCategories.map(category => (
            <div key={category.id} className="mb-16">
              <h3 className="text-2xl font-bold mb-6 border-b-2 border-orange-500 pb-2 inline-block">
                {category.name}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map(item => (
                  <MenuItem 
                    key={item.id} 
                    item={item} 
                    addToCart={addToCart} 
                  />
                ))}
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-12">
            <p className="text-xl text-gray-500">No items found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MenuSection;