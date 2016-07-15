
exports.up = function(knex, Promise) {
	console.log('create users table')
	return knex.schema.createTableIfNotExists('users', function(table) {
		table.increments('id').primary()
		table.string('userName')
		table.string('password')
	})
  
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('users').then(function() {
		console.log('users table was dropped')
	})  
};