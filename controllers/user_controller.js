const UserModel = require('../database/model/user_model')

const create = async (req, res) => {
  let { firstName, surname, email } = req.body
  await UserModel.create({
    firstName,
    surname,
    email
  }).catch(err => res.status(500).send(err))
  res.redirect('/users')
}

const destroy = async (req, res) => {
  let { id } = req.params
  await UserModel.findByIdAndRemove(id).catch(err => res.status(500).send(err))
  res.redirect('/users')
}

const edit = async (req, res) => {
  let { id } = req.params
  let user = await UserModel.findById(id).catch(err =>
    res.status(500).send(err)
  )
  res.render('users/edit', { user })
}

const index = async (req, res) => {
  let users = await UserModel.find().catch(err => res.status(500).send(err))
  res.render('users/index', { users })
}

const make = (req, res) => {
  res.render('users/new')
}

const show = async (req, res) => {
  let { id } = req.params
  let user = await UserModel.findById(id).catch(err =>
    res.status(500).send(err)
  )
  res.render('users/show', { user })
}

const update = async (req, res) => {
  let { firstName, surname, email } = req.body
  let { id } = req.params
  await UserModel.findByIdAndUpdate(id, {
    firstName,
    surname,
    email
  }).catch(err => res.status(500).send(err))
  res.redirect(`/users/${id}`)
}

module.exports = {
  create,
  destroy,
  edit,
  index,
  make,
  show,
  update
}
