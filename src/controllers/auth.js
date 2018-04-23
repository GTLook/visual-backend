const authModel = require('../models/auth')
const jwt = require('jsonwebtoken')

//////////////////////////////////////////////////////////////////////////////
// Basic CRUD Methods
//////////////////////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////////////////////////
// Login Controller
//
// 1. Make sure that request is good
// 2. Attempt Login
// 3. Create token
// 4. Send back token
//////////////////////////////////////////////////////////////////////////////
const login = (req, res, next) => {
  // 1. Make sure that request is good
  if(!req.body.username) return next({ status: 400, message: 'Bad request'})
  if(!req.body.password) return next({ status: 400, message: 'Bad request'})

  // 2. Attempt Login
  authModel.login(req.body.username, req.body.password)
  .then((user) => {

    // 3. Create token
    const token = jwt.sign({id: user.id}, process.env.SECRET)

    // 4. Send back token
    return res.status(200).send({ token })
  })
  .catch(next)
}

const getAuthStatus = (req, res, next) => res.status(200).send({id:req.claim.id})

//////////////////////////////////////////////////////////////////////////////
// Quality of Life functions
//////////////////////////////////////////////////////////////////////////////

const isAuthenticated = (req, res, next) => {
  //if user is not authenticated return error to user
  if(!req.headers.authorization) return next({ status: 401, message: 'Unauthorized' })
  const [scheme, credentials] = req.headers.authorization.split(' ')
  //verify users token
  jwt.verify(credentials, process.env.SECRET, (err, payload)=>{
    if(err) return next({ status: 401, message: 'Unauthorized' })
    req.claim = payload
    next()
  })
}

const isSelf = (req, res, next) => {
  if(parseInt(req.params.userId) !== req.claim.id) return next({ status: 401, message: 'Unauthorized' })
  next()
}

module.exports = {
  login,
  getAuthStatus,
  isAuthenticated,
  isSelf
}
