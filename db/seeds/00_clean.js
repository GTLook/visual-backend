exports.seed = function(knex, Promise) {

  const tablesToClean = ['data','eventSub','eventMain','users']

  return tablesToClean.reduce((acc, ele) => acc.then(() => knex(ele).del()), Promise.resolve())

};
