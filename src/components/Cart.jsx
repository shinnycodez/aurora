import React, { useEffect, useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Cart = ({ isOpen, onClose }) => {
  const [cartItems, setCartItems] = useState([]);

  // Load cart items from storage
  useEffect(() => {
    if (!isOpen) return;

    const loadCartFromStorage = () => {
      try {
        const storedCart =
          localStorage.getItem('cartItems') ||
          sessionStorage.getItem('cartItems');

        if (storedCart) {
          setCartItems(JSON.parse(storedCart));
        } else {
          setCartItems([]);
        }
      } catch (error) {
        console.error('Error loading cart:', error);
        setCartItems([]);
      }
    };

    loadCartFromStorage();

    const handleStorageChange = (e) => {
      if (e.key === 'cartItems') {
        setCartItems(e.newValue ? JSON.parse(e.newValue) : []);
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, [isOpen]);

  const saveCartToStorage = (updatedCart) => {
    const data = JSON.stringify(updatedCart);
    localStorage.setItem('cartItems', data);
    sessionStorage.setItem('cartItems', data);
  };

  const removeItem = (index) => {
    const updated = cartItems.filter((_, i) => i !== index);
    setCartItems(updated);
    saveCartToStorage(updated);
  };

  const updateQuantity = (index, qty) => {
    if (qty < 1) return;
    const updated = [...cartItems];
    updated[index] = { ...updated[index], quantity: qty };
    setCartItems(updated);
    saveCartToStorage(updated);
  };

  const total = cartItems.reduce(
    (acc, item) => acc + (item.price || 0) * (item.quantity || 1),
    0
  );

  return (
    <div
      className={`fixed top-0 right-0 h-full z-50 bg-[#1E201E] text-white shadow-2xl transition-transform duration-300
        ${isOpen ? 'translate-x-0' : 'translate-x-full'}
        w-full md:w-[400px]`}
    >
      <div className="relative h-full flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          <h2 className="text-xl font-semibold">Your Cart</h2>
          <button
            onClick={onClose}
            className="text-gray-300 hover:text-white text-2xl"
          >
            &times;
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {cartItems.length === 0 ? (
            <p className="text-gray-400">Your cart is currently empty.</p>
          ) : (
            cartItems.map((item, index) => (
              <div
                key={`${item.id || index}-${index}`}
                className="flex items-start gap-4 p-3 border border-gray-700 rounded-lg"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-20 h-30 object-top rounded"
                />

                <div className="flex-1">
                  <h3 className="text-sm font-medium">{item.title}</h3>

                  {item.variation && (
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs text-gray-400">Color:</span>
                      <span className="text-xs">{item.variation}</span>
                    </div>
                  )}

                  <p className="text-xs text-gray-400 mt-1">
                    {item.type && `${item.type} | `}{item.size}
                    {item.lining ? ' | Lining' : ''}
                  </p>

                  <div className="flex items-center gap-2 mt-2">
                    <button
                      onClick={() =>
                        updateQuantity(index, item.quantity - 1)
                      }
                      disabled={item.quantity <= 1}
                      className="px-2 py-1 border border-gray-600 rounded disabled:opacity-50"
                    >
                      −
                    </button>

                    <span className="text-sm min-w-[20px] text-center">
                      {item.quantity}
                    </span>

                    <button
                      onClick={() =>
                        updateQuantity(index, item.quantity + 1)
                      }
                      className="px-2 py-1 border border-gray-600 rounded"
                    >
                      +
                    </button>
                  </div>

                  <p className="text-sm mt-1">
                    PKR {(item.price * item.quantity).toLocaleString()}
                  </p>
                </div>

                <button
                  onClick={() => removeItem(index)}
                  className="text-red-400 hover:text-red-600 p-1"
                >
                  <FaTrashAlt />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-gray-700 bg-[#1E201E]">
          <div className="flex justify-between items-center mb-3">
            <span className="text-sm text-gray-300">Total:</span>
            <span className="text-lg font-semibold">
              PKR {total.toLocaleString()}
            </span>
          </div>

          {cartItems.length > 0 ? (
            <Link
              to="/checkout"
              onClick={onClose}
              className="block w-full text-center bg-black text-white py-2 rounded-lg hover:opacity-90 transition"
            >
              Proceed to Checkout
            </Link>
          ) : (
            <button
              disabled
              className="w-full bg-black text-white py-2 rounded-lg opacity-50 cursor-not-allowed"
            >
              Proceed to Checkout
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
