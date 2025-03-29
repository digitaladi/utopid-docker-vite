import React from 'react';

const Documentation = () => {
    return (
        <div>
            <h1>Documentation de l'application docker utopid vite</h1>
            
            <ol>
                
                <li>créer le projet avec vite : <span className='command_docu'>npm create vite@latest</span> </li>
                <li>rentrer dans le projet et installer les dépendances : <span className=''>npm install</span> </li>
                <li>lancer le serveur du projet : <span className=''>npm run dev</span></li>
            
            </ol>

            <h2>Configurer le serveur vite dans vite.config.js</h2>
            <p>  server: host: true, strictPort: true, port: 8082 </p>

            <h2>Créer et Configurer le fichier Dockerfile pour le coté front et coté back</h2>
            <h2>Créer et Configurer le fichier docker compose</h2>

            <h2>Créer le container : </h2>
            <p> pour créer les containers<span className='command_docu'>docker compose up</span> </p>
            <p> pour supprimer tous les images et containers<span className='command_docu'>docker system prune -a</span> </p>

            <h2>run ton projet c'est a dire afficher ton projet</h2>
            <p>  ➜  Local:   http://localhost:8080/</p>


               <h2>Créer un dépot git : Attention prendre en compte les fichiers à ne pas envoyer sur le dépot</h2>






               <h2>Installer les packages suivantes coté front : </h2>
               <ul>
               <li>React router dom : <span className=''>npm install react-router-dom</span></li>
               <li>Material Icons: <span className='command_docu'>npm install @mui/icons-material @mui/material @emotion/styled @emotion/react</span></li>
               <li>axios : <span className='command_docu'>npm i axios</span></li>
               <li>: React dev tools <span className='command_docu'>par google extensions</span></li>
               <li>: path <span className='command_docu'>npm install --save path</span></li>
               </ul>

               <h2>Installer les packages suivantes coté backend : </h2>
               <ul>
               <li>cors : <span className=''>npm i cors</span></li>
               <li>dotenv: <span className='command_docu'>npm i dotenv</span></li>
               <li>express : <span className='command_docu'>npm i express</span></li>
               <li>jsonwebtoken : <span className='command_docu'>npm i jsonwebtoken</span></li>
               <li>sequelize : <span className='command_docu'>npm i sequelize</span></li>
               </ul>


               <h2>Reconfigurer le chemin import des fichiers te dossiers avec des alias dans vite.config</h2>
               <ul>
                <li>src/components/public : <span className='command_docu'>@c_public</span> </li>
                <li>src/components/admin : <span className='command_docu'>@c_admin</span> </li>
                <li>src/components/profile : <span className='command_docu'>@c_profile</span> </li>
                <li>src/components/partials : <span className='command_docu'>@c_partials</span> </li>

                <li>src/pages/public : <span className='command_docu'>@p_public</span> </li>
                <li>src/pages/admin : <span className='command_docu'>@p_admin</span> </li>
                <li>src/pages/profile : <span className='command_docu'>@p_profile</span> </li>

                <li>src/styles : <span className='command_docu'>@style</span> </li>
               </ul>


                <h2>Installer et configurer  tailwind</h2>
                <ul>
                    <li>tailwindcss  <span className='command_docu'>npm install tailwindcss @tailwindcss/vite</span></li>
                    <li>configurer  dans vite.config.js dans le tableau plugin: <span className='command_docu'>tailwindcss() </span></li>
                    <li>Importer dans un fichier css : <span className='command_docu'>@import "tailwindcss";</span></li>
                    <li>installer le plus vs code :  <span className='command_docu'>Tailwind CSS IntelliSense</span></li>
                </ul>
    


        </div>
    );
};


export default Documentation;