import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: '/LiuLiming/',
  plugins: [vue()],
  build: {
    outDir: 'docs'
  }
})
