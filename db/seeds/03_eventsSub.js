const TABLE_NAME = 'eventSub'

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex(TABLE_NAME).del()
    .then(function () {
      // Inserts seed entries
      return knex(TABLE_NAME).insert([
        {id: 1, name: 'Starting up', eventMain_id: 1},
        {id: 2, name: 'Running', eventMain_id: 1},
        {id: 3, name: 'Slowing Down', eventMain_id: 1},
        {id: 4, name: 'Maintenece', eventMain_id: 2},
        {id: 5, name: 'Starting back up', eventMain_id: 2},
        {id: 6, name: 'Failed', eventMain_id: 3},
        {id: 7, name: 'Sucsess', eventMain_id: 3},
        {id: 8, name: 'Waiting on materials', eventMain_id: 3},
        {id: 9, name: 'Waiting on customer', eventMain_id: 3}
      ]);
    })
    .then(() => {
      // reset sequence
      return knex.raw(`SELECT setval('${TABLE_NAME}_id_seq', (SELECT MAX(id) FROM ${TABLE_NAME}));`)
    })
};
