const mocha = require('mocha');
const assert = require('assert');
const MarioChar = require('../models/marioChar');

describe('Saving records', () => {
	
	it('Saves a record to the database', (done)=> {
		var char = new MarioChar({
			name:'Mario'
		});

		char.save().then(() => {
			assert(char.isNew === false);
			done();
		});
	});
});