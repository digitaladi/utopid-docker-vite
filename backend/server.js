//const express = require("express");
import express from "express"
const app = express();



app.get("/api", (req, res) => {
res.json({fruits: ["apple", "orange", "banana"]})
})





app.listen(4000, () => {
    console.log("je suis connecté au serveur backend de utopidd")
})
