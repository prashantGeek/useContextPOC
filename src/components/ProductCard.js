"use client";
import { useCart, useTheme } from '../contexts/AppContexts';

const ProductCard = ({ product }) => {
  const { addItem } = useCart();
  const { theme } = useTheme();

  return (
    <div className={`
      rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105
      ${theme === 'dark' 
        ? 'bg-gray-800 border border-gray-700' 
        : 'bg-white border border-gray-200'
      }
    `}>
      {/* Product Image */}
      <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center">
        <span className="text-4xl">{product.emoji}</span>
      </div>
      
      {/* Product Info */}
      <div className="p-6">
        <h3 className={`text-xl font-semibold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
          {product.name}
        </h3>
        <p className={`text-sm mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
          {product.description}
        </p>
        
        {/* Price and Action */}
        <div className="flex items-center justify-between">
          <span className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            ${product.price}
          </span>
          <button
            onClick={() => addItem(product)}
            className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg 
                     hover:from-blue-600 hover:to-purple-700 transition-all duration-200 
                     hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
