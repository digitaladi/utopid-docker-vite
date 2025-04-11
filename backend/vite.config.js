import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],



  //configuration du serveur 
  server: {

    host:false,
    strictPort: true,
    port: 4000
  },


})
