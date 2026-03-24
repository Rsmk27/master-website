import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import viteCompression from 'vite-plugin-compression'
import sitemap from 'vite-plugin-sitemap'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),

    // Compression for better performance
    viteCompression({
      verbose: true,
      disable: false,
      threshold: 10240,
      algorithm: 'gzip',
      ext: '.gz'
    }),

    // Sitemap generation
    sitemap({
      hostname: 'https://rsmk.co.in',
      dynamicRoutes: [
        '/',
        '/about',
        '/products',
        '/domains',
        '/ecosystem',
        '/contact'
      ]
    })
  ],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },

  // Build optimizations
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': ['react', 'react-dom', 'react-router-dom'],
          'animations': ['framer-motion', 'three']
        }
      }
    },
    chunkSizeWarningLimit: 1000
  }
})
