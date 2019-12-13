const express = require('express') // Requires in express
const router = express.Router() // Use the express router
const FineController = require('../controllers/fine_controller')

router.get('/', FineController.index)

router.get('/new', FineController.make)

router.post('/', FineController.create)

router.get('/:id', FineController.show)

router.get('/:id/edit', FineController.edit)

router.patch('/:id', FineController.update)

router.put('/:id', FineController.update)

router.delete('/:id', FineController.destroy)

module.exports = router
