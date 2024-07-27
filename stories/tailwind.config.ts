import {MaterialTailwindUiThemePlugin} from "@material-tailwind-ui/theme-plugin";
import {Config} from "tailwindcss";

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class", '[data-mode="dark"]'],
    content: ["../packages/**/*.{js,ts,jsx,tsx}"],
    plugins: [MaterialTailwindUiThemePlugin],
} as Config;
