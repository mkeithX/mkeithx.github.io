/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false, // disable Tailwind reset to avoid overriding Docusaurus styles
  },
  content: ["./src/**/*.{js,jsx,ts,tsx}", "../docs/**/*.mdx"],
  colors: {
    white: "#fff",
    primary: {
      300: "#38c0ff",
      400: "#14b5ff",
      500: "#08b1ff",
      600: "#0073a7",
      default: "#00a4ef",
      700: "#0d8d4f",
      800: "#0d854b",
      900: "#0a6e3e",
    },
    secondary: {
      300: "#ededed",
      400: "#d4d4d4",
      500: "#adadad",
      600: "#878787",
      default: "#878787",
      700: "#616161",
      800: "#141414",
      900: "#0d0d0d",
    },
    success: "#0d8d4f",
    warning: "#f4b400",
    danger: "#db4437",
  },
  theme: {
    extend: {},
  },
  plugins: [],
}

