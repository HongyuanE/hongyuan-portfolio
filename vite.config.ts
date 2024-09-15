import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/hongyuan-portfolio/',
  build: {
    outDir: 'dist',
  },
})