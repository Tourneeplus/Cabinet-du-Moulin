import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'
import componentTagger from 'vite-plugin-component-tagger'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
 

  server: {
    host: '::',       // Permet d'accéder depuis le réseau local
    port: 8080,       // Port personnalisé
  },

  plugins: [
    react(),          // Plugin React avec SWC
    mode === 'development' && componentTagger(), // Tag des composants en dev
  ].filter(Boolean), // Retire les plugins falsy (comme false)

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // Alias vers src
    },
  },
}))


