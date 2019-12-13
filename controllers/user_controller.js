const UserModel = require('../database/model/fine_model')

const index = async (req, res) => {
  let users = await UserModel.find() // Extracting all the users from the DB
  res.render('users/index', { users }) // Render the 'author/index view' pass it the users
}

const make = (req, res) => {
  res.render('users/new')
}

const create = async (req, res) => {
  let { title, body, amount, person } = req.body // Destructuring off the body, amount and person from the req.body
  let fine = await UserModel.create({ title, body, amount, person }) // Creating the fine
    .catch(err => res.status(500).send(err))
  res.redirect('/users') // Redirect to /users
}

const destroy = async (req, res) => {
  let { id } = req.params // Destructure off the id off req.params
  await UserModel.findByIdAndRemove(id) // Delete the book by finding them by the id
  res.redirect('/users') // Redirect the user to the index page of all the books
}

module.exports = {
  index,
  make,
  create,
  destroy
}
