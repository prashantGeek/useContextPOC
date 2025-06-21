# React useContext Hook Demo 🎯

A beautiful, interactive demonstration of React's useContext hook with multiple contexts, theme switching, user management, and cart functionality.

## 🚀 Live Demo

**[View Live Demo →](https://use-context-poc.vercel.app)**

## ✨ Features

### 🎨 **Theme Context**
- Dark/Light mode toggle
- Instant theme switching across all components
- Beautiful gradient backgrounds and smooth transitions

### 👤 **User Context**
- User authentication simulation
- Notification system
- Real-time user state management

### 🛒 **Cart Context**
- Add/remove products from cart
- Quantity management
- Real-time price calculations
- Cart counter in header

### 🔍 **Debug Panel**
- Live context state visualization
- Real-time value updates
- Color-coded context sections
- Educational "How it Works" section

## 🎨 Design Features

- **Modern UI** with Tailwind CSS
- **Glass morphism** effects
- **Gradient backgrounds** and buttons
- **Smooth animations** and hover effects
- **Responsive design** for all devices
- **Beautiful typography** with custom fonts

## 🛠️ Technologies Used

- **Next.js 15** - React framework
- **React 19** - JavaScript library
- **Tailwind CSS v4** - Utility-first CSS framework
- **useContext Hook** - React state management
- **Vercel** - Deployment platform

## 🏗️ Architecture

### Context Structure
```
ThemeProvider
├── UserProvider
    ├── CartProvider
        └── App Components
```

### Key Concepts Demonstrated
- **No Prop Drilling** - State flows through context
- **Multiple Contexts** - Theme, User, and Cart working together
- **Custom Hooks** - `useTheme`, `useUser`, `useCart`
- **Error Boundaries** - Proper context usage validation

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/usecontextpoc.git
cd usecontextpoc
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Run the development server**
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. **Open your browser**
```
http://localhost:3000
```

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.js          # Root layout with fonts
│   ├── page.js            # Main app component
│   └── globals.css        # Global styles
├── contexts/
│   └── AppContexts.js     # All context providers
└── components/
    ├── Header.js          # Navigation header
    ├── ProductCard.js     # Product display
    ├── Cart.js            # Shopping cart
    └── ContextInfo.js     # Debug panel
```

## 🎯 How to Use

1. **Toggle Theme** - Click the moon/sun icon in the header
2. **Login** - Click the "Login" button to see user state
3. **Add to Cart** - Click "Add to Cart" on any product
4. **Manage Cart** - Use +/- buttons to adjust quantities
5. **Watch Debug Panel** - See real-time context state changes

## 🎨 Color Palette

- **Theme Context**: Blue gradients (`from-blue-500 to-indigo-600`)
- **User Context**: Green gradients (`from-green-500 to-emerald-600`)
- **Cart Context**: Purple gradients (`from-purple-500 to-violet-600`)
- **Background**: Glass morphism with backdrop blur

## 📚 Learning Resources

- [React useContext Documentation](https://react.dev/reference/react/useContext)
- [Next.js App Router](https://nextjs.org/docs/app)
- [Tailwind CSS](https://tailwindcss.com)

## 🚀 Deployment

This project is deployed on Vercel. To deploy your own:

1. **Push to GitHub**
2. **Connect to Vercel**
3. **Auto-deploy on every push**

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Built with ❤️ using React useContext Hook**
