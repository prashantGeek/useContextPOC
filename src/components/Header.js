"use client";
import { useTheme, useUser, useCart } from '../contexts/AppContexts';

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const { user, notifications, login, logout, clearNotifications } = useUser();
  const { getTotalItems } = useCart();

  const handleLogin = () => {
    login({
      name: 'John Doe',
      email: 'john@example.com',
      avatar: '👨‍💻'
    });
  };

  return (
    <header className={`
      sticky top-0 z-50 border-b transition-all duration-300
      ${theme === 'dark' 
        ? 'bg-gray-900 border-gray-700 text-white' 
        : 'bg-white border-gray-200 text-gray-900'
      }
    `}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              ContextApp
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#" className={`hover:text-blue-600 transition-colors ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
              Home
            </a>
            <a href="#" className={`hover:text-blue-600 transition-colors ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
              Products
            </a>
            <a href="#" className={`hover:text-blue-600 transition-colors ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
              About
            </a>
          </nav>

          {/* Right side */}
          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`
                p-2 rounded-lg transition-all duration-200 hover:scale-110
                ${theme === 'dark' 
                  ? 'bg-gray-800 hover:bg-gray-700 text-yellow-400' 
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                }
              `}
              title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>

            {/* Cart */}
            <div className="relative">
              <button className={`
                p-2 rounded-lg transition-all duration-200 hover:scale-110
                ${theme === 'dark' 
                  ? 'bg-gray-800 hover:bg-gray-700' 
                  : 'bg-gray-100 hover:bg-gray-200'
                }
              `}>
                🛒
                {getTotalItems() > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {getTotalItems()}
                  </span>
                )}
              </button>
            </div>

            {/* Notifications */}
            {user && notifications > 0 && (
              <div className="relative">
                <button 
                  onClick={clearNotifications}
                  className={`
                    p-2 rounded-lg transition-all duration-200 hover:scale-110
                    ${theme === 'dark' 
                      ? 'bg-gray-800 hover:bg-gray-700' 
                      : 'bg-gray-100 hover:bg-gray-200'
                    }
                  `}
                  title="Clear notifications"
                >
                  🔔
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {notifications}
                  </span>
                </button>
              </div>
            )}

            {/* User Profile */}
            {user ? (
              <div className="flex items-center space-x-3">
                <div className="text-2xl">{user.avatar}</div>
                <div className="hidden sm:block">
                  <div className="text-sm font-medium">{user.name}</div>
                  <div className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                    {user.email}
                  </div>
                </div>
                <button
                  onClick={logout}
                  className="px-3 py-1 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors text-sm"
                >
                  Logout
                </button>
              </div>
            ) : (
              <button
                onClick={handleLogin}
                className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-all duration-200 hover:scale-105 shadow-lg"
              >
                Login
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
