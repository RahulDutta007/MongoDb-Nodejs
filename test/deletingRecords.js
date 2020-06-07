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
	
	it('Deletes one record from the database', (done)=> {
		MarioChar.findOneAndRemove({name: 'Mario'}).then(() => {
			MarioChar.findOne({name: 'Mario'}).then((result) => {
				assert(result === null, 'delets one record');
				done();
			});			
		});
	});

	
});

