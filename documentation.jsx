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


               <h2>Créer un dépot git : </h2>

        </div>
    );
};


export default Documentation;