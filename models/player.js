//Race schema
const mongoose = require('mongoose');
const playerSchema = new mongoose.Schema({
    player_class: [
        { 
            pclass: { type: String },
            pclass_level: { type: Number }, 
        }
    ],
    player_race: { type: String },
    player_name: { type: String },
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