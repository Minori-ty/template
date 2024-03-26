import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslint from 'vite-plugin-eslint'
import stylelint from 'vite-plugin-stylelint'
import compression from 'vite-plugin-compression'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue(), eslint(), stylelint(), compression()],
})
