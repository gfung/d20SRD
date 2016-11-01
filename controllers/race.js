// const Race = require('../models/race');
// const RaceSchema = require('mongoose').model('Race').schema
/**
 * GET /
 * Race Create
 */
exports.get_race_make = (req, res, next) => {
    return res.render('race', {
        title: 'Home'
  })
};
/**
 * POST /
 * Race Create
 */
exports.post_race_make = (req, res, next) => {
    //validation + sanitization
    req.checkBody('name').notEmpty()
    req.sanitizeBody('name').toString();

    const errors = req.validationErrors();

    if (errors) {
        req.flash('errors', errors);
        return res.redirect('/race/make');
    }
    
    //string to array and trim it!
    function trim_it(tobetrimmed) {
        tobetrimmed = tobetrimmed.split(",")
        for(let i = 0; i < tobetrimmed.length; i++){
            tobetrimmed[i] = tobetrimmed[i].trim();
        }
        return tobetrimmed
    }

    // const race = new Race({
    //     name: req.body.name,
    //     stat_bonus: {
    //         str: req.body['stat_bonus.str'] || 0,
    //         dex: req.body['stat_bonus.dex'] || 0,
    //         con: req.body['stat_bonus.con'] || 0,
    //         wis: req.body['stat_bonus.wis'] || 0,
    //         int: req.body['stat_bonus.int'] || 0,
    //         cha: req.body['stat_bonus.cha'] || 0,
    //     },
    //     race_size: req.body.race_size,
    //     features: trim_it(req.body.features),
    //     languages: trim_it(req.body.languages),
    //     speed: req.body.speed
    // });

    // Race.findOne({ name: req.body.name.toLowerCase() }, (err, existingUser) => {
    //     //check for errors or existing by the same name
    //     if (err) { return next(err); }
    //     if(existingUser) {
    //         req.flash('errors', { msg: 'Account with that email address already exists.' });
    //         return res.redirect('/race/make');
    //     }
    //     // No errors, no duplicates
    //     race.save((err) => {
    //         if (err) { return next(err); }
    //         req.flash('info', { msg: 'Success!' });
    //         res.redirect('/race/make');
    //     });
    // })
};

/**
 * GET /
 * Race List
 */
exports.post_race_list = (req, res, next) => {
    // Race.find({}, (err, races) => {
    //     //check for errors or existing by the same name
    //     if (err) { return next(err); }
    //     if(races) {
    //         return res.send(races);
    //     }
    // })
};