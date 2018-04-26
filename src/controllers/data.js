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
    if(result.errors) return next({ status: 400, message: `Could not create new account`, errors: result.errors })
    response.status(201).json({ data: result })
  })
}

const updateRow = (request, response, next) => {
  const body = request.body
  const id = request.params.id
  dataModel.modify(id, body)
  .then((data) => {
    response.status(200).json({ data: result })
  })
}

// const remove = (request, response, next) => {
//   const id = request.params.id
//   const data = model.remove(id)
//   response.status(200).json({ data })
// }

//module.exports = { getAll, create, show, modify, remove }
module.exports = { getAll, createRow, updateRow }
