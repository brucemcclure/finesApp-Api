const FineModel = require('../database/model/fine_model')

const index = async (req, res) => {
  let fines = await FineModel.find() // Extracting all the fines from the DB
  res.render('fines/index', { fines }) // Render the 'author/index view' pass it the fines
}

const make = (req, res) => {
  res.render('fines/new')
}

const create = async (req, res) => {
  let { title, body, amount, person } = req.body // Destructuring off the body, amount and person from the req.body
  let fine = await FineModel.create({ title, body, amount, person }) // Creating the fine
    .catch(err => res.status(500).send(err))
  res.redirect('/fines') // Redirect to /fines
}

const destroy = async (req, res) => {
  let { id } = req.params // Destructure off the id off req.params
  await FineModel.findByIdAndRemove(id) // Delete the book by finding them by the id
  res.redirect('/fines') // Redirect the user to the index page of all the books
}

module.exports = {
  index,
  make,
  create,
  destroy
}
