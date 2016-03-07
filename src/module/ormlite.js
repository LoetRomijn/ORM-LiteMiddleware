// ORM-Lite Middleware

var pg = require('pg');

var connectedUser;


function initialize(connectionString, onComplete){
	pg.connect(connectionString, function(err, client){
		if (err){
			throw err;
		}
		connectedUser = client;
		onComplete(client);
	});
}

function getAll(tableName, onComplete){
	var array;
	connectedUser.query('select * from ' + tableName + ';', function(err, result){
		if (err){
			throw err;
		}
		array = result.rows;
		onComplete(array);
	});
}

function findById(tableName, ID, onComplete){
 	var object;
 connectedUser.query('select * from ' + tableName + ' where id = ' + ID + ';', function(err, result){
 	if (err){
 		throw err;
 	}
 	object = result.rows;
 	onComplete(object);
 });
}


module.exports = {
	initialize: initialize,
	getAll: getAll,
	findById: findById
}





