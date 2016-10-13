//Race schema

const raceSchema = new mongoose.Schema({
	name: { type: String, unique: true },
	stat_bonus: type: Number,
	age: {type: Number, min:0, max:500}
	size: string,
	features: Array,
	languages: Array
})

const Race = mongoose.model('Race', raceSchema);

module.exports = Race;
