"use client";
import { useTheme, useUser, useCart } from '../contexts/AppContexts';

const ContextInfo = () => {
  const { theme } = useTheme();
  const { user, notifications } = useUser();
  const { items, getTotalItems, getTotalPrice } = useCart();

  return (
    <div className={`
      rounded-xl shadow-lg p-6
      ${theme === 'dark' 
        ? 'bg-gray-800 border border-gray-700' 
        : 'bg-white border border-gray-200'
      }
    `}>
      <h2 className={`text-2xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
        🔍 Context Debug Info
      </h2>
      
      <div className="space-y-6">
        {/* Theme Context */}
        <div className={`
          p-4 rounded-lg
          ${theme === 'dark' 
            ? 'bg-gray-700 border border-gray-600' 
            : 'bg-blue-50 border border-blue-200'
          }
        `}>
          <h3 className={`font-semibold mb-2 flex items-center ${theme === 'dark' ? 'text-blue-300' : 'text-blue-700'}`}>
            🎨 Theme Context
          </h3>
          <div className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
            <div>Current Theme: <span className="font-mono bg-gray-200 dark:bg-gray-600 px-2 py-1 rounded">{theme}</span></div>
          </div>
        </div>

        {/* User Context */}
        <div className={`
          p-4 rounded-lg
          ${theme === 'dark' 
            ? 'bg-gray-700 border border-gray-600' 
            : 'bg-green-50 border border-green-200'
          }
        `}>
          <h3 className={`font-semibold mb-2 flex items-center ${theme === 'dark' ? 'text-green-300' : 'text-green-700'}`}>
            👤 User Context
          </h3>
          <div className={`text-sm space-y-1 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
            <div>Logged In: <span className="font-mono bg-gray-200 dark:bg-gray-600 px-2 py-1 rounded">{user ? 'Yes' : 'No'}</span></div>
            {user && (
              <>
                <div>User: <span className="font-mono bg-gray-200 dark:bg-gray-600 px-2 py-1 rounded">{user.name}</span></div>
                <div>Email: <span className="font-mono bg-gray-200 dark:bg-gray-600 px-2 py-1 rounded">{user.email}</span></div>
              </>
            )}
            <div>Notifications: <span className="font-mono bg-gray-200 dark:bg-gray-600 px-2 py-1 rounded">{notifications}</span></div>
          </div>
        </div>

        {/* Cart Context */}
        <div className={`
          p-4 rounded-lg
          ${theme === 'dark' 
            ? 'bg-gray-700 border border-gray-600' 
            : 'bg-purple-50 border border-purple-200'
          }
        `}>
          <h3 className={`font-semibold mb-2 flex items-center ${theme === 'dark' ? 'text-purple-300' : 'text-purple-700'}`}>
            🛒 Cart Context
          </h3>
          <div className={`text-sm space-y-1 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
            <div>Total Items: <span className="font-mono bg-gray-200 dark:bg-gray-600 px-2 py-1 rounded">{getTotalItems()}</span></div>
            <div>Total Price: <span className="font-mono bg-gray-200 dark:bg-gray-600 px-2 py-1 rounded">${getTotalPrice().toFixed(2)}</span></div>
            <div>Items in Cart: <span className="font-mono bg-gray-200 dark:bg-gray-600 px-2 py-1 rounded">{items.length}</span></div>
          </div>
        </div>

        {/* How it works */}
        <div className={`
          p-4 rounded-lg
          ${theme === 'dark' 
            ? 'bg-gray-700 border border-gray-600' 
            : 'bg-yellow-50 border border-yellow-200'
          }
        `}>
          <h3 className={`font-semibold mb-2 flex items-center ${theme === 'dark' ? 'text-yellow-300' : 'text-yellow-700'}`}>
            💡 How useContext Works
          </h3>
          <div className={`text-sm space-y-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
            <div>• <strong>createContext()</strong> creates a context object</div>
            <div>• <strong>Provider</strong> wraps components and provides values</div>
            <div>• <strong>useContext()</strong> hook consumes the context</div>
            <div>• State changes automatically update all consumers</div>
            <div>• No prop drilling needed! 🎉</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContextInfo;
