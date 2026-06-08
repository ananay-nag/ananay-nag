/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Ensuring these exist for your SDE III profile
        'slate-950': '#020617', 
      },
    },
  },
  plugins: [],
}