var users = require('../datastore/seed-users')

exports.seed = function(knex, Promise) {
  var userPromise = []
  users.forEach(function(user) {
    userPromise.push(createUser(knex, user))
  })
  return Promise.all(userPromise)
}

function createUser(knex, user) {
  return knex.table('users')
    .insert(user)
}



// exports.seed = function(knex, Promise) {
//   // Deletes ALL existing entries
//   return knex('users').del()
//     .then(function () {
//       return Promise.all([
//         // Inserts seed entries
//         knex('users').insert({userName: 'AAA', password: 'aaa'}),
//         knex('users').insert({userName: 'BBB', password: 'bbb'}),
//         knex('users').insert({userName: 'CCC', password: 'ccc'})
//       ]);
//     });
// };
