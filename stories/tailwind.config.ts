import {AndoreUIThemePlugin} from "@andore-ui/theme-plugin";
import {Config} from "tailwindcss";

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class", '[data-mode="dark"]'],
    content: [
        "../packages/**/*.{js,ts,jsx,tsx}",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    plugins: [AndoreUIThemePlugin],
} as Config;
