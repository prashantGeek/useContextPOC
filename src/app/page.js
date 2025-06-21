"use client";
import { ThemeProvider, UserProvider, CartProvider, useTheme } from '../contexts/AppContexts';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';
import Cart from '../components/Cart';
import ContextInfo from '../components/ContextInfo';

// Sample products data
const products = [
  {
    id: 1,
    name: "Awesome Laptop",
    description: "High-performance laptop for developers",
    price: 1299.99,
    emoji: "💻"
  },
  {
    id: 2,
    name: "Wireless Headphones",
    description: "Premium noise-canceling headphones",
    price: 299.99,
    emoji: "🎧"
  },
  {
    id: 3,
    name: "Smart Watch",
    description: "Feature-rich smartwatch with health tracking",
    price: 399.99,
    emoji: "⌚"
  },
  {
    id: 4,
    name: "Gaming Mouse",
    description: "Precision gaming mouse with RGB lighting",
    price: 79.99,
    emoji: "🖱️"
  },
  {
    id: 5,
    name: "Mechanical Keyboard",
    description: "Professional mechanical keyboard",
    price: 149.99,
    emoji: "⌨️"
  },
  {
    id: 6,
    name: "Webcam HD",
    description: "4K webcam for video calls and streaming",
    price: 199.99,
    emoji: "📹"
  }
];

const MainContent = () => {
  const { theme } = useTheme();
  
  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'
    }`}>
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className={`text-4xl md:text-6xl font-bold mb-4 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              useContext
            </span>{' '}
            Hook Demo
          </h1>
          <p className={`text-xl mb-8 max-w-2xl mx-auto ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          }`}>
            A beautiful demonstration of React's useContext hook with multiple contexts, 
            theme switching, user management, and cart functionality.
          </p>
          
          {/* Feature badges */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">
              🎨 Theme Context
            </span>
            <span className="px-4 py-2 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm font-medium">
              👤 User Context
            </span>
            <span className="px-4 py-2 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm font-medium">
              🛒 Cart Context
            </span>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Products Section */}
          <div className="lg:col-span-2">
            <h2 className={`text-3xl font-bold mb-6 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              🛍️ Products
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Cart */}
            <Cart />
            
            {/* Context Info */}
            <ContextInfo />
          </div>
        </div>
      </main>
    </div>
  );
};

export default function Home() {
  return (
    <ThemeProvider>
      <UserProvider>
        <CartProvider>
          <MainContent />
        </CartProvider>
      </UserProvider>
    </ThemeProvider>
  );
}