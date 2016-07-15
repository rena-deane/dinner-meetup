var knex = require('knex')
var config = require('../knexfile.js')['development']
console.log(config)

var test = require('tape')



test('testing dinner-meetup', function (t) {
  t.ok(true)
  t.end()
})
