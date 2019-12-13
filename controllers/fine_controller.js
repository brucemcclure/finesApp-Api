const FineModel = require('../database/model/fine_model')

const create = async (req, res) => {
  let { title, body, amount, person } = req.body
  await FineModel.create({
    title,
    body,
    amount,
    person
  }).catch(err => res.status(500).send(err))
  res.redirect('/fines')
}

const destroy = async (req, res) => {
  let { id } = req.params
  await FineModel.findByIdAndRemove(id)
  res.redirect('/fines')
}

const edit = async (req, res) => {
  let { id } = req.params
  let fine = await FineModel.findById(id).catch(err =>
    res.status(500).send(err)
  )
  res.render('fines/edit', { fine })
}

const index = async (req, res) => {
  let fines = await FineModel.find().catch(err => res.status(500).send(err))
  res.render('fines/index', { fines })
}

const make = (req, res) => {
  res.render('fines/new')
}

const show = async (req, res) => {
  let { id } = req.params
  let fine = await FineModel.findById(id).catch(err =>
    res.status(500).send(err)
  )
  res.render('fines/show', { fine })
}

const update = async (req, res) => {
  let { title, body, amount, person } = req.body
  let { id } = req.params
  await FineModel.findByIdAndUpdate(id, {
    title,
    body,
    amount,
    person
  }).catch(err => res.status(500).send(err))
  res.redirect(`/fines/${id}`)
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
