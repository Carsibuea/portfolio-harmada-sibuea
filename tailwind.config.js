/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      colors: {
        primary: "#2563eb",
        dark: "#0f172a",
        secondary: "#64748b",
      },
    },
  },
  plugins: [],
};
