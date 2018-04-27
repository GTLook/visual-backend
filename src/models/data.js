const db = require('../../db')

//////////////////////////////////////////////////////////////////////////////
// Basic CRUD Methods
//////////////////////////////////////////////////////////////////////////////

const getAll = () => {
  return db('data')
  .select('data.id as id',
  'data.start_time as Start',
  'data.end_time as End',
  'data.event_comment as Comment',
  'event_main.event_name as Main',
  'event_sub.event_name as Secondary')
  .join('event_main','event_main.id','data.event_main_id')
  .join('event_sub','event_sub.id','data.event_sub_id')
  .orderBy('data.id')
}

const createRow = (id, body) => {
  db('data')
  .insert({ id, start_time, end_time, comment, event_main, event_sub })
  .returning('*')
}

const updateRow = (id, body) => {
  // const obj = .find(ele => ele.id === id)
  // obj.data.name = body
  //.
  // return obj
  console.log(id, body)
  if(body.element === 'Comment'){
    return db('data').update({event_comment: body.data}).where({id}).returning('*').then(([data]) => {
      return data.event_comment
    })
  }
  return Promise.reject({message: 'property does not exists'})
}


module.exports = { getAll, createRow, updateRow }
