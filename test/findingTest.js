const mocha = require('mocha');
const assert = require('assert');
const MarioChar = require('../models/marioChar');

describe('Finding records', () => {
	var char;
	beforeEach((done) =>{
		char = new MarioChar({
			name:'Mario'
		});

		char.save().then(() => {
			assert(char.isNew === false);
			done();
		});
		console.log(char._id);
	})
	
	it('Finds one record from the database', (done)=> {
		MarioChar.findOne({name: 'Mario'}).then((result) => {
			assert(result.name === 'Mario', 'sets correct name');
			done();
		});
	});

	it('Finds one record by ID from the database', (done)=> {
		MarioChar.findOne({_id: char._id}).then((result) => {
			assert(result._id.equals(char._id), 'sets correct ID');
			assert(result.name === 'Mario', 'sets correct name');
			done();
		}) .catch(function(err){ console.log(err)});
	});
});