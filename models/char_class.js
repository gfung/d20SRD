//Class schema
const mongoose = require('mongoose');
const Char_ClassSchema = new mongoose.Schema({
	name: { type: String, unique: true },
	hit_die: Number,
	proficiencies : {
		armor: Array,
		weapon: Array,
		tools: Array,
		saving_throws: Array,
		skills: Array,
	},
	features: {
		1: Array,
		2: Array,
		3: Array,
		4: Array,
		5: Array,
		6: Array,
		7: Array,
		8: Array,
		9: Array,
		10: Array,
		11: Array,
		12: Array,
		13: Array,
		14: Array,
		15: Array,
		16: Array,
		17: Array,
		18: Array,
		19: Array,
		20: Array,
	},
	spell_slots:{
		cantrips_known: Array,
		spells_known: Array,
		level_one_spells: Array,
		level_two_spells: Array,
		level_three_spells: Array,
		level_four_spells: Array,
		level_five_spells: Array,
		level_six_spells: Array,
		level_seven_spells: Array,
		level_eight_spells: Array,
		level_nine_spells: Array,
	}
})

const Char_Class = mongoose.model('Char_Class', Char_ClassSchema);

module.exports = Char_Class;
