const mocha = require('mocha');
const assert = require('assert');
const MarioChar = require('../models/marioChar');

describe('Finding records', () => {
	var char;
	beforeEach((done) =>{
		char = new MarioChar({
			name:'Mario',
			weight: 50
		});

		char.save().then(() => {
			assert(char.isNew === false);
			done();
		});
		console.log(char._id);
	})
	
	it('Updates one record from the database', (done)=> {
		MarioChar.findOneAndUpdate({name: 'Mario'}, {name: 'Luigi'}).then(() => {
			MarioChar.findOne({name: 'Luigi'}).then((result) => {
				assert(result.name === 'Luigi', 'delets one record');
				done();
			});			
		});
	});

	it('Increments weight by 1', (done)=> {
		MarioChar.updateMany({}, {$inc: {weight: 1}}).then(() => {
			MarioChar.findOne({name: 'Mario'}).then((result) => {
				assert(result.weight === 51);
				done();
			});			
		});
	});
});

