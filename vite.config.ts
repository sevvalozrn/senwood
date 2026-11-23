
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // Custom domain kullanıldığında base '/' olmalı
  base: '/senwood/',
  plugins: [
    react(),
    tailwindcss(),
  ],
})
