//Race schema
const mongoose = require('mongoose');
const raceSchema = new mongoose.Schema({
	name: { type: String, unique: true },
	stat_bonus: {
		str: { type: Number },
		dex: { type: Number },
		con: { type: Number },
		wis: { type: Number },
		int: { type: Number },
		cha: { type: Number }
	},
	race_size: { type: String },
	features: { type: Array },
	languages: { type: Array },
	speed: { type: Number }
})

const Race = mongoose.model('Race', raceSchema);

module.exports = Race;
