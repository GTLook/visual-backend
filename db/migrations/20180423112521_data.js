const TABLE_NAME = 'data'

exports.up = function(knex, Promise) {
  return knex.schema.createTable(TABLE_NAME, (table) => {
    table.increments()  // id serial primary key
    table.integer('user_id').notNullable().references('users.id')
    table.timestamp('start_time').notNullable() //event time start
    table.timestamp('end_time') //event time end
    table.integer('eventMain_id').notNullable().references('eventMain.id')
    table.integer('eventSub_id').notNullable().references('eventSub.id')
    table.string('Event_comment')
    table.timestamps(true,true) //time changes and created
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists(TABLE_NAME)
};
