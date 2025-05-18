module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#000000',
          light: '#1a1a1a',
          dark: '#000000',
        },
        secondary: {
          DEFAULT: '#404040',
          light: '#666666',
          dark: '#262626',
        },
        accent: {
          DEFAULT: '#ffffff',
          light: '#ffffff',
          dark: '#e6e6e6',
        },
        background: {
          DEFAULT: '#f5f5f5',
          dark: '#1a1a1a',
        },
        text: {
          DEFAULT: '#000000',
          light: '#404040',
          lighter: '#666666',
        }
      },
      boxShadow: {
        'custom': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      },
    },
  },
  plugins: [],
} 