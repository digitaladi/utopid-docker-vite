//const express = require("express");
import express from "express";
import cors from "cors";
const app = express();
import  models   from "./models/index.js"
import userRouter from "./routes/user.router.js"
import presidentRouter from "./routes/president.router.js"


//IMPORTATIONS DES ROUTES




//quand vous voulez récuperer le db dans l'objet envoyé par index.js il faut récuperer l'objet sous un variable ex: models puis faire un destruting pour récuperer db
const { db } = models
//console.log(db)




//synchronisation avec la  base de données

//console.log(db)

//Warning!!!!!! 
// { alter: true } :  - tente de modifier les tables existantes
// { force: true } :  - recrée les tables (perte de données)
await db.sync({ alter: false })

  .then(() => {

    console.log(" ✅ La base de données a été synchronisée");
  })


  .catch(() => {
    console.log(" 📛 La base de données n' a pas été synchronisée");
  });


/*
app.get("/", (req, res) => {
  

});
*/

//une route







app.get("/api/pieces", (req, res) => {
  res.send([
    {id:1, name:"liane", poid: 25},
    {id:2, name:"arbore", poid: 150},
  ])
});



//options de header
const corsOptions = {

 origin :  [
    'http://localhost:3000', //dev
    'http://frontend:3000', //nom du service docker
    'https:utopid.com' //production
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ['Content-Type', 'Authorization' ]
  //permet à http://localhost:4000 coté (back)  et  http://localhost:3000 (coté front) de communiquer et d'échanger des données
  //origin: "http://127.0.0.1:3000",
  //credentials: true,
 // methods: ["GET", "POST", "PUT", "DELETE"],
  //allowedHeaders: "Origin ,Content-Type, x-Requested-With, Authorization, Access-Control-Allow-credentials, Accept, Content, role, x-access-token" //les entetes de requetes autorisés
};



//Dire à express de prendre en compte le dossier public pour aller trouver les images en absolute
app.use(express.static('public'));

//middleware de header
app.use(cors(corsOptions))//on active le cors
//middleware de gestion des datas json
app.use(express.json());//on active le json 
//app.use(express.urlencoded({ extended: true }))



//importation des routes utilisateur
app.use("/api", userRouter)

app.use("/api", presidentRouter)


//MIDDLEWARE DE GESTION D ERREURS

//middleware qui permet de capter les erreurs 

/*
app.use((err, req, res) => {
const status = err.status || 500;
const message = err.message || "Une erreur est survenu";
const options = err.options || null;
res.status(status).json({
  error : {
    status, 
    message,
    options
  }
})
})
*/


app.listen(process.env.VITE_SERVER_PORT || 8000, () => {
  console.log(` 🚀 Le serveur écoute le  port ${process.env.VITE_SERVER_PORT}`);
});
  