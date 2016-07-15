exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('events', function(table){
      table.string('venue');
      table.string('description');
      table.date('eventDate');
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('events', function(table){
      table.dropColumn('venue');
      table.dropColumn('description');
      table.dropColumn('date');
    })
  ])
};
