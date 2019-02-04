const Fish = require('../models/fish')

function indexRoute(req, res) {
  const {fields, ...query } = req.query
  const fieldsArray = fields ? fields.split(',') : []
  Fish
    .find(query, fieldsArray)
    .then(fish => res.status(200).json(fish))
    .catch(err => console.log(err.message))
}

function createRoute(req, res) {
  Fish
    .create(req.body)
    .then(fish => res.status(201).json(fish))
    .catch(err => console.log(err.message))
}

function showRoute(req, res) {
  Fish
    .findById(req.params.id)
    .then(fish => res.status(200).json(fish))
    .catch(err => res.status(404).json(err))
}

module.exports = {
  index: indexRoute,
  create: createRoute,
  show: showRoute
}
