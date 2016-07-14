
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('attendingEvents').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('attendingEvents').insert({id: 1, userId: 1, eventId: 2}),
        knex('attendingEvents').insert({id: 2, userId: 1, eventId: 3}),
        knex('attendingEvents').insert({id: 3, userId: 2, eventId: 3}),
        knex('attendingEvents').insert({id: 4, userId: 2, eventId: 1}),
        knex('attendingEvents').insert({id: 5, userId: 3, eventId: 4}),
        knex('attendingEvents').insert({id: 6, userId: 3, eventId: 1}),
        knex('attendingEvents').insert({id: 7, userId: 4, eventId: 5}),
        knex('attendingEvents').insert({id: 8, userId: 4, eventId: 3}),
        knex('attendingEvents').insert({id: 9, userId: 5, eventId: 5}),
        knex('attendingEvents').insert({id: 10, userId: 5, eventId: 1})
      ]);
    });
};
