"use strict";

const { default: axios } = require("axios");
const { response } = require("express");
const express = require("express");
// const superagent = require("superagent");
require("dotenv").config();

const app = express();

const PORT = process.env.PORT;

app.get("/", (req,res) => {
    res.status(200).send("Im alive");
})

app.get("/getPoke", (req, res) => {
    const url = 'https://pokeapi.co/api/v2/pokemon?limit=10&offset=0';
    // ?limit=10&offset=0
    axios
    .get(url)
    .then((pokeData) => {
        console.log(pokeData)
        res.status(200).send(pokeData.data);
    })
    .catch((error) => {
        res.status(500).send(`something went wrong ${error}`)
    })
})

app.get("*", (req,res) => {
    res.status(404).send("not found");
})



app.listen(PORT, () => {
    console.log(`listening on ${PORT}`)
})


