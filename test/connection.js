const mongoose = require('mongoose');

//ES6 Promise
mongoose.Promise = global.Promise;



before((done) => {
	mongoose.connect('mongodb://localhost/testaroo', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false});
	mongoose.connection.once('open', () => {
		console.log('Connected to mongoose',);
		done();
	}).on('error', (err)=>{
		console.log('Error: ', error);
	});	
});

beforeEach((done) => {
	mongoose.connection.collections.mariochars.drop(() => {
		done();
	})
});