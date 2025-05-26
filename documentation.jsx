import React from "react";

const Documentation = () => {
  return (
    <div>
      <h1>Documentation de l'application docker utopid vite</h1>

      <ol>
        <li>
          créer le projet avec vite :{" "}
          <span className="command_docu">npm create vite@latest</span>{" "}
        </li>
        <li>
          rentrer dans le projet et installer les dépendances :{" "}
          <span className="">npm install</span>{" "}
        </li>
        <li>
          lancer le serveur du projet : <span className="">npm run dev</span>
        </li>
      </ol>

      <h2>Configurer le serveur vite dans vite.config.js</h2>
      <p> server: host: true, strictPort: true, port: 8082 </p>

      <h2>
        Créer et Configurer le fichier Dockerfile pour le coté front et coté
        back
      </h2>
      <h2>Créer et Configurer le fichier docker compose</h2>

      <h2>Créer le container : </h2>
      <p>
        {" "}
        pour créer les containers
        <span className="command_docu">docker compose up</span>{" "}
      </p>
      <h2>Pour rentrer dans un container</h2>
      <p>$ docker exec -it nom_du_container bash</p>
      <p>
        {" "}
        l'exemple ici : docker exec -it front bash : front et le nom de
        container frontend
      </p>
      <p>
        Pour rentrer dans le container docker-utopid-vite-mysql_db-1 et y
        affectuer des commande mysql exemple : créer une base de données, donner
        des droits à une utilisateur spécfique ect... :{" "}
        <span>
          {" "}
          docker exec -it docker-utopid-vite-mysql_db-1 mysql -u root -p
        </span>
      </p>
      <p>
        créer un utilisateur :{" "}
        <span>
          CREATE USER 'dbuser'@'localhost' IDENTIFIED BY 'dbpassword';
        </span>
      </p>
      <p>
        donner des droits sur tous les bases :{" "}
        <span>
          GRANT ALL PRIVILEGES ON *.* TO 'sammy'@'localhost' WITH GRANT OPTION;
        </span>
      </p>
      <p>
        <p>
          Se connecter à mysql avec l'utilisateur dbuser{" "}
          <span>
            docker exec -it docker-utopid-vite-mysql_db-1 mysql -u dbuser -p{" "}
          </span>
        </p>
        <p>
          {" "}
          pour valider les modifications sql : <span>FLUSH PRIVILEGES;</span>
        </p>{" "}
        pour supprimer tous les images et containers
        <span className="command_docu">docker system prune -a</span>{" "}
      </p>
      <p>
        rentrer dans le container :{" "}
        <span>docker compose exec npm /bin/bash</span>
      </p>
      <p>
        permet de vérifier si le docker est actif<span> </span>
      </p>
      <p>
        Pour rédamarrer le moteur en cas ou tout va mal{" "}
        <span>systemctl restart docker</span>
      </p>
      <p>
        afficher la list des container <span>docker container ls</span>
      </p>
    <p> </p>
      <h2>run ton projet c'est a dire afficher ton projet</h2> 
      <p> ➜ Local: http://localhost:8080/</p>
      <p></p>
      <h2>
        Créer un dépot git : Attention prendre en compte les fichiers à ne pas
        envoyer sur le dépot
      </h2>

      <h2>Installer les packages suivantes coté front : </h2>
      <ul>
        <li>
          React router dom :{" "}
          <span className="">npm install react-router-dom</span>
        </li>
        <li>
          Material Icons:{" "}
          <span className="command_docu">
            npm install @mui/icons-material @mui/material @emotion/styled
            @emotion/react
          </span>
        </li>
        <li>
          axios : <span className="command_docu">npm i axios</span>
        </li>
        <li>
          : React dev tools{" "}
          <span className="command_docu">par google extensions</span>
        </li>
        <li>
          : path <span className="command_docu">npm install --save path</span>
        </li>
      </ul>

      <h2>Installer les packages suivantes coté backend : </h2>
      <ul>
        <li>
          cors : <span className="">npm i cors</span>
        </li>
        <li>
          dotenv: <span className="command_docu">npm i dotenv</span>
        </li>
        <li>
          express : <span className="command_docu">npm i express</span>
        </li>
        <li>
          jsonwebtoken :{" "}
          <span className="command_docu">npm i jsonwebtoken</span>
        </li>
        <li>
          sequelize : <span className="command_docu">npm i sequelize</span>
        </li>
      </ul>

      <h2>
        Reconfigurer le chemin import des fichiers te dossiers avec des alias
        dans vite.config
      </h2>
      <ul>
        <li>
          src/components/public :{" "}
          <span className="command_docu">@c_public</span>{" "}
        </li>
        <li>
          src/components/admin : <span className="command_docu">@c_admin</span>{" "}
        </li>
        <li>
          src/components/profile :{" "}
          <span className="command_docu">@c_profile</span>{" "}
        </li>
        <li>
          src/components/partials :{" "}
          <span className="command_docu">@c_partials</span>{" "}
        </li>

        <li>
          src/pages/public : <span className="command_docu">@p_public</span>{" "}
        </li>
        <li>
          src/pages/admin : <span className="command_docu">@p_admin</span>{" "}
        </li>
        <li>
          src/pages/profile : <span className="command_docu">@p_profile</span>{" "}
        </li>

        <li>
          src/styles : <span className="command_docu">@style</span>{" "}
        </li>
      </ul>

      <h2>Installer et configurer tailwind</h2>
      <ul>
        <li>
          tailwindcss{" "}
          <span className="command_docu">
            npm install tailwindcss @tailwindcss/vite
          </span>
        </li>
        <li>
          configurer dans vite.config.js dans le tableau plugin:{" "}
          <span className="command_docu">tailwindcss() </span>
        </li>
        <li>
          Importer dans un fichier css :{" "}
          <span className="command_docu">@import "tailwindcss";</span>
        </li>
        <li>
          installer le plus vs code :{" "}
          <span className="command_docu">Tailwind CSS IntelliSense</span>
        </li>
      </ul>

      <h2> créer des thèmes pour les les couleurs, fonts ect...</h2>
      <p></p>

      <h2>Express</h2>
      <p>
        Express est le framework backend issue de node qui met à la disposition
        des outils et des fonctions pour faire des requetes, des routes et
        autres comme :{" "}
      </p>
      <ul>
        <li>
          {" "}
          <strong>[get, post, put, delete] </strong>: des fonctions de requetes{" "}
        </li>
        <li>
          {" "}
          <strong>la fonction use() </strong> : pour éxécuter des middlewares
        </li>
        <li>
          {" "}
          <strong>la fonction listen </strong> : pour écouter un port spécifique
        </li>
        <li>
          {" "}
          <strong> express.json()</strong> : un middleware qui analyse un corps
          JSON dans une requête entrante
        </li>
        <li>ect...</li>
      </ul>

      <h2>Cors</h2>
      <p>
        Permet à plusieurs applications d'un même serveur ou de serveur distant
        de comminuquer et d'echanger des données
      </p>
      <p>
        <strong>origin: "http://localhost:8080"</strong> - permet à
        http://localhost:4000 coté (back) et http://localhost:8080 (coté front)
        de communiquer et d'échanger des données
      </p>
      <p>
        <strong>
          origin: ["http://localhost:8080","http://autresite.com"]
        </strong>{" "}
        - permet à http://localhost:4000 coté (back) de communiquer et
        d'échanger des données avec les applications du tableau{" "}
      </p>
      <p>
        <strong>origin: "*" </strong>permet à http://localhost:4000 coté (back)
        de communiquer et d'échanger des données avec tous les applications hhtp
      </p>
      <p>sinon on met cors() sans parametre dans le middleware app.use()</p>
      <p>
        NB: comme c'est un middleware on peut le mettre en 2 eme parametre de
        nos fonction de requete. ex : app.get("/", cors(), (req, res) {})
      </p>

      <h2>La solution cors avec vite.config.js et docker</h2>
      <p>voir la page vite.config</p>

      <h2>Axios</h2>
      <p>
        un api qui permet de appels d'un autre domaine . voir le fichier
        baseUrl.js et ou axios est utilisé
      </p>

      <h2>DOTENV</h2>
      <p>
        Pour faire en compte que les variables d'nevironnement soient pris en
        compte dans vite et docker il faut aller dans eslint.config.js et
        ajouter node dans globals : ...globals.node
      </p>


    <h2>Serveur</h2>
    <p>se connecter au serveur dans server.js</p>

      <h2>Base de données</h2>
      <p>Configuer sequelize dans db.config.js</p>
      <p>se connecter et synchroniser avec la base de données utopid db.config.js</p>
      <p>creer un modele exemple pour user, avis, country ect... dans le dossier models</p>
      <p>créer un fichier index.js dans models dans lequel on gére les relations </p>

      <h2>Systéme de gestion d'erreur</h2>
      <p>créer un middleware dans le dossier middlewares : <span>error.js</span></p>


      <h2>Creer des controllers pour chaque entité</h2>
      <p>Créer des fichiers $modele.controller.js dans le dossier controllers</p>



    <h2>Un fichier route pour chaque   controller</h2>
    <p>auth.controller pour auth.router</p>

<h2>importer les routes de chaque systeme de routage dans server.js : </h2>
<p>app.use("/api", userRouter)</p>


<h2>Installer react-hook-form</h2>
<p>npm install react-hook-form</p>

      <p>Installer l'extension mojisense pour pouvoir utiliser des imojis sur vscode </p>



      <h2>Installer multer pour la gestion de l'opload</h2> 
      <p>npm install --save multer</p>


      <h2>Installer fs pour la gestion des fichiers et dossiers: ex : pour supprimer un avatar lié à un utilisateur après delete  </h2>
      <p>npm i fs</p>

            <h2>Installer toaster pour les notifications </h2>
      <p>npm i react-hot-toast</p>

      <h2>Utiliser le systeme de pagination de material ui en se basant sur la requete</h2>
    </div>
  );
};

/*




upstream client {
    server client:5173;
    
}

upstream api {
    server api:4000;
}

server {
    listen 80;

    location / {
        proxy_pass http://client;
    }

    location /sockjs-node {
        proxy_pass http://client;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "Upgrade";
    }
    
    location /api {
        rewrite /api/(.*) /$1 break;
        proxy_pass http://api;
    }
}



*/

export default Documentation;


