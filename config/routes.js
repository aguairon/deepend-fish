const router = require('express').Router()
const fishesController = require('../controllers/fishes')

router.route('/fishes')
  .get(fishesController.index)
  .post(fishesController.create)

router.route('/fishes/:id')
  .get(fishesController.show)

module.exports = router
