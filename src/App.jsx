// src/App.js
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import MenuSection from './components/MenuSection';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Footer from './components/Footer';


function App() {
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);
  
  
  // Sample menu data
  const menuCategories = [
    {
      id: 1,
      name: "Appetizers",
      items: [
        { id: 101, name: "Spring Rolls", description: "Crispy vegetable rolls with sweet chili sauce", price: 6.99, image: "images/spring-rolls.jpg" },
        { id: 102, name: "Garlic Bread", description: "Toasted bread with garlic butter and herbs", price: 5.49, image: "images/garlic-bread.jpg" },
        { id: 103, name: "Mozzarella Sticks", description: "Breaded mozzarella with marinara sauce", price: 7.99, image: "images/mozzarella-sticks.jpg" },
      ]
    },
    {
      id: 2,
      name: "Main Courses",
      items: [
        { id: 201, name: "Grilled Salmon", description: "Fresh salmon with lemon butter sauce and vegetables", price: 18.99, image: "images/grilled-salmon.jpg"},
        { id: 202, name: "Vegetable Stir Fry", description: "Assorted vegetables in savory sauce with rice", price: 14.99, image: "images/stir-fry.jpg" },
        { id: 203, name: "Beef Burger", description: "Juicy beef patty with cheese and fresh vegetables", price: 12.99, image: "images/beef-burger.jpg" },
        { id: 204, name: "Chicken Alfredo", description: "Creamy pasta with grilled chicken", price: 15.99, image: "images/chicken-alfredo.jpg" },
      ]
    },
    {
      id: 3,
      name: "Desserts",
      items: [
        { id: 301, name: "Chocolate Cake", description: "Rich chocolate cake with ganache", price: 7.99, image: "images/chocolate-cake.jpg" },
        { id: 302, name: "Tiramisu", description: "Classic Italian coffee-flavored dessert", price: 8.49, image: "images/tiramisu.jpg" },
        { id: 303, name: "Fruit Tart", description: "Buttery crust with pastry cream and fresh fruits", price: 6.99, image: "images/fruit-tart.jpg" },
      ]
    },
    {
      id: 4,
      name: "Drinks",
      items: [
        { id: 401, name: "Fresh Lemonade", description: "Homemade lemonade with mint", price: 3.99, image: "images/lemonade.jpg" },
        { id: 402, name: "Iced Coffee", description: "Cold brew coffee with milk and sweetener", price: 4.49, image: "images/iced-cofee.jpg" },
        { id: 403, name: "Smoothie", description: "Mixed berry smoothie with yogurt", price: 5.99, image: "images/smoothie.jpg" },
      ]
    }
  ];

  const addToCart = (item) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(cartItem => cartItem.id === item.id);
      if (existingItem) {
        return prevItems.map(cartItem => 
          cartItem.id === item.id 
            ? { ...cartItem, quantity: cartItem.quantity + 1 } 
            : cartItem
        );
      } else {
        return [...prevItems, { ...item, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (itemId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== itemId));
  };

  const updateQuantity = (itemId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(itemId);
      return;
    }
    
    setCartItems(prevItems => 
      prevItems.map(item => 
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const cartTotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header 
        cartCount={cartItems.reduce((count, item) => count + item.quantity, 0)} 
        toggleCart={() => setShowCart(!showCart)}
      />
      
      <Hero />
      
      <div className="container mx-auto px-4 py-8 flex-1">
        <MenuSection 
          menuCategories={menuCategories} 
          addToCart={addToCart} 
        />
      </div>
      
      <Footer />
      
      {showCart && (
        <Cart 
          cartItems={cartItems} 
          cartTotal={cartTotal}
          updateQuantity={updateQuantity}
          removeFromCart={removeFromCart}
          closeCart={() => setShowCart(false)}
          proceedToCheckout={() => {
            setShowCart(false);
            setShowCheckout(true);
          }}
        />
      )}
      
      {showCheckout && (
        <Checkout 
          cartItems={cartItems}
          cartTotal={cartTotal}
          closeCheckout={() => setShowCheckout(false)}
          completeOrder={() => {
            setShowCheckout(false);
            setCartItems([]);
            alert("Order placed successfully! Thank you for your purchase.");
          }}
        />
      )}
    </div>
  );
}

export default App;