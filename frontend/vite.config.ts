import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
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
