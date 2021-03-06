const userModel = require('../models/users')

//////////////////////////////////////////////////////////////////////////////
// Basic CRUD Methods
//////////////////////////////////////////////////////////////////////////////

const createUser = (req, res, next) => {
  if(!req.body.username) return next({ status: 400, message: 'Bad username'})
  if(!req.body.password) return next({ status: 400, message: 'Bad username'})

  userModel.create(req.body.username, req.body.password)
  .then((data) => {return res.status(201).send({ data })})
  .catch(next)
}

//////////////////////////////////////////////////////////////////////////////
// Quality of Life functions
//////////////////////////////////////////////////////////////////////////////

module.exports = {
  createUser
}
