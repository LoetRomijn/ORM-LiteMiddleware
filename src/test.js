var ormlite = require('./module/ormlite.js');

var connectionString = 'postgres://loet:@localhost:5432/loet_database'



ormlite.initialize(connectionString, function(connectedClient) {

	ormlite.getAll('test_user', function(array) {
		var data = array;
		console.log(array);
	});

	ormlite.findById('test_user', 1, function(object) {
		var moredata = object;
		console.log(object);
	});

});