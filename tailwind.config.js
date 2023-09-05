/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  screens: {
    sm: "480px",
    md: "768px",
    lg: "976px",
    xl: "1440px",
  },
  theme: {
    extend: {
      colors: {
        primaryRegular: "#222299",
        primaryLight: "#3035D9",
        primaryDark: "#211973",
        primary90: "#3838A3",
        primary80: "#4E4EAD",
        primary50: "#9191CC",
        primary20: "#D3D3EB",
        primary10: "#E9E9F5",
        primary05: "#F4F4FA",

        // primaryRegular: "#309c86",
        // primaryLight: "#48bdad",
        // primaryDark: "#073d27",
        // primary90: "#1f7d64",
        // primary80: "#58d0c5",
        // primary50: "#83ded8",
        // primary20: "#b7edea",
        // primary10: "#d3f5f3",
        // primary05: "#f5fcfc",
        black: "#1E1E24",
        white: "#F4F4F4",
      },
      animation: {
        marquee: 'marquee 25s linear infinite',
        marquee2: 'marquee2 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
    },
  },
  plugins: [],
};
