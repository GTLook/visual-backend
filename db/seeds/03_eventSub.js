const TABLE_NAME = 'event_sub'

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex(TABLE_NAME).del()
    .then(function () {
      // Inserts seed entries
      return knex(TABLE_NAME).insert([
        {id: 1, event_name: 'Starting up', event_main_id: 1},
        {id: 2, event_name: 'Running', event_main_id: 1},
        {id: 3, event_name: 'Slowing Down', event_main_id: 1},
        {id: 4, event_name: 'Maintenece', event_main_id: 2},
        {id: 5, event_name: 'Starting back up', event_main_id: 2},
        {id: 6, event_name: 'Failed', event_main_id: 3},
        {id: 7, event_name: 'Sucsess', event_main_id: 3},
        {id: 8, event_name: 'Waiting on materials', event_main_id: 3},
        {id: 9, event_name: 'Waiting on customer', event_main_id: 3}
      ]);
    })
    .then(() => {
      // reset sequence
      return knex.raw(`SELECT setval('${TABLE_NAME}_id_seq', (SELECT MAX(id) FROM ${TABLE_NAME}));`)
    })
};
