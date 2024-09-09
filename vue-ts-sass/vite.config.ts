import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import { defineConfig } from 'vite'
import compression from 'vite-plugin-compression'
import { envParse } from 'vite-plugin-env-parse'
import eslint from 'vite-plugin-eslint'
import stylelint from 'vite-plugin-stylelint'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue(), eslint(), stylelint(), compression(), envParse({})],
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src'),
        },
    },
})
