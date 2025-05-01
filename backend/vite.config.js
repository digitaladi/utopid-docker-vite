

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
//import { dotenv } from 'dotenv'

// https://vite.dev/config/



export default defineConfig({
  plugins: [react()],



// Load environment variables from .env file

/*
define: {
  'import.meta.env': JSON.stringify(process.env)
},

*/
  //configuration du serveur 


  server: {

    host:false,
    strictPort: true,
    port: 4000
  },


})
