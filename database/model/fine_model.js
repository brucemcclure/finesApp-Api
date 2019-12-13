const mongoose = require('mongoose')
const FineSchema = require('../schema/fine_schema')

const FineModel = mongoose.model('fine', FineSchema)

module.exports = FineModel
