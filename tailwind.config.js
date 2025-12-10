/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/app/**/*.{ts,tsx}", "./src/components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#6d1b2d",
        secondary: "#f4a48d",
        neutralLight: "#FFF5F0",
        neutralGray: "#E8E8E8",
        neutralDark: "#1D1D1D",
      },
      backgroundImage: {
        "peach-radial":
          "radial-gradient(circle at 20% 20%, rgba(244,164,141,0.25), transparent 40%)",
      },
      boxShadow: {
        "soft-xl": "0 20px 60px rgba(0,0,0,0.06)",
      },
    },
  },
  plugins: [],
};
