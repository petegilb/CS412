var express = require('express');
var router = express.Router();

//I've mounted this in app.js as /ps3

//return a fixed string using the get route to /ps3
router.get('/', (req, res, next)=> {
    //I am making it so if there is an input in the url it will return that otherwise a fixed string
    if(typeof req.query.string !== 'undefined'){
        res.render('ps3', { getStr: req.query.string });
    }
    else {
        res.render('ps3', {getStr: 'Hello there'});
    }
});
//returns a similar response to b
router.post('/', (req,res,next)=>{
    let input = req.body.string;
    res.render('ps3', {postStr: input, postLength: input.length});

});

module.exports = router;
