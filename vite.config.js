import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins:  [react()],
  resolve: {
    alias: {
      '@components': '/src/components/',
      // '@containers': '/src/containers/',
      '@pages': '/src/pages/',
      '@styles': '/src/styles/',
      '@assets': '/src/assets/',
      // '@hooks': '/src/app/hooks/',
      '@features': '/src/features/',
      '@images': '/src/assets/images/',
    },
  },
})
