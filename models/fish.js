const mongoose = require('mongoose')


const fishSchema = new mongoose.Schema({
  name: {type: 'String', required: true},
  image: {type: 'String', required: true}
})

module.exports = mongoose.model('Fish', fishSchema)
