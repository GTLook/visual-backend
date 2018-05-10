const db = require('../../db')

//////////////////////////////////////////////////////////////////////////////
// Basic CRUD Methods
//////////////////////////////////////////////////////////////////////////////

const getAll = () => {
  return db('data')
  .select(
    'data.id as id',
    'users.username as username',
    'data.start_time as Start',
    'data.end_time as End',
    'data.event_comment as Comment',
    'event_main.event_name as Main',
    'event_sub.event_name as Secondary')
  .leftJoin('event_main','event_main.id','data.event_main_id')
  .leftJoin('event_sub','event_sub.id','data.event_sub_id')
  .join('users','users.id','data.user_id')
  .orderBy('data.id')
}

const createRow = (user_id) => {
   return db('data')
  .insert({ user_id })
  .returning('*')
}

const updateRow = (id, body) => {
  console.log(id, body)
  if(body.element === 'Comment'){
    return db('data').update({event_comment: body.data}).where({id}).returning('*').then(([data]) => {
      return data.event_comment
    })
  }
  if(body.element === 'Main'){
    return db('data').update({event_main_id: body.data}).where({id}).returning('*').then(([data]) => {
      return data.event_comment
    })
  }
  if(body.element === 'Secondary'){
    return db('data').update({event_sub_id: body.data}).where({id}).returning('*').then(([data]) => {
      return data.event_comment
    })
  }
  return Promise.reject({message: 'property does not exists'})
}

const deleteRow = (id) => {
  return db('data')
    .where('data.id', id)
    .delete()
}


module.exports = { getAll, createRow, updateRow, deleteRow }
