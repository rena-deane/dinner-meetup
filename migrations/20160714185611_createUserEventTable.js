
exports.up = function(knex, Promise) {
  
};

exports.down = function(knex, Promise) {
  
};



app.get('/create/', function(req, res){
    knex.schema.createTable('drivers', function (table) {
        table.increments('id').primary();
        table.string('name');
        table.dateTime('date');
        table.timestamps();
    }).then(function () {
        return knex.schema.createTable('cars',function(table){           
            table.increments('id').primary();
            table.string('car_name');         
        });
    }).then(function(){             
        return knex.schema.createTable('drivers_cars', function(table){
            table.increments().primary();
            table.integer('driverId',11).unsigned().references('id').inTable('drivers');
            table.integer('carId',11).unsigned().references('id').inTable('cars');
        });
    }).then(function(){
        res.send("saved");
    }).catch(function(err){
        res.status(500).send(err);
    });
});
