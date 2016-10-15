//Race schema
const mongoose = require('mongoose');

const featureSchema = new mongoose.Schema({
    name: { type: String, unique: true},
    type: { type: String }, //types will be bonus action, stat buff, etc  
    description: { type: String },
    bonus : { 
        type: { type: String },
        stat: { type: String },
        value:  { type: Number }
    },

})

const Feature = mongoose.model('Feature', featureSchema);

module.exports = Feature;