const db = require('../../db')

//////////////////////////////////////////////////////////////////////////////
// Basic CRUD Methods
//////////////////////////////////////////////////////////////////////////////

const getAll = () => {
  return db('data')
}

const createRow = () => {
  // const errors = []
  //   let response
  //    if (!(body.user_id)) errors.push('user id Required')
  //   response = { errors }
  //   if (body.name && body.bankName && body.description) {
  //   accounts.push(account)
  //   response = account
  // }
  // fs.writeFileSync(filePath,JSON.stringify(accounts))
  // return response
}

const updateRow = () => {

}


module.exports = { getAll, createRow, updateRow }
