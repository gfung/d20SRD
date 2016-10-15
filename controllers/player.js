const Player = require('../models/player');
const PlayerSchema = require('mongoose').model('Player').schema
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