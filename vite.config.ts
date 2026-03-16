import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['moon-icon.svg', 'apple-touch-icon.png', 'moon-icon-192x192.png', 'moon-icon-512x512.png'],
      manifest: {
        name: 'Know Your Deen - اعرف دينك',
        short_name: 'Know Your Deen',
        description: 'Challenge your Islamic knowledge',
        theme_color: '#a8e6cf',
        background_color: '#f0fdfa',
        icons: [
          {
            src: 'moon-icon-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'moon-icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ]
      }
    })
  ]
})
