exports.seed = function(knex, Promise) {

  const tablesToClean = ['users','eventMain','eventSub','data']

  return tablesToClean.reduce((acc, ele) => acc.then(() => knex(ele).del()), Promise.resolve())

};
