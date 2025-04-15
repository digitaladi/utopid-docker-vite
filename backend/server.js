//const express = require("express");
import express from "express";
import cors from "cors";
const app = express();

/*
app.get("/", (req, res) => {
  

});
*/
app.get("/api/pieces", (req, res) => {
  res.send([
    {id:1, name:"liane", poid: 25},
    {id:2, name:"arbore", poid: 150},
  ])
});


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

//on active le cors
app.use(cors(corsOptions))


/*
app.use(cors())
app.options('*', cors())

*/

app.listen(process.env.SERVER_PORT, () => {
  console.log(`Le serveur écoute le  port ${process.env.SERVER_PORT}`);
});
