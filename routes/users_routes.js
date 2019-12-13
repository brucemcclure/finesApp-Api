const express = require('express') // Requires in express
const router = express.Router() // Use the express router
const UserController = require('../controllers/user_controller')

router.get('/', UserController.index)

router.get('/new', UserController.make)

router.post('/', UserController.create)

module.exports = router
