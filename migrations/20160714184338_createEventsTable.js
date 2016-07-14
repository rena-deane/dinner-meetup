exports.up = function(knex, Promise) {
	console.log('create events table')
	return knex.schema.createTableIfNotExists('events', function(table) {
		table.increments('id').primary()
		table.string('eventName')
		table.integer('ownerUserId')
	})
  
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('events').then(function() {
		console.log('events table was dropped')
	})  
};