const mongoose = require('mongoose');

before(done => {
	mongoose.connect('mongodb://localhost/labChen_test');
	mongoose.connection
	  .once('open', () => done())
	  .on('error', err => {
	  	console.warn('Warning', err);
	  });
});

// beforeEach(done => {
// 	//TODO: clean test database
// })  