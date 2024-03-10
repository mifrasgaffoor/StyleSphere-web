/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        PrimaryColor: "#F6F4F3",
        SecondaryColor: "#89530B",
        DarkColor: "#89530B",
        ExtraDarkColor: "#89530B",
      },
    },
  },
  plugins: [],
};
