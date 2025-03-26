// tailwind.config.js 또는 tailwind.config.mjs
/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
      "./app/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: "#FF4F59",
          secondary: "#FF6B6B",
          neutral: "#333333",
        },
      },
    },
    plugins: [],
  };
  