const db = require('../../db')
const bcrypt = require('bcrypt-as-promised')
const userModel = require('./users')

//////////////////////////////////////////////////////////////////////////////
// Basic CRUD Methods
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
// Login
//
// 1. Check to see if user already exists
//   a. if not, return a 400 with appropriate error message
// 2. compare password in the database with the password provided by user
// 3. If the passwords do not match, respond with 401 Unauthorized
// 4. strip hashed password away from object
// 5. "return/continue" promise
//////////////////////////////////////////////////////////////////////////////

function login(username, password){
  let user

  // 1. Check to see if user already exists
  return userModel.getOneByUserName(username)
  .then((data) => {
    // 1a. if not, return a 400 with appropriate error message
    if(!data) throw { status: 400, message: "Bad Request"}

    // save user for later use
    user = data

    // 2. compare password in the database with the password provided by user
    return bcrypt.compare(password, data.password)
  })
  .catch(bcrypt.MISMATCH_ERROR, () => {
    // 3. If the passwords do not match, respond with 401 Unauthorized
    throw { status: 401, message: "Unauthorized"}
  })
  .then(() => {
    delete user.password  // 4. strip hashed password away from object
    return user  // 5. "return/continue" promise
  })
}

module.exports = {
  login
}
