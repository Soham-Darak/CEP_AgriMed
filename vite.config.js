import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE_PATH || "/CEP_AgriMed",
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000', // URL of your backend server
        changeOrigin: true,
        secure: false,
      },
    },
  },
})
