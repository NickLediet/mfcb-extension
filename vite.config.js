import { defineConfig } from 'vite'
import { fileURLToPath } from 'node:url'

export default defineConfig({ 
    build: {
        rollupOptions: {
            input: {
                'mbfc-infobar': fileURLToPath(new URL('./src/mbfc-infobar.ts', import.meta.url)),
                'index': fileURLToPath(new URL('./src/index.ts', import.meta.url)),
                'content-script': fileURLToPath(new URL('./src/content-script.ts', import.meta.url)),
            },
            output: {
                entryFileNames: '[name].js'
            }
        },
    }
})