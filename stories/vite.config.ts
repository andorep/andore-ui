import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import {resolve} from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            "@material-tailwind-ui/accordion": resolve(__dirname, "../packages/Accordion/src"),
            "@material-tailwind-ui/theme-plugin": resolve(__dirname, "../packages/plugin/src"),
            "@material-tailwind-ui/surface": resolve(__dirname, "../packages/Surface/src"),
            "@material-tailwind-ui/alert-dialog": resolve(__dirname, "../packages/AlertDialog/src"),
            "@material-tailwind-ui/aspect-ratio": resolve(__dirname, "../packages/AspectRatio/src"),
            "@material-tailwind-ui/avatar": resolve(__dirname, "../packages/Avatar/src"),
            "@material-tailwind-ui/checkbox": resolve(__dirname, "../packages/Checkbox/src"),
            "@material-tailwind-ui/dialog": resolve(__dirname, "../packages/Dialog/src"),
            "@material-tailwind-ui/label": resolve(__dirname, "../packages/Label/src"),
            "@material-tailwind-ui/input": resolve(__dirname, "../packages/Input/src"),
            "@material-tailwind-ui/button": resolve(__dirname, "../packages/Button/src"),
            "@material-tailwind-ui/icon-button": resolve(__dirname, "../packages/IconButton/src"),
            "@material-tailwind-ui/dropdown-menu": resolve(__dirname, "../packages/DropdownMenu/src"),
            "@material-tailwind-ui/linear-progress": resolve(__dirname, "../packages/LinearProgress/src"),
            "@material-tailwind-ui/typography": resolve(__dirname, "../packages/Typography/src"),
            "@material-tailwind-ui/fab": resolve(__dirname, "../packages/Fab/src"),
             "@material-tailwind-ui/toggle-button": resolve(__dirname, "../packages/ToggleButton/src"),
             "@material-tailwind-ui/separator": resolve(__dirname, "../packages/Separator/src"),
             "@material-tailwind-ui/divider": resolve(__dirname, "../packages/Divider/src"),
        }
    }
})
