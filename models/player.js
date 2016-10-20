//Race schema
const mongoose = require('mongoose');
const Char_class = require('../models/char_class');
const Race = require('../models/race');

const ObjectId = mongoose.Types.ObjectId();

const playerSchema = new mongoose.Schema({
    player_class: [
        { 
            pclass: {type: mongoose.Schema.Types.ObjectId, ref: 'Char_class'},
            pclass_level: { type: Number }, 
        }
    ],
    player_race: {type: mongoose.Schema.Types.ObjectId, ref: 'Race'},
    player_name: { type: String, unique: true },
    ability_scores: {
        str: { type: Number, min: 1 },
        dex: { type: Number, min: 1 },
        con: { type: Number, min: 1 },
        int: { type: Number, min: 1 },
        wis: { type: Number, min: 1 },
        cha: { type: Number, min: 1 }
    }
})

const Player = mongoose.model('Player', playerSchema);

module.exports = Player;