exports.up = function(knex, Promise) {
	console.log('create attendingEvents many-to-many table')
	return knex.schema.createTableIfNotExists('attendingEvents', function(table) {
		table.increments('id').primary()
		table.integer('userId').references('id').inTable('users')
		table.integer('eventId').references('id').inTable('events')
	})  
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('attendingEvents').then(function() {
		console.log('attendingEvents table was dropped')
	})  
};