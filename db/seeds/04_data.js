const TABLE_NAME = 'data'

exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex(TABLE_NAME).del()
    .then(() => {
      // Inserts seed entries
      return knex(TABLE_NAME).insert([
        {id: 1, user_id: 1, start_time:'2018-04-26 00:00:00', end_time:'2018-04-26 08:00:00', event_main_id:1, event_sub_id:1,event_comment:null},
        {id: 2, user_id: 1, start_time:'2018-04-26 08:00:00', end_time:'2018-04-26 10:00:00', event_main_id:2, event_sub_id:2,event_comment:'Starting up'},
        {id: 3, user_id: 1, start_time:'2018-04-26 10:00:00', end_time:'2018-04-26 11:00:00', event_main_id:2, event_sub_id:3,event_comment:'Starting up'},
        {id: 4, user_id: 1, start_time:'2018-04-26 11:00:00', end_time:'2018-04-26 12:00:00', event_main_id:3, event_sub_id:4,event_comment:'Starting up'},
        {id: 5, user_id: 1, start_time:'2018-04-26 12:00:00', end_time:'2018-04-26 15:00:00', event_main_id:3, event_sub_id:5,event_comment:'Starting up'},
        {id: 6, user_id: 1, start_time:'2018-04-26 15:00:00', end_time:'2018-04-26 19:00:00', event_main_id:2, event_sub_id:6,event_comment:'Starting up'},
        {id: 7, user_id: 1, start_time:'2018-04-26 19:00:00', end_time:'2018-04-26 21:00:00', event_main_id:1, event_sub_id:7,event_comment:'Starting up'},
        {id: 8, user_id: 1, start_time:'2018-04-26 21:00:00', end_time:'2018-04-26 23:00:00', event_main_id:1, event_sub_id:8,event_comment:'Starting up'}
      ]);
    })
    .then(() => {
      // reset sequence
      return knex.raw(`SELECT setval('${TABLE_NAME}_id_seq', (SELECT MAX(id) FROM ${TABLE_NAME}));`)
    })
};
