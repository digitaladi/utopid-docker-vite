import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path-platform";
import tailwindcss from "@tailwindcss/vite";
export default defineConfig({
  plugins: [react(), tailwindcss()],

  //configuration du serveur
  server: {
    host: true,
    strictPort: true,
    port: 3000,
    // origin: true,

    //le systéme CORS) ou « partage des ressources entre origines multiples »
    //ici on permet de partager des données entre notre frontend (http://127.0.0.1:3000/) et notre backend http://127.0.0.1:4000/
    //NB: http://backend:4000/ = backend conrrespond le nom du container backend défini dans le docker-compose
    proxy: {
      "^/api": {
        //target: "http://backend:4000/", // if docker
        target: "http://localhost:4000/", // if docker
        changeOrigin: true,
        logLevel: "debug",
        pathRewrite: { "^/api": "/" },
      },
    },
  },

  /*
  preview: {
    port: 3000,
    strictPort: true
  },

npm
    build: {
    outDir: 'dist',
    emptyOutDir: true
  },

*/

  //réecriture des imports de fichier
  resolve: {
    alias: [
      {
        find: "@",
        replacement: path.resolve(__dirname, "src"),
      },

      {
        find: "@c_public",
        replacement: path.resolve(__dirname, "src/component/public"),
      },

      {
        find: "@c_profile",
        replacement: path.resolve(__dirname, "src/component/profile"),
      },

      {
        find: "@c_admin",
        replacement: path.resolve(__dirname, "src/component/admin"),
      },

      {
        find: "@c_partials",
        replacement: path.resolve(__dirname, "src/component/partials"),
      },

      {
        find: "@p_profile",
        replacement: path.resolve(__dirname, "src/pages/profile"),
      },

      {
        find: "@p_admin",
        replacement: path.resolve(__dirname, "src/pages/admin"),
      },

      {
        find: "@p_public",
        replacement: path.resolve(__dirname, "src/pages/public"),
      },

      {
        find: "@style",
        replacement: path.resolve(__dirname, "src/styles"),
      },

      {
        find: "@utils",
        replacement: path.resolve(__dirname, "src/_utils"),
      },

      {
        find: "@img",
        replacement: path.resolve(__dirname, "src/images"),
      },

      {
        find: "@services",
        replacement: path.resolve(__dirname, "src/_services"),
      },
    ],
  },
});
