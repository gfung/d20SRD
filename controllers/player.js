const Player = require('../models/player');
const Char_class = require('../models/char_class');
const Race = require('../models/race');

const PlayerSchema = require('mongoose').model('Player').schema

const get_class = function(class_name) {
    Char_class.findOne({'name' : class_name}).exec(function(err, data) {
        return data;
    })
}

const get_race = function(race_name) {
    Race.findOne({'name' : race_name}).exec(function(err, data) {
        return data;
    })
}

/**
 * GET /
 * Home page.
 */
exports.get_player_make = (req, res, next) => {
    return res.render('player', {
        title: 'Home',
        data: JSON.stringify(PlayerSchema)
  })
};

/**
 * POST /
 * Player Create
 */
exports.post_player_make = (req, res, next) => {
    //validation + sanitization
    req.checkBody('player_name').notEmpty()
    req.sanitizeBody('player_name').toString();

    const errors = req.validationErrors();

    if (errors) {
        req.flash('errors', errors);
        return res.redirect('/class/make');
    }
    
    //string to array and trim it!
    function trim_it(tobetrimmed) {
        tobetrimmed = tobetrimmed.split(",")
        for(let i = 0; i < tobetrimmed.length; i++){
            tobetrimmed[i] = tobetrimmed[i].trim();
        }
        return tobetrimmed
    }
    
    //get the class

    let alltheclasses=[];
    if(req.body.player_class_multi){
        alltheclasses = [ {pclass: req.body.player_class, pclass_level: req.player_class_level[0]} ]
        for (let i=0;i<req.body.player_class_multi.length;i++){
            
            alltheclasses.push( { pclass: get_class(eq.body.player_class), pclass_level: parseInt(req.body.player_class_level[i+1]) } )
        }
    }else {
        alltheclasses.push({pclass: get_class(req.body.player_class), pclass_level: parseInt(req.body.player_class_level) })
    }

    const player = new Player({
        player_class: alltheclasses,
        player_race: get_race(req.body.player_race),
        player_name: req.body.player_name,
        ability_scores: {
            str: parseInt(req.body['ability_scores.str']),
            dex: parseInt(req.body['ability_scores.dex']),
            con: parseInt(req.body['ability_scores.con']),
            int: parseInt(req.body['ability_scores.int']),
            wis: parseInt(req.body['ability_scores.wis']),
            cha: parseInt(req.body['ability_scores.cha']),
        }
    });

    Player.findOne({ player_name: req.body.player_name }, (err, existingUser) => {
        //check for errors or existing by the same name
        if (err) { return next(err); }
        if(existingUser) {
            req.flash('errors', { msg: 'Account with name already exists.' });
            return res.redirect('/player/make');
        }
        // No errors, no duplicates
        // player.save((err) => {
        //     if (err) { return next(err); }
        //     req.flash('info', { msg: 'Success!' });
        //     res.redirect('/player/make');
        // });
    })
};

/**
 * GET /
 * Character
 */
exports.get_player_list = (req, res, next) => {
    return res.render('character_list', {
        title: 'Character List',
    })
};

/**
 * post /
 * Character
 */
exports.post_player_list = (req, res, next) => {
    Player.find({}, function(err, data) {
        if (err) { return next(err); }
        res.send(data)
    })
};

/**
 * GET /
 * Character
 */
exports.get_player_sheet = (req, res, next) => {
    //send all data
    res.render('character_sheet', {
        title: "Character Sheet"
    })
};

/**
 * post /
 * Character
 */

exports.post_player_sheet = (req, res, next) => {
    Player.findOne({player_name: req.body.name}).then(function(err, data) {
        if (err) { return next(err); }
        if(data) {
            console.log("======", data)
            return res.send();
            
        } else{
            return res.send("no data")
        }
    })
};