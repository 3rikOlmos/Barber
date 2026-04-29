import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // 'base' debe ser el nombre de tu repositorio en GitHub
  base: '/Barber/', 
  build: {
    outDir: 'dist',
  },
  server: {
    port: 3000,
    open: true,
  },
})
