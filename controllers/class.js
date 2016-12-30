const Class = require('../models/char_class');
const ClassSchema = require('mongoose').model('Char_Class').schema;

const full_caster = {
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

const partial_caster = {
    level_one_spells: 	[0,0,2,3,3,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4],
    level_two_spells: 	[0,0,0,0,0,2,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
    level_three_spells: [0,0,0,0,0,0,0,0,0,2,2,3,3,3,3,3,3,3,3,3,3],
    level_four_spells: 	[0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,2,2,3,3,3,3],
    level_five_spells: 	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,2,2],
    level_six_spells: 	[],//
    level_seven_spells: [],//
    level_eight_spells: [], //
    level_nine_spells: 	[], //
}

const not_caster = {
    level_one_spells: 	[],
    level_two_spells: 	[],
    level_three_spells: [],
    level_four_spells: 	[],
    level_five_spells: 	[],
    level_six_spells: 	[],//
    level_seven_spells: [],//
    level_eight_spells: [], //
    level_nine_spells: 	[], //
}
/**
 * GET /
 * Class Make
 */
exports.get_class_make = (req, res, next) => {
    return res.render('class', {
        title: 'Home',
        data: JSON.stringify(ClassSchema)
  })
};

/**
 * POST /
 * Class Create
 */
exports.post_class_make = (req, res, next) => {
    //validation + sanitization
    req.checkBody('name').notEmpty()
    req.sanitizeBody('name').toString();

    const errors = req.validationErrors();

    if (errors) {
        req.flash('errors', errors);
        return res.redirect('/class/make');
    }
    
    //string to array and trim it!
    function trim_it(tobetrimmed) {
        tobetrimmed = tobetrimmed.split(",")
        for(let i = 0; i < tobetrimmed.length; i++){
            tobetrimmed[i] = tobetrimmed[i].trim();
        }
        return tobetrimmed
    }

    let features={}
    for (let i =0;i<20;i++){
        features[(i+1)] = trim_it(req.body['features.'+ (i+1)] )
    }

    let spells_slots;
    


    switch (req.body.caster_type) {
        case "Full":
            spells_slots = full_caster 
            break;
        case"Partial":
            spells_slots = partial_caster
            break;
        default:
            spells_slots = not_caster
            break;
    }

    console.log( trim_it(req.body['proficiencies.saving_throws']) )
    
    const char_class = new Class({
        name: req.body.name,
        hit_die: req.body.hit_die,
        proficiencies : {
            armor: trim_it(req.body['proficiencies.armor']),
            weapon: trim_it(req.body['proficiencies.weapon']),
            tools: trim_it(req.body['proficiencies.tools']),
            saving_throws: trim_it(req.body['proficiencies.saving_throws']),
            skills: trim_it(req.body['proficiencies.skills']),
        },        
        features: features,
        spell_slots:{
            cantrips_known: trim_it(req.body['spell_slots.cantrips_known']) || [],
            spells_known: trim_it(req.body['spell_slots.spells_known']) || [],
            level_one_spells: spells_slots.level_one_spells || [],
            level_two_spells: spells_slots.level_two_spells || [],
            level_three_spells: spells_slots.level_three_spells || [],
            level_four_spells: spells_slots.level_four_spells || [],
            level_five_spells: spells_slots.level_five_spells || [],
            level_six_spells: spells_slots.level_six_spells || [],
            level_seven_spells: spells_slots.level_seven_spells || [],
            level_eight_spells: spells_slots.level_eight_spells || [],
            level_nine_spells: spells_slots.level_nine_spells || [],
        }
        
    });

    Class.findOne({ name: req.body.name.toLowerCase() }, (err, existingUser) => {
        //check for errors or existing by the same name
        if (err) { return next(err); }
        if(existingUser) {
            req.flash('errors', { msg: 'Account with that email address already exists.' });
            return res.redirect('/race/make');
        }

        // No errors, no duplicates
        char_class.save((err) => {
            if (err) { return next(err); }
            req.flash('info', { msg: 'Success! Class Created' });
            res.redirect('/class/make');
        });
    })
};

/**
 * POST /
 * Class Create
 */
exports.post_class_list = (req, res, next) => {
    Class.find({}, (err, data) => {
        //check for errors or existing by the same name
        if (err) { return next(err); }
        if(data) {
            return res.send(data);
        }
    })
};