
exports.up = function(knex, Promise) {
  return knex.schema.createTable('player', function (table){
    table.increments();
    table.string('first_name');
    table.string('last_name');
    table.string('position');
    table.integer('player_number');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('player');
};
