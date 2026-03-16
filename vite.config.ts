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
      includeAssets: ['moon-icon.svg'],
      manifest: {
        name: 'Know Your Deen - اعرف دينك',
        short_name: 'Know Your Deen',
        description: 'Islamic Trivia Challenge for 1-4 players',
        theme_color: '#a8e6cf',
        background_color: '#f0fdfa',
        icons: [
          {
            src: 'moon-icon.svg',
            sizes: '512x512',
            type: 'image/svg+xml',
            purpose: 'any maskable'
          }
        ]
      }
    })
  ]
})
