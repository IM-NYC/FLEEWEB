import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import path from 'path'

// https://vite.dev/config/
// base: '/' for custom domain (www.fleeweb.com via CNAME); use '/FleeWeb/' for *.github.io/FleeWeb/
export default defineConfig({
  base: '/',
  logLevel: 'error', // Suppress warnings, only show errors
  plugins: [
    react(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});