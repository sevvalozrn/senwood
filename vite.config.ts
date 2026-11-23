
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // GitHub Pages: https://sevvalozrn.github.io/senwood/
  base: '/senwood/',
  plugins: [
    react(),
    tailwindcss(),
  ],
})
