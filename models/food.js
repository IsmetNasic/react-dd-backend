const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const foodSchema = new Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  size: [{
    name: { type: String, required: true },
    price: { type: Number, required: true }
  }],
  topping: [{
    name: { type: String, required: true },
    price: { type: Number, required: true }
  }],
  creator: { type: mongoose.Types.ObjectId, required: true, ref: 'Restaurant' }
});


module.exports = mongoose.model('Food', foodSchema);