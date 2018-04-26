const express = require('express')
const router = express.Router()
const dataController = require('../controllers/data')

//////////////////////////////////////////////////////////////////////////////
// Basic CRUD Methods
//////////////////////////////////////////////////////////////////////////////

//router.post('/', dataController.create)
router.get('/', dataController.getAll)
router.post('/id', dataController.updateRow)
router.post('/', dataController.createRow)

module.exports = router
