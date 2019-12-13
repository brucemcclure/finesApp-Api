const express = require('express') // Require in express
const router = express.Router() // Config express to use the built in router
const finesRoutes = require('./fines_routes') // Require in auth_routes as authorRoutes
const usersRoutes = require('./users_routes') // Require in users_routes as authorRoutes

router.use('/fines', finesRoutes)
router.use('/users', usersRoutes)

module.exports = router
