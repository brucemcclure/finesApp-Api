const mongoose = require('mongoose')
const UserSchema = require('../schema/user_schema')

const UserModel = mongoose.model('user', UserSchema)

module.exports = UserModel
