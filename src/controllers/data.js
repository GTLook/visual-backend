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
  dataModel.create(request.body)
  .then((data) => {
    response.status(201).json({ data: result })
  })
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

// const remove = (request, response, next) => {
//   const id = request.params.id
//   const data = model.remove(id)
//   response.status(200).json({ data })
// }

module.exports = { getAll, createRow, updateRow }
