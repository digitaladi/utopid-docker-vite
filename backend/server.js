//const express = require("express");
import express from "express";
import cors from "cors";
const app = express();
import  models   from "./models/index.js"

//quand vous voulez récuperer le db dans l'objet envoyé par index.js il faut récuperer l'objet sous un variable ex: models puis faire un destruting pour récuperer db
const { db } = models
//console.log(db)




//synchronisation avec la  base de données
db.sync({ alter: true })

  .then(() => {
    console.log(" ✅ La base de données a été synchronisée");
  })


  .catch(() => {
    console.log(" 📛 La base de données n' a été synchronisée");
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

//middleware
app.use(cors(corsOptions))//on active le cors
app.use(express.json());//on active le json 


app.listen(process.env.VITE_SERVER_PORT || 8000, () => {
  console.log(` 🚀 Le serveur écoute le  port ${process.env.VITE_SERVER_PORT}`);
});
  