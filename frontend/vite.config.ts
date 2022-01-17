import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueTypeImports from 'vite-plugin-vue-type-imports'

export default defineConfig({
  plugins: [vue(), VueTypeImports()],
  server: {
    hmr: {
      port: 8080,
    },
  },
  resolve: {
    alias: {
      '@': path.join(__dirname, 'src'),
    },
  },
})
