
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('events').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('events').insert({eventName: 'Apache', ownerUserId: '1'}),
        knex('events').insert({eventName: 'Baobab', ownerUserId: '2'}),
        knex('events').insert({eventName: 'Charley Noble', ownerUserId: '3'}),
        knex('events').insert({eventName: 'Ancestral', ownerUserId: '1'}),
        knex('events').insert({eventName: 'Chow', ownerUserId: '3'}),
      ]);
    });
};
