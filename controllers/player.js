// const Player = require('../models/player');
// const Char_class = require('../models/char_class');
// const Race = require('../models/race');

// const PlayerSchema = require('mongoose').model('Player').schema

const get_class = function(class_name) {
    // Char_class.findOne({'name' : class_name}).exec(function(err, data) {
    //     return data;
    // })
}

/**
 * GET /
 * Home page.
 */
exports.get_player_make = (req, res, next) => {
    return res.render('player', {
        title: 'Home'
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
        return res.redirect('/player/make');
    }

    // Player.findOne({ player_name: req.body.player_name }, (err, existingUser) => {
    //     //check for errors or existing by the same name
    //     if (err) { return next(err); }
    //     if(existingUser) {
    //         req.flash('errors', { msg: 'Account with name already exists.' });
    //         return res.redirect('/player/make');
    //     }
    //     console.log(req.body)
    //     // No errors, no duplicates
    //     Char_class.findOne({'name' : req.body.player_class}).exec(function(err, class_data) {
    //         if (err) { return next(err); }
    //         Race.findOne({'name' : req.body.player_race}).exec(function(err, race_data) {
    //             if (err) { return next(err); }
    //             let alltheclasses=[];
    //             if(req.body.player_class_multi){
    //                 alltheclasses = [ {pclass: req.body.player_class, pclass_level: req.player_class_level[0]} ]
    //                 for (let i=0;i<req.body.player_class_multi.length;i++){
                        
    //                     alltheclasses.push( { pclass: class_data, pclass_level: parseInt(req.body.player_class_level[i+1]) } )
    //                 }
    //             }else {
    //                 alltheclasses.push({pclass: class_data, pclass_level: parseInt(req.body.player_class_level) })
    //             }
    //             const player = new Player({
    //                 player_class: alltheclasses,
    //                 player_race: race_data,
    //                 player_name: req.body.player_name,
    //                 skills: req.body.class_skills_list,
    //                 ability_scores: {
    //                     str: parseInt(req.body['ability_scores.str']),
    //                     dex: parseInt(req.body['ability_scores.dex']),
    //                     con: parseInt(req.body['ability_scores.con']),
    //                     int: parseInt(req.body['ability_scores.int']),
    //                     wis: parseInt(req.body['ability_scores.wis']),
    //                     cha: parseInt(req.body['ability_scores.cha']),
    //                 }
    //             });
    //             player.save((err) => {
    //                 if (err) { 
    //                     req.flash('error', { msg: 'err!' });
    //                     return res.redirect('/player/make');
    //                 }
    //                 req.flash('info', { msg: 'Success!' });
    //                 return res.redirect('/player/make');
    //             });
    //         })
    //     })

    // })
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
    // Player.find({}, function(err, data) {
    //     if (err) { return next(err); }
    //     res.send(data)
    // })
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
    // Player.findOne({'player_name' : req.body.name}).populate('player_race player_class.pclass').exec(function(err, data){
    //     if (err) { 
    //         req.flash('errors', 'Could not retrieve Character data!');
    //         return next(err); }
    //     if(data) {

    //         return res.send(data)
    //     }
    // })
    
};