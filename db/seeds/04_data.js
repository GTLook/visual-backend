const TABLE_NAME = 'data'

exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex(TABLE_NAME).del()
    .then(() => {
      // Inserts seed entries
      return knex(TABLE_NAME).insert([
        {id: 1, user_id: 1, start_time:'2018-04-26 00:00:00', end_time:'2018-04-26 08:00:00', event_main_id:1, event_sub_id:1,event_comment:'starting operations!'},
        {id: 2, user_id: 1, start_time:'2018-04-26 08:00:00', end_time:'2018-04-26 10:00:00', event_main_id:1, event_sub_id:2,event_comment:'Running, all good'},
        {id: 3, user_id: 1, start_time:'2018-04-26 10:00:00', end_time:'2018-04-26 11:00:00', event_main_id:1, event_sub_id:3,event_comment:'normal operations'},
        {id: 4, user_id: 1, start_time:'2018-04-26 11:00:00', end_time:'2018-04-26 12:00:00', event_main_id:2, event_sub_id:4,event_comment:'normal operations'},
        {id: 5, user_id: 1, start_time:'2018-04-26 12:00:00', end_time:'2018-04-26 15:00:00', event_main_id:3, event_sub_id:5,event_comment:'normal operations'},
        {id: 6, user_id: 1, start_time:'2018-04-26 15:00:00', end_time:'2018-04-26 19:00:00', event_main_id:2, event_sub_id:6,event_comment:'normal operations'},
        {id: 7, user_id: 1, start_time:'2018-04-26 19:00:00', end_time:'2018-04-26 21:00:00', event_main_id:1, event_sub_id:7,event_comment:'normal operations'},
        {id: 8, user_id: 1, start_time:'2018-04-26 21:00:00', end_time:'2018-04-26 23:00:00', event_main_id:1, event_sub_id:8,event_comment:'normal operations'},
        {id: 9, user_id: 1, start_time:'2018-04-26 00:00:00', end_time:'2018-04-26 08:00:00', event_main_id:1, event_sub_id:1,event_comment:'starting operations!'},
        {id: 10, user_id: 1, start_time:'2018-04-26 08:00:00', end_time:'2018-04-26 10:00:00', event_main_id:1, event_sub_id:2,event_comment:'Running, all good'},
        {id: 11, user_id: 1, start_time:'2018-04-26 10:00:00', end_time:'2018-04-26 11:00:00', event_main_id:2, event_sub_id:3,event_comment:'normal operations'},
        {id: 12, user_id: 1, start_time:'2018-04-26 11:00:00', end_time:'2018-04-26 12:00:00', event_main_id:3, event_sub_id:4,event_comment:'normal operations'},
        {id: 13, user_id: 1, start_time:'2018-04-26 12:00:00', end_time:'2018-04-26 15:00:00', event_main_id:3, event_sub_id:5,event_comment:'normal operations'},
        {id: 14, user_id: 1, start_time:'2018-04-26 15:00:00', end_time:'2018-04-26 19:00:00', event_main_id:2, event_sub_id:6,event_comment:'normal operations'},
        {id: 15, user_id: 1, start_time:'2018-04-26 19:00:00', end_time:'2018-04-26 21:00:00', event_main_id:1, event_sub_id:7,event_comment:'normal operations'},
        {id: 16, user_id: 1, start_time:'2018-04-26 21:00:00', end_time:'2018-04-26 23:00:00', event_main_id:1, event_sub_id:8,event_comment:'normal operations'},
        {id: 17, user_id: 1, start_time:'2018-04-26 00:00:00', end_time:'2018-04-26 08:00:00', event_main_id:1, event_sub_id:1,event_comment:'starting operations!'},
        {id: 18, user_id: 1, start_time:'2018-04-26 08:00:00', end_time:'2018-04-26 10:00:00', event_main_id:1, event_sub_id:2,event_comment:'Running, all good'},
        {id: 19, user_id: 1, start_time:'2018-04-26 10:00:00', end_time:'2018-04-26 11:00:00', event_main_id:2, event_sub_id:3,event_comment:'normal operations'},
        {id: 20, user_id: 1, start_time:'2018-04-26 11:00:00', end_time:'2018-04-26 12:00:00', event_main_id:3, event_sub_id:4,event_comment:'normal operations'},
        {id: 21, user_id: 1, start_time:'2018-04-26 12:00:00', end_time:'2018-04-26 15:00:00', event_main_id:3, event_sub_id:5,event_comment:'normal operations'},
        {id: 22, user_id: 1, start_time:'2018-04-26 15:00:00', end_time:'2018-04-26 19:00:00', event_main_id:2, event_sub_id:6,event_comment:'normal operations'},
        {id: 23, user_id: 1, start_time:'2018-04-26 19:00:00', end_time:'2018-04-26 21:00:00', event_main_id:1, event_sub_id:7,event_comment:'normal operations'},
        {id: 24, user_id: 1, start_time:'2018-04-26 21:00:00', end_time:'2018-04-26 23:00:00', event_main_id:1, event_sub_id:8,event_comment:'normal operations'},
        {id: 25, user_id: 1, start_time:'2018-04-26 00:00:00', end_time:'2018-04-26 08:00:00', event_main_id:1, event_sub_id:1,event_comment:'starting operations!'},
        {id: 26, user_id: 1, start_time:'2018-04-26 08:00:00', end_time:'2018-04-26 10:00:00', event_main_id:1, event_sub_id:2,event_comment:'Running, all good'},
        {id: 27, user_id: 1, start_time:'2018-04-26 10:00:00', end_time:'2018-04-26 11:00:00', event_main_id:2, event_sub_id:3,event_comment:'normal operations'},
        {id: 28, user_id: 1, start_time:'2018-04-26 11:00:00', end_time:'2018-04-26 12:00:00', event_main_id:3, event_sub_id:4,event_comment:'normal operations'},
        {id: 29, user_id: 1, start_time:'2018-04-26 12:00:00', end_time:'2018-04-26 15:00:00', event_main_id:3, event_sub_id:5,event_comment:'normal operations'},
        {id: 30, user_id: 1, start_time:'2018-04-26 15:00:00', end_time:'2018-04-26 19:00:00', event_main_id:2, event_sub_id:6,event_comment:'normal operations'},
        {id: 31, user_id: 1, start_time:'2018-04-26 19:00:00', end_time:'2018-04-26 21:00:00', event_main_id:1, event_sub_id:7,event_comment:'normal operations'},
        {id: 32, user_id: 1, start_time:'2018-04-26 21:00:00', end_time:'2018-04-26 23:00:00', event_main_id:1, event_sub_id:8,event_comment:'normal operations'}
      ]);
    })
    .then(() => {
      // reset sequence
      return knex.raw(`SELECT setval('${TABLE_NAME}_id_seq', (SELECT MAX(id) FROM ${TABLE_NAME}));`)
    })
};
