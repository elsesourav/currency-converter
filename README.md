# 💱 Currency Converter

A modern, responsive currency converter built with React and Vite. Convert between 100+ world currencies with real-time exchange rates and beautiful country flags.

## ✨ Features

-  🌍 **100+ Currencies**: Support for major world currencies with country flags
-  📊 **Real-time Rates**: Live exchange rates from Frankfurter API
-  🔄 **Smart Conversion**: Auto-converts as you type with clean number formatting
-  🚀 **Instant Swap**: Quick currency swap functionality
-  📱 **Responsive Design**: Works perfectly on desktop and mobile
-  🎨 **Modern UI**: Beautiful glassmorphism design with Tailwind CSS

## 🚀 Getting Started

### Prerequisites

-  Node.js (v14 or higher)
-  npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd currency-converter
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## 🛠️ Technologies Used

-  **React** - Frontend framework
-  **Vite** - Build tool and development server
-  **Tailwind CSS** - Utility-first CSS framework
-  **Axios** - HTTP client for API requests
-  **Frankfurter API** - Real-time currency exchange rates

## 📁 Project Structure

```
src/
├── components/
│   ├── InputBox.jsx     # Currency input component
│   └── index.js         # Component exports
├── api/
│   └── currency.js      # API functions
├── assets/
│   └── bg.png          # Background image
├── App.jsx             # Main application component
└── main.jsx            # Application entry point
```

## 🌟 Key Features Explained

### Smart Number Formatting

-  Automatically removes trailing zeros (100.000 → 100)
-  Handles decimal precision intelligently
-  Clean, professional number display

### Currency Flags

-  Over 100 country flags mapped to currencies
-  Visual identification of currencies
-  Fallback flag for unmapped currencies

### User Experience

-  Click to select all when input is 0
-  No spinner arrows on number inputs
-  Automatic currency conversion
-  Responsive design for all devices

## 📡 API

This project uses the [Frankfurter API](https://frankfurter.app/) for:

-  Real-time exchange rates
-  Currency list fetching
-  Historical data (if needed)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

-  [Frankfurter API](https://frankfurter.app/) for free currency data
-  [Tailwind CSS](https://tailwindcss.com/) for styling
-  [Vite](https://vitejs.dev/) for fast development experience
