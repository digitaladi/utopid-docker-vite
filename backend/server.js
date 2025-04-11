//const express = require("express");
import express from "express";
import cors from "cors";
const app = express();




app.get("/api", (req, res) => {
  res.json({ fruits: ["apple", "orange", "banana"] });
});


const corsOptions = {
  //permet à http://localhost:4000 coté (back)  et  http://localhost:8080 (coté front) de communiquer et d'échanger des données
  origin: "http://localhost:8080",
 

  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization", "Access-Control-Allow-credentials"],
};


app.use(cors(corsOptions))





app.listen(4000, () => {
  console.log("je suis connecté au serveur backend de utopid");
});
