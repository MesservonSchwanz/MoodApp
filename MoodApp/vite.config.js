import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  root: "./src",
  base: "/MoodApp/", // 👈 Required for GitHub Pages
  build: {
    outDir: "../dist", // 👈 Output folder for GitHub Pages to deploy
    emptyOutDir: true
  }
})