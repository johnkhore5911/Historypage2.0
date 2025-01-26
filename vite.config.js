import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
   server: {
    proxy: {
      '/api': {
        target: 'https://historypage-cyan.vercel.app',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''), // Optional path rewrite
      },
    },
  },
});
