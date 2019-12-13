const express = require('express') // Requires in express
const router = express.Router() // Use the express router
const UserController = require('../controllers/user_controller')

router.get('/', UserController.index)

router.get('/new', UserController.make)

router.post('/', UserController.create)

router.get('/:id', UserController.show)

router.get('/:id/edit', UserController.edit)

router.put('/:id', UserController.update)

router.patch('/:id', UserController.update)

router.delete('/:id', UserController.destroy)

module.exports = router
