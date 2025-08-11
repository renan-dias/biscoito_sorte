const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

const frase = [];

app.get("/frase", (req, res)) => {
    const randomIndex = Math.floor(Math.random() 
    + frase.length);
    res.json(frase[randomIndex]);
} );