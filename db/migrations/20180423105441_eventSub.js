const TABLE_NAME = 'event_sub'

exports.up = function(knex, Promise) {
  return knex.schema.createTable(TABLE_NAME, (table) => {
    table.increments()  // id serial primary key
    table.string('event_name')
    table.integer('event_main_id').notNullable().references('event_main.id')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists(TABLE_NAME)
};
