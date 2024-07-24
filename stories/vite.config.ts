import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            "@material-tailwind-ui/accordion": "packages/Accordion/src",
            "@material-tailwind-ui/theme-plugin": "packages/plugin/src",
        }
    }
})
