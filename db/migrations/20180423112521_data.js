const TABLE_NAME = 'data'

exports.up = function(knex, Promise) {
  return knex.schema.createTable(TABLE_NAME, (table) => {
    table.increments()  // id serial primary key
    table.integer('user_id').notNullable().references('users.id')
    table.timestamp('start_time') //event time start
    table.timestamp('end_time') //event time end
    table.integer('event_main_id').references('event_main.id')
    table.integer('event_sub_id').references('event_sub.id')
    table.string('event_comment')
    table.timestamps(true,true) //time changes and created
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists(TABLE_NAME)
};
