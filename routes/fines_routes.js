const express = require('express') // Requires in express
const router = express.Router() // Use the express router
const FineController = require('../controllers/fine_controller')

router.get('/', FineController.index)

router.get('/new', FineController.make)

router.post('/', FineController.create)

module.exports = router
