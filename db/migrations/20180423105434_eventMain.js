const TABLE_NAME = 'eventMain'

exports.up = function(knex, Promise) {
  return knex.schema.createTable(TABLE_NAME, (table) => {
    table.increments()  // id serial primary key
    table.string('Event_name')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists(TABLE_NAME)
};
