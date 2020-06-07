const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create Schema and model

//schema
const MarioCharSchema = new Schema({
	name: String,
	weight: Number
});

//model
const MarioChar = mongoose.model('mariochar', MarioCharSchema);

module.exports = MarioChar;