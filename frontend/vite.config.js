import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import  path from 'path-platform'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
 
  //configuration du serveur 
  server: {

    host:true,
    strictPort: true,
    port: 8080
  },

/*
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '/src'),
      '@public': path.resolve(__dirname, 'src/component/public') 

    },
  }
*/


  //réecriture des imports de fichier
  resolve: {

    alias: [
      {
       find:  '@',
        replacement: path.resolve(__dirname, 'src') 
    },

    {
      find:  '@c_public',
       replacement: path.resolve(__dirname, 'src/component/public') 
   },

   {
    find:  '@c_profile',
     replacement: path.resolve(__dirname, 'src/component/profile') 
   },

   {
  find:  '@c_admin',
   replacement: path.resolve(__dirname, 'src/component/admin') 
   },

   {
    find:  '@c_partials',
     replacement: path.resolve(__dirname, 'src/component/partials') 
   },


   {
    find:  '@p_profile',
    replacement: path.resolve(__dirname, 'src/pages/profile') 
  },

  {
    find:  '@p_admin',
    replacement: path.resolve(__dirname, 'src/pages/admin') 
  },


  {
    find:  '@p_public',
    replacement: path.resolve(__dirname, 'src/pages/public') 
  },


  {
    find:  '@style',
    replacement: path.resolve(__dirname, 'src/styles') 
  },

  {
    find:  '@utils',
    replacement: path.resolve(__dirname, 'src/_utils') 
  },



    ],
  },

  
})
