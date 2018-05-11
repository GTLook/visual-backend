exports.seed = function(knex, Promise) {

  const tablesToClean = ['users','event_main','event_sub','data']

  return tablesToClean.reduce((acc, ele) => acc.then(() => knex(ele).del()), Promise.resolve())

};
