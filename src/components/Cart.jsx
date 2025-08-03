// src/components/Cart.jsx
import React from 'react';
import ImageFallback from './ImageFallback';

const Cart = ({ 
  cartItems, 
  cartTotal, 
  updateQuantity, 
  removeFromCart, 
  closeCart, 
  proceedToCheckout 
}) => {
  // Calculate delivery fee and tax
  const deliveryFee = 2.99;
  const taxRate = 0.08;
  const taxAmount = cartTotal * taxRate;
  const totalAmount = cartTotal + deliveryFee + taxAmount;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-end z-50">
      <div className="bg-white w-full max-w-md h-full overflow-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Your Cart</h2>
            <button 
              onClick={closeCart}
              className="text-gray-500 hover:text-gray-700 text-2xl"
            >
              &times;
            </button>
          </div>
          
          {cartItems.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-5xl mb-4">🛒</div>
              <p className="text-xl mb-4">Your cart is empty</p>
              <button 
                onClick={closeCart}
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md transition"
              >
                Browse Menu
              </button>
            </div>
          ) : (
            <>
              <div className="space-y-4 mb-8">
                {cartItems.map(item => (
                  <div key={item.id} className="flex border-b pb-4">
                    <div className="w-16 h-16 flex-shrink-0 mr-4">
                      <ImageFallback 
                        src={item.image} 
                        alt={item.name}
                        className="w-full h-full object-cover rounded"
                        fallbackText="Image"
                      />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <h3 className="font-semibold">{item.name}</h3>
                        <button 
                          onClick={() => removeFromCart(item.id)}
                          className="text-gray-500 hover:text-red-500"
                        >
                          &times;
                        </button>
                      </div>
                      
                      {item.specialInstructions && (
                        <p className="text-sm text-gray-500 mt-1">
                          Note: {item.specialInstructions}
                        </p>
                      )}
                      
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center">
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="bg-gray-200 text-gray-700 px-2 py-1 rounded-l hover:bg-gray-300 transition"
                          >
                            -
                          </button>
                          <span className="bg-gray-100 px-3 py-1">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="bg-gray-200 text-gray-700 px-2 py-1 rounded-r hover:bg-gray-300 transition"
                          >
                            +
                          </button>
                        </div>
                        <p className="font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="border-t pt-4 mb-6">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">${cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Delivery Fee</span>
                  <span className="font-medium">${deliveryFee.toFixed(2)}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Tax ({taxRate * 100}%)</span>
                  <span className="font-medium">${taxAmount.toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-bold text-lg mt-4 pt-2 border-t">
                  <span>Total</span>
                  <span>${totalAmount.toFixed(2)}</span>
                </div>
              </div>
              
              <button
                onClick={proceedToCheckout}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-md transition font-semibold flex items-center justify-center"
              >
                <span className="mr-2">➔</span>
                <span>Proceed to Checkout</span>
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;