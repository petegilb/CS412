const express = require('express');
const router = express.Router();

const fetch = require('node-fetch');
const fetchConfig = require('../config/fetchConfig');

const redis = require('redis');
const client = redis.createClient();
const {promisify} = require('util');

const asyncSet = promisify(client.set).bind(client);
const asyncGet = promisify(client.get).bind(client);
const asyncExists = promisify(client.exists).bind(client);
const asyncExpire = promisify(client.expire).bind(client);

client.flushdb((err, response) => {
    if (err) {throw new Error('bad stuff happened when flushing')}
});

//uses fetch to grab definitions from the Oxford Dictionaries API
router.route('/')
    .get((req, res) => {
        res.render("PS4");
    })
    //route is a post and uses the get method with the oxford dictionary with a word input to retrieve its data
    .post(async (req, res) => {
        //if there is an inputted word from the pug template otherwise lookup sword
        let word = (req.body.wordRequest ? req.body.wordRequest: 'sword');
        let match = await asyncExists(word);
        //if the word is in the cache
        if (match){
            let def = await asyncGet(word);
            let response = {
                definition: def,
                cached: true
            }
            res.send(response);
        } else { //otherwise call the api
            let rawReturnValue = await fetch(fetchConfig.fetchOptions.url + word + "?fields=definitions&strictMatch=false", {
                method: 'GET',
                headers: {"app_id": fetchConfig.fetchOptions.id, "app_key": fetchConfig.fetchOptions.key}
            });
            const cleanReturnValue = await rawReturnValue.json();
            try { //if there was a definition found
                let def = cleanReturnValue["results"][0]["lexicalEntries"][0]["entries"][0]["senses"][0]["definitions"][0];
                await asyncSet(word, def);
                let response = {
                    definition: def,
                    cached: false
                }
                await asyncExpire(word, 15); //expire after 15 seconds
                res.send(response);
            }
            catch (error){
                res.send("definition not found");
            }
        }
    })


module.exports = router;