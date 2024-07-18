/** @type {import('tailwindcss').Config} */
import plugin from "./src/plugin";
export default {
  // Toggle dark-mode based on .dark class or data-mode="dark"
  darkMode: ["class", '[data-mode="dark"]'],
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  plugins: [plugin],
};
