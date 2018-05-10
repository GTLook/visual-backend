const dataModel = require('../models/data')

//////////////////////////////////////////////////////////////////////////////
// Basic CRUD Methods
//////////////////////////////////////////////////////////////////////////////

const getAll = (request, response, next) => {
  const limit = request.query.limit
  dataModel.getAll(limit)
  .then((data) => {
    response.status(200).json({ data })
  })
  .catch(next)
}
//
// const show = (request, response, next) => {
//   const id = request.params.id
//   const data = model.show(id)
//   response.status(200).json({ data })
// }

const createRow = (request, response, next) => {
  if(!request.body.user_id) return next({ status: 400, message: 'id Required'})
  dataModel.createRow(request.body.user_id)
  .then((data) => {return response.status(201).send({ data })})
  .catch(next)
}

const updateRow = (request, response, next) => {
  const body = request.body
  const id = request.params.id
  dataModel.updateRow(id, body)
  .then((data) => {
    response.status(200).json({ data })
  })
  .catch(next)
}

const deleteRow = (request, response, next) => {
  const id = request.params.id
  dataModel.deleteRow(id)
  .then((data) => {
    console.log(data);
    response.status(200).send({data})
  })
  .catch(next)
}

module.exports = { getAll, createRow, updateRow, deleteRow}
