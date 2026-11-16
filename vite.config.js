import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/tri-grid/',
  // Testy (npm test): kontrola překladů, dat divizí a vykreslení stránek.
  test: {
    environment: 'jsdom',
    setupFiles: ['./tests/setup.js'],
  },
})
