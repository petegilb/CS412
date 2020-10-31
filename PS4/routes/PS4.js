const express = require('express');
const router = express.Router();

const fetch = require('node-fetch');
const fetchConfig = require('../config/fetchConfig');
//uses fetch to grab definitions from the Oxford Dictionaries API
router.route('/')
    .get((req, res) => {
        res.render("PS4");
    })
    //route is a post and uses the get method with the oxford dictionary with a word input to retrieve its data
    .post(async (req, res) => {
        let word;
        //if there is an inputted word from the pug template
        if (req.body.wordRequest) {
            word = req.body.wordRequest;
        }
        //otherwise find the definition of a sword
        else
            word = "sword";
        let rawReturnValue = await fetch(fetchConfig.fetchOptions.url + word + "?fields=definitions&strictMatch=false", {
            method: 'GET',
            headers: {"app_id": fetchConfig.fetchOptions.id, "app_key": fetchConfig.fetchOptions.key}
        });
        const cleanReturnValue = await rawReturnValue.json();
        //this json file has so many variables for some reason so I just got the first definition of the word I could find
        try {
            res.render("PS4", {results: cleanReturnValue["results"][0]["lexicalEntries"][0]["entries"][0]["senses"][0]["definitions"][0]});
        } catch(error) {
            res.render("PS4", {results: "definition not found"});
        }
    })


module.exports = router;