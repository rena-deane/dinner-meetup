var events = require('../datastore/seed-events')

exports.seed = function(knex, Promise) {
  var eventPromise = []
  events.forEach(function(event) {
    eventPromise.push(createEvent(knex, event))
  })
  return Promise.all(eventPromise)
}

function createEvent(knex, event) {
  return knex.table('events')
    .insert(event)
}
