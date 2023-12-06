/** @type {import('tailwindcss').Config} */
import rmToPxPlugin from "tailwindcss-rem-to-px";
export default {
  content: ["./**/*.{js,json,liquid}"],
  theme: {
    extend: {},
  },
  plugins: [
    rmToPxPlugin({
      baseFontSize: 16,
    }),
  ],
};
