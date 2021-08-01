const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const orderSchema = new Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },
  foodOrder: [{}],
  total: { type: String, required: true },
});

module.exports = mongoose.model('Order', orderSchema);