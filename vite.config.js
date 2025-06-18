import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
    base: '/my-digital-experience/',
    plugins: [
        tailwindcss(),
    ],
})
