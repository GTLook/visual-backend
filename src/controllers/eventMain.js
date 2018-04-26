const eventMainModel = require('../models/eventMain')

//////////////////////////////////////////////////////////////////////////////
// Basic CRUD Methods
//////////////////////////////////////////////////////////////////////////////

const getAll = (request, response, next) => {
  const limit = request.query.limit
  eventMainModel.getAll(limit)
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
//
// const create = (request, response, next) => {
//   const result = model.create(request.body)
//   if (result.errors) return next({ status: 400, message: `Could not create new account`, errors: result.errors })
//   response.status(201).json({ data: result })
// }
//
// const modify = (request, response, next) => {
//   const body = request.body
//   const id = request.params.id
//   const data = model.modify(id, body)
//   response.status(200).json({ data })
// }
//
// const remove = (request, response, next) => {
//   const id = request.params.id
//   const data = model.remove(id)
//   response.status(200).json({ data })
// }

//module.exports = { getAll, create, show, modify, remove }
module.exports = { getAll }
