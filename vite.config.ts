import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'


// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
 

  server: {
    host: '::',       // Permet d'accéder depuis le réseau local
    port: 8080,       // Port personnalisé
  },

  plugins: [
    react(),          // Plugin React avec SWC
  ],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // Alias vers src
    },
  },
}))


