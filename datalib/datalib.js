var path = require('path')
var knex = require('knex')({
	client: 'sqlite3',
	connection: {
		filename: path.join(__dirname, '..', '/dev.sqlite3')
	}
})
var config = require('../knexfile.js')['development']

function getAll (table, callback) {
	knex.select('*')
	.from(table)
	.then(function(data) { 
		console.log('datalib.....', data)
	})
}

module.exports = {
	getAll: getAll
}