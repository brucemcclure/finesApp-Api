const mongoose = require('mongoose') // Require in mongoose
const Schema = mongoose.Schema // Pull the Schema off of mongoose

// Creating the Fine schema from Schema
// Notice the required, default and enum options

const FineSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  person: {
    type: String,
    enum: ['matt', 'mark', 'luke']
  }
})

module.exports = FineSchema // Dont forget to export the Fine Schema
