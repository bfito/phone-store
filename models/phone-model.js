const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// This is a bit different than the excercise
const phoneSchema = new Schema({
  brand: {
    type: String,
    required: [true, 'The phone is required']
  },
  name:  {
    type: String,
    required: [true, 'The phone name is requried']
  },
  image: {
    type: String,
    default: ''
  },
  specs: {
    type: Array,
    default: []
  }
});

const Phone = mongoose.model('Phone', phoneSchema);

module.exports = Phone;
