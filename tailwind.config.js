import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", ...defaultTheme.fontFamily.sans],
        bitcount: ["'Bitcount Prop Single'", ...defaultTheme.fontFamily.mono],
      },
      backgroundImage: {
        'hero' : "url('/src/assets/Bg.png')"
      }
    },
  },
  plugins: [],
};