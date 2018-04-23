const TABLE_NAME = 'eventSub'

exports.up = function(knex, Promise) {
  return knex.schema.createTable(TABLE_NAME, (table) => {
    table.increments()  // id serial primary key
    table.integer('eventMain_id').notNullable().references('eventMain.id')
    table.string('Event_name')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists(TABLE_NAME)
};
