
let bard = {
	name:"Bard",
	hd: 12,
	armor:["light", "shields"],
	weapons:["simple", "martial"],
	tools: [],
	saving_throws: ["str", "con"],
	skills:{
		count: 2,
		list: [ "Animal Handling", "Athletics", "Intimidation", "Nature", "Perception", "Survival" ]
	},
	proficiency_bonus:[0,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6],
	features:[
		["Rage", "Unarmored Defense"], //1
		["Reckless Attack", "Danger Sense"], //2
		["Primal Path"], //3
		["Ability Score Improvement"], //4
		["Extra Attack", "Fast Movement"], //5
		["Path Feature"], //6
		["Feral Instinct"], //7
		["Ability Score Improvement"], //8
		["Brutal Critical"], //9
		["Path Feature"], //10
		["Relentless Rage"],  //11
		["Ability Score Improvement"], //12
		["Brutal Critical"], //13
		["Path Feature"], //14
		["Persistant Rage"], //15
		["Ability Score Improvement"], //16
		["Brutal Critical"], //17
		["Indomitable Might"], //18
		["Ability Score Improvement"], //19
		["Primal Champion"], //20
	],
	spells:{
		can_use: true,
		type: "bard",
		cantrips_known: 	[0,2,2,2,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4,4],//
		spells_known: 		[0,4,5,6,7,8,9,10,11,12,14,15,15,16,18,19,19,20,22,22,22],//
		level_one_spells: 	[0,2,3,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4],//
		level_two_spells: 	[0,0,0,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],//
		level_three_spells: [0,0,0,0,0,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],//
		level_four_spells: 	[0,0,0,0,0,0,0,1,2,3,3,3,3,3,3,3,3,3,3,3,3],//
		level_five_spells: 	[0,0,0,0,0,0,0,0,0,1,2,2,2,2,2,2,2,2,3,3,3],//
		level_six_spells: 	[0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,2,2],//
		level_seven_spells: [0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,2],//
		level_eight_spells: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1], //
		level_nine_spells: 	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1], //
	}
	
}

let elf = {
	name: "High Elf",
	stat_bonus: {
		stat: ["dex", "int"],
		value: [2,1]
	},
	age: 90,
	size: "medium",
	speed: 30,
	features: ["Darkvision", "Keen Senses", "Fey Ancestry", "Trance", "Elf Weapon Training", "Cantrip", "Extra Language"],
	languages: ["Common", "Elvish"]
}

let player_input={
	str: 10,
	dex: 10,
	con: 10,
	wis: 10,
	int: 10,
	cha: 10,
	race: elf,
	class: [
		{
			type: bard,
			level: 1
		}
	],
	name:"Trogdor",
	cantrips:["Light", "Dancing Candles"],
	spell_list: [
		["Light", "Dancing Candles"],
		["Magic Missile", "Burning Hands"]
	]
}

function char_sheet(input) {
	let final={};
	//calculate char ecl
	let ecl=0
	final.class=[]
	final.spells=[]

	//loop through classes
	for (let i =0;i < input.class.length;i++){
		//ecl
		ecl += input.class[i].level 
		//class
		final.class.push(input.class[i])
		//spells
		if(input.class[i].type.spells.can_use){
			let spelltype = {
				cantrips_known: 	input.class[i].type.spells.cantrips_known[input.class[i].level],
				spells_known: 		input.class[i].type.spells.spells_known[input.class[i].level],
				level_one_spells: 	input.class[i].type.spells.level_one_spells[input.class[i].level],
				level_two_spells: 	input.class[i].type.spells.level_two_spells[input.class[i].level],
				level_three_spells: input.class[i].type.spells.level_three_spells[input.class[i].level],
				level_four_spells: 	input.class[i].type.spells.level_four_spells[input.class[i].level],
				level_five_spells: 	input.class[i].type.spells.level_five_spells[input.class[i].level],
				level_six_spells: 	input.class[i].type.spells.level_six_spells[input.class[i].level],
				level_seven_spells: input.class[i].type.spells.level_seven_spells[input.class[i].level],
				level_eight_spells: input.class[i].type.spells.level_eight_spells[input.class[i].level],
				level_nine_spells: 	input.class[i].type.spells.level_nine_spells[input.class[i].level]
			}
			//spelltype
			final.spells.push(spelltype)
		}
	}
	//add spells, limited by spell count
	final.spell_list = inputspell_list;
	
	//char name
	final.name=input.name;
	//stats
	final.str = input.str
	final.dex = input.dex
	final.con = input.con
	final.wis = input.wis
	final.int = input.int
	final.cha = input.cha
	//race
	final.race=input.race.name
	//add race bonus
	for (let i=0;i< input.race.stat_bonus.stat.length;i++){
		switch (input.race.stat_bonus.stat[i]) {
			case "str": 
				final.str = input.str + input.race.stat_bonus.value[i]
				break;
			case "dex": 
				final.dex = input.dex + input.race.stat_bonus.value[i]
				break;
			case "con": 
				final.con = input.con + input.race.stat_bonus.value[i]
				break;
			case "wis": 
				final.wis = input.wis + input.race.stat_bonus.value[i]
				break;
			case "int": 
				final.int = input.int + input.race.stat_bonus.value[i]
				break;
			case "cha": 
				final.cha = input.cha + input.race.stat_bonus.value[i]
				break;
		}
	}
	

	//return final stats
	return final
}

console.log(char_sheet(player_input))