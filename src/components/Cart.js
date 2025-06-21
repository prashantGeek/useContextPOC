"use client";
import { useCart, useTheme } from '../contexts/AppContexts';

const Cart = () => {
  const { items, updateQuantity, removeItem, getTotalPrice } = useCart();
  const { theme } = useTheme();

  if (items.length === 0) {
    return (
      <div className={`
        rounded-xl p-8 text-center
        ${theme === 'dark' 
          ? 'bg-gray-800 border border-gray-700' 
          : 'bg-white border border-gray-200'
        }
      `}>
        <div className="text-6xl mb-4">🛒</div>
        <h3 className={`text-xl font-semibold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
          Your cart is empty
        </h3>
        <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
          Add some products to get started!
        </p>
      </div>
    );
  }

  return (
    <div className={`
      rounded-xl shadow-lg p-6
      ${theme === 'dark' 
        ? 'bg-gray-800 border border-gray-700' 
        : 'bg-white border border-gray-200'
      }
    `}>
      <h2 className={`text-2xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
        Shopping Cart
      </h2>
      
      {/* Cart Items */}
      <div className="space-y-4 mb-6">
        {items.map((item) => (
          <div key={item.id} className={`
            flex items-center justify-between p-4 rounded-lg
            ${theme === 'dark' 
              ? 'bg-gray-700 border border-gray-600' 
              : 'bg-gray-50 border border-gray-200'
            }
          `}>
            <div className="flex items-center space-x-4">
              <span className="text-2xl">{item.emoji}</span>
              <div>
                <h4 className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  {item.name}
                </h4>
                <p className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                  ${item.price} each
                </p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              {/* Quantity Controls */}
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className={`
                    w-8 h-8 rounded-full flex items-center justify-center
                    ${theme === 'dark' 
                      ? 'bg-gray-600 hover:bg-gray-500 text-white' 
                      : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
                    }
                  `}
                >
                  -
                </button>
                <span className={`w-8 text-center font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  {item.quantity}
                </span>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className={`
                    w-8 h-8 rounded-full flex items-center justify-center
                    ${theme === 'dark' 
                      ? 'bg-gray-600 hover:bg-gray-500 text-white' 
                      : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
                    }
                  `}
                >
                  +
                </button>
              </div>
              
              {/* Item Total */}
              <div className={`font-bold min-w-[60px] text-right ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                ${(item.price * item.quantity).toFixed(2)}
              </div>
              
              {/* Remove Button */}
              <button
                onClick={() => removeItem(item.id)}
                className="text-red-500 hover:text-red-600 p-1"
                title="Remove item"
              >
                🗑️
              </button>
            </div>
          </div>
        ))}
      </div>
      
      {/* Total */}
      <div className={`
        border-t pt-4
        ${theme === 'dark' ? 'border-gray-600' : 'border-gray-200'}
      `}>
        <div className="flex justify-between items-center">
          <span className={`text-xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Total:
          </span>
          <span className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            ${getTotalPrice().toFixed(2)}
          </span>
        </div>
        <button className="w-full mt-4 px-6 py-3 bg-gradient-to-r from-green-500 to-blue-600 text-white rounded-lg hover:from-green-600 hover:to-blue-700 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl font-semibold">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
