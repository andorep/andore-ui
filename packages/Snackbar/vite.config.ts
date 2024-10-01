import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import {resolve} from 'path'
import packageJson from './package.json'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        dts({
            insertTypesEntry: true,
        }),
    ],
    build: {
        lib: {
            entry: resolve(__dirname, 'src/index.ts'),
            formats: ['es', 'cjs'],
            fileName:'index'
        },
        rollupOptions: {
            output: {
                globals: {
                    react: "React",
                    'react-dom': "ReactDOM",
                }
            },
            external: [
                ...Object.keys(packageJson.dependencies),
                ...Object.keys(packageJson.devDependencies),
                "react/jsx-runtime",
            ]
        }
    }
})
