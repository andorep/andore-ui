import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import {resolve} from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            "@andore-ui/accordion": resolve(__dirname, "../packages/Accordion/src"),
            "@andore-ui/theme-plugin": resolve(__dirname, "../packages/plugin/src"),
            "@andore-ui/surface": resolve(__dirname, "../packages/Surface/src"),
            "@andore-ui/alert-dialog": resolve(__dirname, "../packages/AlertDialog/src"),
            "@andore-ui/aspect-ratio": resolve(__dirname, "../packages/AspectRatio/src"),
            "@andore-ui/avatar": resolve(__dirname, "../packages/Avatar/src"),
            "@andore-ui/checkbox": resolve(__dirname, "../packages/Checkbox/src"),
            "@andore-ui/dialog": resolve(__dirname, "../packages/Dialog/src"),
            "@andore-ui/label": resolve(__dirname, "../packages/Label/src"),
            "@andore-ui/input": resolve(__dirname, "../packages/Input/src"),
            "@andore-ui/button": resolve(__dirname, "../packages/Button/src"),
            "@andore-ui/icon-button": resolve(__dirname, "../packages/IconButton/src"),
            "@andore-ui/dropdown-menu": resolve(__dirname, "../packages/DropdownMenu/src"),
            "@andore-ui/linear-progress": resolve(__dirname, "../packages/LinearProgress/src"),
            "@andore-ui/typography": resolve(__dirname, "../packages/Typography/src"),
            "@andore-ui/fab": resolve(__dirname, "../packages/Fab/src"),
             "@andore-ui/toggle-button": resolve(__dirname, "../packages/ToggleButton/src"),
             "@andore-ui/separator": resolve(__dirname, "../packages/Separator/src"),
             "@andore-ui/divider": resolve(__dirname, "../packages/Divider/src"),
             "@andore-ui/radio": resolve(__dirname, "../packages/Radio/src"),
             "@andore-ui/card": resolve(__dirname, "../packages/Card/src"),
             "@andore-ui/snackbar": resolve(__dirname, "../packages/Snackbar/src"),
             "@andore-ui/switch": resolve(__dirname, "../packages/Switch/src"),
             "@andore-ui/tooltip": resolve(__dirname, "../packages/Tooltip/src"),
             "@andore-ui/popover": resolve(__dirname, "../packages/Popover/src"),
             "@andore-ui/tabs": resolve(__dirname, "../packages/Tabs/src"),
             "@andore-ui/circular-progress": resolve(__dirname, "../packages/CircularProgress/src"),
             "@andore-ui/text-field": resolve(__dirname, "../packages/TextField/src"),
             "@andore-ui/textarea": resolve(__dirname, "../packages/Textarea/src"),
             "@andore-ui/select": resolve(__dirname, "../packages/Select/src"),
             "@andore-ui/navigation-list": resolve(__dirname, "../packages/NavigationList/src"),
             "@andore-ui/navigation": resolve(__dirname, "../packages/Navigation/src"),
             "@andore-ui/list": resolve(__dirname, "../packages/List/src"),
             "@andore-ui/search": resolve(__dirname, "../packages/Search/src"),
             "@andore-ui/chip": resolve(__dirname, "../packages/Chip/src"),
             "@andore-ui/bottom-sheet": resolve(__dirname, "../packages/BottomSheet/src"),
        }
    }
})
