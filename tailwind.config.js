/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/DasComponent/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        themeColor: "#845ADF",
        bgDark: "#111C43",
        bgLight: "#F0F1F7",
        textColor: "#a3aed1",
        warning: "#F5B849"
      }
    },
  },
  plugins: [],
};
