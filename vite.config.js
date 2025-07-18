import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  

  base: './',
//  4267038 (Fix: added vercel config and updated vite base path)
})
