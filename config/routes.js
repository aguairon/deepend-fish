const router = require('express').Router()
const fishesController = require('../controllers/fishes')

router.route('/api/fishes')
  .get(fishesController.index)
  .post(fishesController.create)


module.exports = router
