"use client";
import { useTheme, useUser, useCart } from '../contexts/AppContexts';

const ContextInfo = () => {
  const { theme } = useTheme();
  const { user, notifications } = useUser();
  const { items, getTotalItems, getTotalPrice } = useCart();

  const ValueBadge = ({ label, value, color = 'blue' }) => {
    const colorClasses = {
      blue: 'bg-gradient-to-r from-blue-500 to-blue-600 shadow-blue-200',
      green: 'bg-gradient-to-r from-green-500 to-green-600 shadow-green-200',
      purple: 'bg-gradient-to-r from-purple-500 to-purple-600 shadow-purple-200',
      orange: 'bg-gradient-to-r from-orange-500 to-orange-600 shadow-orange-200',
    };

    return (
      <div className="flex items-center justify-between py-2">
        <span className={`text-sm font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
          {label}:
        </span>
        <span className={`
          inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold text-white
          ${colorClasses[color]} shadow-lg transform hover:scale-105 transition-all duration-200
        `}>
          {value}
        </span>
      </div>
    );
  };

  return (
    <div className={`
      rounded-2xl shadow-xl p-6 backdrop-blur-sm
      ${theme === 'dark' 
        ? 'bg-gray-800/90 border border-gray-700/50' 
        : 'bg-white/90 border border-gray-200/50'
      }
    `}>
      <div className="flex items-center mb-6">
        <div className="p-2 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 mr-3">
          <span className="text-white text-lg">🔍</span>
        </div>
        <h2 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
          Context State
        </h2>
      </div>
      
      <div className="space-y-6">
        {/* Theme Context */}
        <div className={`
          relative overflow-hidden rounded-xl p-5 transition-all duration-300 hover:shadow-lg
          ${theme === 'dark' 
            ? 'bg-gradient-to-br from-gray-700/50 to-gray-800/50 border border-gray-600/30' 
            : 'bg-gradient-to-br from-blue-50/80 to-indigo-50/80 border border-blue-200/30'
          }
        `}>
          <div className="flex items-center mb-4">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center mr-3">
              <span className="text-white text-sm">🎨</span>
            </div>
            <h3 className={`font-bold text-lg ${theme === 'dark' ? 'text-blue-300' : 'text-blue-700'}`}>
              Theme Context
            </h3>
          </div>
          <div className="space-y-1">
            <ValueBadge label="Current Theme" value={theme} color="blue" />
          </div>
        </div>

        {/* User Context */}
        <div className={`
          relative overflow-hidden rounded-xl p-5 transition-all duration-300 hover:shadow-lg
          ${theme === 'dark' 
            ? 'bg-gradient-to-br from-gray-700/50 to-gray-800/50 border border-gray-600/30' 
            : 'bg-gradient-to-br from-green-50/80 to-emerald-50/80 border border-green-200/30'
          }
        `}>
          <div className="flex items-center mb-4">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-green-500 to-emerald-600 flex items-center justify-center mr-3">
              <span className="text-white text-sm">👤</span>
            </div>
            <h3 className={`font-bold text-lg ${theme === 'dark' ? 'text-green-300' : 'text-green-700'}`}>
              User Context
            </h3>
          </div>
          <div className="space-y-1">
            <ValueBadge label="Logged In" value={user ? 'Yes' : 'No'} color="green" />
            {user && (
              <>
                <ValueBadge label="User" value={user.name} color="green" />
                <ValueBadge label="Email" value={user.email} color="green" />
              </>
            )}
            <ValueBadge label="Notifications" value={notifications} color="green" />
          </div>
        </div>

        {/* Cart Context */}
        <div className={`
          relative overflow-hidden rounded-xl p-5 transition-all duration-300 hover:shadow-lg
          ${theme === 'dark' 
            ? 'bg-gradient-to-br from-gray-700/50 to-gray-800/50 border border-gray-600/30' 
            : 'bg-gradient-to-br from-purple-50/80 to-violet-50/80 border border-purple-200/30'
          }
        `}>
          <div className="flex items-center mb-4">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-purple-500 to-violet-600 flex items-center justify-center mr-3">
              <span className="text-white text-sm">🛒</span>
            </div>
            <h3 className={`font-bold text-lg ${theme === 'dark' ? 'text-purple-300' : 'text-purple-700'}`}>
              Cart Context
            </h3>
          </div>
          <div className="space-y-1">
            <ValueBadge label="Total Items" value={getTotalItems()} color="purple" />
            <ValueBadge label="Total Price" value={`$${getTotalPrice().toFixed(2)}`} color="purple" />
            <ValueBadge label="Items in Cart" value={items.length} color="purple" />
          </div>
        </div>

        {/* How it works */}
        <div className={`
          relative overflow-hidden rounded-xl p-5 transition-all duration-300 hover:shadow-lg
          ${theme === 'dark' 
            ? 'bg-gradient-to-br from-gray-700/50 to-gray-800/50 border border-gray-600/30' 
            : 'bg-gradient-to-br from-amber-50/80 to-orange-50/80 border border-amber-200/30'
          }
        `}>
          <div className="flex items-center mb-4">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-amber-500 to-orange-600 flex items-center justify-center mr-3">
              <span className="text-white text-sm">💡</span>
            </div>
            <h3 className={`font-bold text-lg ${theme === 'dark' ? 'text-amber-300' : 'text-amber-700'}`}>
              How useContext Works
            </h3>
          </div>
          <div className={`space-y-3 text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 mt-2 flex-shrink-0"></div>
              <div><strong className="text-blue-600">createContext()</strong> creates a context object</div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-green-500 to-blue-600 mt-2 flex-shrink-0"></div>
              <div><strong className="text-green-600">Provider</strong> wraps components and provides values</div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-600 mt-2 flex-shrink-0"></div>
              <div><strong className="text-purple-600">useContext()</strong> hook consumes the context</div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-orange-500 to-red-600 mt-2 flex-shrink-0"></div>
              <div>State changes automatically update all consumers</div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-pink-500 to-rose-600 mt-2 flex-shrink-0"></div>
              <div>No prop drilling needed! <span className="text-lg">🎉</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContextInfo;
