//Class schema

const classSchema = new mongoose.Schema({
	name: { type: String, unique: true },
	hit_die: type: Number,
	proficiencies : {
		armor: Array,
		weapon: Array,
		tools: Array,
		saving_throws: Array,
		skills: Array,
	}
	proficiency_bonus: Array,
	features: Array,
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
})

const Class = mongoose.model('Class', classSchema);

module.exports = Class;
