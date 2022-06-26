import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build:{
    outDir: './public/admin-frontend'
  },
  publicDir: './admin-frontend/public',
  server: {
    proxy: {
      '/admin-api': 'http://localhost:8000/admin-api'
    }
  }
})
